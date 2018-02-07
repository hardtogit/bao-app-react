import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import Swiper from '../../../components/mySwiper/index';
import Loading from '../../../components/pageLoading'
import b1 from '../../../assets/images/find/b1.png';
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
        this.props.getGoodsList();
        this.props.getGoodsListNew();
        this.props.mallBanner();
    }
    loadingDom=()=>{
        return <Loading/>
    }
    loadEndDom=()=>{
        const {
            goodsTypeListData,
            goodsListData,
            goodsListNewData
        }=this.props;
        let productList=[];
        let productListNew=[];
        goodsListData&&goodsListData.map((item,i)=>{
            if(i<4){
                productList.push(
                    <Link to={`/find/productDetail/${item.product_id}`} style={{width:"50%"}}  key={i}>
                        <li>
                            <p className={styles.shopTitle1}>{item.product_name}</p>
                            <p className={styles.shopTitle2}>
                                <span>{item.price}</span>
                                <span><img src={coin} /></span>
                                <img src={private1} className={styles.specialIcon}/>
                            </p>
                            <div className={styles.imgBox}>
                                <img src={item.image } className={styles.shopImg}/>
                            </div>
                        </li>
                    </Link>

                )
            }
        })
        goodsListNewData&&goodsListNewData.map((item,i)=>{
            if(i<4){
                productListNew.push(
                    <Link to={`/find/productDetail/${item.product_id}`} style={{width:"50%"}}  key={i}>
                        <li>
                            <p className={styles.shopTitle1}>{item.product_name}</p>
                            <p className={styles.shopTitle2}>
                                <span>{item.price}</span>
                                <span><img src={coin} /></span>
                                <img src={private1} className={styles.specialIcon}/>
                            </p>
                            <div className={styles.imgBox}>
                                <img src={item.image } className={styles.shopImg}/>
                            </div>
                        </li>
                    </Link>
                )
            }
        })
        return(
            <div>
                {goodsTypeListData&&goodsTypeListData.data[0].label_child.map((item,i)=>{
                    if(i<2){
                        return(
                            <div className={styles.findItem} key={i}>
                                <div className={styles.itemTitle}>
                                    <span className={styles.leftTxt}>{item.name}</span>
                                    <Link to='/find/shoppingMall/productList'>
                                        <span className={styles.rightTxt}>更多></span>
                                    </Link>
                                </div>
                                <ul className={styles.shop}>
                                    {
                                        item.id=='26'&&productList||productListNew
                                    }
                                </ul>
                            </div>
                        )
                    }
                })}
            </div>

        )
    }
    render(){
        const {
            pop,
            goodsTypeListData,
            goodsListData,
            bannerData
        }=this.props;
        let Dom;
        if(goodsTypeListData&&goodsListData ){
            Dom = this.loadEndDom()
        }else{
            Dom = this.loadingDom()
        }
        let bannerList=[];
        bannerData&&bannerData.data.map((item,i)=>(
            bannerList.push(
                <div className='banner-box' style={{textAlign:"center"}} key={i}>
                    <img src={item.image_wap} className='banner-img'  />
                </div>
            )
        ));
        return(
            <div className={styles.finderHome}>
                <div className={styles.finderHomeHeader}>
                    <NavBar title="商城" onLeft={pop} backgroundColor="#fff"
                            color="#41403e"
                    />
                </div>
                <div className={styles.findContent} >
                    <Swiper className={styles.swiperBg} autoPlay={false}>
                        {
                            bannerList
                        }
                    </Swiper>
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
    goodsTypeListData: state.infodata.getIn(['GET_GOODS_TYPE_LIST', 'data']),
    goodsListData: state.listdata.getIn(['GET_GOODS_LIST', 'data']),
    goodsListNewData: state.listdata.getIn(['GET_GOODS_LIST_NEW', 'data']),
    bannerData:state.infodata.getIn(['GET_MALL_BANNER','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    getGoodsTypeList(){
        dispatch({
            type:'GET_GOODS_TYPE_LIST'
        })
    },
    getGoodsList(){
        dispatch({
            type:'GET_GOODS_LIST',
            params:[
                {area_type_id:26}
            ]
        })
    },
    getGoodsListNew(){
        dispatch({
            type:'GET_GOODS_LIST_NEW',
            params:[
                {area_type_id:27}
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