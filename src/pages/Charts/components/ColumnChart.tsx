import React, {useState} from 'react';
import {Radio} from 'antd';
import ReactECharts from "echarts-for-react";
import lodash from 'lodash';

export type ColumnProps = {
  data: any[],
  countKey: string,
  rankKey: string,
  option: {
    title: string,
    xAxisName: string,
    yAxisItemNames: string[],
  }
}

type ColumnChartData = {
  salesRanking?: number
  salesCount?: number
  salesRatio?: number
  newProduct?: number
  data?: any
}

const App: React.FC<ColumnProps> = (props) => {
  // let data = props.data;
  let chartData = new Array<ColumnChartData>()
  let [option, setOption] = useState({});
  let [et, setEt] = useState(31104000000);
  if (props.data) {
    let totalCount = 0
    // let rankarr = new Array<any>()
    props.data.forEach(v => {
      let count = v[props.countKey];
      totalCount += count
      // rankarr[rankarr.length] = count
    });
    props.data.forEach(v => {
      let count = v[props.countKey];
      let ranking = v[props.rankKey];
      // const d = {...v}
      const d: ColumnChartData = {}
      d.salesRanking = ranking
      d.salesCount = count
      d.salesRatio = Number((count / totalCount * 100).toFixed(2))
      let nowt = Date.now();
      if (nowt <= v.timestamp + et) {
        d.newProduct = 1
      } else {
        d.newProduct = 0
      }
      d.data = v
      chartData.push(d)
      // console.log(d);
    })
  }
  chartData = lodash.sortBy(chartData, 'salesRanking')
  option = {
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true},
      }
    },
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'cross',
      //   crossStyle: {
      //     color: '#999'
      //   }
      // },
      // alwaysShowContent: true,
      // enterable: true,
      axisPointer: {
        type: 'none',
        show: false
      },
      formatter: params => {
        // console.log(params)
        let data = params[0].data;
        // '评分', 'ASIN', '品牌', '近30天销量', '近30天销售额($)', 'salesRanking', '卖家信息', '评分数', '价格($)', '上架时间', '配送方式'
        const arr = [
          `<span>${data.data['商品标题']}</span>`,
          `<b>ASIN: </b><span>${data.data['ASIN']}</span>`,
          `<b>品牌: </b><span>${data.data['品牌']}</span>`,
          `<b>近30天销量: </b><span>${data.data['近30天销量']}</span>`,
          `<b>评分/Rating: </b><span>${data.data['评分']}/${data.data['评分数']}</span>`,
          `<b>近30天销售额($): </b><span>${data.data['近30天销售额($)']}</span>`,
          `<b>销量排名: </b><span>${data['salesRanking']}</span>`,
          `<b>卖家信息: </b><span>${data.data['卖家信息'].replace('公司名称：', '').replace('\n办公地址：\n', '/').replaceAll('\n', ',')}</span>`,
          `<b>销量占比: </b><span>${data['salesRatio']}%</span>`,
          `<b>价格($): </b><span>${data.data['价格($)']}</span>`,
          `<b>上架时间: </b><span>${data.data['上架时间']}</span>`,
          `<b>配送方式: </b><span>${data.data['配送方式']}</span>`,
          `<image src="${data.data['商品主图'].text}" width="100"/>`
        ]
        return arr.join('<br/>')
      },
      extraCssText:'max-width: 600px; white-space:pre-wrap'
    },
    legend: {
      data: [
        // '销量',
        // {
        //   name: '新品销量',
        //   // itemStyle: {
        //   //   color: 'red'
        //   // }
        // },
        props.option.yAxisItemNames[1]
      ],
      selectedMode: false
    },
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
        name: props.option.yAxisItemNames[1],
        axisLabel: {
          formatter: '{value} %'
        }
      }
    ],
    dataset: {source: chartData},
    visualMap: {
      type: "piecewise",
      show: true,
      pieces: [
        {min: 0, max: 0, color: '#556fc5', label: props.option.yAxisItemNames[0]},
        {min: 1, max: 1, color: '#91cd77', label: `新品${props.option.yAxisItemNames[0]}`},
      ],
      // inRange: [
      //
      // ],
      seriesIndex: 0,
      dimension: 3,
      // outOfRange:  {
      //   color: '#eee'
      // }
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
        name: props.option.yAxisItemNames[0],
        type: 'bar',
        encode: {x: 'salesRanking', y: 'salesCount'},
      },
      // {
      //   name: '新品销量',
      //   type: 'bar',
      //   encode: {x: 'salesRanking', y: 'salesCount'}
      // },
      {
        name: props.option.yAxisItemNames[1],
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: rat => `${rat} %`,
        },
        encode: {x: 'salesRanking', y: 'salesRatio'}
      }
    ]
  }

  return (
    <>
      <div style={{overflow: "hidden", padding: "0 0 10px 0"}}>
        <div style={{float: "right", clear: "both"}}>
          <span>新品定义：</span>
          <Radio.Group size='small' defaultValue={et} onChange={e => {
            const t = e.target.value
            let nowt = Date.now();
            option.dataset.source.forEach(c => {
              if (nowt <= c.timestamp + Number(t)) {
                c.newProduct = 1
              } else {
                c.newProduct = 0
              }
            })
            // setChartData([...chartData])
            setEt(Number(t))
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
                      'click': (param, echarts) => {
                        console.log(param, echarts)
                        window.open(param.data.data.URL.text, '_blank');
                      }
                    }}/>
    </>
  );
};

export default App;
