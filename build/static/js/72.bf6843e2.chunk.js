webpackJsonp([72],{20:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,f=a(2),u=n(f),c=a(5),p=n(c),d=a(3),_=n(d),h=a(4),m=n(h),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),v=n(b),g=a(11),x=n(g),E=a(22),C=n(E),k=a(12),I=n(k),D=(s=l=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return r(t,e),y(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:v["default"].createElement("div",{className:(0,x["default"])(C["default"].Tipbar,this.props.className)},v["default"].createElement("span",{className:C["default"].text},this.state.message||this.props.text))}}]),t}(v["default"].Component),l.propTypes={text:I["default"].string},s);t["default"]=D},21:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},22:[2365,21],33:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,"a{text-decoration:none}.ml0___Lrba9{margin-left:0}.mt15___3Iu-Y{margin-top:15px}.mt30___mElkZ{margin-top:30px}.topBar___sdCDR{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___ptMsa{text-align:left;color:#00a6e2}.topBarLeft___ptMsa,.topBarRight___1-WHt{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1-WHt{text-align:right}.markTitle___1Ryki{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___suO5X{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___1oJxV{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___3LCCb{margin-top:40px;margin-left:15px;margin-right:15px}.loading____zTXo{width:100%;text-align:center;color:#fff;font-size:18px}.loading____zTXo,.loading____zTXo>span{display:inline-block}.center___2mH3M{text-align:center}.content___75OOP{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___29ByO{left:0}",""]),t.locals={ml0:"ml0___Lrba9",mt15:"mt15___3Iu-Y",mt30:"mt30___mElkZ",topBar:"topBar___sdCDR",topBarLeft:"topBarLeft___ptMsa",topBarRight:"topBarRight___1-WHt",markTitle:"markTitle___1Ryki",panel:"panel___suO5X",panelContent:"panelContent___1oJxV",buttonWrap:"buttonWrap___3LCCb",loading:"loading____zTXo",center:"center___2mH3M",content:"content___75OOP",tip:"tip___29ByO"}},34:function(e,t,a){var n=a(33);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},109:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,f=a(2),u=n(f),c=a(5),p=n(c),d=a(3),_=n(d),h=a(4),m=n(h),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),v=n(b),g=a(11),x=n(g),E=a(29),C=(n(E),a(134)),k=n(C),I=a(12),D=n(I),S=(s=l=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.handleAppStateChange=function(e){if("inactive"==e)a.exitTime=(new Date).getTime();else if("background"==e)a.exitTime=(new Date).getTime();else if("active"==e){if(!a.exitTime)return!1;var t=Math.round(((new Date).getTime()-a.exitTime)/1e3);t<=a.state.count?a.setState({count:a.state.count-t}):(a.setState({active:!0,count:0}),clearInterval(a.interval))}},a.state={active:!0,count:0,text:"发送验证码",time:0},a.exitTime="",a}return r(t,e),y(t,[{key:"tick",value:function(){var e=this.state,t=e.count,a=e.time;t>0?this.setState({count:t-1}):(this.setState({active:!0,time:a+1}),clearInterval(this.interval))}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.interval=setInterval(this.tick.bind(this),1e3)})},{key:"handleClick",value:function(){this.state.active&&(this.setState({active:!1,count:this.props.countdown||this.props.countdown}),this.setInterval(),this.props.onClick&&0==this.props.onClick()&&this.setState({active:!0,count:0}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderActiveStatus",value:function(){var e=this.props,t=e.label,a=e.init,n=this.state,i=n.text,o=n.time,r=t;return a&&0==o&&(r=i),v["default"].createElement("div",{className:(0,x["default"])(k["default"].verifyCode,this.props.className),style:this.props.containerStyle,onClick:this.handleClick.bind(this)},v["default"].createElement("span",{className:k["default"].text,style:this.props.textStyle},r))}},{key:"renderUnactiveStatus",value:function(e){var t=(this.props.format||this.props.format).replace(/\$time/,e);return v["default"].createElement("div",{className:(0,x["default"])(k["default"].verifyCode,k["default"].verifyCodeDisable,this.props.className),style:this.props.containerDisableStyle},v["default"].createElement("span",{className:(0,x["default"])(k["default"].text,k["default"].textDisable),style:this.props.textDisableStyle},t))}},{key:"render",value:function(){return this.state.active?this.renderActiveStatus(k["default"]):this.renderUnactiveStatus(this.state.count,k["default"])}},{key:"open",value:function(){this.handleClick()}}]),t}(v["default"].Component),l.propTypes={label:D["default"].string,countdown:D["default"].number,format:D["default"].string,onClick:D["default"].func,containerStyle:D["default"].object,containerDisableStyle:D["default"].object,textStyle:D["default"].object,textDisableStyle:D["default"].object},l.defaultProps={label:"重新发送",countdown:60,format:"$timeS"},s);t["default"]=S},120:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".verifyCode___3kbyl{width:122px;height:44px;background-color:#00a7e1;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.verifyCodeDisable___1pq7E{background-color:#45c4f0;border-color:#45c4f0;border-width:0}.verifyCodeWrap___1AZwh{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.text___2ZjGX{font-size:14px;text-align:center;color:#fff;display:block;width:100%}.textDisable___1XtuM{color:#87dfff}",""]),t.locals={verifyCode:"verifyCode___3kbyl",verifyCodeDisable:"verifyCodeDisable___1pq7E",verifyCodeWrap:"verifyCodeWrap___1AZwh",text:"text___2ZjGX",textDisable:"textDisable___1XtuM"}},134:[2365,120],1179:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),s=n(l),f=a(5),u=n(f),c=a(3),p=n(c),d=a(4),_=n(d),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),y=n(m),b=a(8),v=a(88),g=n(v),x=a(31),E=n(x),C=a(10),k=n(C),I=a(23),D=n(I),S=a(72),T=n(S),N=a(109),O=n(N),R=a(20),w=n(R),A=a(34),B=n(A),G=a(17),H=n(G),M=a(24),V=a(9),F=a(16),L=n(F),P=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return a.onValid=function(){var e=a.refs.form.getValue(),t=(e.mobile,e.captcha);return""==a.state.ref?(a.refs.tip.open("请重新发送验证码"),!1):0==passGuard3.getLength()?(a.refs.tip.open("密码不能为空"),!1):1==passGuard3.getValid()?(a.refs.tip.open("交易密码错误"),!1):(a.setState({time1:0,time2:0}),a.props.cleanData(),void a.props.verifyCode({verifyCode:t,smsReference:a.state.ref,device:"WAP"}))},a.onInvalid=function(e,t,n){a.refs.tip.open(n)},a.sendVerifyCode=function(){a.setState({time:0});var e=a.refs.form.getValue(),t=e.mobile;return H["default"].checkMobile(t)?void a.props.getVerifyCode(+t):(a.refs.tip.open("请输入正确的手机号"),void a.refs.code.setState({active:!0}))},a.state={errorMessage:"",time:0,time1:0,time2:0,ref:""},a}return r(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.mobile,e.load);t()}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.mobile,n=e.sendCode,i=e.verifySendData,o=e.verifyCodeData,r=e.verifyCodeRightData,l=e.bindResData,s=e.verifyBindMobileData,f=(e.goBankPage,this.refs.alert);if(goBankData&&100==goBankData.code?(this.props.clearState(),this.props.push("/user/setting/bankPage?url="+goBankData.data.url)):goBankData&&100!=goBankData.code&&(this.props.clearState(),this.refs.tip.open("订单生成失败!")),n&&1==n.status&&this.state.time<=3&&(this.setState({time:this.state.time+1}),i&&"0001"==i.code?this.setState({ref:i.data.ref}):this.state.time>=3?(this.setState({pending:!1}),i&&"0001"!=i.code?this.refs.tip.open(i.msg):this.refs.tip.open("验证码发送失败"),this.refs.code.setState({active:!0})):setTimeout(function(){t.props.verifySend(n.msgId)},2e3)),o&&1==o.status&&this.state.time1<=3&&(this.setState({time1:this.state.time1+1}),r&&"0001"==r.code?this.props.goBankPage({type:474,way:1,returnUrl:"",data:{newMobile:this.refs.form.getValue().mobile,smsReference:this.state.ref,device:"WAP"}}):this.state.time1>=3?(this.setState({pending:!1}),r&&"0001"!=r.code?this.refs.tip.open(r.msg):this.refs.tip.open("验证码发送失败"),this.refs.code.setState({active:!0})):setTimeout(function(){t.props.verifyCodeRight(o.msgId)},2e3)),l)if(301==l.code)this.refs.tip.open("交易密码错误");else if(302==l.code)this.refs.tip.open("手机号已存在");else if(1==l.status&&this.state.time2<=3)if(this.setState({time2:this.state.time2+1}),s&&"0001"==s.code){var u=this.refs.form.getValue(),c=u.mobile;this.props.bindSuccess(""+c),f.show({content:"绑定成功",okText:"确定",okCallback:function(){return t.props.replace("/securityCenter")}})}else this.state.time2>=3?(this.setState({pending:!1}),s&&"0001"!=s.code?this.refs.tip.open(s.msg):this.refs.tip.open("验证码发送失败"),this.refs.code.setState({active:!0})):setTimeout(function(){t.props.verifyCodeRight(l.msgId)},2e3);a&&""==a&&this.alert()}},{key:"alert",value:function(){var e=this,t=this.refs.alert;t.show({content:"您还没有绑定手机",okText:"去绑定",okCallback:function(){e.props.push("/user/setting/mobileBind")}})}},{key:"loadDom",value:function(){return y["default"].createElement(L["default"],null)}},{key:"render",value:function(){this.props.mobile;return y["default"].createElement("div",{className:B["default"].panel},y["default"].createElement(k["default"],{title:"绑定新手机"}),y["default"].createElement("div",null,y["default"].createElement(T["default"],{className:B["default"].mt15,ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},y["default"].createElement(g["default"],{ref:"mobile",name:"mobile",label:"手机号",maxLength:11,keyboardType:"numeric",placeholder:"请输入11位手机号",type:"validateItem",reg:{required:{message:"请输入正确的手机号"},mobile:{message:"请输入正确的手机号"}},borderType:"four"}),y["default"].createElement(g["default"],{ref:"captcha",name:"captcha",label:"验证码",keyboardType:"numeric",type:"validateItem",right:y["default"].createElement(O["default"],{ref:"code",onClick:this.sendVerifyCode,label:"发送验证码"}),reg:{required:{message:"请输入正确的验证码"},captcha:{message:"请输入正确的验证码"}},borderType:"four"}),y["default"].createElement(E["default"],{className:B["default"].buttonWrap,text:"绑定手机",type:"submit"}))),y["default"].createElement(w["default"],{className:B["default"].tip,ref:"tip"}),y["default"].createElement(D["default"],{ref:"alert"}))}}]),t}(y["default"].Component),W=function(e,t){return{mobile:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"])&&e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]).data.mobile||!1,sendCode:e.infodata.getIn(["STORE_SEND_CODE_CHANGE","data"]),verifySendData:e.infodata.getIn(["CHANGE_CODE_VERIFY","data"]),verifyCodeData:e.infodata.getIn(["STORE_CHANGE_PHONE_VERIFY_CODE","data"]),verifyCodeRightData:e.infodata.getIn(["CHANGE_CODE_RIGHT_VERIFY","data"]),bindResData:e.infodata.getIn(["CHANGE_CODE_RIGHT_VERIFY","data"]),verifyBindMobileData:e.infodata.getIn(["VERIFY_BIND_MOBILE","data"]),goBankData:e.infodata.getIn(["GO_BANK_PAGE","data"])}},Y=function(e,t){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})},getVerifyCode:function(t){e({type:"STORE_SEND_CODE_CHANGE",params:[{telNo:""+t,transcode:46749,device:"WAP"}]})},verifySend:function(t){e({type:"CHANGE_CODE_VERIFY",params:[{id:t}]})},verifyCode:function(t){e({type:"STORE_CHANGE_PHONE_VERIFY_CODE",params:[t]})},verifyCodeRight:function(t){e({type:"CHANGE_CODE_RIGHT_VERIFY",params:[{id:t}]})},push:function(t){e((0,V.push)(t))},clearState:function(){e({type:"CLEAR_INFO_DATA",key:"GO_BANK_PAGE"})},cleanData:function(){e({type:"CLEAR_INFO_DATA",key:"STORE_SEND_CODE_CHANGE"}),e({type:"CLEAR_INFO_DATA",key:"CHANGE_CODE_RIGHT_VERIFY"}),e({type:"CLEAR_INFO_DATA",key:"CHANGE_CODE_VERIFY"}),e({type:"CLEAR_INFO_DATA",key:"STORE_CHANGE_PHONE_VERIFY_CODE"}),e({type:"CLEAR_INFO_DATA",key:"CHANGE_CODE_RIGHT_VERIFY"}),e({type:"CLEAR_INFO_DATA",key:"VERIFY_BIND_MOBILE"})},goBankPage:function(t){e({type:"GO_BANK_PAGE",params:[t]})},bindMobile:function(t){e({type:"STORE_BIND_MOBILE_MODIFY",params:[t]})},verifyBindMobile:function(t){e({type:"VERIFY_BIND_MOBILE",params:[{id:t}]})},replace:function(t){e((0,V.replace)(t))},bindSuccess:function(t){e({type:M.BIND_MOBILE_SUCCESS,key:"USER_INFO_WITH_LOGIN",data:t})}}};t["default"]=(0,b.connect)(W,Y)(P)}});