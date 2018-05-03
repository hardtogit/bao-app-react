/**
 * Created by xiangguo .
 * time:2018/1/9 0009.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import Alert from '../../../../../components/Dialog/alert'
import NavBar from '../../../../../components/NavBar'
import Store from '../../../../../components/Dialog/store'
import styles from './index.less'
import classNames from 'classnames'
import cunguan_icon from '../../../../../assets/images/my-index/cunguan.png'
import tuoguan_icon from '../../../../../assets/images/my-index/tuoguan.png'
import {platFormGetAuthDetail,getAuthDetail} from '../../../../../components/Permission'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
          disable1:true,
          disable2:true
        }
    }
    componentWillMount(){
        this.props.getDefault()
        this.props.queryUpload()
    }
    componentDidMount(){
     this.props.load();
    }
    componentWillReceiveProps(nextProps){
        const {userInfo,cashSetting}=nextProps;
        if(userInfo&&cashSetting){
            if(parseFloat(userInfo.data.balance)>=parseInt(cashSetting.data.withdrawSingleMinMoney)){
                this.setState({
                    disable1:false
                })
            }
            if(parseFloat(userInfo.data.balance_platform)>=parseInt(cashSetting.data.withdrawSingleMinMoney)){
                this.setState({
                    disable2:false
                })
            }
        }
    }
    goCash=(balance)=>{
        let $this=this;
        switch (getAuthDetail()){
            case 1:
                $this.money(balance)
                break;
            case 2:
                push('/user/setting/authorization');
                break;
            case 3:
                this.refs.store.show();
                break;
            default:
                break
        }
    }
    goCashOld = (balance) => {
        switch (platFormGetAuthDetail()){
            case 1:
                this.moneyOld(balance)
                break;
            case 2:
                push('/user/setting/authorization');
                break;
            case 3:
                this.refs.store.show();
                break;
            default:
                break
        }
    }
    money = (balance)=> {
        //const baoBank = sessionStorage.getItem('bao-bank');
        //if (parseFloat(balance) < 50) {
        //    this.refs.alert.show({
        //        content: '对不起余额不足！',
        //        okText: '确定'
        //    })
        //} else {
        this.props.push('/user/withdrawals')
        //if (baoBank != null) {
        //    this.props.push('/user/withdrawals')
        //} else {
        //    this.props.push('/user/setting/securityCard')
        //}
        //}
    }
    moneyOld = (balance)=> {
        //const baoBank = sessionStorage.getItem('bao-bank');
        //if (parseFloat(balance) < 50) {
        //    this.refs.alert.show({
        //        content: '对不起余额不足！',
        //        okText: '确定'
        //    })
        //} else {
        this.props.push('/user/withdrawalsOld')
        //if (baoBank != null) {
        //    this.props.push('/user/withdrawals')
        //} else {
        //    this.props.push('/user/setting/securityCard')
        //}
        //}
    }
    render() {
        const {pop,push,userInfo,cashSetting}=this.props;
        return(
            <div className={styles.container}>
                <Store ref="store"></Store>
                <Alert ref="alert"></Alert>
                <NavBar onLeft={pop} rightNode={<div>规则</div>} onRight={()=>{push('/user/cashRule')}}>
                    提现
                </NavBar>
                <div className={styles.content}>
                      <h4 className={styles.text}>账户余额 (元)</h4>
                      <div className={styles.num}>{userInfo&&userInfo.data.amount}</div>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.store}>
                                存
                            </div>
                            <div className={styles.detail} onClick={()=>{push('/user/cashLog/1')}}>
                                提现明细 <span className={styles.arrow}></span>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.left}>
                                <img src={cunguan_icon} alt=""/>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.title}>存管账户余额 (元)</p>
                                <p className={styles.money}>{userInfo&&userInfo.data.balance}</p>
                            </div>
                        </div>
                        <div className={styles.footer} >
                            <div className={classNames([styles.btn,this.state.disable1&&styles.disable||""])  } onClick={()=>{if(this.state.disable1) {return false;} this.goCash(userInfo&&userInfo.data.balance)}}>
                                提现
                            </div>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.store}>
                                托
                            </div>
                            <div className={styles.detail} onClick={()=>{push('/user/cashLog/2')}}>
                                提现明细 <span className={styles.arrow}></span>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.left}>
                                <img src={tuoguan_icon} alt=""/>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.title}>托管账户余额 (元)</p>
                                <p className={styles.money}>{userInfo&&userInfo.data.balance_platform}</p>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={classNames([styles.btn,this.state.disable2&&styles.disable||""])} onClick={()=>{
                                if(this.state.disable2) {return false;}
                                this.goCashOld(userInfo&&userInfo.data.balance_platform)
                            }}>
                                提现
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}
const mapStateToProps=(state)=>({
       userInfo:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
       uploadData: state.infodata.getIn(['QUERY_UPLOAD', 'data']),
       cashSetting:state.infodata.getIn(['GET_DEFAULT_TAB','data'])
});
const mapDispatchProps=(dispatch)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    load(){
        dispatch({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
    getDefault(){
        dispatch({
            type:'GET_DEFAULT_TAB',
        })
    },
    queryUpload(){
        dispatch({
            type:'QUERY_UPLOAD'
        })
    }
});
export default connect(mapStateToProps,mapDispatchProps)(Index)