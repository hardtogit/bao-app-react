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
    Fetch.preheatReceive = (id,consignee,phone,address,baoAuth) => { return Fetch(`api/active/receive?activityId=${id}&consignee=${consignee}&phone=${phone}&address=${address}&baoAuth=${baoAuth}`, 'GET') }
    //领取
    Fetch.preheatStatus = (id,baoAuth) => { return Fetch(`api/active/getStatus?activityId=${id}&baoAuth=${baoAuth}`, 'GET') }
}
export default requests