webpackJsonp([84],{937:function(e,t,a){e.exports=a.p+"static/media/list.f78aae76.png"},1160:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),s=n(r),o=a(5),f=n(o),d=a(3),c=n(d),p=a(4),m=n(p),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),E=n(h),_=a(20),y=a(11),b=n(y),v=a(10),N=a(25),w=n(N),x=a(9),I=a(736),R=n(I),L=a(937),M=n(L),D=function(e){function t(e){return l(this,t),u(this,(t.__proto__||(0,m["default"])(t)).call(this,e))}return i(t,e),g(t,[{key:"render",value:function(){var e=this;Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e};var t=this.props,a=t.listData,n=t.pending,l=t.end,u=document.body.clientHeight-44;return E["default"].createElement("div",{className:R["default"].bg},E["default"].createElement(b["default"],{rightNode:E["default"].createElement(_.Link,{className:R["default"].rightNode,to:"user/fridayActivityRule"},"活动规则"),onLeft:this.props.pop,backgroundColor:"#00a6e2"},"周五狂享礼"),E["default"].createElement("div",{className:R["default"].list_container,style:{position:"absolute",top:"44px",width:"100%"}},E["default"].createElement(w["default"],{height:u,fetch:function(){e.props.getList()},isLoading:n,distance:20,endType:l},a&&a.map(function(e,t){return E["default"].createElement("div",{key:t,className:R["default"].data_list_item},E["default"].createElement("div",{className:R["default"].data_list_top},E["default"].createElement("div",{style:{position:"absolute",left:"0"}},E["default"].createElement("img",{src:M["default"],className:R["default"].listPic}),E["default"].createElement("span",{style:{marginLeft:"5px"}}," 周五活动币 ")),E["default"].createElement("div",{style:{position:"absolute",right:"10",top:"5px"}},E["default"].createElement("span",{className:R["default"].addTime},e.add_time))),E["default"].createElement("div",{className:R["default"].data_list_bottom},E["default"].createElement("ul",null,E["default"].createElement("li",{className:R["default"].invest},E["default"].createElement("p",{className:R["default"].num},e.investment_amount),E["default"].createElement("p",{className:R["default"].txt},"投资金额(元)")),E["default"].createElement("li",{className:R["default"].withdraw},E["default"].createElement("p",{className:R["default"].num},e.withdrawal_amount),E["default"].createElement("p",{className:R["default"].txt},"提现金额(元)")),E["default"].createElement("li",{className:R["default"].coinnum},E["default"].createElement("p",{className:R["default"].num,style:{color:"#ff7701",textAlign:"right"}},"+",e.coin),E["default"].createElement("p",{className:R["default"].txt,style:{textAlign:"right"}},"点币数")))))}))))}}]),t}(E["default"].Component),T=function(e){return{listData:e.listdata.getIn(["FRIDAY_COINLIST","data"]),pending:e.listdata.getIn(["FRIDAY_COINLIST","pending"]),end:e.listdata.getIn(["FRIDAY_COINLIST","pageEnd"])}},k=function(e){return{pop:function(){e((0,x.goBack)())},getList:function(){e({type:"FRIDAY_COINLIST"})}}};t["default"]=(0,v.connect)(T,k)(D)},1255:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1160),u=n(l);t["default"]=u["default"]}});