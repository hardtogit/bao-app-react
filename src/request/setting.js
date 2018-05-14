/**
 * account setting request interface
 */

const requests = (Fetch) => {
  // 首次启动，发送设备信息
  Fetch.sendDeviceInfo = (data) => { return Fetch('channel/first-start', 'GET', data)}
  // 正在执行的活动
  Fetch.checkActivity = () => { return Fetch('/activities/current', 'GET')}
  // 获取用户信息
  Fetch.getUserInfo = (auth) => {if (auth){return Fetch(`user/info?auth=${auth}`, 'GET')}else {return Fetch(`user/info`, 'GET')}}
  // 设置用户名
  Fetch.setUsername = (username) => { return Fetch('user/set-username', 'POST', {username: username})}
  // 身份认证
  Fetch.auth = (data) => { return Fetch('user/auth', 'POST', data)}
  // 修改登录密码
  Fetch.loginPasswordModify = (data) => { return Fetch('user/modify-login-password', 'POST', data)}
  // 修改交易密码
  Fetch.tradePasswordModify = (data) => { return Fetch('user/modify-trade-password', 'POST', data)}
  //存管修改交易密码
  Fetch.storeTradePasswordModify = (data) => { return Fetch('api/supervise/users/tradePwdModify', 'POST', data)}
  // 设置交易密码
  Fetch.tradePasswordSet = (data) => { return Fetch('user/trade-password', 'POST', data)}
  // 设置交易密码
  Fetch.newTradePasswordSet = (data) => { return Fetch('api/supervise/users/tradePwdForget', 'POST', data)}
  // 设置手势密码
  Fetch.gestureSet = (data) => { return Fetch('user/gesture-password', 'POST', data)}
  // 修改手势密码
  // Fetch.gestureModify = (data) => { return Fetch('user/user/modify-gesture-password', 'POST', data)}
  // 验证手势密码
  Fetch.gestureVerify = (data) => { return Fetch('user/validate-gesture-password', 'POST', data)}
  // 清除手势密码
  Fetch.gestureClear = () => { return Fetch('user/gesture-clear', 'POST')}
  // 验证身份证号
  Fetch.verifyCard = (data) => { return Fetch('user/verify-card', 'POST', data)}
  // 验证手机号
  Fetch.verifyMobile = (data) => { return Fetch('user/verify-mobile', 'POST', data)}
  // 绑定手机号
  Fetch.bindMobile = (data) => { return Fetch('user/bind-mobile', 'POST', data)}
  // 修改绑定手机号
  Fetch.bindMobileModify = (data) => { return Fetch('user/change-mobile-api', 'POST', data)}
  // 银行卡列表
  Fetch.bankList = () => { return Fetch('user/banks', 'GET')}
  // 绑定银行卡
  Fetch.bindBank = (data) => { return Fetch('user/bind-bank', 'POST', data)}
  // 常见问题
  Fetch.problems = () => { return Fetch('problems', 'GET')}
  // 签到
  Fetch.sign = () => { return Fetch('sign', 'POST')}
  // 意见反馈
  Fetch.feedback = (data) => { return Fetch('api/my/feedback', 'POST', data)}
  // 零钱宝和定存宝利率
  Fetch.getRates = () => { return Fetch('common/rates', 'GET')}
  // 获取安全卡
  Fetch.securityCard = () => { return Fetch('user/security-card-info?access_sys=platform', 'GET')}
  //获取是否注册存管
  Fetch.storeStatusInfo = () => { return Fetch('api/supervise/account/accountInfo', 'GET')}
  //获取银行卡列表
  Fetch.getBankList=()=>{return Fetch('user/bankcardlist','GET')}
  //绑定安全卡或者修改
  Fetch.securityCardBind=(data)=>{return Fetch('user/security-card-bind','GET',data)}
  //收货地址
  Fetch.siteList=()=>{return Fetch('address/lists','GET')}
  //设置收货地址
  Fetch.siteSetDefault=(data)=>{return Fetch('address/setting','POST',{id:data})}
  //设置收货地址
  Fetch.siteSetDel=(data)=>{return Fetch('address/delete','POST',{id:data})}
    //设置收货地址
  Fetch.siteAdd=(...data)=>{return Fetch('address/create','POST',{mobile:data[0],realname:data[1],address:data[2]})}
  //编辑地址
  Fetch.siteEdit=(...data)=>{return Fetch('address/update','POST',{id:data[0],mobile:data[1],realname:data[2],address:data[3]})}
  //上传问题反馈图片
  Fetch.uploadFeedBackImg=(data)=>{return Fetch('oss/upload','POST',data)}
  //注册存管
    Fetch.regStore=(data)=>{return Fetch('api/supervise/browser/requestUrl','POST',data)}
  // Fetch.regStore=(data)=>{return Fetch('api/supervise/users/register','POST',data)}
  //验证存管
  Fetch.regVerify=(id)=>{ return Fetch(`api/common/msg-result/${id.id}`,'GET')}
  //存管充值验证
  Fetch.rechargeVerify=(id)=>{ return Fetch(`api/common/msg-result-new/${id.id}`,'GET')}
  //获取省份
  Fetch.getProvince=(data)=>{ return Fetch('api/supervise/outlets/provinceList','GET',data)}
  //获取城市
  Fetch.getCity=(data)=>{ return Fetch('api/supervise/outlets/cityList','GET',data)}
  //获取银行
  Fetch.getBank=(data)=>{ return Fetch('api/supervise/banks','GET',data)}
  //获取银行
  Fetch.getBankBindList=(data)=>{ return Fetch('api/supervise/banks/binList','GET',data)}
  //获取网点
  Fetch.getPoint=(data)=>{ return Fetch('api/supervise/outlets/outletList','GET',data)}
  //发送验证码
  Fetch.storeSendCode=(data)=>{ return Fetch('api/supervise/users/sendSms','POST',data)}
  //验证验证码
  Fetch.storeVerifyCode=(data)=>{ return Fetch('api/supervise/users/verifySms','POST',data)}
  //绑定银行卡
  Fetch.storeBindCar=(data)=>{ return Fetch('api/supervise/users/bindBankcard','POST',data)}
  //是否上传身份证成功
  Fetch.queryUpload=(data)=>{ return Fetch('api/supervise/users/uploadIdCardResult','GET',data)}
  //获取平台充值按钮状态
   Fetch.getChargeStatus=(data)=>{ return Fetch('api/setting/login','GET',data)}
  //投资者教育问题列表
   Fetch.getQuestionList=()=>{ return Fetch('api/education/questionList','GET')}
  //投资者教育问题列表
   Fetch.getEducationInfo=()=>{ return Fetch('api/education/info','GET')}
    //投资者教育问题列表
    Fetch.subAnswer=(answers)=>{ return Fetch(`api/education/subAnswer?answers=${answers}`,'GET')}
    //投资者教育问题列表
    Fetch.questionTop=()=>{ return Fetch(`api/education/questionTop`,'GET')}
};
export default requests
