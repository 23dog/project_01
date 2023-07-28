import { BusinessPo } from '../common/base'

/**
 * 党支部人员分布情况实体类
 */
export interface PersonnelDistributeVo {
	//农村党支部人员分布情况-表
	distributeList: Array<DistributeVo>
	//类型名称
	typeName: string
	icon: string
	//[key: string]: unknown
}

export interface DistributeVo extends BusinessPo {
	//分布区间名称（数据字典）
	distributionIntervalName: string
	//分布数量
	distributionNumber: number
	//分布区间id（数据字典）
	fkDistributionIntervalId: string
	//农村id
	fkRuralId: string
	//类型id（数据字典）
	fkTypeId: string
	//党支部名称
	partyBranchName: string
	//农村名称
	rfRuralName: string
	//类型名称（数据字典）
	typeName: string
}

export interface CollectiveEconomyVo extends BusinessPo {
	averageIncome: number
	fkRuralId: string
	operatingAverageIncome: number
	operatingIncome: number
	recurringAverageIncome: number
	recurringIncome: number
	rfRuralName: string
	statisticsYear: number
}

export interface PartyActivitiesVo extends BusinessPo {
	activitiesNumber: number
	activitiesRatio: number
	fkRuralId: string
	rfRuralName: string
	statisticsMonth: string
}

export interface RuralDefiledIndexVo extends BusinessPo {
	fkRuralId: string
	researchNumber: number
	researchRatio: number
	rfRuralName: string
	satisfactionRatio: number
	screeningNumber: number
	screeningRatio: number
	securityNumber: number
	securityRatio: number
	statisticsYear: number
	visitNumber: number
	visitRatio: number
}
