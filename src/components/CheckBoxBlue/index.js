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
        checkedCanClick:PropTypes.bool,//选择状态能不能点
        backgroundColor: PropTypes.string,//背景颜色
    };
    change=()=>{
        if(!this.props.checkCanClick && this.props.status){
            return false;
        }
        this.props.callBackFun(!this.props.status,this.props.id);
    };
    render() {
        const {
            backgroundColor,
        } = this.props;
        let backSty="input";
        return (
            <input className={backgroundColor&&style.inputRed||style.input} onChange={()=>{this.change()}} type="checkbox" checked={this.props.status}/>
        )
    }
}