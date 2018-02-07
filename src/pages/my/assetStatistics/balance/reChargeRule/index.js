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
         <NavBar onLeft={pop}>充值规则</NavBar>
            <ul className={styles.ul}>
                <li>1.存管账户中，支持绑定的银行卡进行充值，支持多张银行卡的绑定</li>
                <li>2.托管账户中，可通过第三方平台“连连支付”进行在线充值</li>
                <li>3.通过宝点网存管账户以及托管账户充值均为及时到账</li>
                <li>4.其他充值事项可联系宝点网客服</li>
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