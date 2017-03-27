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
            oldPwd:{
                value:"",
                show:false
            },
            newPwd:{
                value:"",
                show:false
            }
        }
    }
    handleChange=(event)=>{
        if("old" === event.target.name){
            this.setState({
                oldPwd:{
                    value:event.target.value,
                    show:this.state.oldPwd.show
                }
            })
        }else{
            this.setState({
                newPwd:{
                    value:event.target.value,
                    show:this.state.newPwd.show
                }
            })
        }
    }
    changeShow=(target)=>{
        if(1===target){
            this.setState({
                oldPwd:{
                    value:this.state.oldPwd.value,
                    show:!this.state.oldPwd.show
                }
            })
        }else{
            this.setState({
                newPwd:{
                    value:this.state.newPwd.value,
                    show:!this.state.newPwd.show
                }
            })
        }
    }
    render(){
        return(
            <div className={styles.bg}>
                <NavBar>设置</NavBar>
                <div className={styles.items_bg}>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <span>原密码</span>
                            <input name="old" onChange={this.handleChange} className={!this.state.oldPwd.show?styles.show:styles.hide} value={this.state.oldPwd.value} type="password" placeholder="请输入原交易密码"/>
                            <input name="old" onChange={this.handleChange} className={this.state.oldPwd.show?styles.show:styles.hide} value={this.state.oldPwd.value} type="text" placeholder="请输入原交易密码"/>
                            <img onClick={()=>{this.changeShow(1)}} src={this.state.oldPwd.show?eye_open:eye_close} alt=""/>
                        </li>
                        <li className={styles.item}>
                            <span>新密码</span>
                            <input name="new" onChange={this.handleChange} className={!this.state.newPwd.show?styles.show:styles.hide} value={this.state.newPwd.value} type="password" placeholder="请输入新交易密码"/>
                            <input name="new" onChange={this.handleChange} className={this.state.newPwd.show?styles.show:styles.hide} value={this.state.newPwd.value} type="text" placeholder="请输入新交易密码"/>
                            <img onClick={()=>{this.changeShow(2)}} src={this.state.newPwd.show?eye_open:eye_close} alt=""/>
                        </li>
                    </ul>
                    <div className={styles.sureButton}>
                        <button disabled={!this.state.oldPwd.value || !this.state.newPwd.value}>确认修改</button>
                    </div>
                </div>
            </div>
        )
    }
}