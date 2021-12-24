/*
 * @Author: Stevie
 * @Date: 2021-12-23 10:43:15
 * @LastEditTime: 2021-12-24 10:09:44
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import FundHttpService from './services/fund.httpservice'
import { IPagination } from '@/entity/common.entity'
import { FundType, FundTypeEnum, IFund } from './model'
import { ColumnsType } from 'antd/es/table'
import { Col, Row, Select, Table } from 'antd'
import { getEnumKeyByValue } from '@/utils/util.service'

const { Option } = Select

const Fund: React.FC = () => {
  const fundHttpService = new FundHttpService()
  const [pagination, setPagination] = React.useState<IPagination>({ pageNo: 1, pageSize: 20 })
  const [fundList, setFundList] = React.useState<any[]>()
  const [fundType, setFundType] = React.useState<FundType>(FundTypeEnum.指数型)

  React.useEffect(() => {
    _getFundList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _getFundList = () => {
    const params = {
      type: fundType,
      order_by: '3y',
      size: 500,
      page: 1
    }
    fundHttpService.getFundList(params).then((res) => {
      const { data } = res
      if (data) {
        const result = data?.data
        // console.log('result.item :>> ', result.items);
        setFundList(result.items)
      }
    })
  }

  const SearchBar: React.FC = () => {
    const labelStyle: React.CSSProperties = { lineHeight: '32px', textAlign: 'center' }
    return (
      <Row style={{ height: 60 }}>
        <Col span={8}>
          <Row>
            <Col span={5} style={labelStyle}>
              <span>基金类型:</span>
            </Col>
            <Col span={16}>
              <Select style={{ width: '100%' }}>
                {Object.keys(FundTypeEnum).map((label) => {
                  const value = FundTypeEnum[label]
                  return (
                    <Option key={value} value={value}>
                      {label}
                    </Option>
                  )
                })}
              </Select>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Col span={4} style={labelStyle}>
              <span>时间段:</span>
            </Col>
            <Col span={16}>
              <Select style={{ width: '100%' }}>
                {Object.keys(FundTypeEnum).map((label) => {
                  const value = FundTypeEnum[label]
                  return (
                    <Option key={value} value={value}>
                      {label}
                    </Option>
                  )
                })}
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  const tableColumns: ColumnsType<IFund> = [
    {
      width: '15%',
      align: 'left',
      key: 'code',
      title: '基金代码',
      dataIndex: 'fd_code'
    },
    {
      width: '30%',
      align: 'left',
      key: 'name',
      title: '基金名称',
      dataIndex: 'fd_name'
    },
    {
      width: '15%',
      align: 'center',
      key: 'type',
      title: '基金类型',
      render: () => getEnumKeyByValue(FundTypeEnum, fundType)
    },
    {
      width: '20%',
      align: 'center',
      key: 'equity',
      title: '净值',
      dataIndex: 'unit_nav'
    },
    {
      width: '15%',
      align: 'center',
      key: 'rate',
      title: '增长率',
      dataIndex: 'yield',
      render: (rate: string) => {
        if (!rate) {
          return '暂无信息'
        }
        const negative = rate.includes('-')
        const color = negative ? '#0FA578' : '#dd0a20'
        return (
          <span style={{ color: color }}>
            {!negative && '+'}
            {(+rate).toFixed(2).toString()}%
          </span>
        )
      }
    }
  ]

  return (
    <div>
      <SearchBar />
      <Table
        key={'fund-table'}
        rowKey={(fund) => fund.fd_code}
        columns={tableColumns}
        dataSource={fundList}
        pagination={{
          pageSize: pagination.pageSize,
          onChange: (pageNo, pageSize) => {
            setPagination({
              pageNo,
              pageSize
            })
          }
        }}
      />
    </div>
  )
}
export default Fund
