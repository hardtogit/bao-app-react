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
    reg=()=>{
        let realName=this.refs.form.getValue().realName,idCard=this.refs.form.getValue().idCard;
        let data={realName:realName,idCard:idCard,password:'27525'}
        this.props.reg(data)
    };
    componentWillReceiveProps() {

    }
    componentDidMount(){

        this.refs.group.style.width=document.body.clientWidth*3+'px'
    }
    render(){
        return(
            <div>
                <NavBar>选择网点</NavBar>
                <div style={{marginTop:'44px'}}>
                    <ul className={styles.nav }>
                        <li className={styles.choice}>请选择</li>
                        <li className={styles.choice}></li>
                        <li className={styles.choice}></li>
                    </ul>
                </div>
                <div className={styles.container}>
                <div ref="group" className={styles.address}>
                    <ul className={styles.item}>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                    <ul className={styles.item}>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                    <ul className={styles.item}>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                </div>
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