/**
 * account setting request interface
 */

const requests = (Fetch) => {
  // 我的加息券列表
  // TODO change back!
  Fetch.interestRateList = (page) => { return Fetch(`deposit/record?page=${page}`, 'GET') }

  //
}

export default requests
