webpackJsonp([84],{1068:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,h["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=n(2),f=o(c),s=n(5),d=o(s),p=n(3),h=o(p),y=n(4),m=o(y),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=n(1),_=o(v),w=n(2382),g=o(w),k=n(10),E=o(k),M=n(17),W=o(M),x=n(9),P=n(8),S=(u=l=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.state={isOpen:!1,width:0,height:0,load:!1},n}return a(t,e),b(t,[{key:"componentWillMount",value:function(){this.setState({height:document.body.clientHeight-50,width:document.body.clientWidth})}},{key:"componentDidMount",value:function(){var e=this;this.refs.iframe.onload=function(){e.setState({load:!0})}}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.location.query.url,o=this.state,r=o.width,i=o.height,a=o.load;return _["default"].createElement("div",{className:g["default"].container},_["default"].createElement(E["default"],{onLeft:t},"银行存管"),a&&_["default"].createElement("div",null)||_["default"].createElement(W["default"],null),_["default"].createElement("iframe",{ref:"iframe",width:r,style:a&&this.props.styles.show||this.props.styles.hide,height:i,className:g["default"].iframe,src:n,frameBorder:"no"}))}}]),t}(v.Component),l.defaultProps={styles:{hide:{display:"none"},show:{display:"block"}}},u),j=function(e){return{}},B=function(e,t){return{pop:function(){e((0,P.goBack)())}}};t["default"]=(0,x.connect)(j,B)(S)},1514:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".container___Gs7ZF{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}",""]),t.locals={container:"container___Gs7ZF"}},2382:[2575,1514]});