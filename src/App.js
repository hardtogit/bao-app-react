import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerMiddleware,analyticsService} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import 'isomorphic-fetch';
import './css/normalize.css';
import './App.css';
import reducer from './reducers';
import PageTransition from './components/PageTransition'
import * as Auth from  './model/auth';
import rootSaga from './sagas/';
import { RATE, USER_INFO,SAFE_CARD_INFO,DEPOSITBS_PLANB,STORE_STATUS_INFO} from './actions/actionTypes'
import RelatedProjects from './pages/finance/demand/relatedProjects'
import DemandInvestFail from './pages/finance/demand/investFail'
import DemandRedeem from './pages/finance/demand/redeem'
import DemandBuy from './pages/finance/demand/buy'
import DemandProduct from './pages/finance/demand/product'
import DirectInvestSuccess from './pages/finance/directInvest/inviteSuccess'
import DirectContract from './pages/finance/directInvest/directProductContract.js'
import CreditorList from './pages/finance/creditors/index/'
import CreditorDetail from './pages/finance/creditors/product/index.js'
import CreditorBuy from './pages/finance/creditors/buy/index.js'
import CreditorProtocol from './pages/finance/creditors/protocol/'
import CreditorInvestSuccess from './pages/finance/creditors/investSuccess/'
import ChangePayPwd from './pages/user/changePayPwd/index'
import PayWeb from './pages/finance/payWeb'
import DepositInvestSuccess from './pages/finance/deposit/investSuccess'

import CheckPhone from './pages/user/checkPhone/';
import ChangeLoginPwd from './pages/user/changeLoginPwd/';
import ChangeUserName from './pages/user/changeUserName/';

/*************************************************我的*****************************************************/
import Detail from './pages/my/assetStatistics/balance/mine/index' /*我的余额*/
import Verify from './pages/my/assetStatistics/balance/charge/recharge.js' /*充值身份验证*/
import Creditors from './pages/my/assetStatistics/creditors/mine/index' /*我的债权转让*/
import CreditorsRecords from './pages/my/assetStatistics/creditors/records/index' /*我的债权记录*/
import MyDemandIndex from './pages/my/assetStatistics/demand/mine/index' /*我的零钱宝*/
import MyDemandRecords from './pages/my/assetStatistics/demand/records/index' /*我的零钱宝记录*/
import DemandReddem from './pages/my/assetStatistics/demand/reddem/index' /*零钱宝赎回*/
import reddemSuccese from './pages/my/assetStatistics/demand/redemptionRequest/index' /*零钱宝成功*/
import CreditorRights from './pages/my/assetStatistics/directInvest/creditorRights/index' /*债权资产详情*/
import HistoryRecord from './pages/my/assetStatistics/directInvest/historyRecord/index' /*历史记录资产详情*/
import About from './pages/my/setting/about/index' //关于我们
import VersionInfo from './pages/my/setting/versionInfo/index'//版本介绍
import pastAccrule from './pages/my/interestRate/overdue/index' /*过期加息券*/
import CoinsRecord from './pages/my/coin/records/index' /*点币获得记录*/
import ExchangeList from './pages/my/coin/exchangeList/index' /*点币兑换记录*/
import CoinsRule from './pages/my/coin/rules/index' /*点币规则*/
import trueExchangeConfirm from './pages/my/coin/trueExchangeConfirm/index' /*确认兑换*/
import activeConfirm from './pages/my/coin/activeConfirm'
import ExchangeSuccess from './pages/my/coin/exchangeSuccess/index' /*兑换成功*/
import ExchangeFail from './pages/my/coin/exchangeFail/index' /*兑换失败*/
import Vouchers from './pages/my/voucher/myVouchers/index' /*抵用券*/
import VouchersPast from './pages/my/voucher/overdue/index' /*过期抵用券*/
import financiaIndex from './pages/my/assetStatistics/financialManagement/index/index' /*我的理财金*/
import financiaRecords from './pages/my/assetStatistics/financialManagement/records/index' /*理财记录*/
import redPacket from './pages/my/bonus/myBonuses/index' /*红包*/
import redPacketRule from './pages/my/bonus/myBonuses/rule' /*红包*/
import securityCard from './pages/my/setting/securityCard/index' /*安全卡*/
import securityCardChangeApply from './pages/my/setting/securityCard/changeApply' /*更换安全卡申请页面*/
import siteList from './pages/my/setting/site/list/index'//收货地址列表
import siteAdd from './pages/my/setting/site/add/index'//收货地址新增
import siteEdit from './pages/my/setting/site/edit/index'//收货地址编辑
import autoBuy from './pages/my/assetStatistics/directInvest/autoBid/index'//自动投标
import autoBuyRule from './pages/my/assetStatistics/directInvest/autoBid/rule'//自动投标规则
/*******************************************************************************************************/
import active from './pages/user/active/index'
import inviteParticulars from './pages/find/invite/particulars' /*邀请明细*/
import inviteRule from './pages/find/invite/rule' /*邀请规则*/
import ScratchesRule from './pages/my/scratchesCard/rule' /*刮刮卡规则*/
import depositDetails from './pages/finance/deposit/depositDetails/index'  /* 定存宝详情*/
import planDetails from './pages/finance/deposit/planDetails/index' /* 更多详情*/
import Cash from './pages/my/assetStatistics/balance/cash/index'/*提现*/
//发现模块
import findIndex from './pages/find'
import Invite from './pages/find/invite/index'

