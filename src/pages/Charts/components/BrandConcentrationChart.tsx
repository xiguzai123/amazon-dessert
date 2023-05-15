import React, {useState} from 'react';
import {ChartData, ChartProps, GroupChartData, GroupChartProps, salesCountColumnChartProps} from './common';
import GroupChart from './GroupChart';

const makeColumnData = (key, value, v, totalSalesCount, totalSalesAmt, xKey) => {
  if (!value.list) {
    value.list = []
  }
  value.list[value.list.length] = v
  value.salesRange = v[xKey]
}
const makeColumnDataGroup = (value, totalSalesCount, totalSalesAmt) => {
  if (value.salesCount === undefined) {
    value.salesCount = 0
  }
  if (value.salesAmt === undefined) {
    value.salesAmt = 0
  }
  value.list.forEach(v => {
    let vol = v['近30天销量']
    value.salesCount += vol
    let amt = v['近30天销售额($)']
    value.salesAmt += amt
  })
  value.salesRatio = Number((value.salesCount / totalSalesCount * 100).toFixed(2));
  value.salesAmtRatio = Number((value.salesAmt / totalSalesAmt * 100).toFixed(2))
}

let sellerNames;

const Chart: React.FC<ChartProps> = ((props) => {

  const metaData = props.data

  if (!sellerNames) {
    sellerNames = new Set(metaData.map(v => v['品牌']))
  }

  const datamap = new Map<string, ChartData>()
  sellerNames.forEach(name => datamap.set(name, {}))

  let totalSalesCount = 0
  let totalSalesAmt = 0
  metaData.forEach(v => {
    let salesCount = v['近30天销量']
    totalSalesCount += salesCount
    let salesAmt = v['近30天销售额($)']
    totalSalesAmt += salesAmt
  })
  metaData.forEach(v => {
    for (let [key, value] of datamap) {
      if (v['品牌'] !== key) continue
      makeColumnData(key, value, v, totalSalesCount, totalSalesAmt, '品牌')

    }
  })

  let datasource = Array.from(datamap.values());
  datasource.map(value => {
    makeColumnDataGroup(value, totalSalesCount, totalSalesAmt)
  })
  console.log(datasource)

  const gorupProps1: GroupChartProps = {
    metadata: metaData,
    sortKey: 'salesCount',
    groupKey: '品牌',
    option: {
      title: '品牌销量集中度',
      xAxisName: '品牌',
      yAxisItemNames: ['销量', '销量占比'],
      legendData: ['销量占比'],
      bar: {
        name: '销量',
        x: 'group',
        y: 'salesCount'
      },
      line: {
        name: '销量占比',
        x: 'group',
        y: 'salesCountRatio'
      },
      tooltipFormatter: (params) => {
        // console.log(params)
        let data = params[0].data;
        const arr = [
          `<b>排名: </b><span>${data['ranking']}</span>`,
          `<b>卖家: </b><span>${data['group']}</span>`,
          `<b>商品数量/新品数量: </b><span>${data['productCount']}/${data['newProductCount']}</span>`,
          `<b>月销量: </b><span>${data['salesCount']} (非新品: ${data['unNewProductSalesCount']} 新品: ${data['newProductSalesCount']})</span>`,
          `<b>月销量占比: </b><span>${data['salesCountRatio']}% (非新品: ${data['unNewProductSalesCountRatio']}% 新品: ${data['newProductSalesCountRatio']}%)</span>`,
          `<b>月销售额: </b><span>$${data['salesAmt']} (非新品: $${data['unNewProductSalesAmt']} 新品: $${data['newProductSalesAmt']})</span>`,
          `<b>月销售额占比: </b><span>${data['salesAmtRatio']}% (非新品: ${data['unNewProductSalesAmtRatio']}% 新品: ${data['newProductSalesAmtRatio']}%)</span>`,
        ]
        return arr.join('<br/>')
      }
    }
  }
  const gorupProps2: GroupChartProps = {
    metadata: metaData,
    sortKey: 'salesAmt',
    groupKey: '品牌',
    option: {
      title: '品牌销售额集中度',
      xAxisName: '品牌',
      yAxisItemNames: ['销售额', '销售额占比'],
      legendData: ['销售额占比'],
      bar: {
        name: '销售额',
        x: 'group',
        y: 'salesAmt'
      },
      line: {
        name: '销售额占比',
        x: 'group',
        y: 'salesAmtRatio'
      },
      tooltipFormatter: (params) => {
        // console.log(params)
        let data = params[0].data;
        const arr = [
          `<b>排名: </b><span>${data['ranking']}</span>`,
          `<b>卖家: </b><span>${data['group']}</span>`,
          `<b>商品数量/新品数量: </b><span>${data['productCount']}/${data['newProductCount']}</span>`,
          `<b>月销量: </b><span>${data['salesCount']} (非新品: ${data['unNewProductSalesCount']} 新品: ${data['newProductSalesCount']})</span>`,
          `<b>月销量占比: </b><span>${data['salesCountRatio']}% (非新品: ${data['unNewProductSalesCountRatio']}% 新品: ${data['newProductSalesCountRatio']}%)</span>`,
          `<b>月销售额: </b><span>$${data['salesAmt']} (非新品: $${data['unNewProductSalesAmt']} 新品: $${data['newProductSalesAmt']})</span>`,
          `<b>月销售额占比: </b><span>${data['salesAmtRatio']}% (非新品: ${data['unNewProductSalesAmtRatio']}% 新品: ${data['newProductSalesAmtRatio']}%)</span>`,
        ]
        return arr.join('<br/>')
      }
    }
  }

  return <>
    <GroupChart {...gorupProps1}/>
    <GroupChart {...gorupProps2}/>
  </>
    ;
});

export default Chart;
