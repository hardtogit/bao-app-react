/**
 * Created by Administrator on 2016/11/16.
 */
export const isLogined = (store,nextState,replace) =>{
    const key=sessionStorage.getItem("bao-auth");
    const {
        location:{
            pathname
        }
    }=nextState;
    if (!key) {
        store.dispatch({
            type:'LOGIN_OUT_PATH',
            path:pathname
        });
       replace({
        pathname:"/login"
       });
    } 
    return false;
};
export const isOut=(store,nextLocation)=>{
     const path=nextLocation.location.pathname;
      store.dispatch({
          type:'REGISTER_NUM',
          key:'pathLeave',
          data:{
              path:path
          }
      })
}