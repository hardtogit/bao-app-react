webpackJsonp([53],{1013:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,l,u=a(2),c=n(u),f=a(5),d=n(f),p=a(3),_=n(p),h=a(4),b=n(h),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),k=a(1),y=n(k),g=a(2036),E=n(g),C=a(11),x=n(C),v=a(296),w=n(v),R=a(26),G=n(R),N=a(162),I=n(N),A=a(431),M=n(A),S=a(197),D=n(S),T=a(32),O=n(T),Z=a(10),F=a(9),P=(l=s=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.handleChange=function(e){var t=e.target.value,n=/^-?\d*\.?\d*$/;a.setState({recMoney:t}),n.test(t)&&""!=t?a.setState({disabled:!1}):(a.refs.tip.open("请输入正确的充值金额！"),a.setState({disabled:!0}))},a.choiceCallback=function(e,t,n){a.setState({bankName:t,bankCard:n.substr(n.length-4,4),bankCardNo:n}),e()},a.choiceBank=function(){a.refs.choice.show()},a.handleClick=function(){var e=a;return!a.state.disabled&&void a.refs.password.show({money:a.state.recMoney,okCallback:function(t,a){var n=void 0;n={bankCard:e.state.bankCardNo,transferAmount:e.state.recMoney,passwordFactor:sessionStorage.getItem("passwordFactor"),device:"WAP",hEncryptKey:sessionStorage.getItem("hEncryptKey"),password:a},e.refs.loading.show("充值中..."),e.props.recharge(n),t()}})},a.state={disabled:!0,recMoney:"",bankName:"",bankCard:"",time:0},a}return i(t,e),m(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getMyBankCards()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.banks&&e.banks.data&&this.setState({bankName:e.banks.data[0].bankName,bankCard:e.banks.data[0].bankCard.substr(e.banks.data[0].bankCard.length-4,4),bankCardNo:e.banks.data[0].bankCard}),e.rechargeData&&1==e.rechargeData.status&&this.state.time<=3&&(this.setState({time:this.state.time+1}),e.verifyData&&"0001"==e.verifyData.code?this.props.push("/user/reChargeSuccess"):this.state.time>=3?(e.verifyData&&"0001"!=e.verifyData.code?this.props.push("/user/reChargeFail"):this.props.push("/user/reChargeFail"),this.setState({time:0})):setTimeout(function(){t.props.rechargeVerify({id:e.rechargeData.msgId})},2e3))}},{key:"componentWillUnmount",value:function(){this.props.clear()}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.banks,n=this.state,r=n.bankName,o=n.bankCard;return y["default"].createElement("div",{className:E["default"].container},y["default"].createElement(x["default"],{onLeft:t},"充值"),y["default"].createElement("div",{className:E["default"].inputGroup},y["default"].createElement("span",{className:E["default"].title},"充值金额"),y["default"].createElement("input",{onChange:this.handleChange,placeholder:"请输入充值金额",className:E["default"].input,type:"text"}),y["default"].createElement("span",{className:E["default"].unit},"元")),y["default"].createElement("div",{style:{marginTop:"15px"}},y["default"].createElement(w["default"],{onClick:this.choiceBank,label:r&&r+"("+o+")"}," ")),y["default"].createElement("div",{style:{marginTop:"40px",padding:"0 15px"}},y["default"].createElement(G["default"],{onClick:this.handleClick,text:"下一步",disable:this.state.disabled})),y["default"].createElement(I["default"],{ref:"password"}),y["default"].createElement(O["default"],{ref:"tip"}),y["default"].createElement(M["default"],{options:{banks:a,choiceCallback:this.choiceCallback},ref:"choice"}),y["default"].createElement(D["default"],{ref:"loading"}))}}]),t}(k.Component),s.defaultProps={},l),Y=function(e){return{banks:e.infodata.getIn(["GET_MY_CARD_LIST","data"]),rechargeData:e.infodata.getIn(["NEW_RECHARGE","data"]),verifyData:e.infodata.getIn(["RECHARGE_VERIFY","data"])}},H=function(e,t){return{pop:function(){e((0,F.goBack)())},push:function(t){e((0,F.push)(t))},getMyBankCards:function(){e({type:"GET_MY_CARD_LIST"})},recharge:function(t){e({type:"NEW_RECHARGE",params:[t]})},clear:function(){e({type:"CLEAR_INFO_DATA",key:"NEW_RECHARGE"}),e({type:"CLEAR_INFO_DATA",key:"RECHARGE_VERIFY"})},rechargeVerify:function(t){e({type:"RECHARGE_VERIFY",params:[t]})}}};t["default"]=(0,Z.connect)(Y,H)(P)},1460:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".container___5M_xG{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.inputGroup___ZZUPJ{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;margin-top:15px;padding:0 15px;line-height:40px}.inputGroup___ZZUPJ .title___24d7w{-webkit-box-flex:0;-ms-flex:0 1 80px;flex:0 1 80px}.inputGroup___ZZUPJ .input___HySkK{height:40px;-webkit-box-flex:1;-ms-flex:1;flex:1;border:none}.inputGroup___ZZUPJ .unit___3hG_M{-webkit-box-flex:0;-ms-flex:0 1 20px;flex:0 1 20px}.fedeIn___3cd_n{-webkit-transform:translateY(0);transform:translateY(0)}.fedeIn___3cd_n,.fedeOut___2y0Om{position:fixed;width:100%;bottom:0}.fedeOut___2y0Om{-webkit-transform:translateY(-60px);transform:translateY(-60px)}",""]),t.locals={container:"container___5M_xG",inputGroup:"inputGroup___ZZUPJ",title:"title___24d7w",input:"input___HySkK",unit:"unit___3hG_M",fedeIn:"fedeIn___3cd_n",fedeOut:"fedeOut___2y0Om"}},2036:[2212,1460]});