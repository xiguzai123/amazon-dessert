import React, {useState} from 'react';
import {ChartData, GroupChartData, GroupChartProps, salesCountColumnChartProps} from './common';
import ColumnChart from "./ColumnChart";
import {Modal, Radio} from "antd";
import ReactECharts from "echarts-for-react";
import lodash from "lodash";

const makeOption = (props: GroupChartProps, datasource: any[]) => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
      formatter: props.option.tooltipFormatter,
      extraCssText:'max-width: 600px; white-space:pre-wrap'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true},
      }
    },
    legend: {data: props.option.legendData},
    dataZoom: [{type: 'inside'}, {type: 'slider'}],
    xAxis: [
      {
        name: props.option.xAxisName,
        nameLocation: 'start',
        nameGap: 40,
        type: 'category',
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: props.option.yAxisItemNames[0],
      },
      {
        type: 'value',
        name: props.option.yAxisItemNames[0],
        axisLabel: {
          formatter: '{value} %'
        }
      }
    ],
    dataset: {source: datasource},
    visualMap: {
      type: "piecewise",
      show: true,
      pieces: [
        {min: 0, max: 0, color: '#556fc5', label: props.option.yAxisItemNames[0]},
        {min: 1, max: 1, color: '#91cd77', label: `新品${props.option.yAxisItemNames[0]}`},
      ],
      seriesIndex: 0,
      dimension: 16,
      orient: 'horizontal',
      selectedMode: false,
      hoverLink: false,
      left: 'auto',
      bottom: 'auto',
      top: 0,
      inRange: {color: '#91cd77'},
      outOfRange: {color: '#556fc5'}
    },
    series: [
      {
        name: props.option.bar.name,
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        encode: {x: props.option.bar.x, y: props.option.bar.y}
      },
      {
        name: props.option.line.name,
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' %';
          }
        },
        encode: {x: props.option.line.x, y: props.option.line.y}
      }
    ]
  }
}

const makeColumnData = (key: string, value:GroupChartData, v, groupKey: string, expireMill:number) => {
  if (!value.list) {
    value.list = []
  }
  value.list[value.list.length] = v
  value.group = v[groupKey]
  const nowt = Date.now()
  v['newProduct'] = nowt <= v.timestamp + Number(expireMill) ? 1 : 0
  value.data = v
}
const countGroupData = (value: GroupChartData, totalSalesCount, totalSalesAmt) => {
  value.salesCount = 0
  value.salesAmt = 0
  // value.ranking = i + 1
  value.productCount = value.list.length
  let newProductCount = 0
  let newProductSalesAmt = 0
  let newProduct = 0
  let newProductSalesCount = 0
  value.list.forEach(it => {
    let vol = it['近30天销量']
    value.salesCount += vol
    let amt = it['近30天销售额($)']
    value.salesAmt += amt
    if (it.newProduct === 1){
      newProduct = 1
      newProductCount++
      newProductSalesAmt += it['近30天销售额($)']
      newProductSalesCount += vol
    }
  })
  value.newProductSalesCount = newProductSalesCount
  value.unNewProductSalesCount = value.salesCount - newProductSalesCount
  value.newProductCount = newProductCount
  value.unNewProductCount = value.productCount - value.newProductCount
  value.newProductSalesAmt = newProductSalesAmt
  value.unNewProductSalesAmt = value.salesAmt - value.newProductSalesAmt
  value.newProductSalesAmtRatio = Number((value.newProductSalesAmt / value.salesAmt * 100).toFixed(2))
  value.unNewProductSalesAmtRatio = 100 - value.newProductSalesAmtRatio
  value.newProductSalesCountRatio = Number((value.newProductSalesCount / value.salesCount * 100).toFixed(2));
  value.unNewProductSalesCountRatio = 100 - value.newProductSalesCountRatio
  value.newProduct = newProduct
  value.salesCountRatio = Number((value.salesCount / totalSalesCount * 100).toFixed(2));
  value.salesAmtRatio = Number((value.salesAmt / totalSalesAmt * 100).toFixed(2))
}

const Chart: React.FC<GroupChartProps> = ((props) => {

  let [expireMill, setExpireMill] = useState(31104000000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colChartData, setColChartData] = useState(new Array<any>())

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = (param, echarts) => {
    console.log(param, echarts)
    setColChartData(param.value.list)
    openModal()
  }

  const metadata = props.metadata
  let totalSalesCount = 0
  let totalSalesAmt = 0
  metadata.forEach(v => {
    let salesCount = v['近30天销量']
    totalSalesCount += salesCount
    let salesAmt = v['近30天销售额($)']
    totalSalesAmt += salesAmt
    const nowt = Date.now()
    v['newProduct'] = nowt <= v.timestamp + expireMill ? 1 : 0
  })

  const groupKeys = new Set(metadata.map(v => v[props.groupKey]))
  const groupmap = new Map<string, ChartData>()
  groupKeys.forEach(key => groupmap.set(key, {}))

  metadata.forEach(v => {
    for (let [key, value] of groupmap) {
      if(v[props.groupKey] !== key) continue
      makeColumnData(key, value, v, props.groupKey, expireMill)
    }
  })

  let datasource = Array.from(groupmap.values())
  datasource.map((value, i) => {
    countGroupData(value, totalSalesCount, totalSalesAmt)
  })
  datasource = lodash.sortBy(datasource, props.sortKey).reverse();
  datasource.forEach((it, i) => it.ranking = i + 1)

  let optionSource = makeOption(props, datasource)
  const [option, setOption] = useState(optionSource);
  console.log(option)

  const colprops1 = {
    ...salesCountColumnChartProps(),
    data: colChartData
  }

  return <>
    <div style={{overflow: "hidden", padding: "0 0 10px 0"}}>
      <div style={{float: "right", clear: "both"}}>
        <span>新品定义：</span>
        <Radio.Group size='small' defaultValue={expireMill} onChange={e => {
          const t = e.target.value
          let nowt = Date.now();
          option.dataset.source.forEach(c => {
            let np = 0
            c.list.forEach(b => {
              if (nowt <= b.timestamp + Number(t)) {
                np = 1
                b.newProduct = 1
              } else {
                b.newProduct = 0
              }
            })
            c.newProduct = np
            countGroupData(c, totalSalesCount, totalSalesAmt)
          })
          // setChartData([...chartData])
          setExpireMill(Number(t))
          setOption({...option})
        }}>
          <Radio.Button value={31104000000}>最近1年</Radio.Button>
          <Radio.Button value={15552000000}>最近6个月</Radio.Button>
          <Radio.Button value={7776000000}>最近3个月</Radio.Button>
        </Radio.Group>
      </div>
    </div>
    <ReactECharts option={option}
                  // onChartReady={() => console.log('echarts ready ok')}
                  onEvents={{
                    'click': onClick
                  }}/>
    <Modal footer={null} maskClosable={false}
           centered = {true}
           title='商品列表' width={1200} open={isModalOpen} onCancel={closeModal}
           afterOpenChange={(open) => {
           }}>
      <ColumnChart {...colprops1} />
    </Modal>
  </>
    ;
});

export default Chart;
