webpackJsonp([51],{203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s,i,d=a(2),u=n(d),f=a(5),c=n(f),p=a(3),m=n(p),_=a(68),h=n(_),b=a(4),w=n(b),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),x=n(g),y=a(163),E=n(y),k=a(88),N=n(k),T=a(87),C=n(T),I=a(15),S=n(I),H=a(97),R=n(H),M=a(18),D=n(M),B=a(82),O=(n(B),a(16)),z=n(O),F=(i=s=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,w["default"])(t)).call(this,e));return a.show=function(e){var t=(0,h["default"])({},e,{money:D["default"].moneyFormat(e.money||"")});a.setState({top:0,error:"",options:t}),a.refs.dialog.show()},a.hide=function(){a.refs.dialog.hide()},a.okHandle=function(){var e=a.state.options;return e.okCallback?e.okCallback.call(null,a.hide,a.password):void a.hide()},a.cancelHandle=function(){var e=a.state.options;e.cancelCallback&&e.cancelCallback.call(null),a.hide()},a.focusHandle=function(){E["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="200px"},a.blurHandle=function(){E["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="50%"},a.password="",a.state={isOpen:!1,top:0,error:"",options:{}},a}return r(t,e),v(t,[{key:"render",value:function(){var e=this,t=this.state.options;return x["default"].createElement(N["default"],{ref:"dialog",style:{top:0}},x["default"].createElement("div",{className:(0,S["default"])(R["default"].modal,R["default"].reddemModal),style:{width:C["default"].getWidth()}},x["default"].createElement("a",{onClick:this.hide,className:R["default"].deleteIconWrap},x["default"].createElement("img",{className:R["default"].deleteIcon,src:a(237)})),t.title?x["default"].createElement("p",{className:R["default"].title},t.title):null,this.props.hasMoney?x["default"].createElement("div",{className:R["default"].content},x["default"].createElement("span",{className:R["default"].money},"￥",t.money)):x["default"].createElement("div",{className:R["default"].content}),x["default"].createElement("div",{className:R["default"].inputWrap},x["default"].createElement("input",{className:R["default"].input,ref:"textInput",placeholder:t.placeholder,onFocus:this.focusHandle,onBlur:this.blurHandle,onChange:function(t){e.password=t.nativeEvent.target.value},type:"password"})),this.state.error?x["default"].createElement("span",{className:R["default"].errorText},this.state.error):null,this.props.hasDetailText?x["default"].createElement("div",{className:R["default"].detailText},x["default"].createElement("p",null,t.detailText)):null,x["default"].createElement("div",{className:R["default"].bottom,style:{marginTop:26}},x["default"].createElement("span",{onClick:this.cancelHandle,className:R["default"].cancelBtn},t.cancelText||"取消"),x["default"].createElement("span",{onClick:this.okHandle,className:R["default"].okBtn},t.okText||"确定"))))}}]),t}(x["default"].Component),s.propTypes={title:z["default"].string,money:z["default"].number,okText:z["default"].string,okCallback:z["default"].func,cancelText:z["default"].string,cancelCallback:z["default"].func,placeholder:z["default"].string,detailText:z["default"].string},s.defaultProps={hasMoney:!0,hasDetailText:!1},i);t["default"]=F},1028:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=n(s),d=a(5),u=n(d),f=a(3),c=n(f),p=a(4),m=n(p),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),b=n(h),w=a(11),v=n(w),g=a(2129),x=n(g),y=a(10),E=(a(22),a(9)),k=a(203),N=n(k),T=a(28),C=n(T),I=a(23),S=n(I),H=a(18),R=n(H),M=a(21),D=n(M),B=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.onValid=function(){var e=a.state.val;a.refs.reddem.show({title:"提现",money:e,okCallback:function(){a.send()},cancelCallback:function(){}})},a.alert=function(e){a.refs.alert.show({content:e,okText:"确定"})},a.send=function(){var e=a.state.val,t=a.refs.reddem.password;a.props.send(e,R["default"].md5(t)),a.refs.reddem.hide()},a.change=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/,l=a.refs.tipbar;a.setState({val:t}),n.test(t)?t<50?(a.setState({disabled:!0}),l.open("金额必须大于50")):t>parseFloat(a.state.money)?(a.setState({disabled:!0}),l.open("超出余额！")):a.setState({disabled:!1}):(l.open("请输入正确的格式!"),a.setState({disabled:!0}))},a.state={val:"",disabled:!0,money:"",bank:"",number:""},a}return r(t,e),_(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("bao-user"))&&JSON.parse(sessionStorage.getItem("bao-user"))||this.props.userinfo,t=JSON.parse(sessionStorage.getItem("bao-bank"));this.setState({money:e.balance_platform,bank:t.name,number:t.number})}},{key:"componentWillReceiveProps",value:function(e){var t=e.cashData,a=e.push;if(t){var n=t.code;if(300==n)this.alert("提交失败！");else if(301==n)this.alert("有未处理的提现!");else if(302==n)this.alert("提现金额大于帐户可提余额!");else if(303==n)this.alert("提现密码错误 !");else if(304==n)this.alert("未绑卡提现!");else if(305==n)this.alert("没安全卡提现!");else if(100==n){var l=Date.parse(new Date),o=this.state.val;a(l,o)}}}},{key:"render",value:function(){var e=this.props.pop,t=this.state,a=t.val,n=t.disabled,l=t.money,o=t.bank,r=t.number;return b["default"].createElement("div",{className:x["default"].bg},b["default"].createElement(v["default"],{onLeft:e},"余额提现"),b["default"].createElement("div",{className:x["default"].body},b["default"].createElement("div",{className:x["default"].contentBox},b["default"].createElement("div",{className:x["default"].title},b["default"].createElement("span",{className:x["default"].cardLx},"储蓄卡"),b["default"].createElement("span",{className:x["default"].card},o,"(",r,")")),b["default"].createElement("div",{className:x["default"].withdrawalsInfo},b["default"].createElement("span",null,"提现金额（元）"),b["default"].createElement("span",{className:x["default"].withdrawalsText},"提现金额不得低于50元")),b["default"].createElement("div",{className:x["default"].withdrawalsInput},b["default"].createElement("span",null,"￥"),b["default"].createElement("input",{placeholder:"请输入提现金额!",type:"text",value:a,onChange:this.change})),b["default"].createElement("div",{className:x["default"].withdrawalsJe},"当前金额￥",l)),b["default"].createElement("div",{className:x["default"].time},"预计1~2个工作日到账"),b["default"].createElement("button",{className:x["default"].button,onClick:this.onValid,disabled:n},"下一步"),b["default"].createElement("div",{className:x["default"].remarks},"注：提现金额中若包含未投资金额,提现申请将延后24小时处理"),b["default"].createElement(N["default"],{ref:"reddem"})),b["default"].createElement(C["default"],{ref:"tipbar"}),b["default"].createElement(S["default"],{ref:"alert"}))}}]),t}(b["default"].Component),O=function(e){return{cashData:e.infodata.getIn(["CASH","data"]),withdraw:e.infodata.getIn(["WITHDRAW","data"]),userinfo:e.infodata.getIn(["USER_INFO","data"])}},z=function(e){return{pop:function(){e((0,E.goBack)())},send:function(t,a){e({type:"CASH",params:[{amount:t,password:a}]})},get:function(){e({type:"WITHDRAW"})},push:function(t,a){e((0,E.push)("/user/cashsuccess?time="+t+"&cash_amount="+a))}}};t["default"]=(0,y.connect)(O,z)((0,D["default"])(B))},1545:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___2KVeC{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.body___1Rwaa{padding:15px}.contentBox___eaV0e{background-color:#fff;border-radius:8px;padding:15px 20px}.title___1HCxv{padding:10px 0}.withdrawalsInfo___1_hUQ{padding:10px 0;font-size:14px}.withdrawalsText___2Tf8C{line-height:18px;float:right;color:#888;font-size:11px}.withdrawalsInput___2rR9N{padding:10px 0;position:relative}.withdrawalsInput___2rR9N span{display:inline-block;color:#000;font-size:24px;position:absolute;left:0;top:14px}.time___3F442{margin-top:20px;text-align:center;line-height:17px;color:#888;font-size:14px}.withdrawalsJe___1m-Tl{font-size:14px;color:#888;text-align:left;padding:5px}.remarks___1F1Ky{margin-top:20px;font-size:14px;color:#888}.button___1pRv5{width:100%;display:block;height:44px;color:#fff;background-color:#00a6e2;border-radius:5px;margin-top:15px;border:0}.button___1pRv5[disabled]{background-color:#90d1ed}.withdrawalsInput___2rR9N input{width:100%;padding:8px 15px 8px 25px;outline:none;border:0;border-bottom:1px solid #e4e4e4}.title___1HCxv .card___3iqMh{color:#ff7701;float:right;font-size:13px;line-height:18px}.test___2mqia{font-size:24px}",""]),t.locals={bg:"bg___2KVeC",body:"body___1Rwaa",contentBox:"contentBox___eaV0e",title:"title___1HCxv",withdrawalsInfo:"withdrawalsInfo___1_hUQ",withdrawalsText:"withdrawalsText___2Tf8C",withdrawalsInput:"withdrawalsInput___2rR9N",time:"time___3F442",withdrawalsJe:"withdrawalsJe___1m-Tl",remarks:"remarks___1F1Ky",button:"button___1pRv5",card:"card___3iqMh",test:"test___2mqia"}},2129:[2269,1545]});