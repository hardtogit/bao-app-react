webpackJsonp([157],{1130:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,_["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(c["default"]?(0,c["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),u=o(l),f=n(5),c=o(f),p=n(3),_=o(p),s=n(4),d=o(s),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),b=n(1),h=o(b),g=n(10),y=o(g),w=n(9),x=n(8),v=n(31),k=o(v),E=n(25),A=o(E),M=n(2235),O=o(M),T=n(1890),W=o(T),C=function(t){function e(t){r(this,e);var n=a(this,(e.__proto__||(0,d["default"])(e)).call(this,t));return n.push=function(){var t=n.props,e=t.location.query,o=t.push;e.hasOwnProperty("banck")?window.location.href=e.banck:o()},n.state={},n}return i(e,t),m(e,[{key:"render",value:function(){var t=this.props.location.query,e="您的点币不足";return t.hasOwnProperty("banck")&&(e="哎呀，出错了请稍后再来兑换"),h["default"].createElement("div",{className:O["default"].leftArrow},h["default"].createElement(y["default"],null,"兑换失败"),h["default"].createElement("div",{className:O["default"].bg},h["default"].createElement("div",{className:O["default"].content},h["default"].createElement("div",{className:O["default"].imgWrapper},h["default"].createElement("img",{src:W["default"]})),h["default"].createElement("p",null,"兑换失败"),h["default"].createElement("p",{className:O["default"].textGrey},e),h["default"].createElement(k["default"],{text:"兑换失败",disable:!1,onClick:this.push,className:O["default"].button}))))}}]),e}(h["default"].Component),H=function(t){return{}},J=function(t){return{push:function(){t((0,x.push)("/user/coinShop"))}}};e["default"]=(0,w.connect)(H,J)((0,A["default"])(C))},1656:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,"*{padding:0;margin:0}.leftArrow___167HW img{opacity:0!important}.bg___3tc6I{background:#f1eff5;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:1}.bg___3tc6I img{margin:0 auto}.textGrey___2kOpI{font-size:.8rem;color:#888}.coinCount___bOVpQ{color:#f70!important}.content___1JDTf{margin-top:44px;width:100%}.content___1JDTf p{text-align:center}.content___1JDTf p:nth-child(2){margin-top:6%}.content___1JDTf p:nth-child(3){margin-top:4%}.imgWrapper___tA62M{width:28%;margin:0 auto;margin-top:24%}.imgWrapper___tA62M img{opacity:1!important;width:100%}.button___2XHuM{width:90%;margin:0 auto;margin-top:4%}.left___3zXH1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:12;-ms-flex:12;flex:12}",""]),e.locals={leftArrow:"leftArrow___167HW",bg:"bg___3tc6I",textGrey:"textGrey___2kOpI",coinCount:"coinCount___bOVpQ",content:"content___1JDTf",imgWrapper:"imgWrapper___tA62M",button:"button___2XHuM",left:"left___3zXH1"}},1890:function(t,e,n){t.exports=n.p+"static/media/failure.bdb106d7.png"},2235:function(t,e,n){var o=n(1656);"string"==typeof o&&(o=[[t.id,o,""]]);n(7)(o,{});o.locals&&(t.exports=o.locals)}});