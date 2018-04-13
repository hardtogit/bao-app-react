import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerMiddleware,analyticsService} from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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
import ProductList from './pages/active/productList'//无用
// 主页
import homeIndex from './pages/home/index'//首页
//发现模块
import findIndex from './pages/find'
// 我的模块
import choicePoint from './pages/my/setting/choicePoint'
import choiceBank from './pages/my/setting/choiceBank'
import {Analysis,Calendar,CalendarMonths,Recharge,MoneyLog,MyDCB,MyDCBB,ZqRecords,GuaList,GoodsDetail,ShopCenter,SecurityPlan,ZqSecurityPlan,
ProductInfo, ZqProductInfo,DepositRecords,DepositRecordsB,MyDirectProjects,ProjectRecorde,ZqTransferRule,ScratchesCard,FridayActivity,
AddAccrualIndex,CoinShop,DetailsDcb,DetailsDc,PropertyDetail,ZqPropertyDetail} from './pages/routeComponent/userComponent'
import {DepositBuy,DirectBuy,DirectInvestDetails,DepositProduct,GatherMain} from './pages/routeComponent/depositComponent'
import {ProductIndex,FindHome,MyIndex} from './pages/routeComponent/homeComponent'
import {Login,WeChat,Register,RegisterVerifyMobile,RegisterSuccess,RegisterSetPassword,Findpassword,FindpasswordSetPassword,SafePlan,Agreement}from './pages/routeComponent/accountComponent'
import {NewCharge,ReChargeOld,CashOld,CreditorBuyOld,ReChargeSuccess,ReChargeFail,IdCardUpload,IdCardUploadExplain,
    SuccessTemplate,DangerContract,ServiceContract,BorrowContract,StoreContract,MyBankCard,RiskEvaluation,RiskEvaluationQuestion,
    BankCardManage,ChoiceMyCard,AutoBuyIndex,MoneyLogOld,DepositInvestSuccessOld,
    ReChangeMain,OldCharge,CashMain,CashLog,CashRule,ReChargeRule,ReChargeLog,Main,BankPage,Authorization
} from './loadTool'

