webpackJsonp([76],{382:function(e,t,a){e.exports=a.p+"static/media/balance.d18885e9.png"},922:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),u=n(s),i=a(5),c=n(i),d=a(3),p=n(d),f=a(4),m=n(f),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),b=n(y),g=a(11),E=n(g),v=a(441),_=n(v),k=a(10),N=a(382),I=n(N),w=a(18),C=n(w),T=a(45),S=n(T),O=a(20),U=a(9),x=a(14),B=n(x),D=a(27),R=n(D),A=a(21),F=n(A),M=a(56),L=n(M),H=a(102),P=n(H),W=a(17),q=n(W),J=window.location.origin,j=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.goCash=function(e){var t=a,n=JSON.parse(sessionStorage.getItem("bao-store"));if(n.isBindBankcard&&n.isRegister){if(n.isUploadIdcard)t.money(e);else if(t.props.uploadData)if(100==t.props.uploadData.code)switch(t.props.uploadData.data.status){case"-1":t.refs.alert.show({content:"审核失败",okText:"重新上传",okCallback:function(){t.props.push("/user/IdCardUpload")}});break;case"0":t.refs.alert.show({content:"审核中，请稍后再试",okText:"确定"}),t.props.queryUpload();break;case"1":t.money(e);break;case"9":t.props.push("/user/IdCardUpload");break;default:t.props.push("/user/IdCardUpload")}else t.refs.alert.show({content:"审核中，请稍后再试",okText:"确定"}),t.props.queryUpload()}else n.isRegister?a.props.push("/user/setting/cardBind"):a.refs.tip.show()},a.closeFn=function(){a.setState({payTop:"100%",url:""})},a.money=function(e){a.props.push("/user/withdrawals")},a.recChange=function(e){var t=e.target.value,n=/^-?\d*\.?\d*$/;a.setState({recMoney:t}),n.test(t)&&""!=t?a.setState({disabled:!1}):(a.openTipbar("请输入正确的充值金额！"),a.setState({disabled:!0}))},a.cancel=function(e){a.setState(e)},a.pay=function(){return b["default"].createElement("div",{className:_["default"].rechargeBox,style:{top:a.state.payTop}},b["default"].createElement(P["default"],{url:a.state.url,closeFn:a.closeFn,ref:"pay"}))},a.rechargeFn=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));e.isBindBankcard&&e.isRegister?a.refs.isAuth.isbindSecurityCard(a.hasCard,a.props.push,"/user/setting/securityCard"):a.refs.tip.show()},a.hasCard=function(){a.setState({top:"0px"})},a.submit=function(){a.setState({submite:!0}),a.props.submit()},a.pop=function(){var e=a.refs.pay.getTime();1!=e?a.props.push("/home/myIndex"):a.props.pop()},a.state={top:"100%",recMoney:"",disabled:!0,submite:!1,payTop:"100%",url:""},a}return l(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.update(),this.props.queryUpload()}},{key:"componentDidMount",value:function(){window.closeFn=this.closeFn,this.props.load()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"componentWillReceiveProps",value:function(e){var t=e.cookie;if(t){var a=this.state.submite,n=this.state.recMoney,o=2;a&&100==t.code?this.setState({submite:!1,payTop:"0px",url:q["default"].combineUrl(J+"/mobile_api/pay",{money:n,type:o})}):a&&(this.setState({submite:!1}),this.openTipbar("提交失败!"))}}},{key:"loadDom",value:function(){return b["default"].createElement(C["default"],null)}},{key:"loadEndDom",value:function(e){var t=this,a=e.balance;return b["default"].createElement("div",{className:(0,B["default"])(_["default"].recharge,_["default"].Boxing)},b["default"].createElement("img",{src:I["default"]}),b["default"].createElement("p",null,"我的余额"),b["default"].createElement("h1",null,"￥",a),b["default"].createElement("div",{className:_["default"].btnContent},b["default"].createElement("button",{className:_["default"].rechargeBtn,onClick:function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));e.isBindBankcard&&e.isRegister?t.props.push("/user/newRecharge"):e.isRegister?t.props.push("/user/setting/cardBind"):t.refs.tip.show()}},"充值"),b["default"].createElement("button",{className:_["default"].depositBtn,onClick:function(){t.goCash(a)}},"提现")))}},{key:"recharge",value:function(){var e=this,t=this.state,a=t.top,n=t.recMoney,o=t.disabled;return b["default"].createElement("div",{className:_["default"].rechargeBox,style:{top:a}},b["default"].createElement(E["default"],{leftNode:b["default"].createElement("span",{className:_["default"].rechargeTitle},"取消"),style:K,onLeft:function(){e.cancel({top:"100%"})}},"余额充值"),b["default"].createElement("div",{className:_["default"].inputBox},b["default"].createElement("div",{className:_["default"].recInput},b["default"].createElement("span",null,"充值金额"),b["default"].createElement("span",null,b["default"].createElement("input",{placeholder:"请输入金额",value:n,onChange:this.recChange})),b["default"].createElement("span",null,"元")),b["default"].createElement("div",{className:(0,B["default"])(_["default"].recInput,_["default"].recName)},"连连支付"),b["default"].createElement("button",{className:_["default"].buttonNext,disabled:o,onClick:this.submit},"下一步")),b["default"].createElement(R["default"],{ref:"tipbar"}),b["default"].createElement(F["default"],{ref:"alert"}),b["default"].createElement(L["default"],{ref:"isAuth"}))}},{key:"openTipbar",value:function(e){this.refs.tipbar.open(e)}},{key:"render",value:function(){var e=this.props.balance,t=void 0;return t=e?this.loadEndDom(e.data):this.loadDom(),b["default"].createElement("div",{className:_["default"].bg},b["default"].createElement(E["default"],{onLeft:this.pop,rightNode:b["default"].createElement(O.Link,{className:_["default"].detail,to:"/user/moneyLog"},"余额明细"),style:K},"我的余额"),t,this.recharge(),this.pay(),b["default"].createElement(S["default"],{ref:"tip"}))}}]),t}(b["default"].Component),K={position:"absolute",top:"0px",left:"0px"},G=function(e,t){return{balance:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),cookie:e.infodata.getIn(["AUTH_COOKIE","data"]),uploadData:e.infodata.getIn(["QUERY_UPLOAD","data"])}},Q=function(e,t){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})},pop:function(){e((0,U.goBack)())},submit:function(){e({type:"AUTH_COOKIE"})},push:function(t){e((0,U.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"AUTH_COOKIE"})},update:function(){e({type:"STORE_STATUS_INFO"})},queryUpload:function(){e({type:"QUERY_UPLOAD"})}}};t["default"]=(0,k.connect)(G,Q)(j)},1093:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(922),r=n(o);t["default"]=r["default"]}});