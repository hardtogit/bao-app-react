/**
 * Created by xiangguo .
 * time:2018/3/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
// import active from './pages/user/active/index'
// import inviteParticulars from './pages/find/invite/particulars' /*邀请明细*/
// import inviteRule from './pages/find/invite/rule' /*邀请规则*/
// import ScratchesRule from './pages/my/scratchesCard/rule' /*刮刮卡规则*/
// import FridayActivityRule from './pages/my/fridayActivity/rule' /*刮刮卡规则*/
// import depositDetails from './pages/finance/deposit/depositDetails/index'  /* 定存宝详情*/
// import planDetails from './pages/finance/deposit/planDetails/index' /* 更多详情*/
// import Cash from './pages/my/assetStatistics/balance/cash/index'/*提现*/
// //发现模块
// import findIndex from './pages/find'
// import Invite from './pages/find/invite/index'
// import preheat from './pages/wechatPreheat/index'
// import preheatConfirm from './pages/wechatPreheat/preheatConfirm/index'
//
// // 我的模块
// import choicePoint from './pages/my/setting/choicePoint'
// import choiceBank from './pages/my/setting/choiceBank'


// import MobileBind from './pages/my/setting/mobileBind'
// import  MobileBindNew from './pages/my/setting/mobileBind/new'
// import MobileBindModify from './pages/my/setting/mobileBindModify'
// import Problems from './pages/my/setting/problems'
// import IdentityAuth from './pages/my/setting/identityAuth'
// import bankcardAddIndex from './pages/my/setting/bankcardAdd/index'
// import tradePasswordNew from './pages/my/setting/tradePasswordSet/new'



// import User from './pages/my/index'
// import IndexTab from './components/IndexTabs'
// import ruleRate from './pages/my/interestRate/rule'
// import ruleVoucher from './pages/my/voucher/rule'
// import financialIndex from './pages/home/'
// import Home from './pages/home/index';
//
// import Withdrawals from './pages/my/assetStatistics/balance/cash/index' //提现
// import cashSuccess from './pages/my/assetStatistics/balance/success'  //提现成功
// import privacy from './pages/my/passport/agreement/privacy'
// import service from './pages/my/passport/agreement/service'
// import zqTransfer from './pages/my/assetStatistics/directInvest/zqTransfer'
// import inviteSuccess from './pages/my/inviteSuccess/index'
// //意见反馈
// import FeedbackIndex from './pages/my/setting/feedback'
// import ProductList from './pages/active/productList'
/*****我的设置******/
export const Setting = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/index').default);
        }, 'Setting');
    },//设置首页
    VerifyPhone = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/verifyPhone').default);
        }, 'VerifyPhone');
    },//验证手机
    NewRegStore = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/newRegStore').default);
        }, 'NewRegStore');
    },//存管一步注册
    CardBind = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/cardBind').default);
        }, 'CardBind');
    },//存管绑卡
    BindSuccess = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/bindSuccess').default);
        }, 'BindSuccess');
    },//绑卡成功页面
    RegStoreSuccess = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/regStoreSuccess').default);
        }, 'RegStoreSuccess');
    },//注册成功
    UserNameModify = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/usernameModify').default);
        }, 'UserNameModify');
    },//验证
    SecurityCenter = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/securityCenter').default);
        }, 'SecurityCenter');
    },//安全中心
    LoginPasswordModify = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/loginPasswordModify').default);
        }, 'LoginPasswordModify');
    },//登录密码修改
    TradePasswordSet = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/tradePasswordSet').default);
        }, 'TradePasswordSet');
    },//设置交易密码
    TradePasswordModify = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/tradePasswordModify').default);
        }, 'TradePasswordModify');
    },//修改交易密码
    TradePasswordForgetVerifyMobile = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/tradePasswordForget/verifyMobile').default);
        }, 'TradePasswordForgetVerifyMobile');
    },//验证手机
    TradePasswordForget = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/tradePasswordForget').default);
        }, 'TradePasswordForget');
    },//验证身份信息
    MobileBind = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/mobileBind').default);
        }, 'MobileBind');
    },//绑定手机
    MobileBindNew = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/mobileBind/new').default);
        }, 'MobileBindNew');
    },//绑定新手机
    MobileBindModify = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/mobileBindModify').default);
        }, 'MobileBindModify');
    },//修改绑定手机
    Problems = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/problems').default);
        }, 'Problems');
    },//常见问题
    IdentityAuth = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/identityAuth').default);
        }, 'IdentityAuth');
    },//身份认证
    BankcardAddIndex = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/bankcardAdd/index').default);
        }, 'BankcardAddIndex');
    },//选择银行卡
    TradePasswordNew = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/tradePasswordSet/new').default);
        }, 'TradePasswordNew');
    },//设置新交易密码
    Active = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/user/active/index').default);
        }, 'Active');
    },//新人活动
    ScratchesRule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/scratchesCard/rule').default);
        }, 'ScratchesRule');
    },//挂挂卡规则
    FridayActivityRule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/fridayActivity/rule').default);
        }, 'FridayActivityRule');
    },//活动规则
    Cash = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/balance/cash/index').default);
        }, 'Cash');
    },//提现
    User = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/index').default);
        }, 'User');
    },//TODO
    RuleRate = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/interestRate/rule').default);
        }, 'RuleRate');
    },//加息劵规则
    RuleVoucher = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/voucher/rule').default);
        }, 'RuleVoucher');
    },//抵用劵规则
    FinancialIndex = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/home/').default);
        }, 'FinancialIndex');
    },//TODO
    FeedbackIndex = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/feedback').default);
        }, 'FeedbackIndex');
    },//意见反馈
    Withdrawals = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/balance/cash/index').default);
        }, 'Withdrawals');
    },//TODO 提现页面
    CashSuccess = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/balance/success').default);
        }, 'CashSuccess');
    },//TODO 提现申请成功
    Privacy = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/passport/agreement/privacy').default);
        }, 'Privacy');
    },//安全隐私条例
    Service = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/passport/agreement/service').default);
        }, 'Service');
    },//宝点网服务协议
    ShopCenterRule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/shopCenter/rule').default);
        }, 'ShopCenterRule');
    },//点币使用规则
    SecurityCardChangeApply = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/securityCard/changeApply').default);
        }, 'SecurityCardChangeApply');
    },//更换安全卡申请页面
    SiteList = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/site/list/index').default);
        }, 'SiteList');
    },//收货地址列表
    SiteAdd = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/site/add/index').default);
        }, 'SiteAdd');
    },//收货地址新增
    SiteEdit = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/site/edit/index').default);
        }, 'SiteEdit');
    }//收货地址编辑

