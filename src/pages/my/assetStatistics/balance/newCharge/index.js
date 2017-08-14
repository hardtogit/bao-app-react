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
import LoadingDialog from '../../../../../components/Dialog/loading'
import TipBar from '../../../../../components/Tipbar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            disabled:true,
            recMoney:'',
            bankName:'',
            bankCard:'',
            time:0,
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
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
        const $this=this;
        if(nextProps.banks&&nextProps.banks.data) {
            this.setState({
                bankName:nextProps.banks.data[0].bankName,
                bankCard:nextProps.banks.data[0].bankCard.substr(nextProps.banks.data[0].bankCard.length-4,4),
                bankCardNo:nextProps.banks.data[0].bankCard
            })
        }
        if(nextProps.rechargeData){
            if(nextProps.rechargeData.status==1){
                if(this.state.time<=3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.verifyData&&nextProps.verifyData.code=='0001'){
                         this.props.push('/user/reChargeSuccess')
                    }else{
                        if(this.state.time>=3){
                            if(nextProps.verifyData&&nextProps.verifyData.code!='0001'){
                                this.props.push('/user/reChargeFail')
                            }else{
                                this.props.push('/user/reChargeFail')
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

            }else{

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
    choiceCallback=(a,b,c)=>{
        this.setState({
            bankName:b,
            bankCard:c.substr(c.length-4,4),
            bankCardNo:c
        })
        a()
    }
    choiceBank=()=>{
        this.refs.choice.show()
    }
    handleClick=()=>{
        let $this=this;
        if(this.state.disabled){
            return false
        }
        this.refs.password.show({
            money:this.state.recMoney,
            okCallback:function(a,b){
               let data;
                console.log(b)
                data={
                    bankCard:$this.state.bankCardNo,
                    transferAmount:$this.state.recMoney,
                    passwordFactor:sessionStorage.getItem('passwordFactor'),
                    device:'WAP',
                    mapKey:sessionStorage.getItem('mapKey'),
                    password:b
                }
                $this.refs.loading.show("充值中...")
                $this.props.recharge(data)
                a()
            }
        })
    }
    render(){
        const{
            pop,
            banks
            }=this.props;
        const{
            bankName,
            bankCard
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
               <BaseText onClick={this.choiceBank} label={bankName&&bankName+"("+bankCard+")"}> </BaseText>
               </div>
               <div style={{marginTop:'40px',padding:'0 15px'}}>
               <BaseButton onClick={this.handleClick} text="下一步" disable={this.state.disabled}></BaseButton>
               </div>
               <Reddem  ref="password"></Reddem>
               <TipBar ref="tip"></TipBar>
               <Choice options={{banks:banks,choiceCallback:this.choiceCallback}} ref="choice"></Choice>
               <LoadingDialog ref="loading"></LoadingDialog>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    banks:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
    rechargeData:state.infodata.getIn(['NEW_RECHARGE','data']),
    verifyData:state.infodata.getIn(['RECHARGE_VERIFY','data'])

});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
         dispatch(push(url))
    },
    getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST'
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
    rechargeVerify(id){
        dispatch({
            type:'RECHARGE_VERIFY',
            params:[id]
        })
    }


});
export default connect(mapStateToProps,mapDispatchToProps)(Index)