
/**************************** 产品 *****************************/
export const RELATED_PROJECTS = 'RELATED_PROJECTS';
export const FETCH_DIRECTLIST_DATA = 'FETCH_DIRECTLIST_DATA';
export const FETCH_DIRECT_DETAIL_DATA = 'FETCH_DIRECT_DETAIL_DATA';
export const CHANGE_DIRECTD_DETAIL_INDEX = 'CHANGE_DIRECTD_DETAIL_INDEX';
export const FETCH_DIRECT_BUY_RECORD_DATA = 'FETCH_DIRECT_BUY_RECORD_DATA';
export const FETCH_CREDITORSLIST_DATA = 'FETCH_CREDITORSLIST_DATA';
export const FETCH_CREDITORS_DETAIL_DATA = 'FETCH_CREDITORS_DETAIL_DATA';
export const CHANGE_CREDITORS_DETAIL_INDEX = 'CHANGE_CREDITORS_DETAIL_INDEX';
export const BUYINPUT_VALUE_CHANGE = 'BUYINPUT_VALUE_CHANGE';
export const BUYINPUT_VALUE_COUNT = 'BUYINPUT_VALUE_COUNT';
export const BUYINPUT_OVER = 'BUYINPUT_OVER';
export const SET_APPOINT_PASSWORD = 'SET_APPOINT_PASSWORD';//确定约标密码
export const Tab_CAV='Tab_CAV';//产品头部选项卡
/*************************** 发现 ******************************************/
export const FETCH_ACTIVE_LIST= 'FETCH_ACTIVE_LIST'; //开始请求活动列表
export const FETCH_ACTIVE_MASSAGE = 'FETCH_ACTIVE_MASSAGE'; //开始请求消息
export const FETCH_MY_MASSAGE_S = 'FETCH_MY_MASSAGE_S';
export const FETCH_ANNOUNCEMENT_S = 'FETCH_ANNOUNCEMENT_S';
export const SET_READ='SET_READ' //设置为已读
export const CLEAR_DATA='CLEAR_DATA' //清空data
export const CLEAR_ID='CLEAR_ID' //清空详情对象
/**************************** 账户中心 ********************************************/
export const USER_LOGIN_FLOW = 'USER_LOGIN_FLOW';//用户登录
export const LOGIN_STORAGE='LOGIN_STORAGE'//设置登陆信息
export const SCRATCHES_CARD_INFO = 'SCRATCHES_CARD_INFO';//刮刮卡详情
export const SCRATCHES_CARD_USE = 'SCRATCHES_CARD_USE';//使用刮刮卡
export const LOGOUT_STORAGE='LOGOUT_STORAGE'//退出登陆信息
export const MONEY_INFO  = 'MONEY_INFO';//资产分析
export const FETCH_MONEY_LOG = 'FETCH_MONEY_LOG';//资产记录
export const RED_PACKETS_RULE = 'RED_PACKETS_RULE';//红包规则
export const SAFE_CARD_INFO = 'SAFE_CARD_INFO';//安全卡信息
export const SIGN = 'SIGN';//签到
export const COIN_LOG = 'COIN_LOG';//点币记录
export const BONUS_LOG = 'BONUS_LOG';//红包记录
export const BONUS_INFO = 'BONUS_INFO';//红包详情
export const SITE_LIST = 'SITE_LIST';//收货地址列表
export const SITE_SET_DEFAULT = 'SITE_SET_DEFAULT';//地址设置默认
export const SITE_SET_DEL = 'SITE_SET_DEL';//地址删除
export const SITE_ADD = 'SITE_ADD';//地址新增
export const SITE_EDIT = 'SITE_EDIT';//地址编辑
export const AUTO_BUY_INFO = 'AUTO_BUY_INFO';//自动投标信息
export const AUTO_BUY = 'AUTO_BUY';//自动投标
/**************************** 其他 **********************************************/
/**************************** InfoData reducers **********************************************/
export const FETCH_INFO_DATA_REQUEST = 'FETCH_INFO_DATA_REQUEST';
export const FETCH_INFO_DATA_SUCCESS = 'FETCH_INFO_DATA_SUCCESS';
export const FETCH_INFO_DATA_FAIL = 'FETCH_INFO_DATA_FAIL';

// 定存宝详情
export const AVAILABLE_COUPONS = 'AVAILABLE_COUPONS'
export const SET_USE_COUPONS = 'SET_USE_COUPONS'

/*用户登录*/
export const USER_LOGIN = 'USER_LOGIN';

/*修改用户名*/
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USERNAME_SUCCESS = 'SET_USERNAME_SUCCESS'; // 服务端返回成功时修改本地state

// 用户信息
export const USER_INFO = 'USER_INFO'
export const USER_INFO_WITH_LOGIN='USER_INFO_WITH_LOGIN'
export const USER_INFO_COPY='USER_INFO_COPY'
// 利率
export const RATE = 'RATE'

/*发送验证码*/
export const SEND_MSG = 'SEND_MSG';
/*回款日历*/
export const CALENDAR = 'CALENDAR';

//邀请好友

