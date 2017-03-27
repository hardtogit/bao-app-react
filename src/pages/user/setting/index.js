import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import Item from "../../../components/List/index";
let item = [
    {
        name:"安全卡",
        info:"",
        arrow:true,
        href:""
    },
    {
        name:"安全中心",
        info:"低",
        arrow:true,
        href:""
    },
    {
        name:"常见问题",
        info:"",
        arrow:true,
        href:""
    },
    {
        name:"意见反馈",
        info:"",
        arrow:true,
        href:""
    },
    {
        name:"关于理财宝点",
        info:"v4.2.1",
        arrow:true,
        href:""
    }
];
let item_user = [
    {
        name:"用户名",
        info:"ranyunbao",
        arrow:true,
        href:""
    }
];
export default class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>设置</NavBar>
                <div className={styles.top}>
                    <div className={styles.user_img}>
                        <span>头像</span>
                        <img src="" alt=""/>
                    </div>
                    <Item item={item_user}/>
                </div>
                <div className={styles.mid}>
                    <Item item={item}/>
                </div>
                <div className={styles.login_out}>
                    安全退出
                </div>
            </div>
        )
    }
}
