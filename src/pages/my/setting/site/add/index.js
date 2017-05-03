import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import NavBar from '../../../../../components/NavBar/index';
import {push, goBack} from 'react-router-redux'
import {Link} from "react-router";
import style from './index.css'
import Tipbar from '../../../../../components/Tipbar/index'
import Success from '../../../../../components/Dialog/success'
import Util from '../../../../../utils/utils'
class Index extends React.Component {
	constructor(props) {
		super(props)
	}
    save=()=>{
        let mobile =  this.refs.siteBox.mobile.value;
        let realname =  this.refs.siteBox.realname.value;
        let address =  this.refs.siteBox.address.value;
        if(!Util.checkMobile(mobile)){
            this.showTips("请输入正确的手机号码!");
        }else if(!realname){
            this.showTips("请输入收货人!");
        }else if(!address){
            this.showTips("请输入详细地址！");
        }else{
            this.props.addAddress([
                mobile,
                realname,
                address
            ])
        }
    };
    showTips= (tip)=>{
        this.refs.tipbar.open(tip)
    };
    componentWillReceiveProps=({add,pop})=>{
        if(add){
            this.refs.success.show({
                text: '添加地址成功',
                callback: () => {this.props.pop();}
            });
        }
    };
    componentWillUnmount(){
        this.props.clearData();
    }
	render() {
		return (
			<div className={style.bg}>
				<NavBar onLeft={this.props.pop} onRight={this.save} rightNode={<span>保存</span>} title="新增地址"/>
                <Tipbar ref='tipbar' className={style.tips} />
                <Success ref="success" />
                <form ref="siteBox">
                    <div className={style.add_content}>
                        <div className={style.item}>
                            <span>收货人</span>
                            <input type="text" name="realname" placeholder="请输入收货人"/>
                        </div>
                        <div className={style.item}>
                            <span>联系电话</span>
                            <input type="text" name="mobile" placeholder="请输入联系电话" maxLength="11"/>
                        </div>
                        <div className={style.item_t}>
                            <span>收货地址</span>
                            <textarea name="address" type="text" cols="80" rows="5" placeholder="请确保收货地址无误"/>
                        </div>
                    </div>
                </form>
			</div>
		)
	}
}
const addModel = (data)=>{
    if(data&&100==data.code)
        return true;
    else{
        return false;
    }
};
const mapStateToProps = (state, ownProps) => {
	return {
		add:addModel(state.infodata.getIn(['SITE_ADD','data']))
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	addAddress(params){
		dispatch({
			type:"SITE_ADD",
            params:params//realname:2334332 mobile:18382346121 address:21312
		})
	},
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'SITE_ADD'
        })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
