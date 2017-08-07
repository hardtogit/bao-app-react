import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {push,goBack} from 'react-router-redux'
import ReddemDialog from '../../../../../components/Dialog/reddem'
import LoadingDialog from '../../../../../components/Dialog/loading'
import Tipbar from '../../../../../components/Tipbar/index'
import Alert from '../../../../../components/Dialog/alert'
import utils from '../../../../../utils/utils'
import wrap from '../../../../../utils/pageWrapper'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            val:'',
            disabled:true,
            money:'',
            bank:'',
            time:0,
            number:"",
            bankCard:''
        }
    }
    componentDidMount(){
        this.props.getMyBankCards();
       const user=JSON.parse(sessionStorage.getItem('bao-user'))&&JSON.parse(sessionStorage.getItem('bao-user'))||this.props.userinfo;
        this.setState({
            money:user.balance,
        })
    }
    onValid=()=>{
        const {
            val
        }=this.state;
        this.refs.reddem.show({
            title: '提现',
            money:val,
            okCallback:()=>{
                this.refs.loading.show('处理中...')
                this.send()} ,
            cancelCallback: () => {

            }
        })
    }
    componentWillReceiveProps(next){
        const {cashData,push,cardInfo,verifyData}=next;
        const $this=this
        if(cardInfo&&cardInfo.data){
            this.setState({
                bank:cardInfo.data[0].bankName,
                number:cardInfo.data[0].bankCard.substr(cardInfo.data[0].bankCard.length-4,4),
                bankCard:cardInfo.data[0].bankCard
            })
        }
        if (cashData&&cashData.status==1){
                if(this.state.time<=3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(verifyData&&verifyData.code=='0001'){
                        const time=Date.parse(new Date()),
                            cash_amount=this.state.val;
                        push(time,cash_amount)
                    }else{
                        if(this.state.time>=3){
                            if(verifyData&&verifyData.code!='0001'){
                                this.alert('提现失败');
                                this.refs.loading.hide()
                            }else{
                                this.refs.loading.hide();
                                this.alert('提现失败')
                            }
                            this.setState({
                                time:0
                            })
                        }else{
                            setTimeout(function(){
                                $this.props.cashVerify({id:cashData.msgId})
                            },2000)

                        }
                    }
                }
        }else if(cashData&&cashData.status!=1){
               this.alert('提现未处理')
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
           val,
           bankCard
       }=this.state,
       pwd=this.refs.reddem.password;
      this.props.send(val,pwd,sessionStorage.getItem('passwordFactor'),bankCard,"WAP",sessionStorage.getItem('hEncryptKey'));
        this.refs.reddem.hide();
    }
    change=(e)=>{
      const val=e.target.value,
             reg=/^\d+(\.\d{1,2})?$/,
          tipbar=this.refs.tipbar;
      this.setState({
          val
      });
      if (!reg.test(val)){
          tipbar.open('请输入正确的格式!');
          this.setState({
              disabled:true
          })
      }else if (val<50){
          this.setState({
              disabled:true
          })
          tipbar.open('金额必须大于50')
      }else if (val>parseFloat(this.state.money)){
          this.setState({
              disabled:true
          })
          tipbar.open('超出余额！')
      }
      else {
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
            disabled,
            money,
            bank,
            number
        }=this.state;
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop}>余额提现</NavBar>
               <div className={styles.body}>
                   <div className={styles.contentBox}>
                       <div className={styles.title}>
                           <span className={styles.cardLx}>储蓄卡</span>
                           <span className={styles.card}>{bank}({number})</span>
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
                           当前金额￥{money}
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
                <LoadingDialog ref="loading"></LoadingDialog>
            </div>
        )
    }
}
const Rechargeinit=(state)=>({
      cashData:state.infodata.getIn(['NEW_CASH','data']),
      withdraw:state.infodata.getIn(['WITHDRAW','data']),
     userinfo:state.infodata.getIn(['USER_INFO','data']),
    cardInfo:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
    verifyData:state.infodata.getIn(['CASH_VERIFY','data'])
});
const Rechargeinitfn=(dispatch)=>({
     pop(){
         dispatch(goBack());
     },
    send(transferAmount,password,passwordFactor,bankCard){
        dispatch({
             type:'NEW_CASH',
             params:[{transferAmount,password,passwordFactor,bankCard,device,hEncryptKey}]
         })
    },
    getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST'
        })
    },
    get(){
        dispatch({
            type:'WITHDRAW'
        })
    },
    cashVerify(id){
        dispatch({
            type:'CASH_VERIFY',
            params:[id]
        })
    },
    push(time,cash_amount){
        dispatch(push(`/user/cashsuccess?time=${time}&cash_amount=${cash_amount}`))
    }
});
export default connect(Rechargeinit,Rechargeinitfn)(wrap(Index))