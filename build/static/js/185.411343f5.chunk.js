webpackJsonp([185],{469:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".body___oh4us{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#fff;overflow:auto;padding:44px 15px 15px}.body___oh4us p{font-size:12.5px;color:#888;line-height:17px;margin-top:10px}.bg___122yE{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto}",""]),t.locals={body:"body___oh4us",bg:"bg___122yE"}},605:[2355,469],1149:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(2),l=n(a),f=o(5),c=n(f),p=o(3),s=n(p),d=o(4),h=n(d),_=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),b=o(1),y=n(b),g=o(10),w=n(g),m=o(9),v=o(8),E=o(605),x=n(E),k=function(e){function t(){return r(this,t),u(this,(t.__proto__||(0,h["default"])(t)).apply(this,arguments))}return i(t,e),_(t,[{key:"render",value:function(){return y["default"].createElement("div",{className:x["default"].bg},y["default"].createElement(w["default"],{onLeft:this.props.pop},"加息券规则"),y["default"].createElement("div",{className:x["default"].body},y["default"].createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:window.location.origin+"/mobile_api/static-page/interestRate-rule"})))}}]),t}(b.Component),j=function(e){return{}},C=function(e){return{pop:function(){e((0,v.goBack)())}}};t["default"]=(0,m.connect)(j,C)(k)}});