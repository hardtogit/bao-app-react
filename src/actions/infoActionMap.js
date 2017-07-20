import * as actionTypes from './actionTypes'
import Fetch from '../request/fetch'
export default {
    [actionTypes.SCRATCHES_CARD_INFO]: {//获取刮刮卡详情
        apiFn: Fetch.scratchDetail
    },
    [actionTypes.SCRATCHES_CARD_USE]:{//使用刮刮卡
        apiFn:Fetch.scratch
    },
    [actionTypes.USER_INFO_COPY]:{
       
    },
    [actionTypes.USER_LOGIN_FLOW]:{//用户登录
        apiFn:Fetch.login
    },
    [actionTypes.USER_INFO]: { // 用户信息
  		apiFn: Fetch.getUserInfo
  	},
    [actionTypes.USER_INFO_WITH_LOGIN]: { // 用户信息
  		apiFn: Fetch.getUserInfo
  	},
    [actionTypes.RATE]: { // 利率
  		apiFn: Fetch.getRates
  	},
    [actionTypes.SEND_MSG]:{//发送验证码
        apiFn:Fetch.mobilesExit
    },

    [actionTypes.CALENDAR]:{/*回款日历*/
        apiFn:Fetch.paymentCalendar
    },
    [actionTypes.MY_DEPOSIT_SUMMARY]:{       //我的定存宝详情
        apiFn:Fetch.myDepositSummary
    }, 
    [actionTypes.DEMAND_DETAIL]: { // 零钱宝详情
        apiFn: Fetch.demandDetail
    },

    [actionTypes.DEMAND_ACCOUNT_DETAIL]: { // 我的零钱宝账户详情
        apiFn: Fetch.myDemand
    },

    [actionTypes.DEPOSIT_DETAIL]: { // 定存宝详情
        apiFn: Fetch.depositDetail
    },

    [actionTypes.DIRECTINVEST_DETAIL]: { // 直投详情
        apiFn: Fetch.directInvestProductDetail
    },

    [actionTypes.CREDITORS_DETAIL]: {  // 债权详情
        apiFn: Fetch.creditorsProductDetail
    },

    [actionTypes.AVAILABLE_COUPONS]: {  // 可使用的优惠券
        apiFn: Fetch.availableCoupons
    },

    [actionTypes.DEMAND_BUY]: {   // 零钱宝余额购买
        apiFn: Fetch.demandBuy
    },

    [actionTypes.DEPOSIT_BUY]: {  // 定存宝余额购买
        apiFn: Fetch.depositBuy
    },

    [actionTypes.DIRECTINVEST_BUY]: {   // 直投余额购买
        apiFn: Fetch.directInvestBuy
    },

    [actionTypes.CREDITORS_BUY]: {   // 债权余额购买
        apiFn: Fetch.creditorsBuy
    },

    [actionTypes.SET_USERNAME]: { // 设置用户名
        apiFn: Fetch.setUsername
    },

    [actionTypes.IDENTITY_AUTH]: { // 实名认证
        apiFn: Fetch.auth
    },

    [actionTypes.BIND_MOBILE]: { // 绑定手机
        apiFn: Fetch.bindMobile
    },

    [actionTypes.BIND_MOBILE_MODIFY]: { // 修改绑定手机
        apiFn: Fetch.bindMobileModify
    },

    [actionTypes.CHECK_VERIFY_CAPTCHA]: { // 修改绑定手机
        apiFn: Fetch.verifycode
    },

    [actionTypes.FETCH_DIRECT_DETAIL_DATA]: { // 请求直投详情数据
        apiFn: Fetch.directInvestProductDetail
    },

    [actionTypes.FETCH_CREDITORS_DETAIL_DATA]: { // 请求债权详情数据
        apiFn: Fetch.creditorsProductDetail
    },

    [actionTypes.FETCH_ACTIVE_MASSAGE]:{ // 发现消息
       apiFn:Fetch.getMessagesUnread
    },
    [actionTypes.FETCH_ACTIVE_LIST]:{ //发现活动列表
       apiFn:Fetch.activities
    },
    [actionTypes.INVITE_FRIENDS]:{ //邀请好友页面
       apiFn:Fetch.inviteDetail
    } ,
    [actionTypes.BANNER_LIST]:{ //理财BANNER
       apiFn:Fetch.banners
    },
    [actionTypes.RED_PACKETS_RULE]:{//红包规则
        apiFn:Fetch.bonusesRule
    },
    [actionTypes.BONUS_INFO]:{//我的红包详情
        apiFn:Fetch.bonusDetail
    },
    [actionTypes.SAFE_CARD_INFO]:{//我的安全卡信息
        apiFn:Fetch.securityCard
    },
    [actionTypes.SIGN]:{//签到
        apiFn:Fetch.sign
    },
    [actionTypes.SITE_LIST]:{//收货地址列表
        apiFn:Fetch.siteList
    },
    [actionTypes.SITE_SET_DEFAULT]:{//设置默认地址
        apiFn:Fetch.siteSetDefault
    },
    [actionTypes.SITE_SET_DEL]:{//地址删除
        apiFn:Fetch.siteSetDel
    },
    [actionTypes.SITE_ADD]:{//地址新增
        apiFn:Fetch.siteAdd
    },
    [actionTypes.SITE_EDIT]:{//编辑地址
        apiFn:Fetch.siteEdit
    },
    [actionTypes.AUTO_BUY_INFO]:{//自动投标信息
        apiFn:Fetch.autoBidDetail
    },
    [actionTypes.AUTO_BUY]:{//自动投标
        apiFn:Fetch.autoBid
    },
    [actionTypes.RELATED_PROJECTS]:{
        apiFn:Fetch.directInvestProjects
    },
    [actionTypes.EXIST_MOBILE]:{
        apiFn: Fetch.mobilesExit
    },
    [actionTypes.VERIFY_CAPTCHA]:{
        apiFn: Fetch.mobilesExit
    },
    [actionTypes.CHECK_VERIFY_CAPTCHA]: {
        apiFn: Fetch.verifycode
    },
    [actionTypes.REGISTER]:{
        apiFn: Fetch.register
    },
    [actionTypes.SET_READ]:{
       apiFn: Fetch.setRead
    },
    [actionTypes.LOGIN_PASSWORD_MODIFY]:{
       apiFn: Fetch.loginPasswordModify
    },
    [actionTypes.TRADE_PASSWORD_SET]:{
       apiFn: Fetch.tradePasswordSet
    },
    [actionTypes.TRADE_PASSWORD_MODIFY]:{
       apiFn: Fetch.tradePasswordModify
    },
    [actionTypes.SECURITY_CARD]:{
       apiFn: Fetch.securityCard
    },
    [actionTypes.GET_BANK_LIST]:{
        apiFn: Fetch.getBankList
    },
    [actionTypes.SEND_SEC_CARD]:{
        apiFn: Fetch.securityCardBind
    },
    [actionTypes.VERIFY_CARD]:{
        apiFn:Fetch.verifyCard
    },
    [actionTypes.TRANSACTION_CODE]:{
        apiFn:Fetch.mobilesExit
    },
    [actionTypes.LOGIN_OUT]:{
        apiFn:Fetch.logout
    },
    [actionTypes.CHECK_VERIFY_CAPTCHA_W]:{
        apiFn: Fetch.verifycode
    },
    [actionTypes.FIND_PWD_SET]:{
        apiFn:Fetch.findPassword
    },
    [actionTypes.FEED_BACK]:{
        apiFn:Fetch.feedback
    },
    [actionTypes.MONEY_INFO]:{
        apiFn:Fetch.asset
    },
    [actionTypes.DEPOSIT_DETAILS]:{
        apiFn:Fetch.depositDetail
    },
    [actionTypes.MY_DEPOSIT_INVEST]:{
        apiFn:Fetch.myDirectInvestSummary
    },
    [actionTypes.MY_CREDITOR_SUMMARY]:{
        apiFn:Fetch.myCreditorSummary
    },
    [actionTypes.PRODUCT_LIST]:{
        apiFn:Fetch.active
    },
    [actionTypes.DIRECT_INVEST_PROPERTY_DETAIL]:{
        apiFn:Fetch.directInvestPropertyDetail
    },
    [actionTypes.DIRECT_INVEST_CONTRACT]:{
        apiFn:Fetch.directInvestContract
    },
    [actionTypes.DIRECT_INVEST_PRODUCT_INFO]:{
        apiFn:Fetch.directInvestProductInfo
    },
    [actionTypes.SHOP_PRODUCT_BAR]:{
        apiFn:Fetch.shopProductBar
    },
    [actionTypes.COMMODITY_DETAILS]:{
        apiFn:Fetch.commodityDetails
    },
    [actionTypes.PRODUCT_EXCHANGE]:{
        apiFn:Fetch.productExchange
    },
    [actionTypes.REDEEM]:{
        apiFn:Fetch.redeem
    },
    [actionTypes.AUTH_COOKIE]:{
        apiFn:Fetch.authCookie
    },
    [actionTypes.PAY]:{
        apiFn:Fetch.Pay
    },
    [actionTypes.CREDITORS_PROPERTY_DETAIL]:{
        apiFn:Fetch.creditorsPropertyDetail
    },
    [actionTypes.CREDITORS_PRODUCTINFO]:{
        apiFn:Fetch.creditorsProductInfo
    },
    [actionTypes.CREDITORS_CONTRACT]:{
        apiFn:Fetch.creditorsContract
    },
    [actionTypes.CASH]:{
        apiFn:Fetch.cash
    },
    [actionTypes.WITHDRAW]:{
        apiFn:Fetch.withdraw
    },
    [actionTypes.DIRECT_INVEST_TRANSFER]:{
        apiFn:Fetch.directInvestTransfer
    },
    [actionTypes.DIRECT_INVEST_COUPON]:{
        apiFn:Fetch.directInvestCoupon
    },
    [actionTypes.ACTIVE_EXCHANGE]:{
        apiFn:Fetch.activeExchange
    },
    [actionTypes.VERIFY_ASSIGN]:{
        apiFn:Fetch.verifyAssign
    },
    [actionTypes.DEPOSITBS_PLANB]:{
        apiFn:Fetch.depositbs
    },
    [actionTypes.DEPOSITBS_DETAILS]:{
        apiFn:Fetch.depositbsDetails
    },
    [actionTypes.DEPOSITBS_INVEST]:{
        apiFn:Fetch.depositbsInvest
    },
    [actionTypes.DEPOSITBS_ACCOUNTCAPITALINFO]:{
        apiFn:Fetch.depositbsAccountCapitalInfo
    },
    [actionTypes.DEPOSITBS_BUY]:{
        apiFn:Fetch.depositbsBuy
    },
    [actionTypes.DEPOSITBS_BUYRESULT]:{
        apiFn:Fetch.depositbsBuyResult
    },
    [actionTypes.DEPOSITBS_CONTRACT]:{
        apiFn:Fetch.depositbsContract
    },
    [actionTypes.DEPOSITA_SINVEST]:{
        apiFn:Fetch.depositasInvest
    },
    [actionTypes.DEPOSITAS_CONTRACT]:{
        apiFn:Fetch.depositasContract
    },
    [actionTypes.NEW_USER_ACTIVITY]:{
        apiFn:Fetch.newUserActivity
    },
    [actionTypes.UPLOAD_FEED_BACK_IMG]:{
        apiFn:Fetch.uploadFeedBackImg
    },
    [actionTypes.GATHER_DETAIL]:{
        apiFn:Fetch.gatherDetail
    }
}
