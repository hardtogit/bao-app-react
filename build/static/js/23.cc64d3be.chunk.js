webpackJsonp([23],{158:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}.textContent___VnGLK{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___12jPR{color:#00a6e2}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir",textContent:"textContent___VnGLK",protocol:"protocol___12jPR"}},170:[2383,158],205:function(e,t,n){e.exports=n.p+"static/media/regBack.f08fc33c.png"},871:function(e,t,n){e.exports=n.p+"static/media/pwd.9688ad12.png"},890:function(e,t,n){e.exports=n.p+"static/media/tuijm.1e0bcd91.png"},1173:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=a(l),s=n(5),p=a(s),f=n(3),d=a(f),_=n(4),m=a(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),x=a(h),b=n(10),y=n(20),k=n(9),v=n(54),I=a(v),E=n(136),T=a(E),w=n(24),C=a(w),R=n(11),S=a(R),N=n(44),B=a(N),A=n(27),M=a(A),W=n(170),G=a(W),P=n(53),L=a(P),O=n(17),K=a(O),D=n(19),V=o(D),j=n(21),z=a(j),J=n(205),Y=a(J),F=n(871),H=a(F),U=n(890),X=a(U),Z=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.ifScan=function(e){n.state.checkBox?n.setState({checkBox:!1}):n.setState({checkBox:!0})},n.onValid=function(){var e=n.refs.form.getValue(),t=n.props,o=t.mobile,a=t.code;n.state.checkBox&&n.props.goRegister({mobile:o,verifyCode:a,password:e.password,codes:e.captcha,tokenId:tokenId,device:"WAP"})},n.onInvalid=function(e,t,o){n.setState({errorMessage:o})},n.openTipbar=function(e){n.refs.tipbar.open(e)},n.state={init:!0,checkBox:!0,letCheck:!1,send:!1},n}return c(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,n=e.code;t&&!n?this.alert("/registerVerifyMobile"):t&&n||this.alert("/register"),t&&this.props.getCaptcha(t)}},{key:"alert",value:function(e){var t=this;this.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){t.props.go(e)}})}},{key:"componentWillMount",value:function(){this.props.clean()}},{key:"componentDidUpdate",value:function(){this.refs.choice&&!this.state.letCheck&&(this.refs.choice.checked=!0,this.setState({letCheck:!0}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=e.syncCode,o=this;if(t){var a=t.code,r=this.refs.alert,i=this.state.init;100==a&&i&&this.setState({init:!1}),100==a&&(n&&100==n.code?(this.props.userInfo(),this.props.go("/registerSuccess")):setTimeout(function(){o.props.ifSync({access_sys:"platform"})},1e3)),300==a&&r.show({content:"验证码错误",okText:"确定"}),301==a&&r.show({content:"验证码过期",okText:"确定"}),302==a&&r.show({content:"该手机号已被注册",okText:"确定"}),303==a&&r.show({content:"推荐码不存在!",okText:"确定"})}}},{key:"Dom",value:function(){var e=this.props.captcha;return x["default"].createElement("div",null,x["default"].createElement("div",{className:L["default"].content},x["default"].createElement("span",{className:L["default"].markTitle},"设置登陆密码"),x["default"].createElement(B["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},x["default"].createElement(T["default"],{ref:"password",name:"password",icon:x["default"].createElement("div",{className:G["default"].Icon},x["default"].createElement("img",{src:H["default"]})),maxLength:16,placeholder:"6~16位密码",type:"validateItem",imgSty:{marginRight:"0px"},containerStyle:{paddingRight:"15px"},reg:{reg:{reg:K["default"].checkPassword,message:"请输入正确密码"}},borderType:"four"}),x["default"].createElement(I["default"],{ref:"captcha",name:"captcha",icon:x["default"].createElement("div",{className:G["default"].Icon},x["default"].createElement("img",{src:X["default"]})),placeholder:"推荐码（选填）",defaultValue:e&&e.data.code||"",type:"validateItem",containerStyle:{paddingRight:"15px"},borderType:"four"}),x["default"].createElement("p",{className:G["default"].textContent},x["default"].createElement("input",{ref:"choice",onChange:this.ifScan,style:{marginRight:"6px"},type:"checkbox"}),"我已阅读并同意宝点网",x["default"].createElement(y.Link,{to:"/privacy",className:G["default"].protocol},"《宝点网隐私条例》"),"和",x["default"].createElement(y.Link,{to:"/service",className:G["default"].protocol},"《宝点网服务协议》")),x["default"].createElement(C["default"],{className:G["default"].buttonWrap,text:"注册",type:"submit"}))))}},{key:"render",value:function(){var e=this.props,t=e.mobile,n=e.code,o=e.captcha,a=void 0;return t&&n&&o&&(a=this.Dom()),x["default"].createElement("div",{className:L["default"].panel,style:{backgroundColor:"#fff",paddingTop:0}},x["default"].createElement(S["default"],{backgroundColor:"#fff",leftNode:x["default"].createElement("img",{src:Y["default"],className:G["default"].backImg}),onLeft:this.props.goBack}),a,x["default"].createElement(M["default"],{ref:"tipbar"}),x["default"].createElement(z["default"],{ref:"alert"}))}}]),t}(x["default"].Component),q=function(e){var t=e.infodata;return{mobile:t.getIn(["REGISTER_NUM","mobile"]),code:t.getIn(["REGISTER_NUM","code"]),data:t.getIn(["REGISTER","data"]),captcha:t.getIn(["GET_CAPTCHA","data"]),authData:t.getIn(["AUTH_COOKIE","data"]),syncCode:t.getIn(["IF_SYNC","data"])}},Q=function(e){return{goBack:function(){e((0,k.goBack)())},go:function(t){e((0,k.push)(t))},goRegister:function(t){e({type:V.REGISTER,params:[t]})},clean:function(){e({type:"CLEAR_INFO_DATA",key:"REGISTER"})},setAuth:function(){e({type:"AUTH_COOKIE"})},getCaptcha:function(t){e({type:V.GET_CAPTCHA,params:[{mobile:t}]})},ifSync:function(t){e({type:V.IF_SYNC,params:[t]})},userInfo:function(){e({type:V.USER_INFO})}}};t["default"]=(0,b.connect)(q,Q)(Z)},1223:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1173),r=o(a);t["default"]=r["default"]}});