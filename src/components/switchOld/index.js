/**
 * Created by xiangguo .
 * time:2017/11/9 0009.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react';
import style from './index.css';
import classNames from 'classnames';
import PropTypes from 'prop-types'
export default class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open:this.props.status||false
        }
    }
    static defaultProps = {
        id:0,
        status:false,
        checkedCanClick:true
    };
    static propTypes = {
        callBackFun:PropTypes.func,
        status:PropTypes.bool,
        id:PropTypes.number,
        checkedCanClick:PropTypes.bool//选中了是否还能切换
    };
    change=()=>{
        if(!this.props.checkedCanClick && this.state.open){
            return false;
        }
        this.setState({
            open:!this.state.open
        });
        if(this.props.callBackFun){
            this.props.callBackFun(!this.state.open,this.props.id);
        }
    };
    render() {
        return (
            <div className={classNames(this.props.className,style.bg,this.state.open?style.open:'')} onClick={()=>{this.change()}}>
                <div className={style.button}></div>
            </div>
        )
    }
}