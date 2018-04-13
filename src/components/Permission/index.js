/**
 * Created by xiangguo .
 * time:2018/3/20 0020.
 * email:413401168@qq.com.
 * use:auto...
 */
export const getAuthDetail=()=> {
     let storeData = JSON.parse(sessionStorage.getItem('bao-store'));
     if(storeData&&storeData.isRegister){//表示开通存管
         if(storeData.isBindBankcard) {//老用户开通存管没绑卡判断
              if(storeData.authInstrCd.length!=0){
                  return 1 //表示一切正常
              }else{
                  return 2 //表示没有免密授权
              }
         }else{
             return 3 //表示没有绑定银行卡
         }
         }else{
         return 3
     }
},
    platFormGetAuthDetail=()=>{
        let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
       if(storeData&&storeData.isAuthIdentity&&storeData.isSecurityCard){
           return 1 //表示老用户实名认证，并且绑定了安全卡
       }else{
           if(storeData&&storeData.isRegister){//表示开通存管
               if(storeData.isBindBankcard) {//老用户开通存管没绑卡判断
                   if(storeData.authInstrCd.length!=0){
                       return 1 //表示一切正常
                   }else{
                       return 2 //表示没有免密授权
                   }
               }else{
                   return 3//表示既没有注册存管也没有免密授权
               }
           }else{
               return 3
           }
       }
    }

