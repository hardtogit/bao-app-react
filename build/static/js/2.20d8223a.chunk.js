webpackJsonp([2],{28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,f,s=a(2),u=n(s),d=a(5),p=n(d),_=a(3),c=n(_),m=a(4),g=n(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),v=n(b),y=a(8),E=n(y),k=a(30),N=n(k),x=a(9),I=n(x),T=(f=l=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return i(t,e),h(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:v["default"].createElement("div",{className:(0,E["default"])(N["default"].Tipbar,this.props.className)},v["default"].createElement("span",{className:N["default"].text},this.state.message||this.props.text))}}]),t}(v["default"].Component),l.propTypes={text:I["default"].string},f);t["default"]=T},29:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___3HZ5q{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___3HZ5q .text___KcEzd{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___3HZ5q",text:"text___KcEzd"}},30:[2322,29],570:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=a(2),s=r(f),u=a(5),d=r(u),p=a(3),_=r(p),c=a(4),m=r(c),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),b=r(h),v=a(12),y=r(v),E=a(42),k=r(E),N=a(124),x=r(N),I=a(28),T=r(I),S=a(78),C=r(S),V=a(32),A=n(V),w=a(91),B=r(w),R=a(83),G=(r(R),a(69)),O=(r(G),a(26)),D=(r(O),a(79)),P=(r(D),a(2209)),M=r(P),j=a(20),L=(r(j),a(10)),F=(a(21),a(11)),U=a(270),X=(r(U),a(22));r(X);a(22);var K=function(e){function t(e){o(this,t);var a=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.reg=function(){if(!a.state.disable){var e=a.props.bankData.bankName,t=a.props.bankData.bankCode,n=a.refs.form.getValue().realName,r=a.refs.form.getValue().idCard,o=a.refs.form.getValue().telNo,i=a.refs.form.getValue().bankCard,l=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,f=/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;if(null==r.match(l)&&null==r.match(f))return a.refs.alert.open("身份证输入错误"),!1;var s={type:1,way:1,data:{realName:n,idCard:r,telNo:o,bankCard:i,bankName:e,bankCode:t,device:"WAP"},returnUrl:""};a.setState({time:0,pending:!0}),a.props.clean(),a.props.reg(s)}},a.bindBank=function(e){a.ifPost();var t=a.refs.form.getValue().bankCard;if(t.length>=3){var n=!0;a.props.bankList&&(a.props.bankList.data.map(function(e,r){0==t.indexOf(e.cardBin)&&(n=!1,a.props.bankToState(e))}),n&&t.length>7&&a.props.bankToState({bankName:"存管暂不支持该银行的储蓄卡",bankCode:""}))}else a.props.bankToState({bankName:"请输入卡号识别",bankCode:""})},a.isFilled=function(){var e=a.refs.form.getValue().realName,t=a.refs.form.getValue().idCard,n=a.refs.form.getValue().telNo,r=a.refs.form.getValue().bankCard;return""!=e&&""!=t&&""!=n&&""!=r&&null!=e&&null!=t&&null!=n&&null!=r},a.flag=!0,a.ifPost=function(){a.isFilled()&&1==a.flag?a.setState({disable:!1}):a.setState({disable:!0})},a.state={time:0,disable:!0,pending:!1,ifUpdate:!1,checkBox:!0,init:!1},a}return l(t,e),g(t,[{key:"componentWillMount",value:function(){this.props.bankList||this.props.getBankBindList()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.userData&&!this.state.init&&(this.refs.form.refs.realName.setState({value:e.userData.data.realName}),this.refs.form.refs.idCard.setState({value:e.userData.data.idCard}),this.refs.form.refs.telNo.setState({value:e.userData.data.telNo}),this.setState({init:!0}),setTimeout(function(){t.refs.form&&t.ifPost()},1e3)),e.data&&(this.setState({pending:!1}),100==e.data.code?(this.props.clean(),this.props.push("/user/setting/bankPage?url="+e.data.data.url)):(this.props.clean(),this.refs.alert.open("注册失败")))}},{key:"componentDidMount",value:function(){this.props.getStoreUserInfo()}},{key:"render",value:function(){var e=this.state.disable,t=this.props,a=t.saveData,n=t.storeUserInfo,r=t.bankData,o=(a&&a.carNo?a.carNo:"",a&&a.telNo?a.telNo:""),i=n&&n.data.realName?n.data.realName:"",l=n&&n.data.idCard?n.data.idCard:"";return b["default"].createElement("div",{className:M["default"].container},b["default"].createElement(y["default"],{onLeft:this.props.pop,leftNode:b["default"].createElement("div",{style:{paddingLeft:"10px"}},"取消")},"开通存管账户"),b["default"].createElement("div",{style:{paddingTop:"60px"}},b["default"].createElement("p",{className:M["default"].tip},"*请输入本人的真实姓名和身份证号，一但开通成功，无法修改。"),b["default"].createElement(C["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},b["default"].createElement(B["default"],{onChange:this.ifPost,noleftPadding:!0,ref:"realName",name:"realName",label:"真实姓名",defaultValue:i,placeholder:"请输入真实姓名",type:"validateItem",reg:{required:{message:"请输入正确姓名"}},borderType:"four"}),b["default"].createElement(B["default"],{onChange:this.ifPost,noleftPadding:!0,ref:"idCard",name:"idCard",label:"身份证号",defaultValue:l,placeholder:"请输入身份证号",type:"validateItem",reg:{required:{message:"请输入正确身份证号"}},borderType:"four",wrapStyle:{borderBottom:"none"}}),b["default"].createElement("p",{className:M["default"].tip},"银行卡信息"),b["default"].createElement(B["default"],{onChange:this.bindBank,noleftPadding:!0,ref:"bankCard",name:"bankCard",label:"银行卡号",defaultValue:"",placeholder:"",type:"validateItem",reg:{required:{message:"请输入正确的卡号"}},borderType:"four"}),b["default"].createElement("div",{style:{backgroundColor:"#fff"}},b["default"].createElement("div",{className:M["default"].rightBar},"开户行",b["default"].createElement("div",{className:M["default"].rightIcon},b["default"].createElement("span",{className:M["default"].text,onClick:this.choiceBank},r?r.bankName:"请输入卡号识别"),b["default"].createElement("span",{className:M["default"].arrow})))),b["default"].createElement(B["default"],{onChange:this.ifPost,noleftPadding:!0,ref:"telNo",name:"telNo",label:"预留手机",defaultValue:o,placeholder:"",type:"validateItem",reg:{required:{message:"请输入手机号"}},borderType:"four"}),b["default"].createElement("p",{className:M["default"].tip},"开通存管后此密码将用于提现、投资等交易操作、原宝点网交易密码将停用")),b["default"].createElement("div",{style:{padding:"15px"}},b["default"].createElement(k["default"],{ref:"bottom",style:{marginTop:"15px"},onClick:this.reg,disable:e,className:M["default"].bottom,text:this.state.pending?b["default"].createElement(x["default"],{text:"开通中..."}):"开通存管"})),b["default"].createElement(T["default"],{ref:"alert"})))}}]),t}(h.Component),q=function(e,t){return{bankData:e.regStore.getIn([A.CHOICE_BANK,"bankInfo"]),bankList:e.infodata.getIn([A.GET_BANK_BIND_LIST,"data"]),pending:e.infodata.getIn([A.REG_STORE,"pending"]),data:e.infodata.getIn([A.REG_STORE,"data"]),userData:e.infodata.getIn([A.GET_STORE_USER_INFO,"data"]),saveData:e.regStore.getIn([A.SAVE_STORE_DATA,"data"]),storeUserInfo:e.infodata.getIn([A.GET_STORE_USER_INFO,"data"]),flagData:e.infodata.getIn([A.REG_VERIFY,"data"])}},z=function(e,t){return{reg:function(t){e({type:A.REG_STORE,params:[t]})},pop:function(){e((0,L.goBack)())},clean:function(){e({type:"CLEAR_INFO_DATA",key:"REG_STORE"}),e({type:"CLEAR_INFO_DATA",key:"REG_VERIFY"})},bankToState:function(t){e({type:A.CHOICE_BANK,bankData:t})},getBankBindList:function(){e({type:"GET_BANK_BIND_LIST"})},verify:function(t){e({type:A.REG_VERIFY,params:[{id:t}]})},getStoreUserInfo:function(){e({type:A.GET_STORE_USER_INFO})},updateStore:function(){e({type:A.STORE_STATUS_INFO})},push:function(t){e((0,L.push)(t))}}};t["default"]=(0,F.connect)(q,z)(K)},1611:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___1mVvA{background-color:#f1eff5;height:100%;position:absolute}.container___1mVvA .tip___3i7DR{font-size:14px;padding-left:15px;padding-right:15px;color:#777;line-height:20px;margin:8px auto}.container___1mVvA .bottom___3zNSm{margin:15px auto}.container___1mVvA .textContent___TmSyV{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.container___1mVvA .protocol___2-Ka6{color:#00a6e2}.container___1mVvA .rightBar___3uX0M{font-size:16px;padding:12px 0;margin-left:15px;border-bottom:1px solid #ddd}.container___1mVvA .rightBar___3uX0M .rightIcon___2kjGG{float:right}.container___1mVvA .rightBar___3uX0M .rightIcon___2kjGG .text___B_IoH{margin-right:36px}.container___1mVvA .rightBar___3uX0M .rightIcon___2kjGG .arrow___16bAV{position:relative;right:10px}.container___1mVvA .rightBar___3uX0M .rightIcon___2kjGG .arrow___16bAV:after,.container___1mVvA .rightBar___3uX0M .rightIcon___2kjGG .arrow___16bAV:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.container___1mVvA .rightBar___3uX0M .rightIcon___2kjGG .arrow___16bAV:before{border-left-color:#b6b6b6;right:-2px}",""]),t.locals={container:"container___1mVvA",tip:"tip___3i7DR",bottom:"bottom___3zNSm",textContent:"textContent___TmSyV",protocol:"protocol___2-Ka6",rightBar:"rightBar___3uX0M",rightIcon:"rightIcon___2kjGG",text:"text___B_IoH",arrow:"arrow___16bAV"}},2209:function(e,t,a){var n=a(1611);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});