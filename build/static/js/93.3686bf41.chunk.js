webpackJsonp([93],{970:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),c=a(l),i=n(5),f=a(i),u=n(3),d=a(u),s=n(32),p=a(s),x=n(4),m=a(x),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,c["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),w=a(h),g=n(2336),E=a(g),I=n(14),R=a(I),v=n(10),y=a(v),X=n(17),N=(a(X),n(18)),A=(a(N),n(9)),D=n(82),W=(a(D),n(21)),k=(a(W),n(8)),O=function(e){function t(e){_(this,t);var n=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.state={isOpen:!1},n}return r(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.push,a=e.userInfo;return w["default"].createElement("div",{className:E["default"].container},w["default"].createElement(y["default"],{onLeft:t}," 账户余额"),w["default"].createElement("div",{className:E["default"].content},w["default"].createElement("h4",{className:E["default"].text},"账户余额 (元)"),w["default"].createElement("div",{className:E["default"].num},function(){if(a){var e=(0,p["default"])(parseInt(100*a.data.balance+100*a.data.balance_platform)/100);if(!e.split(".")[1])return e+".00";switch(e.split(".")[1].length){case 1:return e+"0";case 2:return e;default:return e+".00"}}}()),w["default"].createElement("div",{className:E["default"].boxs},w["default"].createElement("div",{className:E["default"].left},w["default"].createElement("ul",null,w["default"].createElement("li",{className:E["default"].mx},w["default"].createElement("span",{onClick:function(){n("/user/moneyLog")}},"交易明细 ",w["default"].createElement("span",{className:E["default"].arrow}))),w["default"].createElement("li",{className:E["default"].tx},"存管账户余额(元)"),w["default"].createElement("li",{className:E["default"].money},a&&a.data.balance))),w["default"].createElement("div",{className:E["default"].right},w["default"].createElement("ul",null,w["default"].createElement("li",{className:E["default"].mx},w["default"].createElement("span",{onClick:function(){n("/user/moneyLogOld")}},"交易明细 ",w["default"].createElement("span",{className:E["default"].arrow}))),w["default"].createElement("li",{className:E["default"].tx},"托管账户余额(元)"),w["default"].createElement("li",{className:E["default"].money},a&&a.data.balance_platform))))),w["default"].createElement("div",{onClick:function(){n("/user/reChargeMain")},className:(0,R["default"])([E["default"].btn,E["default"].charge])},"充值"),w["default"].createElement("div",{onClick:function(){n("/user/CashMain")},className:(0,R["default"])([E["default"].btn,E["default"].cash])},"提现"))}}]),t}(h.Component),P=function(e){return{userInfo:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"])}},C=function(e,t){return{pop:function(){e((0,k.goBack)())},push:function(t){e((0,k.push)(t))},load:function(){e({type:"USER_INFO_WITH_LOGIN"})}}};t["default"]=(0,A.connect)(P,C)(O)},1469:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".container___tIAXD{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___tIAXD .content___WwR3p{background-color:#00a6e2}.container___tIAXD .content___WwR3p .text___12d6I{text-align:center;color:#fff;font-size:12px;padding:20px 0 10px}.container___tIAXD .content___WwR3p .num___3esRy{text-align:center;color:#fff;font-size:30px;padding-bottom:20px}.container___tIAXD .content___WwR3p .boxs___3P7xR{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #fff;color:#fff}.container___tIAXD .content___WwR3p .boxs___3P7xR>div{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px}.container___tIAXD .content___WwR3p .boxs___3P7xR>div .mx___2O4Eh{text-align:right;margin-right:20px;font-size:14px}.container___tIAXD .content___WwR3p .boxs___3P7xR>div .mx___2O4Eh .arrow___3rXwd{position:relative}.container___tIAXD .content___WwR3p .boxs___3P7xR>div .mx___2O4Eh .arrow___3rXwd:after,.container___tIAXD .content___WwR3p .boxs___3P7xR>div .mx___2O4Eh .arrow___3rXwd:before{border:7px solid transparent;border-left:7px solid #00a6e2;width:0;height:0;position:absolute;top:2px;left:4px;content:' '}.container___tIAXD .content___WwR3p .boxs___3P7xR>div .mx___2O4Eh .arrow___3rXwd:before{border-left-color:#fff;left:6px}.container___tIAXD .content___WwR3p .boxs___3P7xR>div .tx___2hu8t{margin-top:20px;font-size:14px;text-align:center}.container___tIAXD .content___WwR3p .boxs___3P7xR>div .money___1FaAu{text-align:center;font-size:20px;margin:6px auto 15px}.container___tIAXD .content___WwR3p .boxs___3P7xR .left___1d1u6{border-right:1px solid #fff}.container___tIAXD .btn___3VbJt{width:90%;padding:12px;text-align:center;border-radius:44px;border:1px solid #ddd;background-color:#fff}.container___tIAXD .charge___1GzCH{margin:30px auto 10px;border:1px solid #f6923a;color:#f6923a}.container___tIAXD .cash___29ULh{margin:0 auto;color:#333}",""]),t.locals={container:"container___tIAXD",content:"content___WwR3p",text:"text___12d6I",num:"num___3esRy",boxs:"boxs___3P7xR",mx:"mx___2O4Eh",arrow:"arrow___3rXwd",tx:"tx___2hu8t",money:"money___1FaAu",left:"left___1d1u6",btn:"btn___3VbJt",charge:"charge___1GzCH",cash:"cash___29ULh"}},2336:[2553,1469]});