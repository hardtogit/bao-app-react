import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import NavBar from '../../../../../components/NavBar/index';
import {push, goBack} from 'react-router-redux'
import {Link} from "react-router";
import style from './index.css'
import Tipbar from '../../../../../components/Tipbar/index'
import Success from '../../../../../components/Dialog/success'
import Confirm from '../../../../../components/Dialog/confirm';
import Alert from '../../../../../components/Dialog/alert'
import Util from '../../../../../utils/utils'
import wrap from '../../../../../utils/pageWrapper'
class Index extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            id:JSON.parse(sessionStorage.baoEditSite).id,
            mobile:JSON.parse(sessionStorage.baoEditSite).phone,
            address:JSON.parse(sessionStorage.baoEditSite).address,
            realname:JSON.parse(sessionStorage.baoEditSite).consignee
        }
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
                this.state.id,
                mobile,
                realname,
                address
            ])
        }
    };
    showTips= (tip)=>{
        this.refs.tipbar.open(tip)
    };
    componentWillReceiveProps=({add,del})=>{
        if(add){
            this.refs.success.show({
                text: '编辑地址成功',
                callback: () => {this.props.push('/user/setting/siteList');}
            });
        }
        if(del&&del.code==100){
            this.refs.success.show({
                text: '删除成功',
                callback: () => {this.props.push('/user/setting/siteList');}
            });
        }
        if(del&&del.code!=100){
            this.refs.alert.show({
                title: '',
                content: '删除地址失败',
                okText: '确定',
                okCallback: () => {}
            })
        }
    };
    del=()=>{
        this.refs.confirm.show({
            title: '',
            content: '确认删除该地址？',
            okText: '删除',
            cancelText:"取消",
            okCallback: () => {
                this.props.delSite(this.state.id)
            }
        });
    };
	render() {
		return (
			<div className={style.bg}>
				<NavBar onLeft={this.props.pop} onRight={this.save} rightNode={<span>保存</span>} title="编辑地址"/>
                <Tipbar ref='tipbar' className={style.tips} />
                <Confirm ref="confirm"/>
                <Success ref="success" />
                <Alert ref="alert"/>
                <form ref="siteBox">
                    <div className={style.add_content}>
                        <div className={style.item}>
                            <span>收货人</span>
                            <input type="text" name="realname" placeholder="请输入收货人" defaultValue={this.state.realname} />
                        </div>
                        <div className={style.item}>
                            <span>联系电话</span>
                            <input type="text" name="mobile" placeholder="请输入联系电话" maxLength="11"  defaultValue={this.state.mobile}/>
                        </div>
                        <div className={style.item_t}>
                            <span>收货地址</span>
                            <textarea name="address" type="text" cols="80" rows="5" placeholder="请确保收货地址无误"  defaultValue={this.state.address}/>
                        </div>
                    </div>
                </form>
                <div className={style.del} onClick={()=>{this.del()}}>删除</div>
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
		add:addModel(state.infodata.getIn(['SITE_EDIT','data'])),
        del:state.infodata.getIn(['SITE_SET_DEL','data'])
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	addAddress(params){
		dispatch({
			type:"SITE_EDIT",
            params:params//realname:2334332 mobile:18382346121 address:21312
		})
	},
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    delSite(id){
        dispatch({
            type:"SITE_SET_DEL",
            params:[id],
            id:id
        })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))
