webpackJsonp([39],{13:[2320,25],15:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},16:[2322,15],17:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},19:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i=a(l),o=n(16),r=a(o);t["default"]=function(e){return function(t){return i["default"].createElement("div",{className:r["default"].page},i["default"].createElement(e,t))}}},23:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,u,d=n(2),s=a(d),f=n(5),c=a(f),p=n(3),_=a(p),m=n(4),h=a(m),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,s["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=n(1),y=a(x),v=n(8),b=a(v),E=n(24),B=a(E),w=n(13),L=a(w),T=n(9),D=a(T),I=(u=r=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(t,e),g(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,l=t.endType;if(!e)return!1;var i=e.offsetHeight;if(i<=n&&!l)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:i}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,l=t.fetch,i=t.endType,o=this.state,r=o.allHeight,u=o.loadHeight,d=r+u-a-e;i||d<=n&&l()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,l=e.style,i=(e.fetch,e.endType),o=e.endload,r=(e.listLoad,e.listzg,e.initLoad),u=e.nullDom,d=e.titleChild,s=this.state.initLoading,f=[];l.height=a,t&&t.map(function(e,t){f.push(y["default"].cloneElement(e))});var c=void 0,p=void 0,_=void 0;return s&&(_=r),i?0!=f&&(c=o):c=n,p=0!=f.length||d?f:u,y["default"].createElement("div",{style:l,ref:"scrollBox"},y["default"].createElement("div",{ref:"listBox"},y["default"].createElement("div",null,d,p),y["default"].createElement("div",{className:(0,b["default"])(L["default"].fsLoading,this.state.init&&!i&&L["default"].block||L["default"].hidden)},this.state.init&&!i&&_||null)),y["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,b["default"])(this.state.init&&!i&&L["default"].hidden||L["default"].block)},c))}}]),t}(x.Component),r.propTypes={height:D["default"].number,fetch:D["default"].func,isLoading:D["default"].bool,loading:D["default"].object,endType:D["default"].bool,endload:D["default"].object,initLoad:D["default"].object,distance:D["default"].number,nullDom:D["default"].element,fsDom:D["default"].element,titleChild:D["default"].element},r.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:B["default"].loadingDom(),endType:!1,endload:B["default"].loadingEndDom(),initLoad:B["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:B["default"].nullDom(),titleChild:null},u);t["default"]=I},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=a(i),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),d=a(u),s=n(36),f=a(s),c=n(13),p=a(c),_=n(17),m=a(_),h=function(){function e(){l(this,e)}return r(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return d["default"].createElement("div",{className:p["default"].loading},d["default"].createElement(e,{color:"#00a6e2",size:"20px"}),d["default"].createElement("p",{className:p["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return d["default"].createElement("div",{className:p["default"].loadingList},d["default"].createElement(e,{color:"#00a6e2",size:"20px"}),d["default"].createElement("p",{className:p["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return d["default"].createElement("div",{className:p["default"].loadingEnd},d["default"].createElement("span",{className:p["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return d["default"].createElement("div",{className:p["default"].nullIcon},d["default"].createElement("img",{src:m["default"]}))}}]),e}();t["default"]=h},25:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},60:function(e,t,n){e.exports=n.p+"static/media/nojilu_03.5a61f197.png"},132:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),u=a(r),d=n(5),s=a(d),f=n(3),c=a(f),p=n(4),_=a(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),g=a(h),x=n(153),y=a(x),v=n(148),b=a(v),E=function(e){function t(){return l(this,t),i(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return o(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.refs.manage.offsetHeight;this.props.didFn&&this.props.didFn(e)}},{key:"render",value:function(){var e=this.props,t=e.titleLeft,n=e.titleRight,a=e.priceLeft,l=e.priceRight,i=e.titleBottom,o=e.priceBottom;return g["default"].createElement("div",{className:y["default"].manage,ref:"manage"},g["default"].createElement("div",{className:y["default"].manTop},g["default"].createElement("div",{className:y["default"].manListFloat},g["default"].createElement("p",null,t),g["default"].createElement("h1",null,a,g["default"].createElement("span",null,"￥"))),g["default"].createElement("div",{className:y["default"].manListFloat},g["default"].createElement("p",null,n),g["default"].createElement("h1",null,l,g["default"].createElement("span",null,"￥")))),g["default"].createElement("div",{className:y["default"].manBottom},g["default"].createElement("p",null,i),g["default"].createElement("h1",null,o,g["default"].createElement("span",null,"￥"))),g["default"].createElement("img",{src:b["default"]}))}}]),t}(g["default"].Component);t["default"]=E},137:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".manage___1hClP{width:100%;background:#00a6e2;padding:0 15px;color:#fff;position:relative;margin-top:44px}.manage___1hClP img{display:block;width:100%;position:absolute;bottom:0;left:0}.manTop___3TOBs{border-bottom:1px solid #80caff;overflow:hidden;height:100px;padding-top:10px;position:relative;z-index:10}.manListFloat___2TmyV{float:left;width:50%;height:100%;padding:0 15px}.manListFloat___2TmyV:nth-child(1){border-right:1px solid #80caff}.manListFloat___2TmyV p{font-size:12px;margin-top:20px}.manListFloat___2TmyV h1{font-size:24px;margin:0;padding:0;font-weight:400;margin-top:15px}.manListFloat___2TmyV h1 span{font-size:12px;position:relative;top:-15px}.manBottom___x8ScR{position:relative;z-index:10;padding:15px}.manBottom___x8ScR p{font-size:12px}.manBottom___x8ScR h1{font-size:36px;font-weight:400;margin:0;padding:0;margin-top:15px}.manBottom___x8ScR h1 span{font-size:18px;position:relative;top:-20px}",""]),t.locals={manage:"manage___1hClP",manTop:"manTop___3TOBs",manListFloat:"manListFloat___2TmyV",manBottom:"manBottom___x8ScR"}},148:function(e,t,n){e.exports=n.p+"static/media/managebag.8d5cb19d.png"},153:function(e,t,n){var a=n(137);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)},493:function(e,t,n){e.exports=n.p+"static/media/zqzr.57ca13ef.png"},1008:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),u=a(r),d=n(5),s=a(d),f=n(3),c=a(f),p=n(4),_=a(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),g=a(h),x=n(12),y=a(x),v=n(2158),b=a(v),E=n(132),B=a(E),w=n(22),L=a(w),T=n(23),D=a(T),I=n(10),k=(n(21),n(60)),R=a(k),M=n(493),O=a(M),z=n(20),C=a(z),N=n(19),S=a(N),H=n(11),Q=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.setHeight=function(e){n.setState({height:e})},n.scrollDom=function(){var e=n.props,t=e.listData,a=e.pending,l=e.end,i=e.getList,o=n.state.height,r=document.body.clientHeight,u=r-o-44-50;return g["default"].createElement("div",{style:{height:u},className:b["default"].listBox},g["default"].createElement(D["default"],{height:u,fetch:i,isLoading:a,distance:5,endType:l,nullDom:g["default"].createElement("div",{className:b["default"].nullBox},g["default"].createElement("img",{src:R["default"]})),endload:g["default"].createElement("div",null)},t&&t.map(function(e,t){var a=e.name,l=e.status,i=e.profit_expire,o=e.profit_arrival,r=e.profit_accumulate,u=e.surplus_days,d=e.periods,s=e.id,f=e.hold_money,c=e.borrow_id,p=void 0;return p="竞标中"==l?g["default"].createElement("p",{className:b["default"].competitive},l):g["default"].createElement("p",{className:b["default"].surplus},"剩余",u,"天"),g["default"].createElement("ul",{key:t,className:b["default"].listBoxOne,onClick:function(){n.goDetail(s,c,e.access_sys)}},g["default"].createElement("li",null,g["default"].createElement("img",{style:{marginTop:"16px"},src:O["default"]}),a,!e.access_sys&&g["default"].createElement("span",{className:b["default"].store},"存"),p),g["default"].createElement("li",null,"持有金额",g["default"].createElement("p",null,C["default"].padMoney(f))),g["default"].createElement("li",null,"到期收益",g["default"].createElement("p",null,C["default"].padMoney(i))),g["default"].createElement("li",null,"已到账收益(",C["default"].padMoney(d),")",g["default"].createElement("p",null,C["default"].padMoney(o))),g["default"].createElement("li",null,"累计收益",g["default"].createElement("p",null,C["default"].padMoney(r))))})))},n.goDetail=function(e,t,a){var l=n.props.push;l(a?"/user/zqPropertyDetail/"+e+"?access_sys=platform&borrow_id="+t:"/user/zqPropertyDetail/"+e+"?borrow_id="+t)},n.go=function(){var e=n.props,t=e.goBuy,a=e.push;t(),a("/home/productIndex")},n.buyDom=function(){return g["default"].createElement("div",{className:b["default"].gobuy,onClick:n.go},"再次购买")},n.loadDom=function(){return g["default"].createElement(L["default"],null)},n.loadEndDom=function(){var e=n.props.infoData.data,t=e.total,a=e.profit_yesterday,l=e.profit_accumulate,i=e.revenue;return g["default"].createElement("div",{className:b["default"].m_h_title},g["default"].createElement(B["default"],{titleLeft:"昨日收益",titleRight:"历史累计收益",priceLeft:C["default"].padMoney(a),priceRight:C["default"].padMoney(l),titleBottom:"待收本息（利息部分"+C["default"].padMoney(i)+")",priceBottom:C["default"].padMoney(t),didFn:function(e){n.setHeight(e)}}))},n.state={height:0},n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.getInfo()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.infoData,n=e.pop,a=e.push,l=this.state.height,i=void 0,o=void 0,r=void 0;return t?(i=this.loadEndDom(),o=this.buyDom()):i=this.loadDom(),0!=l&&(r=this.scrollDom()),g["default"].createElement("div",null,g["default"].createElement(y["default"],{onLeft:n,rightNode:g["default"].createElement("span",null,"记录"),onRight:function(){a("/user/zqRecords")}},"我的债权"),g["default"].createElement("div",{className:b["default"].bg},i,r,o))}}]),t}(g["default"].Component),F=function(e){return{infoData:e.infodata.getIn(["MY_CREDITOR_SUMMARY","data"]),listData:e.listdata.getIn(["MY_CREDITOR_LIST","data"]),pending:e.listdata.getIn(["MY_CREDITOR_LIST","pending"]),end:e.listdata.getIn(["MY_CREDITOR_LIST","pageEnd"])}},P=function(e){return{getInfo:function(){e({type:"MY_CREDITOR_SUMMARY"})},getList:function(){e({type:"MY_CREDITOR_LIST"})},clearData:function(){e({type:"CLEAR_DATA",key:"MY_CREDITOR_LIST"})},goBuy:function(){e({type:"HOME_TAB_CAV",index:3}),e({type:"PRODUCT_INDEX",index:3})},push:function(t){e((0,I.push)(t))},pop:function(){e((0,I.goBack)())}}};t["default"]=(0,H.connect)(F,P)((0,S["default"])(Q))},1558:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"*{padding:0;margin:0}.bg___1P6Ry{background:#f1eff5;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:1}.listBoxOne___1u0IQ li:nth-child(1) .competitive___3i79B{color:#00a6e2}.manageContent___2ihDc{width:100%}.nullBox___a_X5M{text-align:center;margin-top:40px}.listBoxOne___1u0IQ{width:100%;border-top:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;background:#fff;list-style:none;padding-left:15px;box-sizing:border-box;margin-top:15px;padding-bottom:6px}.listBoxOne___1u0IQ li img{display:inline-block;float:left;width:20px;padding-right:6px;margin-top:8px}.listBoxOne___1u0IQ li p{float:right;padding-right:15px}.listBoxOne___1u0IQ li:nth-child(1){border-bottom:1px solid #e5e5e5;font-size:14px;color:#000;height:45px;line-height:45px;overflow:hidden}.listBoxOne___1u0IQ li:nth-child(1) p{color:#898989}.listBoxOne___1u0IQ li:nth-child(2),.listBoxOne___1u0IQ li:nth-child(3),.listBoxOne___1u0IQ li:nth-child(4),.listBoxOne___1u0IQ li:nth-child(5){height:32px;line-height:32px;color:#aaa;font-size:14px}.listBoxOne___1u0IQ li:nth-child(2) p,.listBoxOne___1u0IQ li:nth-child(3) p{font-size:18px;color:#000}.listBoxOne___1u0IQ li:nth-child(4) p,.listBoxOne___1u0IQ li:nth-child(5) p{color:#ff7701}.errorImg___1UQZ8{width:100%}.errorImg___1UQZ8 img{display:block;width:169px;height:152px;margin:60px auto 50px}.gobuy___Kr0Fl{background:#00a6e2;position:fixed;width:100%;bottom:0;left:0;height:50px;line-height:50px;text-align:center;font-size:18px;color:#fff}.store___pAgjI{color:#d03c3c;/:2 px;border:1px solid #d03c3c;border-radius:100%;display:inline-block;width:18px;height:18px;line-height:15px;margin-left:4px;font-size:12px;text-align:center}",""]),t.locals={bg:"bg___1P6Ry",listBoxOne:"listBoxOne___1u0IQ",competitive:"competitive___3i79B",manageContent:"manageContent___2ihDc",listBox:"listBox___QzNNh",nullBox:"nullBox___a_X5M",errorImg:"errorImg___1UQZ8",gobuy:"gobuy___Kr0Fl",store:"store___pAgjI"}},2158:function(e,t,n){var a=n(1558);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)}});