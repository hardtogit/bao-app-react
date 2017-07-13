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
import ValidateForm from '../../../../components/BaseValidateForm/index'
import * as actionTypes from '../../../../actions/actionTypes'
import BaseInput     from '../../../../components/BaseInput/index'
import BasePasswordInput     from '../../../../components/BaseInput/index'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Store from '../../../../components/Dialog/store'
import Success from '../../../../components/Dialog/success'
import styles from './index.styl'
import util from '../../../../utils/utils.js'
import {go, replace} from 'react-router-redux'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            disable:true,
        }
    }
    reg=()=>{
        if(this.state.disable){
            return
        }
    let realName=this.refs.form.getValue().realName,idCard=this.refs.form.getValue().idCard;
    let data={realName:realName,idCard:idCard,password:'27525'};

    this.props.reg(data)
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.flagData)
        if(nextProps.data){
            if (nextProps.data.status==1){
                if(this.state.time<3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.flagData&&nextProps.flagData.status==0){
                    }else{
                        setTimeout(()=>{
                            this.props.verify(nextProps.data.msgId)
                        },1000)
                    }
                }
            }
        }
    }
    componentDidMount(){
          //this.refs.tip.show();
           document.getElementById('root').style.backgroundcolor='#f6f6f6';
    }
    isFilled=()=>{
        const $this=this
        let realName=this.refs.form.getValue().realName, idCard=this.refs.form.getValue().idCard;
        let password=$this.refs.form.getValue().password, compassword=$this.refs.form.getValue().compassword;
        if(realName!=''&&idCard!=''&&password!=''&&compassword!=''){
            return true;
        }else{
            return false;
        }
    };
    ifPost=()=>{
        if(this.isFilled()){
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
                <NavBar>开通存管账户</NavBar>
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
                        borderType='four' />
                        <p className={styles.tip}>设置交易密码</p>
                        <BasePasswordInput
                            onChange={this.ifPost}
                            noleftPadding
                            ref='password'
                            name='password'
                            label='交易密码'
                            defaultValue=''
                            placeholder='请输入交易密码'
                            type='validateItem'
                            reg={{ required: {message: ''}}}
                            borderType='four' />
                        <BasePasswordInput
                            onChange={this.ifPost}
                            noleftPadding
                            ref='compassword'
                            name='compassword'
                            label='确认密码'
                            defaultValue=''
                            placeholder='请输入交易密码'
                            type='validateItem'
                            reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'}}}
                            borderType='four' />

                        <p className={styles.tip}>开通存管后此密码将用于提现、投资等交易操作、原宝点网交易密码将停用</p>
                        </ValidateForm>
                    <div style={{padding:'15px'}}>
                    <Button ref="bottom" style={{marginTop:'15px'}} onClick={this.reg} disable={disable}
                        className={styles.bottom}
                        text={this.props.pending ? <LoadingButton text='开通中...' /> : '开通存管'}
                         />
                    </div>

                </div>
                <Store ref="tip"></Store>
            </div>
            )
    }
}
const mapStateToProps=(state,ownProps)=>{
   return{
       pending:state.infodata.getIn([actionTypes.REG_STORE, 'pending']),
       data:state.infodata.getIn([actionTypes.REG_STORE, 'data']),
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
     verify(id){
         dispatch({
             type:actionTypes.REG_VERIFY,
             params:[{id:id}]
         })
     }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index)