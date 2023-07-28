<template>
	<div>
		<screen-adater>
			<div class="home">
				<!-- 顶部内容-->
				<div class="top-box">
					<!-- 顶部左侧内容-->
					<div class="t-left">
						<span class="t-left-title">百千万工程数据可视化驾驶舱4556</span>
						<span class="t-left-subtext">王店镇 南梅村</span>
					</div>
					<!-- 顶部右侧内容-->
					<div class="t-right">
						<span class="datetime">{{ currDateTime }}</span>
						<img src="@/assets/images/go-system.png" />
						<span class="go-system">
							<span>进入后台</span>
						</span>
					</div>
				</div>
				<!-- 左侧内容-->
				<div class="left-box">
					<div class="left-1">
						<div class="img-box">
							<a-carousel autoplay :dots="false">
								<div v-for="(item, index) in photos" :key="'image' + index">
									<img :src="item" />
								</div>
							</a-carousel>
						</div>
						<div class="type-box">
							<img src="@/assets/images/left-right-1.png" />
							<img src="@/assets/images/left-right-2.png" />
							<img src="@/assets/images/left-right-3.png" />
						</div>
					</div>
					<div class="left-2">
						<div class="left-2-item">
							<div class="value">5/3</div>
							<div class="text">班子/后备</div>
						</div>
						<div class="left-2-item">
							<div class="value">5003</div>
							<div class="text">总人口</div>
						</div>
						<div class="left-2-item">
							<div class="value">2003</div>
							<div class="text">流动人口</div>
						</div>
					</div>
					<div class="common-title">党组织情况</div>

					<div class="echarts-box">
						<Echarts v-if="pieOptions" :key="pieOptions" :id="'pie'" :width="'100%'" :options="pieOptions" :height="'100%'" />
					</div>

					<div class="tab-box">
						<ul>
							<li v-for="(item, index) in tabList" :key="item.typeName" :class="{ active: currTabIndex === index }" @click="onTabChange(index)">
								<img :src="item.icon" alt="" />
								<span>{{ item.typeName }}</span>
							</li>
						</ul>
					</div>
					<div class="echarts-box2">
						<Echarts
							v-if="Object.values(dashboardOptions).length > 0"
							:id="'dashboard'"
							:width="'100%'"
							:options="dashboardOptions"
							:height="'90%'"
						/>
						<div class="small-title">党员活动平均参与率</div>
					</div>
				</div>
				<!-- 右侧内容-->
				<div class="right-box">
					<div class="common-title">连心服务</div>
					<div class="visit-box">
						<div class="visit">微走访</div>
						<img class="visit-bg" src="@/assets/images/222@2x.png" />
						<img class="visit-up" src="@/assets/images/up.png" />
						<span class="visit-text1">2%</span>
						<span class="visit-text2">2990条</span>
					</div>
					<div class="power-box">
						<div class="power">微力量</div>
						<img class="power-bg" src="@/assets/images/222@2x.png" />
						<img class="power-up" src="@/assets/images/up.png" />
						<span class="power-text1">2%</span>
						<span class="power-text2">2990条</span>
					</div>
					<div class="visit-box">
						<div class="visit">微民情</div>
						<img class="visit-bg" src="@/assets/images/222@2x.png" />
						<img class="visit-up" src="@/assets/images/down.png" />
						<span class="visit-text1">2%</span>
						<span class="visit-text2">2990条</span>
					</div>
					<div class="power-box">
						<div class="power">微办事</div>
						<img class="power-bg" src="@/assets/images/222@2x.png" />
						<img class="power-up" src="@/assets/images/up.png" />
						<span class="power-text1">2%</span>
						<span class="power-text2">2990条</span>
					</div>
					<div class="satisfaction">群众满意度</div>
					<div class="satisfaction-box">
						<echarts v-if="barOptions3" :key="barOptions3" :id="'bar3'" :width="'100%'" :options="barOptions3" :height="'100%'" />
					</div>
					<div class="common-title">集体经济</div>
					<div class="echarts-box">
						<Echarts v-if="barOptions" :key="barOptions" :id="'bar'" :width="'100%'" :options="barOptions" :height="'100%'" />
					</div>
					<div class="common-title">党组织活动</div>
					<div class="echarts-box">
						<Echarts v-if="barOptions2" :key="barOptions2" :id="'bar2'" :width="'100%'" :options="barOptions2" :height="'100%'" />
					</div>
				</div>
				<!-- 底部内容-->
				<div class="bottom-box">
					<div class="text1">32</div>
					<div class="text2">荣誉分</div>
					<div class="text1">92</div>
					<div class="text2">总分</div>
					<div class="text3">强基指数</div>
					<div class="line-bg"></div>
					<div class="politics">
						<div class="politics-text1">政治素养</div>
						<div class="p-text1">20</div>
						<div class="p-text2">得分</div>
						<div class="p-text3">30</div>
						<div class="p-text2">标准得分</div>
						<div class="border1"></div>
						<div class="echarts-box1">
							<Echarts v-if="barOptions4" :key="barOptions4" :id="'bar4'" :width="'100%'" :options="barOptions4" :height="'100%'" />
						</div>
						<div class="border2"></div>
					</div>
					<!--					<div class="branch">-->
					<!--						<div class="pranch-text1">政治素养</div>-->
					<!--						<div class="p-text1">20</div>-->
					<!--						<div class="p-text2">得分</div>-->
					<!--						<div class="p-text3">30</div>-->
					<!--						<div class="p-text2">标准得分</div>-->
					<!--						<div class="border"></div>-->
					<!--						<div class="border"></div>-->
					<!--					</div>-->
				</div>
				<!-- 地图-->
				<echarts-map />
			</div>
		</screen-adater>
	</div>
