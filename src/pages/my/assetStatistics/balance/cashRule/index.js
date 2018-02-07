/**
 * Created by xiangguo .
 * time:2018/1/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React, {Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import {goBack,push} from 'react-router-redux'
import styles from './index.less'
import {connect} from 'react-redux'
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

   render(){
        const {pop}=this.props
    return(<div className={styles.container}>
         <NavBar onLeft={pop}>提现规则</NavBar>
            <ul className={styles.ul}>
                <li>1.每个账户每日分别可于存管及托管账户提现5次</li>
                <li>2.每次提现金额不低于50元，存管账户单笔上限5万元，托管账户单笔上限20万元</li>
                <li>3.每个账户每日分别可于存管及托管账户提现总金额上限为20万元整</li>
                <li>4.用户可在工作人员处理，即申请中状态时取消对应的提现申请</li>
                <li>5.提现操作预计将于1~2个工作日到账</li>
                <li>6.提现金额中若包含未投资金额，提现申请将延后24小时处理</li>
                <li>7.若出现其他提现问题，请及时联系宝点网客服。</li>
            </ul>
    </div>)
   }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)