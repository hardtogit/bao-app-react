webpackJsonp([51],{985:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),s=a(5),d=n(s),f=a(3),u=n(f),p=a(4),c=n(p),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),h=n(g),y=a(2020),b=n(y),x=a(11),w=n(x),E=a(26),v=n(E),I=a(10),H=a(9),k=function(e){function t(){return o(this,t),i(this,(t.__proto__||(0,c["default"])(t)).apply(this,arguments))}return _(t,e),m(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e};var t=document.body.clientHeight-44,a=this.props,n=a.listData,o=a.pending,i=a.end,_=a.pop;return h["default"].createElement("div",{className:b["default"].body},h["default"].createElement(w["default"],{onLeft:_},"加入记录"),h["default"].createElement(v["default"],{height:t,fetch:function(){e.props.gitData(e.props.params.id)},isLoading:o,distance:20,endType:i},n&&n.map(function(e,t){return h["default"].createElement("div",{key:t,className:b["default"].data_list_item},h["default"].createElement("div",{className:b["default"].item},h["default"].createElement("div",{className:b["default"].left},h["default"].createElement("p",{className:b["default"].name},e.username),h["default"].createElement("p",{className:b["default"].time},new Date(1e3*e.add_time).format("yyyy-MM-dd hh:mm:ss"))),h["default"].createElement("div",{className:b["default"].right},e.invest_money,"元")))})))}}]),t}(g.Component),M=function(e){return{listData:e.listdata.getIn(["GATHER_JOIN","data"]),pending:e.listdata.getIn(["GATHER_JOIN","pending"]),end:e.listdata.getIn(["GATHER_JOIN","pageEnd"])}},N=function(e,t){return{pop:function(){e((0,H.goBack)())},gitData:function(t){e({type:"GATHER_JOIN",params:[{id:t}]})}}};t["default"]=(0,I.connect)(M,N)(k)},1447:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".body___3-s2w{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___3-s2w .data_list_item___IoHyh{margin-top:15px;background-color:#fff;padding-left:10px}.body___3-s2w .data_list_item___IoHyh .item___38Qag{height:60px;border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.body___3-s2w .data_list_item___IoHyh .item___38Qag:last-child{border-bottom:none}.body___3-s2w .data_list_item___IoHyh .item___38Qag .left___1_voe{-webkit-box-flex:1;-ms-flex:1;flex:1}.body___3-s2w .data_list_item___IoHyh .item___38Qag .left___1_voe .name___2EjZj{font-size:18px;margin-top:10px;margin-bottom:6px;color:#898989}.body___3-s2w .data_list_item___IoHyh .item___38Qag .left___1_voe .time___1sFAz{font-size:12px;color:#aaa}.body___3-s2w .data_list_item___IoHyh .item___38Qag .right___Z9_Tn{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:60px;text-align:right;color:#00a6e2;padding-right:10px;font-size:20px}",""]),t.locals={body:"body___3-s2w",data_list_item:"data_list_item___IoHyh",item:"item___38Qag",left:"left___1_voe",name:"name___2EjZj",time:"time___1sFAz",right:"right___Z9_Tn"}},2020:[2200,1447]});