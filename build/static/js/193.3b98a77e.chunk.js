webpackJsonp([193],{487:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___1PKR3{position:absolute;left:0;top:0;padding-top:44px}.bg___1PKR3,.content___3Ud5_{height:100%;width:100%;overflow:hidden}.ifr___aCgC9{width:100%;height:100%;overflow:auto;border:0}",""]),t.locals={bg:"bg___1PKR3",content:"content___3Ud5_",ifr:"ifr___aCgC9"}},589:[2578,487],1151:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),f=o(u),l=n(5),c=o(l),s=n(3),p=o(s),_=n(4),d=o(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),g=o(b),m=n(12),v=o(m),w=n(589),y=o(w),E=n(11),C=n(10),k=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,d["default"])(t)).call(this,e));return n.state={init:!1},n}return a(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({init:!0})},100)}},{key:"render",value:function(){return g["default"].createElement("div",{className:y["default"].bg},g["default"].createElement(v["default"],{onLeft:this.props.pop},"宝点网服务协议"),g["default"].createElement("div",{className:y["default"].content},this.state.init&&g["default"].createElement("iframe",{src:window.location.origin+"/mobile_api/static-page/service-agreement",className:y["default"].ifr})||""))}}]),t}(b.Component),P=function(e){return{pop:function(){e((0,C.goBack)())}}};t["default"]=(0,E.connect)(function(){return{}},P)(k)}});