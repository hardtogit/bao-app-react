/**
 * Created by wangdongfang on 17/4/1.
 */
import React,{Component} from 'react'
import NavBar from '../../components/NavBar'
import style from './index.less'
import Loading from '../../components/pageLoading'
import {goBack,push} from 'react-router-redux'
import {connect} from 'react-redux'
class Index extends Component{
    componentDidMount(){
        const {push,get}=this.props;
        const ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger'){
             get();
        }else {
            push('/home')
        }
    }
    render(){
        const {pop}=this.props;
        return(<div className={style.bg}>
            <NavBar onLeft={pop}>成功开启</NavBar>
            <div className={style.body}>
                <div className={style.imgBox}></div>
                <div className={style.content}>
                  <h1>您已成功开启免登陆模式</h1>
                  <p>点击走进宝点-我的账户，光速查看昨天收益</p>
                  <button>
                      查看我的账户
                  </button>
                </div>
            </div>
            <div className={style.zg}>
              <div className={style.bgColor}></div>
                <Loading Text={'登陆授权中'} textColor={'#fff'}/>
            </div>
        </div>)
    }
}
const data=(state)=>({
      news:state.infodata.getIn(['WE_CHAT','data'])
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
    }
})
export default connect(data,dispatchFn)(Index)