webpackJsonp([211],{1014:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var _=a(2),r=n(_),d=a(5),u=n(d),f=a(3),s=n(f),c=a(4),p=n(c),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),h=n(y),b=a(2124),g=n(b),x=a(10),v=n(x),D=a(26),w=n(D),E=a(9),k=a(8),I=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.state={init:!1},a}return l(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0})}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this,t=document.body.clientHeight-108,a=this.props,n=a.data,i=a.pending,o=a.end,l=a.push,_=a.pop;return h["default"].createElement("div",{className:g["default"].body},h["default"].createElement(v["default"],{onLeft:_},"标的详情"),h["default"].createElement("div",{className:g["default"].header},"为保护借款人信息，仅展示部分商品匹配标的信息。出借优享+后可在个人中心中查看已购买项目的匹配记录。"),this.state.init&&h["default"].createElement(w["default"],{height:t,fetch:function(){e.props.gitData(e.props.params.id)},isLoading:i,distance:20,endType:o},n&&n.map(function(e,t){return h["default"].createElement("div",{key:t,className:g["default"].data_list_item,onClick:function(){l("/youBidDetail/"+e.edid)}},h["default"].createElement("div",{className:g["default"].item,style:{paddingTop:"12px"}},h["default"].createElement("div",{className:g["default"].left},e.borrow_name),h["default"].createElement("div",{className:g["default"].right},e.borrow_duration,"个月")),h["default"].createElement("div",{className:g["default"].item,style:{paddingTop:"6px"}},h["default"].createElement("div",{className:g["default"].left},e.borrow_use),h["default"].createElement("div",{className:g["default"].right},"借款金额: ",h["default"].createElement("span",{className:g["default"].money},e.borrow_money),"元")))})))}}]),t}(y.Component),T=function(e){return{data:e.listdata.getIn(["YOU_BID_LIST","data"]),pending:e.listdata.getIn(["YOU_BID_LIST","pending"]),end:e.listdata.getIn(["YOU_BID_LIST","pageEnd"])}},U=function(e,t){return{pop:function(){e((0,k.goBack)())},gitData:function(t){e({type:"YOU_BID_LIST",params:[{id:t}]})},push:function(t){e((0,k.push)(t))},clearData:function(){e({type:"CLEAR_DATA",key:"YOU_BID_LIST"})}}};t["default"]=(0,E.connect)(T,U)(I)},1543:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___3VZhy{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___3VZhy .header___3lo-Q{background-color:#00a6e2;color:#fff;padding:12px 15px 14px;font-size:14px;line-height:1.4}.body___3VZhy .data_list_item___2ACey{font-size:15px;height:70px;margin-top:10px;background-color:#fff}.body___3VZhy .data_list_item___2ACey .item___1xDUF{display:-webkit-box;display:-ms-flexbox;display:flex;height:35px}.body___3VZhy .data_list_item___2ACey .item___1xDUF .left___1tqDM{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:15px}.body___3VZhy .data_list_item___2ACey .item___1xDUF .right___3Wadr{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.body___3VZhy .data_list_item___2ACey .item___1xDUF .right___3Wadr .money___11MnB{color:#00a6e2}",""]),t.locals={body:"body___3VZhy",header:"header___3lo-Q",data_list_item:"data_list_item___2ACey",item:"item___1xDUF",left:"left___1tqDM",right:"right___3Wadr",money:"money___11MnB"}},2124:[2352,1543]});