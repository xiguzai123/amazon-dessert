import React from 'react';
import {Tabs} from 'antd';
import MonthlySalesVolumeChart from './MonthlySalesCountChart';
import MonthlySalesChart from './MonthlySalesChart';
import RatingCountChart from './RatingCountChart';
import ScoreRangeChart from './ScoreRangeChart';
import PriceChart from './PriceChart';
import AddedTimeChart from './AddedTimeChart';
// import { useModel } from 'umi';
import {ChartProps} from './common';


const Tabs0: React.FC<ChartProps> = (props) => {
  const tabs = [{
    label: '月销量',
    key: 'MonthlySalesVolumeChart',
    children: <MonthlySalesVolumeChart data={props.data}/>
  },
    {
      label: '月销售额',
      key: 'MonthlySalesChart',
      children: <MonthlySalesChart data={props.data}/>
    }, {
      label: 'rating数',
      key: 'RatingQuantityChart',
      children: <RatingCountChart data={props.data}/>
    }, {
      label: '评分数',
      key: 'ScoreQuantityChart',
      children: <ScoreRangeChart data={props.data}/>
    },
    {
      label: '价格',
      key: 'PriceChart',
      children: <PriceChart data={props.data}/>
    },{
      label: '上架时间',
      key: 'AddedTimeChart',
      children: <AddedTimeChart data={props.data}/>
    },
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
