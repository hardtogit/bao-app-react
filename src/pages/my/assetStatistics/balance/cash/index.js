import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {push,goBack} from 'react-router-redux'
import ReddemDialog from '../../../../../components/Dialog/reddem'
import Tipbar from '../../../../../components/Tipbar/index'
import Alert from '../../../../../components/Dialog/alert'
import utils from '../../../../../utils/utils'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            val:'',
            disabled:true
        }
    }
    onValid=()=>{
        const {
            val
        }=this.state;
        this.refs.reddem.show({
            title: '购买',
            money:val,
            okCallback:()=>{this.send()} ,
            cancelCallback: () => {
                //this.props.navigator.push({id: 'TradePasswordForget'})
            }
        })
    }
    componentWillReceiveProps(next){
        const {cashData,push}=next;
        if (cashData){
            const {code}=cashData;
            if (code==300){
                this.alert('提交失败！')
            }else if (code==301){
                this.alert('有未处理的提现!')
            }else if (code==302){
                this.alert('提现金额大于帐户可提余额!')
            }else if (code==303){
                this.alert('提现密码错误 !')
            }else if (code==304){
                this.alert('未绑卡提现!')
            }else if (code==305){
                this.alert('没安全卡提现!')
            }else if (code==100){
                const time=Date.parse(new Date()),
                    cash_amount=this.state.val;
                push(time,cash_amount)
            }
        }
    }
    alert=(message)=>{
        this.refs.alert.show({
            content: message,
            okText: '确定',
        })
    }
    send=()=>{
       const {
           val
       }=this.state,
       pwd=this.refs.reddem.password;
      this.props.send(val,utils.md5(pwd));
        this.refs.reddem.hide();
    }
    change=(e)=>{
      const val=e.target.value,
             reg=/^\d+(\.\d+)?$/,
          tipbar=this.refs.tipbar;
      this.setState({
          val
      });
      if (!reg.test(val)){
          tipbar.open('请输入正确的格式!')
      }else if (val<50){
          tipbar.open('金额必须大于50')
      }else {
          this.setState({
              disabled:false
          })
      }
    }
    render() {
        const {
            pop,
        }=this.props;
        const {
            val,
            disabled
        }=this.state;
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop}>余额提现</NavBar>
               <div className={styles.body}>
                   <div className={styles.contentBox}>
                       <div className={styles.title}>
                           <span className={styles.cardLx}>储蓄卡</span>
                           <span className={styles.card}>中国农业银行(5416)</span>
                       </div>
                       <div className={styles.withdrawalsInfo}>
                           <span>提现金额（元）</span>
                           <span className={styles.withdrawalsText}>提现金额不得低于50元</span>
                       </div>
                       <div className={styles.withdrawalsInput}>
                           <span>￥</span>
                           <input placeholder="请输入提现金额!" type="text" value={val} onChange={this.change}/>
                       </div>
                       <div className={styles.withdrawalsJe}>
                           当前金额￥98,591,483.70
                       </div>
                   </div>
                   <div className={styles.time}>
                       预计1~2个工作日到账
                   </div>
                   <button className={styles.button} onClick={this.onValid} disabled={disabled}>
                       下一步
                   </button>
                   <div className={styles.remarks}>
                       注：提现金额中若包含未投资金额,提现申请将延后24小时处理
                   </div>
                   <ReddemDialog ref='reddem'/>
               </div>
                <Tipbar ref='tipbar' />
                <Alert ref="alert"/>
            </div>
        )
    }
}
const Rechargeinit=(state,own)=>({
      cashData:state.infodata.getIn(['CASH','data'])
});
const Rechargeinitfn=(dispath,own)=>({
     pop(){
         dispath(goBack());
     },
    send(amount,password){
         dispath({
             type:'CASH',
             params:[{amount,password}]
         })
    },
    push(time,cash_amount){
        dispath(push(`/user/cashsuccess?time=${time}&cash_amount=${cash_amount}`))
    }
});
export default connect(Rechargeinit,Rechargeinitfn)(Index)