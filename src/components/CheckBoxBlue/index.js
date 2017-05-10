/**
 * Created by Administrator on 2016/10/17.
 */
import React from 'react';
import style from './index.css';
import PropTypes from 'prop-types'
export default class Index extends React.Component {
    constructor(props){
        super(props);
    }
    static propTypes = {
        callBackFun:PropTypes.func,
        status:PropTypes.bool,
        id:PropTypes.number,
        checkedCanClick:PropTypes.bool//选择状态能不能点
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