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
            ref:'',
            formData:{},
            province:'',
            city:'',
            bank:'',
            point:''
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
                    if(nextProps.sendFlag&&nextProps.sendFlag.data.status==1){
                            this.setState({
                                ref:nextProps.sendFlag.data.additional[0].data.ref
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
            this.props.bindCard(this.state.formData)
            this.props.clean('STORE_VERIFY_CODE');
        }
        if(nextProps.regData&&nextProps.regData.status==1){
            if(this.state.bindTime<=3){
                this.setState({
                    bindTime:this.state.bindTime+1
                });
                if(nextProps.bindFlag&&nextProps.bindFlag.data.status==1){
                        this.props.push('/user/setting/bindSuccess')
                }else{
                    if(this.state.bindTime>=3){
                        this.refs.alert.open('绑定银行卡失败');
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
    }
    componentDidMount(){
    }
    componentDidUpdate(){

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
      this.props.sendCode({telNo:this.refs.form.getValue().telNo})
    };
    choiceBank=(e)=>{
        //sessionStorage.setItem('carNo',this.refs.form.getValue().bankCard);
        this.props.saveStoreData({carNo:this.refs.form.getValue().bankCard,telNo:this.refs.form.getValue().telNo});
        this.props.push('/user/setting/choiceBank')
    };

    submit=()=>{
        this.props.clean('BIND_VERIFY');
        this.setState({
            bindTime:0
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
       let telNo=this.refs.form.getValue().telNo;
        this.setState({
            formData:{
                smsReference:smsReference,
                bankCard:bankCard,
                bankName:bankName,
                bankCode:bankCode,
                telNo:telNo
            }
        });
        if(verifyCode&&smsReference){
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
            saveData
            }=this.props;
           const bankCard=saveData&&saveData.carNo?saveData.carNo:'';
           const telNo=saveData&&saveData.telNo?saveData.telNo:'';

        return(
            <div className={styles.container}>
                <NavBar onLeft={this.props.pop}>绑定银行卡</NavBar>
                <div className={styles.tip}>
                    *请绑定本人持有的银行卡，此卡将用于充值、提现、投
                    资等，已绑定过银行卡的用户需重新绑定
                </div>
                <div className={styles.form}>
                    <ValidateForm ref="form">
                    <BaseInput
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
                        开户行<div className={styles.rightIcon}><span className={styles.text} onClick={this.choiceBank}>{bankData?bankData.bankName:'点击选择开户行'}</span><span className={styles.arrow}></span></div>
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
                <div className={styles.problem}>
                      忘记预留手机怎么办？
                </div>
                <div className={styles.submit}>
                    <Button text="下一步" onClick={this.submit} />
                </div>
                <Tipbar ref="alert"></Tipbar>
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
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);