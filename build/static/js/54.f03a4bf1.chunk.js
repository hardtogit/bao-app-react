webpackJsonp([54],{28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,s=n(2),c=o(s),f=n(5),p=o(f),_=n(3),d=o(_),m=n(4),b=o(m),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,c["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),g=o(h),y=n(8),v=o(y),k=n(30),C=o(k),w=n(9),T=o(w),S=(u=l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.state={disable:!0,message:""},n}return r(t,e),x(t,[{key:"open",value:function(e,t){var n=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){n.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:g["default"].createElement("div",{className:(0,v["default"])(C["default"].Tipbar,this.props.className)},g["default"].createElement("span",{className:C["default"].text},this.state.message||this.props.text))}}]),t}(g["default"].Component),l.propTypes={text:T["default"].string},u);t["default"]=S},29:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},30:[2322,29],49:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"a{text-decoration:none}.ml0___Lrba9{margin-left:0}.mt15___3Iu-Y{margin-top:15px}.mt30___mElkZ{margin-top:30px}.topBar___sdCDR{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___ptMsa{text-align:left;color:#00a6e2}.topBarLeft___ptMsa,.topBarRight___1-WHt{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1-WHt{text-align:right}.markTitle___1Ryki{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___suO5X{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___1oJxV{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___3LCCb{margin-top:40px;margin-left:15px;margin-right:15px}.loading____zTXo{width:100%;text-align:center;color:#fff;font-size:18px}.loading____zTXo,.loading____zTXo>span{display:inline-block}.center___2mH3M{text-align:center}.content___75OOP{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___29ByO{left:0}",""]),t.locals={ml0:"ml0___Lrba9",mt15:"mt15___3Iu-Y",mt30:"mt30___mElkZ",topBar:"topBar___sdCDR",topBarLeft:"topBarLeft___ptMsa",topBarRight:"topBarRight___1-WHt",markTitle:"markTitle___1Ryki",panel:"panel___suO5X",panelContent:"panelContent___1oJxV",buttonWrap:"buttonWrap___3LCCb",loading:"loading____zTXo",center:"center___2mH3M",content:"content___75OOP",tip:"tip___29ByO"}},50:function(e,t,n){var o=n(49);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},104:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,s=n(2),c=o(s),f=n(5),p=o(f),_=n(3),d=o(_),m=n(4),b=o(m),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,c["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),g=o(h),y=n(8),v=o(y),k=n(33),C=(o(k),n(123)),w=o(C),T=n(9),S=o(T),E=(u=l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.handleAppStateChange=function(e){if("inactive"==e)n.exitTime=(new Date).getTime();else if("background"==e)n.exitTime=(new Date).getTime();else if("active"==e){if(!n.exitTime)return!1;var t=Math.round(((new Date).getTime()-n.exitTime)/1e3);t<=n.state.count?n.setState({count:n.state.count-t}):(n.setState({active:!0,count:0}),clearInterval(n.interval))}},n.state={active:!0,count:0,text:"发送验证码",time:0},n.exitTime="",n}return r(t,e),x(t,[{key:"tick",value:function(){var e=this.state,t=e.count,n=e.time;t>0?this.setState({count:t-1}):(this.setState({active:!0,time:n+1}),clearInterval(this.interval))}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.interval=setInterval(this.tick.bind(this),1e3)})},{key:"handleClick",value:function(){this.state.active&&(this.setState({active:!1,count:this.props.countdown||this.props.countdown}),this.setInterval(),this.props.onClick&&0==this.props.onClick()&&this.setState({active:!0,count:0}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderActiveStatus",value:function(){var e=this.props,t=e.label,n=e.init,o=this.state,a=o.text,i=o.time,r=t;return n&&0==i&&(r=a),g["default"].createElement("div",{className:(0,v["default"])(w["default"].verifyCode,this.props.className),style:this.props.containerStyle,onClick:this.handleClick.bind(this)},g["default"].createElement("span",{className:w["default"].text,style:this.props.textStyle},r))}},{key:"renderUnactiveStatus",value:function(e){var t=(this.props.format||this.props.format).replace(/\$time/,e);return g["default"].createElement("div",{className:(0,v["default"])(w["default"].verifyCode,w["default"].verifyCodeDisable,this.props.className),style:this.props.containerDisableStyle},g["default"].createElement("span",{className:(0,v["default"])(w["default"].text,w["default"].textDisable),style:this.props.textDisableStyle},t))}},{key:"render",value:function(){return this.state.active?this.renderActiveStatus(w["default"]):this.renderUnactiveStatus(this.state.count,w["default"])}},{key:"open",value:function(){this.handleClick()}}]),t}(g["default"].Component),l.propTypes={label:S["default"].string,countdown:S["default"].number,format:S["default"].string,onClick:S["default"].func,containerStyle:S["default"].object,containerDisableStyle:S["default"].object,textStyle:S["default"].object,textDisableStyle:S["default"].object},l.defaultProps={label:"重新发送",countdown:60,format:"$timeS"},u);t["default"]=E},115:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".verifyCode___3kbyl{width:122px;height:44px;background-color:#00a7e1;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.verifyCodeDisable___1pq7E{background-color:#45c4f0;border-color:#45c4f0;border-width:0}.verifyCodeWrap___1AZwh{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.text___2ZjGX{font-size:14px;text-align:center;color:#fff;display:block;width:100%}.textDisable___1XtuM{color:#87dfff}",""]),t.locals={verifyCode:"verifyCode___3kbyl",verifyCodeDisable:"verifyCodeDisable___1pq7E",verifyCodeWrap:"verifyCodeWrap___1AZwh",text:"text___2ZjGX",textDisable:"textDisable___1XtuM"}},123:[2322,115],225:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}.textContent___VnGLK{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___12jPR{color:#00a6e2}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir",textContent:"textContent___VnGLK",protocol:"protocol___12jPR"}},251:function(e,t,n){var o=n(225);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},319:function(e,t,n){e.exports=n.p+"static/media/regBack.f08fc33c.png"},1075:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),s=a(u),c=n(5),f=a(c),p=n(3),_=a(p),d=n(4),m=a(d),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=n(1),h=a(x),g=n(11),y=n(10),v=n(91),k=a(v),C=n(42),w=a(C),T=n(12),S=a(T),E=n(78),I=a(E),B=n(104),M=a(B),D=n(28),N=a(D),R=n(251),W=a(R),z=n(50),V=a(z),A=n(32),P=o(A),j=n(26),L=a(j),O=n(319),X=a(O),H=n(1880),Y=a(H),G=n(20),J=a(G),K=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.onValid=function(){if(n.props.checkVerifyCaptchaPending)return!1;var e=n.refs.form.getValue();n.props.checkVerifyCaptcha(n.props.mobile,e.captcha)},n.onInvalid=function(e,t,o){n.setState({errorMessage:o})},n.openTipbar=function(e){n.refs.tipbar.open(e)},n.sendVerifyCode=function(){var e=n.props,t=e.goVerifyCode,o=e.mobile;t(o)},n.state={init:!0,flage:!0},n}return l(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,n=e.go;t?this.refs.verifyCode.open():this.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){n("/register")}}),this.setState({flage:!1})}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.data;t&&(100==t.code&&this.state.init&&(this.props.savenum(this.refs.form.getValue().captcha),this.props.go("/registerSetPassword"),this.setState({init:!1})),300==t.code&&this.openTipbar("验证码错误，请重新输入验证码"),302==t.code&&this.openTipbar("手机号已经被注册"),301==t.code&&this.openTipbar("验证码失效，请重新获取验证码"))}},{key:"Dom",value:function(){var e=this.state.flage;return h["default"].createElement("div",null,h["default"].createElement("div",{className:V["default"].content},h["default"].createElement("span",{className:V["default"].markTitle},"验证码已发送，请填写"),h["default"].createElement(I["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},h["default"].createElement(k["default"],{ref:"captcha",name:"captcha",keyboardType:"numeric",type:"validateItem",icon:h["default"].createElement("div",{className:W["default"].Icon},h["default"].createElement("img",{src:Y["default"]})),containerStyle:{paddingRight:"15px"},right:h["default"].createElement(M["default"],{ref:"verifyCode",onClick:!e&&this.sendVerifyCode||null,noInit:!0,containerStyle:{backgroundColor:"#fff",height:43},containerDisableStyle:{backgroundColor:"#fff",height:43},textStyle:{fontSize:16,color:"#45c3f0",textAlign:"right"},textDisableStyle:{color:"#888",fontSize:12,textAlign:"right"}}),reg:{required:{message:"验证码不能为空"},captcha:{message:"请输入正确的验证码"}},borderType:"four"}),h["default"].createElement(w["default"],{className:W["default"].buttonWrap,text:"提交",type:"submit"})),h["default"].createElement(N["default"],{ref:"tipbar"})))}},{key:"render",value:function(){var e=this.props.mobile,t=void 0;return e&&(t=this.Dom()),h["default"].createElement("div",{className:V["default"].panel,style:{backgroundColor:"#fff",paddingTop:0}},h["default"].createElement(S["default"],{backgroundColor:"#fff",leftNode:h["default"].createElement("img",{src:X["default"],className:W["default"].backImg}),onLeft:this.props.goBack}),t,h["default"].createElement(L["default"],{ref:"alert"}))}}]),t}(h["default"].Component),Z=function(e){var t=e.infodata;return{mobile:t.getIn(["REGISTER_NUM","mobile"]),data:t.getIn(["CHECK_VERIFY_CAPTCHA","data"])}},U=function(e){return{savenum:function(t){e({type:P.REGISTER_NUM,key:"code",data:t})},goBack:function(){e((0,y.goBack)())},go:function(t){e((0,y.push)(t))},goVerifyCode:function(t){var n=Date.parse(new Date)/1e3,o=t+1+n+J["default"].key();e({type:P.VERIFY_CAPTCHA,params:[{mobile:t,type:1,clientTime:n,sign:J["default"].md5(o)}]})},checkVerifyCaptcha:function(t,n){e({type:P.CHECK_VERIFY_CAPTCHA,params:[{mobile:t,code:n}]})}}};t["default"]=(0,g.connect)(Z,U)(K)},1128:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1075),i=o(a);t["default"]=i["default"]},1880:function(e,t,n){e.exports=n.p+"static/media/yzmIcon.20e40b92.png"}});