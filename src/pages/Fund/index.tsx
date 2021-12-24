/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Stevie
 * @Date: 2021-12-23 10:43:15
 * @LastEditTime: 2021-12-24 13:30:35
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import FundHttpService from './services/fund.httpservice'
import { IPagination } from '@/entity/common.entity'
import { FundType, FundTypeEnum, IFund, OrderBy, OrderByEnum } from './model'
import { ColumnsType } from 'antd/es/table'
import { Col, Row, Select, Table } from 'antd'
import { getEnumKeyByValue } from '@/utils/util.service'

const { Option } = Select

const Fund: React.FC = () => {
  const fundHttpService = new FundHttpService()
  const [tableLoading, setTableLoading] = React.useState<boolean>(false)
  const [pagination, setPagination] = React.useState<IPagination>({ pageNo: 1, pageSize: 100 })
  const [totalCount, setTotalCount] = React.useState<number>()
  const [fundList, setFundList] = React.useState<any[]>()
  const [fundType, setFundType] = React.useState<FundType>(FundTypeEnum.指数型)
  const [filterPeriod, setFilterPeriod] = React.useState<OrderBy>(OrderByEnum.近一年)

  React.useEffect(() => {
    getSuperiorFund()
  }, [])

  const getSuperiorFund = () => {
    getFundList(FundTypeEnum.指数型, OrderByEnum.近一年, 1, 100)
  }

  const getFundList = (type: FundType, order_by: OrderBy, page: number = 1, size: number = 100) => {
    setTableLoading(true)
    fundHttpService.queryFundList({ type, order_by, size, page }).then((res) => {
      const { data } = res
      if (data) {
        const result = data?.data
        setFundList(result.items)
        setTotalCount(result.total_items)
        setTableLoading(false)
      }
    })
  }

  const handleFundTypeChange = (type: FundType) => {
    setFundType(type)
    getFundList(type, filterPeriod)
  }

  const handleFilterPeriodChange = (period: OrderBy) => {
    setFilterPeriod(period)
    getFundList(fundType, period)
  }

  const SearchBar: React.FC = () => {
    const labelStyle: React.CSSProperties = { lineHeight: '32px', textAlign: 'center' }
    const controlStyle: React.CSSProperties = { width: '100%' }
    return (
      <Row style={{ height: 60 }}>
        <Col span={8} xl={8} xxl={4}>
          <Row>
            <Col span={5} style={labelStyle}>
              <span>基金类型:</span>
            </Col>
            <Col span={16}>
              <Select
                style={controlStyle}
                placeholder="请选择基金类型"
                value={fundType}
                onChange={handleFundTypeChange}
              >
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

        <Col span={8} xl={8} xxl={4}>
          <Row>
            <Col span={5} style={labelStyle}>
              <span>筛选时间:</span>
            </Col>
            <Col span={16}>
              <Select
                style={controlStyle}
                placeholder="请选择筛选时间"
                value={filterPeriod}
                onChange={handleFilterPeriodChange}
              >
                {Object.keys(OrderByEnum).map((label) => {
                  const value = OrderByEnum[label]
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
      title: '收益率',
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
        loading={tableLoading}
        pagination={{
          total: totalCount,
          pageSize: pagination.pageSize,
          showQuickJumper: true,
          showTotal: (total: number) => `总共 ${total} 支`,
          onChange: (pageNo, pageSize) => {
            setPagination({ pageNo, pageSize })
            getFundList(fundType, filterPeriod, pageNo, pageSize)
          }
        }}
      />
    </div>
  )
}

export default Fund
