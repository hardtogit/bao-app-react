webpackJsonp([197],{458:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___zZ0CB{background:#f6f6f9;position:absolute;left:0;top:0;width:100%;height:100vh;padding-top:44px;overflow:auto}.body___1anpT{height:100%;overflow:hidden}.ifr___1O-Y_{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;border:0}.box___g4QA-{background:#fff}.rule___175wX{font-size:14px;position:absolute;bottom:20px;text-align:center;width:100%}.rule___175wX img{width:15px;padding-left:5px;margin-top:-3px}.rule___175wX img,.rule___175wX span{display:inline-block;vertical-align:middle}.rule___175wX span{color:#ccc}",""]),t.locals={bg:"bg___zZ0CB",body:"body___1anpT",ifr:"ifr___1O-Y_",box:"box___g4QA-",rule:"rule___175wX"}},545:[2319,458],1058:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),l=o(u),f=n(5),_=o(f),c=n(3),p=o(c),d=n(4),s=o(d),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,l["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),g=o(h),w=n(545),m=o(w),y=n(11),v=n(10),x=n(12),k=o(x),E=function(e){function t(){return r(this,t),i(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){return g["default"].createElement("div",{className:m["default"].bg},g["default"].createElement(k["default"],{onLeft:this.props.pop},"点币使用规则"),g["default"].createElement("div",{className:m["default"].body},g["default"].createElement("iframe",{src:window.location.origin+"/mobile_api/static-page/coin-rule",className:m["default"].ifr})))}}]),t}(h.Component),X=function(e){return{pop:function(){e((0,v.goBack)())}}};t["default"]=(0,y.connect)(function(){return{}},X)(E)}});