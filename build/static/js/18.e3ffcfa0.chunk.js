webpackJsonp([18],{139:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir"}},148:[2111,139],179:function(e,t,n){e.exports=n.p+"static/media/regBack.f08fc33c.png"},781:function(e,t,n){e.exports=n.p+"static/media/pwd.9688ad12.png"},806:function(e,t,n){e.exports=n.p+"static/media/tuijm.1e0bcd91.png"},1023:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),c=o(u),s=n(5),p=o(s),f=n(3),d=o(f),_=n(4),m=o(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,c["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),x=o(h),b=n(10),v=n(9),y=n(72),k=o(y),I=n(122),E=o(I),w=n(38),T=o(w),N=n(11),R=o(N),C=n(60),B=o(C),S=n(34),M=o(S),W=n(148),A=o(W),P=n(49),G=o(P),J=n(20),z=o(J),V=n(18),j=a(V),D=n(23),K=o(D),L=n(179),O=o(L),Y=n(781),H=o(Y),U=n(806),F=o(U),X=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.onValid=function(){var e=n.refs.form.getValue(),t=n.props,a=t.mobile,o=t.code;n.props.goRegister({mobile:a,verifyCode:o,password:e.password,codes:e.captcha,tokenId:tokenId,device:"WAP"})},n.onInvalid=function(e,t,a){n.setState({errorMessage:a})},n.openTipbar=function(e){n.refs.tipbar.open(e)},n.state={init:!0},n}return l(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,n=e.code;t&&!n?this.alert("/registerVerifyMobile"):t&&n||this.alert("/register"),t&&this.props.getCaptcha(t)}},{key:"alert",value:function(e){var t=this;this.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){t.props.go(e)}})}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.data;if(t){var n=t.code,a=this.refs.alert,o=this.state.init;100==n&&o&&(this.setState({init:!1}),this.props.userInfo(),this.props.go("/registerSuccess")),300==n&&a.show({content:"验证码错误",okText:"确定"}),301==n&&a.show({content:"验证码过期",okText:"确定"}),302==n&&a.show({content:"该手机号已被注册",okText:"确定"}),303==n&&a.show({content:"推荐码不存在!",okText:"确定"})}}},{key:"Dom",value:function(){var e=this,t=this.props.captcha;return x["default"].createElement("div",null,x["default"].createElement("div",{className:G["default"].content},x["default"].createElement("span",{className:G["default"].markTitle},"设置登陆密码"),x["default"].createElement(B["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},x["default"].createElement(E["default"],{ref:"password",name:"password",icon:x["default"].createElement("div",{className:A["default"].Icon},x["default"].createElement("img",{src:H["default"]})),maxLength:16,placeholder:"6~16位密码",type:"validateItem",imgSty:{marginRight:"0px"},containerStyle:{paddingRight:"15px"},reg:{reg:{reg:z["default"].checkPassword,message:"请输入正确密码"}},borderType:"four"}),x["default"].createElement(k["default"],{ref:"captcha",name:"captcha",icon:x["default"].createElement("div",{className:A["default"].Icon},x["default"].createElement("img",{src:F["default"]})),placeholder:"推荐码（选填）",defaultValue:t&&t.data.code||"",type:"validateItem",containerStyle:{paddingRight:"15px"},borderType:"four"}),x["default"].createElement(T["default"],{className:A["default"].buttonWrap,text:"注册",type:"submit"})),x["default"].createElement("div",{className:A["default"].agreement},"同意",x["default"].createElement("span",{className:A["default"].agreementText,onClick:function(){e.props.go("/privacy")}},"《宝点网隐私条例》"),"和",x["default"].createElement("span",{className:A["default"].agreementText,onClick:function(){e.props.go("/service")}},"《宝点网服务协议》"))))}},{key:"render",value:function(){var e=this.props,t=e.mobile,n=e.code,a=e.captcha,o=void 0;return t&&n&&a&&(o=this.Dom()),x["default"].createElement("div",{className:G["default"].panel,style:{backgroundColor:"#fff",paddingTop:0}},x["default"].createElement(R["default"],{backgroundColor:"#fff",leftNode:x["default"].createElement("img",{src:O["default"],className:A["default"].backImg}),onLeft:this.props.goBack}),o,x["default"].createElement(M["default"],{ref:"tipbar"}),x["default"].createElement(K["default"],{ref:"alert"}))}}]),t}(x["default"].Component),Z=function(e){var t=e.infodata;return{mobile:t.getIn(["REGISTER_NUM","mobile"]),code:t.getIn(["REGISTER_NUM","code"]),data:t.getIn(["REGISTER","data"]),captcha:t.getIn(["GET_CAPTCHA","data"])}},q=function(e){return{goBack:function(){e((0,v.goBack)())},go:function(t){e((0,v.push)(t))},goRegister:function(t){e({type:j.REGISTER,params:[t]})},getCaptcha:function(t){e({type:j.GET_CAPTCHA,params:[{mobile:t}]})},userInfo:function(){e({type:j.USER_INFO})}}};t["default"]=(0,b.connect)(Z,q)(X)},1064:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1023),r=a(o);t["default"]=r["default"]}});