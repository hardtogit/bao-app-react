/**
 * Created by xiangguo .
 * time:2018/3/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
export const IndexTab = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/IndexTabs').default);
    }, 'IndexTab');
}//底部导航条