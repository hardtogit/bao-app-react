webpackJsonp([62],{1021:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),f=o(a),l=n(5),c=o(l),s=n(3),d=o(s),_=n(4),p=o(_),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),y=o(h),v=n(10),m=o(v),w=n(2372),g=o(w),E=n(9),j=n(8),k=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return n.state={init:!1},n}return u(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({init:!0})},100)}},{key:"render",value:function(){return y["default"].createElement("div",{className:g["default"].bg},y["default"].createElement(m["default"],{onLeft:this.props.pop},"债权转让规则"),y["default"].createElement("div",{className:g["default"].body},this.state.init&&y["default"].createElement("iframe",{className:g["default"].ifr,src:window.location.origin+"/mobile_api/static-page/creditorTransfer-rule"})||""))}}]),t}(h.Component),M=function(e){return{pop:function(){e((0,j.goBack)())}}};t["default"]=(0,E.connect)(function(){return{}},M)(k)},1172:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1021),i=o(r);t["default"]=i["default"]},1500:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___CZ_AZ{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px}.body___3jI4i{height:100%;overflow:hidden}.ifr___1D_ou{width:100%;height:100%;overflow:auto;border:0}",""]),t.locals={bg:"bg___CZ_AZ",body:"body___3jI4i",ifr:"ifr___1D_ou"}},2372:[2577,1500]});