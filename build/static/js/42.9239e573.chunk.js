webpackJsonp([42],{20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,f=n(2),u=a(f),c=n(5),p=a(c),d=n(3),_=a(d),h=n(4),b=a(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=n(1),v=a(x),y=n(11),g=a(y),C=n(22),k=a(C),w=n(12),T=a(w),E=(s=l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.state={disable:!0,message:""},n}return r(t,e),m(t,[{key:"open",value:function(e,t){var n=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){n.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:v["default"].createElement("div",{className:(0,g["default"])(k["default"].Tipbar,this.props.className)},v["default"].createElement("span",{className:k["default"].text},this.state.message||this.props.text))}}]),t}(v["default"].Component),l.propTypes={text:T["default"].string},s);t["default"]=E},21:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},22:[2359,21],33:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"a{text-decoration:none}.ml0___Lrba9{margin-left:0}.mt15___3Iu-Y{margin-top:15px}.mt30___mElkZ{margin-top:30px}.topBar___sdCDR{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___ptMsa{text-align:left;color:#00a6e2}.topBarLeft___ptMsa,.topBarRight___1-WHt{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1-WHt{text-align:right}.markTitle___1Ryki{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___suO5X{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___1oJxV{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___3LCCb{margin-top:40px;margin-left:15px;margin-right:15px}.loading____zTXo{width:100%;text-align:center;color:#fff;font-size:18px}.loading____zTXo,.loading____zTXo>span{display:inline-block}.center___2mH3M{text-align:center}.content___75OOP{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___29ByO{left:0}",""]),t.locals={ml0:"ml0___Lrba9",mt15:"mt15___3Iu-Y",mt30:"mt30___mElkZ",topBar:"topBar___sdCDR",topBarLeft:"topBarLeft___ptMsa",topBarRight:"topBarRight___1-WHt",markTitle:"markTitle___1Ryki",panel:"panel___suO5X",panelContent:"panelContent___1oJxV",buttonWrap:"buttonWrap___3LCCb",loading:"loading____zTXo",center:"center___2mH3M",content:"content___75OOP",tip:"tip___29ByO"}},34:function(e,t,n){var a=n(33);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)},107:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,f=n(2),u=a(f),c=n(5),p=a(c),d=n(3),_=a(d),h=n(4),b=a(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=n(1),v=a(x),y=n(11),g=a(y),C=n(29),k=(a(C),n(131)),w=a(k),T=n(12),E=a(T),S=(s=l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.handleAppStateChange=function(e){if("inactive"==e)n.exitTime=(new Date).getTime();else if("background"==e)n.exitTime=(new Date).getTime();else if("active"==e){if(!n.exitTime)return!1;var t=Math.round(((new Date).getTime()-n.exitTime)/1e3);t<=n.state.count?n.setState({count:n.state.count-t}):(n.setState({active:!0,count:0}),clearInterval(n.interval))}},n.state={active:!0,count:0,text:"发送验证码",time:0},n.exitTime="",n}return r(t,e),m(t,[{key:"tick",value:function(){var e=this.state,t=e.count,n=e.time;t>0?this.setState({count:t-1}):(this.setState({active:!0,time:n+1}),clearInterval(this.interval))}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.interval=setInterval(this.tick.bind(this),1e3)})},{key:"handleClick",value:function(){this.state.active&&(this.setState({active:!1,count:this.props.countdown||this.props.countdown}),this.setInterval(),this.props.onClick&&0==this.props.onClick()&&this.setState({active:!0,count:0}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderActiveStatus",value:function(){var e=this.props,t=e.label,n=e.init,a=this.state,o=a.text,i=a.time,r=t;return n&&0==i&&(r=o),v["default"].createElement("div",{className:(0,g["default"])(w["default"].verifyCode,this.props.className),style:this.props.containerStyle,onClick:this.handleClick.bind(this)},v["default"].createElement("span",{className:w["default"].text,style:this.props.textStyle},r))}},{key:"renderUnactiveStatus",value:function(e){var t=(this.props.format||this.props.format).replace(/\$time/,e);return v["default"].createElement("div",{className:(0,g["default"])(w["default"].verifyCode,w["default"].verifyCodeDisable,this.props.className),style:this.props.containerDisableStyle},v["default"].createElement("span",{className:(0,g["default"])(w["default"].text,w["default"].textDisable),style:this.props.textDisableStyle},t))}},{key:"render",value:function(){return this.state.active?this.renderActiveStatus(w["default"]):this.renderUnactiveStatus(this.state.count,w["default"])}},{key:"open",value:function(){this.handleClick()}}]),t}(v["default"].Component),l.propTypes={label:E["default"].string,countdown:E["default"].number,format:E["default"].string,onClick:E["default"].func,containerStyle:E["default"].object,containerDisableStyle:E["default"].object,textStyle:E["default"].object,textDisableStyle:E["default"].object},l.defaultProps={label:"重新发送",countdown:60,format:"$timeS"},s);t["default"]=S},118:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".verifyCode___3kbyl{width:122px;height:44px;background-color:#00a7e1;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.verifyCodeDisable___1pq7E{background-color:#45c4f0;border-color:#45c4f0;border-width:0}.verifyCodeWrap___1AZwh{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.text___2ZjGX{font-size:14px;text-align:center;color:#fff;display:block;width:100%}.textDisable___1XtuM{color:#87dfff}",""]),t.locals={verifyCode:"verifyCode___3kbyl",verifyCodeDisable:"verifyCodeDisable___1pq7E",verifyCodeWrap:"verifyCodeWrap___1AZwh",text:"text___2ZjGX",textDisable:"textDisable___1XtuM"}},131:[2359,118],477:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".formWrap___f-h94{margin-top:15px}.loading___1xDuv{width:100%;text-align:center;color:#fff;font-size:18px}.loading___1xDuv,.loading___1xDuv>span{display:inline-block}",""]),t.locals={formWrap:"formWrap___f-h94",loading:"loading___1xDuv"}},613:function(e,t,n){var a=n(477);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)},1148:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),f=o(s),u=n(5),c=o(u),p=n(3),d=o(p),_=n(4),h=o(_),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=n(1),x=o(m),v=n(9),y=n(88),g=o(y),C=n(31),k=o(C),w=n(10),T=o(w),E=n(72),S=o(E),D=n(107),I=o(D),M=n(20),W=o(M),R=n(613),A=o(R),P=n(34),V=o(P),H=n(17),N=o(H),O=n(24),j=o(O),B=n(23),z=a(B),X=n(8),L=n(84),Y=o(L),F=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.onValid=function(){var e=n.refs.form.getValue();n.props.sendCode(e.mobile,e.captcha)},n.onInvalid=function(e,t,a){n.setState({errorMessage:a})},n.sendVerifyCode=function(){var e=n.refs.form.getValue();return N["default"].checkMobile(e.mobile)?void n.props.getCode(e.mobile):(n.refs.tipbar.open("电话号码错误"),!1)},n.state={errorMessage:"",init:!0,active:!0},n}return l(t,e),b(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.code,n=e.sendCodeData,a=this,o=this.refs.alert;if(n){var i=n.code;300==i&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"验证失败",okText:"确定"})),301==i&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"手机号不存在",okText:"确定"})),302==i&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"手机号已注册",okText:"确定"})),303==i&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"签名错误",okText:"确定"})),304==i&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"用户不存在",okText:"确定"})),305==i&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"用户被冻结",okText:"确定"}))}if(t){var r=this.refs.alert;100==t&&this.state.init&&(this.props.push("/findpasswordSetPassword"),this.props.gxReders(this.refs.form.getValue()),this.setState({init:!1})),300==t&&r.show({content:"验证码错误，请重新输入验证码 ",okText:"确定"}),301==t&&r.show({content:"验证码失效，请重新获取验证码",okText:"确定"})}}},{key:"render",value:function(){return x["default"].createElement("div",{className:V["default"].panel},x["default"].createElement(T["default"],{onLeft:this.props.pop,title:"验证手机号码"}),x["default"].createElement(S["default"],{className:A["default"].formWrap,ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},x["default"].createElement(g["default"],{ref:"mobile",name:"mobile",label:"手机号",placeholder:"请输入11位手机号",type:"validateItem",reg:{required:{message:"手机号不能为空"},mobile:{message:"请输入正确的手机号"}},borderType:"two"}),x["default"].createElement(g["default"],{ref:"captcha",name:"captcha",label:"验证码",type:"validateItem",right:x["default"].createElement(I["default"],{ref:"verifyCode",onClick:this.sendVerifyCode,containerStyle:{height:44},init:!0}),reg:{required:{message:"验证码不能为空"},captcha:{message:"请输入正确的验证码"}},borderType:"three"}),x["default"].createElement(k["default"],{className:V["default"].buttonWrap,text:this.props.pending&&x["default"].createElement(Y["default"],{color:"rgba(255,255,255,.8)",text:"下一步",className:V["default"].loading})||"下一步",type:"submit"})),x["default"].createElement(W["default"],{ref:"tipbar"}),x["default"].createElement(j["default"],{ref:"alert"}))}}]),t}(x["default"].Component),Z=function(e,t){return{sendCodeData:e.infodata.getIn([z.VERIFY_CAPTCHA,"data"]),code:e.infodata.getIn([z.CHECK_VERIFY_CAPTCHA_W,"data"])&&e.infodata.getIn([z.CHECK_VERIFY_CAPTCHA_W,"data"]).code||!1,pending:e.infodata.getIn([z.CHECK_VERIFY_CAPTCHA_W,"pending"])}},U=function(e,t){return{getCode:function(t){var n=Date.parse(new Date)/1e3,a=t+2+n+N["default"].key();e({type:z.VERIFY_CAPTCHA,params:[{mobile:t,type:2,clientTime:n,sign:N["default"].md5(a)}]})},pop:function(){e((0,X.goBack)())},gxReders:function(t){e({type:z.FOR_GET_PWD,data:t})},sendCode:function(t,n){e({type:z.CHECK_VERIFY_CAPTCHA_W,params:[{mobile:t,code:n}]})},push:function(t){e((0,X.push)(t))}}};t["default"]=(0,v.connect)(Z,U)(F)},1200:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1148),i=a(o);t["default"]=i["default"]}});