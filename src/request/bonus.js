const requests = (Fetch) => {
  // 红包详情
  Fetch.bonusDetail = () => { return Fetch('bonuse/detail', 'GET') }

  // 红包列表
  Fetch.bonusesList = (page) => { return Fetch(`bonuse/list?page=${page}`, 'GET')}
    //红包规则
  Fetch.bonusesRule = () => { return Fetch(`static-page/bonus-rule`, 'GET')}
}

export default requests
