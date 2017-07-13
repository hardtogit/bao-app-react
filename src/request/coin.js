const requests = (Fetch) => {
  // 我的点币
  Fetch.myCoins = () => { return Fetch('coin/detail', 'GET') }
  // 点币记录
  Fetch.coinRecords = (page) => { return Fetch(`coin/list?page=${page}`, 'GET') }
  //活动兑换
  Fetch.activeExchange=(data)=>{return Fetch('activity/award-exchange','POST',data)}
}

export default requests
