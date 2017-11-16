/**
 * Created by Administrator on 2017/4/24.
 */
import React from 'react';
import styles from '../index/index.styl';
import Alert from '../../../../components/Dialog/alert'
import Store from '../../../../components/Dialog/store'
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import List from '../../../../components/depositList/index'
import cns from 'classnames'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
import Couponimg from '../../../../assets/images/coupon1.png'
import Coupon1 from '../../../../assets/images/registerVoucher.png'
import setUrl from '../../../../components/setUrl'
class DepositIndex extends React.Component {
    state={
        depositbs:''
    }
    componentDidMount(){
        this.props.getList();
    }
    loadDom=()=>{
        return <Loading/>
    }
    bannerDom=()=>{
        const {push}=this.props;
        const user=sessionStorage.getItem("bao-auth");
        const userInfo=JSON.parse(sessionStorage.getItem("bao-user"));
        if (!user){
            return <div className={styles.xsBox} onClick={()=>{push('/register')}}>
                <img src={Couponimg} className={styles.bg}/>
                <img src={Coupon1} className={styles.bj}/>
                <div className={styles.text}>
                     <span>
                    新用户注册注册即送<span className={styles.money}>800</span>￥
                </span>
                    <span className={styles.right}>
                    点击<br/>领取
                </span>
                </div>
            </div>
        }else {
            let {voucher,interestRateSecurities}=userInfo;
            if (!voucher&&!interestRateSecurities){
                return false
            }else {
                return <p className={cns(styles.title,styles.pdTitle)}>
                    您当前有{voucher&&<span>{voucher}张抵用券</span>||null}{(interestRateSecurities&&voucher)&&'和'||null}{interestRateSecurities&&<span>{interestRateSecurities}张加息券</span>||null}未使用
                </p>
            }
        }
    }
    alert=(content)=>{
        this.refs.alert.show({
            title: '',
            content:content,
            okText:'知道了',
        })
    }
    successFn=()=>{
        setUrl.setUrl(this.props.url)
    }
    go=(index,id,soldOut,isBuy)=>{
        let text;
        if (!isBuy){
            text='产品购买未开始！'
        }
        else if (!soldOut){
            text='产品已售罄！'
        }
        if (text){
            this.alert(text);
            return false
        }
        this.props.push(`/deposit-product/${index}/B/${id}`)
    }
    goBuy=(index,id,soldOut,isBuy)=>{
        let text;
        if (!isBuy){
            text='产品购买未开始！'
        }
        else if (!soldOut){
            text='产品已售罄！'
        }
        if (text){
            this.alert(text);
            return false
        }
        this.successFn();
        let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
        if(storeData&&storeData.isAuthIdentity&&storeData.isSecurityCard){
            this.props.push(`/deposit-buy/${index}/B/${id}`)
            return;
        }
        if(storeData&&storeData.isRegister&&storeData.isBindBankcard) {
            this.props.push(`/deposit-buy/${index}/B/${id}`)
        }else{
            if(storeData.isRegister){
                push('/user/setting/cardBind')
            }else{
                this.refs.store.show()
            }
        }
    }
    loadEndDom=(depositbs)=>{
        return(<div className={styles.planb}>
            {this.bannerDom()}
            <List type={'B'} go={this.go} goBuy={this.goBuy} data={depositbs}/>
            <Alert ref="alert"/>
            <Store ref="store"></Store>
        </div>)
    }
    render(){
        const depositbs=JSON.parse(sessionStorage.getItem("bao-depositbs"));
        let Dom=this.loadDom();
        if (depositbs){
            Dom=this.loadEndDom(depositbs)
        }
        return Dom
    }
}
const mapStateToProps = (state) => {
    return {
        rate: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
        serverTime: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data['server_time'] || 0,
        userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
        pageIndex:state.global.getIn(['PRODUCT_INDEX_PAGE']),
        list:state.infodata.getIn(['DEPOSITBS_PLANB','data'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    push(path) {
        dispatch(push(path))
    },

    pop() {
        dispatch(goBack())
    },
    pageIndexs(){
        dispatch({
            type:'PRODUCT_INDEX_PAGE',
            index:1
        })
    },
    getList(){
           dispatch({
               type:'DEPOSITBS_PLANB'
           })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DepositIndex)
