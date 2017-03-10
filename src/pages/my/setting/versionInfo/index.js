import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import styles from './index.css'
import {push, goBack} from 'react-router-redux'
import {connect} from 'react-redux';
import Box from "../../../../components/ContentBox/index"
import img1 from  "../../../../assets/images/about1.png";
import img2 from  "../../../../assets/images/about2.png";
import img3 from  "../../../../assets/images/about3.png";
class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar onLeft={this.props.pop}>版本介绍</NavBar>
                <Box>
                    <p className={styles.title}>1.UI交互全新改版,升级用户体验</p>
                    <img className={styles.img} src={img1} alt=""/>
                    <p className={styles.title}>2.账户中心全新升级,资产明细一目了然</p>
                    <img className={styles.img} src={img2} alt=""/>
                    <p className={styles.title}>3.投资产品新增第三方购买，更快捷</p>
                    <img className={styles.img} src={img3} alt=""/>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    pop() {
        dispatch(goBack())
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)