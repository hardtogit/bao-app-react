webpackJsonp([83],{960:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,_["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u["default"]?(0,u["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),s=a(o),c=n(5),u=a(c),f=n(3),_=a(f),d=n(4),p=a(d),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,s["default"])(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),h=n(1),g=a(h),b=n(11),E=a(b),w=n(2275),y=a(w),x=n(10),k=n(24),L=a(k),v=n(9),N=n(98),C=a(N),O=n(21),j=a(O),B=n(14),S=a(B),z=function(t){function e(t){l(this,e);var n=i(this,(e.__proto__||(0,p["default"])(e)).call(this,t));return n.componentDidMount=function(){n.props.getList(n.state.flag),n.setState({init:!0})},n.filters=function(){n.setState({filterShow:!n.state.filterShow})},n.choose=function(t){n.refs.scroll.setState({init:!0}),n.setState({flag:t,filterShow:!1}),n.props.clearData(),n.props.getList(t)},n.ScrollDom=function(){var t=document.body.clientHeight-44,e=n.props,a=e.listData,l=e.pending,i=e.end;return g["default"].createElement("div",{className:y["default"].contentList,style:{height:t}},g["default"].createElement(L["default"],{ref:"scroll",height:t,fetch:function(){n.props.getList(n.state.flag)},isLoading:l,distance:5,endType:i,nullDom:g["default"].createElement("img",{className:y["default"].errorImg,src:C["default"]})},a&&a.map(function(t,e){var n=t.type_name,a=t.date,l=t.amount,i=(t.status,t.way),r=t.desc,o=t.due_amount;return g["default"].createElement("div",{className:y["default"].item,key:e},g["default"].createElement("p",null,g["default"].createElement("span",null,n),g["default"].createElement("span",{className:(0,S["default"])("入账"==i?y["default"]["in"]:"")},"¥",l)),g["default"].createElement("p",null,g["default"].createElement("span",null,a),g["default"].createElement("span",null,"待收金额",o)),g["default"].createElement("p",null,"备注:",r))})))},n.state={filterShow:!1,flag:0,init:!1},n}return r(e,t),m(e,[{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var t=this,e=this.props.pop,n=this.state.init,a=void 0;return n&&(a=this.ScrollDom()),g["default"].createElement("div",{className:y["default"].bg},g["default"].createElement(E["default"],{onRight:this.filters,rightNode:g["default"].createElement("span",null,"筛选"),onLeft:function(){e()}},"资产记录"),a,g["default"].createElement("div",{className:(0,S["default"])(y["default"].filter,this.state.filterShow?y["default"].active:"hide")},g["default"].createElement("ul",null,g["default"].createElement("li",{onClick:function(){t.choose(1)},className:(0,S["default"])(1==this.state.flag?y["default"].current:"")},"投资"),g["default"].createElement("li",{onClick:function(){t.choose(2)},className:(0,S["default"])(2==this.state.flag?y["default"].current:"")},"回款"),g["default"].createElement("li",{onClick:function(){t.choose(6)},className:(0,S["default"])(6==this.state.flag?y["default"].current:"")},"提现"),g["default"].createElement("li",{onClick:function(){t.choose(3)},className:(0,S["default"])(3==this.state.flag?y["default"].current:"")},"红包"),g["default"].createElement("li",{onClick:function(){t.choose(4)},className:(0,S["default"])(4==this.state.flag?y["default"].current:"")},"理财金收益"),g["default"].createElement("li",{onClick:function(){t.choose(5)},className:(0,S["default"])(5==this.state.flag?y["default"].current:"")},"充值"),g["default"].createElement("li",{onClick:function(){t.choose(0)},className:(0,S["default"])(0==this.state.flag?y["default"].current:"")},"全部"))))}}]),e}(g["default"].Component),D=function(t){return{listData:t.listdata.getIn(["FETCH_MONEY_LOG","data"]),pending:t.listdata.getIn(["FETCH_MONEY_LOG","pending"]),end:t.listdata.getIn(["FETCH_MONEY_LOG","pageEnd"])}},T=function(t){return{getList:function(e){t({type:"FETCH_MONEY_LOG",params:[e,"platform"]})},pop:function(){t((0,v.goBack)())},clearData:function(){t({type:"CLEAR_DATA",key:"FETCH_MONEY_LOG"})}}};e["default"]=(0,x.connect)(D,T)((0,j["default"])(z))},1443:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".bg___2h8eE{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.contentList___8nnja{margin-top:44px;background-color:#fff;padding-left:15px}.contentList___8nnja .errorImg___2kjLl{display:block;margin:50px auto 0}.contentList___8nnja .item___2O1V_{border-bottom:1px solid #e4e4e4;padding:15px 0}.contentList___8nnja .item___2O1V_ p{font-size:11px;color:#aaa;line-height:20px}.contentList___8nnja .item___2O1V_ p:nth-child(1){font-size:16px;color:#000}.contentList___8nnja .item___2O1V_ p:nth-child(1) span:last-child{color:#2caf69;font-size:20px;float:right;margin-right:15px}.contentList___8nnja .item___2O1V_ p:nth-child(1) span:last-child.in___1zg5B{color:#ff7300}.contentList___8nnja .item___2O1V_ p:nth-child(2) span:last-child{float:right;margin-right:15px}.filter___3B-4u{position:fixed;top:44px;left:0;height:100%;width:100%;background:rgba(0,0,0,.4);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .4s cubic-bezier(.1,.7,.1,1);transition:all .4s cubic-bezier(.1,.7,.1,1)}.filter___3B-4u.active___10qyC,.filter___3B-4u.active___10qyC ul{-webkit-transform:translateZ(0);transform:translateZ(0)}.filter___3B-4u ul{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .6s cubic-bezier(.1,.7,.1,1);transition:all .6s cubic-bezier(.1,.7,.1,1);width:100%;padding:20px 15px;background:#fff;height:120px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.filter___3B-4u ul li{min-width:33%;list-style:none;text-align:center;color:#626262;font-size:14px}.filter___3B-4u ul li:not(:nth-of-type(3n)){border-right:1px solid #e4e4e4}.filter___3B-4u ul li:last-child{border-right:none}.filter___3B-4u ul li.current___37pUg{color:#00a6e2}",""]),e.locals={bg:"bg___2h8eE",contentList:"contentList___8nnja",errorImg:"errorImg___2kjLl",item:"item___2O1V_","in":"in___1zg5B",filter:"filter___3B-4u",active:"active___10qyC",current:"current___37pUg"}},2275:[2484,1443]});