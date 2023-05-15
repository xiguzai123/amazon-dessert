import React from 'react';
import {ChartProps, salesCountColumnChartProps} from './common';
import ColumnChart from "./ColumnChart";



const Chart: React.FC<ChartProps> = ((props) => {



  const metaData = props.data
  // console.log(`总销量 ${totalSalesCount}`)
  console.log(metaData)

  const colprops1 = {
    ...salesCountColumnChartProps(),
    data: metaData
  }
  const colprops2 = {
    data: metaData,
    rankKey: 'salesAmtRanking',
    countKey: '近30天销售额($)',
    option: {
      title: '商品销量额集中度',
      xAxisName: '销量额排名',
      yAxisItemNames: ['销量额', '销量额占比']
    },
  }

  return <>
    <ColumnChart {...colprops1} />
    <ColumnChart {...colprops2}/>
  </>
    ;
});

export default Chart;
