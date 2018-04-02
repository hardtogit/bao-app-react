/**
 * Created by xiangguo .
 * time:2018/4/2 0002.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from "react"
import {goBack,push} from "react-router-redux"
import {connect} from "react-redux"
import Creditor from './indexs'
import classNames from "classnames"
import Wisdom from '../../wisdom/index'
import styles from './index.less'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        }
    }
    handleClick=(index)=>{
        this.setState({
            index:index
        })
    }
    render(){
        const {
            index
        }=this.state;
     return(
         <div>
             <div className={styles.tabs_waper}>
               <div className={styles.tabs}>
                   <div className={classNames(styles.tab,index==0&&styles.active||"")} onClick={()=>{this.handleClick(0)}}>智享计划</div>
                   <div className={classNames(styles.tab,index==1&&styles.active||"")} onClick={()=>{this.handleClick(1)}}>债权转让</div>
               </div>
             </div>
             {index==1&&<Creditor></Creditor>||<Wisdom></Wisdom>  }
         </div>
     )
    }
}
export default Index