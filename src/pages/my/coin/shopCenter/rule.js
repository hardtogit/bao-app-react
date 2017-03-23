/**
 * Created by wangdongfang on 17/3/23.
 */
import React,{Component} from 'react'
import  styles from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import NavBar from '../../../../components/NavBar/index';
class Index extends Component{
    render(){
        return(<div className={styles.bg}>
             <NavBar onLeft={this.props.pop}>点币使用规则</NavBar>
            <div className={styles.body}>
           <iframe src={`http://${location.hostname}/mobile_api/static-page/coin-rule`} className={styles.ifr}></iframe>
            </div>
        </div>)
    }
}
const dispatchFn=(dispatch)=>({
     pop(){
         dispatch(goBack())
     }
})
export default connect(()=>({}),dispatchFn)(Index)