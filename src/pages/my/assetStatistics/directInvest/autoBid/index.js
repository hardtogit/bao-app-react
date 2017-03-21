import React from 'react' //收货地址首页
import { connect } from 'react-redux'
import {push, goBack} from 'react-router-redux'
import Tappable from 'react-tappable';
import Tipbar from '../../../../../components/Tipbar/index'
import NavBar from '../../../../../components/NavBar/index';
import Box from '../../../../../components/ContentBox/index';
import Switch from '../../../../../components/switch/index'
import Alert from '../../../../../components/Dialog/alert';
import Confirm from '../../../../../components/Dialog/confirm';
import Success from '../../../../../components/Dialog/success'
import Loading from '../../../../../components/pageLoading/index'
import SelectBox from '../../../../../components/SelectBox/index'
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
            resetMoney:JSON.parse(sessionStorage.getItem("bao-user")).balance||0,
            bidType:"",//标类型
            repaymentType:"",//还款方式
            rate:"",//年化收益率
            maxRate:"",//最高收益率
            minRate:"",//最低收益率
            count:1,//投标次数
            balance:1,//单次投标份数
            start:1,//开始期限
            end:24,//结束期限
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
                    bidType:info.type||1,//默认不限
                    repaymentType:info.repayment_type||1,//默认不限
                    rate:Number(info.rate)||10.5,
                    maxRate:Number(info.maxRate),
                    minRate:Number(info.minRate),
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
                    cancelCallback:this.showSuccess
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
        this.refs.success.show({
            text: '设置成功',
            callback: () => {
                this.props.push('/user');
                this.props.getInfo();
            }
        });
    };
    checkButtonClickStatus=(count,balance,rate)=>{//检测确认开启是否能点击
        if(!/^[1-9]\d{0,1}$/.test(count) || !/^[1-9]\d*$/.test(balance) || !Util.checkNumber(rate)){
            this.setState({
                buttonClickStatus:false
            })
        }else{
            this.setState({
                buttonClickStatus:true
            })
        }
    };
    toggle=(flag,id)=>{//开关自动投标
        if (!flag){
           this.sure(0)
        }
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
            bidType:type+1
        })
    };
    minus=()=>{//收益率减少
        if(this.state.rate-0.1>=this.state.minRate){
            this.setState({
                rate:+this.state.rate-0.1
            })
        }
    };
    add=()=>{//收益增加
        if(this.state.rate+0.1<=this.state.maxRate){
            this.setState({
                rate:+this.state.rate+0.1
            })
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
        this.setState({
            rateInputStatus:true
        });
        this.refs.rateInput.focus();
    };
    rateInputBlur=(e)=>{
        let newVal = e.target.value;
        if(Util.checkNumber(newVal) && newVal<=this.state.maxRate && newVal>=this.state.minRate){//输入值符合范围
            this.setState({
                rate:newVal,
                rateInputStatus:false
            });
        }else{
            this.showTips("请输入"+this.state.minRate+"~"+this.state.maxRate+"之间的小数,保留二位小数!");
        }
        this.checkButtonClickStatus(this.state.count,this.state.balance,newVal);
    };
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
        if(/^[1-9]\d{0,1}$/.test(newCount)){
            this.setState({
                count:newCount
            })
        }else{
            this.refs.countInput.focus();
            this.showTips("请输入1~99次投标次数！");
        }
        this.checkButtonClickStatus(newCount,this.state.balance,this.state.rate);
    };
    timesBlur=(e)=>{
        var newCount = e.target.value;
        if(/^[1-9]\d*$/.test(newCount)){
            this.setState({
                balance:newCount
            })
        }else{
            this.refs.timesInput.focus();
            this.showTips("请输入1~99次投标次数！");
        }
        this.checkButtonClickStatus(this.state.count,newCount,this.state.rate);
    };
    sure=(id)=>{//提交
        newInfo = true;
        this.props.BidSet([
            this.state.count,
            this.state.balance,
            this.state.start,
            this.state.end,
            this.state.rate,
            this.state.repaymentType,
            this.state.bidType,
            id //this.state.open
         ]);
    };
    render() {
        const {pop,info} = this.props;
        const bidTypes = ['不限','担保标','抵押标'];
        const repaymentTypes = ['不限','每月还息到期还本','每月等额还本息'];
        if(!info){
            return <Loading/>
        }else
        return (
            <div>
                <NavBar onLeft={pop} rightNode={<Link style={{"color":"#fff"}} to="/user/autoBuyRule">规则</Link>}>自动投标</NavBar>
                <Tipbar ref='tipbar' className={style.tips} />
                <Success ref="success" />
                <Alert ref="alert"/>
                <Box className={classnames(this.state.error&&style.box_error||'')}> 
                    <div className={style.open}>
                        开启自动投标功能
                        <Switch className={style.switch} status={this.state.open} callBackFun={this.toggle}/>
                    </div>
                    <div className={classnames(style.content,this.state.open?'show':'hide')}>
                        <ul className={style.times}>
                            <li>
                                <span className={style.title}>投标次数</span>
                                <input type="text" ref="countInput" defaultValue={this.state.count} onBlur={(e)=>{this.countBlur(e)}} placeholder="最多可设置99次" maxLength="2"/>
                                <span className={style.desc}>次</span>
                            </li>
                            <li>
                                <span className={style.title}>单次投标份数</span>
                                <input type="number" ref="timesInput" defaultValue={this.state.balance} onBlur={(e)=>{this.timesBlur(e)}}/>
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
                                <div className={style.minus} onClick={()=>{this.minus()}} onTouchEnd={()=>{this.minusHoldEnd()}} onTouchStart={()=>{this.minusHoldStart()}}>
                                    <span></span>
                                </div>
                                <input type="text"
                                       ref="rateInput"
                                       onBlur={(e)=>{this.rateInputBlur(e)}}
                                       defaultValue={this.state.rate}
                                       className={style.rate_input}/>
                                <div className={style.add}  onClick={()=>{this.add()}} onTouchEnd={()=>{this.addHoldEnd()}} onTouchStart={()=>{this.addHoldStart()}}>
                                    <span></span><span></span>
                                </div>
                                <span onClick={(e)=>{this.RateInputFoucs(e)}} className={classnames(style.rateInput,!this.state.rateInputStatus?'show':'hide')}>{Util.padMoney(this.state.rate)+"%起"}</span>
                            </div>
                        </div>
                        <p className={style.rest_money}>约定年化收益率过高将有可能无法成交；当前系统参考约定年化收益率为{Util.padMoney(info.minRate)}%</p>
                        <ul className={style.types}>
                            <li  onClick={()=>{this.repaymentType()}}>
                                还款方式
                                <span>{repaymentTypes[this.state.repaymentType-1]} <img src={Arrow} alt=""/></span>
                            </li>
                            <li onClick={()=>{this.chooseBidType()}}>
                                标类型
                                <span>{bidTypes[this.state.bidType-1]} <img src={Arrow} alt=""/></span>
                            </li>
                        </ul>
                    </div>
                </Box>
                <button onClick={()=>{this.sure(1)}}  disabled={!this.state.buttonClickStatus}
                        className={classnames(style.sure,this.state.open?'show':'hide')}>确认开启</button>
                <Confirm ref="confirm"/>
                <DurationSelect ref="durationSelect" from={this.state.start} to={this.state.end} callBackFun={this.durationChoose} items={
                [1,3,6,12,24]
                }/>
                <SelectBox ref="bidType" callBackFun={this.bidTypeChoose} items={[
                {
                    text:'不限',
                    color:this.state.bidType==1?'#00a6e2':"#000",
                    canClick:true
                },
                {
                    text:'担保标',
                    color:this.state.bidType==2?'#00a6e2':"#000",
                    canClick:true
                },
                {
                    text:'抵押标',
                    color:this.state.bidType==3?'#00a6e2':"#000",
                    canClick:true
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
const mapStateToProps = (state, ownProps) => {
    return {
        info:infoModel(state.infodata.getIn(['AUTO_BUY_INFO','data'])),
        setInfo:state.infodata.getIn(['AUTO_BUY','data'])
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getInfo(){
        dispatch({
            type:"AUTO_BUY_INFO"
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
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
