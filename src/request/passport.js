/**
 * passport request interface
 */

const requests = (Fetch) => {
  // 用户登陆
  Fetch.login = (data) => {return Fetch('passport/login', 'POST', data) }
  //是否同步
  Fetch.ifSync =(data) => { console.log(data);return Fetch('common/sync-result','GET',data)}

  // 用户注册
  Fetch.register = (data) => { return Fetch('passport/register', 'POST', data) }

  // 忘记密码
  Fetch.findPassword = (data) => { return Fetch('passport/find-password', 'POST', data) }

  // 验证手机号是否存在
  Fetch.mobilesExit = (data) => { return Fetch('api/users/verify-code-send', 'POST', data) }

  // 发送手机验证码
  Fetch.getVerifyCode = (data) => { return Fetch('passport/get-verify-code', 'POST', data) }

  // 验证手机验证码
  Fetch.verifycode = (data) => { return Fetch('passport/verify-code', 'POST', data) }

  // 用户退出
  Fetch.logout = () => { return Fetch('passport/logout', 'GET') }

  // 获取邀请码
  Fetch.getCode = (mobile) => { return Fetch('passport/invite-code', 'GET', {mobile: mobile})}
  // 投资活动
  Fetch.active = (bao_auth) =>{return Fetch('common/set-auth-cookie','GET',{bao_auth:bao_auth})}
}

export default requests
