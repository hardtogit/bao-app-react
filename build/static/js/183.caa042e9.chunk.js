webpackJsonp([183],{913:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),i=o(u),c=n(5),f=o(c),_=n(3),d=o(_),p=n(4),s=o(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=n(1),h=o(y),g=n(11),w=n(10),E=n(12),T=o(E),v=n(22),D=o(v),b=n(2048),I=o(b),C=n(1841),k=o(C),x=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||(0,s["default"])(t)).call(this,e));return n.renderDomOne=function(){var e=n.props.contextOne;return e&&300==e.code?h["default"].createElement("div",{className:I["default"].empty},h["default"].createElement("img",{src:k["default"],alt:""}),h["default"].createElement("p",null,e.msg)):e&&h["default"].createElement("div",{className:I["default"].myStyle,dangerouslySetInnerHTML:{__html:e.data.htmls}})||h["default"].createElement(D["default"],null)},n.renderDomTwo=function(){var e=n.props.contextTwo;return e&&h["default"].createElement("div",{className:I["default"].myStyle,dangerouslySetInnerHTML:{__html:e.data.htmls}})||h["default"].createElement(D["default"],null)},n}return l(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.params.id,n=e.location.query.type,o=e.getDetailByProductId,a=e.getDetailByContractId;n?o({borrow_id:t,product_type:n}):a({id:t})}},{key:"render",value:function(){var e=this.props,t=e.location.query.type,n=e.pop;return h["default"].createElement("div",{className:I["default"].container},h["default"].createElement(T["default"],{onLeft:n},"安全保障计划"),t&&this.renderDomOne()||this.renderDomTwo())}}]),t}(y.Component),B=function(e){return{contextOne:e.infodata.getIn(["GET_DETAIL_BY_PRODUCT_ID","data"]),contextTwo:e.infodata.getIn(["GET_DETAIL_BY_CONTRACT_ID","data"])}},O=function(e){return{pop:function(){e((0,w.goBack)())},getDetailByProductId:function(t){e({type:"GET_DETAIL_BY_PRODUCT_ID",params:[t]})},getDetailByContractId:function(t){e({type:"GET_DETAIL_BY_CONTRACT_ID",params:[t]})}}};t["default"]=(0,g.connect)(B,O)(x)},1447:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".container___2knw_{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___2knw_ .myStyle___1cnlE div{max-width:100%}.container___2knw_ .empty___3Cf7s{padding-top:100px;text-align:center}.container___2knw_ .empty___3Cf7s img{display:block;margin:0 auto}.container___2knw_ .empty___3Cf7s p{color:#777;font-size:14px}",""]),t.locals={container:"container___2knw_",myStyle:"myStyle___1cnlE",empty:"empty___3Cf7s"}},1841:function(e,t,n){e.exports=n.p+"static/media/noData.f98818a6.png"},2048:function(e,t,n){var o=n(1447);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)}});