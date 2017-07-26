/**
 * Created by xiangguo .
 * time:2017/7/5 0005.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import classNames from 'classnames'
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
import {go, replace,goBack} from 'react-router-redux'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    static defaultProps={
    };
    choiceBank=(bankId,bankName)=>{
        this.props.bankToState({bankId:bankId,bankName:bankName});
        this.props.pop()
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.msgId){

        }

    }
    componentWillMount(){
        this.props.getBankList();
    }

    componentDidMount(){
        this.refs.group.style.height=document.body.clientHeight-44+'px';
    }
    render(){
        const{
            bankData
            }=this.props;
        let Dom;
        if(bankData){
            Dom=<ul className={styles.item}>
                        {bankData&&bankData.data.map((value,i)=>{
                            return <li onClick={()=>{this.choiceBank(value.bankId,value.bankName)}} key={value.bankId}> {value.bankName} </li>
                        })}
                 </ul>

        }else{
            Dom=<Loading></Loading>
        }

        return(
            <div>
                <NavBar onLeft={this.props.pop}>选择开户行</NavBar>
                <div style={{paddingTop:'44px'}}>
                    <div className={styles.container}>
                        <div ref="group" className={styles.address} >
                            {Dom}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        bankData:state.infodata.getIn([actionTypes.GET_BANK, 'data']),
    }
};

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        //查询银行
        getBankList(){
            dispatch({
                type:actionTypes.GET_BANK
            })

        },

        //更新网点到state
        bankToState(data){
            dispatch({
                type:actionTypes.CHOICE_BANK,
                bankData:data
            })
        },
        //返回上一页
        pop(){
            dispatch(goBack())
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Index)