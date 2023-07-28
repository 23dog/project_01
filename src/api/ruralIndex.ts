import { GetRequestModel, QueryType } from '../http/request-model'
import { PersonnelDistributeVo, CollectiveEconomyVo, PartyActivitiesVo, RuralDefiledIndexVo } from '../entity/ruralIndex/ruralIndex'

const prefix = '/ruralIndex'
export default {
	personnelDistribute: (query: QueryType) =>
		new GetRequestModel<Array<PersonnelDistributeVo>>(`${prefix}/getRuralPartyBranchPersonnelDistributeByFkRuralId?fkRuralId=${query}`).request(),
	collectiveEconomy: (query: QueryType) =>
		new GetRequestModel<Array<CollectiveEconomyVo>>(`${prefix}/getRuralCollectiveEconomyByFkRuralId?fkRuralId=${query}`).request(),
	partyActivities: (query: QueryType) =>
		new GetRequestModel<Array<PartyActivitiesVo>>(`${prefix}/getRuralPartyActivitiesByFkRuralId?fkRuralId=${query}`).request(),
	ruralDefiledIndex: (query: QueryType) => new GetRequestModel<RuralDefiledIndexVo>(`${prefix}/getRuralDefiledIndexByFkRuralId?fkRuralId=${query}`).request()
}
