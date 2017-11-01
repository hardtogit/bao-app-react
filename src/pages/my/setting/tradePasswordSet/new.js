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
import LoadingButton from '../../../../components/LoadingButton'
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
            time:0,
            pending:false
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
        let $this=this;
        if(nextProps.setData&&nextProps.setData.status==1){
           if(this.state.time<=3){
               $this.setState({
                   time:this.state.time+1
               })
               if(nextProps.verifyData&&nextProps.verifyData.code=='0001'){
                   this.setState({
                       pending:false
                   })
                       this.refs.success.show({
                           text: '重置密码成功!',
                           callback: () => {this.props.go('/user/setting'),this.props.clear()},
                       });
               }else{
                   if(this.state.time>=3){
                       if(nextProps.verifyData&&nextProps.verifyData.code!='0001'){
                           $('#kb3').val('');
                           this.setState({
                               pending:false
                           })
                           this.refs.alert.show({content:'重置密码失败',okText:'确定'})
                       }
                   }else{
                       setTimeout(function(){
                           $this.props.tradePassWordVerify(nextProps.setData.msgId)
                       },2000)
                   }
               }
           }
        }
    }
    send=()=>{
        passGuard3.setRandKey(sessionStorage.getItem('passwordFactor'));
        let newPassword=passGuard3.getOutput();
        let data={password:newPassword,smsReference:this.state.smsReference,passwordFactor:sessionStorage.getItem('passwordFactor'),device:'WAP',mapKey:sessionStorage.getItem('mapKey')};
        this.setState({
            pending:true,
            time:0
        })
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
                    <Button onClick={this.send} text={this.state.pending ? <LoadingButton text='设置中' /> : '确认设置'}></Button>
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
           key:['NEW_TRADE_PASSWORD_SET','PUBLIC_VERIFY']
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
