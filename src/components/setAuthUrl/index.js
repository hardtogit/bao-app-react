/**
 * Created by wangdongfang on 17/4/21.
 */
const setAuthUrl=(url)=>{
     var auth=sessionStorage.getItem('bao-auth-str')
    console.log(auth,'fsafasfasfas')
     if (auth){
         window.location.href=url+'?baoAuth='+auth;
     }else {
         window.location.href=url
     }
}

export default setAuthUrl