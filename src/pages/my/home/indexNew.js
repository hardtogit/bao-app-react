import React, {Component} from 'react'
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import Loading from '../../../components/pageLoading'
import Sign from '../../../components/Sign/index'
import styles from './indexNew.less'
import {getAuthDetail} from '../../../components/Permission'
import classNames from 'classnames'
import avatarImg from '../../../assets/images/my-index/avatar.png'
import vipImg from '../../../assets/images/my-index/vip2.png'
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


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        this.props.load();//load userInfo
        this.props.getVip();//load vipInfo
        this.props.fridayPop()//load fridayInfo
    }

    renderDom = (userInfo, fridayPopData, VipData) => {
        const {
            avatar,
            username,
            grade,
            isSign,
            signNumbers,
            amount,
            balance,
            balance_platform,
            demand,
            directInvest,
            creditors,
            privilege,
            bonuse,
            interestRateSecurities,
            scratcheCard,
            voucher,
            coins,
            deposit,
            isBuyDemand,
            depositb
        } = userInfo.data;
        return (
            <div className={styles.container}>
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
                <Link to={`/user/main`}>
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
                            <Link to="/user/rechargeMain" className={styles.a}>
                                <div className={styles.rechange}>充值</div>
                            </Link><Link to="/user/cashMain" className={styles.a}>
                            <div className={styles.withdrawals}>提现</div>
                        </Link>
                        </div>
                    </div>
                </Link>
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
                        <div className={styles.item}>
                            <img src={bondTransferImg} alt=""/>
                            <p>债权转让</p>
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
        let Dom;
        if (userInfo && fridayPopData && VipData) {
            Dom = this.renderDom(userInfo, fridayPopData, VipData);
        } else {
            Dom = <Loading></Loading>
        }
        return (
            <div>
                {Dom}
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