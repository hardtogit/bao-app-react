webpackJsonp([19],{139:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir"}},148:[2087,139],202:function(e,t,n){e.exports=n.p+"static/media/regBack.f08fc33c.png"},894:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),c=a(u),f=n(5),p=a(f),s=n(3),_=a(s),d=n(4),m=a(d),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,c["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),h=a(b),x=n(9),y=n(10),v=n(71),k=a(v),C=n(38),I=a(C),T=n(11),E=a(T),w=n(59),S=a(w),B=n(180),V=a(B),N=n(33),R=a(N),W=n(148),A=a(W),M=n(49),P=a(M),z=n(18),D=o(z),H=n(23),J=a(H),K=n(202),Y=a(K),F=n(1726),G=a(F),L=n(20),j=a(L),O=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.onValid=function(){if(n.props.checkVerifyCaptchaPending)return!1;var e=n.refs.form.getValue();n.props.checkVerifyCaptcha(n.props.mobile,e.captcha)},n.onInvalid=function(e,t,o){n.setState({errorMessage:o})},n.openTipbar=function(e){n.refs.tipbar.open(e)},n.sendVerifyCode=function(){var e=n.props,t=e.goVerifyCode,o=e.mobile;t(o)},n.state={init:!0,flage:!0},n}return l(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,n=e.go;t?this.refs.verifyCode.open():this.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){n("/register")}}),this.setState({flage:!1})}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.data;t&&(100==t.code&&this.state.init&&(this.props.savenum(this.refs.form.getValue().captcha),this.props.go("/registerSetPassword"),this.setState({init:!1})),300==t.code&&this.openTipbar("验证码错误，请重新输入验证码"),302==t.code&&this.openTipbar("手机号已经被注册"),301==t.code&&this.openTipbar("验证码失效，请重新获取验证码"))}},{key:"Dom",value:function(){var e=this.state.flage;return h["default"].createElement("div",null,h["default"].createElement("div",{className:P["default"].content},h["default"].createElement("span",{className:P["default"].markTitle},"验证码已发送，请填写"),h["default"].createElement(S["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},h["default"].createElement(k["default"],{ref:"captcha",name:"captcha",keyboardType:"numeric",type:"validateItem",icon:h["default"].createElement("div",{className:A["default"].Icon},h["default"].createElement("img",{src:G["default"]})),containerStyle:{paddingRight:"15px"},right:h["default"].createElement(V["default"],{ref:"verifyCode",onClick:!e&&this.sendVerifyCode||null,noInit:!0,containerStyle:{backgroundColor:"#fff",height:43},containerDisableStyle:{backgroundColor:"#fff",height:43},textStyle:{fontSize:16,color:"#45c3f0",textAlign:"right"},textDisableStyle:{color:"#888",fontSize:12,textAlign:"right"}}),reg:{required:{message:"验证码不能为空"},captcha:{message:"请输入正确的验证码"}},borderType:"four"}),h["default"].createElement(I["default"],{className:A["default"].buttonWrap,text:"提交",type:"submit"})),h["default"].createElement(R["default"],{ref:"tipbar"})))}},{key:"render",value:function(){var e=this.props.mobile,t=void 0;return e&&(t=this.Dom()),h["default"].createElement("div",{className:P["default"].panel,style:{backgroundColor:"#fff",paddingTop:0}},h["default"].createElement(E["default"],{backgroundColor:"#fff",leftNode:h["default"].createElement("img",{src:Y["default"],className:A["default"].backImg}),onLeft:this.props.goBack}),t,h["default"].createElement(J["default"],{ref:"alert"}))}}]),t}(h["default"].Component),X=function(e){var t=e.infodata;return{mobile:t.getIn(["REGISTER_NUM","mobile"]),data:t.getIn(["CHECK_VERIFY_CAPTCHA","data"])}},q=function(e){return{savenum:function(t){e({type:D.REGISTER_NUM,key:"code",data:t})},goBack:function(){e((0,y.goBack)())},go:function(t){e((0,y.push)(t))},goVerifyCode:function(t){var n=Date.parse(new Date)/1e3,o=t+1+n+"base64:cHFfWlsxHtS6HdiVWiR7XbzmvqqJmSbrBLx7CQuKDT0=";e({type:D.VERIFY_CAPTCHA,params:[{mobile:t,type:1,clientTime:n,sign:j["default"].md5(o)}]})},checkVerifyCaptcha:function(t,n){e({type:D.CHECK_VERIFY_CAPTCHA,params:[{mobile:t,code:n}]})}}};t["default"]=(0,x.connect)(X,q)(O)},936:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(894),r=o(a);t["default"]=r["default"]},1726:function(e,t,n){e.exports=n.p+"static/media/yzmIcon.20e40b92.png"}});