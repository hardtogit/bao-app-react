webpackJsonp([71],{1019:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),d=a(5),u=n(d),f=a(3),p=n(f),c=a(4),s=n(c),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(2103),b=n(y),x=a(11),E=n(x),D=a(26),v=n(D),w=a(10),T=a(9),k=function(e){function t(){return o(this,t),i(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return _(t,e),m(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this,t=document.body.clientHeight-108,a=this.props,n=a.data,o=a.pending,i=a.end,_=a.push,l=a.pop;return g["default"].createElement("div",{className:b["default"].body},g["default"].createElement(E["default"],{onLeft:l},"标的详情"),g["default"].createElement("div",{className:b["default"].header},"为保护借款人信息，仅展示部分商品匹配标的信息。投资聚点+后可在个人中心中查看已购买项目的匹配记录。"),g["default"].createElement(v["default"],{height:t,fetch:function(){e.props.gitData(e.props.params.id)},isLoading:o,distance:20,endType:i},n&&n.map(function(e,t){return g["default"].createElement("div",{key:t,className:b["default"].data_list_item,onClick:function(){_("/gatherBidDetail/"+e.edid)}},g["default"].createElement("div",{className:b["default"].item,style:{paddingTop:"12px"}},g["default"].createElement("div",{className:b["default"].left},e.borrow_name),g["default"].createElement("div",{className:b["default"].right},e.borrow_duration,"个月")),g["default"].createElement("div",{className:b["default"].item,style:{paddingTop:"6px"}},g["default"].createElement("div",{className:b["default"].left},e.borrow_use),g["default"].createElement("div",{className:b["default"].right},"借款金额: ",g["default"].createElement("span",{className:b["default"].money},e.borrow_money),"元")))})))}}]),t}(h.Component),H=function(e){return{data:e.listdata.getIn(["GATHER_BID_LIST","data"]),pending:e.listdata.getIn(["GATHER_BID_LIST","pending"]),end:e.listdata.getIn(["GATHER_BID_LIST","pageEnd"])}},I=function(e,t){return{pop:function(){e((0,T.goBack)())},gitData:function(t){e({type:"GATHER_BID_LIST",params:[{id:t}]})},push:function(t){e((0,T.push)(t))},clearData:function(){e({type:"CLEAR_DATA",key:"GATHER_BID_LIST"})}}};t["default"]=(0,w.connect)(H,I)(k)},1507:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___3mHpD{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___3mHpD .header___3XwjY{background-color:#00a6e2;color:#fff;padding:12px 15px 14px;font-size:14px;line-height:1.4}.body___3mHpD .data_list_item___3Dja-{font-size:15px;height:70px;margin-top:10px;background-color:#fff}.body___3mHpD .data_list_item___3Dja- .item___3duEr{display:-webkit-box;display:-ms-flexbox;display:flex;height:35px}.body___3mHpD .data_list_item___3Dja- .item___3duEr .left___2mKrX{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:15px}.body___3mHpD .data_list_item___3Dja- .item___3duEr .right___36d_g{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.body___3mHpD .data_list_item___3Dja- .item___3duEr .right___36d_g .money___1AUoz{color:#00a6e2}",""]),t.locals={body:"body___3mHpD",header:"header___3XwjY",data_list_item:"data_list_item___3Dja-",item:"item___3duEr",left:"left___2mKrX",right:"right___36d_g",money:"money___1AUoz"}},2103:[2302,1507]});