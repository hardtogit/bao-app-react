import React from 'react'
import {goBack} from 'react-router-redux'
import {connect} from 'react-redux';
import NavBar from '../../../../components/NavBar/index'
import styles from './index.css'
import Item from "../../../../components/List/index";
import Logo from "../../../../assets/images/logo.png";
let item = [{
    name: "版本介绍",
    info: "",
    arrow: true,
    href: "/user/setting/versionInfo"
}];
class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar onLeft={this.props.pop}>关于</NavBar>
                <img className={styles.logo} src={Logo} alt=""/>
                <h2 className={styles.about_h2}>当前版本</h2>
                <p className={styles.about_p}>V4.2.1</p>
                <div className={styles.mid}>
                    <Item item={item}/>
                </div>
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