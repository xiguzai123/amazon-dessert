import React, {memo, useState} from 'react';
// import {DualAxes} from '@ant-design/plots';
import {ChartProps} from '../common';
import ColumnChart from "./components/ColumnChart";
import ReactECharts from 'echarts-for-react';

type Range = {
  min: number
  max?: number
}

export type ChartData = {
  salesRange?: string
  productCount?: number
  salesRatio?: number
  salesCount?: number,
  list?: any[]
}

const salesRatioFormat = (r: Range) => {
  return r.max ? `${r.min}-${r.max}` : `${r.min}+`
}

// const MemoEcharts = memo(({option, onClick}) => <ReactECharts option={option}
//                                                               onChartReady={() => console.log('echarts ready ok')}
//                                                               onEvents={{
//                                                                 'click': onClick
//                                                               }}/>)

const Chart: React.FC<ChartProps> = ((props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ranges: Range[] = [
    {min: 0, max: 99},
    {min: 100, max: 199},
    {min: 200, max: 299},
    {min: 300, max: 399},
    {min: 400, max: 499},
    {min: 500, max: 999},
    {min: 1000, max: 1499},
    {min: 1500, max: 1999},
    {min: 2000, max: 2999},
    {min: 3000, max: 4999},
    {min: 5000, max: 9999},
    {min: 10000}
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
      let salesCount = v['近30天销量']
      if (!(salesCount >= key.min && (!key.max || salesCount <= key.max))) {
        continue
      }

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
      // if (key.min >= 10000) {
      //   console.log(groupCount)
      //   console.log(totalSalesVolume)
      // }
    }
  })
  console.log(`总销量 ${totalSalesVolume}`)

  const data = Array.from(datamap.values())
  // console.log(data)
  /*const config = {
    data: [data, data],
    xField: 'salesRange',
    yField: ['productCount', 'salesRatio'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
    // autoFit: false,
    // width: 1200,
    slider: {
      animate: false
    },
    meta: {
      salesRange: {alias: '销量区间'},
      productCount: {alias: '产品数量'},
      salesRatio: {
        alias: '销量占比', formatter: v => `${v * 100}%`
      }
    }
  };*/

  const [colChartData, setColChartData] = useState({})

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
        name: '销量区间',
        nameLocation: 'start',
        // nameTextStyle: {
        //   padding: 10
        // },
        nameGap: 40,
        // boundaryGap: ['30%', '20%'],
        type: 'category',
        data: ranges.map(salesRatioFormat),
        // axisPointer: {
        //   type: 'shadow'
        // }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '产品数量',
        // axisLabel: {
        //   formatter: '{value} ml'
        // }
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
    setColChartData({...param.value})
    openModal()
  }
  return <>
    {/*<DualAxes onReady={p => {
      p.on('interval:click', (...args) => {
        // console.log(...args);
        let data = args[0].data.data;
        setColChartData(data)
        openModal()
      });
    }} {...config} />*/}
    {/*<MemoEcharts option={option} onClik={onClick}/>*/}
    <ReactECharts option={option}
                  onChartReady={() => console.log('echarts ready ok')}
                  onEvents={{
                    'click': onClick
                  }}/>
    <ColumnChart title='商品列表' width={1200} open={isModalOpen} onCancel={closeModal} data={colChartData}/>
  </>
    ;
});



export default Chart;
