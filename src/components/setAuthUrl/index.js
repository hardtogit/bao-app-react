/**
 * Created by wangdongfang on 17/4/21.
 */
const setAuthUrl=(url)=>{
     var auth=sessionStorage.getItem('bao-auth-str')
     if (auth){
         window.location.href=url+'?baoAuth='+auth.substring(1,auth.length-1);
     }else {
         window.location.href=url
     }
}

export default setAuthUrl