// 我的模块
import verifyPhone from './pages/my/setting/verifyPhone'
import regStore from './pages/my/setting/regStore'
import cardBind from './pages/my/setting/cardBind'
import BindSuccess from './pages/my/setting/bindSuccess'
import RegStoreSuccess from './pages/my/setting/regStoreSuccess'
import choicePoint from './pages/my/setting/choicePoint'
import choiceBank from './pages/my/setting/choiceBank'
import Setting from './pages/my/setting/index'
import UserNameModify from './pages/my/setting/usernameModify'
import SecurityCenter from './pages/my/setting/securityCenter'
import LoginPasswordModify from './pages/my/setting/loginPasswordModify'
import TradePasswordSet from './pages/my/setting/tradePasswordSet'
import TradePasswordModify from './pages/my/setting/tradePasswordModify'
import TradePasswordForgetVerifyMobile from './pages/my/setting/tradePasswordForget/verifyMobile'
import TradePasswordForget from './pages/my/setting/tradePasswordForget'
import MobileBind from './pages/my/setting/mobileBind'
import  MobileBindNew from './pages/my/setting/mobileBind/new'
import MobileBindModify from './pages/my/setting/mobileBindModify'
import Problems from './pages/my/setting/problems'
import IdentityAuth from './pages/my/setting/identityAuth'
import User from './pages/my/index'
import IndexTab from './components/IndexTabs'
import bankcardAddIndex from './pages/my/setting/bankcardAdd/index'
import tradePasswordNew from './pages/my/setting/tradePasswordSet/new'
import ruleRate from './pages/my/interestRate/rule'
import ruleVoucher from './pages/my/voucher/rule'
import financialIndex from './pages/home/'
import Home from './pages/home/index';

