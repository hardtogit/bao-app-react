webpackJsonp([195],{460:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___3Cafi{position:absolute;left:0;top:0;padding-top:44px}.bg___3Cafi,.content___1VD1H{height:100%;width:100%;overflow:hidden}.ifr___3dGxY{width:100%;height:100%;overflow:auto;border:0}",""]),t.locals={bg:"bg___3Cafi",content:"content___1VD1H",ifr:"ifr___3dGxY"}},547:[2319,460],1067:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),f=o(u),l=n(5),c=o(l),s=n(3),p=o(s),d=n(4),_=o(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),m=o(b),v=n(12),w=o(v),y=n(547),g=o(y),E=n(11),k=n(10),x=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.state={init:!1},n}return a(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({init:!0})},100)}},{key:"render",value:function(){return m["default"].createElement("div",{className:g["default"].bg},m["default"].createElement(w["default"],{onLeft:this.props.pop},"宝点网隐私条例"),m["default"].createElement("div",{className:g["default"].content},this.state.init&&m["default"].createElement("iframe",{src:window.location.origin+"/mobile_api/static-page/privacy-policy",className:g["default"].ifr})||""))}}]),t}(b.Component),C=function(e){return{pop:function(){e((0,k.goBack)())}}};t["default"]=(0,E.connect)(function(){return{}},C)(x)}});