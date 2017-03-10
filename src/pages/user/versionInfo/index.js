import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import img1 from  "../../../assets/images/about1.png";
import img2 from  "../../../assets/images/about2.png";
import img3 from  "../../../assets/images/about3.png";
export default class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>版本介绍</NavBar>
                <p className={styles.title}>1.UI交互全新改版,升级用户体验</p>
                <img className={styles.img} src={img1} alt=""/>
                <p className={styles.title}>2.账户中心全新升级,资产明细一目了然</p>
                <img className={styles.img} src={img2} alt=""/>
                <p className={styles.title}>3.投资产品新增第三方购买，更快捷</p>
                <img className={styles.img} src={img3} alt=""/>
            </div>
        )
    }
}
