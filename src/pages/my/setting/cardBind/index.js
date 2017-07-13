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
                if(this.state.time<3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.flagData&&nextProps.flagData.data.status==1){
                            this.setState({
                                ref:nextProps.flagData.data.additional[0].data.ref
                            })
                    }else{
                        setTimeout(()=>{
                            this.props.verify(nextProps.msgId.msgId)
                        },1000)
                    }
                }
            }
        }

        if( nextProps.verifyCodeData&&nextProps.verifyCodeData.status==1){
            this.props.bindCard(this.state.formData)
            this.props.clean('STORE_VERIFY_CODE');
        }
        if(nextProps.regData&&nextProps.regData.status==1){
            alert('绑定成功')
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
      this.props.clean('REG_VERIFY');
        this.setState({
            time:0
        });
      this.props.sendCode({telNo:this.refs.form.getValue().telNo})
    };
    choiceBank=(e)=>{
        sessionStorage.setItem('carNo',this.refs.form.getValue().bankCard);
        this.props.push('/user/setting/choiceBank')
    };
    choicePoint=(e)=>{
        if(this.props.bankData){
            let bank=this.props.bankData.bankId;
            sessionStorage.setItem('carNo',this.refs.form.getValue().bankCard);
            this.props.push('/user/setting/choicePoint?bankId='+bank)
        }else{
            this.refs.alert.open('请选择开户行')
            return;
        }
    };
    submit=()=>{
        let tip=this.refs.alert;
        let bankCard=this.refs.form.getValue().bankCard;
        if(bankCard==''){
            tip.open('请输入卡号')
            return false;
        }
        if(this.props.pointData==undefined){
            tip.open('请选择网点')
            return
        }

       let smsReference=this.state.ref;
       let verifyCode=this.refs.verifyCode.value;
       let bankName=this.props.pointData.bankName;
       let bankCode=this.props.pointData.bankCode;
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
        if(smsReference&&verifyCode){
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
            pointData,
            msgId
            }=this.props;
           const bankCard=sessionStorage.getItem('carNo')?sessionStorage.getItem('carNo'):'';
        return(
            <div >
                <NavBar onLeft={this.props.pop}>绑定银行卡</NavBar>
                <div style={{paddingTop:'44px'}}>
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
                        <div className={styles.rightBar}>
                            网点<div className={styles.rightIcon}><span className={styles.text} onClick={this.choicePoint}>{pointData?pointData.bankName:'点击选择网点'}</span><span className={styles.arrow}></span></div>
                        </div>
                    <BaseInput
                        noleftPadding
                        ref='telNo'
                        name='telNo'
                        label='预留手机号'
                        defaultValue=''
                        placeholder=''
                        type='validateItem'
                        reg={{ required: {message: '请输入正确的卡号'}}}
                        borderType='four' />

                    <div style={{margin:'10px 15px 0 15px'}}>
                        <input ref="verifyCode" name="verifyCode" style={{float:'left',width:'60%',padding:'11px 0',marginRight:'2%'}} type="text" placeholder="请输入验证码"/> <Verify containerDisableStyle={{width:'38%'}} containerStyle={{width:'38%'}} init={true} onClick={this.sendCode}></Verify>
                    </div>
                    <br/>
                    <div style={{paddingLeft:'15px',paddingRight:'15px'}}>
                       <Button text="绑卡" onClick={this.submit} />
                    </div>

                    </ValidateForm>
                    <Tipbar ref="alert"></Tipbar>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        pointData:state.regStore.getIn([actionTypes.CHOICE_POINT, 'bankInfoPoint']),
        bankData:state.regStore.getIn([actionTypes.CHOICE_BANK, 'bankInfo']),
        msgId:state.infodata.getIn([actionTypes.STORE_SEND_CODE, 'data']),
        flagData:state.infodata.getIn([actionTypes.REG_VERIFY,'data']),
        verifyCodeData:state.infodata.getIn([actionTypes.STORE_VERIFY_CODE,'data']),
        regData:state.infodata.getIn([actionTypes.STORE_BIND_CAR,'data']),
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
        verify(id){
            dispatch({
                type:actionTypes.REG_VERIFY,
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
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);