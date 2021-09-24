/*
 * @Author: Stevie
 * @Date: 2021-09-24 10:20:27
 * @LastEditTime: 2021-09-24 14:19:42
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import { Card, DatePicker } from 'antd'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'
const { RangePicker } = DatePicker

const Statistics: React.FC = () => {
	const [data, setData] = React.useState<number[]>([])

	React.useEffect(() => {
		let data: number[] = []
		for (let i = 0; i < 12; i++) {
			const newData = Math.round(1000 * Math.random())
			data.push(newData)
		}
		setData(data)
	}, [])

	const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
	const option = {
		xAxis: {
			type: 'category',
			data: Months
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: data,
				type: 'bar',
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(180, 180, 180, 0.2)'
				},
				barWidth: 18,
				itemStyle: {
					color: '#3DB2FF'
				}
			}
		],
		tooltip: {
			axisPointer: {
				label: {
					backgroundColor: '#6a7985'
				}
			}
		}
	}

	const handleDateChange = (moments) => {
    console.log(moments)
  }

	const handleDateOk = (moments) => {
    console.log(moments)
  }

	const datePicker = () => {
		const dateFormat = 'YYYY/MM/DD'
		return (
			<RangePicker
				picker="date"
				defaultValue={[moment('2021/01/01', dateFormat), moment('2021/12/31',dateFormat)]}
				format={dateFormat}
				onChange={handleDateChange}
				onOk={handleDateOk}
			/>
		)
	}

	return (
		<Card title="Statistics" extra={datePicker()}>
			<ReactEcharts option={option} style={{ height: 400 }} />
		</Card>
	)
}
export default Statistics
