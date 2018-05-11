/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {goBack} from 'react-router-redux'
import MoneyLog from '../records'
import MoneyLogOld from '../recordsOld'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            index: 0
        }
    }
    render(){
        const{
            pop
            }=this.props;
        const {
            index
        }=this.state;
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  <div className={styles.tabs}>
                      <div className={classNames([styles.tab,index==0?styles.active:''])} onClick={()=>{this.setState({index:0})}}>存管流水</div>
                      <div className={classNames([styles.tab,index==1?styles.active:''])} onClick={()=>{this.setState({index:1})}}>托管流水</div>
                  </div>
              </NavBar>
               {index==0&&<MoneyLog/>||<MoneyLogOld/>}
           </div>
        )
    }
}
const mapStateToProps=()=>({
});
const mapDispatchToProps=(dispatch)=>({
    pop(){
         dispatch(goBack())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)