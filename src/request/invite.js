/**
 * Created by xiangguo .
 * time:2017/6/5 0005.
 * email:413401168@qq.com.
 * use:auto...
 */
const requests = (Fetch) => {
    // 邀请明细
    Fetch.inviteParticulars = (page) => { return Fetch(`api/users/invite/detail?page=${page}&pageSize=10`, 'GET') }

}
export default requests