webpackJsonp([74],{15:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},16:[2322,15],28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,u=a(2),f=n(u),p=a(5),c=n(p),d=a(3),_=n(d),h=a(4),m=n(h),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,f["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),y=n(b),v=a(8),x=n(v),k=a(30),w=n(k),E=a(9),T=n(E),S=(s=l=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return i(t,e),g(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:y["default"].createElement("div",{className:(0,x["default"])(w["default"].Tipbar,this.props.className)},y["default"].createElement("span",{className:w["default"].text},this.state.message||this.props.text))}}]),t}(y["default"].Component),l.propTypes={text:T["default"].string},s);t["default"]=S},29:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},30:[2322,29],49:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,"a{text-decoration:none}.ml0___Lrba9{margin-left:0}.mt15___3Iu-Y{margin-top:15px}.mt30___mElkZ{margin-top:30px}.topBar___sdCDR{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___ptMsa{text-align:left;color:#00a6e2}.topBarLeft___ptMsa,.topBarRight___1-WHt{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1-WHt{text-align:right}.markTitle___1Ryki{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___suO5X{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___1oJxV{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___3LCCb{margin-top:40px;margin-left:15px;margin-right:15px}.loading____zTXo{width:100%;text-align:center;color:#fff;font-size:18px}.loading____zTXo,.loading____zTXo>span{display:inline-block}.center___2mH3M{text-align:center}.content___75OOP{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___29ByO{left:0}",""]),t.locals={ml0:"ml0___Lrba9",mt15:"mt15___3Iu-Y",mt30:"mt30___mElkZ",topBar:"topBar___sdCDR",topBarLeft:"topBarLeft___ptMsa",topBarRight:"topBarRight___1-WHt",markTitle:"markTitle___1Ryki",panel:"panel___suO5X",panelContent:"panelContent___1oJxV",buttonWrap:"buttonWrap___3LCCb",loading:"loading____zTXo",center:"center___2mH3M",content:"content___75OOP",tip:"tip___29ByO"}},50:function(e,t,a){var n=a(49);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},94:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),r=n(o),i=a(8),l=n(i),s=a(16),u=n(s);t["default"]=function(e){var t=e.children,a=e.className,n=e.style;return r["default"].createElement("div",{className:(0,l["default"])(u["default"].page,a),style:n},t||"")}},101:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a){return t in e?(0,c["default"])(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,u,f,p=a(2),c=n(p),d=a(5),_=n(d),h=a(3),m=n(h),g=a(4),b=n(g),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),x=n(v),k=a(33),w=n(k),E=a(8),T=n(E),S=a(192),R=n(S),I=a(203),C=n(I),N=a(9),B=n(N),O=(u=s=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.switchShowStatus=function(){n.setState({status:!n.state.status})},n.renderRight=function(){var e=n.props.imgSty;return x["default"].createElement("div",{className:C["default"].right},x["default"].createElement("div",{onClick:n.switchShowStatus},x["default"].createElement("img",{className:C["default"].rightIcon,style:e,src:a(n.state.status?116:117)})))},n.state={value:n.props.defaultValue||"",status:!0},n.disable=!1,n.innerClickFlag=!1,n.validateRu=n.validateRun,n}return l(t,e),y(t,[{key:"setValue",value:function(e){this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"validateRun",value:function(e){return e?this.disable:this.validateInstance.validateItem(this.state.value,this.props.reg,this.props.name,this.props&&this.props.parent&&this.props.reg.equalTo&&this.props.parent.getValue())}},{key:"checkValid",value:function(){this.disable=!!this.validateRun().result}},{key:"shouldComponentUpdate",value:function(e,t){return!w["default"].isEqual(e,this.props)||!w["default"].isEqual(t,this.state)}},{key:"onChange",value:function(e,t){var a=this,n=e.target.value;if(this.preValue=this.state.value,this.setState({value:n}),"undefined"!=this.props.maxValue){var o=Number(this.props.maxValue);this.state.value>o&&(this.disable=!1)}setTimeout(function(){a.checkValid(),t&&t(n)},100)}},{key:"onBlur",value:function(e,t){t&&t();var a=this.validateRun();a.result||this.props.onInvalid&&this.props.onInvalid(a.name,a.value,a.message),this.props.onBlur&&this.props.onBlur()}},{key:"onFocus",value:function(e,t){t&&t(),this.props.onFocus&&this.props.onFocus()}},{key:"componentDidMount",value:function(){this.validateInstance=(0,R["default"])(),this.checkValid()}},{key:"blur",value:function(){this.refs.textInput.blur()}},{key:"renderLeft",value:function(){return this.props.label?x["default"].createElement("div",{className:!this.props.noleftPadding&&C["default"].left},x["default"].createElement("span",{className:C["default"].leftText,style:this.props.leftTextStyle},this.props.label)):null}},{key:"render",value:function(){var e=this,t=this.props;return x["default"].createElement("div",{className:(0,T["default"])([C["default"].container,t.borderType&&C["default"][t.borderType],C["default"][this.props.className]]),style:this.props.containerStyle},x["default"].createElement("div",{className:C["default"].wrap},this.props.icon,this.renderLeft(),x["default"].createElement("div",{className:C["default"].center},x["default"].createElement("input",{ref:"textInput",type:this.state.status?"password":"text",className:C["default"].centerInput,style:this.props.inputStyle,placeholder:t.placeholder,value:this.state.value,onChange:function(a){e.onChange(a,t.onChange)},onBlur:function(a){e.onBlur(a,t.onBlur)},onFocus:function(a){e.onFocus(a,t.onFocus)}})),this.renderRight()))}}]),t}(x["default"].Component),s.nameq="BasePasswordInput",s.propTypes=(f={className:B["default"].string,noleftPadding:B["default"].bool,label:B["default"].string,right:B["default"].element,name:B["default"].string,maxValue:B["default"].number,reg:B["default"].object,onInvalid:B["default"].func,borderType:B["default"].string,placeholder:B["default"].string},o(f,"noleftPadding",B["default"].bool),o(f,"containerStyle",B["default"].object),o(f,"inputStyle",B["default"].object),o(f,"leftTextStyle",B["default"].object),o(f,"icon",B["default"].element),o(f,"imgSty",B["default"].object),f),u);t["default"]=O},116:function(e,t,a){e.exports=a.p+"static/media/eye_hide_icon.ed660457.png"},117:function(e,t,a){e.exports=a.p+"static/media/eye_icon.881ad942.png"},1110:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),u=n(s),f=a(5),p=n(f),c=a(3),d=n(c),_=a(4),h=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),b=n(g),y=a(11),v=a(101),x=(n(v),a(42)),k=n(x),w=a(124),E=n(w),T=a(12),S=n(T),R=a(26),I=n(R),C=a(78),N=(n(C),a(28)),B=(n(N),a(50)),O=n(B),P=a(20),D=(n(P),a(32)),W=a(94),L=n(W),M=a(10),V=a(22),F=(n(V),a(79)),j=n(F),z=a(83),A=(n(z),function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.send=function(){passGuard3.setRandKey(sessionStorage.getItem("passwordFactor"));var e=passGuard3.getOutput(),t={password:e,smsReference:a.state.smsReference,passwordFactor:sessionStorage.getItem("passwordFactor"),device:"WAP",mapKey:sessionStorage.getItem("mapKey")};a.setState({pending:!0,time:0}),a.props.pwdSet(t)},a.state={errorMessage:"",smsReference:"",init:!0,time:0,pending:!1},a}return l(t,e),m(t,[{key:"componentDidMount",value:function(){var e=(this.refs.alert,this.props.location.query.smsReference);this.setState({smsReference:e}),passGuard3.generate("kb3",kb,0),$(function(){setTimeout(function(){kb.generate()},100)})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this;e.setData&&1==e.setData.status&&this.state.time<=3&&(a.setState({time:this.state.time+1}),e.verifyData&&"0001"==e.verifyData.code?(this.setState({pending:!1}),this.refs.success.show({text:"重置密码成功!",callback:function(){t.props.go("/user/setting"),t.props.clear()}})):this.state.time>=3?e.verifyData&&"0001"!=e.verifyData.code&&($("#kb3").val(""),this.setState({pending:!1}),this.refs.alert.show({content:"重置密码失败",okText:"确定"})):setTimeout(function(){a.props.tradePassWordVerify(e.setData.msgId)},2e3))}},{key:"render",value:function(){return o(this.props),b["default"].createElement(L["default"],null,b["default"].createElement("div",{className:O["default"].panel},b["default"].createElement(S["default"],{onLeft:this.props.pop,title:"设置新交易密码"}),b["default"].createElement("div",{style:{display:"flex",backgroundColor:"#fff",marginTop:"15px"}},b["default"].createElement("div",{style:{padding:"12px 15px",color:"#777"}},"新密码"),b["default"].createElement("input",{style:{flex:"1",border:"none"},id:"kb3",type:"text"})),b["default"].createElement("div",{style:{marginTop:"40px",padding:"15px"}},b["default"].createElement(k["default"],{onClick:this.send,text:this.state.pending?b["default"].createElement(E["default"],{text:"设置中"}):"确认设置"})),b["default"].createElement(I["default"],{ref:"alert"}),b["default"].createElement(j["default"],{ref:"success"})))}}]),t}(b["default"].Component)),H=function(e,t){return{data:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),setData:e.infodata.getIn(["NEW_TRADE_PASSWORD_SET","data"]),verifyData:e.infodata.getIn(["PUBLIC_VERIFY","data"])}},U=function(e){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})},pop:function(){e((0,M.goBack)())},go:function(t){e((0,M.push)(t))},clear:function(){e({type:D.CLAER_LC,key:["NEW_TRADE_PASSWORD_SET","PUBLIC_VERIFY"]})},pwdSet:function(t){e({type:"NEW_TRADE_PASSWORD_SET",params:[t]})},tradePassWordVerify:function(t){e({type:"PUBLIC_VERIFY",params:[{id:t}]})}}};t["default"]=(0,y.connect)(H,U)(A)}});