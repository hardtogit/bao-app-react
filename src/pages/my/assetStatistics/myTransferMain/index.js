/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {goBack,push} from 'react-router-redux'
import ZtTransfer from '../creditors/mine'
import JdTransfer from '../../../finance/wisdom/wisdomMy'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            index: 0
        }
    }
    render(){
        const{
            pop,
            push
            }=this.props;
        const {
            index
        }=this.state;
        let recordUrl;
        if(index==1){
            recordUrl='/user/wisdomRecord'
        }else{
            recordUrl='/user/zqRecords'
        }
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop} rightNode={<span>记录</span>} onRight={()=>{push(recordUrl)}}>
                  <div className={styles.tabs}>
                      <div className={classNames([styles.tab,index==0?styles.active:''])} onClick={()=>{this.setState({index:0})}}>直投债转</div>
                      <div className={classNames([styles.tab,index==1?styles.active:''])} onClick={()=>{this.setState({index:1})}}>智享计划</div>
                  </div>
              </NavBar>
               {index==0&&<ZtTransfer/>||<JdTransfer/>}
           </div>
        )
    }
}
const mapStateToProps=()=>({
});
const mapDispatchToProps=(dispatch)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)