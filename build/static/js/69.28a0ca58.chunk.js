webpackJsonp([69],{1081:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,d=a(2),u=n(d),f=a(5),c=n(f),p=a(3),_=n(p),b=a(4),h=n(b),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),k=a(1),g=n(k),y=a(2155),x=n(y),E=a(11),C=n(E),v=a(312),w=n(v),I=a(24),N=n(I),R=a(174),G=n(R),A=a(313),D=n(A),M=a(23),S=n(M),T=a(92),L=n(T),P=a(27),O=n(P),Z=a(10),Y=a(9),H=(s=l=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.handleChange=function(e){var t=e.target.value,n=/^-?\d*\.?\d*$/;a.setState({recMoney:t}),n.test(t)&&""!=t?a.setState({disabled:!1}):(a.refs.tip.open("请输入正确的充值金额！"),a.setState({disabled:!0}))},a.choiceCallback=function(e,t){a.setState({bankName:t.bankName,bankCard:t.bankCard.substr(t.bankCard.length-4,4),bankCardNo:t.bankCard,bankIcon:t.bankIcon}),e()},a.choiceBank=function(){a.refs.choice.show()},a.handleClick=function(){var e=a;return!a.state.disabled&&void a.refs.password.show({title:"充值",money:a.state.recMoney,okCallback:function(t,a){var n=void 0;n={bankCard:e.state.bankCardNo,transferAmount:e.state.recMoney,passwordFactor:sessionStorage.getItem("passwordFactor"),device:"WAP",mapKey:sessionStorage.getItem("mapKey"),password:a},e.refs.loading.show("充值中..."),e.props.recharge(n),t()}})},a.state={disabled:!0,recMoney:"",bankName:"",bankCard:"",bankIcon:"",singleLimit:"",dayLimit:"",time:0},a}return o(t,e),m(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getMyBankCards()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.banks&&e.banks.data&&this.setState({bankName:e.banks.data[0].bankName,bankCard:e.banks.data[0].bankCard.substr(e.banks.data[0].bankCard.length-4,4),bankCardNo:e.banks.data[0].bankCard,bankIcon:e.banks.data[0].bankIcon,singleLimit:e.banks.data[0].singleLimit,dayLimit:e.banks.data[0].dayLimit}),e.rechargeData&&(1==e.rechargeData.status?this.state.time<=3&&(this.setState({time:this.state.time+1}),e.verifyData&&"100"==e.verifyData.code?this.props.push("/user/reChargeSuccess"):this.state.time>=3?(e.verifyData&&"100"!=e.verifyData.code?(t.refs.loading.hide(),this.refs.alert.show({content:e.verifyData.msg,okText:"确定"})):(t.refs.loading.hide(),this.refs.alert.show({content:"充值失败",okText:"确定"})),this.setState({time:0})):setTimeout(function(){t.props.rechargeVerify({id:e.rechargeData.msgId})},2e3)):301==e.rechargeData.code?(t.refs.loading.hide(),this.refs.alert.show({content:"交易密码错误",okText:"确定"})):(t.refs.loading.hide(),this.refs.alert.show({content:"交易错误",okText:"确定"})))}},{key:"componentWillUnmount",value:function(){this.props.clear()}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.banks,n=this.state,r=n.bankName,i=n.bankCard,o=n.bankIcon;return g["default"].createElement("div",{className:x["default"].container},g["default"].createElement(C["default"],{onLeft:t},"充值"),g["default"].createElement("div",{className:x["default"].inputGroup},g["default"].createElement("span",{className:x["default"].title},"充值金额"),g["default"].createElement("input",{onChange:this.handleChange,placeholder:"请输入充值金额",className:x["default"].input,type:"text"}),g["default"].createElement("span",{className:x["default"].unit},"元")),g["default"].createElement("div",{style:{marginTop:"15px"}},g["default"].createElement(w["default"],{className:x["default"].bank_line,onClick:this.choiceBank,label:r&&g["default"].createElement("div",null,g["default"].createElement("img",{src:o,alt:""})," ",g["default"].createElement("span",{className:x["default"].text},r,"(",i,")"))}," ")),g["default"].createElement("div",{style:{marginTop:"40px",padding:"0 15px"}},g["default"].createElement(N["default"],{onClick:this.handleClick,text:"下一步",disable:this.state.disabled})),g["default"].createElement(G["default"],{ref:"password"}),g["default"].createElement(O["default"],{ref:"tip"}),g["default"].createElement(D["default"],{options:{banks:a,choiceCallback:this.choiceCallback},ref:"choice"}),g["default"].createElement(L["default"],{ref:"loading"}),g["default"].createElement(S["default"],{ref:"alert"}))}}]),t}(k.Component),l.defaultProps={},s),J=function(e){return{banks:e.infodata.getIn(["GET_MY_CARD_LIST","data"]),rechargeData:e.infodata.getIn(["NEW_RECHARGE","data"]),verifyData:e.infodata.getIn(["RECHARGE_VERIFY","data"])}},F=function(e,t){return{pop:function(){e((0,Y.goBack)())},push:function(t){e((0,Y.replace)(t))},getMyBankCards:function(){e({type:"GET_MY_CARD_LIST"})},recharge:function(t){e({type:"NEW_RECHARGE",params:[t]})},clear:function(){e({type:"CLEAR_INFO_DATA",key:"NEW_RECHARGE"}),e({type:"CLEAR_INFO_DATA",key:"RECHARGE_VERIFY"})},rechargeVerify:function(t){e({type:"RECHARGE_VERIFY",params:[t]})}}};t["default"]=(0,Z.connect)(J,F)(H)},1553:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___5M_xG{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.inputGroup___ZZUPJ{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;margin-top:15px;padding:0 15px;line-height:40px}.inputGroup___ZZUPJ .title___24d7w{-webkit-box-flex:0;-ms-flex:0 1 80px;flex:0 1 80px}.inputGroup___ZZUPJ .input___HySkK{height:40px;-webkit-box-flex:1;-ms-flex:1;flex:1;border:none}.inputGroup___ZZUPJ .unit___3hG_M{-webkit-box-flex:0;-ms-flex:0 1 20px;flex:0 1 20px}.fedeIn___3cd_n{-webkit-transform:translateY(0);transform:translateY(0)}.fedeIn___3cd_n,.fedeOut___2y0Om{position:fixed;width:100%;bottom:0}.fedeOut___2y0Om{-webkit-transform:translateY(-60px);transform:translateY(-60px)}.bank_line___26dE0 img{float:left;width:28px;margin-right:6px}.bank_line___26dE0 .text___1etJP{position:relative;top:5px}",""]),t.locals={container:"container___5M_xG",inputGroup:"inputGroup___ZZUPJ",title:"title___24d7w",input:"input___HySkK",unit:"unit___3hG_M",fedeIn:"fedeIn___3cd_n",fedeOut:"fedeOut___2y0Om",bank_line:"bank_line___26dE0",text:"text___1etJP"}},2155:[2349,1553]});