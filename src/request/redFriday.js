/**
 * scratcheCard request interface
 */

const requests = (Fetch) => {
  // 星期五活动弹窗
  Fetch.fridayPop = () => { return Fetch('api/users/firday/popup', 'GET') }
}

export default requests
