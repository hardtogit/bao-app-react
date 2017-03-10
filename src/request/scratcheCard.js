/**
 * scratcheCard request interface
 */

const requests = (Fetch) => {
  // 我的刮刮卡详情
  Fetch.scratchDetail = () => { return Fetch('scratch/detail', 'GET') }
  // 我的刮刮卡-刮奖
  Fetch.scratch = (id) => { return Fetch('scratch', 'POST', {id: id}) }
  // 我的刮刮卡奖励列表
  Fetch.scratchRewards = (data) => { return Fetch('scratch/rewards', 'GET', data) }
}

export default requests
