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
    },//存管充值
    ReChargeSuccess  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeSuccess').default);
        }, 'ReChargeSuccess');
    },//存管充值成功
    ReChargeFail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/my/assetStatistics/balance/reChargeFail').default);
        }, 'ReChargeFail');
    }//存管充值失败