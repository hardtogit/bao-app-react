/**
 * Created by Administrator on 2016/10/27.
 */
import React from 'react';
import NavBar from '../../../components/NavBar/index';
import styles from './index.css';
import eye_open from '../../../assets/images/eye_open.png';
import eye_close from '../../../assets/images/eye_close.png'
export default class ChangePayPwd extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            payPwd:{
                value:"",
                show:false
            }
        }
    }
    handleChange=(event)=>{
        this.setState({
            payPwd:{
                value:event.target.value,
                show:this.state.payPwd.show
            }
        })
    }
    changeShow=(target)=>{
        this.setState({
            payPwd:{
                value:this.state.payPwd.value,
                show:!this.state.payPwd.show
            }
        })
    }
    render(){
        return(
            <div className={styles.bg}>
                <NavBar>设置交易密码</NavBar>
                <div className={styles.items_bg}>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <span>原密码</span>
                            <input name="old" onChange={this.handleChange} className={!this.state.payPwd.show?styles.show:styles.hide} value={this.state.payPwd.value} type="password" placeholder="请输入原交易密码"/>
                            <input name="old" onChange={this.handleChange} className={this.state.payPwd.show?styles.show:styles.hide} value={this.state.payPwd.value} type="text" placeholder="请输入原交易密码"/>
                            <img onClick={()=>{this.changeShow()}} src={this.state.payPwd.show?eye_open:eye_close} alt=""/>
                        </li>
                    </ul>
                    <div className={styles.sureButton}>
                        <button disabled={!this.state.payPwd.value}>确认设置</button>
                    </div>
                </div>
            </div>
        )
    }
}