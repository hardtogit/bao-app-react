webpackJsonp([57],{102:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,s,d=a(2),u=n(d),f=a(5),c=n(f),p=a(3),m=n(p),h=a(49),_=n(h),b=a(4),w=n(b),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),x=n(g),y=a(116),E=n(y),k=a(84),N=n(k),T=a(83),S=n(T),C=a(14),I=n(C),D=a(80),H=n(D),M=a(17),R=n(M),B=a(67),A=(n(B),a(16)),F=n(A),O=(s=r=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,w["default"])(t)).call(this,e));return a.show=function(e){var t=(0,_["default"])({},e,{money:R["default"].moneyFormat(e.money||"")});a.setState({top:0,error:"",options:t}),a.refs.dialog.show()},a.hide=function(){a.refs.dialog.hide()},a.okHandle=function(){var e=a.state.options;return e.okCallback?e.okCallback.call(null,a.hide,a.password):void a.hide()},a.cancelHandle=function(){var e=a.state.options;e.cancelCallback&&e.cancelCallback.call(null),a.hide()},a.focusHandle=function(){E["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="200px"},a.blurHandle=function(){E["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="50%"},a.password="",a.state={isOpen:!1,top:0,error:"",options:{}},a}return i(t,e),v(t,[{key:"render",value:function(){var e=this,t=this.state.options;return x["default"].createElement(N["default"],{ref:"dialog",style:{top:0}},x["default"].createElement("div",{className:(0,I["default"])(H["default"].modal,H["default"].reddemModal),style:{width:S["default"].getWidth()}},x["default"].createElement("a",{onClick:this.hide,className:H["default"].deleteIconWrap},x["default"].createElement("img",{className:H["default"].deleteIcon,src:a(172)})),t.title?x["default"].createElement("p",{className:H["default"].title},t.title):null,this.props.hasMoney?x["default"].createElement("div",{className:H["default"].content},x["default"].createElement("span",{className:H["default"].money},"￥",t.money)):x["default"].createElement("div",{className:H["default"].content}),x["default"].createElement("div",{className:H["default"].inputWrap},x["default"].createElement("input",{className:H["default"].input,ref:"textInput",placeholder:t.placeholder,onFocus:this.focusHandle,onBlur:this.blurHandle,onChange:function(t){e.password=t.nativeEvent.target.value},type:"password"})),this.state.error?x["default"].createElement("span",{className:H["default"].errorText},this.state.error):null,this.props.hasDetailText?x["default"].createElement("div",{className:H["default"].detailText},x["default"].createElement("p",null,t.detailText)):null,x["default"].createElement("div",{className:H["default"].bottom,style:{marginTop:26}},x["default"].createElement("span",{onClick:this.cancelHandle,className:H["default"].cancelBtn},t.cancelText||"取消"),x["default"].createElement("span",{onClick:this.okHandle,className:H["default"].okBtn},t.okText||"确定"))))}}]),t}(x["default"].Component),r.propTypes={title:F["default"].string,money:F["default"].number,okText:F["default"].string,okCallback:F["default"].func,cancelText:F["default"].string,cancelCallback:F["default"].func,placeholder:F["default"].string,detailText:F["default"].string},r.defaultProps={hasMoney:!0,hasDetailText:!1},s);t["default"]=O},1091:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),s=n(r),d=a(5),u=n(d),f=a(3),c=n(f),p=a(4),m=n(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_=a(1),b=n(_),w=a(11),v=n(w),g=a(2239),x=n(g),y=a(10),E=(a(20),a(9)),k=a(102),N=n(k),T=a(27),S=n(T),C=a(21),I=n(C),D=a(17),H=n(D),M=a(22),R=n(M),B=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.onValid=function(){var e=a.state.val;a.refs.reddem.show({title:"提现",money:e,okCallback:function(){a.send()},cancelCallback:function(){}})},a.alert=function(e){a.refs.alert.show({content:e,okText:"确定"})},a.send=function(){var e=a.state.val,t=a.refs.reddem.password;a.props.send(e,H["default"].md5(t),!0),a.refs.reddem.hide()},a.change=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/;a.refs.tipbar;a.setState({val:t}),n.test(t)?t>a.state.maximum?a.setState({disabled:!0}):t<a.state.minimum?a.setState({disabled:!0}):t>parseFloat(a.state.money)?a.setState({disabled:!0}):a.setState({disabled:!1}):a.setState({disabled:!0})},a.blur=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/,l=a.refs.tipbar;a.setState({val:t}),n.test(t)?t>a.state.maximum?l.open("单笔金额不能大于"+a.state.maximum):t<a.state.minimum?(a.setState({disabled:!0}),l.open("金额必须大于"+a.state.minimum)):t>parseFloat(a.state.money)?(a.setState({disabled:!0}),l.open("超出余额！")):a.setState({disabled:!1}):(l.open("请输入正确的格式!"),a.setState({disabled:!0}))},a.state={val:"",disabled:!0,money:"",bank:"",number:"",minimum:50,maximum:5e4},a}return i(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.getDefault()}},{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("bao-user"))&&JSON.parse(sessionStorage.getItem("bao-user"))||this.props.userinfo,t=JSON.parse(sessionStorage.getItem("bao-bank"));this.setState({money:e.balance_platform,bank:t.name,number:t.number})}},{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"componentWillReceiveProps",value:function(e){var t=e.cashData,a=e.push,n=e.cashSetting;if(n&&100==n.code&&this.setState({minimum:parseInt(n.data.withdrawSingleMinMoney),maximum:parseInt(n.data.withdrawSingleTimeMoney)}),t){var l=t.code;if(300==l)this.alert("提交失败！");else if(301==l)this.alert("有未处理的提现!");else if(302==l)this.alert("提现金额大于帐户可提余额!");else if(303==l)this.alert("提现密码错误 !");else if(304==l)this.alert("未绑卡提现!");else if(305==l)this.alert("没安全卡提现!");else if(310==l)this.alert("超出每日提现次数!");else if(311==l)this.alert("超出每日提现总额!");else if(312==l)this.alert("超出单笔最大提现金额!");else if(313==l)this.alert("不能低于单笔最小提现金额!");else if(100==l){var o=Date.parse(new Date),i=this.state.val;a(o,i)}}}},{key:"render",value:function(){var e=this.props.pop,t=this.state,a=t.val,n=t.disabled,l=t.money,o=t.bank,i=t.number,r=t.minimum;return b["default"].createElement("div",{className:x["default"].bg},b["default"].createElement(v["default"],{onLeft:e},"余额提现"),b["default"].createElement("div",{className:x["default"].body},b["default"].createElement("div",{className:x["default"].contentBox},b["default"].createElement("div",{className:x["default"].title},b["default"].createElement("span",{className:x["default"].cardLx},"储蓄卡"),b["default"].createElement("span",{className:x["default"].card},o,"(",i,")")),b["default"].createElement("div",{className:x["default"].withdrawalsInfo},b["default"].createElement("span",null,"提现金额（元）"),b["default"].createElement("span",{className:x["default"].withdrawalsText},"提现金额不得低于",r,"元")),b["default"].createElement("div",{className:x["default"].withdrawalsInput},b["default"].createElement("span",null,"￥"),b["default"].createElement("input",{placeholder:"请输入提现金额!",type:"text",value:a,onChange:this.change,onBlur:this.blur})),b["default"].createElement("div",{className:x["default"].withdrawalsJe},"当前金额￥",l),b["default"].createElement("div",{className:x["default"].withdrawalsJe},"额外扣除0.00元手续费")),b["default"].createElement("div",{className:x["default"].time},"预计1~2个工作日到账"),b["default"].createElement("button",{className:x["default"].button,onClick:this.onValid,disabled:n},"下一步"),b["default"].createElement("div",{className:x["default"].remarks},"注：提现金额中若包含未投资金额,提现申请将延后24小时处理"),b["default"].createElement(N["default"],{ref:"reddem"})),b["default"].createElement(S["default"],{ref:"tipbar"}),b["default"].createElement(I["default"],{ref:"alert"}))}}]),t}(b["default"].Component),A=function(e){return{cashData:e.infodata.getIn(["CASH","data"]),withdraw:e.infodata.getIn(["WITHDRAW","data"]),userinfo:e.infodata.getIn(["USER_INFO","data"]),cashSetting:e.infodata.getIn(["GET_DEFAULT_TAB","data"])}},F=function(e){return{pop:function(){e((0,E.goBack)())},send:function(t,a,n){e({type:"CASH",params:[{amount:t,password:a,isNew:n}]})},get:function(){e({type:"WITHDRAW"})},clean:function(){e({type:"CLEAR_INFO_DATA",key:"CASH"})},getDefault:function(){e({type:"GET_DEFAULT_TAB"})},push:function(t,a){e((0,E.push)("/user/cashsuccess?time="+t+"&cash_amount="+a))}}};t["default"]=(0,y.connect)(A,F)((0,R["default"])(B))},1638:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___2KVeC{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.body___1Rwaa{padding:15px}.contentBox___eaV0e{background-color:#fff;border-radius:8px;padding:15px 20px}.title___1HCxv{padding:10px 0}.withdrawalsInfo___1_hUQ{padding:10px 0;font-size:14px}.withdrawalsText___2Tf8C{line-height:18px;float:right;color:#888;font-size:11px}.withdrawalsInput___2rR9N{padding:10px 0;position:relative}.withdrawalsInput___2rR9N span{display:inline-block;color:#000;font-size:24px;position:absolute;left:0;top:14px}.time___3F442{margin-top:20px;text-align:center;line-height:17px;color:#888;font-size:14px}.withdrawalsJe___1m-Tl{font-size:14px;color:#888;text-align:left;padding:5px}.remarks___1F1Ky{margin-top:20px;font-size:14px;color:#888}.button___1pRv5{width:100%;display:block;height:44px;color:#fff;background-color:#00a6e2;border-radius:5px;margin-top:15px;border:0}.button___1pRv5[disabled]{background-color:#90d1ed}.withdrawalsInput___2rR9N input{width:100%;padding:8px 15px 8px 25px;outline:none;border:0;border-bottom:1px solid #e4e4e4}.title___1HCxv .card___3iqMh{color:#ff7701;float:right;font-size:13px;line-height:18px}.test___2mqia{font-size:24px}",""]),t.locals={bg:"bg___2KVeC",body:"body___1Rwaa",contentBox:"contentBox___eaV0e",title:"title___1HCxv",withdrawalsInfo:"withdrawalsInfo___1_hUQ",withdrawalsText:"withdrawalsText___2Tf8C",withdrawalsInput:"withdrawalsInput___2rR9N",time:"time___3F442",withdrawalsJe:"withdrawalsJe___1m-Tl",remarks:"remarks___1F1Ky",button:"button___1pRv5",card:"card___3iqMh",test:"test___2mqia"}},2239:[2381,1638]});