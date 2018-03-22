/**
 * Created by xiangguo .
 * time:2018/3/20 0020.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Button from '../../../../components/BaseButton'
import Alert from '../../../../components/Dialog/alert'
import LoadingButton from '../../../../components/LoadingButton/index'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            isOpen: false,
            disable:true
        }
    }
    static defaultProps = {

    };
    componentWillMount(){
      this.props.authorizationText();
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
        const {goBankData}=nextProps;
        if(goBankData&&goBankData.code==100){
            this.props.clearData(actionTypes.GO_BANK_PAGE);
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)

        }else if(goBankData){
            this.props.clearData(actionTypes.GO_BANK_PAGE);
             this.refs.alert.show({
                 content:"授权失败！",
                 okText:"确定"
             })
        }
    }
    componentWillUnmount(){
        //组件将要被移除时调用
    }
    handClick=()=>{
        if(this.state.disable){
            return false;
        }else{
            this.props.goBankPage({
                type:473,
                way:1,
                returnUrl:"",
                data:{
                    freeTransCode:[],
                    device:"WAP",
                    freeFlag:0
                }
            })
        }
    }
    handChange=(e)=>{
        if(e.target.checked){
            this.setState({
                disable:false
            })
        }else{
            this.setState({
                disable:true
            })
        }
    }
    render(){
        const{
            pop,
            authorizationTextData
        }=this.props;
        const{
           disable
        } =this.state;
        console.log(authorizationTextData)
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop}>
                    功能授权
                </NavBar>
                <div >
                    <p className={styles.p}>{authorizationTextData&&authorizationTextData.data}</p>
                    <p></p> 
                 <div className={styles.choice}>
                     <input type="checkbox" onChange={this.handChange}/>
                     我已阅读并同意签署 <Link to="/user/setting/regStore">《宝点网-后台功能免密设置协议》</Link>
                 </div>
                    <div className={styles.btnContainer}>
                    <Button  ref="bottom" style={{marginTop:'15px'}} onClick={this.handClick} disable={disable}
                            className={styles.bottom}
                            text={this.state.pending ? <LoadingButton text='跳转中...' /> : '下一步'}
                    />
                        <Alert ref="alert"></Alert>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    goBankData:state.infodata.getIn([actionTypes.GO_BANK_PAGE,'data']),
    authorizationTextData:state.infodata.getIn([actionTypes.AUTHORIZATION_TEXT,'data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    goBankPage(data){
        dispatch({
            type:actionTypes.GO_BANK_PAGE,
            params:[data]
        })
    },
    push(url){
        dispatch(push(url))
    },
    clearData(key){
        dispatch({
            type:actionTypes.CLEAR_INFO_DATA,
            key:key
        })
    },
    authorizationText(){
        dispatch({
            type:actionTypes.AUTHORIZATION_TEXT,
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)