import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import Swiper from '../../../components/mySwiper/index';
import Product from '../../../components/Product'
import Loading from '../../../components/pageLoading'
import st1 from '../../../assets/images/find/st1.png'
import st2 from '../../../assets/images/find/st2.png'
import st3 from '../../../assets/images/find/st3.png'
import st4 from '../../../assets/images/find/st4.png'
import coin from '../../../assets/images/find/coin.png'
import noCry from '../../../assets/images/find/sp.png'
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
import utils from '../../../utils/utils'
class shoppingMall extends Component{
    componentWillMount(){
        this.props.getGoodsTypeList();
        this.props.mallBanner();
        let area0 = sessionStorage.getItem("area0")
        let area1 = sessionStorage.getItem("area1")
        let area2 = sessionStorage.getItem("area2")
        let area3 = sessionStorage.getItem("area3")
        this.props.getGoodsList(area0);
        this.props.getGoodsListNew(area1);
        this.props.getGoodsListNewOne(area2);
        this.props.getGoodsListNewTwo(area3);
        let userInfo = JSON.parse(sessionStorage.getItem("bao-auth"));
        if(userInfo){
            this.props.getVip();
        }

    }
    setArea=(i)=>{
        sessionStorage.setItem("barIndex",JSON.stringify(i+1))
    }
    loadingDom=()=>{
        return <Loading/>
    }
    noGoosDom=()=>{
        return(
            <div className={styles.noWraper}>
                <img src={noCry} className={styles.noCry}/>
                <p className={styles.noTxt}>暂无商品哦</p>
            </div>
        )
    }
    loadEndDom=()=>{
        const {
            goodsTypeListData,
            goodsListData,
            goodsListNewData,
            goodsListNewOneData,
            goodsListNewTwoData
        }=this.props;
        let area0 = sessionStorage.getItem("area0")
        let area1 = sessionStorage.getItem("area1")
        let area2 = sessionStorage.getItem("area2")
        let area3 = sessionStorage.getItem("area3")
        let level = sessionStorage.getItem("vipLevel")
        let productList=[];
        let productListNew=[];
        let productListNewOne=[];
        let productListNewTwo=[];
        goodsListData&&goodsListData.size>0&&goodsListData._tail.array.map((item,i)=>{
            let restTime = utils.millisecondToDate(item.down_time - item.server_time);
            if(i<4){
                productList.push(
                    <Product  key={i} load={false} level={level} alone_price={item.alone_price} down_time={item.down_time} image={item.image} label_name={item.label_name} price={item.price} product_id={item.product_id} product_name={item.product_name} restTime={restTime}>

                    </Product>
                )
            }
        })
        goodsListNewData&&goodsListNewData.map((item,i)=>{
            let restTime = utils.millisecondToDate(item.down_time - item.server_time);
            if(i<4){
                productListNew.push(
                    <Product  key={i} level={level} alone_price={item.alone_price} down_time={item.down_time} image={item.image} label_name={item.label_name} price={item.price} product_id={item.product_id} product_name={item.product_name} restTime={restTime}>

                    </Product>
                )
            }
        })
        goodsListNewOneData&&goodsListNewOneData.map((item,i)=>{
            let restTime = utils.millisecondToDate(item.down_time - item.server_time);
            if(i<4){
                productListNewOne.push(
                    <Product  key={i} level={level} alone_price={item.alone_price} down_time={item.down_time} image={item.image} label_name={item.label_name} price={item.price} product_id={item.product_id} product_name={item.product_name} restTime={restTime}>

                    </Product>
                )
            }
        })
        goodsListNewTwoData&&goodsListNewTwoData.map((item,i)=>{
            let restTime = utils.millisecondToDate(item.down_time - item.server_time);
            if(i<4){
                productListNewTwo.push(
                    <Product  key={i} level={level} alone_price={item.alone_price} down_time={item.down_time} image={item.image} label_name={item.label_name} price={item.price} product_id={item.product_id} product_name={item.product_name} restTime={restTime}>

                    </Product>
                )
            }
        })
        let dom1,dom2,dom3,dom4;
        if(productList.length == 0){
            dom1 = this.noGoosDom();
        }else{
            dom1=productList;
        }
        if(productListNew.length == 0){
            dom2 = this.noGoosDom();
        }else{
            dom2=productListNew;
        }
        if(productListNewOne.length == 0){
            dom3 = this.noGoosDom();
        }else{
            dom3=productListNewOne;
        }
        if(productListNewTwo.length == 0){
            dom4 = this.noGoosDom();
        }else{
            dom4=productListNewTwo;
        }

        return(
            <div>
                {goodsTypeListData&&goodsTypeListData.data[0].label_child.map((item,i)=>{
                        sessionStorage.setItem("area"+i,item.id);
                        return(
                            <div className={styles.findItem} key={i}>
                                <div className={styles.itemTitle}>
                                    <span className={styles.leftTxt}>{item.name}</span>
                                    <Link to='/find/shoppingMall/productList'>
                                        <span className={styles.rightTxt} onClick={()=>{this.setArea(i)}}>更多></span>
                                    </Link>
                                </div>
                                <ul className={styles.shop}>
                                    {
                                        item.id==area0&&dom1||(item.id==area1&&dom2||(item.id==area2&&dom3||(item.id==area3&&dom4)))
                                        // item.id==area0&&this.noGoosDom()
                                    }
                                </ul>
                            </div>
                        )
                })}
            </div>

        )
    }
    render(){
        const {
            pop,
            goodsTypeListData,
            goodsListData,
            bannerData,
            VipData
        }=this.props;
        let userInfo = JSON.parse(sessionStorage.getItem("bao-auth"));
        let coinTotal;
        if(userInfo&&VipData){
            coinTotal = VipData.data.coin_total;
        }
        let Dom;
        if(goodsTypeListData&&goodsListData ){
            Dom = this.loadEndDom()
        }else{
            Dom = this.loadingDom()
        }
        let bannerList=[];
        bannerData&&bannerData.data.map((item,i)=> {
            bannerList.push(
                <div className='banner-box' style={{textAlign: "center",overflow:"hidden",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} key={i}>
                    <img width="100%" src={item.image_wap} className='banner-img' />
                </div>
            )
        });

        let rightNodeLogin= <span><img src={coin} className={styles.rightNode}/><span className={styles.rightNodeTxt}>{coinTotal}</span> </span>
        let rightNodeNologin=<span className={styles.rightNodeTxt} onClick={()=>{this.props.push("/login?baoBackUrl=/find/shoppingMall")}}>去登录</span>
        let rightNodeDom;
        if(userInfo){
            rightNodeDom=rightNodeLogin;
        }
        return(
            <div className={styles.finderHome}>
                <div className={styles.finderHomeHeader}>
                    <NavBar title="商城" onLeft={pop} backgroundColor="#fff"
                            color="#41403e"
                            rightNode={rightNodeDom}
                    />
                </div>
                <div className={styles.findContent} >
                    { bannerData&&<Swiper loop={true} type="card" width={0.8} pagination={false} className={styles.swiperBg} autoPlay={false}>
                        {
                            bannerList
                        }
                    </Swiper>
                    }
                    <div className={styles.tabContainer}>
                        <ul className={styles.productTab}>
                            <li className={styles.indexCavli}>
                                <Link to='/find/shoppingMall/shopHistoryRecord' className={styles.Link}>
                                    <img src={st1}/>
                                    <p>记录</p>
                                </Link>
                            </li>
                            <li className={styles.indexCavli}>
                                <Link to='/find/address' className={styles.Link}>
                                    <img src={st2}/>
                                    <p>地址</p>
                                </Link>
                            </li>
                            <li className={styles.indexCavli}>
                                <Link to="/find/shoppingMall/shopMessage" className={styles.Link}>
                                    <img src={st3}/>
                                    <p>通知</p>
                                </Link>
                            </li>
                            <li className={styles.indexCavli}>
                                <Link to="/find/help" className={styles.Link}>
                                    <img src={st4}/>
                                    <p>帮助</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {
                        Dom
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    VipData: state.infodata.getIn(['GET_VIP', 'data']),
    goodsTypeListData: state.infodata.getIn(['GET_GOODS_TYPE_LIST', 'data']),
    goodsListData: state.listdata.getIn(['GET_GOODS_LIST', 'data']),
    goodsListNewData: state.listdata.getIn(['GET_GOODS_LIST_NEW', 'data']),
    goodsListNewOneData: state.listdata.getIn(['GET_GOODS_LIST_NEW_ONE', 'data']),
    goodsListNewTwoData: state.listdata.getIn(['GET_GOODS_LIST_NEW_TWO', 'data']),
    bannerData:state.infodata.getIn(['GET_MALL_BANNER','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
    getGoodsTypeList(){
        dispatch({
            type:'GET_GOODS_TYPE_LIST'
        })
    },
    getGoodsList(area){
        dispatch({
            type:'GET_GOODS_LIST',
            params:[
                {area_type_id:area}
            ]
        })
    },
    getGoodsListNew(area){
        dispatch({
            type:'GET_GOODS_LIST_NEW',
            params:[
                {area_type_id:area}
            ]
        })
    },
    getGoodsListNewOne(area){
        dispatch({
            type:'GET_GOODS_LIST_NEW_ONE',
            params:[
                {area_type_id:area}
            ]
        })
    },
    getGoodsListNewTwo(area){
        dispatch({
            type:'GET_GOODS_LIST_NEW_TWO',
            params:[
                {area_type_id:area}
            ]
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    mallBanner(){
        dispatch({
            type:'GET_MALL_BANNER'
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(shoppingMall)