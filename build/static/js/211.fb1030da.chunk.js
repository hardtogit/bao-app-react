webpackJsonp([211],{506:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".body___wNCJv{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#fff;overflow:auto;padding:44px 15px 15px}.body___wNCJv p{font-size:12.5px;color:#888;line-height:17px;margin-top:10px}.bg___AyU4J{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto}",""]),t.locals={body:"body___wNCJv",bg:"bg___AyU4J"}},651:[2365,506],1185:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=o(a),f=n(5),c=o(f),p=n(3),s=o(p),d=n(4),_=o(d),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,l["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),y=o(h),w=n(12),g=o(w),v=n(10),m=n(11),x=n(651),E=o(x),J=function(e){function t(){return r(this,t),i(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return u(t,e),b(t,[{key:"render",value:function(){return y["default"].createElement("div",{className:E["default"].bg},y["default"].createElement(g["default"],{onLeft:this.props.pop},"加息券规则"),y["default"].createElement("div",{className:E["default"].body},y["default"].createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:window.location.origin+"/mobile_api/static-page/interestRate-rule"})))}}]),t}(h.Component),k=function(e){return{}},C=function(e){return{pop:function(){e((0,m.goBack)())}}};t["default"]=(0,v.connect)(k,C)(J)}});