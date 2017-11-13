import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import {push, goBack} from 'react-router-redux'
import Tipbar from '../../../../../components/Tipbar/index'
import NavBar from '../../../../../components/NavBar/index';
import Box from '../../../../../components/ContentBox/index';
import Switch from '../../../../../components/switchOld'
import Store from '../../../../../components/Dialog/store'
import Alert from '../../../../../components/Dialog/alert';
import Confirm from '../../../../../components/Dialog/confirm';
import Success from '../../../../../components/Dialog/success'
import Loading from '../../../../../components/pageLoading/index'
import LoadingDialog from '../../../../../components/Dialog/loading'
import SelectBox from '../../../../../components/SelectBox/index'
import SelectBoxOld from '../../../../../components/SelectBox/SelectBoxOld'
import DurationSelect from '../../../../../components/durationSelectBox/index'
import Arrow from '../../../../../assets/images/arrow2.png'
import Util from '../../../../../utils/utils';
import {Link} from "react-router";
import style from './index.less'
import classnames from 'classnames';
let touchLoop;
let newInfo = false;
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:false,
            open:false,
            resetMoney:JSON.parse(sessionStorage.getItem("bao-user")).balance_platform||0,
            bidType:"",//标类型
            repaymentType:"",//还款方式
            rate:"",//年化收益率
            maxRate:"",//最高收益率
            minRate:"",//最低收益率
            count:1,//投标次数
            balance:1,//单次投标份数
            start:1,//开始期限
            end:24,//结束期限
            time:0,
            buttonClickStatus:true//确认开启是否能点击
        }
    }
    componentDidMount() {
        this.props.getInfo();
    }
    componentWillUnmount(){
        this.props.clear()
    }
    componentWillReceiveProps=({info,setInfo})=>{
        if(info && !newInfo){
            if(this.state.open !=info.open
                || this.state.bidType!=info.type
                || this.state.repaymentType!=info.repayment_type
                || this.state.rate!=info.rate
                || this.state.maxRate !=  info.maxRate
                || this.state.minRate !=  info.minRate
                || this.state.count !=  info.count
                || this.state.balance !=  info.balance
                || this.state.start !=  info.start
                || this.state.end !=  info.end

            ){
                this.setState({
                    open:info.open,
                    bidType:info.type||0,//默认不限
                    repaymentType:info.repayment_type||1,//默认不限
                    rate:(Number(info.rate)||10.5)+'%起',
                    maxRate:15,
                    minRate:0,
                    rateInputStatus:false,//年化利率是否正在输入
                    count:info.count||1,//投标次数
                    balance:info.balance||1,//单次投标份数
                    start:info.start||1,
                    end:info.end||12
                })
            }
        }
        if(setInfo && newInfo){
            newInfo = false;
            if(this.state.count*this.state.balance*50>this.state.resetMoney){//余额不满足自动投标
                this.refs.confirm.show({
                    title: '自动投标设置成功',
                    content: '您的余额不能覆盖自动投标总额,自动投标有可能失败,请充值。',
                    okText: '确定',
                    okCallback: () => {this.props.push('/user/recharge')},
                    cancelText: '取消',
                    cancelCallback:()=>{}
                })
            }else if (setInfo){
                if (setInfo.code==100){
                    this.showSuccess();
                }else if(setInfo.code!=100){
                        this.refs.alert.show({
                            content: '自动投标开启失败',
                            okText: '确定',
                        })
                }
            }
        }


    };
    showSuccess=()=>{
        let text='';
        if(this.props.info.open){
            text=this.state.open&&"已保存"||"已关闭"
        }else{
            text=this.state.open&&"已开启"||"已关闭"
        }
        this.refs.success.show({
            text: text,
            callback: () => {
                this.props.push('/home/myIndex');
                this.props.getInfo();
            }
        });
    };
    checkButtonClickStatus=(count,balance,rate)=>{
        const rates=parseFloat(rate);
       if (!/^[1-9]\d{0,1}$/.test(count)||!/^[0-9]*[1-9][0-9]*$/.test(balance)||!(/^\d+(\.\d{1})?$/.test(rates) && rates<=this.state.maxRate && rates>=this.state.minRate)){
           this.setState({
               buttonClickStatus:false
           })
       }else {
           this.setState({
               buttonClickStatus:true
           })
       }
    };
    toggle=(flag,id)=>{//开关自动投标
        // if (!flag){
        //    this.sure(0)
        // }
        this.setState({
            open:flag
        })
    };
    chooseBidType=()=>{//显示标类型
        this.refs.bidType.show();
    };
    repaymentType=()=>{//显示还款类型
      this.refs.repaymentType.show();
    };
    repaymentTypeChoose=(type)=>{//设置还款类型
        this.setState({
            repaymentType:type+1
        })
    };
    bidTypeChoose=(type)=>{//设置标类型
        this.setState({
            bidType:type
        })
    };
    minus=()=>{//收益率减少
        const rate=parseFloat(this.state.rate);
        if(rate-0.1>=this.state.minRate){
            this.setState({
                rate:parseFloat(rate-0.1).toFixed(1)+'%起'
            })
        }else {
            this.showTips('年化收益率不能小于'+this.state.minRate);
        }
    };
    add=()=>{//收益增加
        const rate=parseFloat(this.state.rate);
        if(rate+0.1<=this.state.maxRate){
            this.setState({
                rate:+parseFloat(rate+0.1).toFixed(1)+'%起'
            })
        }else {
            this.showTips('年化收益率不能大于'+this.state.maxRate);
        }
    };
    addHoldStart=()=>{
        touchLoop =  setInterval(()=>{
            this.add();
        },200);
    };
    minusHoldStart=()=>{
        touchLoop =  setInterval(()=>{
            this.minus();
        },200);
    };
    addHoldEnd=()=>{
        clearInterval(touchLoop);
    };
    minusHoldEnd=()=>{
        clearInterval(touchLoop);
    };
    RateInputFoucs=(e)=>{
        const rate=parseFloat(this.state.rate);
         this.setState({
             rate
         })
    };
    rateInputChange=(e)=>{
        let newVal = e.target.value;
        const reg=/^\d+(\.\d{1})?$/;
        if(!(reg.test(newVal) && newVal<=this.state.maxRate && newVal>=this.state.minRate)){//输入值符合范围
            this.showTips("请输入"+this.state.minRate+"~"+this.state.maxRate+"之间的小数,保留一位小数!");
        }
        this.setState({
            rate:newVal,
            rateInputStatus:false
        });
        this.checkButtonClickStatus(this.state.count,this.state.balance,newVal);
    };
    rateInputBlur=()=>{
        const rate=this.state.rate+'%起';
        this.setState({
            rate
        })
    }
    showTips= (tip)=>{
        this.setState({
            error:true
        });
        this.refs.tipbar.open(tip,this.closeError)
    };
    closeError=()=>{
        this.setState({
            error:false
        })
    };
    openDurationSelect=()=>{//打开借款期限选择
        this.refs.durationSelect.show();
    };
    durationChoose=(data)=>{//期限选择回调
        this.setState({
            start:data.from,
            end:data.to
        })
    };
    countBlur=(e)=>{//投标次数失去焦点
        var newCount = e.target.value;
        if(!/^[1-9]\d{0,1}$/.test(newCount)){
            this.showTips("请输入1~99次投标次数！");
        }
        this.setState({
            count:newCount
        })
        this.checkButtonClickStatus(newCount,this.state.balance,this.state.rate);
    };
    timesBlur=(e)=>{
        var newCount = e.target.value;
        if(!/^[0-9]*[1-9][0-9]*$/.test(newCount)){
            this.showTips("投标次数至少为一份！");
        }
        this.setState({
            balance:newCount
        })
        this.checkButtonClickStatus(this.state.count,newCount,this.state.rate);
    };
    sure=(id)=>{//提交
        newInfo = true;
        this.props.BidSet([
            this.state.count,
            this.state.balance,
            this.state.start,
            this.state.end,
            parseFloat(this.state.rate),
            this.state.repaymentType,
            this.state.bidType,
            id ,//this.state.open
            "platform"
         ]);
    };
    render() {
        const {pop,info} = this.props;
        let typeText='不限'
        switch (this.state.bidType) {
            case 0:
                typeText = "不限"
                break;
            case 1:
                typeText = "信用标"
                break;
            case 2:
                typeText = "担保标"
                break;
            case 5:
                typeText = '抵押标'
                break;
            default:
                typeText = '不限'
        }
        const repaymentTypes = ['不限','每月还息到期还本','每月等额还本息'];
        if(!info){
            return  <Loading/>
        }
        return (
            <div>
                <div style={{position:'fixed',top:'0',width:'100%',zIndex:'1000'}}>
                <Tipbar ref='tipbar' className={style.tips} />
                </div>
                <Success ref="success" />
                <Success ref="successTwo" />
                <Alert ref="alert"/>
                <Box className={classnames(this.state.error&&style.box_error||style.top)}>
                    <div className={style.open}>
                        开启自动投标功能
                        {this.state.open&&<div style={{float:"right",marginLeft:'6px'}}>开启</div>|| <div style={{float:"right",marginLeft:'6px'}}>关闭</div>}
                        <Switch className={style.switch} status={this.state.open} callBackFun={this.toggle}/>
                    </div>
                    <div className={classnames(style.content)}>
                        <ul className={style.times}>
                            <li>
                                <span className={style.title}>投标次数</span>
                          <input type="text" ref="countInput" value={this.state.count} onChange={(e)=>{this.countBlur(e)}} placeholder="最多可设置99次" maxLength="2"/>
                                <span className={style.desc}>次</span>
                            </li>
                            <li>
                                <span className={style.title}>单次投标份数</span>
                                <input type="number" ref="timesInput" value={this.state.balance} onChange={(e)=>{this.timesBlur(e)}}/>
                                <span className={style.desc}>份</span>
                            </li>
                        </ul>
                        <p className={style.rest_money}>可用余额<span>{Util.padMoney(this.state.resetMoney)}</span>元</p>
                        <div className={style.rate}>
                            <p className={style.duration} onClick={()=>{this.openDurationSelect()}}>借款期限 <span>{this.state.start}个月~{this.state.end}个月</span><img src={Arrow} alt=""/></p>
                            <p className={style.rate_label}>
                                约定年化收益率
                            </p>
                            <div className={style.rate_box}>
                                <div className={style.minus}
                                     onClick={()=>{this.minus()}}
                                     onTouchEnd={()=>{this.minusHoldEnd()}}
                                     onTouchStart={()=>{this.minusHoldStart()}}>
                                    <span></span>
                                </div>
                                <input type="text"
                                       ref="rateInput"
                                       onChange={(e)=>{this.rateInputChange(e)}}
                                       onBlur={this.rateInputBlur}
                                       value={this.state.rate}
                                       className={style.rate_input}
                                       onFocus={this.RateInputFoucs}/>
                                <div className={style.add}  onClick={()=>{this.add()}} onTouchEnd={()=>{this.addHoldEnd()}}
                                     onTouchStart={()=>{this.addHoldStart()}}>
                                    <span></span><span></span>
                                </div>
                            </div>
                        </div>
                        <p className={style.rest_money}>约定年化收益率过高将有可能无法成交，系统默认最高预定年华收益为15%</p>
                        <ul className={style.types}>
                            <li  onClick={()=>{this.repaymentType()}}>
                                还款方式
                                <span>{repaymentTypes[this.state.repaymentType-1]} <img src={Arrow} alt=""/></span>
                            </li>
                            <li onClick={()=>{this.chooseBidType()}}>
                                标类型
                                <span>{typeText} <img src={Arrow} alt=""/></span>
                            </li>
                        </ul>
                    </div>
                </Box>
                <button onClick={()=>{
                    let id=this.state.open?1:0;
                    this.sure(id)
                }}  disabled={!this.state.buttonClickStatus}
                        className={classnames(style.sure)}>保存设置</button>
                <Confirm ref="confirm"/>
                <DurationSelect ref="durationSelect" from={this.state.start} to={this.state.end} callBackFun={this.durationChoose} items={
                [1,3,6,12,24]
                }/>
                <SelectBoxOld ref="bidType" callBackFun={this.bidTypeChoose} items={[
                    {
                        text: '不限',
                        color: this.state.bidType == 0 ? '#00a6e2' : "#000",
                        canClick: true,
                        type:0
                    },
                    {
                        text: '信用标',
                        color: this.state.bidType == 1 ? '#00a6e2' : "#000",
                        canClick: true,
                        type:1
                    },
                    {
                        text: '担保标',
                        color: this.state.bidType == 2 ? '#00a6e2' : "#000",
                        canClick: true,
                        type:2
                    },
                    {
                        text: '抵押标',
                        color: this.state.bidType == 5 ? '#00a6e2' : "#000",
                        canClick: true,
                        type:5
                    }
                ]}/>
                <SelectBox ref="repaymentType" callBackFun={this.repaymentTypeChoose} items={[
                {
                    text:repaymentTypes[0],
                    color:this.state.repaymentType==1?'#00a6e2':"#000",
                    canClick:true
                },
                {
                    text:repaymentTypes[1],
                    color:this.state.repaymentType==2?'#00a6e2':"#000",
                    canClick:true
                },
                {
                    text:repaymentTypes[2],
                    color:this.state.repaymentType==3?'#00a6e2':"#000",
                    canClick:true
                }
                ]}/>
            </div>
        )
    }
}
const infoModel = (data)=>{
    if(data && 100==data.code){
        return data.data;
    }else{
        return false;
    }
};
const mapStateToProps = (state) => {
    return {
        info:infoModel(state.infodata.getIn(['AUTO_BUY_INFO','data'])),
        setInfo:state.infodata.getIn(['AUTO_BUY','data']),
        freeAccreditData:state.infodata.getIn(['FREE_ACCREDIT','data']),
        accreditVerifyData:state.infodata.getIn(['ACCREDIT_VERIFY','data'])
    }
};

const mapDispatchToProps = (dispatch) => ({
    getInfo(){
        dispatch({
            type:"AUTO_BUY_INFO",
            params:[{access_sys:'platform'}]
        })
    },
    BidSet(params){
        dispatch({
            type:"AUTO_BUY",
            params:params
        })
    },
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    clear(){
        dispatch({
            type:"CLEAR_INFO_DATA",
            key:'AUTO_BUY_INFO'
        })
    },
    accreditClear(){
        dispatch({
            type:"CLEAR_INFO_DATA",
            key:'FREE_ACCREDIT'
        });
        dispatch({
            type:"CLEAR_INFO_DATA",
            key:'ACCREDIT_VERIFY'
        })
    },
    updateStoreInfo(){
        dispatch({
            type:"STORE_STATUS_INFO",
        })
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
