import { BusinessPo } from '../common/base'

export interface AccountRole extends BusinessPo {
	createUserName: string
	fkDeptId: string
	fkOrgId: string
	fkParentIds: string
	roleLevel: number
	roleName: string
	roleType: number
	sortCode: number
}
