webpackJsonp([63],{13:[2366,24],15:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,d,s=n(2),u=a(s),f=n(5),c=a(f),_=n(3),p=a(_),g=n(4),h=a(g),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=n(1),v=a(b),y=n(8),E=a(y),x=n(22),R=a(x),w=n(13),L=a(w),T=n(9),S=a(T),D=(d=r=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,l=t.endType;if(!e)return!1;var i=e.offsetHeight;if(i<=n&&!l)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:i}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,l=t.fetch,i=t.endType,o=this.state,r=o.allHeight,d=o.loadHeight,s=r+d-a-e;i||s<=n&&l()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,l=e.style,i=(e.fetch,e.endType),o=e.endload,r=(e.listLoad,e.listzg,e.initLoad),d=e.nullDom,s=e.titleChild,u=this.state.initLoading,f=[];l.height=a,t&&t.map(function(e,t){f.push(v["default"].cloneElement(e))});var c=void 0,_=void 0,p=void 0;return u&&(p=r),i?0!=f&&(c=o):c=n,_=0!=f.length||s?f:d,v["default"].createElement("div",{style:l,ref:"scrollBox"},v["default"].createElement("div",{ref:"listBox"},v["default"].createElement("div",null,s,_),v["default"].createElement("div",{className:(0,E["default"])(L["default"].fsLoading,this.state.init&&!i&&L["default"].block||L["default"].hidden)},this.state.init&&!i&&p||null)),v["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!i&&L["default"].hidden||L["default"].block)},c))}}]),t}(b.Component),r.propTypes={height:S["default"].number,fetch:S["default"].func,isLoading:S["default"].bool,loading:S["default"].object,endType:S["default"].bool,endload:S["default"].object,initLoad:S["default"].object,distance:S["default"].number,nullDom:S["default"].element,fsDom:S["default"].element,titleChild:S["default"].element},r.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:R["default"].loadingDom(),endType:!1,endload:R["default"].loadingEndDom(),initLoad:R["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:R["default"].nullDom(),titleChild:null},d);t["default"]=D},22:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=a(i),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),s=a(d),u=n(34),f=a(u),c=n(13),_=a(c),p=n(15),g=a(p),h=function(){function e(){l(this,e)}return r(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return s["default"].createElement("div",{className:_["default"].loading},s["default"].createElement(e,{color:"#00a6e2",size:"20px"}),s["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return s["default"].createElement("div",{className:_["default"].loadingList},s["default"].createElement(e,{color:"#00a6e2",size:"20px"}),s["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return s["default"].createElement("div",{className:_["default"].loadingEnd},s["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return s["default"].createElement("div",{className:_["default"].nullIcon},s["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=h},24:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},60:function(e,t,n){e.exports=n.p+"static/media/nojilu_03.5a61f197.png"},127:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),d=a(r),s=n(5),u=a(s),f=n(3),c=a(f),_=n(4),p=a(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,d["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),m=a(h),b=n(149),v=a(b),y=function(e){function t(){return l(this,t),i(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return o(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.data,a=e.price,l=e.state,i=e.statusColor,o=e.moneyColor,r=e.click;return m["default"].createElement("div",{className:v["default"].redList,onClick:function(){r&&r()}},m["default"].createElement("div",{className:v["default"].listTable},m["default"].createElement("div",{className:v["default"].listLeft},m["default"].createElement("h1",null,t),m["default"].createElement("span",null,n)),m["default"].createElement("div",{className:v["default"].listRight},m["default"].createElement("h1",{style:{color:o}},"￥",a),m["default"].createElement("p",{style:{color:i},className:v["default"].noActivate},l))))}}]),t}(m["default"].Component);t["default"]=y},134:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".redList___COs3S{background:#fff;border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-top:15px;padding:0 0 0 15px}.redList___COs3S .listTable___OpRna{border-bottom:1px solid #ddd;overflow:hidden}.redList___COs3S .listTable___OpRna h1{font-size:16px;color:#000;padding:0;margin:0;font-weight:400;margin-top:15px;margin-bottom:5px}.redList___COs3S .listTable___OpRna p{font-size:12px;color:#aaa;margin-top:5px;margin-bottom:15px}.redList___COs3S .listTable___OpRna span{font-size:14px;color:#aaa}.redList___COs3S .listTable___OpRna .listLeft___3S9q5{float:left;width:70%;text-align:left}.redList___COs3S .listTable___OpRna .listRight___1whTR{float:left;width:30%;padding-right:15px;text-align:right}.redList___COs3S .listTable___OpRna .noActivate___iiVOA{color:#f76260}.redList___COs3S .listTable___OpRna:last-child{border:none}",""]),t.locals={redList:"redList___COs3S",listTable:"listTable___OpRna",listLeft:"listLeft___3S9q5",listRight:"listRight___1whTR",noActivate:"noActivate___iiVOA"}},149:function(e,t,n){var a=n(134);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)},1128:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),d=a(r),s=n(5),u=a(s),f=n(3),c=a(f),_=n(4),p=a(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,d["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),m=a(h),b=n(12),v=a(b),y=n(2239),E=a(y),x=n(10),R=n(11),w=n(127),L=a(w),T=n(20),S=a(T),D=n(60),O=a(D),C=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return n.componentDidMount=function(){n.setState({componentDid:!0}),n.props.getList(n.state.flag?"1":"2")},n.componentWillUnmount=function(){n.props.clearData("CREDITORS_RECORDS"),n.props.clearData("CREDITORS_RECORDS_HISTORY")},n.toggle=function(e){(2==e&&n.state.flag||1==e&&!n.state.flag)&&n.setState({flag:!n.state.flag}),n.state.flag?n.props.getListB():n.props.getList()},n.listA=function(){var e=document.body.clientHeight,t=e-95,a=n.props,l=a.getList,i=a.pending,o=a.end,r=a.listData,d=a.push;return m["default"].createElement(S["default"],{height:t,fetch:l,isLoading:i,distance:5,endType:o,nullDom:m["default"].createElement("div",{className:E["default"].nullBox},m["default"].createElement("img",{src:O["default"]})),endload:m["default"].createElement("div",null)},r&&r.map(function(e,t){var n=e.name,a=e.date,l=e.amount,i=e.status,o=e.id,r=e.access_sys,s=e.borrow_id;return m["default"].createElement(L["default"],{key:t,title:n,data:a,price:l,state:i,moneyColor:"#aaa",statusColor:"#f70",click:function(){d(r?"/user/zqPropertyDetail/"+o+"?access_sys=platform&borrow_id="+s:"/user/zqPropertyDetail/"+o+"?borrow_id="+s)}})}))},n.listB=function(){var e=document.body.clientHeight,t=e-95,a=n.props,l=a.getListB,i=a.pendingB,o=a.endB,r=a.listDataB;a.push;return m["default"].createElement(S["default"],{height:t,fetch:l,isLoading:i,distance:5,endType:o,nullDom:m["default"].createElement("div",{className:E["default"].nullBox},m["default"].createElement("img",{src:O["default"]})),endload:m["default"].createElement("div",null)},r&&r.map(function(e,t){var n=e.name,a=e.amount,l=e.status,i=e.date;return m["default"].createElement(L["default"],{key:t,title:n,data:i,price:a,state:l,moneyColor:"#aaa",statusColor:"#f70"})}))},n.state={flag:!0,componentDid:!1},n}return o(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.flag,a=t.componentDid,l=void 0,i=void 0;return a&&(l=this.listA(),i=this.listB()),m["default"].createElement("div",null,m["default"].createElement(v["default"],{onLeft:this.props.pop},"债权记录"),m["default"].createElement("div",{className:E["default"].bg},m["default"].createElement("ul",{className:E["default"].tabmenu},m["default"].createElement("li",null,m["default"].createElement("a",{className:this.state.flag?E["default"].borderBlue:E["default"].borderWhite,onClick:function(){e.toggle(1)}}," 待回款项目")),m["default"].createElement("li",null,m["default"].createElement("a",{className:this.state.flag?E["default"].borderWhite:E["default"].borderBlue,onClick:function(){e.toggle(2)}}," 历史资产"))),m["default"].createElement("div",{className:E["default"].recordsMain},m["default"].createElement("div",{className:E["default"].tablist},m["default"].createElement("div",{className:n&&E["default"].show||E["default"].hide},l),m["default"].createElement("div",{className:!n&&E["default"].show||E["default"].hide},i)))))}}]),t}(m["default"].Component),k=function(e,t){return{listData:e.listdata.getIn(["CREDITORS_RECORDS","data"]),pending:e.listdata.getIn(["CREDITORS_RECORDS","pending"]),end:e.listdata.getIn(["CREDITORS_RECORDS","pageEnd"]),listDataB:e.listdata.getIn(["CREDITORS_RECORDS_HISTORY","data"]),pendingB:e.listdata.getIn(["CREDITORS_RECORDS_HISTORY","pending"]),endB:e.listdata.getIn(["CREDITORS_RECORDS_HISTORY","pageEnd"])}},B=function(e,t){return{getList:function(){e({type:"CREDITORS_RECORDS",params:[1]})},getListB:function(){e({type:"CREDITORS_RECORDS_HISTORY",params:[2]})},pop:function(){e((0,R.goBack)())},clearData:function(t){e({type:"CLEAR_DATA",key:t})},push:function(t){e((0,R.push)(t))}}};t["default"]=(0,x.connect)(k,B)(C)},1284:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1128),i=a(l);t["default"]=i["default"]},1687:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___1SVUq{position:absolute;left:0;top:0;width:100%;height:100%;background:#f1eff5;z-index:1}.show___31LGe{display:block}.hide___3hHqR{display:none}.tabmenu___2YFfM li .borderBlue___1lZ4R{border-bottom:2px solid #00a6e2}.tabmenu___2YFfM li .borderWhite___XUDTL{border-bottom:2px solid #fff}.recordsMain___21o4U{background:#f1eff5;margin-top:88px;overflow:hidden}.tablist___ORggB{width:100%}.tabmenu___2YFfM{width:100%;background:#fff;list-style:none;overflow:hidden;position:fixed;top:44px}.tabmenu___2YFfM li{float:left;width:50%;text-align:center;height:44px;border-bottom:1px solid #ddd}.tabmenu___2YFfM li a{display:block;width:100%;height:44px;line-height:41px;border-bottom:1px solid #fff;font-size:16px;color:#626262;text-decoration:none}.errorImg___3Tthj{width:100%;margin-top:50px}.errorImg___3Tthj img{display:block;width:169px;height:152px;margin:0 auto}.nullBox____J0uA{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nullBox____J0uA img{width:161px}",""]),t.locals={bg:"bg___1SVUq",show:"show___31LGe",hide:"hide___3hHqR",tabmenu:"tabmenu___2YFfM",borderBlue:"borderBlue___1lZ4R",borderWhite:"borderWhite___XUDTL",recordsMain:"recordsMain___21o4U",tablist:"tablist___ORggB",errorImg:"errorImg___3Tthj",nullBox:"nullBox____J0uA"}},2239:function(e,t,n){var a=n(1687);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)}});