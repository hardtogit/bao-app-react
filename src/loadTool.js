/**
 * Created by xiangguo .
 * time:2017/7/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
    //聚点+
export const GatherDetail  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/finance/deposit/gatherDetail').default);
    }, 'GatherDetail');
   },//详情
    GatherDeposits  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherDeposits').default);
        }, 'GatherDeposits');
    }, //标的列表
    GatherProblems  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherProblems').default);
        }, 'GatherProblems');
    }, //常见问题
    GatherJoin  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherJoin').default);
        }, 'GatherJoin');
    },//加入记录
    GatherBuy  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherBuy').default);
        }, 'GatherBuy');
    },//购买
    GatherBidDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherBidDetail').default);
        }, 'GatherBidDetail');
    },//聚点标的详情
    GatherBorrowDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherBorrowDetail').default);
        }, 'GatherBorrowDetail');
    }, //借款详情
    GatherBackDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherBackDetail').default);
        }, 'GatherBackDetail');
    }, //还款详情
    GatherInvestRecord  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherInvestRecord').default);
        }, 'GatherInvestRecord');
    },//投资记录
    GatherMy  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/gather/gatherMy').default);
        }, 'GatherMy');
    },//我的聚点+
    GatherMyDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/gather/gatherMyDetail').default);
        }, 'GatherMyDetail');
    },//聚点+详情
    GatherProjects  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/gather/gatherProjects').default);
        }, 'GatherProjects');
    },//我的聚点+项目详情
    NewCharge  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/newCharge').default);
        }, 'NewCharge');
    },//老余额首页
    CashOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/cashOld').default);
        }, 'CashOld');
    },//老的提现页面
    ReChargeOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeOld').default);
        }, 'ReChargeOld');
    },//存管充值
    DirectBuyOld  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/directInvest/directBuyOld').default);
        }, 'DirectBuyOld');
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
    HotActivity  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/find/hotActivity').default);
        }, 'HotActivity');
    },//热门活动

    Address  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/find/address').default);
        }, 'Address');
    },//地址
    EditAddress  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/find/editAddress').default);
        }, 'EditAddress');
    },//编辑地址
    AddAddress  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/find/addAddress').default);
        }, 'AddAddress');
    },//新增地址
    ProductDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/find/productDetail').default);
        }, 'ProductDetail');
    },//新增地址
    ProductCash  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/find/productCash').default);
        }, 'ProductCash');
    }//新增地址


//成功失败模版
export const SuccessTemplate  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/template/successTemplate').default);
    }, 'SuccessTemplate');
}