webpackJsonp([11],{102:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,h["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s,r,u=a(2),c=n(u),d=a(5),p=n(d),f=a(3),h=n(f),m=a(49),_=n(m),y=a(4),b=n(y),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),x=n(g),E=a(116),k=n(E),C=a(84),w=n(C),N=a(83),I=n(N),P=a(14),D=n(P),S=a(80),T=n(S),B=a(17),R=n(B),A=a(67),z=(n(A),a(16)),U=n(z),O=(r=s=function(e){function t(e){o(this,t);var a=l(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.show=function(e){var t=(0,_["default"])({},e,{money:R["default"].moneyFormat(e.money||"")});a.setState({top:0,error:"",options:t}),a.refs.dialog.show()},a.hide=function(){a.refs.dialog.hide()},a.okHandle=function(){var e=a.state.options;return e.okCallback?e.okCallback.call(null,a.hide,a.password):void a.hide()},a.cancelHandle=function(){var e=a.state.options;e.cancelCallback&&e.cancelCallback.call(null),a.hide()},a.focusHandle=function(){k["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="200px"},a.blurHandle=function(){k["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="50%"},a.password="",a.state={isOpen:!1,top:0,error:"",options:{}},a}return i(t,e),v(t,[{key:"render",value:function(){var e=this,t=this.state.options;return x["default"].createElement(w["default"],{ref:"dialog",style:{top:0}},x["default"].createElement("div",{className:(0,D["default"])(T["default"].modal,T["default"].reddemModal),style:{width:I["default"].getWidth()}},x["default"].createElement("a",{onClick:this.hide,className:T["default"].deleteIconWrap},x["default"].createElement("img",{className:T["default"].deleteIcon,src:a(172)})),t.title?x["default"].createElement("p",{className:T["default"].title},t.title):null,this.props.hasMoney?x["default"].createElement("div",{className:T["default"].content},x["default"].createElement("span",{className:T["default"].money},"￥",t.money)):x["default"].createElement("div",{className:T["default"].content}),x["default"].createElement("div",{className:T["default"].inputWrap},x["default"].createElement("input",{className:T["default"].input,ref:"textInput",placeholder:t.placeholder,onFocus:this.focusHandle,onBlur:this.blurHandle,onChange:function(t){e.password=t.nativeEvent.target.value},type:"password"})),this.state.error?x["default"].createElement("span",{className:T["default"].errorText},this.state.error):null,this.props.hasDetailText?x["default"].createElement("div",{className:T["default"].detailText},x["default"].createElement("p",null,t.detailText)):null,x["default"].createElement("div",{className:T["default"].bottom,style:{marginTop:26}},x["default"].createElement("span",{onClick:this.cancelHandle,className:T["default"].cancelBtn},t.cancelText||"取消"),x["default"].createElement("span",{onClick:this.okHandle,className:T["default"].okBtn},t.okText||"确定"))))}}]),t}(x["default"].Component),s.propTypes={title:U["default"].string,money:U["default"].number,okText:U["default"].string,okCallback:U["default"].func,cancelText:U["default"].string,cancelCallback:U["default"].func,placeholder:U["default"].string,detailText:U["default"].string},s.defaultProps={hasMoney:!0,hasDetailText:!1},r);t["default"]=O},134:function(e,t,a){e.exports=a.p+"static/media/0k2.2fc4ca54.png"},135:function(e,t,a){e.exports=a.p+"static/media/circle.f77227eb.png"},139:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=o(r),c=a(5),d=o(c),p=a(3),f=o(p),h=a(4),m=o(h),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),b=o(y),v=a(11),g=o(v),x=a(168),E=o(x),k=a(19),C=n(k),w=a(10),N=a(22),I=o(N),P=a(9),D=a(163),S=o(D),T=a(134),B=o(T),R=a(135),A=o(R),z=a(17),U=(o(z),function(e){function t(){var e,a,n,o;l(this,t);for(var s=arguments.length,r=Array(s),u=0;u<s;u++)r[u]=arguments[u];return a=n=i(this,(e=t.__proto__||(0,m["default"])(t)).call.apply(e,[this].concat(r))),n.nullDom=function(e){return b["default"].createElement("img",{src:e,className:E["default"].nullImg})},o=a,i(n,o)}return s(t,e),_(t,[{key:"renderVoucher",value:function(e,t){var a=this,n=this.props,o=n.selected,l=n.money,i=e.amount,s=e.apply,r=e.end_date,u=e.start_date,c=e.id,d=e.invest_money,p=e.type,f=void 0;return f=l<parseFloat(d)?b["default"].createElement("span",{className:E["default"].noUse},"不可用"):o.id==c?b["default"].createElement("img",{src:B["default"],alt:"选中"}):b["default"].createElement("img",{onClick:function(){a.props.onSelect(e)},src:A["default"]}),b["default"].createElement("div",{className:E["default"].rateCell,key:t,style:{width:this.props.screenW}},b["default"].createElement("div",null,b["default"].createElement("div",null,b["default"].createElement("p",null,i+"元"+p),f),b["default"].createElement("div",null,b["default"].createElement("p",null,"投资",d,"即可使用"),b["default"].createElement("p",null,s))),b["default"].createElement("div",{style:{backgroundColor:"rgb(125,206,159)"}},b["default"].createElement("p",null,"有效期",u,"到",r)))}},{key:"renderInterestRate",value:function(e,t){var a=this,n=this.props,o=n.selected,l=n.money,i=e.rate,s=e.apply,r=e.end_date,u=e.start_date,c=e.id,d=e.invest_money,p=e.type,f=void 0;return f=l<parseFloat(d)?b["default"].createElement("span",{className:E["default"].noUse},"不可用"):o.id==c?b["default"].createElement("img",{src:B["default"],alt:"选中"}):b["default"].createElement("img",{onClick:function(){a.props.onSelect(e)},src:A["default"]}),b["default"].createElement("div",{className:E["default"].rateCell,key:t,style:{width:this.props.screenW}},b["default"].createElement("div",null,b["default"].createElement("div",null,b["default"].createElement("p",null,i+"%"+p),f),b["default"].createElement("div",null,b["default"].createElement("p",null,"投资",d,"即可使用"),b["default"].createElement("p",null,s))),b["default"].createElement("div",{style:{backgroundColor:"#feb178"}},b["default"].createElement("p",null,"有效期",u,"到",r)))}},{key:"render",value:function(){var e=this,t=this.props.type;if(!this.props.datas)return null;var a=[],n=[];return this.props.datas.map(function(o,l){1==t?a.push(e.renderVoucher(o,l)):n.push(e.renderInterestRate(o,l))}),b["default"].createElement("div",{className:E["default"].listBox},a,n)}}]),t}(b["default"].Component)),O=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.changeType=function(e){e!=a.state.selectID&&a.setState({selectID:e})},a.selectHandle=function(e){a.setState({selectedCoupon:e})},a.useCouponHandle=function(){var e=a.state.selectedCoupon;a.props.setUseCoupons(e,!0),a.props.useFn(e),a.props.click(),"加息券"==e.type?a.props.useCoupon(e.rate):a.props.useCoupon()},a.unUseCouponHandle=function(){a.setState({selectedCoupon:""}),a.props.setUseCoupons("",!1),a.props.goBack()},a.nullCoupon=function(){a.props.nullCoupon(),a.props.useFn(null)},a.state={selectID:1,selectedCoupon:a.props.selectedCoupon},a}return s(t,e),_(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props,a=t.click,n=t.money;return b["default"].createElement("div",{className:E["default"].root},b["default"].createElement(g["default"],{title:"选择优惠券",leftNode:b["default"].createElement("span",{style:{paddingLeft:"15px"}},"关闭"),onLeft:a,style:{position:"absolute",left:"0px",top:"0px"}}),b["default"].createElement("div",{style:{height:44}}),b["default"].createElement("div",{className:E["default"].selectDiv},b["default"].createElement("div",{style:{borderBottomColor:1===this.state.selectID?"#00a6e2":"transparent"},onClick:function(){e.changeType(1)}},b["default"].createElement("p",{style:{color:1===this.state.selectID?"#00a6e2":"#626262"}},"抵用券")),b["default"].createElement("div",{style:{borderBottomColor:2===this.state.selectID?"#00a6e2":"transparent"},onClick:function(){e.changeType(2)}},b["default"].createElement("p",{style:{color:2===this.state.selectID?"#00a6e2":"#626262"}},"加息券"))),b["default"].createElement("div",{style:{flex:1,overflowY:"scroll",position:"relative"}},b["default"].createElement(U,{onSelect:this.selectHandle,datas:1==this.state.selectID?this.props.vouchers:this.props.interestRates,type:this.state.selectID,money:n,selected:this.state.selectedCoupon||""})),b["default"].createElement("div",{style:{height:50}}),b["default"].createElement("div",{className:E["default"].sure},b["default"].createElement("div",{onClick:this.nullCoupon},b["default"].createElement("p",null,"不使用优惠")),b["default"].createElement("div",{onClick:this.useCouponHandle},b["default"].createElement("p",null,"使用"))))}}]),t}(b["default"].Component),V=function(e,t){var a=e.infodata.getIn([C.AVAILABLE_COUPONS,"data"]);return{vouchers:a&&a.data&&a.data.filter(function(e){return"抵用券"===e.type}),interestRates:a&&a.data&&a.data.filter(function(e){return"加息券"===e.type}),selectedCoupon:e.useCoupons.getIn(["coupons","selectedCoupon"])}},M=function(e,t){return{setAppointPassword:function(t){e({type:C.SET_APPOINT_PASSWORD,payload:t})},push:function(t){e((0,P.push)(t))},goBack:function(){e((0,P.goBack)())},setUseCoupons:function(t,a){e({type:C.SET_USE_COUPONS,useCoupon:a,selectedCoupon:t})}}};t["default"]=(0,S["default"])()((0,w.connect)(V,M)((0,I["default"])(O)))},156:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___26zht{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;background:#f5f5f5}.root___26zht,.selectDiv___1ZdjX{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.selectDiv___1ZdjX{height:40px;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #ddd}.selectDiv___1ZdjX>div{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;border-bottom:2px solid transparent}.selectDiv___1ZdjX>div>p{font-size:16px;color:#000}.selectDiv___1ZdjX div:nth-child(1){border-bottom-color:#00a6e2}.selectDiv___1ZdjX div:nth-child(1)>p{color:#00a6e2}.rateCell___2WGU7{margin:10px 15px;height:171px;background:#fff}.rateCell___2WGU7>div:nth-child(1){height:131px;padding:0 20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1){height:50px;border-bottom:1px solid #888;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>p{line-height:50px;font-size:15px;color:#111}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>div{height:20px;margin-top:15px;width:20px;border-radius:10px;border:1px solid #00a7e1;background:transparent}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>img{height:20px;margin-top:15px;width:20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p{color:#888;font-size:13px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(1){margin-top:18px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(2){margin-top:10px}.rateCell___2WGU7>div:nth-child(2){background:#feb178;height:40px}.rateCell___2WGU7>div:nth-child(2)>p{color:#fff;margin-left:20px;line-height:40px;font-size:13px}.noUse___vAjam{line-height:49px;font-size:20px;color:#aaa}.sure___22RPV{position:absolute;bottom:0;height:50px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.sure___22RPV,.sure___22RPV>div{display:-webkit-box;display:-ms-flexbox;display:flex}.sure___22RPV>div{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#59c5ec}.sure___22RPV>div>p{font-size:16px;color:#fff}.sure___22RPV div:nth-child(1){width:30%}.sure___22RPV div:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;background:#00a7e1}.nullImg___2k9fu{width:161px;position:absolute;left:50%;top:50%}.listBox___1fRXU{position:absolute;left:0;top:0;width:100%;height:100%;overflow:scroll}",""]),t.locals={root:"root___26zht",selectDiv:"selectDiv___1ZdjX",rateCell:"rateCell___2WGU7",noUse:"noUse___vAjam",sure:"sure___22RPV",nullImg:"nullImg___2k9fu",listBox:"listBox___1fRXU"}},168:function(e,t,a){var n=a(156);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},208:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a){return t in e?(0,p["default"])(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(h["default"]?(0,h["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,u,c,d=a(2),p=n(d),f=a(5),h=n(f),m=a(3),_=n(m),y=a(34),b=n(y),v=a(4),g=n(v),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,p["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),E=a(1),k=n(E),C=a(68),w=n(C),N=a(102),I=n(N),P=a(93),D=n(P),S=a(45),T=n(S),B=a(17),R=n(B),A=a(291),z=n(A),U=a(14),O=n(U),V=a(16),M=n(V),j=(u=r=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return n.changeValueHandler=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.inputValue,t=arguments[1];if(n.props.balancePay===!1)return n.setState({chosen:n.state.chosen===n.props.BALANCEINDEX?n.props.priorityINDEX:n.state.chosen});if(e>+t)n.state.chosen===n.props.BALANCEINDEX?n.setState({chosen:n.props.priorityINDEX,disable:[n.props.BALANCEINDEX]}):n.setState({disable:[n.props.BALANCEINDEX]});else{var a=n.state.disable.indexOf(n.props.BALANCEINDEX),o={chosen:n.props.BALANCEINDEX};a!==-1&&(n.state.disable.splice(a,1),o.disable=n.state.disable),n.setState(o)}},n.openErrorDialog=function(e){var t=n.props,a=(t.type,t.money,t.go);n.refs.confirm.show({content:e,okText:"忘记密码",cancelText:"重试",okCallback:function(e){var t=JSON.parse(sessionStorage.getItem("bao-store"));t.isRegister&&t.isBindBankcard?(a("/user/setting/tradePasswordForget/verifyMobile"),e&&e()):t.isRegister?(push("/user/setting/cardBind"),e&&e()):(n.refs.store.show(),e&&e())},cancelCallback:function(){n.gotoPay()}})},n.openExceedErrorDialog=function(e){n.refs.confirm.show({content:"密码输入错误超过5次，请"+e+"分钟后重试或点击忘记密码重设密码",okText:"忘记密码",cancelText:"取消",okCallback:function(e){var t=JSON.parse(sessionStorage.getItem("bao-store"));t.isRegister&&t.isBindBankcard?(n.props.go("/user/setting/tradePasswordForget/verifyMobile"),e&&e()):t.isRegister?(push("/user/setting/cardBind"),e&&e()):(n.refs.store.show(),e&&e())}})},n.gotoPay=function(){R["default"].getPassErrorNums(n.props.user.username||"",function(){var e=n.props.inputValue;n.reddem=n.refs.reddem.show({title:"购买",money:e,okCallback:function(t,a){return R["default"].checkPassword(a)?(n._balancePay(a,e),void t()):n.refs.reddem.setState({error:"请输入正确的交易密码"})},cancelCallback:function(){}})},function(e){n.openExceedErrorDialog(e)})},n.filterBalancePay=function(e,t,a){return e.isSetTradePassword?e.ispaypwdeqloginpwd?n.refs.confirm.show({title:"安全提示",content:"您的交易密码和登录密码一致，为了您的账户安全，请重置交易密码",okCallback:function(e){t("/user/setting/tradePasswordForget",{redirectTo:"Buy"}),e()}}):void n.gotoPay():n.refs.confirm.show({title:"安全提示",content:"　投资需要设置交易密码,立即去设置？",okCallback:function(e){t("/user/setting/TradePasswordSet",{redirectTo:"Buy"}),e()}})},n.filterBankPay=function(e,t,a){var o=n.props.type;n.state.chosen;return e.isAuth?e.isbindSecurityCard?void n.props.overPay(n.props.inputValue,a):t("/user/setting/bankcardAdd",{redirectTo:"PayWeb",data:a,type:o}):t("/user/setting/identityAuth")},n.renderRadio=function(e,t){var o=~n.state.disable.indexOf(t+1);return k["default"].createElement("div",{className:z["default"].Radio,key:t,onClick:function(){o||n.selectPayWay(t)}},k["default"].createElement("span",{className:(0,O["default"])(z["default"].RadioLabel,o&&z["default"].disableText)},e),k["default"].createElement("div",{className:z["default"].RadioContent},t+1==n.props.BALANCEINDEX&&n.renderBalanceContent(o)),o?k["default"].createElement("img",{className:z["default"].RadioImg,src:a(236)}):n.state.chosen==t+1?k["default"].createElement("img",{className:z["default"].RadioImg,src:a(235)}):k["default"].createElement("img",{className:z["default"].RadioImg,src:a(237)}))},n.state={chosen:e.BALANCEINDEX,disable:[]},n.options=["托管账户余额","连连支付"],n}return s(t,e),x(t,[{key:"componentDidMount",value:function(){this.props.balancePay===!1&&this.setState({chosen:this.props.priorityINDEX}),this.changeValueHandler(this.props.inputValue,this.props.user.balance||0)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.go,n=t.depositbs,o=t.clearDataResult;if(e.balance==this.props.balance&&this.props.inputValue==e.inputValue||this.changeValueHandler(e.inputValue,e.balance),this.setState({visiblePay:e.visiblePay,visible:!!e.visiblePay}),e.balancePayPending?this.refs.loading.show("支付中..."):"depositB"!=this.props.type&&this.refs.loading.hide(),e.balancePayData&&e.depositbsBuyResultData){var l=e.balancePayData.code;100==l&&1==e.depositbsBuyResultData.data.status?(a("/depositInvestSuccessOld/B?productId="+this.props.productId+"&num="+this.props.num),e.clear()):this.props.time<=3?n(e.balancePayData):(e.clear(),o(),e.changePending(),this.refs.loading.hide(),this.openErrorDialog("支付出错了"))}if(e.balancePayData&&e.balancePayData.code&&!this.balancePayRedirectFlag){var i=e.balancePayData.code,s=e.balancePayPending;if(100==i&&s){var r=JSON.parse(sessionStorage.getItem("bao-user"));switch(r.isInvest=1,sessionStorage.setItem("bao-user",(0,b["default"])(r)),e.changePending(),this.props.type){case"depositA":a("/depositInvestSuccess/A");break;case"directInvest":a("/directInvestSuccess/"+this.props.inputValue+"?productId="+this.props.productId+"&num="+this.props.num+"&access_sys=platform");break;case"creditors":a("/creditorInvestSuccess/A");break;case"depositB":n(e.balancePayData)}this.balancePayRedirectFlag=!0}else if(342==i&&s)this.openExceedErrorDialog(e.balancePayData.data.minute),R["default"].savePassErrorDate(this.props.user.username||""),e.changePending(),this.refs.loading.hide(),e.clear();else if(s){var u="支付出错了";343==i&&(u="密码输入错误，请重新输入"),this.openErrorDialog(u),e.changePending(),this.refs.loading.hide(),e.clear()}}}},{key:"selectPayWay",value:function(e){return e+1!=this.state.chosen&&(this.setState({chosen:e+1}),void this.props.getChoose(e+1))}},{key:"_balancePay",value:function(e,t){this.props.onRequestBalancePay&&this.props.onRequestBalancePay(e,t)}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.parse(sessionStorage.getItem("bao-user")),a=this.props.go;2==this.state.chosen&&(e.chosen=2,this.filterBankPay(t,a,e)),1==this.state.chosen&&this.filterBalancePay(t,a,e)}},{key:"renderBalanceContent",value:function(e){return k["default"].createElement("div",{className:e?z["default"].contentTextDisable:z["default"].contentText},!isNaN(this.props.balance)&&this.props.balance+"元"||"",e?k["default"].createElement("span",{className:z["default"].contentMark}," (余额不足)"):null)}},{key:"render",value:function(){var e=this;return k["default"].createElement("div",{style:{}},k["default"].createElement(w["default"],{ref:"confirm"}),k["default"].createElement(I["default"],{ref:"reddem"}),k["default"].createElement(D["default"],{ref:"loading"}),k["default"].createElement(T["default"],{ref:"store"}),this.options.map(function(t,a){return e.props.balancePay===!1&&e.props.BALANCEINDEX===a+1?null:e.renderRadio(t,a)}))}}]),t}(k["default"].Component),r.propTypes=(c={type:M["default"].string,inputValue:M["default"].number,onClose:M["default"].func},o(c,"type",M["default"].string),o(c,"go",M["default"].func),c),r.defaultProps={BALANCEINDEX:1,priorityINDEX:2},u);t["default"]=j},370:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___16a1E{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;background:#f5f5f5}.bg___30WRx{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.title___10aGB{font-size:14px;color:#888;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:15px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.zg___2zeVC{position:absolute;left:0;top:0;width:100%;height:100%;background-color:red;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;z-index:9999}.scroll___22zyx{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.scroll___22zyx::-webkit-scrollbar{width:0}.scroll___22zyx::-webkit-scrollbar-thumb{border-radius:2px;background:#999}.infomation___32fbs{background:#fff;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex}.infomation___32fbs>div{-webkit-box-flex:1;-ms-flex:1;flex:1}.infomation___32fbs>div p:first-child{color:#898989;font-size:16px}.infomation___32fbs>div p:first-child>span{font-size:12px}.infomation___32fbs>div p:nth-child(2){margin-top:10px;font-size:18px;color:#000}.buyDiv___179-j{padding:17px 15px 27px;background:#fff;color:#000;font-size:16px}.buyDiv___179-j .buyTip___39qeh{font-size:12px}.expectIncome___h5Qpn{background-color:#fff;padding:0 0 0 15px;height:44}.expectIncome___h5Qpn .wrap___kVTuH{border-top:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.expectIncome___h5Qpn .name___2zGvu{color:#888;line-height:44px}.expectIncome___h5Qpn .profit___3Mtad{color:#ff7701;line-height:44px;-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.payMoney___1oqMx{background:#fff;padding:25px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #ddd}.payMoney___1oqMx>p:nth-child(1){line-height:20px;font-size:14px;color:#898989;-webkit-box-flex:1;-ms-flex:1;flex:1}.payMoney___1oqMx>p:nth-child(2){font-size:25px;color:#ff7701}.payBtn___8SZcY{padding:10px 15px 0;background:#f5f5f5}.payBtn___8SZcY>p{color:#888;font-size:14}.payBtn___8SZcY>div{margin-top:30px;height:54px;border-radius:3px;background:#49a7de;line-height:50px;font-size:16px;color:#fff;text-align:center}.coupon___2zRNl{background-color:#fcfcfc;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.coupon___2zRNl>span{font-size:16px}.coupon___2zRNl>div,.coupon___2zRNl>div div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.coupon___2zRNl>div div{position:relative;height:25px;background-color:#75cda1;padding:0 12px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#fff}.coupon___2zRNl>div div:after,.coupon___2zRNl>div div:before{content:'';height:30px;width:35px;position:absolute;background-color:#fcfcfc;border-radius:100%}.coupon___2zRNl>div div:before{top:-3px;left:-30px}.coupon___2zRNl>div div:after{top:-3px;right:-30px}.coupon___2zRNl>div:after{display:inline-block;content:'';width:9px;height:16px;background:url("+a(37)+");background-size:100% 100%;margin-left:7px;z-index:2}.discountBar___3AWpB{margin-top:20px;background-color:#fcfcfc;padding:0 15px}.discountBarTouch___CLUyt{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.discountBarName___1png_{-webkit-box-flex:1;-ms-flex:1;flex:1;fontsize:16px;color:#888}.textContent___3uTP0{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___FGzfi{color:#00a6e2}",""]),t.locals={root:"root___16a1E",bg:"bg___30WRx",title:"title___10aGB",zg:"zg___2zeVC",scroll:"scroll___22zyx",infomation:"infomation___32fbs",buyDiv:"buyDiv___179-j",buyTip:"buyTip___39qeh",expectIncome:"expectIncome___h5Qpn",wrap:"wrap___kVTuH",name:"name___2zGvu",profit:"profit___3Mtad",payMoney:"payMoney___1oqMx",payBtn:"payBtn___8SZcY",coupon:"coupon___2zRNl",discountBar:"discountBar___3AWpB",discountBarTouch:"discountBarTouch___CLUyt",discountBarName:"discountBarName___1png_",textContent:"textContent___3uTP0",protocol:"protocol___FGzfi"}},437:function(e,t,a){var n=a(370);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},1073:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=o(r),c=a(5),d=o(c),p=a(3),f=o(p),h=a(49),m=o(h),_=a(4),y=o(_),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),g=o(v),x=a(11),E=o(x),k=a(437),C=o(k),w=a(19),N=n(w),I=a(10),P=a(22),D=o(P),S=a(9),T=a(17),B=o(T),R=a(175),A=o(R),z=a(24),U=o(z),O=a(208),V=o(O),M=a(27),j=o(M),q=a(139),F=o(q),L=a(56),W=o(L),X=a(103),H=o(X),G=a(17),Z=o(G),Y=a(69),Q=o(Y),J=window.location.origin,K=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||(0,y["default"])(t)).call(this,e));return a.changePending=function(){a.setState({pending:!1})},a.directInvestBuy=function(e,t){var n=a.props.useCoupon?a.getCoupon():null,o=a.state.useCoupon;!o&&n&&(n.id=""),a.props.balancePay(a.directInvestId,a.state.quantity,e,a.props.location.state,n&&n.id||"")},a.onValid=function(){var e=a.state.select;1==e?a.refs.isAuth.isSecurityCard(a.successsFn,a.props.push,"/user/setting/tradePasswordSet"):a.refs.isAuth.isbindSecurityCard(a.successsFn,a.props.push,"/user/setting/securityCard")},a.successsFn=function(){var e=a.state.useCoupon&&a.getCoupon()||null,t=a.props.use;t&&100==t.code&&t.data.is&&e&&(e.id=""),a.refs.payProcess.open({id:a.directInvestId,num:a.state.quantity,couponId:e&&e.id||"",borrowPwd:a.borrowPwd})},a.changeQuantity=function(e){e<=0?a.refs.tipbar.open("购买份数必须为正整数!"):e>parseFloat(a.props.detail.left_quantity)&&a.refs.tipbar.open("剩余份数不足!"),a.setState({quantity:Number(e)})},a.voucherIsAvailable=function(e){var t=Number(a.state.quantity*a.state.unitPrice);return e.invest_money<=t},a.voucherIsNotAvailable=function(e){return!a.voucherIsAvailable(e)},a.getCoupon=function(){return a.props.selectedCoupon&&("抵用券"===a.props.selectedCoupon.type&&a.voucherIsAvailable(a.props.selectedCoupon)||"加息券"===a.props.selectedCoupon.type)?a.props.selectedCoupon:a.getMaxCoupon()},a.getPayTotal=function(e){var t=a.getCoupon(),n=a.state.useCoupon;return e?a.state.quantity*a.state.unitPrice:n&&a.props.useCoupon&&t&&"抵用券"===t.type?a.state.quantity*a.state.unitPrice-Number(t.amount):a.state.quantity*a.state.unitPrice},a.expectIncome=function(){var e=a.props.detail,t=a.state.rate;if(B["default"].isPlainObject(e))return"";var n=e.rate/100,o=a.getMaxCoupon();if(0!=t){var l=parseFloat(t)/100;n+=l}if(o&&"加息券"==o.type&&"boolean"==typeof t){var i=parseFloat(o.rate)/100;n+=i}if(a.props.useCoupon){var s=a.props.selectedCoupon||a.getMaxCoupon();s&&"加息券"===s.type&&+s.rate>=0&&+e.directRate>=0&&(n+=+s.rate/100)}return B["default"].padMoney(a.state.unitPrice*a.state.quantity*e.term*n/12)},a.overPay=function(e,t){var n=t.id,o=t.num,l=t.couponId,i="",s=2,r=a.props.location.state,u=Z["default"].combineUrl(J+"/mobile_api/directInvest/buy/"+n,{num:o,payPwd:i,type:s,couponId:l,borrowPwd:r,access_sys:"platform"});a.setState({url:u,payTop:"0px"})},a.selectPayHandle=function(e){a.setState({chosenPay:e})},a.renderDiscountBar=function(){var e=a.props.use;if(e&&100==e.code&&e.data.is)return g["default"].createElement("div",{className:C["default"].coupon},g["default"].createElement("span",null,e.data.name));if(a.state.couponsFetching)return g["default"].createElement("div",{className:C["default"].discountBarTouch},g["default"].createElement("p",{className:C["default"].discountBarName},"正在加载优惠券"));var t=a.getCoupon();if(!t||a.state.quantity<1){var n=a.props.use;if(n&&100==n.code&&n.data.is)return g["default"].createElement("div",{className:C["default"].coupon},g["default"].createElement("span",null,n.data.name));var o=a.state.vouchers.sort(function(e,t){return Number(t.amount)-Number(e.amount)}),l=o.filter(a.voucherIsAvailable),i=o.filter(a.voucherIsNotAvailable).map(function(e){return(0,m["default"])({},e,{status:"unavailable"})});o=l.concat(i);a.state.interestRates.sort(function(e,t){return Number(t.rate)-Number(e.rate)});return g["default"].createElement("div",{className:C["default"].discountBarTouch,onClick:function(){a.openDy()}},g["default"].createElement("p",{className:C["default"].discountBarName},"暂无优惠可用"))}var s=a.props.use,r="抵用券"===t.type?"抵用券抵扣"+(t.amount||"")+"元":"加息券加息"+(t.rate||"")+"%",u=a.state.vouchers.sort(function(e,t){return Number(t.amount)-Number(e.amount)});u.filter(a.voucherIsAvailable),u.filter(a.voucherIsNotAvailable).map(function(e){return(0,m["default"])({},e,{
status:"unavailable"})});if(s&&100==s.code&&s.data.is)return g["default"].createElement("div",{className:C["default"].coupon},g["default"].createElement("span",null,s.data.name));var c=a.state.useCoupon&&a.props.useCoupon?g["default"].createElement("div",null,g["default"].createElement("div",null,r)):null;return g["default"].createElement("div",{className:C["default"].coupon,onClick:function(){a.openDy()}},g["default"].createElement("span",null,"使用优惠"),c)},a.useDy=function(e){a.setState({choose:e})},a.clickFn=function(){a.setState({top:"100%"})},a.openDy=function(){var e=a.getPayTotal(!0);a.setState({top:"0px",money:e})},a.nullCoupon=function(){a.setState({top:"100%",useCoupon:!1,rate:0})},a.useCoupon=function(e){a.setState({top:"100%",useCoupon:!0}),e?a.setState({rate:e}):a.setState({rate:0})},a.getChoose=function(e){a.setState({select:e})},a.pop=function(){var e=a.refs.pay.getTime();1!=e?a.props.push(Q["default"].getUrl()):a.props.goBack()},a.closeFn=function(){a.setState({payTop:"100%",url:""})},a.state={quantity:200,unitPrice:50,chosenPay:"",vouchers:[],interestRates:[],top:"100%",choose:"",money:"",useCoupon:!0,payTop:"100%",url:"",select:1,rate:!1,init:!0,pending:!1},a.directInvestId=a.props.params.id,a.borrowPwd=B["default"].getParams().borrowPwd,a}return s(t,e),b(t,[{key:"componentDidMount",value:function(){window.closeFn=this.closeFn,this.props.getDirectInvestDetail(this.directInvestId),this.props.getAvailableCoupons(this.props.params.month),this.props.getUse(this.props.params.id),this.props.getUser()}},{key:"componentWillReceiveProps",value:function(e){if(!B["default"].isPlainObject(this.props.detail)){var t=this.props.detail.left_quantity?this.props.detail.left_quantity<this.state.quantity?this.props.detail.left_quantity:this.state.quantity:1,a=this.props.detail.each_money;this.setState({quantity:t,unitPrice:a})}!this.hasSetCoupon&&e.couponsData&&e.couponsData.data&&(this.hasSetCoupon=!0,this.setState({vouchers:e.couponsData.data.filter(function(e){return"抵用券"===e.type}),interestRates:e.couponsData.data.filter(function(e){return"加息券"===e.type})})),e.buyPending&&this.setState({pending:!0})}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"canPay",value:function(){var e=this.props.detail;return!B["default"].isPlainObject(e)&&!!(this.state.quantity&&e.left_quantity&&this.state.quantity<=e.left_quantity)}},{key:"getMaxCoupon",value:function(){var e=Number(this.state.quantity*this.state.unitPrice),t=void 0,a=void 0,n=void 0;if(this.state.vouchers.length>0){var o=this.state.vouchers.filter(this.voucherIsAvailable);t=o[0],o.forEach(function(e){Number(e.amount)>Number(t.amount)&&(t=e)})}if(this.state.interestRates.length>0&&(a=this.state.interestRates[0],this.state.interestRates.forEach(function(e){Number(e.rate)>Number(a.rate)&&(a=e)})),t&&a){var l=e*Number(a.rate)/100/12*this.props.params.month;n=l>Number(t.amount)?a:t}else t?n=t:a&&(n=a);return n}},{key:"render",value:function(){var e=this,t=this.props.detail;return g["default"].createElement("div",{className:C["default"].root},g["default"].createElement("div",{className:C["default"].bg},g["default"].createElement(E["default"],{title:"购买支付",onLeft:this.pop}),g["default"].createElement("div",{style:{height:44}}),g["default"].createElement("div",{className:C["default"].scroll},g["default"].createElement("div",{className:C["default"].infomation},g["default"].createElement("div",null,g["default"].createElement("p",null,"单价",g["default"].createElement("span",null,"（元/份）")),g["default"].createElement("p",null,this.state.unitPrice)),g["default"].createElement("div",null,g["default"].createElement("p",null,"份数",g["default"].createElement("span",null,"（剩余",t.left_quantity||"","）")),g["default"].createElement(A["default"],{containerStyle:{marginTop:12},value:this.state.quantity,onChange:this.changeQuantity}))),g["default"].createElement("div",{className:C["default"].expectIncome},g["default"].createElement("div",{className:C["default"].wrap},g["default"].createElement("p",{className:C["default"].name},"预期收益（元）"),g["default"].createElement("p",{className:C["default"].profit},this.expectIncome(this.state.quantity)))),g["default"].createElement("div",{className:C["default"].discountBar},this.renderDiscountBar()),g["default"].createElement("div",{className:C["default"].payMoney},g["default"].createElement("p",null,"还需支付（元）"),g["default"].createElement("p",null,B["default"].padMoney(this.getPayTotal()))),g["default"].createElement(V["default"],{ref:"payProcess",productId:this.props.params.id,num:this.state.quantity,type:"directInvest",go:this.props.push,getChoose:this.getChoose,overPay:this.overPay,user:this.props.user,balance:this.props.user.balance_platform||0,onRequestBalancePay:this.directInvestBuy,inputValue:Number(B["default"].padMoney(this.getPayTotal())),balancePayPending:this.state.pending,balancePayData:this.props.buyData,changePending:this.changePending,clear:this.props.clear}),g["default"].createElement("div",{className:C["default"].payBtn},g["default"].createElement("p",{onClick:function(){return e.props.push("/directContract")}},"《借贷及担保服务协议》")),g["default"].createElement(U["default"],{containerStyle:{margin:"40px 15px 20px"},text:"确认支付",disable:!(this.canPay()>0),onClick:this.onValid,status:this.canPay()>0?"":"disable"})),g["default"].createElement(j["default"],{ref:"tipbar"}),g["default"].createElement(W["default"],{ref:"isAuth"})),g["default"].createElement("div",{className:C["default"].zg,style:{top:this.state.top}},g["default"].createElement(F["default"],{click:this.clickFn,useFn:this.useDy,money:this.state.money,nullCoupon:this.nullCoupon,useCoupon:this.useCoupon})),g["default"].createElement("div",{className:C["default"].zg,style:{top:this.state.payTop}},g["default"].createElement(H["default"],{url:this.state.url,closeFn:this.closeFn,ref:"pay"})))}}]),t}(g["default"].Component),$=function(e,t){var a=e.infodata.getIn([N.USER_INFO,"data"]),n=e.infodata.getIn(["DIRECTINVEST_DETAIL","data"]);return{user:a&&a.data||{},detail:n&&n.data||{},couponsFetching:e.infodata.getIn([N.AVAILABLE_COUPONS,"pending"]),couponsData:e.infodata.getIn([N.AVAILABLE_COUPONS,"data"]),buyPending:e.infodata.getIn([N.DIRECTINVEST_BUY,"pending"]),buyData:e.infodata.getIn([N.DIRECTINVEST_BUY,"data"]),selectedCoupon:e.useCoupons.getIn(["coupons","selectedCoupon"]),useCoupon:e.useCoupons.getIn(["coupons","useCoupon"]),use:e.infodata.getIn(["DIRECT_INVEST_COUPON","data"])}},ee=function(e,t){return{getDirectInvestDetail:function(t){e({type:N.DIRECTINVEST_DETAIL,params:[t,"platform"]})},getUser:function(){e({type:N.USER_INFO})},getAvailableCoupons:function(t){e({type:N.AVAILABLE_COUPONS,params:["直投",t,"platform"]})},getUse:function(t){e({type:N.DIRECT_INVEST_COUPON,params:[t,"platform"]})},push:function(t){e((0,S.push)(t))},goBack:function(){e((0,S.goBack)())},balancePay:function(t,a,n,o,l){e({type:N.DIRECTINVEST_BUY,params:[t,{num:a,payPwd:n,borrowPwd:o,type:3,couponId:l,access_sys:"platform"}]})},setUseCoupons:function(t){e({type:N.SET_USE_COUPONS,selectedCoupon:t})},clear:function(){e({type:"CLEAR_INFO_DATA",key:"DIRECTINVEST_BUY"})},clearData:function(){e({type:"CLEAR_CONPONS"}),e({type:"CLEAR_INFO_DATA",key:"AVAILABLE_COUPONS"}),e({type:"CLEAR_INFO_DATA",key:"DIRECTINVEST_DETAIL"})}}};t["default"]=(0,I.connect)($,ee)((0,D["default"])(K))}});