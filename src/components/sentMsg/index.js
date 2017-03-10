/**
 * Created by Administrator on 2016/10/31.
 */
import React from 'react';
import Utils from  '../../utils/utils'
import API from '../../request/fetch'
const waitTime = 60;/*多次发送等待时间*/
export  default class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newText:this.props.text || "发送验证码",
            sending:false
        }
    }
    componentDidMount=()=>{
        if(this.props.auto){
            this.sendMsg();
        }
    }
    sendMsg=()=>{
        if(!Utils.checkMobile(this.props.phone) || this.state.sending){
            return false;
        }else{
            API.getVerifyCode(this.props.phone,this.props.type || 1)
                .then((response)=>{
                    let data = response.response;
                    if(100 === data.code){
                        let newText = waitTime;
                        let loop = setInterval(()=>{
                            if(--newText<=0){
                                clearInterval(loop);
                                this.setState({
                                    sending:false,
                                    newText:this.props.text || "发送验证码"
                                })
                            }else{
                                this.setState({
                                    sending:true,
                                    newText:`重新发送(${newText})`
                                })
                            }
                        },1000);
                    }
                })
        }
    }
    render(){
        return(
            <button disabled={this.state.sending} onClick={this.sendMsg}>
                {this.state.newText}
            </button>
        )
    }
}