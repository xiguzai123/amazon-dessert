import React, {useState} from 'react';
import {ChartData, ChartProps, Range, salesCountColumnChartProps} from './common';
import ColumnChart from "./ColumnChart";
import ReactECharts from 'echarts-for-react';
import {Modal} from "antd";

const salesRatioFormat = (r: Range) => {
  if (r.min === r.max) return `${r.min}`
  return r.max !== undefined ? `${r.min}-${r.max}` : `${r.min}+`
}

const Chart: React.FC<ChartProps> = ((props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ranges: Range[] = [
    {min: 0, max: 0},
    {min: 1, max: 49},
    {min: 50, max: 99},
    {min: 100, max: 499},
    {min: 500, max: 999},
    {min: 1000, max: 4999},
    {min: 5000, max: 9999},
    {min: 10000},
  ]

  const datamap = new Map<Range, ChartData>()
  ranges.forEach((i => datamap.set(i, {})))

  const metaData = props.data
  let totalSalesVolume = 0
  metaData.forEach(v => {
    let salesCount = v['近30天销量']
    totalSalesVolume += salesCount
  })
  metaData.forEach(v => {
    for (let [key, value] of datamap) {
      let salesCount = v['评分数']
      if ((key.min === key.max && key.min == salesCount) ||
        ((key.min !== undefined && key.max !== undefined) && key.min <= salesCount && key.max >= salesCount) ||
        ((key.min !== undefined && key.max === undefined) && key.min <= salesCount)
      ) {
        if (!value.list) {
          value.list = []
        }
        value.list[value.list.length] = v
        if (!value.productCount) {
          value.productCount = 0
        }
        value.productCount++
        if (!value.salesRange) {
          value.salesRange = salesRatioFormat(key)
        }
        let groupCount = 0
        value.list.forEach(v => {
          let vol = v['近30天销量']
          groupCount += vol
        })
        value['salesCount'] = groupCount
        value.salesRatio = Number((groupCount / totalSalesVolume * 100).toFixed(2))
      }

    }
  })
  console.log(`总销量 ${totalSalesVolume}`)

  const data = Array.from(datamap.values())
  const [colChartData, setColChartData] = useState(new Array<any>())

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        // magicType: { show: true, type: ['line', 'bar'] },
        restore: {show: true},
        saveAsImage: {show: true},
        // brush: { show: true }
      }
    },
    legend: {data: ['产品数量', '销量占比']},
    dataZoom: [{type: 'inside'}, {type: 'slider'}],
    xAxis: [
      {
        name: '评分数',
        nameLocation: 'start',
        nameGap: 40,
        type: 'category',
        data: ranges.map(salesRatioFormat),
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '产品数量',
      },
      {
        type: 'value',
        name: '销量占比',
        axisLabel: {
          formatter: '{value} %'
        }
      }
    ],
    dataset: {source: data},
    series: [
      {
        name: '产品数量',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value1) {
            return value1;
          }
        },
        encode: {x: 'salesRange', y: 'productCount'}
      },
      {
        name: '销量占比',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value1) {
            return value1 + ' %';
          }
        },
        encode: {x: 'salesRange', y: 'salesRatio'}
      }
    ]
  }
  const onClick = (param, echarts) => {
    console.log(param, echarts)
    setColChartData(param.value.list)
    openModal()
  }

  const colprops = {
    ...salesCountColumnChartProps(),
    data: colChartData
  }

  return <>
    <ReactECharts option={option}
                  onChartReady={() => console.log('echarts ready ok')}
                  onEvents={{
                    'click': onClick
                  }}/>
    <Modal footer={null} maskClosable={false}
           title='商品列表' width={1200} open={isModalOpen} onCancel={closeModal}
           afterOpenChange={(open) => {
           }}>
      <ColumnChart {...colprops}/>
    </Modal>
  </>
    ;
});

export default Chart;
