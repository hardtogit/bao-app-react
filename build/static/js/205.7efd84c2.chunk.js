webpackJsonp([205],{953:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,r,c=a(2),d=l(c),s=a(5),f=l(s),u=a(3),p=l(u),m=a(4),b=l(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,d["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),g=a(1),h=l(g),k=a(2069),E=l(k),v=a(12),y=l(v),N=a(11),R=a(10),w=a(21),D=a(26),B=l(D),X=a(124),Y=l(X),C=a(42),I=l(C),T=a(22),G=l(T),P=(r=o=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.ifScan=function(e){a.state.checkBox?a.setState({checkBox:!1}):a.setState({checkBox:!0})},a.endDom=function(){var e=a.props,t=e.data.data,l=t.title,n=t.rate,i=t.interest,_=t.money,o=t.returnInterest,r=t.fee,c=t.totalMoney,d=e.userData.data.balance,s=e.contractData,f=!0;return a.state.disable||(f=!a.state.checkBox),h["default"].createElement("div",null,h["default"].createElement("div",{className:E["default"].title},"购买产品：",l," 年化利率（",n,"%）"),h["default"].createElement("div",{className:E["default"].block},h["default"].createElement("div",{className:E["default"].line},h["default"].createElement("div",{className:E["default"].label},"预期收益（元）"),h["default"].createElement("div",{className:E["default"].value},i)),h["default"].createElement("div",{className:E["default"].line},h["default"].createElement("div",{className:E["default"].label},"转让价格（元）"),h["default"].createElement("div",{className:E["default"].value},_)),h["default"].createElement("div",{className:E["default"].line},h["default"].createElement("div",{className:E["default"].label},"预付利息（元）"),h["default"].createElement("div",{className:E["default"].value},o)),h["default"].createElement("div",{className:E["default"].line},h["default"].createElement("div",{className:E["default"].label},"手续费（元）"),h["default"].createElement("div",{className:E["default"].value},r))),h["default"].createElement("div",{className:E["default"].bar},h["default"].createElement("div",{className:E["default"].left},"实际支付（元）"),h["default"].createElement("div",{className:E["default"].right},c)),h["default"].createElement("div",{className:E["default"].warm},"注：智享计划只能全额购买，且不能转让"),h["default"].createElement("div",null,h["default"].createElement("div",{className:E["default"].item},h["default"].createElement("div",{className:E["default"].left},"存管账户余额"),h["default"].createElement("div",{className:E["default"].right},h["default"].createElement("span",{className:E["default"].num},d,"元"),h["default"].createElement("span",{className:E["default"].tip},a.state.disable&&"(余额不足)")))),h["default"].createElement("div",{className:E["default"].links},h["default"].createElement("input",{onClick:a.ifScan,type:"checkbox",checked:a.state.checkBox}),"  我已阅读并同意签署",s&&s.data.map(function(e,t){return h["default"].createElement(w.Link,{key:t,to:"/emptyTemplate/"+(e.hetong_type?e.hetong_type:0)+"?name="+encodeURIComponent(e.hetong_name),className:E["default"].protocol},"《",e.hetong_name,"》")})),h["default"].createElement("div",{className:E["default"].btn},h["default"].createElement(I["default"],{text:a.state.submitting&&h["default"].createElement(Y["default"],null)||"确认支付",disable:f,onClick:a.handleClick})))},a.handleClick=function(){!a.state.disable&&a.state.checkBox&&(a.setState({submitting:!0}),a.props.goBankPage({way:1,type:454,returnUrl:"",data:{productId:a.props.params.productId,couponId:"",quantity:1,type:"ENJOY",device:"WAP",unitPrice:a.props.data.data.totalMoney,prepaid_interest:a.props.data.data.returnInterest}}))},a.state={isOpen:!1,disable:!0,submitting:!1,checkBox:!0},a}return _(t,e),x(t,[{key:"componentWillMount",value:function(){this.props.get(this.props.params.productId)}},{key:"componentDidMount",value:function(){this.props.getEmptyContractsList()}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.userData,l=e.goBankData;l&&100==l.code?(this.props.clearData("GO_BANK_PAGE"),this.props.push("/user/setting/bankPage?url="+l.data.url)):l&&100!=l.code&&(this.props.clearData("GO_BANK_PAGE"),this.refs.alert.show({content:"订单生成失败！",okText:"确定"}),this.setState({submitting:!1})),t&&a&&parseFloat(a.data.balance)>=parseFloat(t.data.totalMoney)&&this.setState({disable:!1})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.data,l=e.userData,n=void 0;return n=a&&l?this.endDom():h["default"].createElement(G["default"],null),h["default"].createElement("div",{className:E["default"].container},h["default"].createElement(y["default"],{onLeft:t},"购买支付"),n,h["default"].createElement(B["default"],{ref:"alert"}))}}]),t}(g.Component),o.defaultProps={},r),z=function(e){return{data:e.infodata.getIn(["WISDOM_DETAIL","data"]),userData:e.infodata.getIn(["USER_INFO","data"]),goBankData:e.infodata.getIn(["GO_BANK_PAGE","data"]),contractData:e.infodata.getIn(["GET_EMPTY_CONTRACTS_LIST","data"])}},A=function(e,t){return{getEmptyContractsList:function(){e({type:"GET_EMPTY_CONTRACTS_LIST",params:[{product_type:"H"}]})},pop:function(){e((0,R.goBack)())},get:function(t){e({type:"WISDOM_DETAIL",params:[t]})},push:function(t){e((0,R.push)(t))},getUserInfo:function(){e({type:"USER_INFO"})},goBankPage:function(t){e({type:"GO_BANK_PAGE",params:[t]})},clearData:function(t){e({type:"CLEAR_INFO_DATA",key:t})}}};t["default"]=(0,N.connect)(z,A)(P)},1468:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___1RX2Y{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___1RX2Y .title___2gzxF{font-size:14px;padding:10px;color:#898989}.container___1RX2Y .block___138_d{padding:0 0 0 10px;background-color:#fff}.container___1RX2Y .block___138_d .line___QRGtd{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 10px 10px 0}.container___1RX2Y .block___138_d .line___QRGtd .label___2Bj62{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#989898;font-size:14px;text-align:left}.container___1RX2Y .block___138_d .line___QRGtd:first-child{border-bottom:1px solid #ddd}.container___1RX2Y .block___138_d .line___QRGtd:first-child .label___2Bj62,.container___1RX2Y .block___138_d .line___QRGtd:first-child .value___3BXCp{font-size:16px}.container___1RX2Y .block___138_d .line___QRGtd .value___3BXCp{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;color:#ff7701}.container___1RX2Y .bar___2wDrD{padding:15px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;margin:15px auto 0}.container___1RX2Y .bar___2wDrD .left___3Cr2j{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:left;font-size:16px;color:#989898}.container___1RX2Y .bar___2wDrD .right___1PCbj{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;font-size:24px;color:#ff7701}.container___1RX2Y .warm___ewc2L{color:#ff7701;padding:8px 0 8px 10px;font-size:14px}.container___1RX2Y .item___3Tz8B{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;padding:10px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___1RX2Y .item___3Tz8B .left___3Cr2j{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:10px;font-size:16px;color:#989898}.container___1RX2Y .item___3Tz8B .right___1PCbj{padding-right:10px}.container___1RX2Y .item___3Tz8B .right___1PCbj .num___1hVIY{font-size:16px;color:#333}.container___1RX2Y .item___3Tz8B .right___1PCbj .tip___1pUdc{font-size:12px;color:#989898}.container___1RX2Y .links___1DXFx{padding:8px 10px;color:#989898;font-size:14px}.container___1RX2Y .btn___1L7kG{padding:10px;margin-top:20px}",""]),t.locals={container:"container___1RX2Y",title:"title___2gzxF",block:"block___138_d",line:"line___QRGtd",label:"label___2Bj62",value:"value___3BXCp",bar:"bar___2wDrD",left:"left___3Cr2j",right:"right___1PCbj",warm:"warm___ewc2L",item:"item___3Tz8B",num:"num___1hVIY",tip:"tip___1pUdc",links:"links___1DXFx",btn:"btn___1L7kG"}},2069:[2319,1468]});