import { BusinessPo } from '../common/base'
import { AccountDept } from './accout-dept'
import { AccountRole } from './accout-role'
import { AccountOrg } from './accout-org'
import { AccountThirdParty } from './accout-thirdParty'
export interface AccountUserVo extends AccountUser {
	userInfo: AccountUserInfo
	roleList: AccountRole[]
	deptList: AccountDept[]
	orgList: AccountOrg[]
	permissionMap: { [key: string]: string }
	thirdPartyAccountList: AccountThirdParty[]
	orgNames: string
	authNames: string
	deptNames: string
	headPath: string
	roleNames: string
	authToken: string
}
export interface AccountUser extends BusinessPo {
	//用户激活状态 0禁用 1激活 2审核 3锁定
	activeStatus: 0 | 1 | 2 | 3
	regIp: string
	siteCode: string
	userAccount: string
	userName: string
	userPassword: string
	//0普通用户 1超级管理员
	userType: 0 | 1
}

export interface AccountUserInfo extends BusinessPo {
	address: string
	email: string
	fkHeadId: string
	fkPositionDictId: string
	fkUserId: string
	gmtCreate: string
	gmtModified: string
	headPath: string
	idCard: string
	openId: string
	phone: string
	qq: string
	rfPositionDictName: string
	sex: 0 | 1 | 2
	sortCode: 0
	userInfoCode: string
	userInfoName: string
	wechat: string
	workNumber: string
	workingDate: string
}
