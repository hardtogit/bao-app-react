/**
 * Created by Administrator on 2016/10/27.
 */
import React from 'react';
import NavBar from '../../../components/NavBar/index';
import styles from './index.css';

import closeImg from '../../../assets/images/close.png';
export default class ChangePayPwd extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        newUserName: "18382346121",
        oldUserName: "18382346121"
      }
  }
  handleChange = (event) => {
    this.setState({
      newUserName: event.target.value
    })
  }
  clear = () => {
    this.setState({
      newUserName: ""
    })
  }
  submit = () => {
    if (this.state.newUserName == this.state.oldUserName)
      return false;
    else {
      console.info("发送请求");
    }
  }
  render() {
    return (
      <div className={styles.bg}>
        <NavBar>用户名</NavBar>
        <div className={styles.items_bg}>
          <div className={styles.changeUserName}>
            <input onChange={this.handleChange} type="text" value={this.state.newUserName} placeholder="请输入用户名!"/>
            <img onClick={this.clear} className={this.state.newUserName ? styles.show : styles.hide} src={closeImg} alt=""/>
          </div>
          <div className={styles.sureButton}>
            <button onClick={this.submit} disabled={!this.state.newUserName}>确认修改</button>
          </div>
        </div>
      </div>
    )
  }
}