webpackJsonp([69],{405:function(e,t,a){e.exports=a.p+"static/media/balance.d18885e9.png"},989:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),s=n(l),d=a(5),p=n(d),u=a(3),c=n(u),_=a(4),f=n(_),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),m=n(g),b=a(10),x=n(b),v=a(2426),y=n(v),k=a(9),N=a(405),w=n(N),B=a(18),E=n(B),I=a(47),C=n(I),S=a(19),T=a(8),O=a(13),M=n(O),A=a(26),z=n(A),R=a(21),D=n(R),F=a(58),J=n(F),L=a(103),Y=n(L),H=a(17),U=n(H),W=window.location.origin,Q=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||(0,f["default"])(t)).call(this,e));return a.goCash=function(e){var t=JSON.parse(sessionStorage.getItem("bao-store"));return t&&t.isAuthIdentity&&t.isSecurityCard?void a.money(e):void(t.isBindBankcard&&t.isRegister?a.money(e):t.isRegister?a.props.push("/user/setting/authorization"):a.refs.tip.show())},a.closeFn=function(){a.setState({payTop:"100%",url:""})},a.money=function(e){a.props.push("/user/withdrawalsOld")},a.recChange=function(e){var t=e.target.value,n=/^-?\d*\.?\d*$/;a.setState({recMoney:t}),n.test(t)&&""!=t?a.setState({disabled:!1}):(a.openTipbar("请输入正确的充值金额！"),a.setState({disabled:!0}))},a.cancel=function(e){a.setState(e)},a.pay=function(){return m["default"].createElement("div",{className:y["default"].rechargeBox,style:{top:a.state.payTop}},m["default"].createElement(Y["default"],{url:a.state.url,closeFn:a.closeFn,ref:"pay"}))},a.rechargeFn=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isAuthIdentity&&e.isSecurityCard?void a.refs.isAuth.isbindSecurityCard(a.hasCard,a.props.push,"/user/setting/securityCard"):void(e.isBindBankcard&&e.isRegister?a.refs.isAuth.isbindSecurityCard(a.hasCard,a.props.push,"/user/setting/securityCard"):a.refs.tip.show())},a.hasCard=function(){a.setState({top:"0px"})},a.submit=function(){a.setState({submite:!0}),a.props.submit()},a.pop=function(){var e=a.refs.pay.getTime();1!=e?a.props.push("/home/myIndex"):a.props.pop()},a.state={top:"100%",recMoney:"",disabled:!0,submite:!1,payTop:"100%",url:""},a}return o(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.update()}},{key:"componentDidMount",value:function(){window.closeFn=this.closeFn,this.props.load()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"componentWillReceiveProps",value:function(e){var t=e.cookie;if(t){var a=this.state.submite,n=this.state.recMoney,r=2,i="platform";a&&100==t.code?this.setState({submite:!1,payTop:"0px",url:U["default"].combineUrl(W+"/mobile_api/pay",{money:n,type:r,access_sys:i})}):a&&(this.setState({submite:!1}),this.openTipbar("提交失败!"))}}},{key:"loadDom",value:function(){return m["default"].createElement(E["default"],null)}},{key:"loadEndDom",value:function(e){var t=this,a=e.balance_platform;return m["default"].createElement("div",{className:(0,M["default"])(y["default"].recharge,y["default"].Boxing)},m["default"].createElement("img",{src:w["default"]}),m["default"].createElement("p",null,"我的余额"),m["default"].createElement("h1",null,"￥",a),m["default"].createElement("div",{className:y["default"].btnContent},m["default"].createElement("button",{className:y["default"].rechargeBtn,onClick:function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isAuthIdentity&&e.isSecurityCard?void t.rechargeFn():void(e.isBindBankcard&&e.isRegister?t.rechargeFn():e.isRegister?t.props.push("/user/setting/authorization"):t.refs.tip.show())}},"充值"),m["default"].createElement("button",{className:y["default"].depositBtn,onClick:function(){t.goCash(a)}},"提现")))}},{key:"recharge",value:function(){var e=this,t=this.state,a=t.top,n=t.recMoney,r=t.disabled;return m["default"].createElement("div",{className:y["default"].rechargeBox,style:{top:a}},m["default"].createElement(x["default"],{leftNode:m["default"].createElement("span",{className:y["default"].rechargeTitle},"取消"),style:K,onLeft:function(){e.cancel({top:"100%"})}},"余额充值"),m["default"].createElement("div",{className:y["default"].inputBox},m["default"].createElement("div",{className:y["default"].recInput},m["default"].createElement("span",null,"充值金额"),m["default"].createElement("span",null,m["default"].createElement("input",{placeholder:"请输入金额",value:n,onChange:this.recChange})),m["default"].createElement("span",null,"元")),m["default"].createElement("div",{className:(0,M["default"])(y["default"].recInput,y["default"].recName)},"连连支付"),m["default"].createElement("button",{className:y["default"].buttonNext,disabled:r,onClick:this.submit},"下一步")),m["default"].createElement(z["default"],{ref:"tipbar"}),m["default"].createElement(D["default"],{ref:"alert"}),m["default"].createElement(J["default"],{ref:"isAuth"}))}},{key:"openTipbar",value:function(e){this.refs.tipbar.open(e)}},{key:"render",value:function(){var e=this.props.balance,t=void 0;return t=e?this.loadEndDom(e.data):this.loadDom(),m["default"].createElement("div",{className:y["default"].bg},m["default"].createElement(x["default"],{onLeft:this.pop,rightNode:m["default"].createElement(S.Link,{className:y["default"].detail,to:"/user/moneyLogOld"},"余额明细"),style:K},"我的余额"),t,this.recharge(),this.pay(),m["default"].createElement(C["default"],{ref:"tip"}))}}]),t}(m["default"].Component),K={position:"absolute",top:"0px",left:"0px"},V=function(e,t){return{balance:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),cookie:e.infodata.getIn(["AUTH_COOKIE","data"])}},X=function(e,t){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})},pop:function(){e((0,T.goBack)())},submit:function(){e({type:"AUTH_COOKIE"})},push:function(t){e((0,T.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"AUTH_COOKIE"})},update:function(){e({type:"STORE_STATUS_INFO"})}}};t["default"]=(0,k.connect)(V,X)(Q)},1567:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,"*{padding:0;margin:0}.bg___2u9Qp{overflow:hidden}.bg___2u9Qp,.Boxing___1h2MA{position:absolute;left:0;top:0;width:100%;height:100%;background:#f0eff5}.Boxing___1h2MA{overflow:auto}.recharge___1kYlp{padding:0 15px;text-align:center;margin-top:44px}.recharge___1kYlp img{display:block;width:85px;height:85px;margin:83px auto 0}.recharge___1kYlp p{font-size:16px;color:#000;margin-top:13px}.recharge___1kYlp h1{margin:0;paddong:0;font-size:36px;color:#000;margin-top:17px;font-weight:400}.recharge___1kYlp button{display:block;width:100%;border-radius:3px;height:44px;margin:20px 0;font-size:16px}.btnContent___bh_6M{margin-top:40px}.rechargeBtn___uKoND{background:#00a6e2;border:1px solid #00a6e2;color:#fff}.depositBtn___2PvRb{background:#f8f8f8;border:1px solid #c6c6c6}.JsrechargeBtn___2SdOQ{background:#00a6e2;border:1px solid #00a6e2;color:#fff}.JsdepositBtn___1UrA2{background:#f8f8f8;border:1px solid #c6c6c6}.errorRecord___3WoVp{width:100%;margin-top:40px}.errorRecord___3WoVp img{display:block;width:160px;height:148px;margin:0 auto}.maskLayer___12dM8{top:100vh}.maskLayer___12dM8,.maskLayerShade___3lVGM{width:100%;height:100vh;position:fixed;left:0}.maskLayerShade___3lVGM{top:44px;-webkit-transition:all .3s;transition:all .3s}.listNav___2vgY1{width:100%;background:#fff;overflow:hidden;padding:10px 0 20px;position:absolute;left:0;top:0;z-index:5}.listNav___2vgY1 ul{list-style:none;overflow:hidden}.listNav___2vgY1 ul li{float:left;width:33%;text-align:center;margin-top:10px;font-size:14px;color:#626262}.listNav___2vgY1 ul li:nth-child(1),.listNav___2vgY1 ul li:nth-child(2),.listNav___2vgY1 ul li:nth-child(4),.listNav___2vgY1 ul li:nth-child(5){border-right:1px solid #ccc}.navOpcity___15FBo{width:100%;height:100%;z-index:2;background:#000;opacity:.6;position:absolute;top:0;left:0}.errorHint___HvJnu{background:#881a1b;height:34px;line-height:34px;font-size:15px;color:#fff}.errorHint___HvJnu img{width:21px;height:20px;position:relative;top:4px;padding:0 15px}.verifyInput___140xv{list-style:none;width:100%;background:#fff;padding-left:15px;margin-top:15px}.verifyInput___140xv li{padding:10px 0;font-size:16px;color:#000}.verifyInput___140xv li input{border:none;padding-left:12px;font-size:16px}.verifyInput___140xv li:first-child{border-bottom:1px solid #e5e5e5}.verifyBtn___XNeZ8{width:100%;padding:0 10px;margin-top:30px}.verifyBtn___XNeZ8 button{width:100%;background:#90d1ed;height:44px;border:none;color:#fff;font-size:14px;border-radius:5px}.inputBox___3IAWp{padding-top:30px}.recInput___1dpQi{background-color:#fff;border:1px solid #e4e4e4;height:44px;padding:0 15px;border-left:0;border-right:0}.recInput___1dpQi span{line-height:44px;font-size:14px;color:#888}.recInput___1dpQi input{height:38px;outline:none;margin-left:8px;width:calc(100% - 78px)}.rechargeBox___2MF9T{position:absolute;left:0;top:100%;width:100%;background-color:#f0eff5;height:100%;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;padding-top:44px}.rechargeTitle___3_C6j{padding-left:15px}.recName___1kKze{margin-top:20px;margin-bottom:10px;line-height:44px;font-size:16px;color:#00a6e2}.buttonNext___3DJDX{display:block;width:calc(100% - 30px);margin:0 auto;font-size:16px;background:#00a6e2;border:1px solid #00a6e2;color:#fff;height:44px;border-radius:3px}.buttonNext___3DJDX[disabled]{background-color:#90d2ed;border:1px solid #90d2ed}.detailContent___3Cwe4{margin-top:59px}.detail___1p1nI{font-size:14px;color:#fff}.iframe___32rnb{width:100%;height:100%;border:0}",""]),t.locals={bg:"bg___2u9Qp",Boxing:"Boxing___1h2MA",recharge:"recharge___1kYlp",btnContent:"btnContent___bh_6M",rechargeBtn:"rechargeBtn___uKoND",depositBtn:"depositBtn___2PvRb",JsrechargeBtn:"JsrechargeBtn___2SdOQ",JsdepositBtn:"JsdepositBtn___1UrA2",errorRecord:"errorRecord___3WoVp",maskLayer:"maskLayer___12dM8",maskLayerShade:"maskLayerShade___3lVGM",listNav:"listNav___2vgY1",navOpcity:"navOpcity___15FBo",errorHint:"errorHint___HvJnu",verifyInput:"verifyInput___140xv",verifyBtn:"verifyBtn___XNeZ8",inputBox:"inputBox___3IAWp",recInput:"recInput___1dpQi",rechargeBox:"rechargeBox___2MF9T",rechargeTitle:"rechargeTitle___3_C6j",recName:"recName___1kKze",buttonNext:"buttonNext___3DJDX",detailContent:"detailContent___3Cwe4",detail:"detail___1p1nI",iframe:"iframe___32rnb"}},2426:[2570,1567]});