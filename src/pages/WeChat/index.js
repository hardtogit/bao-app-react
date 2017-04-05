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
            login:true
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
        const {wechat,getAll,push}=next;
        const code=wechat&&wechat.code;
        if (code==100){
            sessionStorage.setItem('bao-auth',true);
               getAll();
               push('/home/myIndex');
        }else {
            this.setState({
                login:false
            })
        }
    }
    send=()=>{
        this.setState({
            login:true
        })
        this.props.get()
    }
    render(){
        const {login}=this.state;
        const {pop}=this.props;
        return(<div className={style.bg}>
            <NavBar onLeft={pop}>{login&&'成功开启'||'开启失败'}</NavBar>
            <div className={style.body}>
                <div className={cns(style.imgBox,login&&style.block||style.hide)}></div>
                <div className={cns(style.failBox,login&&style.hide||style.block)}>
                    <div className={style.failIcon}></div>
                </div>
                <div className={style.content}>
                  <h1>{login&&'您已成功开启免登陆模式'||'您开启免登陆模式失败'}</h1>
                  <p>点击走进宝点-我的账户，光速查看昨天收益</p>
                  <button onClick={this.send}>
                      {login&&'查看我的账户'||'重新登录'}
                  </button>
                </div>
            </div>
            <div className={cns(style.zg,login&&style.block||style.hide)} >
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