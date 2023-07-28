import { BasePo } from '../common/base'

export interface AccountThirdParty extends BasePo {
	appOpenId: string
	appType: string
	appUserId: string
	appUserName: string
	fkUserId: string
	gmtCreate: string
	gmtModified: string
	id: string
}