</template>
<script lang="ts" setup>
import ScreenAdater from '../../components/ScreenAdater.vue'
import Echarts from '@/components/Echarts.vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import icon1 from '../../assets/images/img1.png'
import icon2 from '../../assets/images/img1.png'
import icon3 from '../../assets/images/img1.png'
import tabIcon1 from '../../assets/images/21341633685714_.pic@2x.png'
import tabIcon2 from '../../assets/images/21351633685776_.pic@2x.png'
import tabIcon3 from '../../assets/images/21361633685858_.pic@2x.png'
import tabIcon4 from '../../assets/images/21371633685909_.pic@2x.png'
import tabIcon5 from '../../assets/images/21381633685967_.pic@2x.png'
import tabIcon6 from '../../assets/images/21391633686010_.pic@2x.png'
import requestMethod from '../../api/login'
import ruralInfoRequest from '../../api/ruralInfo'
import { RuralInfoVo } from '../../entity/ruralInfo/ruralInfo'
import { useSystemStore } from '../../store/system'
import { useUserStore } from '../../store/user'
import { messageMethod } from '../../utils/message-util'
import { BaseUtil } from '../../utils/base-util'
import ruralIndexRequest from '../../api/ruralIndex'
import { setBarOptions, setDashboardOptions, setPieOption } from './options'
import EchartsMap from '../../components/EchartsMap.vue'
import { setBarOptions3, setBarOptions4, setCrossOptions2 } from './options2'
import { PersonnelDistributeVo, RuralDefiledIndexVo } from '../../entity/ruralIndex/ruralIndex'
//当前日期时间
const currDateTime = ref('')
//当前时间
const currTime = ref('')
//时间定时器
const currTimeInte = ref()
//轮播图片数组
const photos = ref<string[]>([])
//党组织情况options
const pieOptions = ref({})
//党组织情况分类的options
const dashboardOptions = ref({})
//群众满意度的options
const barOptions3 = ref({})
// 集体经济options
const barOptions = ref({})
// 党组织活动options
const barOptions2 = ref({})
// 当前选中tab的下标
const currTabIndex = ref(0)
//政治素养options
const barOptions4 = setBarOptions4()
// tab数据
const tabList = ref<PersonnelDistributeVo[]>([])

const loginParams = {
	userAccount: 'admin',
	password: '111111'
}
let requestId = 0
// 动画事件
const requestAnimation = (angle: number) => {
	cancelAnimationFrame(requestId)
	angle += 1
	dashboardOptions.value = setDashboardOptions(angle)
	requestId = requestAnimationFrame(() => {
		requestAnimation(angle)
	})
}

