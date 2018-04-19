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
                           “聚点+”是宝点网推出的新型智能投资服务工具。加入聚点+的资金将由系统在投资者认可的标的范围内分散匹配符合要求的标的，持续服务期间内系统在投资者授权下将所投标的回款自动再次匹配符合要求的标的，并在计划到期后自动转让退出。参考回报不代表对实际利息回报的承诺。
                       </p>
                   </div>
                   </div>
                   <div className={styles.items}>
                       <Item name="产品名称" value={name}></Item>
                       <Item name="计息方式" value="预期利息=预期年化收益*借款期限*持有金额/12+预期年化收益*借款期限外多持有天数*金额/（12*退出月自然日）"></Item>
                       <Item name="投资期限" value={month+"个月"}></Item>
                       <Item name="起投金额" value="1000元起投，并以1000元的整倍数递增"></Item>
                       <Item name="资金去向" value="匹配优质个人或企业小额借款，安全有保障。风控采用四大行都在用的美国FICO技术，与合作机构双重验证"></Item>
                       <Item name="退出规则" value="聚点+对应期限到期后用户自发申请债权转让，若到期3内未自己申请，将由系统申请进行债权转让"></Item>
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