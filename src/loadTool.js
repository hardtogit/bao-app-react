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
    }, //标的详情
    GatherProblems  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('./pages/finance/deposit/gatherProblems').default);
        }, 'GatherProblems');
    }