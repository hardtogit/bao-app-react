/**
 * Created by xiangguo .
 * time:2017/6/30 0030.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import LoadingButton from '../../../../components/LoadingButton/index'
import Tipbar from '../../../../components/Tipbar/index'
import ValidateForm from '../../../../components/BaseValidateForm/index'
import * as actionTypes from '../../../../actions/actionTypes'
import BaseInput     from '../../../../components/BaseInput/index'
import BasePasswordInput     from '../../../../components/BaseInput/index'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.styl'
import util from '../../../../utils/utils.js'
import {go,goBack,replace,push} from 'react-router-redux'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
require('../../../../components/pageLoading')

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            disable:true,
            pending:false,
            ifUpdate:false,
            checkBox:true,
            init:false
        }
    }
    reg=()=>{
        if(this.state.disable){
            return
        }

    let bankName=this.props.bankData.bankName;
    let bankCode=this.props.bankData.bankCode;
    let realName=this.refs.form.getValue().realName,idCard=this.refs.form.getValue().idCard,telNo=this.refs.form.getValue().telNo,bankCard=this.refs.form.getValue().bankCard;
    let reg1=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    let reg2= /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
    let reg3 = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
        if (idCard.match(reg1) == null && idCard.match(reg2) == null) {
            this.refs.alert.open('身份证输入错误');
            return false;
        }
        // if(telNo.)
    let data={type:1,way:1,data:{realName:realName,idCard:idCard,telNo:telNo,bankCard:bankCard,bankName:bankName,bankCode:bankCode,device:"WAP"},returnUrl:'https://www.bao.cn'};
        this.setState({
            time:0,
            pending:true
        });
        this.props.clean()
    this.props.reg(data)
    };

    bindBank=(e)=>{
        this.ifPost();
        let carNo=this.refs.form.getValue().bankCard;
        if(carNo.length>=3){
            let flag=true;
            if(this.props.bankList){
                this.props.bankList.data.map((value,i)=>{
                    if(carNo.indexOf(value.cardBin)==0){
                        flag=false;
                        this.props.bankToState(value)
                    }
                });
                if(flag&&carNo.length>7){
                    this.props.bankToState({bankName:"存管暂不支持该银行的储蓄卡",bankCode:""})
                }
            }
        }else{
            this.props.bankToState({bankName:"请输入卡号识别",bankCode:""})
        }
    };
    componentWillMount(){
        if(!this.props.bankList){
            this.props.getBankBindList()
        }
    }
    componentWillReceiveProps(nextProps) {
        //设置用户
        if(nextProps.userData&&!this.state.init){
            this.refs.form.refs.realName.setState({
                value:nextProps.userData.data.realName
            })
            this.refs.form.refs.idCard.setState({
                value:nextProps.userData.data.idCard
            })
            this.refs.form.refs.telNo.setState({
                value:nextProps.userData.data.telNo
            })
            this.setState({
                init:true
            })
            setTimeout(()=>{
                if(this.refs.form){
                    this.ifPost()
                }
            },1000)

        }
        if(nextProps.data){
            this.setState({
                pending:false
            });
            if (nextProps.data.code==100){
                this.props.clean()
                this.props.push('/user/setting/bankPage?url='+nextProps.data.data.url)
            }else{
                this.props.clean()
                this.refs.alert.open("注册失败")
            }
        }
    }
    componentDidMount(){
        this.props.getStoreUserInfo();
    }
    isFilled=()=>{
        const $this=this
        let realName=this.refs.form.getValue().realName,idCard=this.refs.form.getValue().idCard,telNo=this.refs.form.getValue().telNo,bankCard=this.refs.form.getValue().bankCard;
        if(realName!=''&&idCard!=''&&telNo!=''&&bankCard!=''&&realName!=null&&idCard!=null&&telNo!=null&&bankCard!=null){
            return true;
        }else{
            return false;
        }
    };
    flag=true
    ifPost=()=>{
        if(this.isFilled()&&this.flag==true){
            this.setState({
                disable:false
            })
        }else{
            this.setState({
                disable:true
            })
        }
    };
    render(){
        const{
            disable
            }=this.state;
        const{
            saveData,
            storeUserInfo,
            bankData
        }=this.props;
        const bankCard=saveData&&saveData.carNo?saveData.carNo:'';
        const telNo=saveData&&saveData.telNo?saveData.telNo:'';
        const realName=storeUserInfo&&storeUserInfo.data.realName?storeUserInfo.data.realName:'';
        const idCard=storeUserInfo&&storeUserInfo.data.idCard?storeUserInfo.data.idCard:'';
        return(
            <div className={styles.container}>
                <NavBar onLeft={this.props.pop} leftNode={<div style={{paddingLeft:'10px'}}>取消</div>} >开通存管账户</NavBar>
                <div style={{paddingTop:'60px'}}>
                    <p className={styles.tip}>*请输入本人的真实姓名和身份证号，一但开通成功，无法修改。</p>
                    <ValidateForm
                        ref='form'
                        onValid={this.onValid}
                        onInvalid={this.onInvalid}>
                    <BaseInput
                        onChange={this.ifPost}
                        noleftPadding
                        ref='realName'
                        name='realName'
                        label='真实姓名'
                        defaultValue={realName}
                        placeholder='请输入真实姓名'
                        type='validateItem'
                        reg={{ required: {message: '请输入正确姓名'}}}
                        borderType='four' />
                    <BaseInput
                        onChange={this.ifPost}
                        noleftPadding
                        ref='idCard'
                        name='idCard'
                        label='身份证号'
                        defaultValue={idCard}
                        placeholder='请输入身份证号'
                        type='validateItem'
                        reg={{ required: {message: '请输入正确身份证号'}}}
                        borderType='four'
                        wrapStyle={{borderBottom:'none'}}
                    />
                        <p className={styles.tip}>银行卡信息</p>
                         <BaseInput
                                onChange={this.bindBank}
                                noleftPadding
                                ref='bankCard'
                                name='bankCard'
                                label='银行卡号'
                                defaultValue=''
                                placeholder=''
                                type='validateItem'
                                reg={{ required: {message: '请输入正确的卡号'}}}
                                borderType='four' />
                        <div style={{backgroundColor:'#fff'}}>
                            <div className={styles.rightBar}>
                                开户行<div className={styles.rightIcon}><span className={styles.text} onClick={this.choiceBank}>{bankData?bankData.bankName:'请输入卡号识别'}</span><span className={styles.arrow}></span></div>
                            </div>
                        </div>
                            <BaseInput
                                onChange={this.ifPost}
                                noleftPadding
                                ref='telNo'
                                name='telNo'
                                label='预留手机'
                                defaultValue={telNo}
                                placeholder=''
                                type='validateItem'
                                reg={{ required: {message: '请输入手机号'}}}
                                borderType='four' />
                        <p className={styles.tip}>开通存管后此密码将用于提现、投资等交易操作、原宝点网交易密码将停用</p>
                        </ValidateForm>
                    <div style={{padding:'15px'}}>
                    <Button ref="bottom" style={{marginTop:'15px'}} onClick={this.reg} disable={disable}
                        className={styles.bottom}
                        text={this.state.pending ? <LoadingButton text='开通中...' /> : '开通存管'}
                         />
                    </div>
                    <Tipbar ref="alert"></Tipbar>
                </div>
            </div>
            )
    }
}
const mapStateToProps=(state,ownProps)=>{
   return{
       bankData:state.regStore.getIn([actionTypes.CHOICE_BANK, 'bankInfo']),
       bankList:state.infodata.getIn([actionTypes.GET_BANK_BIND_LIST,'data']),
       pending:state.infodata.getIn([actionTypes.REG_STORE, 'pending']),
       data:state.infodata.getIn([actionTypes.REG_STORE, 'data']),
       userData:state.infodata.getIn([actionTypes.GET_STORE_USER_INFO, 'data']),
       saveData:state.regStore.getIn([actionTypes.SAVE_STORE_DATA,'data']),
       storeUserInfo:state.infodata.getIn([actionTypes.GET_STORE_USER_INFO,'data']),
       flagData:state.infodata.getIn([actionTypes.REG_VERIFY,'data'])
   }
};

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
     reg(data){
         dispatch({
             type:actionTypes.REG_STORE,
             params:[data]
         })
     },
     pop(){
         dispatch(goBack())
     },
     clean(){
         dispatch({
             type:'CLEAR_INFO_DATA',
             key:'REG_STORE'
         });
         dispatch({
             type:'CLEAR_INFO_DATA',
             key:'REG_VERIFY'
         })
     },
        //更新网点到state
        bankToState(data){
            dispatch({
                type:actionTypes.CHOICE_BANK,
                bankData:data
            })
        },
     getBankBindList(){
         dispatch({
                type:'GET_BANK_BIND_LIST',
         })
     },
     verify(id){
         dispatch({
             type:actionTypes.REG_VERIFY,
             params:[{id:id}]
         })
     },
     getStoreUserInfo(){
         dispatch({
             type:actionTypes.GET_STORE_USER_INFO
         })
     },
     updateStore(){
        dispatch({
            type:actionTypes.STORE_STATUS_INFO
        })
     },
     push(url){
         dispatch(push(url))
     }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index)