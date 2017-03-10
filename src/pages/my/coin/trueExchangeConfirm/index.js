/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react' //确认兑换
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import classNames from 'classnames'
import arrowRight from '../../../../assets/images/arrow2.png'
import styles from './index.css'
import Loading from '../../../../components/pageLoading/index'
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
        const {address}=this.props;
        const inspect = this.dataInspect();
        if (!inspect){
            const {
                id
            }=this.props.params;
            this.props.getInfo(id);
        }
        if (!address){
            this.props.getAddress();
        }
    }
    componentWillReceiveProps(next){
        const {
            submiteData
        }=next;
        if(submiteData){
       const {
               submiteData:{
                   code,
                   data
               },
           push
           }=next;
            if (code==300){
                push('/user/exchangeFail')
            }else if (code==100){
                sessionStorage.setItem("bao-coin",JSON.stringify(data.coin));
                push('/user/exchangeSuccess')
            }
        }
    }
    dataInspect=()=>{
        const infoDate=sessionStorage.getItem("bao-product");
        const {
            id
        }=this.props.params;
        if (infoDate){
            if (JSON.parse(infoDate).id==id){
                return true;
            }
        }
        return false;
    }
    setData=()=>{
        const {
            data
        }=this.props.infoData
        sessionStorage.setItem("bao-product",JSON.stringify(data));
    }
    loadDom=()=>{
      return (<Loading/>)
    }
    loadEndDom=()=>{
        const {
            address:{
                data
            },
            infoData
        }=this.props;
        const {
            flag
        }=this.state;
        const productData=infoData&&infoData.data||JSON.parse(sessionStorage.getItem("bao-product"));
        let Dom;
        if (productData.tagId!=22){
            this.nullAddress();
            if (data.length!=0){
                Dom=this.hasAddress();
            }
        }
        return(<div>
            {
                Dom
            }
            <div className={styles.commodityInfo}>
                <div className={classNames(styles.clearfix,styles.infoOne)}>
                    <span>商品详情</span>
                    <span>{productData.name}</span>
                </div>
                <div className={classNames(styles.clearfix,styles.infoOne)}>
                    <span>金豆(个)</span>
                    <span className={styles.fontColor}>{productData.price}</span>
                </div>
            </div>
            <button className={styles.button} onClick={this.submit} disabled={flag}>
                {!flag&&'确认兑换'||<span><img src={loadGif}/>兑换中</span>}
            </button>
        </div>)
    }
    submit=()=>{
        const {
            address:{
                data
            },
            infoData
        }=this.props;
        const productData=infoData&&infoData.data||JSON.parse(sessionStorage.getItem("bao-product"));
        this.setState({
            flag:true
        });
        this.props.send(productData.id,data[0].id)
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
        const inspect = this.dataInspect();
        const {
            pop,
            infoData,
            address
        }=this.props;
        let Dom=this.loadDom();
        if (infoData){
            this.setData();
        }
        if (address&&(inspect||infoData)){
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
    infoData:state.infodata.getIn(['COMMODITY_DETAILS','data']),
    submiteData:state.infodata.getIn(['PRODUCT_EXCHANGE','data'])
});
const dispatchFn=(dispatch)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getInfo(id){
        dispatch({
            type:'COMMODITY_DETAILS',
            params:[id]
        })
    },
    getAddress(){
        dispatch({
            type:"SITE_LIST"
        })
    },
    send(productId,addressId){
        dispatch({
            type:'PRODUCT_EXCHANGE',
            params:[productId,addressId]
        })
    }
});
export default connect(datas,dispatchFn)(Index)