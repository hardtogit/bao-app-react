webpackJsonp([84],{15:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},16:[2322,15],19:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),o=n(l),r=a(16),i=n(r);t["default"]=function(e){return function(t){return o["default"].createElement("div",{className:i["default"].page},o["default"].createElement(e,t))}}},28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),f=a(5),c=n(f),p=a(3),m=n(p),_=a(4),h=n(_),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),w=a(8),y=n(w),x=a(30),E=n(x),k=a(9),N=n(k),T=(s=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return r(t,e),b(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:v["default"].createElement("div",{className:(0,y["default"])(E["default"].Tipbar,this.props.className)},v["default"].createElement("span",{className:E["default"].text},this.state.message||this.props.text))}}]),t}(v["default"].Component),i.propTypes={text:N["default"].string},s);t["default"]=T},29:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},30:[2322,29],62:function(e,t,a){e.exports=a.p+"static/media/close2.bc32cb47.png"},164:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,s,u=a(2),d=n(u),f=a(5),c=n(f),p=a(3),m=n(p),_=a(56),h=n(_),b=a(4),g=n(b),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),w=a(1),y=n(w),x=a(68),E=n(x),k=a(35),N=n(k),T=a(34),S=n(T),I=a(8),C=n(I),A=a(51),D=n(A),M=a(20),B=n(M),R=a(33),O=(n(R),a(9)),H=n(O),P=(s=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.show=function(e){var t=(0,h["default"])({},e,{money:B["default"].moneyFormat(e.money||"")});a.setState({top:0,error:"",options:t}),a.refs.dialog.show()},a.hide=function(){a.refs.dialog.hide()},a.okHandle=function(){var e=a.state.options;return e.okCallback?e.okCallback.call(null,a.hide,a.password):void a.hide()},a.cancelHandle=function(){var e=a.state.options;e.cancelCallback&&e.cancelCallback.call(null),a.hide()},a.focusHandle=function(){E["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="200px"},a.blurHandle=function(){E["default"].findDOMNode(a.refs.dialog).getElementsByTagName("div")[0].style.top="50%"},a.password="",a.state={isOpen:!1,top:0,error:"",options:{}},a}return r(t,e),v(t,[{key:"render",value:function(){var e=this,t=this.state.options;return y["default"].createElement(N["default"],{ref:"dialog",style:{top:0}},y["default"].createElement("div",{className:(0,C["default"])(D["default"].modal,D["default"].reddemModal),style:{width:S["default"].getWidth()}},y["default"].createElement("a",{onClick:this.hide,className:D["default"].deleteIconWrap},y["default"].createElement("img",{className:D["default"].deleteIcon,src:a(62)})),t.title?y["default"].createElement("p",{className:D["default"].title},t.title):null,this.props.hasMoney?y["default"].createElement("div",{className:D["default"].content},y["default"].createElement("span",{className:D["default"].money},"￥",t.money)):y["default"].createElement("div",{className:D["default"].content}),y["default"].createElement("div",{className:D["default"].inputWrap},y["default"].createElement("input",{className:D["default"].input,ref:"textInput",placeholder:t.placeholder,onFocus:this.focusHandle,onBlur:this.blurHandle,onChange:function(t){e.password=t.nativeEvent.target.value},type:"password"})),this.state.error?y["default"].createElement("span",{className:D["default"].errorText},this.state.error):null,this.props.hasDetailText?y["default"].createElement("div",{className:D["default"].detailText},y["default"].createElement("p",null,t.detailText)):null,y["default"].createElement("div",{className:D["default"].bottom,style:{marginTop:26}},y["default"].createElement("span",{onClick:this.cancelHandle,className:D["default"].cancelBtn},t.cancelText||"取消"),y["default"].createElement("span",{onClick:this.okHandle,className:D["default"].okBtn},t.okText||"确定"))))}}]),t}(y["default"].Component),i.propTypes={title:H["default"].string,money:H["default"].number,okText:H["default"].string,okCallback:H["default"].func,cancelText:H["default"].string,cancelCallback:H["default"].func,placeholder:H["default"].string,detailText:H["default"].string},i.defaultProps={hasMoney:!0,hasDetailText:!1},s);t["default"]=P},991:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=n(i),u=a(5),d=n(u),f=a(3),c=n(f),p=a(4),m=n(p),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),b=n(h),g=a(12),v=n(g),w=a(2153),y=n(w),x=a(11),E=(a(21),a(10)),k=a(164),N=n(k),T=a(28),S=n(T),I=a(26),C=n(I),A=a(20),D=n(A),M=a(19),B=n(M),R=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.onValid=function(){var e=a.state.val;a.props.goBankPage({way:1,type:421,returnUrl:"",data:{device:"WAP",amount:e,password:"",isNew:!0,access_sys:"platform"}})},a.alert=function(e){a.refs.alert.show({content:e,okText:"确定"})},a.send=function(){var e=a.state.val,t=a.refs.reddem.password;a.props.send(e,D["default"].md5(t),!0),a.refs.reddem.hide()},a.change=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/;a.refs.tipbar;a.setState({val:t}),n.test(t)?t>a.state.maximum?a.setState({disabled:!0}):t<a.state.minimum?a.setState({disabled:!0}):t>parseFloat(a.state.money)?a.setState({disabled:!0}):a.setState({disabled:!1}):a.setState({disabled:!0})},a.blur=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/,l=a.refs.tipbar;a.setState({val:t}),n.test(t)?t>a.state.maximum?l.open("单笔金额不能大于"+a.state.maximum):t<a.state.minimum?(a.setState({disabled:!0}),l.open("金额必须大于"+a.state.minimum)):t>parseFloat(a.state.money)?(a.setState({disabled:!0}),l.open("超出余额！")):a.setState({disabled:!1}):(l.open("请输入正确的格式!"),a.setState({disabled:!0}))},a.state={val:"",disabled:!0,money:"",bank:"",number:"",minimum:50,maximum:5e4},a}return r(t,e),_(t,[{key:"componentWillMount",value:function(){this.props.getDefault()}},{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("bao-user"))&&JSON.parse(sessionStorage.getItem("bao-user"))||this.props.userinfo,t=JSON.parse(sessionStorage.getItem("bao-bank"));this.setState({money:e.balance_platform,bank:t.name,number:t.number})}},{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"componentWillReceiveProps",value:function(e){var t=e.cashData,a=e.push,n=e.cashSetting,l=e.goBankData;if(l&&100==l.code?(this.props.clearData("GO_BANK_PAGE"),this.props.go("/user/setting/bankPage?url="+l.data.url)):l&&100!=l.code&&(this.props.clearData("GO_BANK_PAGE"),this.alert("订单生成失败!")),n&&100==n.code&&this.setState({minimum:parseInt(n.data.withdrawSingleMinMoney),maximum:parseInt(n.data.withdrawSingleTimeMoney)}),t){var o=t.code;if(300==o)this.alert("提交失败！");else if(301==o)this.alert("有未处理的提现!");else if(302==o)this.alert("提现金额大于帐户可提余额!");else if(303==o)this.alert("提现密码错误 !");else if(304==o)this.alert("未绑卡提现!");else if(305==o)this.alert("没安全卡提现!");else if(310==o)this.alert("超出每日提现次数!");else if(311==o)this.alert("超出每日提现总额!");else if(312==o)this.alert("超出单笔最大提现金额!");else if(313==o)this.alert("不能低于单笔最小提现金额!");else if(100==o){var r=Date.parse(new Date),i=this.state.val;a(r,i)}}}},{key:"render",value:function(){var e=this.props.pop,t=this.state,a=t.val,n=t.disabled,l=t.money,o=t.bank,r=t.number,i=t.minimum;return b["default"].createElement("div",{className:y["default"].bg},b["default"].createElement(v["default"],{onLeft:e},"余额提现"),b["default"].createElement("div",{className:y["default"].body},b["default"].createElement("div",{className:y["default"].contentBox},b["default"].createElement("div",{className:y["default"].title},b["default"].createElement("span",{className:y["default"].cardLx},"储蓄卡"),b["default"].createElement("span",{className:y["default"].card},o,"(",r,")")),b["default"].createElement("div",{className:y["default"].withdrawalsInfo},b["default"].createElement("span",null,"提现金额（元）"),b["default"].createElement("span",{className:y["default"].withdrawalsText},"提现金额不得低于",i,"元")),b["default"].createElement("div",{className:y["default"].withdrawalsInput},b["default"].createElement("span",null,"￥"),b["default"].createElement("input",{placeholder:"请输入提现金额!",type:"text",value:a,onChange:this.change,onBlur:this.blur})),b["default"].createElement("div",{className:y["default"].withdrawalsJe},"当前金额￥",l),b["default"].createElement("div",{className:y["default"].withdrawalsJe},"额外扣除0.00元手续费")),b["default"].createElement("div",{className:y["default"].time},"预计1~2个工作日到账"),b["default"].createElement("button",{className:y["default"].button,onClick:this.onValid,disabled:n},"下一步"),b["default"].createElement("div",{className:y["default"].remarks},"注：提现金额中若包含未投资金额,提现申请将延后24小时处理"),b["default"].createElement(N["default"],{ref:"reddem"})),b["default"].createElement(S["default"],{ref:"tipbar"}),b["default"].createElement(C["default"],{ref:"alert"}))}}]),t}(b["default"].Component),O=function(e){return{cashData:e.infodata.getIn(["CASH","data"]),withdraw:e.infodata.getIn(["WITHDRAW","data"]),userinfo:e.infodata.getIn(["USER_INFO","data"]),cashSetting:e.infodata.getIn(["GET_DEFAULT_TAB","data"]),goBankData:e.infodata.getIn(["GO_BANK_PAGE","data"])}},H=function(e){return{pop:function(){e((0,E.goBack)())},send:function(t,a,n){e({type:"CASH",params:[{amount:t,password:a,isNew:n}]})},goBankPage:function(t){e({type:"GO_BANK_PAGE",params:[t]})},get:function(){e({type:"WITHDRAW"})},clean:function(){e({type:"CLEAR_INFO_DATA",key:"CASH"})},clearData:function(t){e({type:"CLEAR_INFO_DATA",key:t})},getDefault:function(){e({type:"GET_DEFAULT_TAB"})},push:function(t,a){e((0,E.push)("/user/cashsuccess?time="+t+"&cash_amount="+a))},go:function(t){e((0,E.push)(t))}}};t["default"]=(0,x.connect)(O,H)((0,B["default"])(R))},1553:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___2KVeC{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.body___1Rwaa{padding:15px}.contentBox___eaV0e{background-color:#fff;border-radius:8px;padding:15px 20px}.title___1HCxv{padding:10px 0}.withdrawalsInfo___1_hUQ{padding:10px 0;font-size:14px}.withdrawalsText___2Tf8C{line-height:18px;float:right;color:#888;font-size:11px}.withdrawalsInput___2rR9N{padding:10px 0;position:relative}.withdrawalsInput___2rR9N span{display:inline-block;color:#000;font-size:24px;position:absolute;left:0;top:14px}.time___3F442{margin-top:20px;text-align:center;line-height:17px;color:#888;font-size:14px}.withdrawalsJe___1m-Tl{font-size:14px;color:#888;text-align:left;padding:5px}.remarks___1F1Ky{margin-top:20px;font-size:14px;color:#888}.button___1pRv5{width:100%;display:block;height:44px;color:#fff;background-color:#00a6e2;border-radius:5px;margin-top:15px;border:0}.button___1pRv5[disabled]{background-color:#90d1ed}.withdrawalsInput___2rR9N input{width:100%;padding:8px 15px 8px 25px;outline:none;border:0;border-bottom:1px solid #e4e4e4}.title___1HCxv .card___3iqMh{color:#ff7701;float:right;font-size:13px;line-height:18px}.test___2mqia{font-size:24px}",""]),t.locals={bg:"bg___2KVeC",body:"body___1Rwaa",contentBox:"contentBox___eaV0e",title:"title___1HCxv",withdrawalsInfo:"withdrawalsInfo___1_hUQ",withdrawalsText:"withdrawalsText___2Tf8C",withdrawalsInput:"withdrawalsInput___2rR9N",time:"time___3F442",withdrawalsJe:"withdrawalsJe___1m-Tl",remarks:"remarks___1F1Ky",button:"button___1pRv5",card:"card___3iqMh",test:"test___2mqia"}},2153:function(e,t,a){var n=a(1553);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});