import { acceptHMRUpdate, defineStore } from 'pinia'
import { AccountUser, AccountUserInfo, AccountUserVo } from '../entity/accout/accout-use'
import { AccountRole } from '../entity/accout/accout-role'
import { AccountOrg } from '../entity/accout/accout-org'
import { AccountDept } from '../entity/accout/accout-dept'
import { BaseUtil } from '../utils/base-util'
interface RequestStore {
	//用户账号信息
	user: AccountUser | undefined
	//用户基本信息
	info: AccountUserInfo | undefined
	//所属角色信息
	roleList: Array<AccountRole>
	//所属单位信息
	orgList: Array<AccountOrg>
	//所属部门信息
	depList: Array<AccountDept>
	//权限
	permissionMap: { [key: string]: string[] }
}
const STORE_KEY = 'user-store'
export const useUserStore = defineStore(STORE_KEY, {
	state: () =>
		<RequestStore>{
			user: undefined,
			info: undefined,
			roleList: [],
			orgList: [],
			depList: [],
			permissionMap: {}
		},
	actions: {
		setInfo(userVo: AccountUserVo) {
			const permissionMap: { [key: string]: string[] } = {}
			Object.entries(userVo.permissionMap).forEach(([key, value]) => {
				permissionMap[key] = value.split(',')
			})
			this.$patch({
				user: { ...userVo },
				info: userVo.userInfo,
				orgList: userVo.orgList,
				roleList: userVo.roleList,
				depList: userVo.deptList,
				permissionMap: permissionMap
			})
		},
		//清除用户信息
		clearInfo() {
			this.$patch({
				user: undefined,
				info: undefined,
				depList: [],
				roleList: [],
				orgList: [],
				permissionMap: {}
			})
		}
	},
	getters: {
		avatar: state => {
			const headPath = state.info?.headPath
			if (headPath) {
				return BaseUtil.getUploadPath(headPath)
			} else {
				return false
			}
		},
		userName: state => {
			return state.user?.userName || '请登录'
		}
	},
	//开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_KEY,
				storage: localStorage
			}
		]
	}
})
//热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
