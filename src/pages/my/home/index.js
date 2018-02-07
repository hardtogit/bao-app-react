import React from 'react'
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import Loading from '../../../components/pageLoading'
import Sign from '../../../components/Sign/index'

import styles from './index.less'

import xing from '../../../assets/images/my-index/2.png' // 会员标记
import moneySolar from '../../../assets/images/my-index/9.png'  //回款日历
import recharge from '../../../assets/images/my-index/3.png' // 充值
import DepositTreasure from '../../../assets/images/my-index/4.png' // 定存宝
import makeOver from '../../../assets/images/my-index/5.png' // 债权转让
import looseChange from '../../../assets/images/my-index/6.png' // 零钱宝
import safeplan from '../../../assets/images/my-index/7.png' // 直投项目
import directMail from '../../../assets/images/my-index/8.png' // 自动投标
import redPacket from '../../../assets/images/my-index/10.png' // 红包
import scratchCard from '../../../assets/images/my-index/11.png' // 刮刮卡
import rt from '../../../assets/images/my-index/rt.png' //即将下线
import someCoins from '../../../assets/images/my-index/12.png' // 点币
import interest from '../../../assets/images/my-index/13.png' // 加息券
import toUse from '../../../assets/images/my-index/14.png' // 抵用券
import manageMoney from '../../../assets/images/my-index/15.png' // 理财金
import DepositTreasureB from '../../../assets/images/my-index/16.png'
import poppic1 from '../../../assets/images/my-index/pop1.png'
import close from '../../../assets/images/my-index/close.png'
import gift from '../../../assets/images/my-index/gift.png'
import user_bg from '../../../assets/images/my-index/user_bg.png'
import vip from '../../../assets/images/my-index/vip.png'
import setting from '../../../assets/images/my-index/setting.png'
import newpic from '../../../assets/images/my-index/new.png'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ifSet: true,
            ifShow: false
        }
    }
    loadingDom() {
        return (<Loading/>)
    }

    componentWillReceiveProps({fridayPopData}) {
        if (fridayPopData && fridayPopData.code == 100 && this.state.ifSet && fridayPopData.data) {
            if (fridayPopData.data.isFriday) {
                let userInfo = sessionStorage.getItem('bao-user');
                userInfo = JSON.parse(userInfo);
                let userId = userInfo.id;
                if (document.cookie.length > 0) {
                    let c_start;
                    c_start = document.cookie.indexOf(userId + "=");
                    if (c_start != -1) {
                        this.setState({
                            ifShow: false
                        })
                    } else {
                        this.setState({
                            ifShow: true
                        });
                        let exdate = new Date();
                        exdate.setDate(exdate.getDate() + 2);
                        document.cookie = userId + "=true" + ";expires=" + exdate.toGMTString() + ";path=/";
                    }

                }
            }
            this.setState({
                ifSet: false
            })
        }

    }

    loadingEndDom(data) {
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
        } = data;
        const{
            userInfo
        }=this.props
        return (
            <div>
                <Sign ref="SignModel" coin={+coins} days={+signNumbers} sign={isSign} callBackFun={this.props.load}/>
                <div className={styles.userAccount}>
                    <img className={styles.userBg} src={user_bg} alt=""/>
                    <div className={styles.userInfoBg}>

                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.name}>{username}</div>
                        <div className={styles.vip}><div className={styles.left}><img src={vip} alt=""/></div> <div className={styles.right}>普通会员</div></div>
                    </div>
                    <div className={styles.settingBg}>
                    </div>
                    <div className={styles.setting} onClick={()=>{this.props.push('/user/setting') }}>
                        <img src={setting} alt=""/>
                        <span>设置</span>
                    </div>
                </div>
                <Link to="/user/analysis">
                    <div className={styles.myProduct}>
                        <div className={styles.mpLeft}>
                            <p className={styles.one}>总资产 (元)</p>
                            <p className={styles.two}>{amount}</p>
                        </div>
                        <div className={styles.mpright}>
                            <p>账户安全保障中</p>
                            <div className={styles.rightArrows}>
                                <span className={styles.arrows}></span>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className={styles.contents}>
                    <Link to={`/user/main`}>
                        <div className={styles.myProduct} style={{height:"65px"}}>
                            <div className={styles.mpLeft}>
                                <p className={styles.one}>账户余额 (元)</p>
                                <p className={styles.two}>{(()=>{
                                    if(userInfo) {
                                        let value = JSON.stringify(parseInt(userInfo.data.balance * 100 + userInfo.data.balance_platform * 100) / 100);
                                        if(value.split('.')[1]){
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
                                        }else{
                                            return value + ".00"
                                        }
                                    }
                                })()}</p>
                            </div>
                            <div className={styles.mpright}>
                               <Link to="/user/rechargeMain" className={styles.a}><div className={styles.rechange}>充值</div> </Link><Link to="/user/cashMain" className={styles.a}><div className={styles.withdrawals}>提现</div> </Link>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/user/calendar`}>
                        <div className={styles.myProduct}>
                            <div className={styles.mpLeft}>
                                <img src={moneySolar}/>
                                <p className={styles.mpFont1}>回款日历</p>
                            </div>
                            <div className={styles.mpright}>
                                <div className={styles.rightArrows}>
                                    <span className={styles.arrows}></span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className={styles.myProduct}>
                        <div className={styles.myList} style={{"borderLeft": "1px solid #E4E4E4"}}>
                            <Link to={`/user/autoBuy`}>
                                <img src={directMail}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>自动投标</p>
                                    <p className={styles.listColor} style={{"color": "#F19149"}}>省时省心</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.myList} style={{"borderLeft": "1px solid #E4E4E4"}}>
                            <Link to="/user/dcbB">
                                <img src={DepositTreasureB}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>定存宝B</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#F19149"}}>{depositb == 0 && '每月还息  到期还本' || '+' + depositb}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.myProduct}>
                        <div className={styles.myList}>
                            <Link to='/user/dcb'>
                                <img src={DepositTreasure}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>定存宝A</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#F19149"}}>{deposit == 0 && '到期还本付息' || '+' + deposit}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.myList} style={{"borderLeft": "1px solid #E4E4E4"}}>
                            <Link to="/user/zt">
                                <img src={safeplan}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>直投项目</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#F19149"}}>{directInvest == 0 && '期限灵活门槛低' || '+' + directInvest}</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.myProduct}>
                        <div className={styles.myList}>
                            <Link to="/user/zq">
                                <img src={makeOver}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>债权转让</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#F19149"}}>{creditors == 0 && '流动性高' || '+' + creditors}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.myList} style={{"borderLeft": "1px solid #E4E4E4"}}>
                            <Link to="/user/gatherMy">
                                <img src={makeOver}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>聚点+</p>
                                    <p className={styles.listColor} style={{"color": "#F19149"}}>{'智能投标'}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.contents} style={{"marginBottom": "40px"}}>
                    <div className={styles.myProduct}>
                        <div className={styles.myList}>
                            <Link to='/user/redPacket'>
                                <img src={redPacket}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>红包</p>
                                    <p className={styles.listColor} style={{"color": "#888"}}>{bonuse}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.myList} style={{"borderLeft": "1px solid #E4E4E4"}}>
                            <Link to="/user/addRate">
                                <img src={interest}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>加息券</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#888"}}>{0 == interestRateSecurities ? '更多活动' : interestRateSecurities + '张'}</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.myProduct}>
                        <div className={styles.myList}>
                            <Link to="/user/fridayActivity">
                                <img src={gift} style={{"width": "26px", "height": "25px", "marginLeft": "2px"}}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>周五狂享礼</p>
                                    <p className={styles.listColor} style={{"color": "#888"}}>点币大派送</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.myList} style={{"borderLeft": "1px solid #E4E4E4"}}>
                            <Link to="/user/vouchers">
                                <img src={toUse}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>抵用券</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#888"}}>{0 == voucher ? '更多活动' : voucher + '张'}</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.myProduct}>
                        <div className={styles.myList} style={{"borderRight": "1px solid #E4E4E4"}}>
                            <Link to={`/user/coinShop`}>
                                <img src={someCoins}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>积分商城</p>
                                    <p className={styles.listColor}
                                       style={{"color": "#888"}}>{0 == coins && '更多活动' || coins}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.myList} style={{"display": "none"}}>
                            <img src={manageMoney}/>
                            <div className={styles.myListText}>
                                <p className={styles.listTitle}>理财金</p>
                                <p className={styles.listColor} style={{"color": "#F19149"}}>{privilege}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
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

    componentDidMount() {
        this.props.load();
        this.props.fridayPop();
    }

    doSign = () => {
        this.refs.SignModel.show();
    };
    handleClick = () => {
        this.refs.fridayPop.style.display = 'none';
    }

    render() {
        const {
            nobjs,
            fridayPopData
        } = this.props;

        let Dom;

        let PopDom;
        if (fridayPopData && fridayPopData.data && fridayPopData.data.coin != 0) {
            PopDom = this.fridayPopDom(fridayPopData.data);
        }


        if (nobjs) {
            Dom = this.loadingEndDom(nobjs.data);
        } else {
            Dom = this.loadingDom();
        }

        return (
            <div>
                <div className={styles.myContent}>
                    {
                        Dom
                    }
                </div>
                <div>
                    {this.state.ifShow && PopDom}
                </div>
            </div>

        )
    }
}

const myIndexInit = (state, own) => ({
    nobjs: state.infodata.getIn(['USER_INFO_WITH_LOGIN', 'data']),
    fridayPopData: state.infodata.getIn(['FRIDAY_POP', 'data']),
    userInfo:state.infodata.getIn(['USER_INFO','data'])
})
const myIndexInitfn = (dispath, own) => ({
    load() {
        dispath({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
    fridayPop() {
        dispath({
            type: "FRIDAY_POP"
        })
    },
    push(url){
        dispath(push(url))
    }
})
export default connect(myIndexInit, myIndexInitfn)(Index)
