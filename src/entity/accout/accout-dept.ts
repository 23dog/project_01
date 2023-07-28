import { BusinessPo } from '../common/base'

export interface AccountDept extends BusinessPo {
	address: string
	contacts: string
	createUserName: string
	deptCode: string
	deptLeader: string
	deptLevel: number
	deptName: string
	deptType: string
	email: string
	fax: string
	fkOrgId: string
	fkParentCode: string
	fkParentId: string
	gmtCreate: string
	gmtModified: string
	id: string
	memo: string
	phone: string
	phoneCornet: string
	sortCode: number
	updateUserName: string
	version: number
}
