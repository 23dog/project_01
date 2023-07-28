import { PostRequestModel, QueryType } from '../http/request-model'
import { AccoutUserVo } from '../entity/accout/accout-use'
const prefix = '/login'
export default {
	login: (query: QueryType) => new PostRequestModel<AccoutUserVo>(prefix, query).request()
}