export const INVITE_FRIENDS='INVITE_FRIENDS';
export const INVITE_PARTICULARS='INVITE_PARTICULARS'


//setting
export const EXIST_MOBILE = 'EXIST_MOBILE'
export const VERIFY_CAPTCHA = 'VERIFY_CAPTCHA'
export const CHECK_VERIFY_CAPTCHA = 'CHECK_VERIFY_CAPTCHA'
export const REGISTER = 'REGISTER'
export const SECURITY_CARD='SECURITY_CARD'

export const BIND_MOBILE = 'BIND_MOBILE'
export const BIND_MOBILE_MODIFY = 'BIND_MOBILE_MODIFY'
export const BIND_MOBILE_SUCCESS = 'BIND_MOBILE_SUCCESS'
export const VERIFY_CODE = 'VERIFY_CODE' // 验证手机验证码
export const LOGIN_PASSWORD_MODIFY = 'LOGIN_PASSWORD_MODIFY'
export const TRADE_PASSWORD_MODIFY = 'TRADE_PASSWORD_MODIFY'
export const TRADE_PASSWORD_SET = 'TRADE_PASSWORD_SET'
export  const GET_BANK_LIST='GET_BANK_LIST'
export  const SEND_SEC_CARD='SEND_SEC_CARD'
export const  VERIFY_CARD='VERIFY_CARD'
export  const  TRANSACTION_CODE='TRANSACTION_CODE'
export const  LOGIN_OUT='LOGIN_OUT'
export  const CLAER_USER='CLAER_USER'
export const CHECK_VERIFY_CAPTCHA_W='CHECK_VERIFY_CAPTCHA_W'
export const FEED_BACK='FEED_BACK' //意见反馈
export const CLAER_LC='CLAER_LC' //流程完毕清除
// 实名认证
export const IDENTITY_AUTH = 'IDENTITY_AUTH'
export const IDENTITY_AUTH_SUCCESS = 'IDENTITY_AUTH_SUCCESS'
// 零钱宝详情
export const DEMAND_DETAIL = 'DEMAND_DETAIL'

// 我的零钱宝账户详情
export const DEMAND_ACCOUNT_DETAIL = 'DEMAND_ACCOUNT_DETAIL'
//我的定存宝详情
export const MY_DEPOSIT_SUMMARY='MY_DEPOSIT_SUMMARY'

// 定存宝详情
export const DEPOSIT_DETAIL = 'DEPOSIT_DETAIL'
export const CREDITORS_DETAIL = 'CREDITORS_DETAIL'
export const DIRECTINVEST_DETAIL = 'DIRECTINVEST_DETAIL'
export const DEMAND_BUY = 'DEMAND_BUY'
export const DEPOSIT_BUY = 'DEPOSIT_BUY'
export const DIRECTINVEST_BUY = 'DIRECTINVEST_BUY'
export const CREDITORS_BUY = 'CREDITORS_BUY'
export const DEPOSIT_DETAILS='DEPOSIT_DETAILS'
//理財首頁banner列表

export const BANNER_LIST = 'BANNER_LIST'   // banner列表结束

