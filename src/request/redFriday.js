/**
 * scratcheCard request interface
 */

const requests = (Fetch) => {
  // 星期五活动弹窗
  Fetch.fridayPop = () => { return Fetch('api/users/firday/popup', 'GET') }
    // 星期五活动币列表
    Fetch.fridayCoinList = (page) => { return Fetch(`api/users/firday?page=${page}`, 'GET') }
}

export default requests