onMounted(async () => {
	//获取当前的日期和时间以及星期
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy-MM-dd HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy-MM-dd HH:mm:ss').text
		currDateTime.value = datetime + week
	}, 1000)
	getDashboard()
	await login()
	await getRuralInfo()
	await getPersonnelDistribute()
	await getCollectiveEconomy()
	await getPartyActivities()
	await getRuralDefiledIndex()
})
//使用系统存储
const systemStore = useSystemStore()
//
const userStore = useUserStore()

//登录请求
const login = async () => {
	await requestMethod.login(loginParams).then(({ data }) => {
		console.log(data)
		//设置系统信息存储
		systemStore.setToken(data.authToken)
		//设置用户信息存储
		userStore.setInfo(data)
		messageMethod.success('登录成功')
	})
}

//农村详情信息
const ruralInfo = ref<RuralInfoVo>()
const fkRuralId = ref<string | undefined>('')
const getRuralInfo = async () => {
	await ruralInfoRequest.page({ pageNum: 1, pageSize: 10, rfRuralName: '测试村' }).then(({ data }) => {
		console.log(data.list[0])
		ruralInfo.value = data.list[0]
		fkRuralId.value = ruralInfo.value?.fkRuralId
		const photosList: string[] =
			ruralInfo.value?.groupPhoto === ''
				? ruralInfo.value?.centerPhoto.split(',')
				: ruralInfo.value?.groupPhoto.split(',').concat(ruralInfo.value?.centerPhoto.split(','))
		photos.value = photosList.map(item => BaseUtil.getUploadPath(item))
	})
}

/**
 * 获取党员分布情况
 */
const getPersonnelDistribute = async () => {
	await ruralIndexRequest.personnelDistribute(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const icons = [tabIcon1, tabIcon4, tabIcon3, tabIcon5, tabIcon2, tabIcon6]
		tabList.value = data
		tabList.value.forEach((item: PersonnelDistributeVo, index: number) => {
			item.icon = icons[index]
		})
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	})
}
/**
 * 获取群众满意度数据
 */
const ruralDefiledIndex = ref<RuralDefiledIndexVo>()
const getRuralDefiledIndex = async () => {
	await ruralIndexRequest.ruralDefiledIndex(fkRuralId.value).then(({ data }) => {
		console.log(data)
		ruralDefiledIndex.value = data
		fkRuralId.value = data.fkRuralId
		const satisfactionRatio = data.satisfactionRatio
		barOptions3.value = setBarOptions3({
			seriesData: satisfactionRatio
		})
	})
}
/**
 * 获取集体经济数据
 */
const getCollectiveEconomy = async () => {
	await ruralIndexRequest.collectiveEconomy(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const statisticsYear = data.map(item => item.statisticsYear)
		const operatingIncome = data.map(item => item.operatingIncome)
		const recurringIncome = data.map(item => item.recurringIncome)
		const operatingAverageIncome = data.map(item => item.operatingAverageIncome)
		const recurringAverageIncome = data.map(item => item.recurringAverageIncome)
		barOptions.value = setBarOptions({
			xAxisData: statisticsYear,
			legendData: ['经营性收入', '经常性收入', '全区平均'],
			seriesData: [operatingIncome, recurringIncome, operatingAverageIncome, recurringAverageIncome]
		})
	})
}
/**
 * 获取党组织活动数据
 */
const getPartyActivities = async () => {
	await ruralIndexRequest.partyActivities(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const activitiesNumber = data.map(item => item.activitiesNumber)
		const activitiesRatio = data.map(item => item.activitiesRatio)
		const statisticsMonth = data.map(item => item.statisticsMonth)
		barOptions2.value = setCrossOptions2({
			xAxisData: statisticsMonth,
			legendData: ['活动次数', '党员参与率'],
			seriesData: [activitiesNumber, activitiesRatio]
		})
	})
}

/**
 *  获取党员活动参与率数据
 */
function getDashboard() {
	dashboardOptions.value = setDashboardOptions(0)
	requestAnimation(0)
}

/**
 * 点击tab切换
 */
// function onTabChange(index: number) {
// 	currTabIndex.value = index
// }
function onTabChange(index: number) {
	currTabIndex.value = index
	if (currTabIndex.value != undefined) {
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	}
}

