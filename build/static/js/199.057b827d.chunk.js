webpackJsonp([199],{1017:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=l(2),r=a(c),i=l(5),p=a(i),u=l(3),_=a(u),f=l(4),d=a(f),m=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),b=l(1),h=a(b),x=l(12),g=a(x),E=l(2092),v=a(E),N=l(11),R=l(10),y=l(42),O=a(y),k=function(e){function t(e){n(this,t);var l=o(this,(t.__proto__||(0,d["default"])(t)).call(this,e));return l.state={amount:"",handling:"",time:""},l}return s(t,e),m(t,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("bao-reddem");if(e){var t=JSON.parse(e);this.setState(t)}}},{key:"render",value:function(){var e=this.props,t=e.pop,l=e.push,a=this.state,n=a.amount,o=a.handling,s=a.time;return h["default"].createElement("div",{className:v["default"].bg},h["default"].createElement(g["default"],{onLeft:t},"赎回申请"),h["default"].createElement("div",{className:v["default"].content},h["default"].createElement("div",{className:v["default"].title},h["default"].createElement("span",null,"赎回金额"),h["default"].createElement("span",{className:v["default"].titleRight},"￥",n)),h["default"].createElement("div",{className:v["default"].process},h["default"].createElement("ul",{className:v["default"].processUl},h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].processRoll}),h["default"].createElement("span",{className:v["default"].verticalLine}),h["default"].createElement("p",{className:v["default"].processTitle},"赎回申请成功",h["default"].createElement("span",null,"（手续费",o,"元）")),h["default"].createElement("p",{className:v["default"].processTime},s)),h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].processRoll}),h["default"].createElement("span",{className:v["default"].verticalLine}),h["default"].createElement("p",{className:v["default"].processTitle},"赎回中..."),h["default"].createElement("p",{className:v["default"].processTime},s)),h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].processRoll}),h["default"].createElement("span",{className:v["default"].verticalLine}),h["default"].createElement("p",{className:v["default"].processTitle},"赎回成功！"),h["default"].createElement("p",{className:v["default"].processTime},s)),h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].processRoll}),h["default"].createElement("p",{className:v["default"].processTitle},"赎回到余额"),h["default"].createElement("p",{className:v["default"].processTime},"预计 ",s,"前到账"))))),h["default"].createElement("div",{style:{padding:"15px"}},h["default"].createElement(O["default"],{className:"111",disable:!1,text:"完成",onClick:l})))}}]),t}(b.Component),T=function(e){return{}},w=function(e){return{pop:function(){e((0,R.goBack)())},push:function(){e((0,R.push)("/user/MyDemandIndex"))}}};t["default"]=(0,N.connect)(T,w)(k)},1491:function(e,t,l){t=e.exports=l(6)(),t.push([e.id,".bg___2h_OV{background:#f0eff5;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px}.content___3-iOp{background-color:#fff;padding:15px}.content___3-iOp .title___3A5vs{padding:15px;font-size:14px;color:#888;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.content___3-iOp .titleRight___1MLil{float:right;font-size:16px;color:#000;display:inline-block;margin-top:-1px}.content___3-iOp .process___OvynA{padding:15px}.content___3-iOp .processUl___3JRcx li{display:block;padding-bottom:15px;position:relative}.content___3-iOp .processUl___3JRcx .processTitle___2kVRf{font-size:16px;color:#00a6e2}.content___3-iOp .processUl___3JRcx .processTitle___2kVRf span{font-size:11px;color:#aaa}.content___3-iOp .processUl___3JRcx .processTime___2FPbm{margin-top:5px;font-size:11px;color:#aaa}.content___3-iOp .processUl___3JRcx .processRoll___2wDu0{display:inline-block;width:10px;height:10px;position:absolute;background:#00a6e2;border-radius:5px;left:-15px;top:5px}.content___3-iOp .processUl___3JRcx .verticalLine___2PXu-{width:3px;background:#00a6e2;height:100%;position:absolute;left:-11px;top:5px}.content___3-iOp .btn___Y9893{width:90%;background:#00a6e2;color:#fff;border-color:#00a6e2}",""]),t.locals={bg:"bg___2h_OV",content:"content___3-iOp",title:"title___3A5vs",titleRight:"titleRight___1MLil",process:"process___OvynA",processUl:"processUl___3JRcx",processTitle:"processTitle___2kVRf",processTime:"processTime___2FPbm",processRoll:"processRoll___2wDu0",verticalLine:"verticalLine___2PXu-",btn:"btn___Y9893"}},2092:function(e,t,l){var a=l(1491);"string"==typeof a&&(a=[[e.id,a,""]]);l(7)(a,{});a.locals&&(e.exports=a.locals)}});