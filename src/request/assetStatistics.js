/**
 * assetStatistics request interface
 */

const requests = (Fetch) => {
  // 理财金详情
  Fetch.privilegeDetail = () => { return Fetch('/privilege/detail', 'GET') }
  // 资产详情
  Fetch.asset = () => { return Fetch('api/assets', 'GET') }
  // 余额详情
  Fetch.balance = () => { return Fetch('balance/detail', 'GET') }
  // 余额详情
  Fetch.balanceRecordDetails = (id) => { return Fetch('balance/records/' + id, 'GET') }
  // 交易记录
  Fetch.transactionRecords = (page,type,access_sys) => {
      if(access_sys){
          return Fetch(`balance/records?page=${page}&type=${type}&access_sys=${access_sys}`, 'GET')
      }else{
          return Fetch(`balance/records?page=${page}&type=${type}`, 'GET')
      }

  }
  // 连连支付
  Fetch.authCookie = () => {return Fetch(`common/auth-cookie`, 'GET') }
  //付款
  Fetch.Pay =(money)=>{return Fetch(`pay?money=${money}`)}
  // 零钱宝
  Fetch.myDemand = () => { return Fetch('demand/account-detail', 'GET')}
  // 零钱宝记录
  Fetch.demandRecords = (page) => { return Fetch(`demand/record?page=${page}`, 'GET' )}
  // 零钱宝记录详情
  Fetch.demandRecordDetails = (id) => { return Fetch(`demand/record-detail/${id}`, 'GET') }
  // 我的加息券
  Fetch.interestRates = (page) => { return Fetch(`interestRateSecurities/list?page=${page}&type=0`, 'GET' )}
  // 我的过期加息券
  Fetch.overdueInterestRates = (page) => { return Fetch(`interestRateSecurities/list?page=${page}&type=1`, 'GET' )}
  // 我的抵用券
  Fetch.vouchers = (page) => { return Fetch(`voucher/list?page=${page}&type=0`, 'GET' )}
  // 我的过期加息券
  Fetch.overdueVouchers = (page) => { return Fetch(`voucher/list?page=${page}&type=1`, 'GET' )}
  // 安全卡
  Fetch.securityCard = (data) => { return Fetch('user/security-card-info', 'GET',data) }
  // 余额提现
  Fetch.cash = (data) => {  return Fetch('balance/cash?access_sys=platform&isNew=true', 'POST', data) }
  // 是否有提现正在处理中
  Fetch.hasCash = () => { return Fetch('balance/has-cash', 'GET')}
  // 直投转让
  Fetch.directInvestTransfer = (data) => { return Fetch('directInvest/transfer', 'POST', data) }
  // 零钱宝赎回
  Fetch.demandRedemption = (data) => {  return Fetch('demand/redemption', 'POST', data) }
  // 自动投标详情
  Fetch.autoBidDetail = (data) => { return Fetch('directInvest/auto-bid/detail', 'GET',data) }
  // 直投产品信息
  Fetch.directInvestProductInfo = (id) => { return Fetch('directInvest/index/' + id, 'GET') }
  // 债权产品信息
  Fetch.creditorsProductInfo = (id,access_sys) => {
      if(access_sys){
          return Fetch('creditors?id=' + id+'&access_sys=platform', 'GET')
      }else{
          return Fetch('creditors?id=' + id, 'GET')
      }
     }
  // 债权资产详情
  Fetch.creditorsPropertyDetail = (id,access_sys) => {
    if(access_sys){
        return Fetch('creditors/list?id=' + id+'&access_sys=platform', 'GET')
    }else{
        return Fetch('creditors/list?id=' + id, 'GET')
    }

  }
  // 直投资产详情
  Fetch.directInvestPropertyDetail = (id,access_sys) => {
    if(access_sys){
        return Fetch('directInvest/invest-info/' + id+'?access_sys=platform', 'GET')
    }else{
        return Fetch('directInvest/invest-info/' + id, 'GET')
    }
  }
  // 我的债权转让概要
  Fetch.myCreditorSummary = () => { return Fetch('creditors/detail', 'GET') }
  // 我的债权转让概要
  Fetch.myDepositSummary = () => { return Fetch('deposit/account-detail?access_sys=platform', 'GET') }
  // 我的理财金概要
  Fetch.privilegeSummary = () => { return Fetch('privilege/detail', 'GET') }
  // 我的直投概要
  Fetch.myDirectInvestSummary = () => { return Fetch('directInvest/detail', 'GET') }
  // 债权合同
  Fetch.creditorsContract = (id,access_sys) => {
      if(access_sys){
          return Fetch('creditors/contract/' + id+'?access_sys=platform', 'GET')
      }else{
          return Fetch('creditors/contract/' + id, 'GET')
      }

  }
  // 直投合同
  Fetch.directInvestContract = (id) => { return Fetch('directInvest/contract/' + id, 'GET') }
  // 我的债权转让列表
  Fetch.creditorsList = (page) => { return Fetch('creditors/list?page=' + page, 'GET') }
  // 我的直投列表
  Fetch.directInvestList = (page) => { return Fetch('directInvest/list?page=' + page, 'GET') }
  // 理财金激活记录
  Fetch.privilegeActivateList = (page) => { return Fetch('privilege/activate/list?page=' + page, 'GET') }
  // 债权转让记录
  Fetch.creditorsRecords = (page,type) => { return Fetch(`creditors/records?page=${page}&type=${type}`, 'GET') }
  // 定存记录
  Fetch.depositRecords = (page, type) => { return Fetch(`deposit/record?page=${page}&type=${type}&access_sys=platform`, 'GET') }
  // 直投记录
  Fetch.directInvestRecords = (page,type) => { return Fetch(`directInvest/records?type=${type}&page=${page}`, 'GET') }
  // 理财金记录
  Fetch.privilegeRecords = (page, type) => { return Fetch(`privilege/list?type=${type}&page=${page}`, 'GET') }
  // 自动投标
  Fetch.autoBid = (...data) => {
    if(data[8]){
        return Fetch('directInvest/auto-bid?access_sys=platform', 'POST', {
            count:data[0],
            balance:data[1],
            start_term:data[2],
            end_term:data[3],
            rate:data[4],
            repayment_type:data[5],
            type:data[6],
            open:data[7],
            access_sys:data[8]
        })
    }else{
        return Fetch('directInvest/auto-bid', 'POST', {
            count:data[0],
            balance:data[1],
            start_term:data[2],
            end_term:data[3],
            rate:data[4],
            repayment_type:data[5],
            type:data[6],
            open:data[7],
        })
    }
     };
  // 获取已使用优惠券信息
  Fetch.directInvestCoupon = (id,access_sys) => {
      if(access_sys){
          return Fetch(`directInvest/coupon/${id}?access_sys=${access_sys}`, 'GET')
      }else{
          return Fetch(`directInvest/coupon/${id}`, 'GET') }
      }

  // 绑定银行卡
  Fetch.bindCardInfo = (type, way) => { return Fetch (`/user/bind-bank-info?type=${type}&way=${way}`, 'GET') }
  // 回款日历
  //Fetch.paymentCalendar = (year, month) => { return Fetch (`common/payment-calendar?year=${year}&month=${month}`, 'GET') }
  Fetch.paymentCalendar = (year, month) => { return Fetch (`api/my/payment-calendar?year=${year}&month=${month}`, 'GET') }
}

export default requests
