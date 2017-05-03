/**
 * Created by Administrator on 2017/4/24.
 */
import React from 'react';
import styles from '../index/index.styl';
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import List from '../../../../components/depositList/index'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'
import Couponimg from '../../../../assets/images/coupon1.png'
import Coupon1 from '../../../../assets/images/registerVoucher.png'
class DepositIndex extends React.Component {
    componentDidMount(){
        const depositbs=JSON.parse(sessionStorage.getItem("bao-depositbs"));
        if (depositbs==null){
            this.props.getList();
        }
    }
    loadDom=()=>{
        return <Loading/>
    }
    bannerDom=()=>{
        const {push}=this.props;
        const user=sessionStorage.getItem("bao-auth");
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
            return <p className={styles.title}>
                您当前有<span>4张抵用券</span>和<span>1张加息券</span>未使用
            </p>
        }
    }
    loadEndDom=(depositbs)=>{
        const {push}=this.props;
        return(<div>
            {this.bannerDom()}
            <List type={'B'} go={(index,id)=>{push(`/deposit-product/${index}/B/${id}`)}} goBuy={(index,id)=>{push(`/deposit-buy/${index}/B/${id}`)}} data={depositbs}/>
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
