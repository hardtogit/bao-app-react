webpackJsonp([194],{410:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,d["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(f["default"]?(0,f["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var _=a(2),r=l(_),s=a(5),f=l(s),c=a(3),d=l(c),u=a(4),p=l(u),b=function(){function t(t,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,r["default"])(t,l.key,l)}}return function(e,a,l){return a&&t(e.prototype,a),l&&t(e,l),e}}(),h=a(1),m=l(h),g=a(11),w=l(g),x=a(601),E=l(x),y=a(9),v=a(26),L=l(v),k=a(8),N=a(97),D=l(N),T=a(25),M=l(T),U=function(t){function e(t){n(this,e);var a=o(this,(e.__proto__||(0,p["default"])(e)).call(this,t));return a.componentDidMount=function(){a.props.getList(a.state.flag),a.setState({init:!0})},a.filters=function(){a.setState({filterShow:!a.state.filterShow})},a.choose=function(t){a.refs.scroll.setState({init:!0}),a.setState({flag:t,filterShow:!1}),a.props.clearData(),a.props.getList(t)},a.ScrollDom=function(){var t=document.body.clientHeight-98,e=a.props,l=e.listData,n=e.pending,o=e.end;return m["default"].createElement("div",{className:E["default"].contentList,style:{height:t}},m["default"].createElement(L["default"],{ref:"scroll",height:t,fetch:function(){a.props.getList(a.state.flag)},isLoading:n,distance:5,endType:o,nullDom:m["default"].createElement("img",{className:E["default"].errorImg,src:D["default"]})},l&&l.map(function(t,e){var a=t.type_name,l=t.date,n=t.amount,o=(t.status,t.way),i=t.desc,_=t.due_amount;return m["default"].createElement("div",{className:E["default"].item,key:e},m["default"].createElement("p",null,m["default"].createElement("span",null,a),m["default"].createElement("span",{className:(0,w["default"])("入账"==o?E["default"]["in"]:"")},"¥",n)),m["default"].createElement("p",null,m["default"].createElement("span",null,l),m["default"].createElement("span",null,"待收金额",_)),m["default"].createElement("p",null,"备注:",i))})))},a.state={filterShow:!1,flag:0,init:!1},a}return i(e,t),b(e,[{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var t=this,e=(this.props.pop,this.state.init),a=void 0;return e&&(a=this.ScrollDom()),m["default"].createElement("div",{className:E["default"].bg},m["default"].createElement("div",{className:E["default"].tabs},this.state.filterShow&&m["default"].createElement("ul",{className:E["default"].tabUl},m["default"].createElement("li",{className:E["default"].tabLi},"请选择查看类型"))||m["default"].createElement("ul",{className:E["default"].tabUl},m["default"].createElement("li",{onClick:function(){t.choose(0)},className:(0,w["default"])([E["default"].tabLi,0==this.state.flag?E["default"].active:""])},"全部"),m["default"].createElement("li",{onClick:function(){t.choose(1)},className:(0,w["default"])([E["default"].tabLi,1==this.state.flag?E["default"].active:""])},"出借"),m["default"].createElement("li",{onClick:function(){t.choose(2)},className:(0,w["default"])([E["default"].tabLi,2==this.state.flag?E["default"].active:""])},"回款"),m["default"].createElement("li",{onClick:function(){t.choose(3)},className:(0,w["default"])([E["default"].tabLi,3==this.state.flag?E["default"].active:""])},"红包"),m["default"].createElement("li",{onClick:function(){t.choose(4)},className:(0,w["default"])([E["default"].tabLi,4==this.state.flag?E["default"].active:""])},"理财金收益"),m["default"].createElement("li",{onClick:function(){t.choose(5)},className:(0,w["default"])([E["default"].tabLi,5==this.state.flag?E["default"].active:""])},"充值"),m["default"].createElement("li",{onClick:function(){t.choose(6)},className:(0,w["default"])([E["default"].tabLi,6==this.state.flag?E["default"].active:""])},"提现")),m["default"].createElement("div",{className:(0,w["default"])([E["default"].btn,this.state.filterShow?E["default"]["default"]:""]),onClick:this.filters},m["default"].createElement("span",{className:(0,w["default"])([this.state.filterShow?E["default"].arrowUp:E["default"].arrowDown])}))),a,m["default"].createElement("div",{className:(0,w["default"])(E["default"].filter,this.state.filterShow?E["default"].active:"hide")},m["default"].createElement("ul",null,m["default"].createElement("li",{onClick:function(){t.choose(0)},className:(0,w["default"])(0==this.state.flag?E["default"].current:"")},"全部"),m["default"].createElement("li",{onClick:function(){t.choose(1)},className:(0,w["default"])(1==this.state.flag?E["default"].current:"")},"出借"),m["default"].createElement("li",{onClick:function(){t.choose(2)},className:(0,w["default"])(2==this.state.flag?E["default"].current:"")},"回款"),m["default"].createElement("li",{onClick:function(){t.choose(3)},className:(0,w["default"])(3==this.state.flag?E["default"].current:"")},"红包"),m["default"].createElement("li",{onClick:function(){t.choose(4)},className:(0,w["default"])(4==this.state.flag?E["default"].current:"")},"理财金收益"),m["default"].createElement("li",{onClick:function(){t.choose(5)},className:(0,w["default"])(5==this.state.flag?E["default"].current:"")},"充值"),m["default"].createElement("li",{onClick:function(){t.choose(6)},className:(0,w["default"])(6==this.state.flag?E["default"].current:"")},"提现"))))}}]),e}(m["default"].Component),C=function(t){return{listData:t.listdata.getIn(["FETCH_MONEY_LOG","data"]),pending:t.listdata.getIn(["FETCH_MONEY_LOG","pending"]),end:t.listdata.getIn(["FETCH_MONEY_LOG","pageEnd"])}},S=function(t){return{getList:function(e){t({type:"FETCH_MONEY_LOG",params:[e,"platform"]})},pop:function(){t((0,k.goBack)())},clearData:function(){t({type:"CLEAR_DATA",key:"FETCH_MONEY_LOG"})}}};e["default"]=(0,y.connect)(C,S)((0,M["default"])(U))},465:function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".bg___aD46K{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px}.bg___aD46K .tabs___1VfyT{position:relative;height:44px;margin-bottom:10px;background-color:#fff}.bg___aD46K .tabs___1VfyT .btn___oIHMw{position:absolute;width:44px;height:44px;right:0;top:0;background-color:#fff;border-left:1px solid #ddd;box-shadow:-2px 0 5px #ddd}.bg___aD46K .tabs___1VfyT .btn___oIHMw.default___2ht_H{box-shadow:none;border-left:none}.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowUp___3UXPi{position:relative}.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowUp___3UXPi:after,.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowUp___3UXPi:before{border:10px solid transparent;border-bottom:10px solid #fff;width:0;height:0;position:absolute;top:8px;left:12px;content:' '}.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowUp___3UXPi:before{border-bottom:10px solid #666;top:7px}.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowDown___BXZST{position:relative}.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowDown___BXZST:after,.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowDown___BXZST:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:16px;left:12px;content:' '}.bg___aD46K .tabs___1VfyT .btn___oIHMw .arrowDown___BXZST:before{border-top:10px solid #666;top:17px}.bg___aD46K .tabs___1VfyT .tabUl___1iWsv{padding:0 15px;white-space:nowrap;overflow-x:scroll}.bg___aD46K .tabs___1VfyT .tabUl___1iWsv .tabLi___3Rxj0{display:inline-block;height:44px;white-space:nowrap;line-height:44px;margin-right:60px;color:#666}.bg___aD46K .tabs___1VfyT .tabUl___1iWsv .tabLi___3Rxj0.active___3Wk8M{border-bottom:2px solid #00a6e2;color:#00a6e2}.contentList___14d-3{background-color:#fff;padding-left:15px}.contentList___14d-3 .errorImg___3bMY8{display:block;margin:50px auto 0}.contentList___14d-3 .item___Ld-PG{border-bottom:1px solid #e4e4e4;padding:15px 0}.contentList___14d-3 .item___Ld-PG p{font-size:11px;color:#aaa;line-height:20px}.contentList___14d-3 .item___Ld-PG p:nth-child(1){font-size:16px;color:#000}.contentList___14d-3 .item___Ld-PG p:nth-child(1) span:last-child{color:#2caf69;font-size:20px;float:right;margin-right:15px}.contentList___14d-3 .item___Ld-PG p:nth-child(1) span:last-child.in___3Uyo0{color:#ff7300}.contentList___14d-3 .item___Ld-PG p:nth-child(2) span:last-child{float:right;margin-right:15px}.filter___2_9hN{position:fixed;top:88px;left:0;height:100%;width:100%;background:rgba(0,0,0,.4);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .4s cubic-bezier(.1,.7,.1,1);transition:all .4s cubic-bezier(.1,.7,.1,1)}.filter___2_9hN.active___3Wk8M,.filter___2_9hN.active___3Wk8M ul{-webkit-transform:translateZ(0);transform:translateZ(0)}.filter___2_9hN ul{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .6s cubic-bezier(.1,.7,.1,1);transition:all .6s cubic-bezier(.1,.7,.1,1);width:100%;padding:15px;background:#fff;height:120px}.filter___2_9hN ul li{list-style:none;text-align:center;color:#626262;font-size:14px;padding:6px 8px;display:inline-block;border:1px solid #ddd;margin:0 20px 15px 0}.filter___2_9hN ul li.current___z41FU{color:#00a6e2;border-color:#00a6e2}",""]),e.locals={bg:"bg___aD46K",tabs:"tabs___1VfyT",btn:"btn___oIHMw","default":"default___2ht_H",arrowUp:"arrowUp___3UXPi",arrowDown:"arrowDown___BXZST",tabUl:"tabUl___1iWsv",tabLi:"tabLi___3Rxj0",active:"active___3Wk8M",contentList:"contentList___14d-3",errorImg:"errorImg___3bMY8",item:"item___Ld-PG","in":"in___3Uyo0",filter:"filter___2_9hN",current:"current___z41FU"}},601:function(t,e,a){var l=a(465);"string"==typeof l&&(l=[[t.id,l,""]]);a(7)(l,{});l.locals&&(t.exports=l.locals)}});