import Withdrawals from './pages/my/assetStatistics/balance/cash/index' //提现
import cashSuccess from './pages/my/assetStatistics/balance/success'  //提现成功
import privacy from './pages/my/passport/agreement/privacy'
import service from './pages/my/passport/agreement/service'
import zqTransfer from './pages/my/assetStatistics/directInvest/zqTransfer'
import inviteSuccess from './pages/my/inviteSuccess/index'
//意见反馈
import FeedbackIndex from './pages/my/setting/feedback'
import ProductList from './pages/active/productList'
// 主页
import homeIndex from './pages/home/index'
import shopCenterRule from './pages/my/coin/shopCenter/rule'
import {Analysis,Calendar,CalendarMonths,Recharge,MoneyLog,MyDCB,MyDCBB,ZqRecords,GuaList,GoodsDetail,ShopCenter,SecurityPlan,ZqSecurityPlan,
ProductInfo,DcbContract, ZqProductInfo,DepositRecords,DepositRecordsB,MyDirectProjects,ProjectRecorde,ZqTransferRule,ScratchesCard,
AddAccrualIndex,CoinShop,DcContract,DetailsDcb,DetailsDc,PropertyDetail,ZqPropertyDetail} from './pages/routeComponent/userComponent'
import {DepositBuy,DirectBuy,DirectInvestDetails,DepositProduct,GatherMain} from './pages/routeComponent/depositComponent'
import {ProductIndex,FindHome,MyIndex} from './pages/routeComponent/homeComponent'
import {FindMessage,InviteFriends,AnnounceMent,MessageDetail} from './pages/routeComponent/findComponent'
import {Login,WeChat,Register,RegisterVerifyMobile,RegisterSuccess,RegisterSetPassword,Findpassword,FindpasswordSetPassword,SafePlan,Agreement}from './pages/routeComponent/accountComponent'
import {GatherDetail,GatherDeposits,GatherProblems,GatherJoin,GatherBuy,GatherBidDetail,GatherBorrowDetail,
GatherBackDetail,GatherInvestRecord,GatherMy,GatherMyDetail,GatherProjects,NewCharge,ReChargeSuccess,ReChargeFail,IdCardUpload,IdCardUploadExplain,
SuccessTemplate,DangerContract,ServiceContract,BorrowContract} from './loadTool'

// 工厂方法创建saga中间件
const a=window.location.href.split('.')[1]+'.cn';
document.domain = a;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(
    thunk,
    sagaMiddleware,
    routerMiddleware(browserHistory)
))
// 启动rootsaga
sagaMiddleware.run(rootSaga)

