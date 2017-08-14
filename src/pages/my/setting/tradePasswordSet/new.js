/**
 * Created by Administrator on 2016/12/7.
 */
/**
 * 设置交易密码
 */
import React from 'react'
import { connect } from 'react-redux'
import BasePasswordInput from '../../../../components/BaseInput/BasePasswordInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import Alert from '../../../../components/Dialog/alert'
import ValidateForm  from '../../../../components/BaseValidateForm'
import Tipbar from '../../../../components/Tipbar'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import {TRADE_PASSWORD_SET,VERIFY_CARD,CHECK_VERIFY_CAPTCHA_W,CLAER_LC} from '../../../../actions/actionTypes'
import Page from '../../../../components/Page'
import {goBack,push} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'
import Success from '../../../../components/Dialog/success'
import InlineLoading from '../../../../components/Loading/InlineLoading'

class TradePasswordSet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: '',
            smsReference:'',
            init:true,
            time:0
        }
    }
    componentDidMount(){
        const alert = this.refs.alert;
        const {smsReference}=this.props.location.query
        this.setState({
            smsReference:smsReference
        })
        passGuard3.generate("kb3",kb,0);
        $(function(){
            setTimeout(function(){
                kb.generate();
            },100);
        })
    }
    componentWillReceiveProps(nextProps) {
        const alert = this.refs.alert;
        if(nextProps.setData&&nextProps.setData.status==1){
           if(this.state.time<=3){
               if(nextProps.verifyData&&nextProps.verifyData.code=='0001'){
                       this.refs.success.show({
                           text: '重置密码成功!',
                           callback: () => {this.props.go('/user/setting'),this.props.clear()},
                       });
               }else{
                   setTimeout(function(){
                       this.props.tradePassWordVerify(nextProps.setData.msgId)
                   },2000)
               }
           }
        }
        //if (resCode == 100&&!pending&&this.state.init) {
        //    this.refs.success.show({
        //        text: '重置密码成功!',
        //        callback: () => {this.props.go('/user/setting'),this.props.clear()},
        //    });
        //    this.setState({
        //        init:false
        //    })
        //}
    }
    send(){
        passGuard3.setRandKey(sessionStorage.getItem('passwordFactor'));
        let newPassword=passGuard3.getOutput();
        let data={newPassword:newPassword,smsReference:this.state.smsReference,passwordFactor:sessionStorage.getItem('passwordFactor'),device:'WAP',mapKey:sessionStorage.getItem('mapKey')};
        this.props.pwdSet(data)
    }
    render() {
        const {
        }=this.props;
        return (
            <Page>
                <div className={commonStyles.panel}>
                    <NavBar onLeft={this.props.pop} title='设置新交易密码' />
                    <div style={{display:'flex',backgroundColor:'#fff',marginTop:'15px'}}>
                     <div style={{padding:'12px 15px',color:'#777'}}>新密码</div><input style={{flex:'1',border:'none'}} id="kb3" type="text"/>
                    </div>
                    <div style={{marginTop:'40px',padding:'15px'}}>
                    <Button onClick={this.send} text="确认设置"></Button>
                    </div>
                    <Alert ref="alert" />
                    <Success ref="success"/>
                </div>
            </Page>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
        setData:state.infodata.getIn(['NEW_TRADE_PASSWORD_SET','data']),
        verifyData:state.infodata.getIn(['PUBLIC_VERIFY','data'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    load(){
        dispatch({
            type:'USER_INFO_WITH_LOGIN'
        })
    },
    pop() {
        dispatch(goBack())
    },
    go(path){
        dispatch(push(path))
    },
    clear(){
       dispatch({
           type:CLAER_LC,
           key:[VERIFY_CARD,CHECK_VERIFY_CAPTCHA_W]
       })
    },
    pwdSet(data) {
        dispatch({
            type: 'NEW_TRADE_PASSWORD_SET',
            params: [
                data
            ]
        })
    },
    tradePassWordVerify(id){
        dispatch({
              type:'PUBLIC_VERIFY',
              params:[{id:id}]
            })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TradePasswordSet)
