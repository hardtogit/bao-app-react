webpackJsonp([207],{33:function(t,e,o){e=t.exports=o(6)(),e.push([t.id,"a{text-decoration:none}.ml0___26vaQ{margin-left:0}.mt15___35Rs9{margin-top:15px}.mt30___OrVm4{margin-top:30px}.topBar___Pk-GL{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___2TWUf{text-align:left;color:#00a6e2}.topBarLeft___2TWUf,.topBarRight___1GNjc{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1GNjc{text-align:right}.markTitle___1DU2v{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___1TQF9{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___2-VJ3{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___xK3fa{margin-top:40px;margin-left:15px;margin-right:15px}.loading___3vaX4{width:100%;text-align:center;color:#fff;font-size:18px}.loading___3vaX4,.loading___3vaX4>span{display:inline-block}.center___xD4uH{text-align:center}.content___SZovH{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___GGjLC{left:0}",""]),e.locals={ml0:"ml0___26vaQ",mt15:"mt15___35Rs9",mt30:"mt30___OrVm4",topBar:"topBar___Pk-GL",topBarLeft:"topBarLeft___2TWUf",topBarRight:"topBarRight___1GNjc",markTitle:"markTitle___1DU2v",panel:"panel___1TQF9",panelContent:"panelContent___2-VJ3",buttonWrap:"buttonWrap___xK3fa",loading:"loading___3vaX4",center:"center___xD4uH",content:"content___SZovH",tip:"tip___GGjLC"}},34:function(t,e,o){var n=o(33);"string"==typeof n&&(n=[[t.id,n,""]]);o(7)(n,{});n.locals&&(t.exports=n.locals)},1032:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,u["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(p["default"]?(0,p["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=o(2),_=n(r),f=o(5),p=n(f),c=o(3),u=n(c),s=o(4),d=n(s),x=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_["default"])(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),m=o(1),g=n(m),b=o(9),h=o(8),y=o(10),v=n(y),w=o(17),k=n(w),B=o(34),T=n(B),G=k["default"].dimension(),L=G.width,j=G.height,C=window.location.origin+"common/pay-excess",E=function(t){function e(t){a(this,e);var o=i(this,(e.__proto__||(0,d["default"])(e)).call(this,t));return o.getSource=function(){o.props.query&&o.props.query.type||"",k["default"].getParams();return C+"?"+location.search.slice(1)},o.state={},o}return l(e,t),x(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return g["default"].createElement("div",{className:T["default"].panel},g["default"].createElement(v["default"],{title:"支付"}),g["default"].createElement("div",{style:{flex:1,overflowY:"scroll"}},g["default"].createElement("iframe",{src:this.getSource(),style:{border:0,width:L,height:j-44}})))}}]),e}(g["default"].Component),R=function(t,e){return{}},W=function(t,e){return{push:function(e){t((0,h.push)(e))},goBack:function(){t((0,h.goBack)())}}};e["default"]=(0,b.connect)(R,W)(E)}});