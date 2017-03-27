/**
 * Created by Administrator on 2016/10/17.
 */
import React from 'react';
import style from './index.css';
export default class Index extends React.Component {
    constructor(props){
        super(props);
    }
    static propTypes = {
        callBackFun:React.PropTypes.func,
        status:React.PropTypes.bool,
        id:React.PropTypes.number,
        checkedCanClick:React.PropTypes.bool//选择状态能不能点
    };
    change=()=>{
        if(!this.props.checkCanClick && this.props.status){
            return false;
        }
        this.props.callBackFun(!this.props.status,this.props.id);
    };
    render() {
        return (
            <input className={style.input} onChange={()=>{this.change()}} type="checkbox" checked={this.props.status}/>
        )
    }
}