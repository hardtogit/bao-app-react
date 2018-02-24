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
            checkBox:true
        }
    }
    reg=()=>{
        if(this.state.disable){
            return
        }
    let realName=this.refs.form.getValue().realName,idCard=this.refs.form.getValue().idCard;
    let reg1=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    let reg2= /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
        if (idCard.match(reg1) == null && idCard.match(reg2) == null) {
            this.refs.alert.open('身份证输入错误');
            return false;
        }
        //判断密码长度
        if(passGuard1.getLength()==0){
            this.refs.alert.open('密码不能为空')
            return false;
        }
        //判断密码是否匹配正则
        if(passGuard1.getValid()==1){
            this.refs.alert.open('新密码不符合要求')
            return false;
        }
        //判断密码是否匹配正则
        if(passGuard1.getHash() != passGuard2.getHash()){
            this.refs.alert.open('两次输入的密码不一致')
            return false;
        }
        passGuard1.setRandKey(sessionStorage.getItem('passwordFactor'));
        passGuard2.setRandKey(sessionStorage.getItem('passwordFactor'));
        passGuard1.getOutput();
    let data={realName:realName,idCard:idCard,password:passGuard2.getOutput(),passwordFactor:sessionStorage.getItem('passwordFactor'),device:'WAP',mapKey:sessionStorage.getItem('mapKey')};
        this.setState({
            time:0,
            pending:true
        });
        this.props.clean()
    this.props.reg(data)
    };
    componentWillReceiveProps(nextProps) {
        //设置用户
        if(nextProps.userData){
            this.refs.form.refs.realName.setState({
                value:nextProps.userData.data.realName
            })
            this.refs.form.refs.idCard.setState({
                value:nextProps.userData.data.idCard
            })
            setTimeout(()=>{
                if(this.refs.form){
                    this.ifPost()
                }
            },1000)

        }
        if(nextProps.data){
            if (nextProps.data.status==1){
                if(this.state.time<=3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.flagData&&nextProps.flagData.code=="0001"){
                        this.props.push('/user/setting/cardBind')
                        if(!this.state.ifUpdate){
                            this.props.updateStore();
                        }
                        this.setState({
                            ifUpdate:true
                        })
                    }else{
                        if(this.state.time>=3){
                            this.setState({
                                pending:false
                            })
                            if(nextProps.flagData&&nextProps.flagData.code!="0001"&&!this.state.ifUpdate){
                                this.refs.alert.open(nextProps.flagData.msg)

                            }else{
                                this.refs.alert.open('开通存管账户失败')
                            }
                            $("#kb1").val('');
                            $("#kb2").val('');
                        }else{
                            setTimeout(()=>{
                                this.props.verify(nextProps.data.msgId)
                            },3000)
                        }
                    }
                }
            }else{
                this.setState({
                    pending:false
                });
                this.refs.alert.open(nextProps.data.msg)
            }
        }
    }
    componentDidMount(){
        this.props.getStoreUserInfo()
        passGuard1.generate("kb1",kb,0);
        passGuard2.generate("kb2",kb,0);
        $(function(){
            setTimeout(function(){
                kb.generate();
            },100);
        })
    }

    isFilled=()=>{
        const $this=this
        let realName=this.refs.form.getValue().realName, idCard=this.refs.form.getValue().idCard;
        let password=$this.refs.form.getValue().password, compassword=$this.refs.form.getValue().compassword;
        if(realName!=''&&idCard!=''&&password!=''&&compassword!=''&&this.state.checkBox){
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
                        defaultValue=''
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
                        defaultValue=''
                        placeholder='请输入身份证号'
                        type='validateItem'
                        reg={{ required: {message: '请输入正确身份证号'}}}
                        borderType='four'
                        wrapStyle={{borderBottom:'none'}}
                    />
                        <p className={styles.tip}>设置交易密码</p>
                        <div style={{backgroundColor:'#fff'}}>
                        <div style={{display:'-webkit-flex',marginLeft:'15px',borderBottom:'1px solid #ddd'}}>
                            <div className="false"><span style={{color: '#000',fontSize: '16px',width: '75px',display: 'block',padding:'12px 0'}}>交易密码</span></div>
                            <div style={{flex:'1'}}>
                                <input ref="kb1" id="kb1" className='default' style={{fontSize: '16px',padding: '12px 0',border: '0'}}  placeholder="请输入6~20位交易密码"/>
                            </div>
                        </div>
                            <div style={{display:'-webkit-flex',marginLeft:'15px'}}>
                                <div ><span style={{color: '#000',fontSize: '16px',width: '75px',display: 'block',padding:'12px 0'}}>确认密码</span></div>
                                <div style={{flex:'1'}}>
                                    <input ref="kb2" id="kb2" style={{fontSize: '16px',padding: '12px 0',border: '0'}} placeholder="确认交易密码" />
                                </div>

                            </div>
                        </div>
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
       pending:state.infodata.getIn([actionTypes.REG_STORE, 'pending']),
       data:state.infodata.getIn([actionTypes.REG_STORE, 'data']),
       userData:state.infodata.getIn([actionTypes.GET_STORE_USER_INFO, 'data']),
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