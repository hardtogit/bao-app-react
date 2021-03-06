const requests = (Fetch) => {
  // 用户VIP信息
  Fetch.getVipInfo = () => {return Fetch(`api/userVip/vipLevel`, 'GET')};
    // VIP年化区间
    Fetch.getVipStr = () => {return Fetch(`api/userVip/vipStr`, 'GET')};
  //加息券列表
  Fetch.getRateCoupons = () => {return Fetch(`api/userVip/couponWait`, 'GET')};
  //抵用券列表
  Fetch.getVoucherCoupons = () => {return Fetch(`api/userVip/voucherWait`, 'GET')};
    //加息券领取情况
    Fetch.getRateInfo = () => {return Fetch(`api/userVip/couponReceiveInfo`, 'GET')};
    //抵用券领取情况
    Fetch.getVoucherInfo = () => {return Fetch(`api/userVip/voucherReceiveInfo`, 'GET')};
  //抵用券领取
  Fetch.voucherGet = (id) => {return Fetch(`api/userVip/voucherReceive?coupon_id=${id}`, 'GET')};
    //加息券领取
  Fetch.rateGet = (id) => {return Fetch(`api/userVip/couponReceive?coupon_id=${id}`, 'GET')};
    //基础特权
    Fetch.getPrivilegeBasic = () => {return Fetch(`api/userVip/privilegeBasic`, 'GET')};
    //VIP与对应年化的关系
    Fetch.getVipAnnual = () => {return Fetch(`api/userVip/vipAnnual`, 'GET')};
    //特权规则 收益
    Fetch.getPrivilegeProfit = () => {return Fetch(`api/userVip/privilegeProfit`, 'GET')}

}

export default requests
