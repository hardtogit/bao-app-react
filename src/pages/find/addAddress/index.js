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
import Util from '../../../utils/utils'
class Index extends React.Component{
    constructor(props){
        super(props);
        const{
            address,
            phone,
            consignee,
            is_default,
            id
        }=this.props.params;
        this.state = {
            index:0,
            num:0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit=(event)=> {
        const{
            addData
        }=this.props;
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
            this.props.addAddress(realname,mobile,address,"0" )
        }
    };

    showTips= (tip)=>{
        this.refs.tipbar.open(tip)
    };
    componentWillReceiveProps=({addData,pop})=>{
        if(addData){
            this.refs.success.show({
                text: '添加地址成功',
                callback: () => {this.props.pop();}
            });
        }
    };
    componentWillMount(){

    }
    componentDidMount() {
        this.props.clearData();
    }
    componentWillUnmount() {

    }
    render(){
        const{
            pop,
        }=this.props;

        return(
            <div>
                <div className={styles.bg}>
                    <NavBar title="新增地址" onLeft={pop} backgroundColor="#fff" color="#000"/>
                    <Tipbar ref='tipbar' className={styles.tips} />
                    <Success ref="success" />
                    <div className={styles.container}>
                        <form  ref="siteBox">
                            <ul>
                                <li>
                                    <span>收货人&emsp;</span>
                                    <input type="text"  name="realname" placeholder="请输入姓名"/>
                                </li>
                                <li>
                                    <span>收货电话</span>
                                    <input type="text"  name="mobile"  placeholder="请输入11位手机号码"/>
                                </li>
                                <li>
                                    <span className={styles.addTitle}>收货地址</span>
                                    <textarea rows="2" cols="20"  name="address"  className={styles.addtxt} placeholder="请详细填写收货地址">
                                        </textarea>
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
    addData:addModel(state.infodata.getIn(['ADD_ADDRESS','data'])),
});
const mapDispatchToProps=(dispatch)=>({
    addAddress(consignee,phone,address,is_default){
        dispatch({
            type:'ADD_ADDRESS',
            params:[
                consignee,
                phone,
                address,
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
            key:'ADD_ADDRESS'
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)