webpackJsonp([62],{13:[2320,25],15:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},16:[2322,15],17:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},19:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i=a(l),o=n(16),r=a(o);t["default"]=function(e){return function(t){return i["default"].createElement("div",{className:r["default"].page},i["default"].createElement(e,t))}}},23:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,s,u=n(2),d=a(u),f=n(5),c=a(f),_=n(3),p=a(_),h=n(4),g=a(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,d["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n(1),b=a(v),y=n(8),E=a(y),x=n(24),L=a(x),w=n(13),k=a(w),M=n(9),H=a(M),N=(s=r=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,l=t.endType;if(!e)return!1;var i=e.offsetHeight;if(i<=n&&!l)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:i}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,l=t.fetch,i=t.endType,o=this.state,r=o.allHeight,s=o.loadHeight,u=r+s-a-e;i||u<=n&&l()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,l=e.style,i=(e.fetch,e.endType),o=e.endload,r=(e.listLoad,e.listzg,e.initLoad),s=e.nullDom,u=e.titleChild,d=this.state.initLoading,f=[];l.height=a,t&&t.map(function(e,t){f.push(b["default"].cloneElement(e))});var c=void 0,_=void 0,p=void 0;return d&&(p=r),i?0!=f&&(c=o):c=n,_=0!=f.length||u?f:s,b["default"].createElement("div",{style:l,ref:"scrollBox"},b["default"].createElement("div",{ref:"listBox"},b["default"].createElement("div",null,u,_),b["default"].createElement("div",{className:(0,E["default"])(k["default"].fsLoading,this.state.init&&!i&&k["default"].block||k["default"].hidden)},this.state.init&&!i&&p||null)),b["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!i&&k["default"].hidden||k["default"].block)},c))}}]),t}(v.Component),r.propTypes={height:H["default"].number,fetch:H["default"].func,isLoading:H["default"].bool,loading:H["default"].object,endType:H["default"].bool,endload:H["default"].object,initLoad:H["default"].object,distance:H["default"].number,nullDom:H["default"].element,fsDom:H["default"].element,titleChild:H["default"].element},r.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:L["default"].loadingDom(),endType:!1,endload:L["default"].loadingEndDom(),initLoad:L["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:L["default"].nullDom(),titleChild:null},s);t["default"]=N},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=a(i),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=a(s),d=n(36),f=a(d),c=n(13),_=a(c),p=n(17),h=a(p),g=function(){function e(){l(this,e)}return r(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return u["default"].createElement("div",{className:_["default"].loading},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return u["default"].createElement("div",{className:_["default"].loadingList},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return u["default"].createElement("div",{className:_["default"].loadingEnd},u["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return u["default"].createElement("div",{className:_["default"].nullIcon},u["default"].createElement("img",{src:h["default"]}))}}]),e}();t["default"]=g},25:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},1006:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=a(r),u=n(5),d=a(u),f=n(3),c=a(f),_=n(4),p=a(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,s["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),m=a(g),v=n(12),b=a(v),y=n(2088),E=a(y),x=n(11),L=n(23),w=a(L),k=n(10),M=n(17),H=a(M),N=n(19),T=a(N),D=n(8),S=a(D),Y=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return n.componentDidMount=function(){n.props.getList(n.state.flag),n.setState({init:!0})},n.filters=function(){n.setState({filterShow:!n.state.filterShow})},n.choose=function(e){n.refs.scroll.setState({init:!0}),n.setState({flag:e,filterShow:!1}),n.props.clearData(),n.props.getList(e)},n.ScrollDom=function(){var e=document.body.clientHeight-44,t=n.props,a=t.listData,l=t.pending,i=t.end;return m["default"].createElement("div",{className:E["default"].contentList,style:{height:e}},m["default"].createElement(w["default"],{ref:"scroll",height:e,fetch:function(){n.props.getList(n.state.flag)},isLoading:l,distance:5,endType:i,nullDom:m["default"].createElement("img",{className:E["default"].errorImg,src:H["default"]})},a&&a.map(function(e,t){var n=e.type_name,a=e.date,l=e.amount,i=(e.status,e.way),o=e.desc,r=e.due_amount;return m["default"].createElement("div",{className:E["default"].item,key:t},m["default"].createElement("p",null,m["default"].createElement("span",null,n),m["default"].createElement("span",{className:(0,S["default"])("入账"==i?E["default"]["in"]:"")},"¥",l)),m["default"].createElement("p",null,m["default"].createElement("span",null,a),m["default"].createElement("span",null,"待收金额",r)),m["default"].createElement("p",null,"备注:",o))})))},n.state={filterShow:!1,flag:0,init:!1},n}return o(t,e),h(t,[{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this,t=this.props.pop,n=this.state.init,a=void 0;return n&&(a=this.ScrollDom()),m["default"].createElement("div",{className:E["default"].bg},m["default"].createElement(b["default"],{onRight:this.filters,rightNode:m["default"].createElement("span",null,"筛选"),onLeft:function(){t()}},"资产记录"),a,m["default"].createElement("div",{className:(0,S["default"])(E["default"].filter,this.state.filterShow?E["default"].active:"hide")},m["default"].createElement("ul",null,m["default"].createElement("li",{onClick:function(){e.choose(1)},className:(0,S["default"])(1==this.state.flag?E["default"].current:"")},"投资"),m["default"].createElement("li",{onClick:function(){e.choose(2)},className:(0,S["default"])(2==this.state.flag?E["default"].current:"")},"回款"),m["default"].createElement("li",{onClick:function(){e.choose(6)},className:(0,S["default"])(6==this.state.flag?E["default"].current:"")},"提现"),m["default"].createElement("li",{onClick:function(){e.choose(3)},className:(0,S["default"])(3==this.state.flag?E["default"].current:"")},"红包"),m["default"].createElement("li",{onClick:function(){e.choose(4)},className:(0,S["default"])(4==this.state.flag?E["default"].current:"")},"理财金收益"),m["default"].createElement("li",{onClick:function(){e.choose(5)},className:(0,S["default"])(5==this.state.flag?E["default"].current:"")},"充值"),m["default"].createElement("li",{onClick:function(){e.choose(0)},className:(0,S["default"])(0==this.state.flag?E["default"].current:"")},"全部"))))}}]),t}(m["default"].Component),C=function(e){return{listData:e.listdata.getIn(["FETCH_MONEY_LOG","data"]),pending:e.listdata.getIn(["FETCH_MONEY_LOG","pending"]),end:e.listdata.getIn(["FETCH_MONEY_LOG","pageEnd"])}},I=function(e){return{getList:function(t){e({type:"FETCH_MONEY_LOG",params:[t]})},pop:function(){e((0,k.goBack)())},clearData:function(){e({type:"CLEAR_DATA",key:"FETCH_MONEY_LOG"})}}};t["default"]=(0,x.connect)(C,I)((0,T["default"])(Y))},1153:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1006),i=a(l);t["default"]=i["default"]},1487:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___2fI-I{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.contentList___3yYsY{margin-top:44px;background-color:#fff;padding-left:15px}.contentList___3yYsY .errorImg___2aU95{display:block;margin:50px auto 0}.contentList___3yYsY .item___OLRH4{border-bottom:1px solid #e4e4e4;padding:15px 0}.contentList___3yYsY .item___OLRH4 p{font-size:11px;color:#aaa;line-height:20px}.contentList___3yYsY .item___OLRH4 p:nth-child(1){font-size:16px;color:#000}.contentList___3yYsY .item___OLRH4 p:nth-child(1) span:last-child{color:#2caf69;font-size:20px;float:right;margin-right:15px}.contentList___3yYsY .item___OLRH4 p:nth-child(1) span:last-child.in___3iMwK{color:#ff7300}.contentList___3yYsY .item___OLRH4 p:nth-child(2) span:last-child{float:right;margin-right:15px}.filter___30JMe{position:fixed;top:44px;left:0;height:100%;width:100%;background:rgba(0,0,0,.4);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .4s cubic-bezier(.1,.7,.1,1);transition:all .4s cubic-bezier(.1,.7,.1,1)}.filter___30JMe.active___2szUI,.filter___30JMe.active___2szUI ul{-webkit-transform:translateZ(0);transform:translateZ(0)}.filter___30JMe ul{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .6s cubic-bezier(.1,.7,.1,1);transition:all .6s cubic-bezier(.1,.7,.1,1);width:100%;padding:20px 15px;background:#fff;height:120px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.filter___30JMe ul li{min-width:33%;list-style:none;text-align:center;color:#626262;font-size:14px}.filter___30JMe ul li:not(:nth-of-type(3n)){border-right:1px solid #e4e4e4}.filter___30JMe ul li:last-child{border-right:none}.filter___30JMe ul li.current___3BaQl{color:#00a6e2}",""]),t.locals={bg:"bg___2fI-I",contentList:"contentList___3yYsY",errorImg:"errorImg___2aU95",item:"item___OLRH4","in":"in___3iMwK",filter:"filter___30JMe",active:"active___2szUI",current:"current___3BaQl"}},2088:function(e,t,n){var a=n(1487);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)}});