// 应用初始化时即请求全局数据
store.dispatch({type: RATE})
store.dispatch({type: USER_INFO,lx:'init'});
store.dispatch({type:SAFE_CARD_INFO});
store.dispatch({type:STORE_STATUS_INFO});
store.dispatch({type:DEPOSITBS_PLANB});
// 同步react-router状态到redux store
const history = syncHistoryWithStore(browserHistory, store)
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>

        <Router history={history}>
          <Route path="/" component={PageTransition}>
              <Route path="successTemplate" getComponent={SuccessTemplate}></Route>
              <Route path="dangerContract" getComponent={DangerContract}></Route>
              <Route path="serviceContract" getComponent={ServiceContract}></Route>
              <Route path="borrowContract/:id/:type" getComponent={BorrowContract}></Route>
              <IndexRedirect to="home" />
              <Route path="home" component={IndexTab} onLeave={(next)=>{Auth.isOut(store,next)}}>
                  <IndexRoute component={homeIndex}/>
                  <Route path='productIndex' component={ProductIndex}/>
                  <Route path='findIndex' component={FindHome}/>
                  <Route path='myIndex' component={MyIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>
              </Route>
              <Route path='/productList' component={ProductList}/>
              <Route path="user" component={User} >
                  <Route path='active' component={active} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*资产分析*/
                  <Route path='analysis' component={Analysis} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*资产分析*/
                  <Route path="calendar(/:year(/:month))" component={Calendar} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*回款日历*/
                  <Route path="calendarMonths/:year/:month" component={CalendarMonths} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*回款日历日期选择*/
                  <Route path="recharge" component={Recharge} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值*/
                  <Route path="newRecharge" getComponent={NewCharge} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*新充值*/
                  <Route path="reChargeSuccess" getComponent={ReChargeSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*新充值成功*/
                  <Route path="reChargeFail" getComponent={ReChargeFail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*新充值失败*/
                  <Route path="idCardUpload" getComponent={IdCardUpload} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*身份证上传*/
                  <Route path="idCardUploadExplain" getComponent={IdCardUploadExplain} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*身份证上传说明*/
                  <Route path="moneyLog" component={MoneyLog} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*余额明细*/
                  <Route path="dcb" component={MyDCB} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的定存宝*/
                  <Route path="dcbB" component={MyDCBB} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的定存宝*/
                  <Route path='zqRecords' component={ZqRecords} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>

                  <Route path="gatherMy" getComponent={GatherMy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的聚点加*/
                  <Route path="gatherMyDetail" getComponent={GatherMyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的聚点加详情*/
                  <Route path="gatherProjects/:id/:type" getComponent={GatherProjects} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的聚点加详情*/


                  <Route path="dcbRecords" component={DepositRecords} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="dcbRecordsB" component={DepositRecordsB} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="zt" component={MyDirectProjects} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的直投*/
                  <Route path='projectRecorde' component={ProjectRecorde} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route> /*直投记录*/
                  <Route path='zqTransferRule' component={ZqTransferRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='zqTransfer/:id' component={zqTransfer} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="detailDcb/:id" component={DetailsDc} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="detailsDcb/:id/:type" component={DetailsDcb} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="propertyDetail/:id" component={PropertyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*资产详情*/
                  <Route path='creditorRights/:id' component={CreditorRights} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*债权资产详情*/
                  <Route path='historyRecord/:id' component={HistoryRecord} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>
                  <Route path="zq" component={Creditors} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的债权*/
                  <Route path='zqPropertyDetail/:id' component={ZqPropertyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="ztRecords" component={CreditorsRecords} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的债权记录*/
                  <Route path="MyDemandIndex" component={MyDemandIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的零钱宝*/
                  <Route path="redPacket" component={redPacket} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的红包*/
                  <Route path="redPacketRule" component={redPacketRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的红包*/
                  <Route path="addRate" component={AddAccrualIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的加息券*/
                  <Route path="addRateUsed" component={pastAccrule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的过期加息券*/
                  <Route path="scratchesCard" component={ScratchesCard} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的刮刮卡*/
                  <Route path='guaguaList' component={GuaList} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="scratchesRule" component={ScratchesRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*刮刮卡规则*/
                  <Route path="vouchers" component={Vouchers} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的抵用券*/
                  <Route path="vouchersPast" component={VouchersPast} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的过期抵用券*/
                  <Route path="coinShop" component={CoinShop} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的点币*/
                  <Route path="coinsRecord" component={CoinsRecord} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的点币记录*/
                  <Route path="coinsRule" component={CoinsRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的点币规则*/
                  <Route path="goodsDetail/:id" component={GoodsDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币兑换商品详情页*/
                  <Route path="shopCenter" component={ShopCenter} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城中心*/
                  <Route path='shopCenterRule' component={shopCenterRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="activeConfirm" component={activeConfirm}/>/*点币商城确认兑换*/
                  <Route path="exchangeList" component={ExchangeList} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城兑换记录*/
                  <Route path="trueExchangeConfirm/:id" component={trueExchangeConfirm} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城确认兑换*/
                  <Route path="exchangeSuccess" component={ExchangeSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城兑换成功*/
                  <Route path="exchangeFail" component={ExchangeFail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城兑换失败*/
                  <Route path='ruleRate' component={ruleRate} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/> /*加息规则*/
                  <Route path='ruleVoucher' component={ruleVoucher} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/> /*抵用券规则*/
                  <Route path="cash" component={Cash} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*提现页面*/
                  <Route path="autoBuy" component={autoBuy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*自动投标*/
                  <Route path="autoBuyRule" component={autoBuyRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*自动投标*/
                  /*设置界面*/
                  <Route path="setting" component={Setting} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  /*已完成*/
                  <Route path="MyDemandRecords" component={MyDemandRecords}></Route>  /* 零钱宝记录*/
                  <Route path="demandReddem" component={DemandReddem}></Route>/*零钱宝赎回*/
                  <Route path='reddemSuccese' component={reddemSuccese}/> /*零钱宝赎回成功*/
                  <Route path="setting/securityCenter" component={SecurityCenter} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/* 安全中心*/
                  <Route path="setting/about" component={About} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*关于*/
                  <Route path="setting/versionInfo" component={VersionInfo}></Route>/*版本介绍*/
                  <Route path="setting/problems" component={Problems} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*常见问题*/
                  <Route path="setting/usernameModify" component={UserNameModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/* 修改用户名*/
                  <Route path="setting/securityCard" component={securityCard} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route> /* 安全卡*/
                  <Route path="setting/securityCardChangeApply" component={securityCardChangeApply}></Route> /* 安全卡申请页面*/
                  <Route path='setting/bankcardAdd' component={bankcardAddIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route> /*添加银行卡*/
                  <Route path="setting/mobileBindModify" component={MobileBindModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*修改绑定手机*/
                  <Route path="setting/loginPasswordModify" component={LoginPasswordModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*修改密码*/
                  <Route path="setting/tradePasswordSet" component={TradePasswordSet} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*设置交易密码*/
                  <Route path="setting/tradePasswordForget" component={TradePasswordForget} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*忘记交易密码*/
                  <Route path="setting/tradePasswordForget/verifyMobile" component={TradePasswordForgetVerifyMobile} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*验证手机*/
                  <Route path="setting/tradePasswordForget/new" component={tradePasswordNew} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*设置新交易密码 */
                  <Route path="setting/tradePasswordModify" component={TradePasswordModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*修改交易密码*/
                  <Route path="setting/mobileBindModify/new" component={MobileBindNew} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*绑定新手机*/
                  <Route path="setting/mobileBind" component={MobileBind} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*手机号码*/
                  <Route path="setting/identityAuth" component={IdentityAuth} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*身份认证*/
                  <Route path="setting/siteList" component={siteList} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*收货地址列表*/
                  <Route path="setting/siteAdd" component={siteAdd} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*收货地址新增*/
                  <Route path="setting/siteEdit" component={siteEdit} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*收货地址编辑*/
                  <Route path="setting/regStore" component={regStore} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*注册存储*/
                  <Route path="setting/regSToreSuccess" component={RegStoreSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*注册存管成功*/
                  <Route path="setting/cardBind" component={cardBind} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*绑定银行卡*/
                  <Route path="setting/bindSuccess" component={BindSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*绑定银行卡*/
                  <Route path="setting/verifyPhone" component={verifyPhone} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*验证手机号*/
                  <Route path="setting/choiceBank" component={choiceBank} ></Route>/*选择开户行*/
                  <Route path="setting/choicePoint" component={choicePoint} ></Route>/*选择网点*/

                  /*已完成*/

                  <Route path='cashsuccess' component={cashSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='withdrawals' components={Withdrawals} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="setting/feedback" component={FeedbackIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*意见反馈*/

                   <Route path="setting/Detail" component={Detail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                   <Route path="setting/about" component={About} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                   <Route path='productInfo/:id' component={ProductInfo} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>   /*直投产品信息*/
                  <Route path='zqProductInfo/:id' component={ZqProductInfo} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='zqSecurityPlan/:id' component={ZqSecurityPlan} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>
                  <Route path='securityPlan/:id' component={SecurityPlan} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/> /*直投安全保障计划*/
              </Route>
              /*发现*/
              <Route path='find' component={findIndex}>
                  <Route path="message" component={FindMessage} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="inviteFriends" component={InviteFriends} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="inviteParticulars" component={inviteParticulars} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="inviteRule" component={inviteRule}></Route>
                  <Route path="announcement" component={AnnounceMent} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="messagedetail" component={MessageDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
              </Route>

              /*已完成*/
              <Route path="login" component={Login}></Route>
              <Route path='weChat' component={WeChat}></Route>
              <Route path="register" component={Register}></Route>
              <Route path="registerVerifyMobile" component={RegisterVerifyMobile}></Route>
              <Route path='privacy' components={privacy}></Route>
              <Route path='service' components={service}></Route>
              <Route path="registerSuccess"  component={RegisterSuccess} />
              <Route path="registerSetPassword" component={RegisterSetPassword}></Route>
              <Route path="findpassword" component={Findpassword}></Route>
              <Route path="findpasswordSetPassword" component={FindpasswordSetPassword}></Route>
              /*已完成*/

            <Route path="safeplan" component={SafePlan} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="demand-related-projects/:id/:type" component={RelatedProjects} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="demand-invest-fail" component={DemandInvestFail}></Route>
            <Route path="demand-redeem" component={DemandRedeem}></Route>
            <Route path="demand-buy" component={DemandBuy}></Route>
            <Route path="demand-product" component={DemandProduct}></Route>
            <Route path="deposit-product(/:id/:type/:productId)" component={DepositProduct} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherMain(/:productId/:type)" component={GatherMain} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherDetail(/:name/:month)" getComponent={GatherDetail} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherDeposits(/:id)" getComponent={GatherDeposits} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherBidDetail(/:id)" getComponent={GatherBidDetail} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherBorrowDetail(/:id)" getComponent={GatherBorrowDetail} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherBackDetail(/:id)" getComponent={GatherBackDetail} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherInvestRecord(/:id)" getComponent={GatherInvestRecord} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherJoin(/:id)" getComponent={GatherJoin} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherProblems" getComponent={GatherProblems} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="gatherBuy(/:productId/:id)" getComponent={GatherBuy} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>

            <Route path="deposit-buy(/:id/:type/:productId)" component={DepositBuy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path='agreement' component={Agreement} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path="depositInvestSuccess/:type" component={DepositInvestSuccess}></Route>
            <Route path="directInvestDetails/:id" component={DirectInvestDetails}></Route>
            <Route path="directBuy(/:id(/:month))" component={DirectBuy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path="directInvestSuccess/:money" component={DirectInvestSuccess}></Route>
            <Route path="directContract" component={DirectContract}></Route>
            <Route path="creditorList" component={CreditorList}></Route>
            <Route path="creditorDetail/:id" component={CreditorDetail}></Route>
            <Route path="creditorBuy/:id" component={CreditorBuy}></Route>
            <Route path="creditorProtocol" component={CreditorProtocol}></Route>
            <Route path="creditorInvestSuccess/:type" component={CreditorInvestSuccess}></Route>
            <Route path="ChangePayPwd" component={ChangePayPwd}></Route>
            <Route path="CheckPhone" component={CheckPhone}></Route>
            <Route path="changeLoginPwd" component={ChangeLoginPwd}></Route>
            <Route path="ChangeUserName" component={ChangeUserName}></Route>
            <Route path="payWeb" component={PayWeb} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path="depositDetails" component={depositDetails} onLeave={(next)=>{Auth.isOut(store,next)}}/>
            <Route path="planDetails/:id/:type" component={planDetails} onLeave={(next)=>{Auth.isOut(store,next)}}/>
            <Route path="Verify" component={Verify}></Route>
            <Route path="pastAccrule" component={pastAccrule}></Route>

            <Route path="financiaIndex" component={financiaIndex}></Route>

            <Route path="financiaRecords" component={financiaRecords}></Route>
            <Route path="invite" component={Invite}></Route>

            <Route path='financialindex' component={financialIndex}></Route>
          </Route>
            <Redirect from='/*' to='/' />
        </Router>
      </Provider>
        )
    }
}
