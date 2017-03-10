import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import Item from "../../../components/List/index";
let item = [
    {
        name:"身份认证",
        info:"5002391991******7200",
        arrow:true,
        href:""
    },
    {
        name:"修改绑定手机",
        info:"130****56",
        arrow:true,
        href:""
    }
];
let item2 = [
    {
        name:"设置登录密码",
        info:"",
        arrow:true,
        href:""
    },
    {
        name:"设置交易密码",
        info:"130****56",
        arrow:true,
        href:""
    }
];
export default class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>安全中心</NavBar>
                <div className={styles.mid}>
                    <Item item={item}/>
                </div>
                <div className={styles.mid}>
                    <Item item={item2}/>
                </div>
            </div>
        )
    }
}
