import React, {useState} from 'react';
import {DualAxes} from '@ant-design/plots';
import {ChartProps} from '../common';
import ColumnChart from "./components/ColumnChart";

type Range = {
  min: number
  max: number
  title?: string
}

export type ChartData = {
  salesRange?: string
  productCount?: number
  salesRatio?: number
  salesCount?: number,
  list?: any[]
}

const Chart: React.FC<ChartProps> = ((props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dataMap = new Map<Range, ChartData>()
  dataMap.set({min: 0, max: 99}, {})
  dataMap.set({min: 100, max: 199}, {})
  dataMap.set({min: 200, max: 299}, {})
  dataMap.set({min: 300, max: 399}, {})
  dataMap.set({min: 400, max: 499}, {})
  dataMap.set({min: 500, max: 999}, {})
  dataMap.set({min: 1000, max: 1499}, {})
  dataMap.set({min: 1500, max: 1999}, {})
  dataMap.set({min: 2000, max: 2999}, {})
  dataMap.set({min: 3000, max: 4999}, {})
  dataMap.set({min: 5000, max: 9999}, {})
  dataMap.set({min: 10000, max: Number.MAX_SAFE_INTEGER}, {})
  const metaData = props.data
  let totalSalesVolume = 0
  metaData.forEach(v => {
    let salesVolume = v['近30天销量']
    if (!(typeof salesVolume === 'number')) {
      salesVolume = 0
      v['近30天销量'] = salesVolume
    }
    totalSalesVolume += salesVolume
    for (let [key, value] of dataMap) {
      if (key.min <= salesVolume && key.max >= salesVolume) {
        if (value) {
          if (!value.list) {
            value.list = []
          }
          value.list[value.list.length] = v
          if (!value.productCount) {
            value.productCount = 0
          }
          value.productCount++
          if (!value.salesRange) {
            value.salesRange = `${key.min}-${key.max}`
          }
          let groupVolume = 0
          value.list.forEach(v => {
            let vol = v['近30天销量']
            groupVolume += vol
          })
          value['salesCount'] = groupVolume
          value.salesRatio = Number((groupVolume / totalSalesVolume).toFixed(4))
        }
      }
    }
  })

  const data = Array.from(dataMap.values())
  // console.log(data)
  const config = {
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
  };

  const [colChartData, setColChartData] = useState({})
  return <>
    <DualAxes onReady={p => {
      p.on('interval:click', (...args) => {
        // console.log(...args);
        let data = args[0].data.data;
        setColChartData(data)
        openModal()
      });
    }} {...config} />
    <ColumnChart title='商品列表' width={1200} open={isModalOpen} onCancel={closeModal} data={colChartData}/>
  </>
  ;
});


export default Chart;
