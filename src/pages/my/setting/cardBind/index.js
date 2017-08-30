/**
 * Created by xiangguo .
 * time:2017/7/4 0004.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import Tipbar from '../../../../components/Tipbar'
import LoadingButton from '../../../../components/LoadingButton/index'
import ValidateForm from '../../../../components/BaseValidateForm/index'
import * as actionTypes from '../../../../actions/actionTypes'
import BaseInput     from '../../../../components/BaseInput/index'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import SelectBox from '../../../../components/SelectBox/index'
import Verify from '../../../../components/VerifyCode/index'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.less'
import {go, replace} from 'react-router-redux'
import {goBack, push} from 'react-router-redux'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time:0,
            bindTime:0,
            codeTime:0,
            ref:'',
            formData:{},
            province:'',
            city:'',
            bank:'',
            point:'',
            submitting:false
        }
    }
    static defaultProps = {
        data:[{color:'#000',text:'ds'},{color:'#000',text:'ds'},{color:'#000',text:'ds'}]
    };
    componentWillReceiveProps(nextProps) {
        if(nextProps.msgId){
            if (nextProps.msgId.status==1){
                if(this.state.time<=3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.sendFlag&&nextProps.sendFlag.code=='0001'){
                            this.setState({
                                ref:nextProps.sendFlag.data.ref
                            })
                    }else{
                        if(this.state.time>=3){
                            this.refs.alert.open('发送验证码失败，请稍后重试');
                        }else{
                            setTimeout(()=>{
                                this.props.verifySend(nextProps.msgId.msgId)
                            },2000)
                        }
                    }
                }
            }
        }
        if( nextProps.verifyCodeData&&nextProps.verifyCodeData.status==1){
            if(this.state.codeTime<=3){
                this.setState({
                    codeTime:this.state.codeTime+1
                });
                if(nextProps.verifyCodeRightData&&nextProps.verifyCodeRightData.code=='0001'){
                    this.props.bindCard(this.state.formData);
                    this.setState({
                        codeTime:4
                    });
                }else{
                    if(this.state.codeTime>=3){
                        this.refs.alert.open('验证码错误');
                        this.setState({
                            submitting:false
                        })
                    }else{
                        setTimeout(()=>{
                            this.props.verifyCodeRight(nextProps.verifyCodeData.msgId)
                        },2000)
                    }
                }
            }
        }
        if(nextProps.verifyCodeData&&nextProps.verifyCodeData.status!=1){
            this.refs.alert.open('验证码错误');
            this.props.clean('STORE_VERIFY_CODE');
            this.setState({
                submitting:false
            })
        }
        if(nextProps.regData&&nextProps.regData.status==1){
            if(this.state.bindTime<=3){
                this.setState({
                    bindTime:this.state.bindTime+1
                });
                if(nextProps.bindFlag&&nextProps.bindFlag.code=='0001'){
                        this.props.updateStore();
                        this.props.push('/user/setting/bindSuccess')
                }else{
                    if(this.state.bindTime>=3){
                        if(nextProps.bindFlag&&nextProps.bindFlag.code!='0001'){
                        this.refs.alert.open(nextProps.bindFlag.msg);
                        this.setState({
                            submitting:false
                        })
                        }else{
                            this.refs.alert.open('绑定银行卡失败');
                            this.setState({
                                submitting:false
                            })
                        }
                    }else{
                        setTimeout(()=>{
                            this.props.verifyBind(nextProps.regData.msgId)
                        },2000)
                    }
                }
            }
        }
    }
    componentWillMount(){
        this.props.getBankBindList()
    }
    componentDidMount(){
    }
    showTip=()=>{
        this.refs.tip.show({
            okText:'确定',
            title:'温馨提示',
            content:<div style={{textAlign:'left'}}>
                <p style={{fontSize:'14px'}}>如果您忘记银行卡开户支行，请参考以下方式</p>
                <p style={{fontSize:'14px',marginTop:'10px',color:'#999',lineHeight:'1.4'}}>方法一: 通过拨打银行卡背面的客服热线，向客服咨询开户支行</p>
                <p style={{fontSize:'14px',marginTop:'10px',color:'#999',lineHeight:'1.4'}}>方法二: 带上银行卡、身份证到最近的一家开卡行银行网点</p>
                <p style={{fontSize:'14px',marginTop:'10px',color:'#999',lineHeight:'1.4'}}>方法三：如果开通网上银行，可通过登录网上银行自助查询</p>
            </div>

        })
    }
    componentDidUpdate(){
    }
    componentWillUnmount(){
        this.props.clean('BIND_VERIFY');
        this.props.clean('STORE_BIND_CAR')
        this.props.clean('CODE_RIGHT_VERIFY')
        this.props.clean('SEND_VERIFY');
        this.props.clean('SAVE_STORE_DATA');
    }
    sendCode=()=>{
        let telNo=this.refs.form.getValue().telNo;
        let regex = /^1[34578]\d{9}$/;
        if(telNo==''){
            this.refs.alert.open('请填写预留手机号码');
            return false;
        }else if(!regex.test(telNo)){
            this.refs.alert.open('请填写正确的手机号码');
            return false;
        }
      this.props.clean('SEND_VERIFY');
        this.setState({
            time:0
        });
      this.props.sendCode({telNo:this.refs.form.getValue().telNo,transcode:46708})
    };
    choiceBank=(e)=>{
        //return;
        //sessionStorage.setItem('carNo',this.refs.form.getValue().bankCard);
        this.props.clean('STORE_VERIFY_CODE');
        this.props.saveStoreData({carNo:this.refs.form.getValue().bankCard,telNo:this.refs.form.getValue().telNo});
        this.props.push('/user/setting/choiceBank')
    };
    str;
    bindBank=(e)=>{
        let carNo=this.refs.form.getValue().bankCard
        if(carNo.length>=6){
           let newStr=carNo.substr(0,6);
            if(newStr!=this.str){
                let flag=true
                this.str=newStr;
                this.props.bankList.data.map((value,i)=>{
                    if(value.cardBin==newStr){
                        flag=false;
                        this.props.bankToState(value)
                    }
                });
                if(flag){
                    this.props.bankToState({bankName:"存管暂不支持该银行的储蓄卡",bankCode:""})
                }
            }
        }else{
            this.props.bankToState({bankName:"请输入卡号识别",bankCode:""})
        }
    };
    submit=()=>{
        this.props.clean('BIND_VERIFY');
        this.props.clean('STORE_BIND_CAR')
        this.props.clean('CODE_RIGHT_VERIFY')
        this.setState({
            bindTime:0,
            codeTime:0
        });
        let tip=this.refs.alert;
        let bankCard=this.refs.form.getValue().bankCard;
        if(bankCard==''){
            tip.open('请输入卡号')
            return false;
        }

       let smsReference=this.state.ref;
       let verifyCode=this.refs.verifyCode.value;
       let bankName=this.props.bankData.bankName;
       let bankCode=this.props.bankData.bankCode;
        if(bankCode==''){
            tip.open('请选择开户行')
            return false;
        }
       let telNo=this.refs.form.getValue().telNo;
        this.setState({
            formData:{
                smsReference:smsReference,
                bankCard:bankCard,
                bankName:bankName,
                bankCode:bankCode,
                telNo:telNo,
                device:'WAP'
            }
        });
        if(verifyCode&&smsReference){
            this.setState({
                submitting:true
            });
            this.props.clean('STORE_VERIFY_CODE');
            this.props.verifyCode({
                smsReference:smsReference,
                verifyCode:verifyCode
            })
        }else{
            tip.open('请先验证手机号')
        }
    };
    render(){
        const{
            bankData,
            pending,
            saveData
            }=this.props;
           const bankCard=saveData&&saveData.carNo?saveData.carNo:'';
           const telNo=saveData&&saveData.telNo?saveData.telNo:'';

        return(
            <div className={styles.container}>
                <NavBar onLeft={this.props.pop}>绑定银行卡</NavBar>
                {pending? <Loading></Loading>:<div>
                <div className={styles.tip}>
                    *请绑定本人持有的银行卡，此卡将用于充值、提现、投
                    资等，已绑定过银行卡的用户需重新绑定
                </div>
                <div className={styles.form}>
                    <ValidateForm ref="form">
                    <BaseInput
                        onChange={this.bindBank}
                        noleftPadding
                        ref='bankCard'
                        name='bankCard'
                        label='银行卡号'
                        defaultValue={bankCard}
                        placeholder=''
                        type='validateItem'
                        reg={{ required: {message: '请输入正确的卡号'}}}
                        borderType='four' />
                    <div className={styles.rightBar}>
                        开户行<div className={styles.rightIcon}><span className={styles.text} onClick={this.choiceBank}>{bankData?bankData.bankName:'请输入卡号识别'}</span><span className={styles.arrow}></span></div>
                    </div>
                    <BaseInput
                        noleftPadding
                        ref='telNo'
                        name='telNo'
                        label='预留手机'
                        defaultValue={telNo}
                        placeholder=''
                        type='validateItem'
                        reg={{ required: {message: '请输入正确的卡号'}}}
                        borderType='four' />

                    <div style={{padding:'0 0 0 90px',position:'relative'}}>
                       <div style={{position:'absolute',left:'15px',top:'12px'}}>验证码</div> <input ref="verifyCode" name="verifyCode" style={{float:'left',width:'64%',padding:'11px 0',border:'none'}} type="text" placeholder="请输入验证码"/> <Verify containerDisableStyle={{width:'36%'}} containerStyle={{width:'36%'}} init={true} onClick={this.sendCode}></Verify>
                    </div>
                    </ValidateForm>
                </div>
                <div onClick={this.showTip} className={styles.problem}>
                      忘记预留手机怎么办？
                </div>
                <div className={styles.submit}>
                    <Button ref="bottom" style={{marginTop:'15px'}} onClick={this.submit}
                            className={styles.bottom}
                            text={this.state.submitting ? <LoadingButton text='绑定中...' /> : '下一步'}
                    />
                </div>
                    </div>
                }
                <Tipbar ref="alert"></Tipbar>
                <Alert ref="tip"></Alert>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        bankData:state.regStore.getIn([actionTypes.CHOICE_BANK, 'bankInfo']),
        msgId:state.infodata.getIn([actionTypes.STORE_SEND_CODE, 'data']),
        bindFlag:state.infodata.getIn([actionTypes.BIND_VERIFY,'data']),
        sendFlag:state.infodata.getIn([actionTypes.SEND_VERIFY,'data']),
        verifyCodeData:state.infodata.getIn([actionTypes.STORE_VERIFY_CODE,'data']),
        regData:state.infodata.getIn([actionTypes.STORE_BIND_CAR,'data']),
        saveData:state.regStore.getIn([actionTypes.SAVE_STORE_DATA,'data']),
        bankList:state.infodata.getIn([actionTypes.GET_BANK_BIND_LIST,'data']),
        pending:state.infodata.getIn([actionTypes.GET_BANK_BIND_LIST,'pending']),
        verifyCodeRightData:state.infodata.getIn([actionTypes.CODE_RIGHT_VERIFY,'data'])
    }
};
const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        //跳转选择网点
        push(path) {
            dispatch(push(path))
        },
        //返回上一页
        pop(){
            dispatch(goBack())
        },
        //发送验证码
        sendCode(data){
            dispatch({
                type:actionTypes.STORE_SEND_CODE,
                params:[data]
            })
        },
        //验证是否发送成功
        verifyBind(id){
            dispatch({
                type:actionTypes.BIND_VERIFY,
                params:[{id:id}]
            })
        },
        //更新网点到state
        bankToState(data){
            dispatch({
                type:actionTypes.CHOICE_BANK,
                bankData:data
            })
        },
        verifySend(id){
            dispatch({
                type:actionTypes.SEND_VERIFY,
                params:[{id:id}]
            })
        },
        //验证验证码
        verifyCode(data){
            dispatch({
                type:actionTypes.STORE_VERIFY_CODE,
                params:[data]
            })
        },
        //验证验证码是否验证成功
        verifyCodeRight(id){
            dispatch({
                type:actionTypes.CODE_RIGHT_VERIFY,
                params:[{id:id}]
            })
        },
        //绑卡
        bindCard(data){
            dispatch({
                type:actionTypes.STORE_BIND_CAR,
                params:[data]
            })
        },
        //清除state
        clean(key){
            dispatch({
                type:'CLEAR_INFO_DATA',
                key:key
            })
        },
        saveStoreData(data){
            dispatch({
                type:'SAVE_STORE_DATA',
                data:data
            })
        },
        updateStore(){
            dispatch({
                type:'STORE_STATUS_INFO'
            })
        },
        getBankBindList(){
            dispatch({
                type:'GET_BANK_BIND_LIST',
            })
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);