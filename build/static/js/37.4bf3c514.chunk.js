webpackJsonp([37],{1116:function(e,t,o){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(2),u=n(s),f=o(5),p=n(f),d=o(3),c=n(d),_=o(4),g=n(_),m=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),b=o(1),h=n(b),x=o(22),v=o(10),y=o(9),k=o(243),w=(n(k),o(52)),I=n(w),E=o(135),N=n(E),L=o(24),O=n(L),B=o(120),C=n(B),S=o(44),W=n(S),M=o(28),U=n(M),P=o(93),R=n(P),T=o(2216),F=n(T),H=o(51),G=n(H),z=o(17),q=n(z),A=o(19),D=a(A),V=function(e){function t(e){r(this,t);var o=l(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return o.onValid=function(){var e=o.state.backUrl;o.props.clean();var t=o.refs.form.getValue();""!=e?!function(){o.props.isLogin({username:t.username,password:q["default"].md5(t.password),clientType:"wap"});var a=!0;setInterval(function(){var t=sessionStorage.getItem("bao-auth-str"),o=sessionStorage.getItem("bao-user");t&&o&&(a&&location.replace(e+"?bao-auth="+t),a=!1)},500)}():o.props.doLogin({username:t.username,password:q["default"].md5(t.password),clientType:"wap",device:"WAP",tokenId:tokenId})},o.onInvalid=function(e,t,a){o.openTipbar(a)},o.logining=!1,o.position="bottom",o.state={loading:!1,errorMessage:"",backUrl:"",pathname:["/home/myIndex"],oneColor:"",twoColor:""},o}return i(t,e),m(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query;if(e.hasOwnProperty("baoBackUrl")){var t=e.baoBackUrl;this.setState({backUrl:t})}}},{key:"componentWillReceiveProps",value:function(e){if(e.loginCode){var t=e.loginCode;if(100!=t){var o="";300==t&&(o="登录出错了"),301==t&&(o="密码与账户不匹配"),302==t&&(o="账户已被冻结，请联系客服"),303==t&&(o="账户已被拉黑，请联系客服"),304==t&&(o="该账户不存在"),305==t&&(o="密码输入错误"),this.openTipbar(o)}}}},{key:"componentWillUnmount",value:function(){sessionStorage.removeItem("bao-sc")}},{key:"focusHandle",value:function(e){0==e?this.setState({oneColor:"blue"}):this.setState({twoColor:"blue"})}},{key:"blurHandle",value:function(e){0==e?this.setState({oneColor:""}):this.setState({twoColor:""})}},{key:"openTipbar",value:function(e){this.refs.tipbar.open(e)}},{key:"render",value:function(){var e=this,t=this.props.goBack,a=this.state.pathname,n=this.props.loginOut;return a.indexOf(n)!=-1&&(t=function(){e.props.go("/home")}),h["default"].createElement(C["default"],null,h["default"].createElement("div",{className:G["default"].topBar},h["default"].createElement("span",{onClick:function(){t()},className:G["default"].topBarLeft},"取消")),h["default"].createElement("div",{onClick:this.props.test,className:F["default"].logoContainer},h["default"].createElement("img",{className:F["default"].logo,ref:"ss",src:o(439)})),h["default"].createElement(W["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},h["default"].createElement(I["default"],{noleftPadding:!0,ref:"username",name:"username",className:this.state.oneColor,inputStyle:{height:"100%",padding:"0"},label:"帐号",onFocus:function(){e.focusHandle(0)},onBlur:function(){e.blurHandle(0)},defaultValue:"",placeholder:"手机号/邮箱/用户名",type:"validateItem",reg:{required:{message:"请输入正确用户名"}},borderType:"four"}),h["default"].createElement(N["default"],{noleftPadding:!0,ref:"password",name:"password",className:this.state.twoColor,inputStyle:{height:"100%",padding:"0"},maxLength:16,label:"密码",onFocus:function(){e.focusHandle(1)},onBlur:function(){e.blurHandle(1)},placeholder:"请输入密码",type:"validateItem",reg:{reg:{reg:q["default"].checkPassword,message:"请输入正确密码"}},borderType:"four"}),h["default"].createElement(O["default"],{className:F["default"].button,text:this.props.pending?h["default"].createElement(R["default"],{text:"登录中"}):"登录",type:"submit"})),h["default"].createElement("div",{className:F["default"].forgetWrap},h["default"].createElement("div",{className:F["default"].forgetBox,onClick:this.enterForget},h["default"].createElement(x.Link,{to:"/findpassword",className:F["default"].forget},"忘记密码？")),h["default"].createElement("div",{className:F["default"].registerBox,onClick:this.enterRegister},h["default"].createElement(x.Link,{to:"/register",className:F["default"].register},"立即注册"))),h["default"].createElement(U["default"],{ref:"tipbar"}))}}]),t}(h["default"].Component),X=function(e){return{pending:e.infodata.getIn([D.USER_LOGIN_FLOW,"pending"]),loginCode:e.infodata.getIn([D.USER_LOGIN_FLOW,"data"])&&e.infodata.getIn([D.USER_LOGIN_FLOW,"data"]).code||0,userInfo:e.infodata.getIn([D.USER_INFO,"data"]),loginOut:e.global.getIn([D.LOGIN_OUT_PATH])}},Y=function(e){return{doLogin:function(t){var o=sessionStorage.getItem("bao-sc")&&"/user/coinShop"||"/home";e({type:D.USER_LOGIN_FLOW,params:[t],go:o})},isLogin:function(t){e({type:D.USER_LOGIN_FLOW,params:[t]})},goBack:function(){e((0,y.goBack)())},go:function(t){e((0,y.push)(t))},clean:function(){e({type:"CLEAR_INFO_DATA",key:"USER_LOGIN_FLOW"})}}};t["default"]=(0,v.connect)(X,Y)(V)},1167:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1116),r=a(n);t["default"]=r["default"]},1642:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".loginPage___1sauY{width:100%;height:100%;padding-top:1px}.logoContainer___2ffkk{margin-top:40px;margin-bottom:70px;display:block;text-align:center}.logo___2H0xs{width:80px;height:75px;display:inline-block}.forgetWrap___3pfRX{margin-top:25px;margin-left:15px;margin-right:15px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.forget___1YBX8,.forgetBox___21DEz{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.forget___1YBX8{text-align:left;color:#888;font-size:16px;display:block}.register___3MLpN,.reigsterBox___3ND9o{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.register___3MLpN{text-align:right;font-size:16px;color:#ff7701;display:block}.formWrap___14M1H{margin:0 15px}.passwordInput___3GqvK{margin-top:15px;border-color:transparent}.passwordInput___3GqvK .left___BnMzk{margin-left:0}.button___3dwl1{margin:30px 15px 0}",""]),t.locals={loginPage:"loginPage___1sauY",logoContainer:"logoContainer___2ffkk",logo:"logo___2H0xs",forgetWrap:"forgetWrap___3pfRX",forgetBox:"forgetBox___21DEz",forget:"forget___1YBX8",reigsterBox:"reigsterBox___3ND9o",register:"register___3MLpN",formWrap:"formWrap___14M1H",passwordInput:"passwordInput___3GqvK",left:"left___BnMzk",button:"button___3dwl1"}},2216:[2302,1642]});