import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import Item from "../../../components/List/index";
import Logo from  "../../../assets/images/logo.png";
let item= [{
    name:"版本介绍",
    info:"",
    arrow:true,
    href:""
}];
export default class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>关于</NavBar>
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