/**************************** ListData reducers **********************************************/
export const FETCH_LIST_DATA_REQUEST = 'FETCH_LIST_DATA_REQUEST';// state.listdata 发起请求
export const FETCH_LIST_DATA_SUCCESS = 'FETCH_LIST_DATA_SUCCESS';// state.listdata 请求成功
export const FETCH_LIST_DATA_FAIL = 'FETCH_LIST_DATA_FAIL';// state.listdata 请求失败
export const FETCH_RELATED_PROJECTS = 'FETCH_LIST_DATA_FAIL';// state.listdata 请求失败
/注册/
export  const   REGISTER_NUM='REGISTER_NUM'
//找回密码
export const FOR_GET_PWD='FOR_GET_PWD'
export const FIND_PWD_SET='FIND_PWD_SET'
export const DEPOSIT_RECORD='DEPOSIT_RECORD'
export const DEPOSIT_RECORD_HISTORY='DEPOSIT_RECORD_HISTORY'
export const MY_DEPOSIT_INVEST='MY_DEPOSIT_INVEST' // 我的直投
export const MY_DEPOSIT_LIST='MY_DEPOSIT_LIST'   // 我的直投列表
export const MY_CREDITOR_SUMMARY='MY_CREDITOR_SUMMARY'  //我的债券
export const MY_CREDITOR_LIST='MY_CREDITOR_LIST'   //我的债券列表
export const  MY_INTEREST_RATES='MY_INTEREST_RATES'  //我的加息劵
export const OVERDUE_INTEREST_RATES='OVERDUE_INTEREST_RATES' //过期加息劵
export const USER_VOUCHERS='USER_VOUCHERS'   //我的抵用劵
export const OVERDUE_VOUCHERS='OVERDUE_VOUCHERS'  //我的过期抵用劵
export const SCRATCH_REWARDS='SCRATCH_REWARDS'   //获得奖励
export const GET_NOTICE='GET_NOTICE'  //获取公告
export const DEMAND_RECORDS='DEMAND_RECORDS'
export const HOME_TAB_CAV='HOME_TAB_CAV' //主页Index
export const PRODUCT_INDEX='PRODUCT_INDEX' //产品主页INDEX
export const PRODUCT_LIST='PRODUCT_LIST'  //活动投资
export const DEPOSIT_RECORD_RS='DEPOSIT_RECORD_RS' //直投记录
export const DIRECT_INVEST_PROPERTY_DETAIL='DIRECT_INVEST_PROPERTY_DETAIL'//直投项目item资产详情
export const DIRECT_INVEST_CONTRACT='DIRECT_INVEST_CONTRACT' // 直投合同
export const DIRECT_INVEST_PRODUCT_INFO='DIRECT_INVEST_PRODUCT_INFO' // 资产详情
export const CLEAR_INFO_DATA='CLEAR_INFO_DATA' //清楚INFO 数据
export const CLEAR_USER_INFO='CLEAR_USER_INFO' //清楚userinfo 数据
export const PRODUCT_INDEX_PAGE='PRODUCT_INDEX_PAGE' //定存宝月份
export const LOGIN_OUT_PATH='LOGIN_OUT_PATH'
export const DIRECT_INVEST_RECORDS='DIRECT_INVEST_RECORDS'//直投记录待回款项目
export const DIRECT_INVEST_RECORDS_B='DIRECT_INVEST_RECORDS_B'//直投记录待回款项目
export const DIRECT_INVEST_RECORDS_C='DIRECT_INVEST_RECORDS_C' //直投记录历史资产
export const SHOP_PRODUCT_LIST ='SHOP_PRODUCT_LIST' //商品列表
export const SHOP_PRODUCT_BAR='SHOP_PRODUCT_BAR' //商品类型
export const COMMODITY_DETAILS='COMMODITY_DETAILS' //商品详情
export const PRODUCT_EXCHANGE='PRODUCT_EXCHANGE'   //商品兑换
export const PRODUCT_EXCHANGE_RECORD='PRODUCT_EXCHANGE_RECORD' // 商品兑换记录
export const VOUCHER_LIST='VOUCHER_LIST' //点币记录
export const REDEEM='REDEEM'  //零钱包赎回
export const INVOLVE_PROJECT_LIST='INVOLVE_PROJECT_LIST' //定存宝涉及项目
export const AUTH_COOKIE='AUTH_COOKIE' // 发送cookie
export const PAY='PAY'  //充值
export const CREDITORS_RECORDS='CREDITORS_RECORDS' //债券记录
export const CREDITORS_RECORDS_HISTORY='CREDITORS_RECORDS_HISTORY'//债券记录历史
export const CREDITORS_PROPERTY_DETAIL='CREDITORS_PROPERTY_DETAIL' //债券记录详情
export const CREDITORS_PRODUCTINFO='CREDITORS_PRODUCTINFO' //债权转让详情
export const CREDITORS_CONTRACT='CREDITORS_CONTRACT' //债权转让合同
export const  CASH='CASH'  //提现
export const WITHDRAW='WITHDRAW' //提现
export const DIRECT_INVEST_TRANSFER='DIRECT_INVEST_TRANSFER'
export const DIRECT_INVEST_COUPON = 'DIRECT_INVEST_COUPON'
export const CLEAR_CONPONS='CLEAR_CONPONS'
export const ACTIVE_EXCHANGE='ACTIVE_EXCHANGE'
export const VERIFY_ASSIGN='VERIFY_ASSIGN'
export const DEPOSITBS_PLANB='DEPOSITBS_PLANB'
export const DEPOSITS_GATHER='DEPOSITS_GATHER' //聚点+列表
export const GATHER_DETAIL='GATHER_DETAIL' //聚点+详情
export const GATHER_PROBLEMS='GATHER_PROBLEMS' //聚点+问题
export const GATHER_BID_LIST='GATHER_BID_LIST' //聚点+标


export const DEPOSITBS_DETAILS='DEPOSITBS_DETAILS'
export const DEPOSITBS_INVEST='DEPOSITBS_INVEST'
export const DEPOSITBS_ACCOUNTCAPITALINFO='DEPOSITBS_ACCOUNTCAPITALINFO'
export const DEPOSITBS_ACCOUNTCAPITALLIST='DEPOSITBS_ACCOUNTCAPITALLIST'
export const DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY='DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY'
export const DEPOSITBS_ACCOUNTCAPITALLIST_NOW='DEPOSITBS_ACCOUNTCAPITALLIST_NOW'
export const DEPOSITBS_BUY='DEPOSITBS_BUY';
export const DEPOSITBS_BUYRESULT='DEPOSITBS_BUYRESULT'
export const DEPOSITBS_CONTRACT='DEPOSITBS_CONTRACT'
export const DEPOSITA_SINVEST='DEPOSITA_SINVEST'
export const DEPOSITAS_CONTRACT='DEPOSITAS_CONTRACT'
export const NEW_USER_ACTIVITY='NEW_USER_ACTIVITY'
export const UPLOAD_FEED_BACK_IMG='UPLOAD_FEED_BACK_IMG'