/**
 * Created by xiangguo .
 * time:2018/3/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
/****聚点+****/
export const  GatherDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherDetail').default);
        }, 'GatherDetail');
    },//详情
    GatherDeposits  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherDeposits').default);
        }, 'GatherDeposits');
    }, //标的列表
    GatherProblems  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherProblems').default);
        }, 'GatherProblems');
    }, //常见问题
    GatherJoin  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherJoin').default);
        }, 'GatherJoin');
    },//加入记录
    GatherBuy  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherBuy').default);
        }, 'GatherBuy');
    },//购买
    GatherBidDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherBidDetail').default);
        }, 'GatherBidDetail');
    },//聚点标的详情
    GatherBorrowDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherBorrowDetail').default);
        }, 'GatherBorrowDetail');
    }, //借款详情
    GatherBackDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherBackDetail').default);
        }, 'GatherBackDetail');
    }, //还款详情
    GatherInvestRecord  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/gatherInvestRecord').default);
        }, 'GatherInvestRecord');
    },//投资记录
    GatherMy  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/gather/gatherMy').default);
        }, 'GatherMy');
    },//我的聚点+
    GatherMyDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/gather/gatherMyDetail').default);
        }, 'GatherMyDetail');
    },//聚点+详情
    GatherProjects  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/gather/gatherProjects').default);
        }, 'GatherProjects');
    }//我的聚点+项目详情

/****直投****/
export const  DirectBuyOld  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/finance/directInvest/directBuyOld').default);
    }, 'DirectBuyOld');
    },//平台直投购买
    DepositDetails = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/depositDetails/index').default);
        }, 'DepositDetails');
    },//定存宝B介绍
    PlanDetails = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/planDetails/index').default);
        }, 'PlanDetails');
    },//更多详情
    DirectInvestSuccess  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/directInvest/inviteSuccess').default);
        }, 'DirectInvestSuccess');
    },//TODO 投资成功
    DirectContract = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/directInvest/directProductContract.js').default);
        }, 'DirectContract');
    },//直投合同
    PayWeb  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/payWeb').default);
        }, 'PayWeb');
    },//TODO 支付
    DepositInvestSuccess  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/deposit/investSuccess').default);
        }, 'DepositInvestSuccess');
    }//TODO 投资成功
    /****债权转让****/
    export const ZqTransfer = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/zqTransfer').default);
        }, 'ZqTransfer');
    },//TODO 债权转让
    CreditorList = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/creditors/index').default);
        }, 'CreditorList');
    },//债权转让列表
    CreditorDetail = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/creditors/product').default);
        }, 'CreditorDetail');
    },//债权转让详情
    CreditorBuy = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/creditors/buy').default);
        }, 'CreditorBuy');
    },//债权转让购买
    CreditorProtocol = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/creditors/investSuccess').default);
        }, 'CreditorProtocol');
    },//TODO 投资成功
    CreditorInvestSuccess = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/zqTransfer').default);
        }, 'CreditorInvestSuccess');
    },//债权投资成功
    WisdomMain = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/wisdom/wisdomMain').default);
        }, 'WisdomMain');
    },//聚点债转首页
    WisdomBuy= (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/wisdom/wisdomBuy').default);
        }, 'WisdomBuy');
    },//聚点债转购买
    WisdomMy= (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/wisdom/wisdomMy').default);
        }, 'WisdomMy');
    },//我的聚点债转
    WisdomRecord= (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/wisdom/wisdomRecord').default);
        }, 'WisdomRecord');
    },//聚点债转购买
    WisdomMyDetail= (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/wisdom/wisdomMyDetail').default);
        }, 'WisdomMyDetail');
    },//我的聚点债权详情
    WisdomMyMain= (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/wisdom/wisdomMyMain').default);
        }, 'WisdomMyMain');
    }//我的聚点债权详情

//TODO
/****老的零钱宝****/
    export const RelatedProjects = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/demand/relatedProjects').default);
        }, 'RelatedProjects');
    },//涉及项目
    DemandInvestFail = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/demand/investFail').default);
        }, 'DemandInvestFail');
    },// TODO 投资失败
    DemandRedeem = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/my/assetStatistics/directInvest/zqTransfer').default);
        }, 'DemandRedeem');
    },//转让
    DemandBuy = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/demand/redeem').default);
        }, 'DemandBuy');
    },//活期宝赎回
    DemandProduct = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/finance/demand/product').default);
        }, 'DemandProduct');
    }//零钱宝详情
/****合同****/
    export const EmptyTemplate = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/contracts/emptyTemplate').default);
        }, 'EmptyTemplate');
    },//空白合同详情
    FillList = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/contracts/fillList').default);
        }, 'FillList');
    },//购买页合同列表
    FillDetail = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/contracts/fillDetail').default);
        }, 'FillDetail');
    }//购买页合同详情页