import React from 'react';
import {Modal, ModalProps} from 'antd';
import {DualAxes} from "@ant-design/plots";
import {ChartData} from "@/pages/Charts/components/MonthlySalesCountChart";
// import {TooltipItem} from "@antv/g2/src/interface";

export type ColumnProps = {
  data: ChartData
} & ModalProps

type ColumnChartData = {
  salesRanking?: number
  salesCount?: number
  salesRatio?: number
  // data?: ChartData
}
const App: React.FC<ColumnProps> = (props) => {
  let data = props.data;
  const chartData = new Array<ColumnChartData>()
  if (data && data.list) {
    let totalCount = 0
    let rankarr = new Array<any>()
    data.list.forEach(v => {
      let count = v['近30天销量'];
      if (!(typeof count === 'number')) {
        count = 0
        v['近30天销量'] = count
      }
      totalCount += count
      rankarr[rankarr.length] = count
    });
    data.list.forEach(v => {
      let count = v['近30天销量'];
      let ranking = v['salesRanking'];
      const d = {...v}
      d.salesRanking = ranking
      d.salesCount = count
      d.salesRatio = Number((count / totalCount).toFixed(4))
      chartData.push(d)
    })
  }
  const config = {
    data: [chartData, chartData],
    xField: 'salesRanking',
    yField: ['salesCount', 'salesRatio'],
    geometryOptions: [
      {
        geometry: 'column',
        // colorField: 'salesRanking',
        // color: ({salesRanking}) => {
        //   console.log(salesRanking)
        // }
        tooltip: {
          fields: ['评分', 'ASIN', '品牌', '近30天销量', '近30天销售额($)', 'salesRanking', '卖家信息', '评分数', '价格($)', '上架时间', '配送方式'],
          domStyles: {

          }
        },
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2,
        },
        // color: 'green'
      },
    ],
    tooltip: {
      showTitle: true,
      title: '商品标题'
    },
    slider: {
      animate: false
    },
    // scrollbar: {},
    // legend: {
    //   custom: true,
    //   position: 'top',
    //   items: [
    //     {},
    //     {},
    //     {}
    //   ]
    // },
    // renderer: 'svg',
    meta: {
      salesRanking: {alias: '销量排名'},
      salesCount: {alias: '销量'},
      salesRatio: {
        alias: '销量占比', formatter: v => `${v * 100}%`
      }
    },
  };
  return (
    <>
      <Modal {...props} footer={null} maskClosable={false}>
        <DualAxes {...config} renderer={"svg"}/>
      </Modal>
    </>
  );
};

export default App;
