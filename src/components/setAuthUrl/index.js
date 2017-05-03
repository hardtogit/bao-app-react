/**
 * Created by wangdongfang on 17/4/21.
 */
const setAuthUrl=(url)=>{
     var auth=sessionStorage.getItem('bao-auth-str')
     if (auth){
         window.location.href=url+'?bao-auth='+auth;
     }else {
         window.location.href=url;
     }
}

export default setAuthUrl