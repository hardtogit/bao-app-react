/**
 * Created by Administrator on 2017/5/10.
 */
import React,{Component} from 'react'
import NavBar from '../../../components/NavBar/index'
import style from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    render(){
        return(<div>
          <NavBar onLeft={this.props.pop}>
              新人活动
          </NavBar>
            <div className={style.body}>
           <iframe src="https://www.bao.cn/special/newHandActivities/index.html" className={style.ifr}></iframe>
            </div>
        </div>)
    }
}
const data=()=>({})
const dispathFn=(dispatch)=>({
       pop(){
           dispatch(goBack())
       }
})
export default connect(data,dispathFn)(Index)