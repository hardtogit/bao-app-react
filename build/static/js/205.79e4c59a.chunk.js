webpackJsonp([205],{953:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,r,d=a(2),c=l(d),f=a(5),s=l(f),u=a(3),p=l(u),m=a(4),b=l(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,c["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),g=a(1),E=l(g),k=a(2069),y=l(k),v=a(12),h=l(v),N=a(11),P=a(10),j=a(21),U=a(26),w=l(U),I=a(124),F=l(I),K=a(42),T=l(K),D=a(22),M=l(D),A=(r=o=function(e){function t(e){n(this,t);var a=_(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.endDom=function(){var e=a.props,t=e.data.data,l=t.title,n=t.rate,_=t.interest,i=t.money,o=t.returnInterest,r=t.fee,d=t.totalMoney,c=e.userData.data.balance,f=e.contractData;return E["default"].createElement("div",null,E["default"].createElement("div",{className:y["default"].title},"购买产品：",l," 年化利率（",n,"%）"),E["default"].createElement("div",{className:y["default"].block},E["default"].createElement("div",{className:y["default"].line},E["default"].createElement("div",{className:y["default"].label},"预期收益（元）"),E["default"].createElement("div",{className:y["default"].value},_)),E["default"].createElement("div",{className:y["default"].line},E["default"].createElement("div",{className:y["default"].label},"转让价格（元）"),E["default"].createElement("div",{className:y["default"].value},i)),E["default"].createElement("div",{className:y["default"].line},E["default"].createElement("div",{className:y["default"].label},"预付利息（元）"),E["default"].createElement("div",{className:y["default"].value},o)),E["default"].createElement("div",{className:y["default"].line},E["default"].createElement("div",{className:y["default"].label},"手续费（元）"),E["default"].createElement("div",{className:y["default"].value},r))),E["default"].createElement("div",{className:y["default"].bar},E["default"].createElement("div",{className:y["default"].left},"实际支付（元）"),E["default"].createElement("div",{className:y["default"].right},d)),E["default"].createElement("div",{className:y["default"].warm},"注：智享计划只能全额购买，且不能转让"),E["default"].createElement("div",null,E["default"].createElement("div",{className:y["default"].item},E["default"].createElement("div",{className:y["default"].left},"存管账户余额"),E["default"].createElement("div",{className:y["default"].right},E["default"].createElement("span",{className:y["default"].num},c,"元"),E["default"].createElement("span",{className:y["default"].tip},a.state.disable&&"(余额不足)")))),E["default"].createElement("div",{className:y["default"].links},"我已阅读并同意签署",f&&f.data.map(function(e,t){return E["default"].createElement(j.Link,{key:t,to:"/emptyTemplate/"+(e.hetong_type?e.hetong_type:0),className:y["default"].protocol},"《",e.hetong_name,"》")})),E["default"].createElement("div",{className:y["default"].btn},E["default"].createElement(T["default"],{text:a.state.submitting&&E["default"].createElement(F["default"],null)||"确认支付",disable:a.state.disable,onClick:a.handleClick})))},a.handleClick=function(){a.state.disable||(a.setState({submitting:!0}),a.props.goBankPage({way:1,type:454,returnUrl:"",data:{productId:a.props.params.productId,couponId:"",quantity:1,type:"ENJOY",device:"WAP",unitPrice:a.props.data.data.totalMoney,prepaid_interest:a.props.data.data.returnInterest}}))},a.state={isOpen:!1,disable:!0,submitting:!1},a}return i(t,e),x(t,[{key:"componentWillMount",value:function(){this.props.get(this.props.params.productId)}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.userData,l=e.goBankData;l&&100==l.code?(this.props.clearData("GO_BANK_PAGE"),this.props.push("/user/setting/bankPage?url="+l.data.url)):l&&100!=l.code&&(this.props.clearData("GO_BANK_PAGE"),this.refs.alert.show({content:"订单生成失败！",okText:"确定"}),this.setState({submitting:!1})),t&&a&&parseFloat(a.data.balance)>=parseFloat(t.data.totalMoney)&&this.setState({disable:!1})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.data,l=e.userData,n=void 0;return n=a&&l?this.endDom():E["default"].createElement(M["default"],null),E["default"].createElement("div",{className:y["default"].container},E["default"].createElement(h["default"],{onLeft:t},"购买支付"),n,E["default"].createElement(w["default"],{ref:"alert"}))}}]),t}(g.Component),o.defaultProps={},r),O=function(e){return{data:e.infodata.getIn(["WISDOM_DETAIL","data"]),userData:e.infodata.getIn(["USER_INFO","data"]),goBankData:e.infodata.getIn(["GO_BANK_PAGE","data"]),contractData:e.infodata.getIn(["GET_EMPTY_CONTRACTS_LIST","data"])}},S=function(e,t){return{getEmptyContractsList:function(){e({type:"GET_EMPTY_CONTRACTS_LIST",params:[{product_type:"H"}]})},pop:function(){e((0,P.goBack)())},get:function(t){e({type:"WISDOM_DETAIL",params:[t]})},push:function(t){e((0,P.push)(t))},getUserInfo:function(){e({type:"USER_INFO"})},goBankPage:function(t){e({type:"GO_BANK_PAGE",params:[t]})},clearData:function(t){e({type:"CLEAR_INFO_DATA",key:t})}}};t["default"]=(0,N.connect)(O,S)(A)},1468:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___1jPU_{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___1jPU_ .title___5xOei{font-size:14px;padding:10px;color:#898989}.container___1jPU_ .block___MYy_-{padding:0 0 0 10px;background-color:#fff}.container___1jPU_ .block___MYy_- .line___3FrkK{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 10px 10px 0}.container___1jPU_ .block___MYy_- .line___3FrkK .label___23pdT{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#989898;font-size:14px;text-align:left}.container___1jPU_ .block___MYy_- .line___3FrkK:first-child{border-bottom:1px solid #ddd}.container___1jPU_ .block___MYy_- .line___3FrkK:first-child .label___23pdT,.container___1jPU_ .block___MYy_- .line___3FrkK:first-child .value___fFs3x{font-size:16px}.container___1jPU_ .block___MYy_- .line___3FrkK .value___fFs3x{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;color:#ff7701}.container___1jPU_ .bar___7dKFK{padding:15px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;margin:15px auto 0}.container___1jPU_ .bar___7dKFK .left___3KgNF{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:left;font-size:16px;color:#989898}.container___1jPU_ .bar___7dKFK .right___3bseX{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;font-size:24px;color:#ff7701}.container___1jPU_ .warm___2jthF{color:#ff7701;padding:8px 0 8px 10px;font-size:14px}.container___1jPU_ .item___14jI5{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;padding:10px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___1jPU_ .item___14jI5 .left___3KgNF{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:10px;font-size:16px;color:#989898}.container___1jPU_ .item___14jI5 .right___3bseX{padding-right:10px}.container___1jPU_ .item___14jI5 .right___3bseX .num___1SlEh{font-size:16px;color:#333}.container___1jPU_ .item___14jI5 .right___3bseX .tip___1fCxG{font-size:12px;color:#989898}.container___1jPU_ .links___2B4y1{padding:8px 10px;color:#989898;font-size:14px}.container___1jPU_ .btn___14EUE{padding:10px;margin-top:20px}",""]),t.locals={container:"container___1jPU_",title:"title___5xOei",block:"block___MYy_-",line:"line___3FrkK",label:"label___23pdT",value:"value___fFs3x",bar:"bar___7dKFK",left:"left___3KgNF",right:"right___3bseX",warm:"warm___2jthF",item:"item___14jI5",num:"num___1SlEh",tip:"tip___1fCxG",links:"links___2B4y1",btn:"btn___14EUE"}},2069:[2319,1468]});