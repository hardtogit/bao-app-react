webpackJsonp([74],{39:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,_,c=a(2),d=n(c),s=a(5),u=n(s),f=a(3),p=n(f),m=a(4),h=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),x=a(8),w=(n(x),a(38)),y=(n(w),a(36)),S=(n(y),a(35)),E=(n(S),a(21)),k=a(9),N=n(k),L=(_=i=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.show=function(){a.setState({show:!0})},a.hide=function(){a.setState({show:!1})},a.clearTimer=function(){},a.state={show:!1},a}return l(t,e),b(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=void 0,t=JSON.parse(sessionStorage.getItem("bao-store"))||{},n="/user/setting/regStore";return t.isRegister&&(n="/user/setting/cardBind"),e=this.state.show?{display:"block"}:{display:"none"},v["default"].createElement("div",{style:e},v["default"].createElement("div",{ref:"dialog",style:{zIndex:"1050",position:"fixed",transform:"translate3d(-50%, -50%, 0px)",top:"50%",left:"50%",width:"86%"}},v["default"].createElement("div",{style:{width:"100%",position:"relative",height:"140px"}},v["default"].createElement("img",{style:{width:"100%",height:"100%"},src:a(46)}),v["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",top:"-10px"},src:a(43),alt:""}),v["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",bottom:"16px"},src:a(44),alt:""}),v["default"].createElement("img",{width:"40px",style:{position:"absolute",right:"-14px",bottom:"-10px"},src:a(45),alt:""})),v["default"].createElement("div",{style:{textAlign:"center",backgroundColor:"#fff",marginTop:"-7px",paddingTop:"22px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}},v["default"].createElement("a",{style:{marginTop:"15px",fontSize:"13px",letterSpacing:"1px",borderTop:"2px solid #f2f2f2",borderBottom:"2px solid #f2f2f2",padding:"4px 0"}},"个人账户升级为银行存管账户"),v["default"].createElement("div",{style:{fontSize:"12px",marginTop:"16px",color:"#777",height:"13px",lineHeight:"13px"}},"资金有保障    投资更放心"),v["default"].createElement("div",{style:{height:"40px",borderTop:"1px solid #ddd",marginTop:"30px"}},v["default"].createElement("div",{onClick:this.hide,style:{"float":"left",width:"50%",height:"40px",color:"#777",lineHeight:"40px",borderRight:"1px solid #ddd"}},"取消"),v["default"].createElement("div",{style:{"float":"left",width:"50%",lineHeight:"40px",color:"#00a6e2"}},v["default"].createElement(E.Link,{to:n},"立即开通"))))),v["default"].createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"1040",backgroundColor:"rgba(0, 0, 0, 0.498039)"}}))}}]),t}(v["default"].Component),i.propTypes={time:N["default"].number,text:N["default"].string,mode:N["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),callback:N["default"].func},i.defaultProps={mode:"ScaleModal"},_);t["default"]=L},43:function(e,t,a){e.exports=a.p+"static/media/01.7231ba32.png"},44:function(e,t,a){e.exports=a.p+"static/media/02.912b9dc7.png"},45:function(e,t,a){e.exports=a.p+"static/media/03.a7ec7297.png"},46:function(e,t,a){e.exports=a.p+"static/media/header.127f8ac5.png"},54:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getAuthDetail=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isRegister&&e.isBindBankcard?0!=e.authInstrCd.length?1:2:3},t.platFormGetAuthDetail=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isAuthIdentity&&e.isSecurityCard?1:e&&e.isRegister&&e.isBindBankcard?0!=e.authInstrCd.length?1:2:3}},582:function(e,t,a){e.exports=a.p+"static/media/cunguan.4d56aad2.png"},584:function(e,t,a){e.exports=a.p+"static/media/main_bg.44b3ca4d.png"},585:function(e,t,a){e.exports=a.p+"static/media/tuoguan.331cc8fd.png"},1107:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),_=n(i),c=a(5),d=n(c),s=a(3),u=n(s),f=a(56),p=n(f),m=a(4),h=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),x=a(10),w=a(11),y=a(27),S=n(y),E=a(12),k=n(E),N=a(39),L=n(N),F=a(2155),R=n(F),I=a(8),Z=n(I),z=a(582),O=n(z),T=a(585),C=n(T),M=a(54),D=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.goCash=function(e){var t=a;switch((0,M.getAuthDetail)()){case 1:t.money(e);break;case 2:(0,w.push)("/user/setting/authorization");break;case 3:a.refs.store.show()}},a.goCashOld=function(e){switch((0,M.platFormGetAuthDetail)()){case 1:a.moneyOld(e);break;case 2:(0,w.push)("/user/setting/authorization");break;case 3:a.refs.store.show()}},a.money=function(e){a.props.push("/user/withdrawals")},a.moneyOld=function(e){a.props.push("/user/withdrawalsOld")},a.state={disable1:!0,disable2:!0},a}return l(t,e),b(t,[{key:"componentWillMount",value:function(){this.props.getDefault(),this.props.queryUpload()}},{key:"componentDidMount",value:function(){this.props.load()}},{key:"componentWillReceiveProps",value:function(e){var t=e.userInfo,a=e.cashSetting;t&&a&&(parseFloat(t.data.balance)>=parseInt(a.data.withdrawSingleMinMoney)&&this.setState({disable1:!1}),parseFloat(t.data.balance_platform)>=parseInt(a.data.withdrawSingleMinMoney)&&this.setState({disable2:!1}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.pop,n=t.push,o=t.userInfo;t.cashSetting;return v["default"].createElement("div",{className:R["default"].container},v["default"].createElement(L["default"],{ref:"store"}),v["default"].createElement(S["default"],{ref:"alert"}),v["default"].createElement(k["default"],{onLeft:a,rightNode:v["default"].createElement("div",null,"规则"),onRight:function(){n("/user/cashRule")}},"提现"),v["default"].createElement("div",{className:R["default"].content},v["default"].createElement("h4",{className:R["default"].text},"账户余额 (元)"),v["default"].createElement("div",{className:R["default"].num},function(){if(o){var e=(0,p["default"])((100*o.data.balance+100*o.data.balance_platform)/100);if(!e.split(".")[1])return e+".00";switch(e.split(".")[1].length){case 1:return e+"0";case 2:return e;default:return e+".00"}}}()),v["default"].createElement("div",{className:R["default"].card},v["default"].createElement("div",{className:R["default"].header},v["default"].createElement("div",{className:R["default"].store},"存"),v["default"].createElement("div",{className:R["default"].detail,onClick:function(){n("/user/cashLog/1")}},"提现明细 ",v["default"].createElement("span",{className:R["default"].arrow}))),v["default"].createElement("div",{className:R["default"].body},v["default"].createElement("div",{className:R["default"].left},v["default"].createElement("img",{src:O["default"],alt:""})),v["default"].createElement("div",{className:R["default"].right},v["default"].createElement("p",{className:R["default"].title},"存管账户余额 (元)"),v["default"].createElement("p",{className:R["default"].money},o&&o.data.balance))),v["default"].createElement("div",{className:R["default"].footer},v["default"].createElement("div",{className:(0,Z["default"])([R["default"].btn,this.state.disable1&&R["default"].disable||""]),onClick:function(){return!e.state.disable1&&void e.goCash(o&&o.data.balance)}},"提现"))),v["default"].createElement("div",{className:R["default"].card},v["default"].createElement("div",{className:R["default"].header},v["default"].createElement("div",{className:R["default"].store},"托"),v["default"].createElement("div",{className:R["default"].detail,onClick:function(){n("/user/cashLog/2")}},"提现明细 ",v["default"].createElement("span",{className:R["default"].arrow}))),v["default"].createElement("div",{className:R["default"].body},v["default"].createElement("div",{className:R["default"].left},v["default"].createElement("img",{src:C["default"],alt:""})),v["default"].createElement("div",{className:R["default"].right},v["default"].createElement("p",{className:R["default"].title},"托管账户余额 (元)"),v["default"].createElement("p",{className:R["default"].money},o&&o.data.balance_platform))),v["default"].createElement("div",{className:R["default"].footer},v["default"].createElement("div",{className:(0,Z["default"])([R["default"].btn,this.state.disable2&&R["default"].disable||""]),onClick:function(){return!e.state.disable2&&void e.goCashOld(o&&o.data.balance_platform)}},"提现")))))}}]),t}(g.Component),U=function(e){return{userInfo:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),uploadData:e.infodata.getIn(["QUERY_UPLOAD","data"]),cashSetting:e.infodata.getIn(["GET_DEFAULT_TAB","data"])}},B=function(e){return{pop:function(){e((0,w.goBack)())},push:function(t){e((0,w.push)(t))},load:function(){e({type:"USER_INFO_WITH_LOGIN"})},getDefault:function(){e({type:"GET_DEFAULT_TAB"})},queryUpload:function(){e({type:"QUERY_UPLOAD"})}}};t["default"]=(0,x.connect)(U,B)(D)},1602:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3cvS-{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___3cvS- .content___19Z6w{background-image:url("+a(584)+");background-size:100% auto;background-position:0 0;background-repeat:no-repeat}.container___3cvS- .content___19Z6w .text___3ntqZ{text-align:center;color:#fff;font-size:12px;padding:20px 0 10px}.container___3cvS- .content___19Z6w .num___26BvG{text-align:center;color:#fff;font-size:30px}.container___3cvS- .content___19Z6w .card___1FvLR{width:80%;background-color:#fff;border-radius:4px;box-shadow:0 0 4px #ddd;position:relative;margin:20px auto}.container___3cvS- .content___19Z6w .card___1FvLR:last-child .header___33Sps .store___1kmkI{background-color:#41bce9}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps{color:#fff;text-align:center}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps:after,.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps:before{display:table;content:''}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps:after{clear:both}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .store___1kmkI{float:left;height:24px;width:31px;font-size:12px;margin-top:10px;line-height:24px;background-color:#f6923a;border-bottom-right-radius:12px;border-top-right-radius:12px}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL{color:#666;float:right;margin-top:12px;margin-right:40px;font-size:14px}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH{position:relative}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH:after,.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH:before{border:8px solid transparent;border-left:8px solid #fff;width:0;height:0;position:absolute;top:-16px;left:36px;content:' '}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH:before{border-left-color:#666;left:38px}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 32px 0 40px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .left___1s8h1{-webkit-box-flex:30px;-ms-flex:30px 0;flex:30px 0}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .left___1s8h1 img{display:block;width:100%}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .right___3UOz8{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:12px}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .right___3UOz8 .title___3sK75{font-size:12px;color:#666;margin-bottom:4px}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .right___3UOz8 .money___IHihz{font-size:24px;color:#000}.container___3cvS- .content___19Z6w .card___1FvLR .footer___34aeu{padding:24px 30px 30px}.container___3cvS- .content___19Z6w .card___1FvLR .footer___34aeu .btn___1hn8a{height:44px;line-height:44px;text-align:center;color:#f6923a;border:1px solid #f6923a;font-size:18px;border-radius:22px}.container___3cvS- .content___19Z6w .card___1FvLR .footer___34aeu .btn___1hn8a.disable___1tTaD{background-color:#f5f5f5;color:#666;border:none}",""]),t.locals={container:"container___3cvS-",content:"content___19Z6w",text:"text___3ntqZ",num:"num___26BvG",card:"card___1FvLR",header:"header___33Sps",store:"store___1kmkI",detail:"detail___3zWFL",arrow:"arrow___1m8NH",body:"body___3Solj",left:"left___1s8h1",right:"right___3UOz8",title:"title___3sK75",money:"money___IHihz",footer:"footer___34aeu",btn:"btn___1hn8a",disable:"disable___1tTaD"}},2155:function(e,t,a){var n=a(1602);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});