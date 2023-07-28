export const setCrossOptions2 = (dataConfig: { xAxisData: string[]; legendData: string[]; seriesData: number[][] }) => {
	return {
		legend: {
			data: dataConfig.legendData,
			itemWidth: 14,
			itemHeight: 4,
			right: '20px',
			textStyle: {
				color: '#fff'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				axisTick: { alignWithLabel: true },
				boundaryGap: false,
				data: dataConfig.xAxisData,
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					symbol: ['none'],
					lineStyle: {
						color: '#fff',
						width: '5'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				position: 'left',
				alignTicks: true,
				max: 'dataMax',
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					color: '#fff'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(255,255,255,0.5)'
					}
				}
			},
			{
				type: 'value',
				position: 'right',
				alignTicks: true,
				min: 0,
				max: 100,
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					color: '#fff'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(255,255,255,0.5)'
					}
				}
			}
		],
		series: [
			{
				name: '活动次数',
				type: 'line',
				symbol: 'none',
				yAxisIndex: 0,
				areaStyle: {
					colorStops: [
						{
							offset: 0,
							color: 'rgba(67, 185, 254, 1)'
						},
						{
							offset: 1,
							color: 'rgba(67, 185, 254, 0)'
						}
					]
				},
				emphasis: {
					focus: 'series'
				},
				data: dataConfig.seriesData[0],
				itemStyle: {
					/*设置折线颜色*/
					normal: {
						color: '#43B9FE'
					}
				}
			},
			{
				name: '党员参与率',
				type: 'line',
				symbol: 'none',
				yAxisIndex: 1,
				areaStyle: {
					color: {
						type: 'linear',
						x: 0, //右
						y: 0, //下
						x2: 0, //左
						y2: 1, //上
						colorStops: [
							{
								offset: 0,
								color: 'rgba(81, 255, 193, 1)'
							},
							{
								offset: 1,
								color: 'rgba(81, 255, 193, 0)'
							}
						]
					}
				},
				emphasis: {
					focus: 'series'
				},
				itemStyle: {
					/*设置折线颜色*/
					normal: {
						color: '#51FFC1'
					}
				},
				data: dataConfig.seriesData[1]
			}
		]
	}
}
export const setBarOptions3 = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			top: 0,
			bottom: 10,
			left: 10,
			right: 0
		},
		xAxis: {
			show: false,
			type: 'value',
			boundaryGap: [0, 0]
		},
		yAxis: [
			{
				type: 'category',
				data: [''],
				axisLine: { show: false },
				axisTick: [
					{
						show: false
					}
				]
			}
		],
		series: [
			{
				type: 'bar',
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: {
							x: 1, //右
							y: 0, //下
							x2: 0, //左
							y2: 1, //上
							colorStops: [
								{
									offset: 0,
									color: 'rgba(245, 167, 43, 1)'
								},
								{
									offset: 1,
									color: 'rgba(0, 228, 255, 1)'
								}
							]
						}
					}
				},
				label: {
					show: true,
					position: 'right',
					formatter: '{@score}%',
					textStyle: {
						color: '#fff',
						fontSize: '12'
					}
				},
				barWidth: 20,
				data: [dataConfig.seriesData]
			},
			{
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: 'rgba(1, 10, 39, 1)',
						barBorderRadius: 30,
						borderColor: '#fff'
					}
				}
			}
		]
	}
}

export const setBarOptions4 = () => {
	return {
		grid: {
			top: 0,
			bottom: 0,
			left: 10,
			right: 0
		},
		xAxis: {
			show: false,
			type: 'value',
			boundaryGap: [0, 0]
		},
		yAxis: {
			type: 'category',
			data: [''],
			axisLine: { show: false },
			axisTick: [
				{
					show: false
				}
			]
		},
		series: [
			{
				type: 'bar',
				barWidth: 20,
				data: ['80'],
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: {
							x: 1, //右
							y: 0, //下
							x2: 0, //左
							y2: 1, //上
							colorStops: [
								{
									offset: 0,
									color: 'rgba(67, 186, 254, 1)'
								},
								{
									offset: 1,
									color: 'rgba(32, 140, 202, 1)'
								}
							]
						}
					}
				}
			},
			{
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: 'rgba(1, 10, 39, 1)',
						barBorderRadius: 30,
						borderColor: '#fff'
					}
				}
			}
		]
	}
}
