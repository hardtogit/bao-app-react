/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import login from '../routes/account/login'
import weChat from '../routes/account/weChat'
import register from '../routes/account/register'
import registerVerifyMobile from '../routes/account/registerVerifyMobile'
import registerSuccess from '../routes/account/registerSuccess'
import registerSetPassword from '../routes/account/registerSetPassword'
import findpassword from '../routes/account/findpassword'
import findpasswordSetPassword from '../routes/account/findpasswordSetPassword'
import safePlan from '../routes/account/safePlan'
import Bundle from '../bundle'
export const Login=(props)=>{
    return<Bundle load={login}>
        {(Login)=><Login {...props}/>}
    </Bundle>
};
export const WeChat=(props)=>{
    return<Bundle load={weChat}>
        {(WeChat)=><WeChat {...props}/>}
    </Bundle>
};
export const Register=(props)=>{
    return<Bundle load={register}>
        {(Register)=><Register {...props}/>}
    </Bundle>
};
export const RegisterVerifyMobile=(props)=>{
    return<Bundle load={registerVerifyMobile}>
        {(RegisterVerifyMobile)=><RegisterVerifyMobile {...props}/>}
    </Bundle>
};
export const RegisterSuccess=(props)=>{
    return<Bundle load={registerSuccess}>
        {(RegisterSuccess)=><RegisterSuccess {...props}/>}
    </Bundle>
};
export const RegisterSetPassword=(props)=>{
    return<Bundle load={registerSetPassword}>
        {(RegisterSetPassword)=><RegisterSetPassword {...props}/>}
    </Bundle>
};
export const Findpassword=(props)=>{
    return<Bundle load={findpassword}>
        {(Findpassword)=><Findpassword {...props}/>}
    </Bundle>
};
export const FindpasswordSetPassword=(props)=>{
    return<Bundle load={findpasswordSetPassword}>
        {(FindpasswordSetPassword)=><FindpasswordSetPassword {...props}/>}
    </Bundle>
};
export const SafePlan=(props)=>{
    return<Bundle load={safePlan}>
        {(SafePlan)=><SafePlan {...props}/>}
    </Bundle>
};