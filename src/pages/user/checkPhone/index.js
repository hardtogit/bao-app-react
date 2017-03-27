import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css';
import SendMsg from '../../../components/sentMsg/index'
export default class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>验证原手机号</NavBar>
                <p className={styles.old_phone}>原手机号</p>
                <p className={styles.old_phone_num}>183****0009</p>
                <div className={styles.old_phone_input_bg}>
                    <span>验证码</span>
                    <input type="text" placeholder="请输入验证码"/>
                    <SendMsg auto={true} phone={18382300001} text="获取验证码"></SendMsg>
                </div>
                <div className={styles.btn_bg}>
                    <button className={styles.btn}>更换安全卡</button>
                </div>
            </div>
        )
    }
}