/****我的相关****/
export const Detail = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/my/assetStatistics/balance/mine/index').default);
    }, 'Detail');
    },//TODO 我的余额
    Verify = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/balance/charge/recharge.js').default);
        }, 'Verify');
    },//充值身份验证
    Creditors = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/creditors/mine/index').default);
        }, 'Creditors');
    },//我的债权转让
    CreditorsRecords = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/creditors/records/index').default);
        }, 'CreditorsRecords');
    },//我的零钱宝
    MyDemandIndex = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/demand/mine/index').default);
        }, 'MyDemandIndex');
    },//我的零钱宝记录
    MyDemandRecords = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/demand/records/index').default);
        }, 'MyDemandRecords');
    },//我的零钱宝赎回记录
    DemandReddem = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/demand/reddem/index').default);
        }, 'DemandReddem');
    },//零钱宝赎回
    ReddemSuccese = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/demand/redemptionRequest/index').default);
        }, 'ReddemSuccese');
    },//零钱宝成功
    CreditorRights = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/creditorRights/index').default);
        }, 'CreditorRights');
    },//债权资产详情
    HistoryRecord = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/historyRecord/index').default);
        }, 'HistoryRecord');
    },//历史记录资产详情
    About = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/about/index').default);
        }, 'About');
    },//关于我们
    VersionInfo = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/versionInfo/index').default);
        }, 'VersionInfo');
    },//版本介绍
    PastAccrule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/interestRate/overdue/index').default);
        }, 'PastAccrule');
    },//过期加息券
    CoinsRecord = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/records/index').default);
        }, 'CoinsRecord');
    },//点币获得记录
    ExchangeList = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/exchangeList/index').default);
        }, 'ExchangeList');
    },//点币兑换记录
    CoinsRule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/rules/index').default);
        }, 'CoinsRule');
    },//点币规则
    TrueExchangeConfirm = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/trueExchangeConfirm/index').default);
        }, 'TrueExchangeConfirm');
    },//确认兑换
    ActiveConfirm = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/activeConfirm').default);
        }, 'ActiveConfirm');
    },//TODO 确认兑换
    ExchangeSuccess = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/exchangeSuccess/index').default);
        }, 'ExchangeSuccess');
    },//兑换成功
    ExchangeFail = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/coin/exchangeFail/index').default);
        }, 'ExchangeFail');
    },//兑换失败
    Vouchers = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/voucher/myVouchers/index').default);
        }, 'Vouchers');
    },//抵用券
    VouchersPast = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/voucher/overdue/index').default);
        }, 'VouchersPast');
    },//过期抵用券
    FinanciaIndex = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/financialManagement/index/index').default);
        }, 'FinanciaIndex');
    },//我的理财金
    FinanciaRecords = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/financialManagement/records/index').default);
        }, 'FinanciaRecords');
    },//理财记录
    RedPacket = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/bonus/myBonuses/index').default);
        }, 'RedPacket');
    },//红包
    RedPacketRule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/bonus/myBonuses/rule').default);
        }, 'RedPacketRule');
    },//红包规则
    SecurityCard = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/setting/securityCard/index').default);
        }, 'SecurityCard');
    },//安全卡
    AutoBuy = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/autoBid/index').default);
        }, 'AutoBuy');
    },//自动投标
    AutoBuyRule = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/autoBid/rule').default);
        }, 'AutoBuyRule');
    },//自动投标规则
    CheckPhone = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/user/checkPhone').default);
        }, 'CheckPhone');
    },//验证原手机号
    ChangeLoginPwd = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/user/changeLoginPwd').default);
        }, 'ChangeLoginPwd');
    },//修改登录密码
    ChangeUserName = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/user/changeUserName').default);
        }, 'ChangeUserName');
    },//修改用户名
    ChangePayPwd = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/user/changePayPwd/index').default);
        }, 'ChangePayPwd');
    }//TODO 修改交易密码