/****mine****/
import {Setting,NewRegStore,CardBind,BindSuccess,VerifyPhone,RegStoreSuccess,UserNameModify,
    SecurityCenter,LoginPasswordModify,TradePasswordSet,TradePasswordModify,TradePasswordForgetVerifyMobile,
    TradePasswordForget,MobileBind,MobileBindNew,MobileBindModify,Problems,IdentityAuth,BankcardAddIndex,TradePasswordNew,
    Active ,ScratchesRule, FridayActivityRule ,Cash ,User, RuleRate ,RuleVoucher, FinancialIndex, FeedbackIndex ,Withdrawals,
    CashSuccess, Privacy, Service ,ShopCenterRule,SecurityCardChangeApply,SiteList,SiteAdd,SiteEdit,
    Detail,Verify,Creditors,CreditorsRecords,MyDemandIndex,MyDemandRecords,DemandReddem,ReddemSuccese,CreditorRights,HistoryRecord,About,
    VersionInfo,PastAccrule,CoinsRecord,ExchangeList,CoinsRule,TrueExchangeConfirm,ActiveConfirm,ExchangeSuccess,ExchangeFail,
    Vouchers,VouchersPast,FinanciaIndex,FinanciaRecords,RedPacket,RedPacketRule,SecurityCard,AutoBuy,AutoBuyRule,
    CheckPhone,ChangeLoginPwd,ChangeUserName,ChangePayPwd
}from "./loadTool/mine"
/****find****/
import { FindNotify,ShoppingMall,MemberCenter,ShopProductList,ShopHistoryRecord,ShopMessage,ShopMessageDetail,CashDetail,
    MoreBasic,Help,TicketRule,RateTicketRule,TicketDetail,InviteFriends,Messages,AnnounceMent,MessageDetail,Preheat,
    PreheatConfirm,InviteRule,InviteParticulars,HotActivity,Address,EditAddress,AddAddress,ProductDetail,ProductCash,
    BasicPrivaligeDetail,OverallRule
} from './loadTool/find';
/****product****/
import{GatherDetail,GatherDeposits,GatherProblems,GatherJoin,GatherBuy,GatherBidDetail,GatherBorrowDetail,
    GatherBackDetail,GatherInvestRecord,GatherMy,GatherMyDetail,GatherProjects,DirectBuyOld,DepositDetails,
    PlanDetails,ZqTransfer,
    DirectInvestSuccess ,DirectContract, PayWeb, DepositInvestSuccess, CreditorList, CreditorDetail ,CreditorBuy ,CreditorProtocol,
    CreditorInvestSuccess, RelatedProjects, DemandInvestFail,DemandRedeem, DemandBuy, DemandProduct,WisdomMain,WisdomBuy,
    WisdomMy,WisdomRecord,WisdomMyDetail,WisdomMyMain,EmptyTemplate
} from './loadTool/product'
import{IndexTab
} from './loadTool/index'
// 工厂方法创建saga中间件
// const a=window.location.href.split('.')[1]+'.cn';
// document.domain = a;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,composeWithDevTools(), applyMiddleware(
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
              <Route path="serviceContract/:id/:type" getComponent={ServiceContract}></Route>
              <Route path="borrowContract/:id/:type" getComponent={BorrowContract}></Route>
              <Route path="storeContract" getComponent={StoreContract}></Route>

              <Route path="emptyTemplate/:type" getComponent={EmptyTemplate}></Route>
              <IndexRedirect to="home" />
              <Route path="home" getComponent={IndexTab} onLeave={(next)=>{Auth.isOut(store,next)}}>
                  <IndexRoute component={homeIndex}/>
                  <Route path='productIndex' component={ProductIndex}/>
                  <Route path='findIndex' component={FindHome}/>
                  <Route path='myIndex' component={MyIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>
              </Route>
              <Route path='/productList' component={ProductList}/>
              <Route path="user" getComponent={User} >
                  <Route path="preheat" getComponent={Preheat}></Route>
                  <Route path="preheatConfirm/:id" getComponent={PreheatConfirm} ></Route>
                  <Route path='active' getComponent={Active} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*资产分析*/
                  <Route path='analysis' component={Analysis} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*资产分析*/
                  <Route path="calendar(/:year(/:month))" component={Calendar} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*回款日历*/
                  <Route path="calendarMonths/:year/:month" component={CalendarMonths} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*回款日历日期选择*/
                  <Route path="recharge" component={Recharge} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值*/
                  <Route path="rechargeOld" getComponent={ReChargeOld} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值老主页*/
                  <Route path="rechargeMain" getComponent={ReChangeMain} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值总页面*/
                  <Route path="main" getComponent={Main} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值总页面*/
                  <Route path="rechargeLog/:type" getComponent={ReChargeLog} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值总页面*/
                  <Route path="reChargeRule" getComponent={ReChargeRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*充值规则*/
                  <Route path="newRecharge" getComponent={NewCharge} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*新充值*/
                  <Route path="oldRecharge" getComponent={OldCharge} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*老充值*/
                  <Route path="reChargeSuccess" getComponent={ReChargeSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*新充值成功*/
                  <Route path="reChargeFail" getComponent={ReChargeFail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*新充值失败*/
                  <Route path="idCardUpload" getComponent={IdCardUpload} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*身份证上传*/
                  <Route path="idCardUploadExplain" getComponent={IdCardUploadExplain} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*身份证上传说明*/
                  <Route path="moneyLog" component={MoneyLog} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*余额明细*/
                  <Route path="moneyLogOld" getComponent={MoneyLogOld} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*余额明细老*/
                  <Route path="dcb" component={MyDCB} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的定存宝*/
                  <Route path="dcbB" component={MyDCBB} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的定存宝*/
                  <Route path='zqRecords' component={ZqRecords} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>

                  <Route path="gatherMy" getComponent={GatherMy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的聚点加*/
                  <Route path="gatherMyDetail" getComponent={GatherMyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的聚点加详情*/
                  <Route path="gatherProjects/:id/:type" getComponent={GatherProjects} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的聚点加详情*/
                  <Route path="wisdomMy" getComponent={WisdomMy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的智享计划*/
                  <Route path="wisdomRecord" getComponent={WisdomRecord} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*智享计划列表*/
                  <Route path="wisdomMyDetail/:id" getComponent={WisdomMyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*智享计划列表*/
                  <Route path="wisdomMyMain/:id" getComponent={WisdomMyMain} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*智享计划列表*/

                  <Route path="dcbRecords" component={DepositRecords} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="dcbRecordsB" component={DepositRecordsB} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="zt" component={MyDirectProjects} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的直投*/
                  <Route path='projectRecorde' component={ProjectRecorde} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route> /*直投记录*/
                  <Route path='zqTransferRule' component={ZqTransferRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='zqTransfer/:id' getComponent={ZqTransfer} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="detailDcb/:id" component={DetailsDc} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="detailsDcb/:id/:type" component={DetailsDcb} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="propertyDetail/:id" component={PropertyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*资产详情*/
                  <Route path='creditorRights/:id' getComponent={CreditorRights} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*债权资产详情*/
                  <Route path='historyRecord/:id' getComponent={HistoryRecord} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>
                  <Route path="zq" getComponent={Creditors} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的债权*/
                  <Route path='zqPropertyDetail/:id' component={ZqPropertyDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="ztRecords" getComponent={CreditorsRecords} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的债权记录*/
                  <Route path="MyDemandIndex" getComponent={MyDemandIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的零钱宝*/
                  <Route path="redPacket" getComponent={RedPacket} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的红包*/
                  <Route path="redPacketRule" getComponent={RedPacketRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的红包*/
                  <Route path="addRate" component={AddAccrualIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的加息券*/
                  <Route path="addRateUsed" getComponent={PastAccrule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的过期加息券*/
                  <Route path="scratchesCard" component={ScratchesCard} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的刮刮卡*/
                  <Route path="fridayActivity" component={FridayActivity} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的刮刮卡*/
                  <Route path="fridayActivityRule" getComponent={FridayActivityRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的刮刮卡*/
                  <Route path='guaguaList' component={GuaList} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="scratchesRule" getComponent={ScratchesRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*刮刮卡规则*/
                  <Route path="vouchers" getComponent={Vouchers} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的抵用券*/
                  <Route path="vouchersPast" getComponent={VouchersPast} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的过期抵用券*/
                  <Route path="coinShop" component={CoinShop} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的点币*/
                  <Route path="coinsRecord" getComponent={CoinsRecord} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的点币记录*/
                  <Route path="coinsRule" getComponent={CoinsRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的点币规则*/
                  <Route path="goodsDetail/:id" component={GoodsDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币兑换商品详情页*/
                  <Route path="shopCenter" component={ShopCenter} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城中心*/
                  <Route path='shopCenterRule' getComponent={ShopCenterRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="activeConfirm" getComponent={ActiveConfirm}/>/*点币商城确认兑换*/
                  <Route path="exchangeList" getComponent={ExchangeList} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城兑换记录*/
                  <Route path="trueExchangeConfirm/:id" getComponent={TrueExchangeConfirm} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城确认兑换*/
                  <Route path="exchangeSuccess" getComponent={ExchangeSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城兑换成功*/
                  <Route path="exchangeFail" getComponent={ExchangeFail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>/*点币商城兑换失败*/
                  <Route path='ruleRate' getComponent={RuleRate} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/> /*加息规则*/
                  <Route path='ruleVoucher' getComponent={RuleVoucher} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/> /*抵用券规则*/
                  <Route path="cash" getComponent={Cash} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*提现页面*/
                  <Route path="choiceMyCard" getComponent={ChoiceMyCard} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*提现选择银行卡*/
                  <Route path="autoBuy" getComponent={AutoBuyIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*自动投标*/
                  <Route path="autoBuyRule" getComponent={AutoBuyRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*自动投标*/
                  /*设置界面*/
                  <Route path="setting" getComponent={Setting} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  /*已完成*/
                  <Route path="MyDemandRecords" component={MyDemandRecords}></Route>  /* 零钱宝记录*/
                  <Route path="demandReddem" getComponent={DemandReddem}></Route>/*零钱宝赎回*/
                  <Route path='reddemSuccese' getComponent={ReddemSuccese}/> /*零钱宝赎回成功*/
                  <Route path="setting/securityCenter" getComponent={SecurityCenter} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/* 安全中心*/
                  <Route path="setting/about" getComponent={About} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*关于*/
                  <Route path="setting/versionInfo" getComponent={VersionInfo}></Route>/*版本介绍*/
                  <Route path="setting/problems" getComponent={Problems} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*常见问题*/
                  <Route path="setting/usernameModify" getComponent={UserNameModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/* 修改用户名*/
                  <Route path="setting/securityCard" getComponent={SecurityCard} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route> /* 安全卡*/
                  <Route path="setting/securityCardChangeApply" getComponent={SecurityCardChangeApply}></Route> /* 安全卡申请页面*/
                  <Route path='setting/bankcardAdd' getComponent={BankcardAddIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route> /*添加银行卡*/
                  <Route path="setting/mobileBindModify" getComponent={MobileBindModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*修改绑定手机*/
                  <Route path="setting/loginPasswordModify" getComponent={LoginPasswordModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*修改密码*/
                  <Route path="setting/tradePasswordSet" getComponent={TradePasswordSet} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*设置交易密码*/
                  <Route path="setting/tradePasswordForget" getComponent={TradePasswordForget} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*忘记交易密码*/
                  <Route path="setting/tradePasswordForget/verifyMobile" getComponent={TradePasswordForgetVerifyMobile} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*验证手机*/
                  <Route path="setting/tradePasswordForget/new" getComponent={TradePasswordNew} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*设置新交易密码 */
                  <Route path="setting/tradePasswordModify" getComponent={TradePasswordModify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*修改交易密码*/
                  <Route path="setting/mobileBindModify/new" getComponent={MobileBindNew} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*绑定新手机*/
                  <Route path="setting/mobileBind" getComponent={MobileBind} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*手机号码*/
                  <Route path="setting/identityAuth" getComponent={IdentityAuth} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*身份认证*/
                  <Route path="setting/siteList" getComponent={SiteList} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*收货地址列表*/
                  <Route path="setting/siteAdd" getComponent={SiteAdd} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*收货地址新增*/
                  <Route path="setting/siteEdit" getComponent={SiteEdit} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*收货地址编辑*/
                  <Route path="setting/regStore" getComponent={NewRegStore} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*注册存储*/
                  <Route path="setting/authorization" getComponent={Authorization} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*注册存储*/
                  <Route path="setting/bankPage" getComponent={BankPage} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*注册存储*/
                  <Route path="setting/regSToreSuccess" getComponent={RegStoreSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*注册存管成功*/
                  <Route path="setting/cardBind" getComponent={CardBind} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*绑定银行卡*/
                  <Route path="setting/bindSuccess" getComponent={BindSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*绑定银行卡*/
                  <Route path="setting/verifyPhone" getComponent={VerifyPhone} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*验证手机号*/
                  <Route path="setting/choiceBank" component={choiceBank} ></Route>/*选择开户行*/
                  <Route path="setting/choicePoint" component={choicePoint} ></Route>/*选择网点*/
                  <Route path="setting/myBankCard" getComponent={MyBankCard} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*我的银行卡*/
                  <Route path="setting/bankCardManage/:color" getComponent={BankCardManage} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*银行卡管理*/
                  <Route path="setting/riskEvaluation" getComponent={RiskEvaluation}></Route>/*风险测评*/
                  <Route path="setting/riskEvaluationQuestion" getComponent={RiskEvaluationQuestion}></Route>/*风险测评*/
                  /*已完成*/

                  <Route path='cashsuccess' getComponent={CashSuccess} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='withdrawals' getComponent={Withdrawals} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='withdrawalsOld' getComponent={CashOld} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='cashMain' getComponent={CashMain} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='cashLog/:type' getComponent={CashLog} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='cashRule' getComponent={CashRule} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="setting/feedback" getComponent={FeedbackIndex} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>/*意见反馈*/

                   <Route path="setting/Detail" getComponent={Detail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                   <Route path="setting/about" component={About} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                   <Route path='productInfo/:id' component={ProductInfo} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>   /*直投产品信息*/
                  <Route path='zqProductInfo/:id' component={ZqProductInfo} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path='zqSecurityPlan/:id' component={ZqSecurityPlan} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/>
                  <Route path='securityPlan/:id' component={SecurityPlan} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}/> /*直投安全保障计划*/
              </Route>
              /*发现*/
              <Route path='find' component={findIndex}>
                  <Route path="notify" getComponent={FindNotify} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="shoppingMall" getComponent={ShoppingMall}></Route>
                  <Route path="shoppingMall/productList" getComponent={ShopProductList}></Route>
                  <Route path="shoppingMall/shopHistoryRecord" getComponent={ShopHistoryRecord}></Route>
                  <Route path="shoppingMall/shopMessage" getComponent={ShopMessage}></Route>
                  <Route path="shoppingMall/shopMessageDetail/:id" getComponent={ShopMessageDetail}></Route>
                  <Route path="shoppingMall/cashDetail/:id" getComponent={CashDetail}></Route>
                  <Route path="memberCenter" getComponent={MemberCenter}></Route>
                  <Route path="moreBasic" getComponent={MoreBasic}></Route>
                  <Route path="help" getComponent={Help}></Route>
                  <Route path="ticketRule" getComponent={TicketRule}></Route>
                  <Route path="rateTicketRule/:id" getComponent={RateTicketRule}></Route>
                  <Route path="ticketDetail" getComponent={TicketDetail}></Route>
                  <Route path="hotActivity" getComponent={HotActivity}></Route>
                  <Route path="address" getComponent={Address}  onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="editAddress" getComponent={EditAddress}  onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="addAddress" getComponent={AddAddress}  onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="basicPrivaligeDetail" getComponent={BasicPrivaligeDetail}></Route>
                  <Route path="overallRule" getComponent={OverallRule}></Route>
                  <Route path="productDetail/:id" getComponent={ProductDetail} ></Route>
                  <Route path="productCash/:product_id/:num" getComponent={ProductCash}  onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="inviteFriends" getComponent={InviteFriends} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="messages" getComponent={Messages}  onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="inviteParticulars" getComponent={InviteParticulars} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="inviteRule" getComponent={InviteRule}></Route>
                  <Route path="announcement" getComponent={AnnounceMent} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
                  <Route path="messagedetail" getComponent={MessageDetail} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
              </Route>

              /*已完成*/
              <Route path="login" component={Login}></Route>
              <Route path='weChat' component={WeChat}></Route>
              <Route path="register" component={Register}></Route>
              <Route path="registerVerifyMobile" component={RegisterVerifyMobile}></Route>
              <Route path='privacy' getComponent={Privacy}></Route>
              <Route path='service' getComponent={Service}></Route>
              <Route path="registerSuccess"  component={RegisterSuccess} />
              <Route path="registerSetPassword" component={RegisterSetPassword}></Route>
              <Route path="findpassword" component={Findpassword}></Route>
              <Route path="findpasswordSetPassword" component={FindpasswordSetPassword}></Route>
              /*已完成*/
             /*聚点债转*/
            <Route path="wisdomMain(/:productId)" getComponent={WisdomMain} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="wisdomBuy(/:productId)" getComponent={WisdomBuy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="safeplan" component={SafePlan} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="demand-related-projects/:id/:type" getComponent={RelatedProjects} onLeave={(next)=>{Auth.isOut(store,next)}}></Route>
            <Route path="demand-invest-fail" getComponent={DemandInvestFail}></Route>
            <Route path="demand-redeem" getComponent={DemandRedeem}></Route>
            <Route path="demand-buy" getComponent={DemandBuy}></Route>
            <Route path="demand-product" getComponent={DemandProduct}></Route>
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
            <Route path="depositInvestSuccess/:type" getComponent={DepositInvestSuccess}></Route>
            <Route path="depositInvestSuccessOld/:type" getComponent={DepositInvestSuccessOld}></Route>
            <Route path="directInvestDetails/:id" component={DirectInvestDetails}></Route>
            <Route path="directBuy(/:id(/:month))" component={DirectBuy} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path="directBuyOld(/:id(/:month))" getComponent={DirectBuyOld} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path="directInvestSuccess/:money" getComponent={DirectInvestSuccess}></Route>
            <Route path="directContract" getComponent={DirectContract}></Route>
            <Route path="creditorList" getComponent={CreditorList}></Route>
            <Route path="creditorDetail/:id" getComponent={CreditorDetail}></Route>
            <Route path="creditorBuy/:id" getComponent={CreditorBuy}></Route>
            <Route path="creditorBuyOld/:id" getComponent={CreditorBuyOld}></Route>
            <Route path="creditorProtocol" getComponent={CreditorProtocol}></Route>
            <Route path="creditorInvestSuccess/:type" getComponent={CreditorInvestSuccess}></Route>
            <Route path="ChangePayPwd" getComponent={ChangePayPwd}></Route>
            <Route path="CheckPhone" getComponent={CheckPhone}></Route>
            <Route path="changeLoginPwd" getComponent={ChangeLoginPwd}></Route>
            <Route path="ChangeUserName" getComponent={ChangeUserName}></Route>
            <Route path="payWeb" getComponent={PayWeb} onEnter={(nextState,replace)=>{Auth.isLogined(store,nextState,replace)}}></Route>
            <Route path="depositDetails" getComponent={DepositDetails} onLeave={(next)=>{Auth.isOut(store,next)}}/>
            <Route path="planDetails/:id/:type" getComponent={PlanDetails} onLeave={(next)=>{Auth.isOut(store,next)}}/>
            <Route path="Verify" getComponent={Verify}></Route>
            <Route path="pastAccrule" getComponent={PastAccrule}></Route>
            <Route path="financiaIndex" getComponent={FinanciaIndex}></Route>
            <Route path="financiaRecords" getComponent={FinanciaRecords}></Route>
            <Route path="invite" getComponent={InviteFriends}></Route>
            <Route path='financialindex' getComponent={FinancialIndex}></Route>
          </Route>
            <Redirect from='/*' to='/' />
        </Router>
      </Provider>
        )
    }
}
