webpackJsonp([18],{258:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,f,u=n(2),s=o(u),p=n(6),c=o(p),d=n(4),_=o(d),g=n(5),m=o(g),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=n(1),h=o(x),y=n(392),v=o(y),w=n(15),k=o(w),E=(f=i=function(e){function t(){return a(this,t),r(this,(t.__proto__||(0,m["default"])(t)).apply(this,arguments))}return l(t,e),b(t,[{key:"render",value:function(){return h["default"].createElement("div",{className:v["default"].container},h["default"].createElement("img",{className:v["default"].indicator,src:n(237)}),h["default"].createElement("span",{className:v["default"].text},this.props.text))}}]),t}(h["default"].Component),i.propTypes={text:k["default"].string},f);t["default"]=E},315:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".container___oOa0T{width:100%;text-align:center}.indicator___1_pM7{width:25px;height:25px;display:inline-block}.text___1z1Bl{color:#fff;font-size:18px;display:inline-block;margin-left:25px;vertical-align:5px}",""]),t.locals={container:"container___oOa0T",indicator:"indicator___1_pM7",text:"text___1z1Bl"}},392:[2065,315],876:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=n(2),u=a(f),s=n(6),p=a(s),c=n(4),d=a(c),_=n(5),g=a(_),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),x=a(b),h=n(22),y=n(9),v=n(10),w=n(71),k=a(w),E=n(122),I=a(E),N=n(38),O=a(N),B=n(88),L=a(B),M=n(59),T=a(M),C=n(33),W=a(C),P=n(258),U=a(P),R=n(1982),S=a(R),z=n(49),G=a(z),F=n(19),j=a(F),q=n(18),H=o(q),V=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return n.onValid=function(){var e=n.state.backUrl,t=n.refs.form.getValue();""!=e?(n.props.isLogin({username:t.username,password:j["default"].md5(t.password),clientType:"wap"}),window.location.href=e):n.props.doLogin({username:t.username,password:j["default"].md5(t.password),clientType:"wap"})},n.onInvalid=function(e,t,o){n.openTipbar(o)},n.logining=!1,n.position="bottom",n.state={loading:!1,errorMessage:"",backUrl:"",pathname:["/home/myIndex"]},n}return i(t,e),m(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query;if(e.hasOwnProperty("baoBackUrl")){var t=e.baoBackUrl;this.setState({backUrl:t})}}},{key:"componentWillReceiveProps",value:function(e){if(e.loginCode){var t=e.loginCode;if(100!=t){var n="";300==t&&(n="登录出错了"),301==t&&(n="密码与账户不匹配"),302==t&&(n="账户已被冻结，请联系客服"),303==t&&(n="账户已被拉黑，请联系客服"),304==t&&(n="该账户不存在"),305==t&&(n="密码输入错误"),this.openTipbar(n)}}}},{key:"componentWillUnmount",value:function(){sessionStorage.removeItem("bao-sc")}},{key:"openTipbar",value:function(e){this.refs.tipbar.open(e)}},{key:"render",value:function(){var e=this,t=this.props.goBack,o=this.state.pathname,a=this.props.loginOut;return o.indexOf(a)!=-1&&(t=function(){e.props.go("/home")}),x["default"].createElement(L["default"],null,x["default"].createElement("div",{className:G["default"].topBar},x["default"].createElement("span",{onClick:function(){t()},className:G["default"].topBarLeft},"取消")),x["default"].createElement("div",{onClick:this.props.test,className:S["default"].logoContainer},x["default"].createElement("img",{className:S["default"].logo,ref:"ss",src:n(507)})),x["default"].createElement(T["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},x["default"].createElement(k["default"],{noleftPadding:!0,ref:"username",name:"username",label:"帐号",defaultValue:"",placeholder:"手机号/邮箱/用户名",type:"validateItem",reg:{required:{message:"请输入正确用户名"}},borderType:"four"}),x["default"].createElement(I["default"],{noleftPadding:!0,ref:"password",name:"password",maxLength:16,label:"密码",placeholder:"请输入密码",type:"validateItem",reg:{reg:{reg:j["default"].checkPassword,message:"请输入正确密码"}},borderType:"four"}),x["default"].createElement(O["default"],{className:S["default"].button,text:this.props.pending?x["default"].createElement(U["default"],{text:"登录中"}):"登录",type:"submit"})),x["default"].createElement("div",{className:S["default"].forgetWrap},x["default"].createElement("div",{className:S["default"].forgetBox,onClick:this.enterForget},x["default"].createElement(h.Link,{to:"/findpassword",className:S["default"].forget},"忘记密码？")),x["default"].createElement("div",{className:S["default"].registerBox,onClick:this.enterRegister},x["default"].createElement(h.Link,{to:"/register",className:S["default"].register},"立即注册"))),x["default"].createElement(W["default"],{ref:"tipbar"}))}}]),t}(x["default"].Component),X=function(e){return{pending:e.infodata.getIn([H.USER_LOGIN_FLOW,"pending"]),loginCode:e.infodata.getIn([H.USER_LOGIN_FLOW,"data"])&&e.infodata.getIn([H.USER_LOGIN_FLOW,"data"]).code||0,userInfo:e.infodata.getIn([H.USER_INFO,"data"]),loginOut:e.global.getIn([H.LOGIN_OUT_PATH])}},Y=function(e){return{doLogin:function(t){var n=sessionStorage.getItem("bao-sc")&&"/user/coinShop"||"/home";e({type:H.USER_LOGIN_FLOW,params:[t],go:n})},isLogin:function(t){e({type:H.USER_LOGIN_FLOW,params:[t]})},goBack:function(){e((0,v.goBack)())},go:function(t){e((0,v.push)(t))}}};t["default"]=(0,y.connect)(X,Y)(V)},917:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(876),r=o(a);t["default"]=r["default"]},1335:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".loginPage___1sauY{width:100%;height:100%;padding-top:1px}.logoContainer___2ffkk{margin-top:40px;margin-bottom:70px;display:block;text-align:center}.logo___2H0xs{width:80px;height:75px;display:inline-block}.forgetWrap___3pfRX{margin-top:25px;margin-left:15px;margin-right:15px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.forget___1YBX8,.forgetBox___21DEz{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.forget___1YBX8{text-align:left;color:#888;font-size:16px;display:block}.register___3MLpN,.reigsterBox___3ND9o{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.register___3MLpN{text-align:right;font-size:16px;color:#ff7701;display:block}.formWrap___14M1H{margin:0 15px}.passwordInput___3GqvK{margin-top:15px;border-color:transparent}.passwordInput___3GqvK .left___BnMzk{margin-left:0}.button___3dwl1{margin:30px 15px 0}",""]),t.locals={loginPage:"loginPage___1sauY",logoContainer:"logoContainer___2ffkk",logo:"logo___2H0xs",forgetWrap:"forgetWrap___3pfRX",forgetBox:"forgetBox___21DEz",forget:"forget___1YBX8",reigsterBox:"reigsterBox___3ND9o",register:"register___3MLpN",formWrap:"formWrap___14M1H",passwordInput:"passwordInput___3GqvK",left:"left___BnMzk",button:"button___3dwl1"}},1982:[2067,1335]});