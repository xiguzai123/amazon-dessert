import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MjjlData } from '@/common/type';

interface Props {
  data: MjjlData
}

const App: React.FC<Props> = (props) => {
  const { columns, data } = props.data
  const columnTypes: ColumnsType<any> = columns.map((v, i) => {
    return {
      key: v,
      title: v,
      dataIndex: v
    }
  })

  return <Table columns={columnTypes} dataSource={data} scroll={{ x: true }}/>;
}

export default App;
