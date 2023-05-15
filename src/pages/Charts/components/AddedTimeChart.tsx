import React, {useState} from 'react';
import {ChartData, ChartProps, Range, salesCountColumnChartProps} from './common';
import ColumnChart from "./ColumnChart";
import ReactECharts from 'echarts-for-react';
import {Modal} from "antd";


const Chart: React.FC<ChartProps> = ((props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const monthMill = 60 * 60 * 24 * 30 * 1000
  const ranges: Range[] = [
    {min: 0, max: monthMill - 1, title: '一个月'},
    {min: monthMill, max: monthMill * 3 - 1, title: '3个月'},
    {min: monthMill * 3, max: monthMill * 6 - 1, title: '半年'},
    {min: monthMill * 6, max: monthMill * 12 - 1, title: '1年'},
    {min: monthMill * 12, max: monthMill * 18 - 1, title: '1年半'},
    {min: monthMill * 18, max: monthMill * 24 - 1, title: '2年'},
    {min: monthMill * 24, max: monthMill * 30 - 1, title: '2年半'},
    {min: monthMill * 30, max: monthMill * 36 -1, title: '3年'},
    {min: monthMill * 36, title: '3年以上'},
  ]

  const datamap = new Map<Range, ChartData>()
  ranges.forEach((i => datamap.set(i, {})))

  const metaData = props.data
  let totalSalesVolume = 0
  metaData.forEach(v => {
    let salesCount = v['近30天销量']
    totalSalesVolume += salesCount
  })
  const nowt = Date.now()
  metaData.forEach(v => {
    for (let [key, value] of datamap) {
      let salesCount = nowt - v['timestamp']
      if (
        (key.min === key.max && key.min == salesCount) ||
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
          value.salesRange = key.title
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
        name: '价格($)',
        nameLocation: 'start',
        nameGap: 40,
        type: 'category',
        data: ranges.map(k => k.title),
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
