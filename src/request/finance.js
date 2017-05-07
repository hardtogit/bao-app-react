/**
 * finance request interface
 */
const BIG_PAGE_SIZE = 100000000

const requests = (Fetch) => {
  // 直投项目列表
  Fetch.directInvestProjects = (page) => { return Fetch(`directInvest/projects?page=${page}`, 'GET') }
    // 定存宝涉及项目
  Fetch.involveProjectList=(page,periods,type)=>{return Fetch(`api/depositbs/involveProjectList?type=${type}&nper=${periods}&page=${page}`,'GET')}
  // 直投项目产品详情
  Fetch.directInvestProductDetail = (directInvestId) => { return Fetch(`directInvest/index/${directInvestId}`) }
  // 直投项目投资记录
  Fetch.directInvestInvestRecords = (page, directInvestId) => {
      return Fetch(`directInvest/projects-records/${directInvestId}?page=${page}`)
  }
  // 零钱宝详情
  Fetch.demandDetail = () => { return Fetch('demand/detail', 'GET') }
  // 定存宝详情（剩余份数）
  Fetch.depositDetail = (id) => { return Fetch('deposit/detail', 'GET', {productId: id}) }
  // 债权转让项目列表
  Fetch.creditorsProjects = (page) => { return Fetch(`creditors/projects?page=${page}`, 'GET') }
  // 债权转让产品详情
  Fetch.creditorsProductDetail = (creditorsId) => { return Fetch(`creditors?id=${creditorsId}`, 'GET') }
  //
  Fetch.creditorsBuy = (id, data) => { return Fetch(`creditors/pay-bond/${id}`, 'GET', data) }
  // 零钱宝购买
  Fetch.demandBuy = (data) => { return Fetch('demand/buy', 'GET', data)}
  // 定存宝购买
  Fetch.depositBuy = (data) => { return Fetch('deposit/buy', 'GET', data)}
  // 直投项目购买
  Fetch.directInvestBuy = (id, data) => { return Fetch('directInvest/buy/' + id, 'GET' ,data)}
  // 所有可用抵用券
  Fetch.availableVouchers = () => { return Fetch(`voucher/list?type=0&pageSize=${BIG_PAGE_SIZE}`, 'GET') }
  // 所有可用加息券
  Fetch.availableInterestRates = () => { return Fetch(`interestRateSecurities/list?type=0&pageSize=${BIG_PAGE_SIZE}`, 'GET') }
  // 验证约标密码
  Fetch.verifyAssign = (data) => { return Fetch(`directInvest/buy-verify/${data.id}`, 'POST', data) }
  // 可用优惠券
  Fetch.availableCoupons = (product, month) => { return Fetch(`voucher/coupons?product=${product}&month=${month}`, 'GET') }
  // 轮播图
  Fetch.banners = () => { return Fetch('common/banner?cateId=1', 'GET') }
  // 直投剩余份数
  Fetch.directInvestLeftAmount = (id) => { return Fetch(`/directInvest/quantity/${id}`, 'GET') }
  // 债权剩余份数
  Fetch.creditorsLeftAmount = (id) => { return Fetch(`/creditors/quantity/${id}`, 'GET') }
  // 服务器时间
  Fetch.serverTime = () => { return Fetch('/directInvest/server-time', 'GET') }
  // 红包返现金额
  Fetch.payBack = (data) => { return Fetch('/common/pay-back', 'Post', data) }
  // 零钱宝赎回
  Fetch.redeem = (data) =>{return Fetch('demand/redemption','POST',data)}
  // 提现
  Fetch.withdraw=()=>{return Fetch('balance/withdraw','GET')}
  Fetch.depositbs=()=>{return Fetch('api/depositbs','GET')}
  Fetch.depositbsDetails=(id)=>{return Fetch(`api/depositbs/product/${id}`,'GET')}
  Fetch.depositbsInvest=(id,type)=>{return Fetch(`api/depositbs/invest/${type}/${id}`,'GET')}
  Fetch.depositbsAccountCapitalInfo=()=>{return Fetch('api/depositbs/accountCapitalInfo','GET')}
  Fetch.depositbsAccountCapitalList=(page,type)=>{return Fetch(`api/depositbs/accountCapitalList/${type}/${page}`,'GET')}
  Fetch.depositbsBuy=(productId,num,couponId,password,type)=>{return Fetch(`api/depositbs/buy?productId=${productId}&num=${num}&couponId=${couponId}&password=${password}&type=${type}`,'GET')}
  Fetch.depositbsBuyResult=(id)=>{return Fetch(`api/depositbs/buyResult/${id}`,'GET')}
  Fetch.depositbsContract=(id)=>{return Fetch(`api/depositbs/contract/${id}`,'GET')}
  Fetch.depositasInvest=(id)=>{return Fetch(`api/depositas/invest/${id}`,'GET')}
  Fetch.depositasContract=(id)=>{return Fetch(`api/depositas/contract/${id}`,'GET')}
}

export default requests
