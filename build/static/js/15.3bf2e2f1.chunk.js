webpackJsonp([15],{139:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir"}},148:[2087,139],202:function(e,t,n){e.exports=n.p+"static/media/regBack.f08fc33c.png"},893:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),c=a(u),s=n(5),f=a(s),p=n(3),d=a(p),_=n(4),m=a(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,c["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=n(1),b=a(x),h=n(9),v=n(10),y=n(71),k=a(y),w=n(122),I=a(w),E=n(38),T=a(E),N=n(11),R=a(N),B=n(59),S=a(B),M=n(33),W=a(M),C=n(148),G=a(C),J=n(49),P=a(J),z=n(20),j=a(z),A=n(18),D=o(A),K=n(23),L=a(K),O=n(202),V=a(O),Y=n(1699),U=a(Y),F=n(1724),X=a(F),H=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.onValid=function(){var e=n.refs.form.getValue(),t=n.props,o=t.mobile,a=t.code;n.props.goRegister({mobile:o,verifyCode:a,password:e.password,codes:e.captcha})},n.onInvalid=function(e,t,o){n.setState({errorMessage:o})},n.openTipbar=function(e){n.refs.tipbar.open(e)},n.state={init:!0},n}return l(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,n=e.code;t&&!n?this.alert("/registerVerifyMobile"):t&&n||this.alert("/register")}},{key:"alert",value:function(e){var t=this;this.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){t.props.go(e)}})}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.data;if(t){var n=t.code,o=this.refs.alert,a=this.state.init;100==n&&a&&(this.setState({init:!1}),this.props.userInfo(),this.props.go("/registerSuccess")),300==n&&o.show({content:"验证码错误",okText:"确定"}),301==n&&o.show({content:"验证码过期",okText:"确定"}),302==n&&o.show({content:"该手机号已被注册",okText:"确定"}),303==n&&o.show({content:"推荐码不存在!",okText:"确定"})}}},{key:"Dom",value:function(){var e=this;return b["default"].createElement("div",null,b["default"].createElement("div",{className:P["default"].content},b["default"].createElement("span",{className:P["default"].markTitle},"设置登陆密码"),b["default"].createElement(S["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},b["default"].createElement(I["default"],{ref:"password",name:"password",icon:b["default"].createElement("div",{className:G["default"].Icon},b["default"].createElement("img",{src:U["default"]})),maxLength:16,placeholder:"6~16位密码",type:"validateItem",imgSty:{marginRight:"0px"},containerStyle:{paddingRight:"15px"},reg:{reg:{reg:j["default"].checkPassword,message:"请输入正确密码"}},borderType:"four"}),b["default"].createElement(k["default"],{ref:"captcha",name:"captcha",icon:b["default"].createElement("div",{className:G["default"].Icon},b["default"].createElement("img",{src:X["default"]})),placeholder:"推荐码（选填）",type:"validateItem",containerStyle:{paddingRight:"15px"},borderType:"four"}),b["default"].createElement(T["default"],{className:G["default"].buttonWrap,text:"注册",type:"submit"})),b["default"].createElement("div",{className:G["default"].agreement},"同意",b["default"].createElement("span",{className:G["default"].agreementText,onClick:function(){e.props.go("/privacy")}},"《宝点网隐私条例》"),"和",b["default"].createElement("span",{className:G["default"].agreementText,onClick:function(){e.props.go("/service")}},"《宝点网服务协议》"))))}},{key:"render",value:function(){var e=this.props,t=e.mobile,n=e.code,o=void 0;return t&&n&&(o=this.Dom()),b["default"].createElement("div",{className:P["default"].panel,style:{backgroundColor:"#fff",paddingTop:0}},b["default"].createElement(R["default"],{backgroundColor:"#fff",leftNode:b["default"].createElement("img",{src:V["default"],className:G["default"].backImg}),onLeft:this.props.goBack}),o,b["default"].createElement(W["default"],{ref:"tipbar"}),b["default"].createElement(L["default"],{ref:"alert"}))}}]),t}(b["default"].Component),Z=function(e){var t=e.infodata;return{mobile:t.getIn(["REGISTER_NUM","mobile"]),code:t.getIn(["REGISTER_NUM","code"]),data:t.getIn(["REGISTER","data"])}},q=function(e){return{goBack:function(){e((0,v.goBack)())},go:function(t){e((0,v.push)(t))},goRegister:function(t){e({type:D.REGISTER,params:[t]})},userInfo:function(){e({type:D.USER_INFO})}}};t["default"]=(0,h.connect)(Z,q)(H)},934:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(893),r=o(a);t["default"]=r["default"]},1699:function(e,t,n){e.exports=n.p+"static/media/pwd.9688ad12.png"},1724:function(e,t,n){e.exports=n.p+"static/media/tuijm.1e0bcd91.png"}});