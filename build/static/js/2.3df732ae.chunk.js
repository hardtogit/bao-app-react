webpackJsonp([2],{29:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,f,s=a(2),d=n(s),u=a(5),c=n(u),p=a(3),_=n(p),m=a(4),h=n(m),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),v=n(b),y=a(8),E=n(y),k=a(31),N=n(k),x=a(9),I=n(x),T=(f=l=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return i(t,e),g(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:v["default"].createElement("div",{className:(0,E["default"])(N["default"].Tipbar,this.props.className)},v["default"].createElement("span",{className:N["default"].text},this.state.message||this.props.text))}}]),t}(v["default"].Component),l.propTypes={text:I["default"].string},f);t["default"]=T},30:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},31:[2369,30],705:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=a(2),s=r(f),d=a(5),u=r(d),c=a(3),p=r(c),_=a(4),m=r(_),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),b=r(g),v=a(12),y=r(v),E=a(42),k=r(E),N=a(156),x=r(N),I=a(29),T=r(I),C=a(87),S=r(C),w=a(32),B=n(w),R=a(103),O=r(R),A=a(99),D=(r(A),a(74)),V=(r(D),a(27)),z=(r(V),a(88)),P=(r(z),a(2290)),Z=r(P),G=a(23),L=(r(G),a(11)),F=(a(21),a(10)),U=a(301),M=(r(U),a(26));r(M);a(26);var H=function(e){function t(e){o(this,t);var a=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.reg=function(){if(!a.state.disable){var e=a.props.bankData.bankName,t=a.props.bankData.bankCode,n=a.refs.form.getValue().realName,r=a.refs.form.getValue().idCard,o=a.refs.form.getValue().telNo,i=a.refs.form.getValue().bankCard,l=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,f=/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;if(null==r.match(l)&&null==r.match(f))return a.refs.alert.open("身份证输入错误"),!1;var s={type:1,way:1,data:{realName:n,idCard:r,telNo:o,bankCard:i,bankName:e,bankCode:t,device:"WAP"},returnUrl:""};a.setState({time:0,pending:!0}),a.props.clean(),a.props.reg(s)}},a.bindBank=function(e){a.ifPost();var t=a.refs.form.getValue().bankCard;if(t.length>=3){var n=!0;a.props.bankList&&(a.props.bankList.data.map(function(e,r){0==t.indexOf(e.cardBin)&&(n=!1,a.props.bankToState(e))}),n&&t.length>7&&a.props.bankToState({bankName:"存管暂不支持该银行的储蓄卡",bankCode:""}))}else a.props.bankToState({bankName:"请输入卡号识别",bankCode:""})},a.isFilled=function(){var e=a.refs.form.getValue().realName,t=a.refs.form.getValue().idCard,n=a.refs.form.getValue().telNo,r=a.refs.form.getValue().bankCard;return""!=e&&""!=t&&""!=n&&""!=r&&null!=e&&null!=t&&null!=n&&null!=r},a.flag=!0,a.ifPost=function(){a.isFilled()&&1==a.flag?a.setState({disable:!1}):a.setState({disable:!0})},a.state={time:0,disable:!0,pending:!1,ifUpdate:!1,checkBox:!0,init:!1},a}return l(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.bankList||this.props.getBankBindList()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.userData&&!this.state.init&&(this.refs.form.refs.realName.setState({value:e.userData.data.realName}),this.refs.form.refs.idCard.setState({value:e.userData.data.idCard}),this.refs.form.refs.telNo.setState({value:e.userData.data.telNo}),this.setState({init:!0}),setTimeout(function(){t.refs.form&&t.ifPost()},1e3)),e.data&&(this.setState({pending:!1}),100==e.data.code?(this.props.clean(),this.props.push("/user/setting/bankPage?url="+e.data.data.url)):(this.props.clean(),this.refs.alert.open("注册失败")))}},{key:"componentDidMount",value:function(){this.props.getStoreUserInfo()}},{key:"render",value:function(){var e=this.state.disable,t=this.props,a=t.saveData,n=t.storeUserInfo,r=t.bankData,o=(a&&a.carNo?a.carNo:"",a&&a.telNo?a.telNo:""),i=n&&n.data.realName?n.data.realName:"",l=n&&n.data.idCard?n.data.idCard:"";return b["default"].createElement("div",{className:Z["default"].container},b["default"].createElement(y["default"],{onLeft:this.props.pop,leftNode:b["default"].createElement("div",{style:{paddingLeft:"10px"}},"取消")},"开通存管账户"),b["default"].createElement("div",{style:{paddingTop:"60px"}},b["default"].createElement("p",{className:Z["default"].tip},"*请输入本人的真实姓名和身份证号，一但开通成功，无法修改。"),b["default"].createElement(S["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},b["default"].createElement(O["default"],{onChange:this.ifPost,noleftPadding:!0,ref:"realName",name:"realName",label:"真实姓名",defaultValue:i,placeholder:"请输入真实姓名",type:"validateItem",reg:{required:{message:"请输入正确姓名"}},borderType:"four"}),b["default"].createElement(O["default"],{onChange:this.ifPost,noleftPadding:!0,ref:"idCard",name:"idCard",label:"身份证号",defaultValue:l,placeholder:"请输入身份证号",type:"validateItem",reg:{required:{message:"请输入正确身份证号"}},borderType:"four",wrapStyle:{borderBottom:"none"}}),b["default"].createElement("p",{className:Z["default"].tip},"银行卡信息"),b["default"].createElement(O["default"],{onChange:this.bindBank,noleftPadding:!0,ref:"bankCard",name:"bankCard",label:"银行卡号",defaultValue:"",placeholder:"",type:"validateItem",reg:{required:{message:"请输入正确的卡号"}},borderType:"four"}),b["default"].createElement("div",{style:{backgroundColor:"#fff"}},b["default"].createElement("div",{className:Z["default"].rightBar},"开户行",b["default"].createElement("div",{className:Z["default"].rightIcon},b["default"].createElement("span",{className:Z["default"].text,onClick:this.choiceBank},r?r.bankName:"请输入卡号识别"),b["default"].createElement("span",{className:Z["default"].arrow})))),b["default"].createElement(O["default"],{onChange:this.ifPost,noleftPadding:!0,ref:"telNo",name:"telNo",label:"预留手机",defaultValue:o,placeholder:"",type:"validateItem",reg:{required:{message:"请输入手机号"}},borderType:"four"}),b["default"].createElement("p",{className:Z["default"].tip},"开通存管后此密码将用于提现、出借等交易操作、原宝点网交易密码将停用")),b["default"].createElement("div",{style:{padding:"15px"}},b["default"].createElement(k["default"],{ref:"bottom",style:{marginTop:"15px"},onClick:this.reg,disable:e,className:Z["default"].bottom,text:this.state.pending?b["default"].createElement(x["default"],{text:"开通中..."}):"开通存管"})),b["default"].createElement(T["default"],{ref:"alert"})))}}]),t}(g.Component),j=function(e,t){return{bankData:e.regStore.getIn([B.CHOICE_BANK,"bankInfo"]),bankList:e.infodata.getIn([B.GET_BANK_BIND_LIST,"data"]),pending:e.infodata.getIn([B.REG_STORE,"pending"]),data:e.infodata.getIn([B.REG_STORE,"data"]),userData:e.infodata.getIn([B.GET_STORE_USER_INFO,"data"]),saveData:e.regStore.getIn([B.SAVE_STORE_DATA,"data"]),storeUserInfo:e.infodata.getIn([B.GET_STORE_USER_INFO,"data"]),flagData:e.infodata.getIn([B.REG_VERIFY,"data"])}},X=function(e,t){return{reg:function(t){e({type:B.REG_STORE,params:[t]})},pop:function(){e((0,L.goBack)())},clean:function(){e({type:"CLEAR_INFO_DATA",key:"REG_STORE"}),e({type:"CLEAR_INFO_DATA",key:"REG_VERIFY"})},bankToState:function(t){e({type:B.CHOICE_BANK,bankData:t})},getBankBindList:function(){e({type:"GET_BANK_BIND_LIST"})},verify:function(t){e({type:B.REG_VERIFY,params:[{id:t}]})},getStoreUserInfo:function(){e({type:B.GET_STORE_USER_INFO})},updateStore:function(){e({type:B.STORE_STATUS_INFO})},push:function(t){e((0,L.push)(t))}}};t["default"]=(0,F.connect)(j,X)(H)},1740:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___pamcZ{background-color:#f1eff5;height:100%;position:absolute}.container___pamcZ .tip___1fIT7{font-size:14px;padding-left:15px;padding-right:15px;color:#777;line-height:20px;margin:8px auto}.container___pamcZ .bottom___1XeIu{margin:15px auto}.container___pamcZ .textContent___15iit{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.container___pamcZ .protocol___1l1sz{color:#00a6e2}.container___pamcZ .rightBar___1vzc8{font-size:16px;padding:12px 0;margin-left:15px;border-bottom:1px solid #ddd}.container___pamcZ .rightBar___1vzc8 .rightIcon___2fm9f{float:right}.container___pamcZ .rightBar___1vzc8 .rightIcon___2fm9f .text___hXk-h{margin-right:36px}.container___pamcZ .rightBar___1vzc8 .rightIcon___2fm9f .arrow___1AnHt{position:relative;right:10px}.container___pamcZ .rightBar___1vzc8 .rightIcon___2fm9f .arrow___1AnHt:after,.container___pamcZ .rightBar___1vzc8 .rightIcon___2fm9f .arrow___1AnHt:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.container___pamcZ .rightBar___1vzc8 .rightIcon___2fm9f .arrow___1AnHt:before{border-left-color:#b6b6b6;right:-2px}",""]),t.locals={container:"container___pamcZ",tip:"tip___1fIT7",bottom:"bottom___1XeIu",textContent:"textContent___15iit",protocol:"protocol___1l1sz",rightBar:"rightBar___1vzc8",rightIcon:"rightIcon___2fm9f",text:"text___hXk-h",arrow:"arrow___1AnHt"}},2290:function(e,t,a){var n=a(1740);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});