// 组件卸载完成后执行的函数
onUnmounted(() => {
	cancelAnimationFrame(requestId)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

$boxBgcolor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe #f8af3c #51ffc1;

.common-title {
	@include wh(228px, 52px);
	background: url('@/assets/images/t_bg.png') no-repeat;
	background-size: 100% 100%;
	text-align: center;
	line-height: 52px;
	@include fontMixin(24px, 400, #c7e6ff);
	letter-spacing: 2px;
	margin-bottom: 10px;
}

.visit-box {
	@include wh(398px, 44px);
	background-color: rgba(23, 90, 146, 0.2);
	padding: 9px 0 0 16px;

	.visit {
		display: inline-block;
		@include wh(72px, 26px);
		background-color: rgba(241, 172, 64, 1);
		border-radius: 4px;
		text-align: center;
		font-size: 16px;
		font-family: PingFang;
		font-weight: bold;
		color: #0b1d41;
	}

	.visit-bg {
		@include wh(145px, 21px);
		margin-left: 13px;
	}

	.visit-up {
		@include wh(7.6px, 16.9px);
		margin-left: 22px;
	}

	.visit-text1 {
		margin-left: 3px;
		font-size: 18px;
		font-family: PingFang;
		font-weight: 500;
		color: #3ad8d8;
	}

	.visit-text2 {
		margin-left: 17px;
		font-size: 18px;
		font-family: PingFang;
		font-weight: 800;
		color: #42b9fe;
	}
}

.power-box {
	@include wh(398px, 44px);
	padding: 9px 0 0 16px;

	.power {
		display: inline-block;
		@include wh(72px, 26px);
		background-color: rgba(69, 189, 254, 1);
		border-radius: 4px;
		text-align: center;
		font-size: 16px;
		font-family: PingFang;
		font-weight: bold;
		color: #0b1d41;
	}

	.power-bg {
		@include wh(145px, 21px);
		margin-left: 13px;
	}

	.power-up {
		@include wh(7.6px, 16.9px);
		margin-left: 22px;
	}

	.power-down {
		@include wh(7.6px, 16.9px);
		margin-left: 22px;
	}

	.power-text1 {
		margin-left: 3px;
		font-size: 18px;
		font-family: PingFang;
		font-weight: 500;
		color: #3ad8d8;
	}

	.power-text2 {
		margin-left: 17px;
		font-size: 18px;
		font-family: PingFang;
		font-weight: 800;
		color: #42b9fe;
	}
}

.satisfaction {
	vertical-align: bottom;
	display: inline-block;
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
}

.satisfaction-box {
	display: inline-block;
	@include wh(300px, 40px);
}

.home {
	@include wh(100%, 100%);
	background: url('@/assets/images/bg.png') no-repeat;
	background-size: 100% 100%;
	color: #fff;

	.top-box {
		position: absolute;
		width: 100%;
		@include flexMixin(space-between, center);
		padding: 43px 23px 24px 53px;

		.t-left {
			border: 1px solid red;

			.t-left-title {
				@include fontMixin(48px, 700);
				margin-right: 22px;
				letter-spacing: 6px;
			}

			.t-left-subtext {
				@include fontMixin(28px, 700);
			}
		}

		.t-right {
			display: flex;
			align-items: center;

			.datetime {
				@include fontMixin(18px, 500);
			}

			img {
				@include wh(36px, 36px);
				margin: 0 7px 0 18px;
			}

			.go-system {
				@include fontMixin(21px, 700);

				&:after {
					content: '';
					display: inline-block;
					@include wh(10px, 11px);
					background: url('@/assets/images/arrow-right.png') no-repeat;
					background-size: 100% 100%;
					margin-left: 2px;
				}
			}
		}
	}

	.left-box,
	.right-box {
		@include wh(447px, 930px);
		border: 1px solid red;
		position: absolute;
		top: 113px;
		background-color: $boxBgcolor;
		padding: 12px 13px;
		z-index: 2;
	}

	.left-box {
		left: 37px;

		.left-1 {
			.img-box {
				@include wh(319px, 186px);
				padding: 12px 11px;
				display: inline-block;
				vertical-align: middle;
				border: 1px solid #cbedff;
				background-color: rgba(0, 0, 0, 0.2);

				:deep(.ant-carousel) {
					.slick-slide img {
						@include wh(297px, 162px);
					}
				}
			}

			.type-box {
				margin-left: 20px;
				display: inline-block;
				vertical-align: middle;

				& > img {
					@include wh(63px, 46px);
					margin-bottom: 19px;
					display: block;
				}

				img:last-child {
					margin-bottom: 0;
				}
			}
		}

		.left-2 {
			@include flexMixin(space-around, center);
			margin: 49px 0;
			@each $color in $valueColors {
				$index: index($valueColors, $color);
				div:nth-child(#{$index}) {
					.value {
						@include fontMixin(40px, 400, $color);
						font-family: DS-DIGIT;
						letter-spacing: 4px;
						line-height: 40px;
					}

					.text {
						font-size: 14px;
					}
				}
			}
		}

		.echarts-box {
			@include wh(100%, 247px);
		}

		.tab-box {
			width: 100%;
			z-index: 2;

			ul {
				margin: 0;
				padding: 0;
				text-align: center;

				& > li {
					margin-left: -1px;
				}

				& li:first-child {
					margin-left: 0;
				}

				li {
					display: inline-block;
					border: 1px solid #42b9fe;
					cursor: pointer; //有点击事件，变成一只小手
					padding: 6px 9px;

					img,
					span {
						vertical-align: middle;
					}

					img {
						margin-right: 2px;
					}
				}

				.active {
					background-color: #11d290;
					border: 1px solid #11d290;
					color: #fff;
				}
			}
		}

		.echarts-box2 {
			@include wh(100%, 260px);
		}

		.small-title {
			text-align: center;
			font-size: 17px;
			font-weight: bold;
		}
	}

	.right-box {
		right: 37px;

		.echarts-box {
			@include wh(100%, 247px);
		}
	}

	.bottom-box {
		@include wh(905px, 327px);
		border: 1px solid red;
		position: absolute;
		top: 717px;
		left: 0;
		right: 0;
		margin: 0 auto; //水平居中，left和right为0，设置margin(外边距 上下，左右）auto自适应
		background-color: $boxBgcolor;
		z-index: 8;

		.text1 {
			font-size: 40px;
			display: inline-block;
			color: RGBA(43, 218, 242, 1);
			font-family: DS-DIGIT;
			margin-left: 40px;
		}

		.text2 {
			display: inline-block;
			font-size: 13px;
			font-family: PingFang;
			font-weight: 800;
			margin-left: 10px;
		}

		.text3 {
			display: inline-block;
			font-size: 29px;
			font-family: PingFang;
			font-weight: bold;
			color: #c7e6ff;
			margin-left: 500px;
		}

		.line-bg {
			@include wh(873px, 2px);
			background: #a0d3ff;
			opacity: 0.2;
			margin-left: 15px;
		}

		.branch,
		.politics {
			border: 1px solid red;
			@include wh(380px, 120px);
			display: inline-block;

			.politics-text1 {
				font-size: 14px;
				font-family: PingFang;
				font-weight: 500;
				color: #ffffff;
				margin-left: 40px;
				margin-top: 20px;
			}

			.p-text1 {
				font-size: 30px;
				display: inline-block;
				color: RGBA(57, 173, 239, 1);
				font-family: DS-DIGIT;
				margin-left: 40px;
			}

			.p-text2 {
				display: inline-block;
				font-size: 12px;
				font-family: PingFang;
				font-weight: 500;
				color: #c7e6ff;
				margin-left: 10px;
			}

			.p-text3 {
				font-size: 30px;
				display: inline-block;
				color: RGBA(248, 175, 60, 1);
				font-family: DS-DIGIT;
				margin-left: 40px;
			}

			.border1,
			.border2 {
				@include wh(9px, 18px);
				border: 2px solid #ffffff;
				border-radius: 4px;
				margin-left: 35px;
			}

			.border2 {
				display: inline-block;
			}

			.echarts-box1 {
				@include wh(300px, 22px);
				display: inline-block;
			}
		}
	}
}
</style>
