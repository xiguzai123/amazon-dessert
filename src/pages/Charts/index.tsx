import React, {useState} from 'react';
import {InboxOutlined} from '@ant-design/icons';
import {Button, TabsProps, UploadProps} from 'antd';
import {message, Tabs, Upload} from 'antd';
import ExcelJS from 'exceljs';
import lodash from 'lodash';
import Table from './components/Table';
import Charts from './components/Charts';

const {Dragger} = Upload;

const App: React.FC = () => {
  const [imported, setImported] = useState(false)
  const [ data, setData ] = useState(new Array<any>());
  // let {data, setData, imported, setImported} = useModel('chartsModel');
  const props: UploadProps = {
    name: 'file',
    accept: '.xlsx',
    multiple: true,
    itemRender: () => <span></span>,
    onChange(info) {
      const {status} = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    customRequest(options) {
      const {file} = options
      // console.log(options)
      // console.log(file)
      if (file instanceof File) {
        setImported(true)
        const workbook = new ExcelJS.Workbook();

        file.arrayBuffer().then(buffer => {
          workbook.xlsx.load(buffer).then(() => {
            const worksheet = workbook.getWorksheet('US');

            // console.log(`ColCount ${worksheet.actualColumnCount}`)
            const titles = worksheet.getRow(1).values
            if (!(titles instanceof Array)) return
            console.log(titles)

            const keys = ['近30天销量', '评分数', '近30天销售额($)', '评分']
            worksheet.eachRow({includeEmpty: true}, function (row, rowNumber) {
              // console.log(`Row ${rowNumber} = ${JSON.stringify(row.values)}`);
              if (rowNumber <= 1)
                return
              const values = row.values
              if (values instanceof Array) {
                const item = {}
                values.forEach((v, i) => {
                  const key = titles[i]
                  if (!key)
                    return
                  let cv = v
                  if (keys.includes(key)) {
                    if (!(typeof cv === 'number')) {
                      cv = 0
                    }
                  } else if (key === '上架时间') {
                    let t = Date.parse(v);
                    item['timestamp'] = t
                  } else if (key === '卖家所属地' && !v) {
                    cv = '未知'
                  }
                  item[key] = cv;
                })
                // console.log(item)
                data.push(item)
              } else {
                data.push(values)
              }
              data.forEach(d => {
                keys.forEach(k => {
                  if (d[k] === undefined){
                    d[k] = 0
                  }
                })
              })
            });

          }).then(() => {
            console.log(data)
            // const sortList = [...data]
            let sortBy = lodash.sortBy(data, '近30天销量').reverse();
            sortBy.forEach((v, i) => {
              v['salesRanking'] = i + 1
            })
            let sortBy2 = lodash.sortBy(data, '近30天销售额($)').reverse();
            sortBy2.forEach((v, i) => {
              v['salesAmtRanking'] = i + 1
            })
            setData([...data])
          });
        })
        message.success('导入成功')
      } else {
        message.error('导入失败')
      }
    }
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: 'table',
      label: `表格`,
      children: <Table />,
    },
    {
      key: 'charts',
      label: `图表`,
      children: <Charts data={data} />,
    },
  ];

  return (
    imported ?
      <div>
        <Button type="primary" onClick={() => {
          setImported(false)
          setData([])
        }}>重新导入</Button>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div> :
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or otÏher
          banned files.
        </p>
      </Dragger>
  );
}

export default App;
