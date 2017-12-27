/**
 * Created by xiangguo .
 * time:2017/6/5 0005.
 * email:413401168@qq.com.
 * use:auto...
 */
const requests = (Fetch) => {
    // 活动列表
    Fetch.getPreheatInfo = () => { return Fetch(`api/active/getPreheatInfo`, 'GET') }
}
export default requests