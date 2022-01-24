/*
 * @Author: Stevie
 * @Date: 2022-01-24 15:45:58
 * @LastEditTime: 2022-01-24 17:43:28
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import * as Axios from '@utils/http.service'
import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IWorker } from '@/entity/worker.entity'
import { WORKER_URL } from '@/mock/worker'
import { useWindowSize } from '@/common/hooks'

interface Data {
  list: any[]
  total: number
}

const WorkerList: React.FC = () => {
  const [data, setData] = React.useState<Data>()
  const windowSize = useWindowSize()

  React.useEffect(() => {
    Axios.get(WORKER_URL, {}).then((res) => {
      if (res && res.status === 200) {
        setData(res.data)
      }
    })
  }, [])

  const tableColumns: ColumnsType<IWorker> = [
    {
      width: 100,
      key: 'name',
      title: '姓名',
      dataIndex: 'name',
      align: 'center'
    },
    {
      width: 100,
      key: 'age',
      title: '年龄',
      dataIndex: 'age',
      align: 'center'
    },
    {
      width: 100,
      key: 'gender',
      title: '性别',
      dataIndex: 'gender',
      align: 'center'
    },
    {
      width: 150,
      key: 'birthday',
      title: '出生日期',
      dataIndex: 'birthday',
      align: 'center'
    },
    {
      width: 150,
      key: 'telephone',
      title: '联系电话',
      dataIndex: 'telephone',
      align: 'center'
    },
    {
      width: 350,
      key: 'address',
      title: '地址',
      dataIndex: 'address',
      align: 'center'
    },
    {
      width: 180,
      key: 'actions',
      title: '操作',
      align: 'center',
      render: () => {
        return [<Button type="link">详情</Button>]
      }
    }
  ]

  return (
    <Table<IWorker>
      key="workerlist"
      rowKey={(record) => record.id}
      columns={tableColumns}
      dataSource={data?.list || []}
      scroll={{
        y: windowSize.height! - 270
      }}
      pagination={{
        defaultPageSize: 20,
        total: data?.total
      }}
    />
  )
}

export default WorkerList
