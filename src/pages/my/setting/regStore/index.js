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
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.styl'
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
        }
    }


    reg=()=>{
    let realName=this.refs.form.getValue().realName,idCard=this.refs.form.getValue().idCard;
    let data={realName:realName,idCard:idCard,password:'27525'}
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
    render(){
        return(
            <div>
                <NavBar>存管注册</NavBar>
                <div style={{marginTop:'60px'}}>
                    <ValidateForm
                        ref='form'
                        onValid={this.onValid}
                        onInvalid={this.onInvalid}>
                    <BaseInput
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
                        noleftPadding
                        ref='idCard'
                        name='idCard'
                        label='身份证号'
                        defaultValue=''
                        placeholder='请输入身份证号'
                        type='validateItem'
                        reg={{ required: {message: '请输入正确身份证号'}}}
                        borderType='four' />
                        <BaseInput
                            noleftPadding
                            ref='idCard'
                            name='idCard'
                            label='交易密码'
                            defaultValue=''
                            placeholder=''
                            type='password'
                            reg={{ required: {message: ''}}}
                            borderType='four' />
                        </ValidateForm>
                    <Button style={{marginTop:'15px'}} onClick={this.reg}
                        className={styles.button}
                        text={this.props.pending ? <LoadingButton text='注册中' /> : '注册'}
                         />

                </div>
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