webpackJsonp([219],{1001:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,c["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u["default"]?(0,u["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),r=a(l),d=n(5),u=a(d),f=n(3),c=a(f),s=n(4),p=a(s),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),y=n(1),b=a(y),g=n(2117),h=a(g),E=n(10),v=a(E),x=n(26),A=a(x),D=n(8),T=n(9),w=n(17),R=a(w),k=function(t){function e(t){i(this,e);var n=_(this,(e.__proto__||(0,p["default"])(e)).call(this,t));return n.state={init:!1},n}return o(e,t),m(e,[{key:"componentDidMount",value:function(){this.setState({init:!0})}},{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"render",value:function(){var t=this,e=document.body.clientHeight-44,n=this.props,a=n.listData,i=n.pending,_=n.end,o=n.pop;return b["default"].createElement("div",{className:h["default"].body},b["default"].createElement(v["default"],{onLeft:o},"还款详情"),this.state.init&&b["default"].createElement(A["default"],{height:e,fetch:function(){t.props.gitData(t.props.params.id)},isLoading:i,distance:20,endType:_},a&&a.map(function(t,e){return b["default"].createElement("div",{key:e,className:h["default"].data_list_item},b["default"].createElement("div",{className:h["default"].item},b["default"].createElement("div",{className:h["default"].left},b["default"].createElement("p",{className:h["default"].time}," ",R["default"].formatDate("yyyy-MM-dd",new Date(1e3*t.time)))),b["default"].createElement("div",{className:h["default"].right},0==t.status?"未还款":"正常还款")))})))}}]),e}(y.Component),I=function(t){return{listData:t.listdata.getIn(["GATHER_BID_BACK_DETAIL","data"]),pending:t.listdata.getIn(["GATHER_BID_BACK_DETAIL","pending"]),end:t.listdata.getIn(["GATHER_BID_BACK_DETAIL","pageEnd"])}},B=function(t,e){return{pop:function(){t((0,T.goBack)())},gitData:function(e){t({type:"GATHER_BID_BACK_DETAIL",params:[{id:e}]})},clean:function(){t({type:"CLEAR_DATA",key:"GATHER_BID_BACK_DETAIL"})}}};e["default"]=(0,D.connect)(I,B)(k)},1537:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".body___1-ZFR{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___1-ZFR .data_list_item___3cWq6{margin-top:15px;background-color:#fff;padding-left:15px}.body___1-ZFR .data_list_item___3cWq6 .item___3uvMN{border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex;padding:15px 0}.body___1-ZFR .data_list_item___3cWq6 .item___3uvMN .left___22P_2{-webkit-box-flex:1;-ms-flex:1;flex:1}.body___1-ZFR .data_list_item___3cWq6 .item___3uvMN .left___22P_2 .time___29d3g{color:#888;font-size:18px}.body___1-ZFR .data_list_item___3cWq6 .item___3uvMN .right___2T_ry{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;color:#666;padding-right:15px}",""]),e.locals={body:"body___1-ZFR",data_list_item:"data_list_item___3cWq6",item:"item___3uvMN",left:"left___22P_2",time:"time___29d3g",right:"right___2T_ry"}},2117:[2357,1537]});