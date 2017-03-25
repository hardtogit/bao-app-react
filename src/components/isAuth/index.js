/**
 * Created by wangdongfang on 17/3/20.
 */
import React,{Component} from 'react'
import Alert from '../Dialog/alert'
class Index extends Component{
    Verification(url,push,success,urlN){
        const baoAuth=this.publickFn();
        if (baoAuth){
            const bao=JSON.parse(sessionStorage.getItem("bao-user"));
            if (bao.isAuth==0||bao.isAuth==1){
                this.refs.alert.show({
                    title: '',
                    content: '为了您的账户安全，请先实名认证',
                    okText: '去认证',
                    cancel:'取消',
                    okCallback: () => {push('/user/setting/identityAuth')},
                })
            }else {
                push(url);
                if (urlN){
                    success(urlN);
                }else {
                    success();
                }
            }
        }else {
            push('/login')
        }
    }
    publickFn=()=>{
        const baoAuth=sessionStorage.getItem("bao-user");
        if (baoAuth){
            return true
        }else {
           return false
        }
    }
    isbindSecurityCard(successFn,push,url){
        const baoAuth=this.publickFn();
        if (baoAuth){
            const bao=JSON.parse(sessionStorage.getItem("bao-user"));
            if (!bao.isbindSecurityCard){
                this.refs.alert.show({
                    title: '',
                    content: '对不起您还没有绑定安全卡',
                    okText: '去绑定',
                    cancel:'取消',
                    okCallback: () => {push(url)},
                })
            }else {
                successFn&&successFn()
            }
        }else {
            push('/login')
        }
    }
    isSecurityCard(successFn,push,url){
        const baoAuth=this.publickFn();
        if (baoAuth){
            const bao=JSON.parse(sessionStorage.getItem("bao-user"));
            if (!bao.isSetTradePassword){
                this.refs.alert.show({
                    title: '',
                    content: '对不起您还没有设置交易密码',
                    okText: '设置',
                    cancel:'取消',
                    okCallback: () => {push(url)},
                })
            }else {
                successFn&&successFn()
            }
        }else {
            push('/login')
        }
    }
    render(){
        return(<div>
            <Alert ref="alert"/>
        </div>)
    }
}

export default Index