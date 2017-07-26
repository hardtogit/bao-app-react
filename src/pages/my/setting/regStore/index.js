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
require('../../../../components/pageLoading')

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
        var kb = new keyBoard({
            "id":'kb1',
            "chaosMode" : 0,// 混乱模式,0:无混乱;1:打开时乱一次;2:每输入一个字符乱一次,默认值0
            "pressStatus" :1,// 按键状态,0:按下、抬起按键无变化;1:按下、抬起按键的颜色变化,默认值0
            "kbType" : 0,// 键盘类型,0:全键盘;1:纯数字键盘,默认值0
            "odd" : 51,//按键异或值
            "svg":"/static/sv/"//svg图片的地址
        });
        var passGuard1 = new passGuard({
            "mappurl" : "/api/supervise/users/passwordControlKey",
            "maxLength" : 12,// 最大输入长度
            "regExp1" : "[\\S\\s]",// 输入过程限制的正则
            "regExp2": "[0-9]{6,12}",
            "displayMode" : 0,// 显示形式,0:星号;1:明文,默认值0
            "callBack":cb1,//成功回调
            "errorCallBack":cb2,//失败回调
            "rsaPublicKey" : "3081890281810092d9d8d04fb5f8ef9b8374f21690fd46fdbf49b40eeccdf416b4e2ac2044b0cfe3bd67eb4416b26fd18c9d3833770a526fd1ab66a83ed969af74238d6c900403fc498154ec74eaf420e7338675cad7f19332b4a56be4ff946b662a3c2d217efbe4dc646fb742b8c62bfe8e25fd5dc59e7540695fa8b9cd5bfd9f92dfad009d230203010001"// rsa公钥
        });

        function cb1(){
            console.log("成功1");
        }
        function cb2(){
            console.log("失败1");
        }
        passGuard1.generate("kb1",kb,1);

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
                        <div style={{backgroundColor:'#fff'}}>
                        <div style={{display:'-webkit-flex',marginLeft:'15px'}}>
                            <div className="false"><span style={{color: '#000',fontSize: '16px',width: '75px',display: 'block',padding:'12px 0'}}>交易密码</span></div>
                            <div style={{flex:'1'}}>
                                <input ref="kb1" id="kb1" className='default' style={{fontSize: '16px',padding: '12px 0',border: '0'}} type="password" placeholder="请输入交易密码"/>
                            </div>
                        </div>
                            <div style={{display:'-webkit-flex',marginLeft:'15px'}}>
                                <div ><span style={{color: '#000',fontSize: '16px',width: '75px',display: 'block',padding:'12px 0'}}>确认密码</span></div>
                                <div style={{flex:'1'}}>
                                    <input ref="kb2" style={{fontSize: '16px',padding: '12px 0',border: '0'}} placeholder="确认交易密码" type="password"/>
                                </div>

                            </div>
                        </div>


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