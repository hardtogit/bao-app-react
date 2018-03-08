/**
 * Created by Administrator on 2016/10/17.
 */
import React from 'react';
import styles from './index.css';
import PropTypes from 'prop-types'
import coin from '../../assets/images/find/coin.png'
import private1 from '../../assets/images/find/private2.png'
import qiang from '../../assets/images/find/qiang.png'
import LoadImg from '../lazyLoad'
import {Link} from 'react-router'
export default class Index extends React.Component {
    constructor(props){
        super(props);
    }
    static propTypes = {
        label_name: PropTypes.string,//背景颜色
        product_name: PropTypes.string,//背景颜色
        product_id: PropTypes.number,//背景颜色
        id: PropTypes.number,//背景颜色
        alone_price: PropTypes.number,//背景颜色
        price: PropTypes.number,//背景颜色
        level: PropTypes.string,//背景颜色
        image: PropTypes.string,//背景颜色
        down_time: PropTypes.number,//背景颜色
        restTime: PropTypes.string,//背景颜色
        ref: PropTypes.string,//背景颜色
    };
    render() {
        const {
            label_name,
            product_name,
            product_id,
            alone_price,
            price,
            level,
            image,
            down_time,
            restTime,
            ref,
        } = this.props;
        return (
                <Link to={`/find/productDetail/${product_id}`} style={{width:"50%"}} >
                <li>
                    <span className={label_name!=""&&styles.label||styles.none}>{label_name}</span>
                    <p className={styles.shopTitle1}>{product_name}</p>
                    <p className={styles.shopTitle2}>
                        <span><img src={coin} /></span>
                        <span>{alone_price}</span>
                        <img src={private1} className={(level=="1"||level=="2"||level=="0")&&styles.none||styles.specialIcon}/>
                        <span className={(level=="1"||level=="2"||level=="0")&&styles.none||styles.originTxt}>{price}</span>
                    </p>
                    <div className={styles.imgBox}>
                        <img  className={styles.products_img} src={image}  />
                    </div>
                    <div className={down_time!=0&&styles.productBottomBox||styles.none}><span className={styles.productBottomTxt}>距结束{restTime}</span></div>
                    <img src={qiang} className={down_time!=0&&styles.qiang||styles.none}/>
                </li>
                 </Link>



        )
    }
}