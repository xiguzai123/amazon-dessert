import React from 'react';
import { Tabs } from 'antd';
import MonthlySalesVolumeChart from './MonthlySalesCountChart';
// import MonthlySalesChart from './MonthlySalesChart';
// import RatingQuantityChart from './RatingQuantityChart';
// import ScoreQuantityChart from './ScoreQuantityChart';
// import PriceChart from './PriceChart';
// import { useModel } from 'umi';
import { ChartProps } from './common';


const Tabs0: React.FC<ChartProps> = (props) => {
  const tabs = [{
    label: '月销量',
    key: 'MonthlySalesVolumeChart',
    children: <MonthlySalesVolumeChart data={props.data} />
  },
  //   {
  //   label: '月销售额',
  //   key: 'MonthlySalesChart',
  //   children: <MonthlySalesChart />
  // }, {
  //   label: 'rating数',
  //   key: 'RatingQuantityChart',
  //   children: <RatingQuantityChart />
  // }, {
  //   label: '评分数',
  //   key: 'ScoreQuantityChart',
  //   children: <ScoreQuantityChart />
  // }, {
  //   label: '价格',
  //   key: 'PriceChart',
  //   children: <PriceChart />
  // },
  ]
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={tabs.map((d, i) => {
        // const id = String(i + 1);
        return {
          label: d.label,
          key: d.key,
          children: d.children,
        };
      })}
    />
  )
};

export default Tabs0;
