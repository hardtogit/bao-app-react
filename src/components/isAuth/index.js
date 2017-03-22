/**
 * Created by wangdongfang on 17/3/20.
 */
import React,{Component} from 'react'
import Alert from '../Dialog/alert'
class Index extends Component{
    Verification(url,push){
        const baoAuth=sessionStorage.getItem("bao-user");
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
                push(url)
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