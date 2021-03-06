import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {push,goBack} from 'react-router-redux'
import ReddemDialog from '../../../../../components/Dialog/reddem'
import Choice from '../../../../../components/Dialog/ChoiceCard'
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
            charge:'',
            bankCard:'',
            bankIcon:'',
            minimum:50,
            maximum:50000
        }
    }
    componentWillMount(){
        this.props.getDefault()
    }
    componentWillUnmount(){
        this.props.clean('NEW_CASH')
    }
    componentDidMount(){
        this.props.getMyBankCards();
       const user=JSON.parse(sessionStorage.getItem('bao-user'))&&JSON.parse(sessionStorage.getItem('bao-user'))||this.props.userinfo;
        this.setState({
            money:user.balance,
        })
        this.props.serviceChargeRule({device:'WAP',transferAmount:'0.00'})
    }
    onValid=()=>{
        const {
            val,
            charge,
            bankCard
        }=this.state;
        this.props.goBankPage({
            type:461,
            way:1,
            returnUrl:"",
            data:{
            transferAmount:val,
            bankCard:bankCard,
            device:'WAP',
            feeAmount:charge,
            isNew:1
            }
        })



        // this.refs.reddem.show({
        //     title: '提现',
        //     money:val,
        //     okCallback:()=>{
        //         this.refs.loading.show('处理中...')
        //         this.send()} ,
        //     cancelCallback: () => {
        //
        //     }
        // })
    }

    componentWillReceiveProps(next){
        const {cashData,push,cardInfo,nowCard,rule,cashSetting,goBankData}=next;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clean("GO_BANK_PAGE")
            this.props.go('/user/setting/bankPage?url='+goBankData.data.url)
        }else if(goBankData&&goBankData.code!=100){
            this.props.clean("GO_BANK_PAGE")
            this.alert('订单生成失败!');
        }
        if(cashSetting){
            if(cashSetting.code==100){
                this.setState({
                    minimum:parseInt(cashSetting.data.withdrawSingleMinMoney),
                    maximum:parseInt(cashSetting.data.withdrawSingleTimeMoney)
                })
            }
        }
        const $this=this;
        if(cardInfo&&cardInfo.data){
            this.setState({
                bank:cardInfo.data[0].bankName,
                number:cardInfo.data[0].bankCard.substr(cardInfo.data[0].bankCard.length-4,4),
                bankCard:cardInfo.data[0].bankCard,
                bankIcon:cardInfo.data[0].bankIcon
            })
        }
        if(nowCard){
            this.setState({
                bank:nowCard.bankName,
                number:nowCard.bankCard.substr(nowCard.bankCard.length-4,4),
                bankCard:nowCard.bankCard,
                bankIcon:nowCard.bankIcon
            })
        }
        if (cashData){
            if(cashData.code=='100'){
                        const time=Date.parse(new Date()),
                            cash_amount=this.state.val;
                        push(time,cash_amount)
            }else if(cashData.code=='300'){
                this.alert('提现失败');
                this.refs.loading.hide()
            }else if(cashData.code=='301'){
                this.alert(cashData.msg);
                this.refs.loading.hide()
            }else if(cashData.code=='302'){
                this.alert(cashData.msg);
                this.refs.loading.hide()
            }else if(cashData.code=='303'){
                this.alert(cashData.msg);
                this.refs.loading.hide()
            }else if(cashData.code=='304'){
                this.alert(cashData.msg);
                this.refs.loading.hide()
            }else if(cashData.code=='312'){
                this.alert(cashData.msg);
                this.refs.loading.hide()
            }else if(cashData.code=='313'){
                this.alert(cashData.msg);
                this.refs.loading.hide()
            }else{
                this.alert('提现失败');
                this.refs.loading.hide()
            }
            this.props.clean('NEW_CASH')
        }
        if(rule){
            this.setState({
                charge:rule.data.expenses
            })

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
      this.props.send(val,pwd,sessionStorage.getItem('passwordFactor'),bankCard,"WAP",sessionStorage.getItem('mapKey'),this.state.charge);
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
          this.setState({
              disabled:true
          })
      }else if (val<this.state.minimum){
          this.setState({
              disabled:true
          })
      }else if (val>this.state.maximum){
          this.setState({
              disabled:true
          })
      }else if (val>parseFloat(this.state.money)){
          this.setState({
              disabled:true
          })

      }
      else {
          this.setState({
              disabled:false
          })
      }
        // this.props.serviceChargeRule({device:'WAP',transferAmount:val})
    }
    blur=(e)=>{
        const val=e.target.value,
            reg=/^\d+(\.\d{1,2})?$/,
            tipbar=this.refs.tipbar;
        if (!reg.test(val)){
            tipbar.open('请输入正确的格式!');
        }else if(val<this.state.minimum){
            tipbar.open('金额必须大于'+this.state.minimum)
        }else if(val>this.state.maximum){
            tipbar.open('单笔金额不能大于'+this.state.maximum)
        }
        else if (val>parseFloat(this.state.money)){
            tipbar.open('超出余额！')
        }
        else {
        }
    }

    render() {
        let chargeDom;

        const {
            pop,
            go,
            cardInfo,
            rule
        }=this.props;
        console.log(rule)
        if(rule){
            if(rule.data.num>0){
                chargeDom=<div style={{fontSize:'12px',position:'relative',top:'2px'}}>本月免费提现次数剩余{rule.data.num}次</div>
            }else{
                if(rule.data.expenses){
                    chargeDom=<div style={{fontSize:'12px',position:'relative',top:'2px'}}>额外扣除{rule.data.expenses}元手续费</div>
                }
            }
        }
        const {
            val,
            disabled,
            money,
            bank,
            number,
            bankIcon,
            minimum
        }=this.state;
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop}>余额提现</NavBar>
               <div className={styles.body}>
                   <div className={styles.contentBox}>
                       <div className={styles.title} onClick={()=>{go('/user/choiceMyCard')}}>
                           <span className={styles.cardLx}>储蓄卡</span>
                           <span className={styles.card}><img className={styles.icon_img} src={bankIcon} alt=""/>{bank}({number})</span>
                       </div>
                       <div className={styles.withdrawalsInfo}>
                           <span>提现金额（元）</span>
                           <span className={styles.withdrawalsText}>提现金额不得低于{minimum}元</span>
                       </div>
                       <div className={styles.withdrawalsInput}>
                           <span>￥</span>
                           <input placeholder="请输入提现金额!" type="text" value={val} onChange={this.change} onBlur={this.blur}/>
                       </div>
                       <div className={styles.withdrawalsJe}>
                           当前金额￥{money}
                       </div>
                       <div className={styles.withdrawalsJe}>
                           额外扣除0.00元手续费
                       </div>
                   </div>
                   <div className={styles.time}>
                       预计1~2个工作日到账
                   </div>
                   <button className={styles.button} onClick={this.onValid} disabled={disabled}>
                       下一步
                   </button>
                   <div className={styles.remarks}>
                       注：提现金额中若包含未出借金额,提现申请将延后24小时处理
                   </div>
                   <ReddemDialog ref='reddem'/>
               </div>
                <Tipbar ref='tipbar' />
                <Alert ref="alert"/>
                <LoadingDialog ref="loading"></LoadingDialog>
                <Choice ref="choice" options={{banks:cardInfo,choiceCallback:this.choiceCallback}}></Choice>
            </div>
        )
    }
}
const Rechargeinit=(state)=>({
      cashData:state.infodata.getIn(['NEW_CASH','data']),
      withdraw:state.infodata.getIn(['WITHDRAW','data']),
     userinfo:state.infodata.getIn(['USER_INFO','data']),
    cardInfo:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
    nowCard:state.regStore.getIn(['CHOICE_CARD','cardInfo']),
    rule:state.infodata.getIn(['SERVICE_CHARGE_RULE','data']),
    cashSetting:state.infodata.getIn(['GET_DEFAULT_TAB','data']),
    goBankData:state.infodata.getIn(['GO_BANK_PAGE','data'])
});
const Rechargeinitfn=(dispatch)=>({
     pop(){
         dispatch(goBack());
     },
    go(url){
        dispatch(push(url))
    },
    send(transferAmount,password,passwordFactor,bankCard,device,mapKey,feeAmount){
        dispatch({
             type:'NEW_CASH',
             params:[{transferAmount,password,passwordFactor,bankCard,device,mapKey:mapKey,feeAmount}]
         })
    },
    getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST'
        })
    },
    goBankPage(data){
        dispatch({
            type:'GO_BANK_PAGE',
            params:[data]
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
    clean(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    },
    getDefault(){
        dispatch({
            type:'GET_DEFAULT_TAB',
        })
    },
    serviceChargeRule(data){
       dispatch({
           type:'SERVICE_CHARGE_RULE',
           params:[data]
       })
    },
    push(time,cash_amount){
        dispatch(push(`/user/cashsuccess?time=${time}&cash_amount=${cash_amount}`))
    }
});
export default connect(Rechargeinit,Rechargeinitfn)(wrap(Index))