webpackJsonp([38],{1158:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),r=o(u),d=n(5),f=o(d),s=n(3),c=o(s),_=n(4),p=o(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=n(1),y=o(x),E=n(11),m=o(E),b=n(2176),g=o(b),v=n(25),B=o(v),R=n(10),T=n(100),O=o(T),w=n(9),k=function(e){function t(){return l(this,t),a(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.getList()}},{key:"render",value:function(){var e=this.props,t=e.listData,n=e.pending,o=e.end,l=e.getList,a=e.pop,i=document.body.clientHeight,u=i-44;return y["default"].createElement("div",null,y["default"].createElement(m["default"],{onLeft:a},"获得奖励"),y["default"].createElement("div",{className:g["default"].body},y["default"].createElement(B["default"],{height:u,fetch:l,isLoading:n,distance:5,endType:o,nullDom:y["default"].createElement("div",{className:g["default"].nullBox},y["default"].createElement("img",{src:O["default"],width:169,height:152})),endload:y["default"].createElement("div",null)},t&&t.map(function(e,t){var n=e.type,o=e.amount,l=e.date;return y["default"].createElement("div",{className:g["default"].listBoxOne,key:t},y["default"].createElement("h2",null,n),y["default"].createElement("p",null,y["default"].createElement("span",null,l),y["default"].createElement("span",{className:g["default"].listBoxText},o)))}))))}}]),t}(x.Component),C=function(e){return{listData:e.listdata.getIn(["SCRATCH_REWARDS","data"]),pending:e.listdata.getIn(["SCRATCH_REWARDS","pending"]),end:e.listdata.getIn(["SCRATCH_REWARDS","pageEnd"])}},D=function(e){return{getList:function(){e({type:"SCRATCH_REWARDS"})},pop:function(){e((0,w.goBack)())}}};t["default"]=(0,R.connect)(C,D)(k)},1238:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1158),a=o(l);t["default"]=a["default"]},1578:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".body___hXFoe{position:absolute;left:0;top:0;width:100%;height:100%;padding-top:44px;background-color:#fff}.body___hXFoe .nullBox___30HOD img{margin:40px auto 0;display:block}.body___hXFoe .listBoxOne___2EE74{padding:20px 15px;border-bottom:1px solid #ddd}.body___hXFoe .listBoxOne___2EE74 h2{font-size:16px}.body___hXFoe .listBoxOne___2EE74 p{font-size:12px;color:#aaa;line-height:20px}.body___hXFoe .listBoxOne___2EE74 p span{vertical-align:middle}.body___hXFoe .listBoxOne___2EE74 .listBoxText___T7Xnk{float:right;font-size:20px;color:#000}",""]),t.locals={body:"body___hXFoe",nullBox:"nullBox___30HOD",listBoxOne:"listBoxOne___2EE74",listBoxText:"listBoxText___T7Xnk"}},2176:function(e,t,n){var o=n(1578);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)}});