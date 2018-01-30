/**
 * Created by xiangguo .
 * time:2017/7/13 0013.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/index';
import {connect} from 'react-redux';
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
import Tipbar from '../../../components/Tipbar/index'
import Success from '../../../components/Dialog/success'
import Confirm from '../../../components/Dialog/confirm';
import Alert from '../../../components/Dialog/alert'
import Util from '../../../utils/utils'
class Index extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id:JSON.parse(sessionStorage.baoEditSite).id,
            mobile:JSON.parse(sessionStorage.baoEditSite).phone,
            address:JSON.parse(sessionStorage.baoEditSite).address,
            realname:JSON.parse(sessionStorage.baoEditSite).consignee,
            is_default:JSON.parse(sessionStorage.baoEditSite).is_default,
            index:0,
            windowPop:0,
            num:0
        };
    }

    handleSubmit=(event)=> {
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
            this.props.editAddress(realname,mobile,address,this.state.id,this.state.is_default);
        }
    };
    showTips= (tip)=>{
        this.refs.tipbar.open(tip)
    };
    componentWillReceiveProps=({editData,pop})=>{
        if(editData){
            this.refs.success.show({
                text: '编辑地址成功',
                callback: () => {this.props.pop();}
            });
        }
        if(del&&del.code==100){
            this.refs.success.show({
                text: '删除成功',
                callback: () => {this.props.pop();}
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
    componentWillUnmount(){
        this.props.clearData();
    }
    componentDidMount() {

    }
    render(){
        const{
            pop,
        }=this.props;

        return(
            <div>
                <div className={styles.bg}>
                    <NavBar title="编辑地址" onLeft={pop} backgroundColor="#fff" color="#000"/>
                    <Tipbar ref='tipbar' className={styles.tips} />
                    <Confirm ref="confirm"/>
                    <Success ref="success" />
                    <Alert ref="alert"/>
                    <div className={styles.container}>
                        <form ref="siteBox">
                            <ul>
                                <li>
                                    <span>收货人&emsp;</span>
                                    <input type="text" name="realname" placeholder="请输入收货人" defaultValue={this.state.realname} />
                                </li>
                                <li>
                                    <span>收货电话</span>
                                    <input type="text" name="mobile" placeholder="请输入联系电话" maxLength="11"  defaultValue={this.state.mobile}/>
                                </li>
                                <li>
                                    <span className={styles.addTitle}>收货地址</span>
                                    <textarea name="address" className={styles.addtxt} type="text" cols="80" rows="5" placeholder="请确保收货地址无误"  defaultValue={this.state.address}/>
                                    <div style={{clear:"both"}}></div>
                                </li>
                            </ul>
                        </form>

                        <div style={{textAlign:"center"}}>
                            <div className={styles.subBtn}  onClick={this.handleSubmit} >
                                保存
                            </div>
                        </div>
                    </div>
                </div>
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
const mapStateToProps=(state)=>({
    editData:addModel(state.infodata.getIn(['EDIT_ADDRESS','data'])),
});
const mapDispatchToProps=(dispatch)=>({
    editAddress(consignee,phone,address,address_id,is_default){
        dispatch({
            type:'EDIT_ADDRESS',
            params:[
                consignee,
                phone,
                address,
                address_id,
                is_default
            ]
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'EDIT_ADDRESS'
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)