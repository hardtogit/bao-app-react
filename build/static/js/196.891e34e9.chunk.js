webpackJsonp([196],{485:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".bg___1hhpb{background:#f6f6f9;position:absolute;left:0;top:0;width:100%;height:100vh;padding-top:44px;overflow:auto}.body___1KCL7{height:100%;overflow:hidden}.ifr___3lqtq{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;border:0}.box___2p6Hz{background:#fff}.rule___38Omr{font-size:14px;position:absolute;bottom:20px;text-align:center;width:100%}.rule___38Omr img{width:15px;padding-left:5px;margin-top:-3px}.rule___38Omr img,.rule___38Omr span{display:inline-block;vertical-align:middle}.rule___38Omr span{color:#ccc}",""]),t.locals={bg:"bg___1hhpb",body:"body___1KCL7",ifr:"ifr___3lqtq",box:"box___2p6Hz",rule:"rule___38Omr"}},587:[2578,485],1141:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=o(2),a=n(u),f=o(5),c=n(f),p=o(3),_=n(p),d=o(4),s=n(d),b=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,a["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),h=o(1),m=n(h),g=o(587),w=n(g),y=o(11),v=o(10),x=o(12),k=n(x),E=function(e){function t(){return r(this,t),i(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return l(t,e),b(t,[{key:"render",value:function(){return m["default"].createElement("div",{className:w["default"].bg},m["default"].createElement(k["default"],{onLeft:this.props.pop},"点币使用规则"),m["default"].createElement("div",{className:w["default"].body},m["default"].createElement("iframe",{src:window.location.origin+"/mobile_api/static-page/coin-rule",className:w["default"].ifr})))}}]),t}(h.Component),O=function(e){return{pop:function(){e((0,v.goBack)())}}};t["default"]=(0,y.connect)(function(){return{}},O)(E)}});