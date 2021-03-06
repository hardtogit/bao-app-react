/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import BaseText from '../../../../../components/BaseText'
import BaseButton from '../../../../../components/BaseButton'
import Reddem from '../../../../../components/Dialog/reddem'
import Choice from '../../../../../components/Dialog/ChoiceCard'
import Alert from '../../../../../components/Dialog/alert'
import LoadingDialog from '../../../../../components/Dialog/loading'
import TipBar from '../../../../../components/Tipbar'
import {connect} from 'react-redux'
import {goBack,push,replace} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            disabled:true,
            recMoney:'',
            bankName:'',
            bankCard:'',
            bankIcon:'',
            singleLimit:'',
            dayLimit:'',
            time:0
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
     //组件渲染完成时调用
        this.props.getMyBankCards();
       // this.refs.password.show({})
    }
    componentWillUnmount(){
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
        const $this=this;
        if(nextProps.banks&&nextProps.banks.data) {
            this.setState({
                bankName:nextProps.banks.data[0].bankName,
                bankCard:nextProps.banks.data[0].bankCard.substr(nextProps.banks.data[0].bankCard.length-4,4),
                bankCardNo:nextProps.banks.data[0].bankCard,
                bankIcon:nextProps.banks.data[0].bankIcon,
                singleLimit:nextProps.banks.data[0].singleLimit,
                dayLimit:nextProps.banks.data[0].dayLimit,
            })
        }
        const {goBankData}=nextProps;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clearData("GO_BANK_PAGE")
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
        }else if(goBankData&&goBankData.code!=100){
            this.props.clearData("GO_BANK_PAGE")
            this.refs.alert.show({
                content:'订单生成失败!',
                okText: '确定',

            });
        }
        if(nextProps.rechargeData){
            if(nextProps.rechargeData.status==1){
                if(this.state.time<=3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.verifyData&&nextProps.verifyData.code=='100'){
                         this.props.push('/user/reChargeSuccess')
                    }else{
                        if(this.state.time>=3){
                            if(nextProps.verifyData&&nextProps.verifyData.code!='100'){
                                //this.props.push('/user/reChargeFail')
                                $this.refs.loading.hide()
                                this.refs.alert.show({
                                    content: nextProps.verifyData.msg,
                                    okText: '确定',
                                })
                            }else{
                                //this.props.push('/user/reChargeFail')
                                $this.refs.loading.hide()
                                this.refs.alert.show({
                                    content: '充值失败',
                                    okText: '确定',
                                })
                            }
                            this.setState({
                                time:0
                            })
                        }else{
                            setTimeout(function(){
                                $this.props.rechargeVerify({id:nextProps.rechargeData.msgId})
                            },2000)

                        }
                    }
                }

            }else if(nextProps.rechargeData.code==301){
                $this.refs.loading.hide()
                this.refs.alert.show({
                    content: '交易密码错误',
                    okText: '确定',
                })
            }else{
                $this.refs.loading.hide()
                this.refs.alert.show({
                    content: '交易错误',
                    okText: '确定',
                })
            }
        }
    }
    componentWillUnmount(){
     //组件将要被移除时调用
        this.props.clear()

    }
    handleChange=(e)=>{
        const recMoney=e.target.value,
            reg=/^-?\d*\.?\d*$/;
        this.setState({
            recMoney
        });
        if (!reg.test(recMoney)||recMoney==''){
            this.refs.tip.open('请输入正确的充值金额！');
            this.setState({
                disabled:true
            });
        }else{
            this.setState({
                disabled:false
            });
        }

    }
    choiceCallback=(hide,data)=>{
        this.setState({
            bankName:data.bankName,
            bankCard:data.bankCard.substr(data.bankCard.length-4,4),
            bankCardNo:data.bankCard,
            bankIcon:data.bankIcon
        })
        hide();
    }
    choiceBank=()=>{
        this.refs.choice.show()
    }
    handleClick=()=>{
        let $this=this;
        // $this.props.recharge(data)
        if(this.state.disabled){
            return false
        }
        $this.props.goBankPage({
            way:1,
            type:462,
            returnUrl:"",
            data:{
                bankCard:$this.state.bankCardNo,
                transferAmount:$this.state.recMoney,
                device:'WAP',
            }
        });
    };
    render(){
        const{
            pop,
            banks
            }=this.props;
        const{
            bankName,
            bankCard,
            bankIcon
            }=this.state;

        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  充值
              </NavBar>
               <div className={styles.inputGroup}>
                   <span className={styles.title}>充值金额</span><input onChange={this.handleChange} placeholder="请输入充值金额" className={styles.input} type="text"/><span className={styles.unit}>元</span>
               </div>
               <div style={{marginTop:'15px'}}>
               <BaseText className={styles.bank_line} onClick={this.choiceBank} label={bankName&&<div><img src={bankIcon} alt=""/> <span className={styles.text}>{bankName}({bankCard})</span></div> }> </BaseText>
               </div>
               <div style={{marginTop:'40px',padding:'0 15px'}}>
               <BaseButton onClick={this.handleClick} text="下一步" disable={this.state.disabled}></BaseButton>
               </div>
               <Reddem  ref="password"></Reddem>
               <TipBar ref="tip"></TipBar>
               <Choice options={{banks:banks,choiceCallback:this.choiceCallback}} ref="choice"></Choice>
               <LoadingDialog ref="loading"></LoadingDialog>
               <Alert ref="alert"/>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    banks:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
    rechargeData:state.infodata.getIn(['NEW_RECHARGE','data']),
    verifyData:state.infodata.getIn(['RECHARGE_VERIFY','data']),
    goBankData:state.infodata.getIn(['GO_BANK_PAGE','data']),

});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
         dispatch(replace(url))
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

    recharge(data){
        dispatch({
            type:'NEW_RECHARGE',
            params:[data]
        })
    },
    clear(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'NEW_RECHARGE'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'RECHARGE_VERIFY'
        })
    },
    clearData(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    },
    rechargeVerify(id){
        dispatch({
            type:'RECHARGE_VERIFY',
            params:[id]
        })
    }


});
export default connect(mapStateToProps,mapDispatchToProps)(Index)