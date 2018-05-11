import React, {Component} from 'react'
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import Loading from '../../../components/pageLoading'
import Store from '../../../components/Dialog/store'
import styles from './index.less'
import {getAuthDetail} from '../../../components/Permission'
import classNames from 'classnames'
import avatarImg from '../../../assets/images/my-index/avatar.png'
import settingImg from '../../../assets/images/my-index/setting_button.png'
import umbrellaImg from '../../../assets/images/my-index/product.png'
import autoBidImg from '../../../assets/images/my-index/auto_bid.png'
import calendarImg from '../../../assets/images/my-index/loan_calendar.png'
import flowImg from '../../../assets/images/my-index/deal_flow.png'
import optimalEnjoyImg from '../../../assets/images/my-index/optimal_enjoy.png'
import accumulationPointImg from '../../../assets/images/my-index/accumulation_point.png'
import directInvestmentImg from '../../../assets/images/my-index/direct_investment.png'
import bondTransferImg from '../../../assets/images/my-index/bond_transfer.png'
import depositBImg from '../../../assets/images/my-index/depositB.png'
import depositAImg from '../../../assets/images/my-index/depositA.png'
import couponsImg from '../../../assets/images/my-index/coupons.png'
import redEnvelopeImg from '../../../assets/images/my-index/red_envelope.png'
import fridayPrizeImg from '../../../assets/images/my-index/friday_prize.png'
import normal from '../../../assets/images/my-index/normal.png'
import vip1 from '../../../assets/images/my-index/vip1.png'
import vip2 from '../../../assets/images/my-index/vip2.png'
import vip3 from '../../../assets/images/my-index/vip3.png'
import vip4 from '../../../assets/images/my-index/vip4.png'
import vip5 from '../../../assets/images/my-index/vip5.png'
import vip6 from '../../../assets/images/my-index/vip6.png'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ifShow: true
        }
    }
    componentWillMount() {
        this.props.load();//load userInfo
        this.props.getVip();//load vipInfo
        this.props.fridayPop()//load fridayInfo
    }
    fridayPopDom(data) {
        const {
            coin,
            username
        } = data;
        return (
            <div ref="fridayPop" className={styles.fridayPopWraper}>
                <div className={styles.shadow}></div>
                <div className={styles.popWraper}>
                    <div className={styles.popContent}>
                        <img className={styles.pop1} src={poppic1}/>
                        <div className={styles.pop2}>
                            <div className={styles.txt1}>
                                <p className={styles.txt11}>尊敬的{username}</p>
                                <p className={styles.txt12}>你在上一个活动周期里</p>
                            </div>
                            <div className={styles.txt2}>
                                <p className={styles.txt21}>恭喜获得点币数</p>
                                <p className={styles.txt22}>{coin}</p>
                            </div>
                        </div>
                        <div className={styles.pop3}>
                            <p>向更多点币发起冲击吧！</p>
                        </div>
                        <img src={close} className={styles.close} onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }

    renderDom = (userInfo, fridayPopData, VipData) => {
        const {
            username,
            amount,
        } = userInfo.data;
        let vipImg;
        switch (parseInt(VipData.data.vip_level)){
            case 0:
                vipImg=normal;
                break;
            case 1:
                vipImg=vip1;
                break;
            case 2:
                vipImg=vip2;
                break;
            case 3:
                vipImg=vip3;
                break;
            case 4:
                vipImg=vip4;
                break;
            case 5:
                vipImg=vip5;
                break;
            case 6:
                vipImg=vip6;
                break

        }
        return (
            <div className={styles.container}>
                <Store ref="store"></Store>
                <div className={styles.header}>
                    <div className={styles.infoLine}>
                        <div className={styles.left}>
                            <img className={styles.avatarImg} src={avatarImg}/>
                            <span className={styles.userName}>{username}</span>
                            <img className={styles.vipImg} src={vipImg}/>
                        </div>
                        <div className={styles.right}>
                            <Link to="/user/setting" >
                            <img className={styles.settingImg} src={settingImg}/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.amount}>{amount}</div>
                    <div className={styles.amountText}>总资产(元)</div>
                    <div className={styles.textBox} onClick={()=>{this.props.push("/user/analysis")}}><img src={umbrellaImg}/>账户安全保障中</div>
                    <div className={styles.tabs}>
                        <div className={styles.tab} onClick={()=>{
                            switch (getAuthDetail()){
                                case 1:
                                    this.props.push("/user/autoBuy");
                                    break;
                                case 2:
                                    this.props.push('/user/setting/authorization');
                                    break;
                                case 3:
                                    this.refs.store.show();
                                    break;
                                default:
                                    break
                            }

                        }}><img src={autoBidImg}/><span>自动投标</span></div>
                        <div className={classNames([styles.tab, styles.center])} onClick={()=>{this.props.push('/user/calendar')}}><img
                            src={calendarImg}/><span>回款日历</span></div>
                        <div className={styles.tab} onClick={()=>{this.props.push('/user/moneyLogMain')}}><img src={flowImg}/><span>交易流水</span></div>
                    </div>
                </div>
                <div onClick={()=>{this.props.push('/user/main')}}>
                    <div className={styles.myProduct} style={{height: "65px"}}>
                        <div className={styles.mpLeft}>
                            <p className={styles.one}>可用余额 (元)</p>
                            <p className={styles.two}>{(() => {
                                if (userInfo) {
                                    let value = JSON.stringify(parseInt(userInfo.data.balance * 100 + userInfo.data.balance_platform * 100) / 100);
                                    if (value.split('.')[1]) {
                                        switch (value.split('.')[1].length) {
                                            case 1:
                                                return value + '0';
                                                break
                                            case 2:
                                                return value;
                                                break
                                            default:
                                                return value + ".00"
                                                break
                                        }
                                    } else {
                                        return value + ".00"
                                    }
                                }
                            })()}</p>
                        </div>
                        <div className={styles.mpright} >
                            <span onClick={(e)=>{this.props.push("/user/rechargeMain");e.stopPropagation();}} className={styles.a}>
                                <div className={styles.rechange}>充值</div>
                            </span>
                            <span  onClick={(e)=>{this.props.push("/user/cashMain");e.stopPropagation();}} className={styles.a}>
                            <div className={styles.withdrawals}>提现</div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.functionBox}>
                    <div className={styles.title}>我的产品</div>
                    <div className={styles.box}>
                        <div className={styles.item}>
                            <Link to="/user/youMy">
                            <img src={optimalEnjoyImg} alt=""/>
                            <p>优享+</p>
                            </Link>
                        </div>

                        <div className={styles.item}>
                            <Link to="/user/gatherMy">
                            <img src={accumulationPointImg} alt=""/>
                            <p>聚点+</p>
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <Link to="/user/zt">
                            <img src={directInvestmentImg} alt=""/>
                            <p>直投项目</p>
                            </Link>
                        </div>
                        <div className={styles.item} >
                            <Link to='/user/myTransferMain'>
                            <img src={bondTransferImg} alt=""/>
                            <p>债权转让</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.item}>
                            <Link to='/user/dcbB'>
                            <img src={depositBImg} alt=""/>
                            <p>定存宝B</p>
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <Link to='/user/dcb'>
                            <img src={depositAImg} alt=""/>
                            <p>定存宝A</p>
                            </Link>
                        </div>
                        <div className={styles.item}>
                        </div>
                        <div className={styles.item}>
                        </div>
                    </div>
                </div>
                <div className={styles.functionBox}>
                    <div className={styles.title}>我的优惠</div>
                    <div className={styles.box}>
                        <div className={styles.item}>
                            <img src={couponsImg} alt=""/>
                            <p>优惠券</p>
                        </div>
                        <div className={styles.item}>
                            <Link to='/user/redPacket'>
                            <img src={redEnvelopeImg} alt=""/>
                            <p>红包</p>
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <Link to='/user/fridayActivity'>
                            <img src={fridayPrizeImg} alt=""/>
                            <p>周五狂想礼</p>
                            </Link>
                        </div>
                        <div className={styles.item}>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        const {
            userInfo,
            fridayPopData,
            VipData
        } = this.props;
        let Dom,PopDom;
        if (userInfo && fridayPopData && VipData) {
            Dom = this.renderDom(userInfo, fridayPopData, VipData);
        } else {
            Dom = <Loading></Loading>
        }
        if (fridayPopData && fridayPopData.data && fridayPopData.data.coin != 0) {
            PopDom = this.fridayPopDom(fridayPopData.data);
        }
        return (
            <div>
                {Dom}
                {this.state.ifShow && PopDom}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    userInfo: state.infodata.getIn(['USER_INFO_WITH_LOGIN', 'data']),
    fridayPopData: state.infodata.getIn(['FRIDAY_POP', 'data']),
    VipData: state.infodata.getIn(['GET_VIP', 'data']),
});
const mapDispatchToProps = (dispatch, own) => ({
    getVip() {
        dispatch({
            type: 'GET_VIP'
        })
    },
    load() {
        dispatch({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
    fridayPop() {
        dispatch({
            type: "FRIDAY_POP"
        })
    },
    push(url) {
        dispatch(push(url))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Index)