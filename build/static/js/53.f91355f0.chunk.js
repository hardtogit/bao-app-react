webpackJsonp([53],{28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,u=a(2),c=n(u),p=a(5),f=n(p),d=a(3),_=n(d),h=a(4),m=n(h),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),b=n(x),y=a(8),v=n(y),k=a(30),E=n(k),I=a(9),w=n(I),T=(s=l=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return i(t,e),g(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:b["default"].createElement("div",{className:(0,v["default"])(E["default"].Tipbar,this.props.className)},b["default"].createElement("span",{className:E["default"].text},this.state.message||this.props.text))}}]),t}(b["default"].Component),l.propTypes={text:w["default"].string},s);t["default"]=T},29:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___3HZ5q{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___3HZ5q .text___KcEzd{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___3HZ5q",text:"text___KcEzd"}},30:[2322,29],49:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,"a{text-decoration:none}.ml0___26vaQ{margin-left:0}.mt15___35Rs9{margin-top:15px}.mt30___OrVm4{margin-top:30px}.topBar___Pk-GL{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___2TWUf{text-align:left;color:#00a6e2}.topBarLeft___2TWUf,.topBarRight___1GNjc{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1GNjc{text-align:right}.markTitle___1DU2v{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___1TQF9{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___2-VJ3{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___xK3fa{margin-top:40px;margin-left:15px;margin-right:15px}.loading___3vaX4{width:100%;text-align:center;color:#fff;font-size:18px}.loading___3vaX4,.loading___3vaX4>span{display:inline-block}.center___xD4uH{text-align:center}.content___SZovH{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___GGjLC{left:0}",""]),t.locals={ml0:"ml0___26vaQ",mt15:"mt15___35Rs9",mt30:"mt30___OrVm4",topBar:"topBar___Pk-GL",topBarLeft:"topBarLeft___2TWUf",topBarRight:"topBarRight___1GNjc",markTitle:"markTitle___1DU2v",panel:"panel___1TQF9",panelContent:"panelContent___2-VJ3",buttonWrap:"buttonWrap___xK3fa",loading:"loading___3vaX4",center:"center___xD4uH",content:"content___SZovH",tip:"tip___GGjLC"}},50:function(e,t,a){var n=a(49);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},101:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a){return t in e?(0,f["default"])(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,u,c,p=a(2),f=n(p),d=a(5),_=n(d),h=a(3),m=n(h),g=a(4),x=n(g),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,f["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),v=n(y),k=a(33),E=n(k),I=a(8),w=n(I),T=a(192),C=n(T),S=a(203),B=n(S),N=a(9),R=n(N),V=(u=s=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return n.switchShowStatus=function(){n.setState({status:!n.state.status})},n.renderRight=function(){var e=n.props.imgSty;return v["default"].createElement("div",{className:B["default"].right},v["default"].createElement("div",{onClick:n.switchShowStatus},v["default"].createElement("img",{className:B["default"].rightIcon,style:e,src:a(n.state.status?116:117)})))},n.state={value:n.props.defaultValue||"",status:!0},n.disable=!1,n.innerClickFlag=!1,n.validateRu=n.validateRun,n}return l(t,e),b(t,[{key:"setValue",value:function(e){this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"validateRun",value:function(e){return e?this.disable:this.validateInstance.validateItem(this.state.value,this.props.reg,this.props.name,this.props&&this.props.parent&&this.props.reg.equalTo&&this.props.parent.getValue())}},{key:"checkValid",value:function(){this.disable=!!this.validateRun().result}},{key:"shouldComponentUpdate",value:function(e,t){return!E["default"].isEqual(e,this.props)||!E["default"].isEqual(t,this.state)}},{key:"onChange",value:function(e,t){var a=this,n=e.target.value;if(this.preValue=this.state.value,this.setState({value:n}),"undefined"!=this.props.maxValue){var o=Number(this.props.maxValue);this.state.value>o&&(this.disable=!1)}setTimeout(function(){a.checkValid(),t&&t(n)},100)}},{key:"onBlur",value:function(e,t){t&&t();var a=this.validateRun();a.result||this.props.onInvalid&&this.props.onInvalid(a.name,a.value,a.message),this.props.onBlur&&this.props.onBlur()}},{key:"onFocus",value:function(e,t){t&&t(),this.props.onFocus&&this.props.onFocus()}},{key:"componentDidMount",value:function(){this.validateInstance=(0,C["default"])(),this.checkValid()}},{key:"blur",value:function(){this.refs.textInput.blur()}},{key:"renderLeft",value:function(){return this.props.label?v["default"].createElement("div",{className:!this.props.noleftPadding&&B["default"].left},v["default"].createElement("span",{className:B["default"].leftText,style:this.props.leftTextStyle},this.props.label)):null}},{key:"render",value:function(){var e=this,t=this.props;return v["default"].createElement("div",{className:(0,w["default"])([B["default"].container,t.borderType&&B["default"][t.borderType],B["default"][this.props.className]]),style:this.props.containerStyle},v["default"].createElement("div",{className:B["default"].wrap},this.props.icon,this.renderLeft(),v["default"].createElement("div",{className:B["default"].center},v["default"].createElement("input",{ref:"textInput",type:this.state.status?"password":"text",className:B["default"].centerInput,style:this.props.inputStyle,placeholder:t.placeholder,value:this.state.value,onChange:function(a){e.onChange(a,t.onChange)},onBlur:function(a){e.onBlur(a,t.onBlur)},onFocus:function(a){e.onFocus(a,t.onFocus)}})),this.renderRight()))}}]),t}(v["default"].Component),s.nameq="BasePasswordInput",s.propTypes=(c={className:R["default"].string,noleftPadding:R["default"].bool,label:R["default"].string,right:R["default"].element,name:R["default"].string,maxValue:R["default"].number,reg:R["default"].object,onInvalid:R["default"].func,borderType:R["default"].string,placeholder:R["default"].string},o(c,"noleftPadding",R["default"].bool),o(c,"containerStyle",R["default"].object),o(c,"inputStyle",R["default"].object),o(c,"leftTextStyle",R["default"].object),o(c,"icon",R["default"].element),o(c,"imgSty",R["default"].object),c),u);t["default"]=V},116:function(e,t,a){e.exports=a.p+"static/media/eye_hide_icon.ed660457.png"},117:function(e,t,a){e.exports=a.p+"static/media/eye_icon.881ad942.png"},225:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___3xtGI{background-color:#fff}.agreement___VFNJ4{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___VFNJ4 .agreementText___e73DU{color:#00a6e2;margin:0 5px}.Icon___3I_g4{margin-right:15px}.Icon___3I_g4 img{width:20px}.suBody___1dES3{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs____cL6o{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs____cL6o span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___1aaLo{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___1aaLo .button___Xa8_J{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___3sEPq{margin-top:71px;font-size:25px;text-align:center}.suText___BkysP{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___2U1hH{margin-top:20px;text-align:center}.suImg___2U1hH img{width:80%}.backImg___ZXEIP{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3CzK-{margin:30px 15px 0}.content___77_V5{top:0}.content___77_V5,.InputBox___ra5CY{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___3aDzy{margin:30px 0 0 15px}.textContent___3ky-q{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___2y0hp{color:#00a6e2}",""]),t.locals={header:"header___3xtGI",agreement:"agreement___VFNJ4",agreementText:"agreementText___e73DU",Icon:"Icon___3I_g4",suBody:"suBody___1dES3",suMs:"suMs____cL6o",buttonBox:"buttonBox___1aaLo",button:"button___Xa8_J",suTitle:"suTitle___3sEPq",suText:"suText___BkysP",suImg:"suImg___2U1hH",backImg:"backImg___ZXEIP",buttonWrap:"buttonWrap___3CzK-",content:"content___77_V5",InputBox:"InputBox___ra5CY",inputWrap:"inputWrap___3aDzy",textContent:"textContent___3ky-q",protocol:"protocol___2y0hp"}},251:function(e,t,a){var n=a(225);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},319:function(e,t,a){e.exports=a.p+"static/media/regBack.f08fc33c.png"},1074:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),u=o(s),c=a(5),p=o(c),f=a(3),d=o(f),_=a(4),h=o(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),x=o(g),b=a(11),y=a(21),v=a(10),k=a(91),E=o(k),I=a(101),w=o(I),T=a(42),C=o(T),S=a(12),B=o(S),N=a(78),R=o(N),V=a(28),P=o(V),L=a(251),M=o(L),j=a(50),G=o(j),U=a(20),W=o(U),z=a(32),F=n(z),D=a(26),H=o(D),O=a(319),q=o(O),A=a(1845),J=o(A),K=a(1866),X=o(K),Z=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.ifScan=function(e){a.state.checkBox?a.setState({checkBox:!1}):a.setState({checkBox:!0})},a.onValid=function(){var e=a.refs.form.getValue(),t=a.props,n=t.mobile,o=t.code;a.state.checkBox&&a.props.goRegister({mobile:n,verifyCode:o,password:e.password,codes:e.captcha,tokenId:tokenId,device:"WAP"})},a.onInvalid=function(e,t,n){a.setState({errorMessage:n})},a.openTipbar=function(e){a.refs.tipbar.open(e)},a.state={init:!0,checkBox:!0,letCheck:!1,send:!1},a}return l(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,a=e.code;t&&!a?this.alert("/registerVerifyMobile"):t&&a||this.alert("/register"),t&&this.props.getCaptcha(t)}},{key:"alert",value:function(e){var t=this;this.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){t.props.go(e)}})}},{key:"componentWillMount",value:function(){this.props.clean()}},{key:"componentDidUpdate",value:function(){this.refs.choice&&!this.state.letCheck&&(this.refs.choice.checked=!0,this.setState({letCheck:!0}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.syncCode,n=this;if(t){var o=t.code,r=this.refs.alert,i=this.state.init;100==o&&i&&this.setState({init:!1}),100==o&&(a&&100==a.code?(this.props.userInfo(),this.props.go("/registerSuccess")):setTimeout(function(){n.props.ifSync({access_sys:"platform"})},1e3)),300==o&&r.show({content:"验证码错误",okText:"确定"}),301==o&&r.show({content:"验证码过期",okText:"确定"}),302==o&&r.show({content:"该手机号已被注册",okText:"确定"}),303==o&&r.show({content:"推荐码不存在!",okText:"确定"})}}},{key:"Dom",value:function(){var e=this.props.captcha;return x["default"].createElement("div",null,x["default"].createElement("div",{className:G["default"].content},x["default"].createElement("span",{className:G["default"].markTitle},"设置登陆密码"),x["default"].createElement(R["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},x["default"].createElement(w["default"],{ref:"password",name:"password",icon:x["default"].createElement("div",{className:M["default"].Icon},x["default"].createElement("img",{src:J["default"]})),maxLength:16,placeholder:"6~16位密码",type:"validateItem",imgSty:{marginRight:"0px"},containerStyle:{paddingRight:"15px"},reg:{reg:{reg:W["default"].checkPassword,message:"请输入正确密码"}},borderType:"four"}),x["default"].createElement(E["default"],{ref:"captcha",name:"captcha",icon:x["default"].createElement("div",{className:M["default"].Icon},x["default"].createElement("img",{src:X["default"]})),placeholder:"推荐码（选填）",defaultValue:e&&e.data.code||"",type:"validateItem",containerStyle:{paddingRight:"15px"},borderType:"four"}),x["default"].createElement("p",{className:M["default"].textContent},x["default"].createElement("input",{ref:"choice",onChange:this.ifScan,style:{marginRight:"6px"},type:"checkbox"}),"我已阅读并同意宝点网",x["default"].createElement(y.Link,{to:"/privacy",className:M["default"].protocol},"《宝点网隐私条例》"),"和",x["default"].createElement(y.Link,{to:"/service",className:M["default"].protocol},"《宝点网服务协议》")),x["default"].createElement(C["default"],{className:M["default"].buttonWrap,text:"注册",type:"submit"}))))}},{key:"render",value:function(){var e=this.props,t=e.mobile,a=e.code,n=e.captcha,o=void 0;return t&&a&&n&&(o=this.Dom()),x["default"].createElement("div",{className:G["default"].panel,style:{backgroundColor:"#fff",paddingTop:0}},x["default"].createElement(B["default"],{backgroundColor:"#fff",leftNode:x["default"].createElement("img",{src:q["default"],className:M["default"].backImg}),onLeft:this.props.goBack}),o,x["default"].createElement(P["default"],{ref:"tipbar"}),x["default"].createElement(H["default"],{ref:"alert"}))}}]),t}(x["default"].Component),Q=function(e){var t=e.infodata;return{mobile:t.getIn(["REGISTER_NUM","mobile"]),code:t.getIn(["REGISTER_NUM","code"]),data:t.getIn(["REGISTER","data"]),captcha:t.getIn(["GET_CAPTCHA","data"]),authData:t.getIn(["AUTH_COOKIE","data"]),syncCode:t.getIn(["IF_SYNC","data"])}},Y=function(e){return{goBack:function(){e((0,v.goBack)())},go:function(t){e((0,v.push)(t))},goRegister:function(t){e({type:F.REGISTER,params:[t]})},clean:function(){e({type:"CLEAR_INFO_DATA",key:"REGISTER"})},setAuth:function(){e({type:"AUTH_COOKIE"})},getCaptcha:function(t){e({type:F.GET_CAPTCHA,params:[{mobile:t}]})},ifSync:function(t){e({type:F.IF_SYNC,params:[t]})},userInfo:function(){e({type:F.USER_INFO})}}};t["default"]=(0,b.connect)(Q,Y)(Z)},1126:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1074),r=n(o);t["default"]=r["default"]},1845:function(e,t,a){e.exports=a.p+"static/media/pwd.9688ad12.png"},1866:function(e,t,a){e.exports=a.p+"static/media/tuijm.1e0bcd91.png"}});