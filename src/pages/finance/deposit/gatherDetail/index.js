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
import {goBack,push} from 'react-router-redux'

class Item extends Component{

    render(){
        return <div className={styles.item}>
            <div className={styles.left}>
                {this.props.name}
            </div>
            <div className={styles.right} style={this.props.style} onClick={this.props.onClick}>
                {this.props.value}
            </div>
        </div>
    }
}

class Index extends Component{
    componentDidMount(){

    }
    render(){
        const{
            pop,
            push
            }=this.props
        const{
            name,
            month
            }=this.props.params
        return(
           <div className={styles.root}>
              <NavBar onLeft={pop}>
                  更多详情
              </NavBar>
               <div className={styles.container}>
                   <div className={styles.headPanel}>
                   <div className={styles.tip}>
                       温馨提示：理财有风险 投资需谨慎
                   </div>
                   <div className={styles.introduce}>
                       <h3 className={styles.title}>简介</h3>
                       <p className={styles.content}>
                           “聚点+”是受用户委托，授权系统自动投标、自动复
                           投、到期自动转让的智能投资计划。“聚点+”在用户
                           认可的标的范围内，对符合要求的标的进行优先自动投
                           标，并在计划到期后自动转让退出。加入“聚点+”即
                           进入锁定期，锁定期内系统自动投标，所投标的回款自
                           动复投，到期系统自动转让退出。
                       </p>
                   </div>
                   </div>
                   <div className={styles.items}>
                       <Item name="产品名称" value={name}></Item>
                       <Item name="计息方式" value="买入当天开始计息并产生收益（含周末及节假日），到期转让成功后结算本金及收益（平均转让时间为1-2天，最长不超过3天）"></Item>
                       <Item name="投资期限" value={month+"个月"}></Item>
                       <Item name="起投金额" value="1000元起投，并以1000元的整倍数递增"></Item>
                       <Item name="资金去向" value="匹配优质个人或企业小额借款，并由认证合作金融机构担保，安全有保障。风控采用四大行都在用的美国FICO技术，与合作机构双重验证"></Item>
                       <Item name="退出规则" value="聚点+对应期限到期后自动赎回，债权转让自动匹配，转让成功后资金自动回款到账户余额，即可申请提现"></Item>
                       <Item name="费用规则" value="免手续费。宝点网目前为用户支付买入与取现产生的手续费。"></Item>
                       <Item name="服务协议" value="点击查看" style={{color:'#00a6e2'}} onClick={()=>{push('/serviceContract/123/0')}}></Item>
                   </div>

               </div>

           </div>
        )
    }
}
const Datas=(state)=>({
})
const DispatchFn=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
})
export default connect(Datas,DispatchFn)(Index)