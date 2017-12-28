/**
 * Created by xiangguo .
 * time:2017/6/5 0005.
 * email:413401168@qq.com.
 * use:auto...
 */
const requests = (Fetch) => {
    // 活动列表
    Fetch.getPreheatInfo = () => { return Fetch(`api/active/getPreheatInfo`, 'GET') }
    //领取
    Fetch.preheatReceive = () => { return Fetch(`api/active/receive`, 'GET') }
    //领取
    Fetch.preheatStatus = () => { return Fetch(`api/active/getStatus`, 'GET') }
}
export default requests