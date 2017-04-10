/**
 * Created by wangdongfang on 17/4/1.
 */
import React,{Component} from 'react'
import NavBar from '../../components/NavBar'
import style from './index.less'
import Loading from '../../components/pageLoading'
import {goBack,push} from 'react-router-redux'
import {connect} from 'react-redux'
import cns from 'classnames'
class Index extends Component{
    constructor(porps){
        super(porps)
        this.state={
            login:0,
            text:['成功开启','未授权','开启失败'],
            text1:['您已成功开启免登陆模式','您还未授权','您开启免登陆模式失败'],
            text2:['查看我的账户','去授权','重新登录'],
            inWap:['你已经开启免登录','','跳转失败'],
            url:{inviteFriends:'/find/inviteFriends',coinShop:'/user/coinShop',myIndex:'/home/myIndex'}
        }
    }
    componentDidMount(){
        const {push,get}=this.props;
        const ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger'){
             get();
        }else {
            push('/home')
        }
    }
    componentWillReceiveProps(next){
        const {wechat,getAll,push,location:{query:{type}}}=next;
        const {url}=this.state;
        const code=wechat&&wechat.code;
        if (code==100){
            sessionStorage.setItem('bao-auth',true);
               getAll();
               if (type){
                  push(url[type])
               }else {
                   push('/home/myIndex');
               }
        }else if(code==301) {
            this.setState({
                login:1
            })
            if (type){
                push('/login')
            }
        }else {
            this.setState({
                login:2
            })
        }
    }
    send=()=>{
        const {login}=this.state;
        if (login==1){
            window.location.href=this.props.wechat.data.url;
        }else {
            this.setState({
                login:0
            })
            this.props.get()
        }
    }
    synchronization=()=>{
        const {login,text,text1,text2}=this.state;
        return(<div className={style.body}>
            <div className={cns(style.imgBox,login==0&&style.block||style.hide)}></div>
            <div className={cns(style.failBox,login==0&&style.hide||style.block)}>
                <div className={style.failIcon}></div>
            </div>
            <div className={style.content}>
                <h1>{text1[login]}</h1>
                <p>点击走进宝点-我的账户，光速查看昨天收益</p>
                <button onClick={this.send}>
                    {text2[login]}
                </button>
            </div>
        </div>)
    }
    inWap=()=>{
        const {login,inWap}=this.state;
        return(<div>
            <div className={cns(style.imgBox,login==0&&style.block||style.hide)}></div>
            <div className={cns(style.failBox,login==0&&style.hide||style.block)}>
                <div className={style.failIcon}></div>
            </div>
            <div className={style.content}>
                <h1>{inWap[login]}</h1>
                {login==2&&<p>可关闭当前页面，重新进入</p>||''}
            </div>
        </div>)
    }
    render(){
        const {location:{query:{type}}}=this.props;
        const {login,text}=this.state;
        const {pop}=this.props;
        let Dom=this.synchronization();
        if (type){
            Dom=this.inWap();
        }
        return(<div className={style.bg}>
            <NavBar onLeft={pop}>{text[login]}</NavBar>
            {Dom}
            <div className={cns(style.zg,login==0&&style.block||style.hide)} >
              <div className={style.bgColor}></div>
                <Loading Text={'登陆授权中'} textColor={'#fff'}/>
            </div>
        </div>)
    }
}
const data=(state)=>({
    wechat:state.infodata.getIn(['WE_CHAT','data'])
})
const dispatchFn=(dispatch)=>({
     push(url){
         dispatch(push(url))
     },
    pop(){
         dispatch(goBack())
    },
    get(){
        dispatch({
            type:'WE_CHAT'
        })
    },
    getAll(){
        dispatch({
            type:'RATE'
        });
        dispatch({
            type:'USER_INFO'
        });
        dispatch({
            type:'SAFE_CARD_INFO'
        })
    }
})
export default connect(data,dispatchFn)(Index)