import React,{Component} from 'react'
import ReactDOM from "react-dom"
import {Link} from 'react-router'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import Swiper from '../../../components/mySwiper/index';
import b1 from '../../../assets/images/find/b1.png';
import st1 from '../../../assets/images/find/st1.png'
import st2 from '../../../assets/images/find/st2.png'
import st3 from '../../../assets/images/find/st3.png'
import st4 from '../../../assets/images/find/st4.png'
import coin from '../../../assets/images/find/coin.png'
import private1 from '../../../assets/images/find/private2.png'
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
import utils from '../../../utils/utils'
class shoppingMall extends Component{
    componentWillMount(){
        this.props.getGoodsTypeList();
        this.props.getGoodsList();
    }
    render(){
        const {
            pop,
            goodsTypeListData,
            goodsListData,
        }=this.props;
        let productList=[];

        goodsListData&&goodsListData.map((item,i)=>{
            if(i<4){
                productList.push(
                    <li key={i}>
                        <p className={styles.shopTitle1}>{item.product_name}</p>
                        <p className={styles.shopTitle2}>
                            <span>{item.price}</span>
                            <span><img src={coin} /></span>
                            <img src={private1} className={styles.specialIcon}/>
                        </p>
                        <div className={styles.imgBox}>
                            <img src={utils.rootImgUrl + item.image } className={styles.shopImg}/>
                        </div>
                    </li>
                )
            }
        })
        return(
            <div className={styles.finderHome}>
                <div className={styles.finderHomeHeader}>
                    <NavBar title="商城" onLeft={pop} backgroundColor="#fff"
                            color="#41403e"
                    />
                </div>
                <div className={styles.findContent} >
                    <Swiper className={styles.swiperBg} autoPlay={false}>
                        <div className='banner-box' style={{textAlign:"center"}}>
                            <img src={b1} className='banner-img'  />
                        </div>
                        <div  className='banner-box' style={{textAlign:"center"}}>
                            <img src={b1} className='banner-img' />
                        </div>
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
                                <Link to='/find/shoppingMall' className={styles.Link}>
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
                        {goodsTypeListData&&goodsTypeListData.data[0].label_child.map((item,i)=>{
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
                                            productList
                                        }
                                    </ul>
                                </div>
                            )
                        })}

                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    goodsTypeListData: state.infodata.getIn(['GET_GOODS_TYPE_LIST', 'data']),
    goodsListData: state.listdata.getIn(['GET_GOODS_LIST', 'data']),
});
const mapDispatchToProps=(dispatch,own)=>({
    getGoodsTypeList(){
        dispatch({
            type:'GET_GOODS_TYPE_LIST'
        })
    },
    getGoodsList(id){
        dispatch({
            type:'GET_GOODS_LIST',
            params:[
                10,
                id
            ]
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(shoppingMall)