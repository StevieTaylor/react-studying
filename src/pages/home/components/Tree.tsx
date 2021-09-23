/*
 * @Author: Stevie
 * @Date: 2021-09-17 15:31:40
 * @LastEditTime: 2021-09-19 14:29:56
 * @LastEditors: Stevie
 * @Description:
 */

import * as React from 'react'
import ReactECharts from 'echarts-for-react'

interface TreeData {
	name: string
	value?: string | number
	children?: TreeData[]
}

const Tree: React.FC = () => {
	const data: TreeData[] = [
		{
			name: 'React全家桶',
			children: [
				{
					name: 'React',
					children: [
						{ name: 'JSX' },
						{ name: 'Component' },
						{ name: 'State' },
						{ name: 'Props' },
						{ name: 'Refs' },
						{ name: 'Handling Event' },
						{ name: 'Forms' },
						{ name: 'HighOrderFunction' },
						{ name: 'Lifecycle' },
						{ name: 'Diffing Algorithm' }
					]
				},
				{
					name: 'React-router',
					
				},
				{
					name: 'Redux'
				}
			]
		}
	]

	const option = {
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove'
		},
		series: [
			{
				type: 'tree',
				data: data,
				// - 节点圈圈的大小
				symbolSize: 10,
				label: {
					position: 'left',
					verticalAlign: 'middle',
					align: 'right',
					fontSize: 12
				},
				leaves: {
					label: {
						position: 'right',
						verticalAlign: 'middle',
						align: 'left'
					}
				},
				// - 设置高亮样式
				emphasis: {
					focus: 'descendant',
					itemStyle:{
						color: 'skyblue'
					}
				},
				expandAndCollapse: true,
				animationDuration: 550,
				animationDurationUpdate: 750
			}
		]
	}

	return <ReactECharts option={option} />
}
export default Tree
