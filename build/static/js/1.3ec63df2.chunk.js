webpackJsonp([1],{20:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),c=a(5),f=n(c),p=a(3),m=n(p),h=a(4),_=n(h),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),y=a(11),w=n(y),x=a(22),k=n(x),E=a(12),C=n(E),S=(s=i=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return l(t,e),b(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:v["default"].createElement("div",{className:(0,w["default"])(k["default"].Tipbar,this.props.className)},v["default"].createElement("span",{className:k["default"].text},this.state.message||this.props.text))}}]),t}(v["default"].Component),i.propTypes={text:C["default"].string},s);t["default"]=S},21:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},22:[2363,21],46:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),c=a(5),f=n(c),p=a(3),m=n(p),h=a(4),_=n(h),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),y=a(11),w=n(y),x=a(41),k=n(x),E=a(52),C=(n(E),a(51)),S=(n(C),a(64)),I=n(S),N=a(12),T=n(N),A=(s=i=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return a.setText=function(e){a.refs.text.setText(e)},a.state={text:a.props.text||""},a}return l(t,e),b(t,[{key:"show",value:function(e){this.setState({text:e}),this.refs.dialog.show()}},{key:"hide",value:function(){this.refs.dialog.hide()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=(this.state.options,k["default"][this.props.mode]);return v["default"].createElement(e,{ref:"dialog",closeOnClick:!1,className:I["default"].successDialog,contentStyle:{backgroundColor:"transparent"}},v["default"].createElement("div",{className:(0,w["default"])(I["default"].modal,I["default"].successModal)},v["default"].createElement("img",{src:a(62),style:{marginTop:30,width:30,height:30}}),v["default"].createElement("span",{className:I["default"].successTitle},this.state.text)))}}]),t}(v["default"].Component),i.propTypes={text:T["default"].string,mode:T["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"])},i.defaultProps={mode:"ScaleModal"},s);t["default"]=A},62:556,165:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),c=a(5),f=n(c),p=a(3),m=n(p),h=a(4),_=n(h),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),y=a(11),w=(n(y),a(41)),x=n(w),k=a(52),E=(n(k),a(51)),C=(n(E),a(64)),S=n(C),I=a(12),N=n(I),T=(s=i=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return a.handClick=function(e){var t=a.props.options;if(t.choiceCallback)return t.choiceCallback(a.hide,e)},a.hide=function(){a.refs.dialog.hide()},a.setText=function(e){a.refs.text.setText(e)},a.state={text:a.props.text||""},a}return l(t,e),b(t,[{key:"show",value:function(e){this.setState({text:e}),this.refs.dialog.show()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.options,a=x["default"][this.props.mode];return v["default"].createElement(a,{ref:"dialog",modalStyle:{transform:"none",animation:"none",backgroundColor:"#fff",width:"100%",bottom:0,left:0,top:"auto"},closeOnClick:!1},v["default"].createElement("div",{className:S["default"].c_container},v["default"].createElement("div",{className:S["default"].c_header},v["default"].createElement("span",{className:S["default"].card_close,onClick:this.hide},"X")," 选择付款方式"),v["default"].createElement("div",{className:S["default"].c_body},t.banks&&t.banks.data&&t.banks.data.map(function(t,a){return v["default"].createElement("div",{key:a,className:S["default"].c_item,onClick:function(){e.handClick(t)}},v["default"].createElement("div",{className:S["default"].c_left},v["default"].createElement("img",{className:S["default"].c_icon,src:t.bankIcon,alt:""})),v["default"].createElement("div",{className:S["default"].c_right},v["default"].createElement("div",{className:S["default"].c_top},v["default"].createElement("span",null,t.bankName),v["default"].createElement("span",null,"(",t.bankCard.substr(t.bankCard.length-4,4),")")),v["default"].createElement("div",{className:S["default"].c_bottom},"单笔限额",t.singleLimit,"，单日限额",t.dayLimit)))}),v["default"].createElement("div",{className:S["default"].tip},"限额仅供参考，具体以支付渠道为准"))))}}]),t}(v["default"].Component),i.propTypes={text:N["default"].string,mode:N["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"])},i.defaultProps={mode:"OutlineModal"},s);t["default"]=T},661:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=n(i),u=a(5),d=n(u),c=a(3),f=n(c),p=a(4),m=n(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_=a(1),b=n(_),g=a(10),v=n(g),y=a(2225),w=n(y),x=a(9),k=(a(19),a(8)),E=a(158),C=n(E),S=a(165),I=n(S),N=a(46),T=n(N),A=a(20),M=n(A),O=a(24),W=n(O),R=a(17),D=(n(R),a(25)),B=n(D),L=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.onValid=function(){var e=a.state,t=e.val,n=e.charge,o=e.bankCard;a.props.goBankPage({type:461,way:1,returnUrl:"",data:{transferAmount:t,bankCard:o,device:"WAP",feeAmount:n,isNew:1}})},a.alert=function(e){a.refs.alert.show({content:e,okText:"确定"})},a.send=function(){var e=a.state,t=e.val,n=e.bankCard,o=a.refs.reddem.password;a.props.send(t,o,sessionStorage.getItem("passwordFactor"),n,"WAP",sessionStorage.getItem("mapKey"),a.state.charge),a.refs.reddem.hide()},a.change=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/;a.refs.tipbar;a.setState({val:t}),n.test(t)?t<a.state.minimum?a.setState({disabled:!0}):t>a.state.maximum?a.setState({disabled:!0}):t>parseFloat(a.state.money)?a.setState({disabled:!0}):a.setState({disabled:!1}):a.setState({disabled:!0})},a.blur=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/,o=a.refs.tipbar;n.test(t)?t<a.state.minimum?o.open("金额必须大于"+a.state.minimum):t>a.state.maximum?o.open("单笔金额不能大于"+a.state.maximum):t>parseFloat(a.state.money)&&o.open("超出余额！"):o.open("请输入正确的格式!")},a.state={val:"",disabled:!0,money:"",bank:"",time:0,number:"",charge:"",bankCard:"",bankIcon:"",minimum:50,maximum:5e4},a}return l(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.getDefault()}},{key:"componentWillUnmount",value:function(){this.props.clean("NEW_CASH")}},{key:"componentDidMount",value:function(){this.props.getMyBankCards();var e=JSON.parse(sessionStorage.getItem("bao-user"))&&JSON.parse(sessionStorage.getItem("bao-user"))||this.props.userinfo;this.setState({money:e.balance}),this.props.serviceChargeRule({device:"WAP",transferAmount:"0.00"})}},{key:"componentWillReceiveProps",value:function(e){var t=e.cashData,a=e.push,n=e.cardInfo,o=e.nowCard,r=e.rule,l=e.cashSetting,i=e.goBankData;i&&100==i.code?(this.props.clean("GO_BANK_PAGE"),this.props.go("/user/setting/bankPage?url="+i.data.url)):i&&100!=i.code&&(this.props.clean("GO_BANK_PAGE"),this.alert("订单生成失败!")),l&&100==l.code&&this.setState({minimum:parseInt(l.data.withdrawSingleMinMoney),maximum:parseInt(l.data.withdrawSingleTimeMoney)});if(n&&n.data&&this.setState({bank:n.data[0].bankName,number:n.data[0].bankCard.substr(n.data[0].bankCard.length-4,4),bankCard:n.data[0].bankCard,bankIcon:n.data[0].bankIcon}),o&&this.setState({bank:o.bankName,number:o.bankCard.substr(o.bankCard.length-4,4),bankCard:o.bankCard,bankIcon:o.bankIcon}),t){if("100"==t.code){var s=Date.parse(new Date),u=this.state.val;a(s,u)}else"300"==t.code?(this.alert("提现失败"),this.refs.loading.hide()):"301"==t.code?(this.alert(t.msg),this.refs.loading.hide()):"302"==t.code?(this.alert(t.msg),this.refs.loading.hide()):"303"==t.code?(this.alert(t.msg),this.refs.loading.hide()):"304"==t.code?(this.alert(t.msg),this.refs.loading.hide()):"312"==t.code?(this.alert(t.msg),this.refs.loading.hide()):"313"==t.code?(this.alert(t.msg),this.refs.loading.hide()):(this.alert("提现失败"),this.refs.loading.hide());this.props.clean("NEW_CASH")}r&&this.setState({charge:r.data.expenses})}},{key:"render",value:function(){var e=void 0,t=this.props,a=t.pop,n=t.go,o=t.cardInfo,r=t.rule;r&&(r.data.num>0?e=b["default"].createElement("div",{style:{fontSize:"12px",position:"relative",top:"2px"}},"本月免费提现次数剩余",r.data.num,"次"):r.data.expenses&&(e=b["default"].createElement("div",{style:{fontSize:"12px",position:"relative",top:"2px"}},"额外扣除",r.data.expenses,"元手续费")));var l=this.state,i=l.val,s=l.disabled,u=l.money,d=l.bank,c=l.number,f=l.bankIcon,p=l.minimum;return b["default"].createElement("div",{className:w["default"].bg},b["default"].createElement(v["default"],{onLeft:a},"余额提现"),b["default"].createElement("div",{className:w["default"].body},b["default"].createElement("div",{className:w["default"].contentBox},b["default"].createElement("div",{className:w["default"].title,onClick:function(){n("/user/choiceMyCard")}},b["default"].createElement("span",{className:w["default"].cardLx},"储蓄卡"),b["default"].createElement("span",{className:w["default"].card},b["default"].createElement("img",{className:w["default"].icon_img,src:f,alt:""}),d,"(",c,")")),b["default"].createElement("div",{className:w["default"].withdrawalsInfo},b["default"].createElement("span",null,"提现金额（元）"),b["default"].createElement("span",{className:w["default"].withdrawalsText},"提现金额不得低于",p,"元")),b["default"].createElement("div",{className:w["default"].withdrawalsInput},b["default"].createElement("span",null,"￥"),b["default"].createElement("input",{placeholder:"请输入提现金额!",type:"text",value:i,onChange:this.change,onBlur:this.blur})),b["default"].createElement("div",{className:w["default"].withdrawalsJe},"当前金额￥",u),b["default"].createElement("div",{className:w["default"].withdrawalsJe},"额外扣除0.00元手续费")),b["default"].createElement("div",{className:w["default"].time},"预计1~2个工作日到账"),b["default"].createElement("button",{className:w["default"].button,onClick:this.onValid,disabled:s},"下一步"),b["default"].createElement("div",{className:w["default"].remarks},"注：提现金额中若包含未出借金额,提现申请将延后24小时处理"),b["default"].createElement(C["default"],{ref:"reddem"})),b["default"].createElement(M["default"],{ref:"tipbar"}),b["default"].createElement(W["default"],{ref:"alert"}),b["default"].createElement(T["default"],{ref:"loading"}),b["default"].createElement(I["default"],{ref:"choice",options:{banks:o,choiceCallback:this.choiceCallback}}))}}]),t}(b["default"].Component),z=function(e){return{cashData:e.infodata.getIn(["NEW_CASH","data"]),withdraw:e.infodata.getIn(["WITHDRAW","data"]),userinfo:e.infodata.getIn(["USER_INFO","data"]),cardInfo:e.infodata.getIn(["GET_MY_CARD_LIST","data"]),nowCard:e.regStore.getIn(["CHOICE_CARD","cardInfo"]),rule:e.infodata.getIn(["SERVICE_CHARGE_RULE","data"]),cashSetting:e.infodata.getIn(["GET_DEFAULT_TAB","data"]),goBankData:e.infodata.getIn(["GO_BANK_PAGE","data"])}},F=function(e){return{pop:function(){e((0,k.goBack)())},go:function(t){e((0,k.push)(t))},send:function(t,a,n,o,r,l,i){e({type:"NEW_CASH",params:[{transferAmount:t,password:a,passwordFactor:n,bankCard:o,device:r,mapKey:l,feeAmount:i}]})},getMyBankCards:function(){e({type:"GET_MY_CARD_LIST"})},goBankPage:function(t){e({type:"GO_BANK_PAGE",params:[t]})},get:function(){e({type:"WITHDRAW"})},cashVerify:function(t){e({type:"CASH_VERIFY",params:[t]})},clean:function(t){e({type:"CLEAR_INFO_DATA",key:t})},getDefault:function(){e({type:"GET_DEFAULT_TAB"})},serviceChargeRule:function(t){e({type:"SERVICE_CHARGE_RULE",params:[t]})},push:function(t,a){e((0,k.push)("/user/cashsuccess?time="+t+"&cash_amount="+a))}}};t["default"]=(0,x.connect)(z,F)((0,B["default"])(L))},1647:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___1ISyw{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.body___2qd-o{padding:15px}.contentBox___2raGL{background-color:#fff;border-radius:8px;padding:15px 20px}.title___2w02V{padding:10px 0}.withdrawalsInfo___2a4O5{padding:10px 0;font-size:14px}.withdrawalsText___21qsq{line-height:18px;float:right;color:#888;font-size:11px}.withdrawalsInput___2TV8Q{padding:10px 0;position:relative}.withdrawalsInput___2TV8Q span{display:inline-block;color:#000;font-size:24px;position:absolute;left:0;top:14px}.time___VxFp4{margin-top:20px;text-align:center;line-height:17px;color:#888;font-size:14px}.withdrawalsJe___3FSKh{font-size:14px;color:#888;text-align:left;padding:5px}.remarks___CcoVz{margin-top:20px;font-size:14px;color:#888}.button___3CWJL{width:100%;display:block;height:44px;color:#fff;background-color:#00a6e2;border-radius:5px;margin-top:15px;border:0}.button___3CWJL[disabled]{background-color:#90d1ed}.withdrawalsInput___2TV8Q input{width:100%;padding:8px 15px 8px 25px;outline:none;border:0;border-bottom:1px solid #e4e4e4}.title___2w02V .card___2AHdX{color:#ff7701;float:right;font-size:13px;line-height:18px}.test___z50Jo{font-size:24px}.icon_img___366bL{width:24px;float:left;position:relative;top:-3px;margin-right:2px}",""]),t.locals={bg:"bg___1ISyw",body:"body___2qd-o",contentBox:"contentBox___2raGL",title:"title___2w02V",withdrawalsInfo:"withdrawalsInfo___2a4O5",withdrawalsText:"withdrawalsText___21qsq",withdrawalsInput:"withdrawalsInput___2TV8Q",time:"time___VxFp4",withdrawalsJe:"withdrawalsJe___3FSKh",remarks:"remarks___CcoVz",button:"button___3CWJL",card:"card___2AHdX",test:"test___z50Jo",icon_img:"icon_img___366bL"}},2225:function(e,t,a){var n=a(1647);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});