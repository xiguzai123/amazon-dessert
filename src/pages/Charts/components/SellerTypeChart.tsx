import React, {useState} from 'react';
import {ChartData, ChartProps, salesCountColumnChartProps} from './common';
import ColumnChart from "./ColumnChart";
import ReactECharts from 'echarts-for-react';
import {Modal} from "antd";

const shippingXAxisData = ['AMZ', 'FBA', 'FBM']
const countryXAxisData = ['CN', 'US', '未知']

const xAxis = {
  nameLocation: 'start',
  nameGap: 40,
  type: 'category',
}

const option = {
  // title: {},
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
      restore: {show: true},
      saveAsImage: {show: true},
    }
  },
  legend: {data: ['产品数量', '销量占比']},
  dataZoom: [{type: 'inside'}, {type: 'slider'}],
  xAxis: [
    {
      // name: '发货方式',
      nameLocation: 'start',
      nameGap: 40,
      type: 'category',
      // data: ['AMZ', 'FBA', 'FBM'],
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
  dataset: {source: []},
  series: [
    {
      name: '产品数量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      encode: {x: 'salesRange', y: 'productCount'}
    },
    {
      name: '销量占比',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      encode: {x: 'salesRange', y: 'salesRatio'}
    }
  ]
}
const sOption = {...option}
const cOption = {...option}
sOption.title = {name: '配送方式'}
sOption.xAxis = [{...xAxis, name: '配送方式', data: shippingXAxisData}]
// sOption.series[0].encode = {x: 'salesRange', y: 'productCount'}
// sOption.series[1].encode = {x: 'salesRange', y: 'salesRatio'}
cOption.title = {name: '卖家地区'}
cOption.xAxis = [{...xAxis, name: '卖家地区', data: countryXAxisData}]
// cOption.series[0].encode = {x: 'salesRange', y: 'productCount'}
// cOption.series[1].encode = {x: 'salesRange', y: 'salesRatio'}

const makeColumnData = (key, value, v, totalSalesCount, totalProductCount, xKey) => {
  if (!value.list) {
    value.list = []
  }
  value.list[value.list.length] = v
  if (!value.productCount) {
    value.productCount = 0
  }
  value.productCount++
  value.salesRange = v[xKey]
  let groupCount = 0
  value.list.forEach(v => {
    let vol = v['近30天销量']
    groupCount += vol
  })
  value.salesRatio = Number((groupCount / totalSalesCount * 100).toFixed(2))
  value.productCountRatio = Number((value.productCount / totalProductCount * 100).toFixed(2))
}

const Chart: React.FC<ChartProps> = ((props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const datamap1 = new Map<string, ChartData>()
  shippingXAxisData.forEach((i => datamap1.set(i, {})))
  const datamap2 = new Map<string, ChartData>()
  countryXAxisData.forEach((i => datamap2.set(i, {})))

  const metaData = props.data
  let totalSalesCount = 0
  let totalProductCount = metaData.length
  metaData.forEach(v => {
    let salesCount = v['近30天销量']
    totalSalesCount += salesCount
  })
  metaData.forEach(v => {
    for (let [key, value] of datamap1) {
      if(v['配送方式'] !== key) continue
      makeColumnData(key, value, v, totalSalesCount, totalProductCount, '配送方式')
    }
    for (let [key, value] of datamap2) {
      if(v['卖家所属地'] !== key) continue
      makeColumnData(key, value, v, totalSalesCount, totalProductCount, '卖家所属地')
    }
  })
  // console.log(`总销量 ${totalSalesCount}`)
  console.log(Array.from(datamap1.values()))

  const [colChartData, setColChartData] = useState(new Array<any>())

  sOption.dataset = {source: Array.from(datamap1.values())}
  cOption.dataset = {source: Array.from(datamap2.values())}

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
    <ReactECharts option={sOption}
                  onChartReady={() => console.log('echarts ready ok')}
                  onEvents={{
                    'click': onClick
                  }}/>
    <ReactECharts option={cOption}
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
