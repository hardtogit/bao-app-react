webpackJsonp([44],{828:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),i=n(r),s=a(5),c=n(s),f=a(3),d=n(f),p=a(4),m=n(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),b=n(y),E=a(11),v=n(E),g=a(397),_=n(g),N=a(9),k=a(1680),C=n(k),T=a(19),w=n(T),I=a(22),S=a(10),x=a(21),O=n(x),F=a(16),M=n(F),A=a(33),D=n(A),B=a(23),L=n(B),U=a(90),H=n(U),R=a(212),W=n(R),j=a(20),K=n(j),P=window.location.origin,G=function(e){function t(e){l(this,t);var a=u(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.closeFn=function(){a.setState({payTop:"100%",url:""})},a.money=function(e){var t=sessionStorage.getItem("bao-bank");parseFloat(e)<50?a.refs.alert.show({content:"对不起余额不足！",okText:"确定"}):null!=t?a.props.push("/user/withdrawals"):a.props.push("/user/setting/securityCard")},a.recChange=function(e){var t=e.target.value,n=/^-?\d*\.?\d*$/;a.setState({recMoney:t}),n.test(t)&&""!=t?a.setState({disabled:!1}):(a.openTipbar("请输入正确的充值金额！"),a.setState({disabled:!0}))},a.cancel=function(e){a.setState(e)},a.pay=function(){return b["default"].createElement("div",{className:_["default"].rechargeBox,style:{top:a.state.payTop}},b["default"].createElement(W["default"],{url:a.state.url,closeFn:a.closeFn,ref:"pay"}))},a.rechargeFn=function(){a.refs.isAuth.isbindSecurityCard(a.hasCard,a.props.push,"/user/setting/securityCard")},a.hasCard=function(){a.setState({top:"0px"})},a.submit=function(){a.setState({submite:!0}),a.props.submit()},a.pop=function(){var e=a.refs.pay.getTime();1!=e?a.props.push("/home/myIndex"):a.props.pop()},a.state={top:"100%",recMoney:"",disabled:!0,submite:!1,payTop:"100%",url:""},a}return o(t,e),h(t,[{key:"componentDidMount",value:function(){window.closeFn=this.closeFn,this.props.load()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"componentWillReceiveProps",value:function(e){var t=e.cookie;if(t){var a=this.state.submite,n=this.state.recMoney,l=2;a&&100==t.code?this.setState({submite:!1,payTop:"0px",url:K["default"].combineUrl(P+"/mobile_api/pay",{money:n,type:l})}):a&&(this.setState({submite:!1}),this.openTipbar("提交失败!"))}}},{key:"loadDom",value:function(){return b["default"].createElement(w["default"],null)}},{key:"loadEndDom",value:function(e){var t=this,a=e.balance;return b["default"].createElement("div",{className:(0,M["default"])(_["default"].recharge,_["default"].Boxing)},b["default"].createElement("img",{src:C["default"]}),b["default"].createElement("p",null,"我的余额"),b["default"].createElement("h1",null,"￥",a),b["default"].createElement("div",{className:_["default"].btnContent},b["default"].createElement("button",{className:_["default"].rechargeBtn,onClick:this.rechargeFn},"充值"),b["default"].createElement("button",{className:_["default"].depositBtn,onClick:function(){t.money(a)}},"提现")))}},{key:"recharge",value:function(){var e=this,t=this.state,a=t.top,n=t.recMoney,l=t.disabled;return b["default"].createElement("div",{className:_["default"].rechargeBox,style:{top:a}},b["default"].createElement(v["default"],{leftNode:b["default"].createElement("span",{className:_["default"].rechargeTitle},"取消"),style:J,onLeft:function(){e.cancel({top:"100%"})}},"余额充值"),b["default"].createElement("div",{className:_["default"].inputBox},b["default"].createElement("div",{className:_["default"].recInput},b["default"].createElement("span",null,"充值金额"),b["default"].createElement("span",null,b["default"].createElement("input",{placeholder:"请输入金额",value:n,onChange:this.recChange})),b["default"].createElement("span",null,"元")),b["default"].createElement("div",{className:(0,M["default"])(_["default"].recInput,_["default"].recName)},"连连支付"),b["default"].createElement("button",{className:_["default"].buttonNext,disabled:l,onClick:this.submit},"下一步")),b["default"].createElement(D["default"],{ref:"tipbar"}),b["default"].createElement(L["default"],{ref:"alert"}),b["default"].createElement(H["default"],{ref:"isAuth"}))}},{key:"openTipbar",value:function(e){this.refs.tipbar.open(e)}},{key:"render",value:function(){var e=this.props.balance,t=void 0;return t=e?this.loadEndDom(e.data):this.loadDom(),b["default"].createElement("div",{className:_["default"].bg},b["default"].createElement(v["default"],{onLeft:this.pop,rightNode:b["default"].createElement(I.Link,{className:_["default"].detail,to:"/user/moneyLog"},"余额明细"),style:J},"我的余额"),t,this.recharge(),this.pay())}}]),t}(b["default"].Component),J={position:"absolute",top:"0px",left:"0px"},$=function(e,t){return{balance:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),cookie:e.infodata.getIn(["AUTH_COOKIE","data"])}},q=function(e,t){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})},pop:function(){e((0,S.goBack)())},submit:function(){e({type:"AUTH_COOKIE"})},push:function(t){e((0,S.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"AUTH_COOKIE"})}}};t["default"]=(0,N.connect)($,q)((0,O["default"])(G))},970:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(828),u=n(l);t["default"]=u["default"]},1680:function(e,t,a){e.exports=a.p+"static/media/balance.d18885e9.png"}});