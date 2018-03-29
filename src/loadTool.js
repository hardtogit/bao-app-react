/**
 * Created by xiangguo .
 * time:2017/7/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
    //聚点+
export const NewCharge  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/newCharge').default);
        }, 'NewCharge');
    },//老余额首页
    OldCharge  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/oldCharge').default);
        }, 'OldCharge');
    },//老余额首页
    CashOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/cashOld').default);
        }, 'CashOld');
    },//老的提现页面
    CashLog  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/cashLog').default);
        }, 'CashLog');
    },//提现记录
    CashRule  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/cashRule').default);
        }, 'CashRule');
    },//提现规则
    ReChargeOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeOld').default);
        }, 'ReChargeOld');
    },//存管充值
    ReChangeMain = (location, cb) =>{
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChangeMain').default);
        }, 'ReChangeMain');
    },//充值总入口
    ReChargeLog = (location, cb) =>{
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeLog').default);
        }, 'ReChargeLog');
    },//充值明细
    Main = (location, cb) =>{
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/main').default);
        }, 'Main');
    },//余额总入口
    CashMain = (location, cb) =>{
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/cashMain').default);
        }, 'CashMain');
    },//提现总入口
    ReChargeRule = (location, cb) =>{
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeRule').default);
        }, 'ReChargeRule');
    },//充值总入口
    DepositInvestSuccessOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/investSuccessOld').default);
        }, 'DepositInvestSuccessOld');
    },//存管充值
    CreditorBuyOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/creditors/buyOld').default);
        }, 'CreditorBuyOld');
    },//老的存管购买
    AutoBuyIndex  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/directInvest/autoBidIndex').default);
        }, 'AutoBuyIndex');
    },//老的存管购买
    MoneyLogOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/recordsOld').default);
        }, 'MoneyLogOld');
    },//老的余额明细
    ReChargeSuccess  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeSuccess').default);
        }, 'ReChargeSuccess');
    },//存管充值成功
    ReChargeFail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeFail').default);
        }, 'ReChargeFail');
    },//存管充值失败
    IdCardUpload  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/user/idCardUpload').default);
        }, 'IdCardUpload');
    },//身份证上传
    IdCardUploadExplain  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/user/idCardUploadExplain').default);
        }, 'IdCardUploadExplain');
    },//上传说明
    DangerContract  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/contracts/danger').default);
        }, 'DangerContract');
    },//风险提示
    ServiceContract  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/contracts/service').default);
        }, 'ServiceContract');
    },//服务协议
    BorrowContract  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/contracts/borrow').default);
        }, 'BorrowContract');
    },//借款合同
    StoreContract  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/contracts/store').default);
        }, 'StoreContract');
    },//存管协议
    MyBankCard  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/myBankCard').default);
        }, 'MyBankCard');
    },//我的银行卡
    NewRegStore  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/newRegStore').default);
        }, 'NewRegStore');
    },//新的注册绑卡
    BankCardManage  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/bankCardManage').default);
        }, 'BankCardManage');
    },//我的银行卡
    ChoiceMyCard  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/user/choiceMyCard').default);
        }, 'ChoiceMyCard');
    },//我的银行卡

    //风险评测
    RiskEvaluation  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/riskEvaluation').default);
        }, 'RiskEvaluation');
    },
    //风险评测答题
    RiskEvaluationQuestion  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/riskEvaluationQuestion').default);
        }, 'RiskEvaluationQuestion');
    }


//成功失败模版
export const SuccessTemplate  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/template/successTemplate').default);
    }, 'SuccessTemplate');
},
    BankPage  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/bankPage').default);
        }, 'BankPage');
    },
    Authorization=(location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/setting/authorization').default);
        }, 'Authorization');
    }