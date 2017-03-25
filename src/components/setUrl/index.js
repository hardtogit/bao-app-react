/**
 * Created by wangdongfang on 17/3/25.
 */
class Index{
    static setUrl(url){
        sessionStorage.setItem("bao-url",url);
    }
    static getUrl(){
        return sessionStorage.getItem("bao-url");
    }
}
export default Index