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
  Fetch.directInvestProductDetail = (directInvestId,access_sys) => {
    if(access_sys){
        return Fetch(`directInvest/index/${directInvestId}?access_sys=${access_sys}`)
    }else{
        return Fetch(`directInvest/index/${directInvestId}`)
    }
  }
  // 直投项目投资记录
  Fetch.directInvestInvestRecords = (page, directInvestId,access_sys) => {
    if(access_sys){
        return Fetch(`directInvest/projects-records/${directInvestId}?page=${page}&access_sys=platform`)
    }else{
        return Fetch(`directInvest/projects-records/${directInvestId}?page=${page}`)
    }

  }
  // 零钱宝详情
  Fetch.demandDetail = () => { return Fetch('demand/detail', 'GET') }
  // 定存宝详情（剩余份数）
  Fetch.depositDetail = (id) => { return Fetch('deposit/detail', 'GET', {productId: id}) }
  // 债权转让项目列表
  Fetch.creditorsProjects = (page) => { return Fetch(`creditors/projects?page=${page}`, 'GET') }
  // 债权转让产品详情
  Fetch.creditorsProductDetail = (creditorsId,access_sys) => {
      if(access_sys){
          return Fetch(`creditors?id=${creditorsId}&access_sys=${access_sys}`, 'GET')
      }else{
          return Fetch(`creditors?id=${creditorsId}`, 'GET')
      }
     }
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
  Fetch.getCashLog=(data)=>{return Fetch('api/withdraw/list','GET',data)}
  Fetch.getReChargeLog=(data)=>{return Fetch('api/recharge/list','GET',data)}
  Fetch.cancelCash=(data)=>{return Fetch('api/withdraw/revoke','GET',data)}
  Fetch.depositbs=()=>{return Fetch('api/depositbs?access_sys=platform','GET')}
  Fetch.depositbsDetails=(id)=>{return Fetch(`api/depositbs/product/${id}?access_sys=platform`,'GET')}
  Fetch.depositbsInvest=(id,type)=>{return Fetch(`api/depositbs/invest/${type}/${id}?access_sys=platform`,'GET')}
  Fetch.depositbsAccountCapitalInfo=()=>{return Fetch('api/depositbs/accountCapitalInfo?access_sys=platform','GET')}
  Fetch.depositbsAccountCapitalList=(page,type)=>{return Fetch(`api/depositbs/accountCapitalList/${type}/${page}?access_sys=platform`,'GET')}
  Fetch.depositbsBuy=(productId,num,couponId,password,type)=>{return Fetch(`api/depositbs/buy?productId=${productId}&num=${num}&couponId=${couponId}&password=${password}&type=${type}&access_sys=platform`,'GET')}
  Fetch.depositbsBuyResult=(id)=>{return Fetch(`api/depositbs/buyResult/${id}?access_sys=platform`,'GET')}
  Fetch.depositbsContract=(id)=>{return Fetch(`api/depositbs/contract/${id}`,'GET')}
  Fetch.depositasInvest=(id)=>{return Fetch(`api/depositas/invest/${id}`,'GET')}
  Fetch.depositasContract=(id)=>{return Fetch(`api/depositas/contract/${id}`,'GET')}
  Fetch.newUserActivity=()=>{ return Fetch(`new-user-activity`,'GET')}
  //聚点+
  Fetch.depositsGather=(page)=>{return Fetch(`api/depositSupervise/projectLists?page=${page}&pageSize=${BIG_PAGE_SIZE}`,'GET')}//聚点+列表
  Fetch.gatherDetail=(id)=>{return Fetch(`api/depositSupervise/projectDetail/${id}`,'GET')}//聚点+标的列表
  Fetch.gatherProblems=()=>{return Fetch(`api/depositSupervise/faq`,'GET')}//聚点+常见问题
  Fetch.gatherBidList=(page,data)=>{return Fetch(`api/depositSupervise/projectBorrowList/${data.id}?page=${page}`,'GET')}//聚点+标
  Fetch.gatherJoin=(page,data)=>{return Fetch(`api/depositSupervise/projectBuyLists/${data.id}?page=${page}`,'GET')}//加入记录
  Fetch.gatherBidDetail=(id)=>{return Fetch(`api/depositSupervise/borrowInfo/${id}`,'GET')}//聚点+详情
  //我的聚点+
  Fetch.gatherMyList=(page,data)=>{return Fetch(`api/depositSupervise/myInvestList?page=${page}&type=${data.type}`,'GET')}//我的聚点+列表
  Fetch.gatherMyHeader=()=>{return Fetch(`api/depositSupervise/myProfile`,'GET')}//我的聚点+头部
  Fetch.gatherBidBackDetail=(page,data)=>{return Fetch(`api/depositSupervise/borrowRepaymentList/${data.id}?page=${page}`,'GET')}//我的聚点+标的还款详情
  Fetch.gatherProjects=(page,data)=>{return Fetch(`api/depositSupervise/myInvestBorrowList?investId=${data.id}&type=${data.type}&page=${page}`,'GET')}//我的聚点+标的还款详情
  Fetch.gatherInvestRecord=(page,data)=>{return Fetch(`api/depositSupervise/borrowInvest/${data.id}?page=${page}`,'GET')}//聚点+标
  Fetch.gatherBuy=(data)=>{return Fetch('api/supervise/account/investBid','POST',data)}//聚点余额购买
  Fetch.newCardBuy=(data)=>{return Fetch('api/supervise/account/rechargeInvestBid','POST',data)}//使用银行卡充值投标
  Fetch.gatherContract=(id)=>{return Fetch(`api/depositSupervise/contract/${id}`,'GET')}//聚点+合同
  Fetch.gatherServerContract=(id)=>{return Fetch(`api/depositSupervise/serviceContract/${id}`,'GET')}//聚点+服务计划合同
  //存管
  Fetch.getStoreUserInfo=()=>{return Fetch('api/supervise/users/userInfo','GET')}//存管用户相关信息
  Fetch.getMyCardList=()=>{return Fetch(`api/supervise/banks/bindList`,'GET')}//我的银行卡列表
  Fetch.unbindCard=(data)=>{return Fetch('api/supervise/users/unbindBankcard','POST',data)}//解绑银行卡
  Fetch.storeBindMobileModify=(data)=>{return Fetch('api/supervise/users/mobileModify','POST',data)}//解绑银行卡
  Fetch.newRecharge=(data)=>{return Fetch('api/supervise/account/recharge','POST',data)}//新的充值接口
  Fetch.newCash=(data)=>{return Fetch('api/supervise/account/withdraw?isNew=true','POST',data)}//新的提现接口
  Fetch.serviceChargeRule=(data)=>{return Fetch('api/supervise/account/withdrawFee','POST',data)}//获取手续费规则
  Fetch.freeAccredit=(data)=>{return Fetch('api/supervise/users/freeAuth','POST',data)}//免密授权
  Fetch.idCardUpload=(data)=>{return Fetch('api/supervise/users/uploadIdCard','POST',data)}//身份证上传
  Fetch.getDefaultTab=(data)=>{return Fetch('api/setting/defaultShow','get',data)}//获取默认tab
  Fetch.getPacket=(data)=>{return Fetch('api/activity/redpackeView','get',data)}//获取投资后的红包
  Fetch.openPacket=(data)=>{return Fetch('api/activity/un_redpacket','get',data)}//拆开投资后的红包
}

export default requests
