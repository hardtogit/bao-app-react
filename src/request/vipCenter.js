const requests = (Fetch) => {
  // 用户VIP信息
  Fetch.getVipInfo = () => {return Fetch(`api/userVip/vipLevel`, 'GET')};
  //加息券列表
  Fetch.getRateCoupons = () => {return Fetch(`api/userVip/couponWait`, 'GET')};
  //抵用券列表
  Fetch.getVoucherCoupons = () => {return Fetch(`api/userVip/voucherWait`, 'GET')}

}

export default requests
