webpackJsonp([223],{1056:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var _=n(2),l=a(_),c=n(5),d=a(c),f=n(3),u=a(f),p=n(4),s=a(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,l["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),y=a(h),x=n(2138),g=a(x),b=n(12),v=a(b),E=n(10),w=n(11),k=n(26),W=a(k),N=function(e){function t(){return o(this,t),r(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"render",value:function(){return y["default"].createElement("div",{className:g["default"].item},y["default"].createElement("div",{className:g["default"].left},this.props.name),y["default"].createElement("div",{className:g["default"].right,style:this.props.style,onClick:this.props.onClick},this.props.value))}}]),t}(h.Component),C=function(e){function t(){var e,n,a,i;o(this,t);for(var _=arguments.length,l=Array(_),c=0;c<_;c++)l[c]=arguments[c];return n=a=r(this,(e=t.__proto__||(0,s["default"])(t)).call.apply(e,[this].concat(l))),a.loadEndDom=function(e,t){return y["default"].createElement("div",{className:g["default"].container},y["default"].createElement("div",{className:g["default"].headPanel},y["default"].createElement("div",{className:g["default"].tip},"温馨提示：借贷有风险 出借需谨慎"),y["default"].createElement("div",{className:g["default"].introduce},y["default"].createElement("h3",{className:g["default"].title},e.data[0].title_name),y["default"].createElement("p",{className:g["default"].content},e.data[0].detail_info))),y["default"].createElement("div",{className:g["default"].items},e.data.map(function(e,t){if(0!=t)return y["default"].createElement(N,{name:e.title_name,value:e.detail_info})}),y["default"].createElement(N,{name:"服务协议",value:"点击查看",style:{color:"#00a6e2"},onClick:function(){t("/serviceContract/123/0?product=1")}})))},i=n,r(a,i)}return i(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.getYouDetail(this.props.params.id)}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.push,a=e.detailData,o=this.props.params,r=(o.name,o.month,void 0);return r=a?this.loadEndDom(a,n):y["default"].createElement(W["default"],null),y["default"].createElement("div",{className:g["default"].root},y["default"].createElement(v["default"],{onLeft:t},"产品详情"),r)}}]),t}(h.Component),B=function(e){return{detailData:e.infodata.getIn(["GET_YOU_DETAIL","data"])}},D=function(e,t){return{pop:function(){e((0,w.goBack)())},push:function(t){e((0,w.push)(t))},getYouDetail:function(t){e({type:"GET_YOU_DETAIL",params:[t]})}}};t["default"]=(0,E.connect)(B,D)(C)},1585:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".root___1ytdW{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.root___1ytdW .container___8fwc6 .headPanel___hFrJ2{background-color:#fff}.root___1ytdW .container___8fwc6 .headPanel___hFrJ2 .tip___38nB5{margin-top:10px;text-align:center;color:#777;padding:8px 0;border-bottom:1px solid #ddd}.root___1ytdW .container___8fwc6 .headPanel___hFrJ2 .introduce___3YABV{padding:0 15px}.root___1ytdW .container___8fwc6 .headPanel___hFrJ2 .introduce___3YABV .title___2I9Ij{font-weight:400;padding:10px 0;font-size:16px}.root___1ytdW .container___8fwc6 .headPanel___hFrJ2 .introduce___3YABV .content___36deB{font-size:15px;line-height:1.5;padding-bottom:10px;color:#888}.root___1ytdW .container___8fwc6 .items___3Ccfn{padding:0 15px;margin-top:10px;background-color:#fff;padding-bottom:15px}.root___1ytdW .container___8fwc6 .items___3Ccfn .item___2Xm8W{padding-top:15px}.item___2Xm8W{display:-webkit-box;display:-ms-flexbox;display:flex}.item___2Xm8W .left___13Iot{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;color:#888}.item___2Xm8W .right___3992H{font-size:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:1.3;color:#000}",""]),t.locals={root:"root___1ytdW",container:"container___8fwc6",headPanel:"headPanel___hFrJ2",tip:"tip___38nB5",introduce:"introduce___3YABV",title:"title___2I9Ij",content:"content___36deB",items:"items___3Ccfn",item:"item___2Xm8W",left:"left___13Iot",right:"right___3992H"}},2138:[2365,1585]});