webpackJsonp([66],{41:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var _,l,d=a(2),c=n(d),f=a(5),u=n(f),s=a(3),p=n(s),m=a(4),h=n(m),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),y=a(8),E=(n(y),a(40)),v=(n(E),a(35)),w=(n(v),a(34)),K=(n(w),a(21)),k=a(9),N=n(k),C=(l=_=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.show=function(){a.setState({show:!0})},a.hide=function(){a.setState({show:!1})},a.clearTimer=function(){},a.state={show:!1},a}return i(t,e),g(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=void 0,t=JSON.parse(sessionStorage.getItem("bao-store"))||{},n="/user/setting/regStore";return t.isRegister&&(n="/user/setting/cardBind"),e=this.state.show?{display:"block"}:{display:"none"},x["default"].createElement("div",{style:e},x["default"].createElement("div",{ref:"dialog",style:{zIndex:"1050",position:"fixed",transform:"translate3d(-50%, -50%, 0px)",top:"50%",left:"50%",width:"86%"}},x["default"].createElement("div",{style:{width:"100%",position:"relative",height:"140px"}},x["default"].createElement("img",{style:{width:"100%",height:"100%"},src:a(46)}),x["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",top:"-10px"},src:a(43),alt:""}),x["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",bottom:"16px"},src:a(44),alt:""}),x["default"].createElement("img",{width:"40px",style:{position:"absolute",right:"-14px",bottom:"-10px"},src:a(45),alt:""})),x["default"].createElement("div",{style:{textAlign:"center",backgroundColor:"#fff",marginTop:"-7px",paddingTop:"22px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}},x["default"].createElement("a",{style:{marginTop:"15px",fontSize:"13px",letterSpacing:"1px",borderTop:"2px solid #f2f2f2",borderBottom:"2px solid #f2f2f2",padding:"4px 0"}},"个人账户升级为银行存管账户"),x["default"].createElement("div",{style:{fontSize:"12px",marginTop:"16px",color:"#777",height:"13px",lineHeight:"13px"}},"资金有保障    投资更放心"),x["default"].createElement("div",{style:{height:"40px",borderTop:"1px solid #ddd",marginTop:"30px"}},x["default"].createElement("div",{onClick:this.hide,style:{"float":"left",width:"50%",height:"40px",color:"#777",lineHeight:"40px",borderRight:"1px solid #ddd"}},"取消"),x["default"].createElement("div",{style:{"float":"left",width:"50%",lineHeight:"40px",color:"#00a6e2"}},x["default"].createElement(K.Link,{to:n},"立即开通"))))),x["default"].createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"1040",backgroundColor:"rgba(0, 0, 0, 0.498039)"}}))}}]),t}(x["default"].Component),_.propTypes={time:N["default"].number,text:N["default"].string,mode:N["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),callback:N["default"].func},_.defaultProps={mode:"ScaleModal"},l);t["default"]=C},43:function(e,t,a){e.exports=a.p+"static/media/01.7231ba32.png"},44:function(e,t,a){e.exports=a.p+"static/media/02.912b9dc7.png"},45:function(e,t,a){e.exports=a.p+"static/media/03.a7ec7297.png"},46:function(e,t,a){e.exports=a.p+"static/media/header.127f8ac5.png"},53:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getAuthDetail=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isRegister&&e.isBindBankcard?0!=e.authInstrCd.length?1:2:3},t.platFormGetAuthDetail=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isAuthIdentity&&e.isSecurityCard?1:e&&e.isRegister&&e.isBindBankcard?0!=e.authInstrCd.length?1:2:3}},489:function(e,t,a){e.exports=a.p+"static/media/cunguan.4d56aad2.png"},491:function(e,t,a){e.exports=a.p+"static/media/main_bg.44b3ca4d.png"},492:function(e,t,a){e.exports=a.p+"static/media/tuoguan.331cc8fd.png"},999:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var _=a(2),l=n(_),d=a(5),c=n(d),f=a(3),u=n(f),s=a(58),p=n(s),m=a(4),h=n(m),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),y=a(11),E=a(10),v=a(12),w=n(v),K=a(41),k=n(K),N=a(8),C=n(N),P=a(2084),J=n(P),I=a(489),U=n(I),V=a(492),Y=n(V),S=a(53),X=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.state={},a}return i(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"componentWillMount",value:function(){this.props.getChargeStatus()}},{key:"render",value:function(){var e=this,t=this.props,a=t.pop,n=t.push,o=t.userInfo,r=t.btnInfo;return x["default"].createElement("div",{className:J["default"].container},x["default"].createElement(k["default"],{ref:"store"}),x["default"].createElement(w["default"],{onLeft:a,rightNode:x["default"].createElement("div",null,"规则"),onRight:function(){n("/user/reChargeRule")}},"充值"),x["default"].createElement("div",{className:J["default"].content},x["default"].createElement("h4",{className:J["default"].text},"账户余额 (元)"),x["default"].createElement("div",{className:J["default"].num},function(){if(o){var e=(0,p["default"])((100*o.data.balance+100*o.data.balance_platform)/100);if(!e.split(".")[1])return e+".00";switch(e.split(".")[1].length){case 1:return e+"0";case 2:return e;default:return e+".00"}}}()),x["default"].createElement("div",{className:J["default"].card},x["default"].createElement("div",{className:J["default"].header},x["default"].createElement("div",{className:J["default"].store},"存"),x["default"].createElement("div",{className:J["default"].detail,onClick:function(){n("/user/rechargeLog/1")}},"充值明细 ",x["default"].createElement("span",{className:J["default"].arrow}))),x["default"].createElement("div",{className:J["default"].body},x["default"].createElement("div",{className:J["default"].left},x["default"].createElement("img",{src:U["default"],alt:""})),x["default"].createElement("div",{className:J["default"].right},x["default"].createElement("p",{className:J["default"].title},"存管账户余额 (元)"),x["default"].createElement("p",{className:J["default"].money},o&&o.data.balance))),x["default"].createElement("div",{className:J["default"].footer,onClick:function(){switch((0,S.getAuthDetail)()){case 1:e.props.push("/user/newRecharge");break;case 2:n("/user/setting/authorization");break;case 3:e.refs.store.show()}}},x["default"].createElement("div",{className:J["default"].btn},"充值"))),x["default"].createElement("div",{className:J["default"].card},x["default"].createElement("div",{className:J["default"].header},x["default"].createElement("div",{className:J["default"].store},"托"),x["default"].createElement("div",{className:J["default"].detail,onClick:function(){n("/user/rechargeLog/2")}},"充值明细 ",x["default"].createElement("span",{className:J["default"].arrow}))),x["default"].createElement("div",{className:J["default"].body},x["default"].createElement("div",{className:J["default"].left},x["default"].createElement("img",{src:Y["default"],alt:""})),x["default"].createElement("div",{className:J["default"].right},x["default"].createElement("p",{className:J["default"].title},"托管账户余额 (元)"),x["default"].createElement("p",{className:J["default"].money},o&&o.data.balance_platform))),x["default"].createElement("div",{className:J["default"].footer},x["default"].createElement("div",{className:(0,C["default"])([J["default"].disable,r&&!r.data.hide_platform_recharge_withdraw&&J["default"].btn]),onClick:function(){if(r&&!r.data.hide_platform_recharge_withdraw)switch((0,S.platFormGetAuthDetail)()){case 1:n("/user/oldRecharge");break;case 2:n("/user/setting/authorization");break;case 3:e.refs.store.show()}}},"充值")))))}}]),t}(b.Component),z=function(e){return{userInfo:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),btnInfo:e.infodata.getIn(["GET_CHARGE_STATUS","data"])}},T=function(e){return{pop:function(){e((0,E.goBack)())},load:function(){e({type:"USER_INFO_WITH_LOGIN"})},push:function(t){e((0,E.push)(t))},getChargeStatus:function(){e({type:"GET_CHARGE_STATUS"})}}};t["default"]=(0,y.connect)(z,T)(X)},1483:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3VPYK{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___3VPYK .content___29yaJ{background-image:url("+a(491)+");background-size:100% auto;background-position:0 0;background-repeat:no-repeat}.container___3VPYK .content___29yaJ .text___1Xou5{text-align:center;color:#fff;font-size:12px;padding:20px 0 10px}.container___3VPYK .content___29yaJ .num___17Ing{text-align:center;color:#fff;font-size:30px}.container___3VPYK .content___29yaJ .card___UipX0{width:80%;background-color:#fff;border-radius:4px;box-shadow:0 0 4px #ddd;position:relative;margin:20px auto}.container___3VPYK .content___29yaJ .card___UipX0:last-child .header___E9KnC .store___-P1Ly{background-color:#41bce9}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC{color:#fff;text-align:center}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC:after,.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC:before{display:table;content:''}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC:after{clear:both}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC .store___-P1Ly{float:left;height:24px;width:31px;font-size:12px;margin-top:10px;line-height:24px;background-color:#f6923a;border-bottom-right-radius:12px;border-top-right-radius:12px}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC .detail___1EIxm{color:#666;float:right;margin-top:12px;margin-right:40px;font-size:14px}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC .detail___1EIxm .arrow___1QG-h{position:relative}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC .detail___1EIxm .arrow___1QG-h:after,.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC .detail___1EIxm .arrow___1QG-h:before{border:8px solid transparent;border-left:8px solid #fff;width:0;height:0;position:absolute;top:-16px;left:36px;content:' '}.container___3VPYK .content___29yaJ .card___UipX0 .header___E9KnC .detail___1EIxm .arrow___1QG-h:before{border-left-color:#666;left:38px}.container___3VPYK .content___29yaJ .card___UipX0 .body___3Gb0K{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 32px 0 40px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___3VPYK .content___29yaJ .card___UipX0 .body___3Gb0K .left___1kgzt{-webkit-box-flex:30px;-ms-flex:30px 0;flex:30px 0}.container___3VPYK .content___29yaJ .card___UipX0 .body___3Gb0K .left___1kgzt img{display:block;width:100%}.container___3VPYK .content___29yaJ .card___UipX0 .body___3Gb0K .right___1bjZz{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:12px}.container___3VPYK .content___29yaJ .card___UipX0 .body___3Gb0K .right___1bjZz .title___3ZN_r{font-size:12px;color:#666;margin-bottom:4px}.container___3VPYK .content___29yaJ .card___UipX0 .body___3Gb0K .right___1bjZz .money___2ReKq{font-size:24px;color:#000}.container___3VPYK .content___29yaJ .card___UipX0 .footer___3A3t_{padding:24px 30px 30px}.container___3VPYK .content___29yaJ .card___UipX0 .footer___3A3t_ .disable___2rvfp{height:44px;line-height:44px;text-align:center;font-size:18px;border-radius:22px;background-color:#f5f5f5;color:#666;border:none}.container___3VPYK .content___29yaJ .card___UipX0 .footer___3A3t_ .btn___1ChCc{height:44px;line-height:44px;text-align:center;color:#f6923a;background-color:#fff;border:1px solid #f6923a;font-size:18px;border-radius:22px}",""]),t.locals={container:"container___3VPYK",content:"content___29yaJ",text:"text___1Xou5",num:"num___17Ing",card:"card___UipX0",header:"header___E9KnC",store:"store___-P1Ly",detail:"detail___1EIxm",arrow:"arrow___1QG-h",body:"body___3Gb0K",left:"left___1kgzt",right:"right___1bjZz",title:"title___3ZN_r",money:"money___2ReKq",footer:"footer___3A3t_",disable:"disable___2rvfp",btn:"btn___1ChCc"}},2084:function(e,t,a){var n=a(1483);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});