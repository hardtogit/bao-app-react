/**
 * Created by wangdongfang on 17/4/19.
 */
/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react' //确认兑换
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import classNames from 'classnames'
import arrowRight from '../../../../assets/images/arrow2.png'
import styles from '../trueExchangeConfirm/index.css'
import Loading from '../../../../components/pageLoading/index'
import Alert from '../../../../components/Dialog/alert'
import loadGif from '../../../../components/LoadingButton/images/default.gif'
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag:false,
            init:false
        }
    }
    componentWillMount(){
        console.log(this.props)
        this.props.getAddress();
    }
    componentWillReceiveProps(next){
        const {
            submiteData,
            location:{
                search
            }
        }=next;
        if(submiteData){
            const {
                submiteData:{
                    code,
                },
                push
            }=next;
            if (code==300){
                push(`/user/exchangeFail${search}`)
            }else if (code==100){
                push(`/user/exchangeSuccess${search}`)
            }
        }
    }
    componentWillUnmount(){
        this.props.clearData();
    }
    loadDom=()=>{
        return (<Loading/>)
    }
    loadEndDom=()=>{
        const {
            address:{
                data
            },
            location:{
                query
            }
        }=this.props;
        const {
            flag
        }=this.state;
        let Dom=this.nullAddress();
            if (data.length!=0){
                Dom=this.hasAddress();
            }
        return(<div>
            {
                Dom
            }
            <div className={styles.commodityInfo}>
                <div className={classNames(styles.clearfix,styles.infoOne)}>
                    <span>商品详情</span>
                    <span>{query.name}</span>
                </div>
            </div>
            <button className={styles.button} onClick={this.submit} disabled={flag}>
                {!flag&&'确认兑换'||<span><img src={loadGif}/>兑换中</span>}
            </button>
            <Alert ref="alert"/>
        </div>)
    }
    submit=()=>{
        const {
            address:{
                data
            },
            location:{
                query:{
                    id
                }
            },
            push
        }=this.props;
            if (data.length==0){
                this.refs.alert.show({
                    content:'请添加收货地址!',
                    okText:'去添加',
                    cancel:'取消',
                    okCallback:()=>{push('/user/setting/siteAdd')}
                })
            }else {
                this.setState({
                    flag:true
                });
                this.props.send(id,data[0].id)
            }
        }
    hasAddress=()=>{
        const {
            address:{
                data
            },
            push
        }=this.props;
        return(<div className={styles.addressBar} onClick={()=>{push('/user/setting/siteList')}}>
            <div className={styles.addressNews}>
                <p>
                             <span>
                                 {
                                     data[0].consignee
                                 }
                             </span>
                    <span className={styles.mgLeft}>
                        {data[0].phone}
                             </span>
                </p>
                <p className={styles.mgTop}>
                    {
                        data[0].address
                    }
                </p>
            </div>
            <img src={arrowRight} className={styles.jtIcon}/>
        </div>)
    }
    nullAddress=()=>{
        const {
            push
        }=this.props;
        return(<div className={styles.addressBar} onClick={()=>{push('/user/setting/siteAdd')}}>
            <div className={styles.addressNews}>
                <p>
                    添加收货地址
                </p>
            </div>
            <img src={arrowRight} className={styles.jtIcon}/>
        </div>)
    }
    render(){
        const {
            pop,
            address
        }=this.props;
        let Dom=this.loadDom();
        if (address){
            Dom=this.loadEndDom();
        }
        return(
            <div>
                <NavBar onLeft={pop}>确认兑换</NavBar>
                <div className={styles.bg}>
                    {
                        Dom
                    }
                </div>
            </div>
        )

    }
}
const datas=(state)=>({
    address:state.infodata.getIn(['SITE_LIST','data']),
    submiteData:state.infodata.getIn(['ACTIVE_EXCHANGE','data'])
});
const dispatchFn=(dispatch)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getAddress(){
        dispatch({
            type:"SITE_LIST"
        })
    },
    send(productGroup,addressId){
        dispatch({
            type:'ACTIVE_EXCHANGE',
            params:[{activityId:3,productGroup,addressId}]
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'PRODUCT_EXCHANGE'
        })
    }
});
export default connect(datas,dispatchFn)(Index)