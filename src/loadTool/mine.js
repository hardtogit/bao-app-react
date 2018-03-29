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
    }//设置新交易密码


