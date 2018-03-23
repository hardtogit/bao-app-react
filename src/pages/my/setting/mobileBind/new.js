/**
 * Created by Administrator on 2016/12/7.
 */
/**
 * 手机绑定
 */
import React from 'react'
import { connect } from 'react-redux'
import BaseInput from '../../../../components/BaseInput'
import Button from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import Alert from '../../../../components/Dialog/alert'
import ValidateForm  from '../../../../components/BaseValidateForm'
import VerifyCode from '../../../../components/VerifyCode'
import Tipbar from '../../../../components/Tipbar'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import {SEND_MSG, BIND_MOBILE_SUCCESS,BIND_MOBILE_MODIFY} from '../../../../actions/actionTypes'
import {replace,push} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'

class MobileBind extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            errorMessage: '',
            time:0,
            time1:0,
            time2:0,
            ref:''
        }
    }
    componentDidMount(){
        const {
            mobile,
            load
        }=this.props;
            load()
    }
    componentWillReceiveProps({mobile,sendCode,verifySendData,verifyCodeData,verifyCodeRightData,bindResData,verifyBindMobileData,goBankPage}) {
        const alert = this.refs.alert;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
            this.props.clearState()
        }else if(goBankData&&goBankData.code!=100){
            this.props.clearState()
            this.refs.tip.open('订单生成失败!');
        }
        if(sendCode){
           if(sendCode.status==1) {
               if(this.state.time<=3){
                   this.setState({
                       time:this.state.time+1
                   });
                   if(verifySendData&&verifySendData.code=="0001"){
                         this.setState({
                             ref:verifySendData.data.ref
                         })
                   }else{
                       if(this.state.time>=3){
                           this.setState({
                               pending:false
                           })
                           if(verifySendData&&verifySendData.code!="0001"){
                               this.refs.tip.open(verifySendData.msg)
                           }else{
                               this.refs.tip.open('验证码发送失败')
                           }
                           this.refs.code.setState({
                               active:true
                           })
                       }else{
                           setTimeout(()=>{
                               this.props.verifySend(sendCode.msgId)
                           },2000)
                       }
                   }
               }

           }
        }
        if(verifyCodeData){
            if(verifyCodeData.status==1) {
                if(this.state.time1<=3){
                    this.setState({
                        time1:this.state.time1+1
                    });
                    if(verifyCodeRightData&&verifyCodeRightData.code=="0001"){
                        this.props.goBankPage({
                            type:474,
                            way:1,
                            returnUrl:"",
                            data:{
                                newMobile:this.refs.form.getValue().mobile,
                                smsReference:this.state.ref,
                                device:'WAP'
                            }
                        })
                    }else{
                        if(this.state.time1>=3){
                            this.setState({
                                pending:false
                            })
                            if(verifyCodeRightData&&verifyCodeRightData.code!="0001"){
                                this.refs.tip.open(verifyCodeRightData.msg)
                            }else{
                                this.refs.tip.open('验证码发送失败')
                            }
                            this.refs.code.setState({
                                active:true
                            })
                        }else{
                            setTimeout(()=>{
                                this.props.verifyCodeRight(verifyCodeData.msgId)
                            },2000)
                        }
                    }
                }

            }
        }
        if(bindResData){
           if(bindResData.code==301){
               this.refs.tip.open('交易密码错误')
           }else if(bindResData.code==302){
               this.refs.tip.open('手机号已存在')
           }else if(bindResData.status==1) {
               if(this.state.time2<=3){
                   this.setState({
                       time2:this.state.time2+1
                   });
                   if(verifyBindMobileData&&verifyBindMobileData.code=="0001"){
                           const {mobile} = this.refs.form.getValue()
                           this.props.bindSuccess(''+mobile+'')
                           alert.show({
                               content: '绑定成功',
                               okText: '确定',
                               okCallback: () => this.props.replace('/securityCenter'),
                           })

                   }else{
                       if(this.state.time2>=3){
                           this.setState({
                               pending:false
                           })
                           if(verifyBindMobileData&&verifyBindMobileData.code!="0001"){
                               this.refs.tip.open(verifyBindMobileData.msg)
                           }else{
                               this.refs.tip.open('验证码发送失败')
                           }
                           this.refs.code.setState({
                               active:true
                           })
                       }else{
                           setTimeout(()=>{
                               this.props.verifyCodeRight(bindResData.msgId)
                           },2000)
                       }
                   }
               }
           }
        }
        if (mobile&&mobile==''){
            this.alert()
        }

    }
    alert(){
        const alertn=this.refs.alert;
        alertn.show({
            content: '您还没有绑定手机',
            okText: '去绑定',
            okCallback: () =>{this.props.push('/user/setting/mobileBind')} ,
        })
    }
    loadDom(){
        return(<Loading/>)
    }

    onValid = () => {
        var $this=this;
        const {
            mobile,
            captcha,
        } = this.refs.form.getValue();
        if(this.state.ref==''){
            this.refs.tip.open('请重新发送验证码');
            return false;
        }
        //判断密码长度
        if(passGuard3.getLength()==0){
            this.refs.tip.open('密码不能为空')
            return false;
        }
        //判断密码是否匹配正则
        if(passGuard3.getValid()==1){
            this.refs.tip.open('交易密码错误')
            return false;
        }
        this.setState({
            time1:0,
            time2:0
        })
        this.props.cleanData();
        this.props.verifyCode({verifyCode:captcha,smsReference:this.state.ref,device:'WAP'});
    }

    onInvalid = (name, value, message) => {
        this.refs.tip.open(message);
    }

    sendVerifyCode = () => {
        this.setState({
            time:0
        })
        const {mobile} = this.refs.form.getValue()
        if (!util.checkMobile(mobile)) {
            console.log(mobile)
            this.refs.tip.open('请输入正确的手机号');
            this.refs.code.setState({
                active:true
            })
            return;
            //return this.setState({errorMessage: '请输入正确的手机号'})
        }
        this.props.getVerifyCode(+mobile)
    }

    render() {
        const {
            mobile
        }=this.props;
        return (
            <div className={commonStyles.panel}>
                <NavBar
                    title='绑定新手机'
                />
                <div>
                    <ValidateForm
                        className={commonStyles.mt15}
                        ref='form'
                        onValid={this.onValid}
                        onInvalid={this.onInvalid}>
                        <BaseInput
                            ref='mobile'
                            name='mobile'
                            label='手机号'
                            maxLength={11}
                            keyboardType='numeric'
                            placeholder='请输入11位手机号'
                            type='validateItem'
                            reg={{ required: {message: '请输入正确的手机号'},
                            mobile: {message: '请输入正确的手机号'} }}
                            borderType='four' />
                        <BaseInput
                            ref='captcha'
                            name='captcha'
                            label='验证码'
                            keyboardType='numeric'
                            type='validateItem'
                            right={ <VerifyCode ref='code' onClick={this.sendVerifyCode} label='发送验证码' /> }
                            reg={{ required: {message: '请输入正确的验证码'},
                       captcha: {message: '请输入正确的验证码'}}}
                            borderType='four' />
                        <Button
                            className={commonStyles.buttonWrap}
                            text='绑定手机'
                            type='submit'
                        />

                    </ValidateForm>

                </div>
                 <Tipbar className={commonStyles.tip} ref="tip"  />
                <Alert ref="alert" />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        mobile:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])&&state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']).data.mobile||false,
        sendCode:state.infodata.getIn(['STORE_SEND_CODE_CHANGE','data']),
        verifySendData:state.infodata.getIn(['CHANGE_CODE_VERIFY','data']),
        verifyCodeData:state.infodata.getIn(['STORE_CHANGE_PHONE_VERIFY_CODE','data']),
        verifyCodeRightData:state.infodata.getIn(['CHANGE_CODE_RIGHT_VERIFY','data']),
        bindResData:state.infodata.getIn(['CHANGE_CODE_RIGHT_VERIFY','data']),
        verifyBindMobileData:state.infodata.getIn(['VERIFY_BIND_MOBILE','data']),
        goBankData:state.infodata.getIn(['GO_BANK_PAGE','data']),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   load(){
       dispatch({
           type:'USER_INFO_WITH_LOGIN'
       })
   },
    getVerifyCode(mobile) {
        dispatch({
            type:'STORE_SEND_CODE_CHANGE',
            params:[{telNo:''+mobile,transcode:46749,device:'WAP'}]
        })
    },
    verifySend(id){
        dispatch({
            type:'CHANGE_CODE_VERIFY',
            params:[{id:id}]
        })
    },
    verifyCode(data){
        dispatch({
            type:'STORE_CHANGE_PHONE_VERIFY_CODE',
            params:[data]
        })
    },
    verifyCodeRight(id){
        dispatch({
            type:'CHANGE_CODE_RIGHT_VERIFY',
            params:[{id:id}]
        })
    },
   push(path){
      dispatch(push(path))
   },
    clearState(){
       dispatch({
           type:'CLEAR_INFO_DATA',
           key:'GO_BANK_PAGE'
       })
    },
    cleanData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'STORE_SEND_CODE_CHANGE'
        }),
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CHANGE_CODE_RIGHT_VERIFY'
        }),
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CHANGE_CODE_VERIFY'
         }),
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'STORE_CHANGE_PHONE_VERIFY_CODE'
         }),
            dispatch({
                type:'CLEAR_INFO_DATA',
                key:'CHANGE_CODE_RIGHT_VERIFY'
            }),
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'VERIFY_BIND_MOBILE'
        })
    },
    goBankPage(data){
      dispatch({
          type:"GO_BANK_PAGE",
          params:[data]
      })

    },
   bindMobile(data) {
        dispatch({
            type: 'STORE_BIND_MOBILE_MODIFY',
            params: [data]
        })
    },
    verifyBindMobile(id){
      dispatch({
          type:'VERIFY_BIND_MOBILE',
          params:[{id:id}]
      })

    },
    replace(path) {
        dispatch(replace(path))
    },

    bindSuccess(mobile) {
        dispatch({
            type: BIND_MOBILE_SUCCESS,
            key:'USER_INFO_WITH_LOGIN',
            data:mobile
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileBind)
