import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import Swiper from '../../../components/mySwiper/index';
import Loading from '../../../components/pageLoading'
import LoadImg from '../../../components/lazyLoad'
import st1 from '../../../assets/images/find/st1.png'
import st2 from '../../../assets/images/find/st2.png'
import st3 from '../../../assets/images/find/st3.png'
import st4 from '../../../assets/images/find/st4.png'
import coin from '../../../assets/images/find/coin.png'
import private1 from '../../../assets/images/find/private2.png'
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
class shoppingMall extends Component{
    componentWillMount(){
        this.props.getGoodsTypeList();
        this.props.mallBanner();
        this.props.getVip();
        let area0 = sessionStorage.getItem("area0")
        let area1 = sessionStorage.getItem("area1")
        // this.props.getGoodsList("GET_GOODS_LIST"+area0,area0);
        // this.props.getGoodsListNew(area1);
    }
    setArea=(i)=>{
        sessionStorage.setItem("barIndex",JSON.stringify(i+1))
    };
    componentWillReceiveProps=(nextProps)=>{
        // const {i,area}=nextProps;
        // this.props.getGoodsList("GET_GOODS_LIST"+i,area);
        // let areaArr = sessionStorage.getItem("area").split(",");
        // console.log(areaArr)
        // areaArr.map((item,i)=>(
        //     this.props.getGoodsList('GET_GOODS_LIST'+0,areaArr[0]),
        //     this.props.getGoodsList('GET_GOODS_LIST'+1,areaArr[1])
        // ))
    };
    productListDom=(id,index)=>{
        const {
            goodsListData
        }=this.props;
        const nlistData=goodsListData('GET_GOODS_LIST'+index);
        this.props.getGoodsList('GET_GOODS_LIST'+index,id);
        let productList=[];
        nlistData&&nlistData.size>0&&nlistData._tail.array.map((item,i)=>{
            if(i<4){
                productList.push(
                    <Link to={`/find/productDetail/${item.product_id}`} style={{width:"50%",height:"224px"}}  key={i}>
                        <li>
                            <p className={styles.shopTitle1}>{item.product_name}</p>
                            <p className={styles.shopTitle2}>
                                <span>{item.alone_price}</span>
                                <span><img src={coin} /></span>
                                <img src={private1} className={styles.specialIcon}/>
                            </p>
                            <div className={styles.imgBox}>
                                <img src={item.image} className={styles.shopImg}/>
                            </div>
                        </li>
                    </Link>
                )
            }
        })
        return(
            <div>
                {
                    productList
                }
            </div>
        )
    };
    loadingDom=()=>{
        return <Loading/>
    }
    loadEndDom=()=>{
        const {
            goodsTypeListData,
            goodsListData,
            goodsListNewData
        }=this.props;
        let arr=[];
        return(
            <div>
                {goodsTypeListData&&goodsTypeListData.data[0].label_child.map((item,i)=>{
                    let arrArea = arr.push(item.id);
                    // console.log(arr)
                    let id = item.id;
                    // console.log(item.id)
                    return(
                        <div className={styles.findItem} key={i}>
                            <div className={styles.itemTitle}>
                                <span className={styles.leftTxt}>{item.name}</span>
                                <Link to='/find/shoppingMall/productList'>
                                    <span className={styles.rightTxt} onClick={()=>{this.setArea(i)}}>{i}+更多></span>
                                </Link>
                            </div>
                            <ul className={styles.shop}>
                                {
                                    arr.map((item,index)=>{
                                        console.log(i==index)
                                        if(i==0){
                                            this.productListDom(id,index)
                                        }
                                    })
                                    // this.productListDom(id,i)
                                    // item.id==area0&&productList||(item.id==area1&&productListNew)

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
    // goodsListData: state.listdata.getIn(['GET_GOODS_LIST', 'data']),
    goodsListData(key){
        return state.listdata.getIn([key,'data'])
    },
    goodsListNewData: state.listdata.getIn(['GET_GOODS_LIST_NEW', 'data']),
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
    getGoodsList(key,area){
        dispatch({
            type:'GET_GOODS_LIST',
            OtherKey:key,
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