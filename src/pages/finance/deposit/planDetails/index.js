/**
 * Created by wangdongfang on 17/2/7.
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    componentDidMount(){
     this.props.get();
    }
    render(){
        const {
            bankList,
            pop,
            params: {
                id,
                type
            },
        }=this.props;
        let Text='1000',
             Text1='投资金额无上限';
        if (id==5){
            Text='50';
            Text1='每人限购1万元';
        }
        return(
           <div className={styles.body}>
              <NavBar onLeft={pop}>
                  更多详情
              </NavBar>
               <div className={styles.listBox}>
                <div className={styles.title}>
                    收益规则
                </div>
                <div className={styles.content}>
                  <p>预期年化收益率{type=='A'?'12.10%~13.80%':'11.50%~13.50%'}。</p>
                  <p>预期收益会根据债权的实际收益上下浮动。</p>
                </div>
               </div>
               <div className={styles.listBox}>
                   <div className={styles.title}>
                       买入及计息规则
                   </div>
                   <div className={styles.content}>
                       <p>1.买入金额每份{Text}元起。</p>
                       <p>2.{Text1}。</p>
                       <p>3.买入当天开始计息并产生收益（含周末及节假日）。</p>
                       <p>4.加入资金按月结算收益、到期返还本息。</p>
                   </div>
               </div>
               <div className={styles.listBox}>
                   <div className={styles.title}>
                       退出规则
                   </div>
                   <div className={styles.content}>
                       <p>1.定存宝对应期限到期后自动赎回。</p>
                       <p>2.资金债权转让自动匹配，到期存入余额，即可申请提现。</p>
                   </div>
               </div>
               <div className={styles.listBox}>
                   <div className={styles.title}>
                       资金安全与安全保障
                   </div>
                   <div className={styles.content}>
                       <p>1.宝点网引入京东支付资金存管，身份认证与银行卡绑定，安全卡取现，只能本人名下的银行卡买入和转出。</p>
                       <p>2.定存宝对应投资项目均加入宝点网“安全保障计划”，若发生风险并且合作金融机构丧失赔付能力，风险备用金优先偿付。</p>
                   </div>
               </div>
               <div className={styles.listBox}>
                   <div className={styles.title}>
                       资金去向
                   </div>
                   <div className={styles.content}>
                       <p>资金去向匹配优质个人或企业小额借款，安全有保障。
                           风控采用四大行都在用的美国FICO技术，与合作机构双重验证。</p>
                   </div>
               </div>
               <div className={styles.listBox}>
                   <div className={styles.title}>
                       手续费
                   </div>
                   <div className={styles.content}>
                       <p>免手续费。宝点网目前为用户支付买入与取现产生的手续费</p>
                   </div>
               </div>
               <div className={styles.listBox}>
                   <div className={styles.title}>
                       支持银行
                   </div>
                   <div className={styles.content}>
                     <div className={styles.TableTitle}>
                         连连支付
                     </div>
                     <table>
                         <thead>
                         <tr>
                             <th>
                                 银行
                             </th>
                             <th>
                                 单笔限额（元）
                             </th>
                             <th>
                                 每日限额（元）
                             </th>
                         </tr>
                         </thead>
                         <tbody>
                         {
                             bankList&&bankList.data.map(({name,single,day},i)=>(
                                 <tr key={i}><td>{name}</td><td>{single}</td><td>{day}</td></tr>
                             ))
                         }
                         </tbody>
                     </table>
                   </div>
               </div>
           </div>
        )
    }
}
const Datas=(state)=>({
      bankList:state.infodata.getIn(['GET_BANK_LIST','data'])
})
const DispatchFn=(dispatch,own)=>({
     get(){
         dispatch({
             type:'GET_BANK_LIST'
         })
     },
    pop(){
         dispatch(goBack())
    }
})
export default connect(Datas,DispatchFn)(Index)