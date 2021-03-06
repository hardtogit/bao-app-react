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
    [actionTypes.STORE_BIND_MOBILE_MODIFY]: { // 修改绑定手机
        apiFn: Fetch.storeBindMobileModify
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
    [actionTypes.STORE_STATUS_INFO]:{//存管开通信息
        apiFn:Fetch.storeStatusInfo
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
    [actionTypes.NEW_TRADE_PASSWORD_SET]:{
       apiFn: Fetch.newTradePasswordSet
    },
    [actionTypes.TRADE_PASSWORD_SET]:{//新的忘记密码设置
        apiFn: Fetch.tradePasswordSet
    },
    [actionTypes.TRADE_PASSWORD_MODIFY]:{
       apiFn: Fetch.tradePasswordModify
    },
    [actionTypes.STORE_TRADE_PASSWORD_MODIFY]:{
        apiFn: Fetch.storeTradePasswordModify
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
    [actionTypes.NEW_TRANSACTION_CODE]:{
        apiFn:Fetch.storeSendCode
    },
    [actionTypes.LOGIN_OUT]:{
        apiFn:Fetch.logout
    },
    [actionTypes.CHECK_VERIFY_CAPTCHA_W]:{
        apiFn: Fetch.verifycode
    },
    [actionTypes.NEW_CHECK_VERIFY_CAPTCHA_W]:{
        apiFn: Fetch.storeVerifyCode
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
    [actionTypes.NEW_CASH]:{//新的提现
        apiFn:Fetch.newCash
    },
    [actionTypes.SERVICE_CHARGE_RULE]:{//新的提现
        apiFn:Fetch.serviceChargeRule
    },
    [actionTypes.IDCARD_UPLOAD]:{//上传身份证
        apiFn:Fetch.idCardUpload
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
    },
    [actionTypes.GATHER_PROBLEMS]:{
        apiFn:Fetch.gatherProblems
    },
    [actionTypes.GATHER_BID_DETAIL]:{
        apiFn:Fetch.gatherBidDetail
    },
    [actionTypes.GATHER_MY_HEADER]:{
        apiFn:Fetch.gatherMyHeader
    },
    [actionTypes.YOU_DETAIL]:{
        apiFn:Fetch.youDetail
    },
    [actionTypes.YOU_PROBLEMS]:{
        apiFn:Fetch.youProblems
    },
    [actionTypes.YOU_BID_DETAIL]:{
        apiFn:Fetch.youBidDetail
    },
    [actionTypes.YOU_MY_HEADER]:{
        apiFn:Fetch.youMyHeader
    },
    [actionTypes.GATHER_CONTRACT]:{//聚点合同
        apiFn:Fetch.gatherContract
    },
    [actionTypes.GATHER_SERVER_CONTRACT]:{//聚点服务合同
        apiFn:Fetch.gatherServerContract
    },
    [actionTypes.GET_STORE_USER_INFO]:{//获取注册存管相关信息
        apiFn:Fetch.getStoreUserInfo
    },
    [actionTypes.REG_STORE]:{//注册存管
        apiFn:Fetch.regStore
    },
    [actionTypes.REG_VERIFY]:{//验证存管是否注册成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.SEND_VERIFY]:{//验证存管短信是否发送成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.BIND_VERIFY]:{//验证存管短信是否发送成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.RECHARGE_VERIFY]:{//验证存管短信是否发送成功
        apiFn:Fetch.rechargeVerify
    },
    [actionTypes.CODE_RIGHT_VERIFY]:{//验证验证码是否正确
        apiFn:Fetch.regVerify
    },
    [actionTypes.CASH_VERIFY]:{//验证提现是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.PAY_VERIFY]:{//验证余额支付之后成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.CARD_PAY_VERIFY]:{//验证银行卡支付是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.GATHER_PAY_VERIFY]:{//验证聚点余额支付
        apiFn:Fetch.regVerify
    },
    [actionTypes.GATHER_CARD_VERIFY]:{//验证聚点银行卡支付是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.CREDITOR_PAY_VERIFY]:{//验证债权余额支付
        apiFn:Fetch.regVerify
    },
    [actionTypes.CREDITOR_CARD_VERIFY]:{//验证债权银行卡支付是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.ACCREDIT_VERIFY]:{//验证免密是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.PASSWORD_CHANGE_VERIFY]:{//验证密码修改是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.FORGET_VERIFY]:{//验证密码修改是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.PUBLIC_VERIFY]:{//验证密码修改是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.UNBIND_VERIFY]:{//验证解绑是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.CHANGE_CODE_VERIFY]:{//验证存管修改手机号验证码是否发送成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.CHANGE_CODE_RIGHT_VERIFY]:{//验证存管修改手机号验证码是否发送成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.VERIFY_BIND_MOBILE]:{//验证更换手机号是否成功
        apiFn:Fetch.regVerify
    },
    [actionTypes.GET_PROVINCE]:{//获取省份
        apiFn:Fetch.getProvince
    },
    [actionTypes.GET_CITY]:{//获取城市
        apiFn:Fetch.getCity
    },
    [actionTypes.GET_BANK]:{//获取银行
        apiFn:Fetch.getBank
    },
    [actionTypes.GET_BANK_BIND_LIST]:{//获取银行
        apiFn:Fetch.getBankBindList
    },
    [actionTypes.GET_POINT]:{//获取网点
        apiFn:Fetch.getPoint
    },
    [actionTypes.STORE_SEND_CODE]:{//存管发送验证码
        apiFn:Fetch.storeSendCode
    },
    [actionTypes.STORE_SEND_CODE_CHANGE]:{//存管修改手机号发送验证码
        apiFn:Fetch.storeSendCode
    },
    [actionTypes.STORE_VERIFY_CODE]:{//存管验证验证码
        apiFn:Fetch.storeVerifyCode
    },
    [actionTypes.STORE_CHANGE_PHONE_VERIFY_CODE]:{//存管修改绑定手机
        apiFn:Fetch.storeVerifyCode
    },
    [actionTypes.FREE_ACCREDIT]:{//存管验证验证码
        apiFn:Fetch.freeAccredit
    },
    [actionTypes.STORE_BIND_CAR]:{//绑卡
        apiFn:Fetch.storeBindCar
    },
    [actionTypes.UNBIND_CARD]:{//绑卡
        apiFn:Fetch.unbindCard
    },
    [actionTypes.GET_MY_CARD_LIST]:{//获取我的银行卡
        apiFn:Fetch.getMyCardList
    },
    [actionTypes.NEW_RECHARGE]:{//充值
        apiFn:Fetch.newRecharge
    },
    [actionTypes.GATHER_BUY]:{//购买聚点+
        apiFn:Fetch.gatherBuy
    },
    [actionTypes.GATHER_QUIT]:{//退出聚點+
        apiFn:Fetch.gatherQuit
    },
    [actionTypes.NEW_DIRECTINVEST_BUY]:{//余额方式购买直投
        apiFn:Fetch.gatherBuy
    },
    [actionTypes.NEW_CARD_BUY]:{//银行卡购买直投
    apiFn:Fetch.newCardBuy
    },
    [actionTypes.GATHER_BALANCE_BUY]:{//余额方式购买聚点+
        apiFn:Fetch.gatherBuy
    },
    [actionTypes.GATHER_CARD_BUY]:{//银行卡购买聚点+
        apiFn:Fetch.newCardBuy
    },
    [actionTypes.CREDITOR_BALANCE_BUY]:{//余额方式购买债权
        apiFn:Fetch.gatherBuy
    },
    [actionTypes.CREDITOR_CARD_BUY]:{//银行卡购买债权
        apiFn:Fetch.newCardBuy
    },
    [actionTypes.GET_CAPTCHA]:{
        apiFn:Fetch.getCapcha
    },
    [actionTypes.FRIDAY_POP]:{   //星期五活动弹窗
        apiFn:Fetch.fridayPop
    },
    [actionTypes.IF_SYNC]:{   //星期五活动弹窗
        apiFn:Fetch.ifSync
    },
    [actionTypes.QUERY_UPLOAD]:{   //星期五活动弹窗
        apiFn:Fetch.queryUpload
    },
    [actionTypes.GET_VIP]:{   //获取用户VIP信息
        apiFn:Fetch.getVipInfo
    },
    [actionTypes.GET_VIP_STR]:{   //获取用户VIP信息
        apiFn:Fetch.getVipStr
    },
    [actionTypes.GET_PRIV_PROFIT]:{   //特权规则-收益
        apiFn:Fetch.getPrivilegeProfit
    },
    [actionTypes.GET_GOODS_TYPE_LIST]:{   //获取用户VIP信息
        apiFn:Fetch.getGoodsTypeList
    },
    [actionTypes.GET_CASH_DETALE]:{   //获取兑换详情
        apiFn:Fetch.getCashDetail
    },
    [actionTypes.CANCEL_CASH_GOODS]:{   //取消兑换
        apiFn:Fetch.cancelCashGoods
    },
    [actionTypes.VOUCHER_GET]:{   //领取抵用券
        apiFn:Fetch.voucherGet
    },
    [actionTypes.RATE_GET]:{   //领取加息券
        apiFn:Fetch.rateGet
    },
    [actionTypes.GET_NOTICE_DETAIL]:{   //商城通知详情
        apiFn:Fetch.getNoticeDetail
    },
    [actionTypes.GET_PRIV_BASIC]:{   //用户基础特权
        apiFn:Fetch.getPrivilegeBasic
    },

    [actionTypes.GET_RATE_COUPONS]:{    //会员中心加息券列表
        apiFn:Fetch.getRateCoupons
    },
    [actionTypes.GET_VOUCHER_COUPONS]:{    //会员中心抵用券列表
        apiFn:Fetch.getVoucherCoupons
    },
    [actionTypes.GET_RATE_INFO]:{    //加息券领取情况
        apiFn:Fetch.getRateInfo
    },
    [actionTypes.GET_VOUCHER_INFO]:{    //抵用券领取情况
        apiFn:Fetch.getVoucherInfo
    },
    [actionTypes.GET_VIP_ANNUAL]:{    //会员年化
        apiFn:Fetch.getVipAnnual
    },
    [actionTypes.GET_HOT_ACTIVITY]:{    //热门活动列表
        apiFn:Fetch.getHotActivityList
    },
    [actionTypes.GET_ADDRESS_LIST]:{    //收货地址列表
        apiFn:Fetch.getAddressList
    },
    [actionTypes.SET_ADDRESS]:{    //设置默认地址
        apiFn:Fetch.setAddress
    },
    [actionTypes.EDIT_ADDRESS]:{    //编辑地址
        apiFn:Fetch.editAddress
    },
    [actionTypes.ADD_ADDRESS]:{    //新增地址
        apiFn:Fetch.addAddress
    },
    [actionTypes.DEL_ADDRESS]:{    //删除地址
        apiFn:Fetch.delAddress
    },
    [actionTypes.PRODUCT_DETAIL]:{    //删除地址
        apiFn:Fetch.productDetail
    },
    [actionTypes.CASH_PRODUCT]:{    //商品兑换
        apiFn:Fetch.cashProduct
    },
    [actionTypes.GET_HELP_LIST]:{   //商城帮助问题
        apiFn:Fetch.getHelpList
    },
    [actionTypes.GET_FIND_BANNER]:{   //发现Banner
        apiFn:Fetch.findBanner
    },
    [actionTypes.GET_MALL_BANNER]:{   //商城Banner
        apiFn:Fetch.mallBanner
    },
    [actionTypes.GET_DEFAULT_TAB]:{   //星期五活动弹窗
        apiFn:Fetch.getDefaultTab
    },
    [actionTypes.GET_PREHEAT_INFO]:{    //周五活动币列表
        apiFn:Fetch.getPreheatInfo
    },
    [actionTypes.PREHEAT_RECEIVE]:{    //领取礼品
        apiFn:Fetch.preheatReceive
    },
    [actionTypes.PREHEAT_STATUS]:{    //查询领取状态
        apiFn:Fetch.preheatStatus
    },
    [actionTypes.GET_CASH_LOG]:{    //提现列表
        apiFn:Fetch.getCashLog
    },
    [actionTypes.CANCEL_CASH]:{    //取消提现
        apiFn:Fetch.cancelCash
    },
    [actionTypes.GET_PACKET]:{    //获取投资红包
        apiFn:Fetch.getPacket
    },
    [actionTypes.OPEN_PACKET]:{    //打开投资红包
        apiFn:Fetch.openPacket
    },
    [actionTypes.GET_RECHARGE_LOG]:{    //打开投资红包
        apiFn:Fetch.getReChargeLog
    },
    [actionTypes.GET_CHARGE_STATUS]:{    //获取平台充值按钮状态
        apiFn:Fetch.getChargeStatus
    },
    [actionTypes.GET_QIESTION_LIST]:{    //获取风险评测问题列表
        apiFn:Fetch.getQuestionList
    },
    [actionTypes.GET_EDUCATION_INFO]:{    //风险评测个人信息
        apiFn:Fetch.getEducationInfo
    },
    [actionTypes.SUB_ANSWER]:{    //风险评测个人信息
        apiFn:Fetch.subAnswer
    },
    [actionTypes.QUESTION_TOP]:{    //风险评测问题说明信息
        apiFn:Fetch.questionTop
    },

    [actionTypes.GO_BANK_PAGE]:{
        apiFn:Fetch.goBankPage
    },
    [actionTypes.AUTHORIZATION_TEXT]:{
        apiFn:Fetch.authorizationText
    },
    [actionTypes.WISDOM_DETAIL]:{ //智享详情
        apiFn:Fetch.wisdomDetail
    },
    [actionTypes.MY_WISDOM_INFO]:{ //智享信息
        apiFn:Fetch.myWisdomInfo
    },
    [actionTypes.MY_WISDOM_DETAIL]:{ //智享详情
        apiFn:Fetch.myWisdomDetail
    },
    [actionTypes.GET_EMPTY_CONTRACTS_LIST]:{ //空白合同列表
        apiFn:Fetch.getEmptyContractsList
    },
    [actionTypes.GET_CONTRACT_DETAIL]:{ //空白合同详情
        apiFn:Fetch.getContractDetail
    },
    [actionTypes.GET_FILL_CONTRACTS_LIST]:{ //购买合同页列表
        apiFn:Fetch.getFillContractsList
    },
    [actionTypes.GET_DETAIL_BY_PRODUCT_ID]:{ //根据产品获取合同详情
        apiFn:Fetch.getDetailByProductId
    },
    [actionTypes.GET_DETAIL_BY_CONTRACT_ID]:{ //根据合同ID获取合同详情
        apiFn:Fetch.getDetailByContractId
    },
    [actionTypes.GET_PRODUCT_DISPLAY]:{
        apiFn:Fetch.getProductDisplay
    },
    [actionTypes.GET_YOU_DETAIL]:{
        apiFn:Fetch.getYouDetail
    }


}
