/**
 * Created by xiangguo .
 * time:2017/7/4 0004.
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
import Verify  from '../../../../components/VerifyCode/index'
import SelectBox from '../../../../components/SelectBox/index'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.less'
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
    static defaultProps = {
        data:[{color:'#000',text:'ds'},{color:'#000',text:'ds'},{color:'#000',text:'ds'}]
    };
    sendCode(){
       let phone=this.refs.phone.value;
    }
    componentWillMount(){


    }
    componentDidMount(){

    }


    render(){
        return(
            <div>
                预留手机号：<input ref="phone" type="text"/>
                <input type="text" placeholder="请输入验证码"/><Verify init={true} onClick={this.sendCode}></Verify>
            </div>
        )
    }


}
const mapStateToProps=(state,ownProps)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        sendCode(data){
            dispatch({
                type:'',
                param:[data]
            })

        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);