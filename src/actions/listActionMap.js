//  action.type对应的接口请求方法
import * as actionTypes from './actionTypes'
import Fetch from '../request/fetch'

export default {

    [actionTypes.FETCH_RELATED_PROJECTS]: {
        apiFn:  Fetch.directInvestProjects
    },
    [actionTypes.FETCH_MY_MASSAGE_S]:{
        apiFn:  Fetch.messages
    },
    [actionTypes.FETCH_ANNOUNCEMENT_S]:{
        apiFn:  Fetch.messages
    },
    [actionTypes.FETCH_DIRECTLIST_DATA]: {
        apiFn: Fetch.directInvestProjects
    },
    [actionTypes.COIN_LOG]:{
        apiFn:Fetch.coinRecords
    },
    [actionTypes.BONUS_LOG]:{
        apiFn:Fetch.bonusesList
    },
    [actionTypes.FETCH_CREDITORSLIST_DATA]: {
        apiFn: Fetch.creditorsProjects
    },
    [actionTypes.FETCH_MONEY_LOG]:{//资产记录
        apiFn:Fetch.transactionRecords
    },
  [actionTypes.FETCH_DIRECT_BUY_RECORD_DATA]: {//直投记录
    apiFn: Fetch.directInvestInvestRecords
  },
    [actionTypes.RELATED_PROJECTS]:{
        apiFn:Fetch.directInvestProjects
    },
    [actionTypes.DEPOSIT_RECORD]:{
        apiFn:Fetch.depositRecords
    },
    [actionTypes.DEPOSIT_RECORD_HISTORY]:{
        apiFn:Fetch.depositRecords
    },
    [actionTypes.MY_DEPOSIT_LIST]:{
        apiFn:Fetch.directInvestList
    },
    [actionTypes.MY_CREDITOR_LIST]:{
        apiFn:Fetch.creditorsList
    },
    [actionTypes.MY_INTEREST_RATES]:{
        apiFn:Fetch.interestRates
    },
    [actionTypes.OVERDUE_INTEREST_RATES]:{
        apiFn:Fetch.overdueInterestRates
    },
    [actionTypes.USER_VOUCHERS]:{
        apiFn:Fetch.vouchers
    },
    [actionTypes.OVERDUE_VOUCHERS]:{
        apiFn:Fetch.overdueVouchers
    },
    [actionTypes.SCRATCH_REWARDS]:{
        apiFn:Fetch.scratchRewards
    },
    [actionTypes.GET_NOTICE]:{
        apiFn:Fetch.notice
    },
    [actionTypes.DEMAND_RECORDS]:{
        apiFn:Fetch.demandRecords
    },
    [actionTypes.DEPOSIT_RECORD_RS]:{
        apiFn:Fetch.depositRecords
    },
    [actionTypes.DIRECT_INVEST_RECORDS]:{
        apiFn:Fetch.directInvestRecords
    },
    [actionTypes.DIRECT_INVEST_RECORDS_B]:{
        apiFn:Fetch.directInvestRecords
    },
    [actionTypes.DIRECT_INVEST_RECORDS_C]:{
        apiFn:Fetch.directInvestRecords
    },
    [actionTypes.SHOP_PRODUCT_LIST]:{
        apiFn:Fetch.shopProductList
    },
    [actionTypes.PRODUCT_EXCHANGE_RECORD]:{
        apiFn:Fetch.productExchangeRecord
    },
    [actionTypes.VOUCHER_LIST]:{
        apiFn:Fetch.voucherList
    },
    [actionTypes.INVOLVE_PROJECT_LIST]:{
        apiFn:Fetch.involveProjectList
    }
}
