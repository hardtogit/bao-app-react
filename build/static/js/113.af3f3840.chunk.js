webpackJsonp([113],{1066:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),f=u(l),i=n(5),c=u(i),s=n(3),d=u(s),p=n(4),m=u(p),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),(0,f["default"])(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),b=n(1),_=u(b),y=n(11),v=u(y),w=n(39),E=u(w),g=n(20),k=n(270),M=u(k),L=n(773),j=u(L),x=n(10),C=n(9),N=n(41),R=u(N),O=[{name:"兑换记录",info:"",arrow:!0,href:"/user/exchangeList"},{name:"点币记录",info:"",arrow:!0,href:"/user/coinsRecord"},{name:"我的地址",info:"",arrow:!0,href:"/user/setting/siteList"}],P=function(e){function t(e){return r(this,t),o(this,(t.__proto__||(0,m["default"])(t)).call(this,e))}return a(t,e),h(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return _["default"].createElement("div",{className:j["default"].bg},_["default"].createElement(v["default"],{onLeft:this.props.pop},"商城中心"),_["default"].createElement(E["default"],null,_["default"].createElement("div",{className:j["default"].box},_["default"].createElement(M["default"],{item:O})),_["default"].createElement("div",{className:j["default"].rule},_["default"].createElement(g.Link,{to:"/user/shopCenterRule"},_["default"].createElement("span",null,"查看点币使用规则"),_["default"].createElement("img",{src:R["default"]})))))}}]),t}(_["default"].Component),T=function(e){return{}},B=function(e){return{pop:function(){e((0,C.goBack)())}}};t["default"]=(0,x.connect)(T,B)(P)},1193:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1066),o=u(r);t["default"]=o["default"]}});