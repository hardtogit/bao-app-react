webpackJsonp([50],{28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=n(2),f=o(c),s=n(5),p=o(s),d=n(3),_=o(d),h=n(4),b=o(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=n(1),g=o(x),y=n(8),v=o(y),w=n(30),E=o(w),T=n(9),k=o(T),O=(u=l=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.state={disable:!0,message:""},n}return i(t,e),m(t,[{key:"open",value:function(e,t){var n=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){n.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:g["default"].createElement("div",{className:(0,v["default"])(E["default"].Tipbar,this.props.className)},g["default"].createElement("span",{className:E["default"].text},this.state.message||this.props.text))}}]),t}(g["default"].Component),l.propTypes={text:k["default"].string},u);t["default"]=O},29:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},30:[2322,29],41:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,u,c=n(2),f=o(c),s=n(5),p=o(s),d=n(3),_=o(d),h=n(4),b=o(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=n(1),g=o(x),y=n(8),v=(o(y),n(40)),w=(o(v),n(35)),E=(o(w),n(34)),T=(o(E),n(21)),k=n(9),O=o(k),S=(u=l=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.show=function(){n.setState({show:!0})},n.hide=function(){n.setState({show:!1})},n.clearTimer=function(){},n.state={show:!1},n}return i(t,e),m(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=void 0,t=JSON.parse(sessionStorage.getItem("bao-store"))||{},o="/user/setting/regStore";return t.isRegister&&(o="/user/setting/cardBind"),e=this.state.show?{display:"block"}:{display:"none"},g["default"].createElement("div",{style:e},g["default"].createElement("div",{ref:"dialog",style:{zIndex:"1050",position:"fixed",transform:"translate3d(-50%, -50%, 0px)",top:"50%",left:"50%",width:"86%"}},g["default"].createElement("div",{style:{width:"100%",position:"relative",height:"140px"}},g["default"].createElement("img",{style:{width:"100%",height:"100%"},src:n(46)}),g["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",top:"-10px"},src:n(43),alt:""}),g["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",bottom:"16px"},src:n(44),alt:""}),g["default"].createElement("img",{width:"40px",style:{position:"absolute",right:"-14px",bottom:"-10px"},src:n(45),alt:""})),g["default"].createElement("div",{style:{textAlign:"center",backgroundColor:"#fff",marginTop:"-7px",paddingTop:"22px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}},g["default"].createElement("a",{style:{marginTop:"15px",fontSize:"13px",letterSpacing:"1px",borderTop:"2px solid #f2f2f2",borderBottom:"2px solid #f2f2f2",padding:"4px 0"}},"个人账户升级为银行存管账户"),g["default"].createElement("div",{style:{fontSize:"12px",marginTop:"16px",color:"#777",height:"13px",lineHeight:"13px"}},"资金有保障    投资更放心"),g["default"].createElement("div",{style:{height:"40px",borderTop:"1px solid #ddd",marginTop:"30px"}},g["default"].createElement("div",{onClick:this.hide,style:{"float":"left",width:"50%",height:"40px",color:"#777",lineHeight:"40px",borderRight:"1px solid #ddd"}},"取消"),g["default"].createElement("div",{style:{"float":"left",width:"50%",lineHeight:"40px",color:"#00a6e2"}},g["default"].createElement(T.Link,{to:o},"立即开通"))))),g["default"].createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"1040",backgroundColor:"rgba(0, 0, 0, 0.498039)"}}))}}]),t}(g["default"].Component),l.propTypes={time:O["default"].number,text:O["default"].string,mode:O["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),callback:O["default"].func},l.defaultProps={mode:"ScaleModal"},u);t["default"]=S},43:function(e,t,n){e.exports=n.p+"static/media/01.7231ba32.png"},44:function(e,t,n){e.exports=n.p+"static/media/02.912b9dc7.png"},45:function(e,t,n){e.exports=n.p+"static/media/03.a7ec7297.png"},46:function(e,t,n){e.exports=n.p+"static/media/header.127f8ac5.png"},47:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=o(l),c=n(5),f=o(c),s=n(3),p=o(s),d=n(4),_=o(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),m=o(b),x=n(26),g=o(x),y=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=o=r(this,(e=t.__proto__||(0,_["default"])(t)).call.apply(e,[this].concat(u))),o.publickFn=function(){var e=sessionStorage.getItem("bao-user");return!!e},i=n,r(o,i)}return i(t,e),h(t,[{key:"Verification",value:function(e,t,n,o){var a=this.publickFn();a?(t(e),o?n(o):n()):t("/login")}},{key:"isbindSecurityCard",value:function(e,t,n){var o=this.publickFn();o?e&&e():t("/login")}},{key:"isSecurityCard",value:function(e,t,n){var o=this.publickFn();o?e&&e():t("/login")}},{key:"render",value:function(){return m["default"].createElement("div",null,m["default"].createElement(g["default"],{ref:"alert"}))}}]),t}(b.Component);t["default"]=y},84:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=o(l),c=n(5),f=o(c),s=n(3),p=o(s),d=n(4),_=o(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),m=o(b),x=n(12),g=o(x),y=n(90),v=o(y),w=n(9),E=(o(w),function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.loadTime=function(){var e=n.state,t=e.time,o=e.flag;0==o?n.setState({flag:1}):n.setState({time:t+1})},n.getTime=function(){return n.state.time},n.state={time:1,flag:0},n}return i(t,e),h(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.url;e.closeFn;t&&this.refs.iframe.contentWindow.location.replace(t)}},{key:"render",value:function(){var e=this.props,t=(e.url,e.closeFn);return m["default"].createElement("div",{className:v["default"].rechargeBox},m["default"].createElement(g["default"],{leftNode:m["default"].createElement("span",{className:v["default"].rechargeTitle},"关闭"),onLeft:t,style:{position:"absolute",left:"0px",top:"0px"}},"充值"),m["default"].createElement("iframe",{ref:"iframe",className:v["default"].ifr,onLoad:this.loadTime}))}}]),t}(b.Component));t["default"]=E},88:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".rechargeBox___2nDdj{position:absolute;left:0;top:0;width:100%;background-color:#f0eff5;height:100%;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;padding-top:44px}.rechargeTitle___36XZX{padding-left:15px}.ifr___2jOKS{width:100%;height:100%;border:0}",""]),t.locals={rechargeBox:"rechargeBox___2nDdj",rechargeTitle:"rechargeTitle___36XZX",ifr:"ifr___2jOKS"}},90:function(e,t,n){var o=n(88);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},998:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=o(l),c=n(5),f=o(c),s=n(3),p=o(s),d=n(4),_=o(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),m=o(b),x=n(11),g=n(10),y=n(12),v=o(y),w=n(41),E=o(w),T=n(28),k=o(T),O=n(26),S=o(O),z=n(47),N=o(z),I=n(20),C=o(I),M=n(84),A=o(M),K=n(8),J=o(K),j=n(2083),B=o(j),R=window.location.origin,P=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.closeFn=function(){n.setState({payTop:"100%"})},n.recChange=function(e){var t=e.target.value,o=/^-?\d*\.?\d*$/;n.setState({recMoney:t}),o.test(t)&&""!=t?n.setState({disabled:!1}):(n.openTipbar("请输入正确的充值金额！"),n.setState({disabled:!0}))},n.submit=function(){n.setState({submite:!0}),n.props.submit()},n.state={recMoney:"",disabled:!0,submite:!1,payTop:"100%"},n}return i(t,e),h(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.cookie;if(t){var n=this.state.submite,o=this.state.recMoney,a=2,r="platform";n&&100==t.code?this.setState({submite:!1,payTop:"0px",url:C["default"].combineUrl(R+"/mobile_api/pay",{money:o,type:a,access_sys:r})}):n&&(this.setState({submite:!1}),this.openTipbar("提交失败!"))}}},{key:"render",value:function(){var e=this.props,t=e.pop,n=(e.push,e.userInfo,this.state),o=n.recMoney,a=n.disabled;return m["default"].createElement("div",{className:B["default"].container},m["default"].createElement(E["default"],{ref:"store"}),m["default"].createElement(v["default"],{onLeft:t},"充值"),m["default"].createElement("div",{className:B["default"].content},m["default"].createElement("div",{className:B["default"].inputBox},m["default"].createElement("div",{className:B["default"].recInput},m["default"].createElement("span",null,"充值金额"),m["default"].createElement("span",null,m["default"].createElement("input",{placeholder:"请输入金额",value:o,onChange:this.recChange})),m["default"].createElement("span",null,"元")),m["default"].createElement("div",{className:(0,J["default"])(B["default"].recInput,B["default"].recName)},"连连支付"),m["default"].createElement("button",{className:B["default"].buttonNext,disabled:a,onClick:this.submit},"下一步")),m["default"].createElement(k["default"],{ref:"tipbar"}),m["default"].createElement(S["default"],{ref:"alert"}),m["default"].createElement(N["default"],{ref:"isAuth"})),m["default"].createElement("div",{className:B["default"].rechargeBox,style:{top:this.state.payTop}},m["default"].createElement(A["default"],{url:this.state.url,closeFn:this.closeFn,ref:"pay"})))}}]),t}(b.Component),F=function(e){return{userInfo:e.infodata.getIn(["USER_INFO","data"]),cookie:e.infodata.getIn(["AUTH_COOKIE","data"])}},Z=function(e){return{pop:function(){e((0,g.goBack)())},push:function(t){e((0,g.push)(t))},submit:function(){e({type:"AUTH_COOKIE"})}}};t["default"]=(0,x.connect)(F,Z)(P)},1482:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".container___1A6tK{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___1A6tK .content___6zOJp .inputBox___2eotJ{padding-top:30px}.container___1A6tK .content___6zOJp .recInput___a4ZsP{background-color:#fff;border:1px solid #e4e4e4;height:44px;padding:0 15px;border-left:0;border-right:0;display:-webkit-box;display:-ms-flexbox;display:flex}.container___1A6tK .content___6zOJp .recInput___a4ZsP span{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:44px;font-size:14px;color:#888}.container___1A6tK .content___6zOJp .recInput___a4ZsP span:first-child{-webkit-box-flex:60px;-ms-flex:60px 0;flex:60px 0}.container___1A6tK .content___6zOJp .recInput___a4ZsP span:last-child{-webkit-box-flex:40px;-ms-flex:40px 0;flex:40px 0;text-align:center}.container___1A6tK .content___6zOJp .recInput___a4ZsP input{height:38px;outline:none;margin-left:8px;width:100%}.container___1A6tK .content___6zOJp .rechargeTitle___GSOHi{padding-left:15px}.container___1A6tK .content___6zOJp .recName___1SI_Y{margin-top:20px;margin-bottom:10px;line-height:44px;font-size:16px;color:#00a6e2}.container___1A6tK .content___6zOJp .buttonNext___2jTOY{display:block;width:70%;margin:0 auto;font-size:16px;background:#00a6e2;border:1px solid #00a6e2;color:#fff;height:44px;border-radius:3px}.container___1A6tK .content___6zOJp .buttonNext___2jTOY[disabled]{background-color:#90d2ed;border:1px solid #90d2ed}.container___1A6tK .content___6zOJp .detailContent___3T6Ym{margin-top:59px}.container___1A6tK .content___6zOJp .detail___3OqRD{font-size:14px;color:#fff}.container___1A6tK .content___6zOJp .iframe___2Qwg9{width:100%;height:100%;border:0}.container___1A6tK .rechargeBox___3VktQ{position:absolute;left:0;top:100%;width:100%;background-color:#f0eff5;height:100%;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;padding-top:44px}",""]),t.locals={container:"container___1A6tK",content:"content___6zOJp",inputBox:"inputBox___2eotJ",recInput:"recInput___a4ZsP",rechargeTitle:"rechargeTitle___GSOHi",recName:"recName___1SI_Y",buttonNext:"buttonNext___2jTOY",detailContent:"detailContent___3T6Ym",detail:"detail___3OqRD",iframe:"iframe___2Qwg9",rechargeBox:"rechargeBox___3VktQ"}},2083:function(e,t,n){var o=n(1482);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)}});