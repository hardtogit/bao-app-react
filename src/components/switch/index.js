/**
 * Created by Administrator on 2016/10/17.
 */
import React from 'react';
import style from './index.css';
import classNames from 'classnames';
import Reddem from '../Dialog/reddem';
import LoadingDialog from '../Dialog/loading'
import {goBack,push} from 'react-router-redux'
import Store from '../Dialog/store'
import PropTypes from 'prop-types'
import {getAuthDetail}  from "../../components/Permission"

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
    componentWillReceiveProps(nextProps){
        this.setState({
             open:nextProps.status
            })
    }
    checkAccredit=()=>{
        let $this=this;
        this.refs.red.show({
            title:'免密授权',
            okCallback:function(a,b){
                let data;
                data={
                    freeTransCode:42703,
                    freeFlag:0,
                    passwordFactor:sessionStorage.getItem('passwordFactor'),
                    mapKey:sessionStorage.getItem('mapKey'),
                    device:'WAP',
                    password:b
                }
                $this.refs.loading.show('免密授权中...')
                $this.props.authFn(data);
                a()
            }
        });
    }
    change=()=>{
        const storeData=JSON.parse(sessionStorage.getItem('bao-store'));
        switch (getAuthDetail()){
            case 1:
                break;
            case 2:
                push('/user/setting/authorization');
                return false;
                break;
            case 3:
                this.refs.store.show();
                return false;
                break;
            default:
                break
        }
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
            <div style={{float:'right'}}>
                <Store ref="store"></Store>
            <div className={classNames(this.props.className,style.bg,this.state.open?style.open:'')} onClick={()=>{this.change()}}>
                <div className={style.button}></div>
            </div>
                <Reddem   hasMoney={false}  ref="red"></Reddem>
                <LoadingDialog ref="loading"> </LoadingDialog>
            </div>
        )
    }
}