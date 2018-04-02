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
    },
    [actionTypes.CREDITORS_RECORDS]:{
        apiFn:Fetch.creditorsRecords
    },
    [actionTypes.CREDITORS_RECORDS_HISTORY]:{
        apiFn:Fetch.creditorsRecords
    },
    [actionTypes.DEPOSITBS_ACCOUNTCAPITALLIST]:{
        apiFn:Fetch.depositbsAccountCapitalList
    },
    [actionTypes.DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY]:{
        apiFn:Fetch.depositbsAccountCapitalList
    },
    [actionTypes.DEPOSITBS_ACCOUNTCAPITALLIST_NOW]:{
        apiFn:Fetch.depositbsAccountCapitalList
    },
    [actionTypes.INVITE_PARTICULARS]:{
        apiFn:Fetch.inviteParticulars
    },
    //聚点+
    [actionTypes.DEPOSITS_GATHER]:{
        apiFn:Fetch.depositsGather
    },
    //聚点首页
    [actionTypes.DEPOSITS_GATHER_INDEX]:{
        apiFn:Fetch.depositsGather
    },
    //聚点+标
    [actionTypes.GATHER_BID_LIST]:{
        apiFn:Fetch.gatherBidList
    },
    //加入记录
    [actionTypes.GATHER_JOIN]:{
        apiFn:Fetch.gatherJoin
    },
    //我的聚点+列表(持有中)
    [actionTypes.GATHER_MY_LIST_ONE]:{
        apiFn:Fetch.gatherMyList
    },
    //我的聚点+列表（推出中）
    [actionTypes.GATHER_MY_LIST_TWO]:{
        apiFn:Fetch.gatherMyList
    },
    //我的聚点+列表（已退出）
    [actionTypes.GATHER_MY_LIST_THREE]:{
        apiFn:Fetch.gatherMyList
    },
    //标的还款详情
    [actionTypes.GATHER_BID_BACK_DETAIL]:{
        apiFn:Fetch.gatherBidBackDetail
    },
    //聚点+项目列表
    [actionTypes.GATHER_PROJECTS]:{
        apiFn:Fetch.gatherProjects
    },
    //聚点+
    [actionTypes.GATHER_INVEST_RECORD]:{
        apiFn:Fetch.gatherInvestRecord
    },
    [actionTypes.FRIDAY_COINLIST]:{    //周五活动币列表
        apiFn:Fetch.fridayCoinList
    },
    [actionTypes.GET_GOODS_LIST]:{    //商品列表
        apiFn:Fetch.getGoodsList
    },
    [actionTypes.GET_GOODS_LIST_NEW]:{    //商品列表
        apiFn:Fetch.getGoodsList
    },
    [actionTypes.GET_GOODS_LIST_NEW_ONE]:{    //商品列表
        apiFn:Fetch.getGoodsList
    },
    [actionTypes.GET_GOODS_LIST_NEW_TWO]:{    //商品列表
        apiFn:Fetch.getGoodsList
    },
    [actionTypes.GET_COIN_RECORD_LIST]:{   //商城历史记录点币记录
        apiFn:Fetch.getCoinRecordList
    },
    [actionTypes.GET_CASH_RECORD_LIST]:{   //商城历史记录兑换记录
        apiFn:Fetch.getCashRecordList
    },
    [actionTypes.GET_NOTICE_LIST]:{   //商城通知
        apiFn:Fetch.getNoticeList
    },
    [actionTypes.WISDOM_LIST]:{
        apiFn:Fetch.wisdomList
    },



}
