webpackJsonp([49],{14:[2579,26],16:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},17:[2581,16],18:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=a(l),i=n(17),r=a(i);t["default"]=function(e){return function(t){return o["default"].createElement("div",{className:r["default"].page},o["default"].createElement(e,t))}}},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,d,u=n(2),f=a(u),s=n(5),c=a(s),p=n(3),_=a(p),g=n(4),h=a(g),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n(1),y=a(v),b=n(8),E=a(b),x=n(25),w=a(x),k=n(14),L=a(k),S=n(9),T=a(S),D=(d=r=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return i(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,l=t.endType;if(!e)return!1;var o=e.offsetHeight;if(o<=n&&!l)a();else{var i=this.refs.scrollBox;this.setState({init:!1,allHeight:o}),this.addScroll(i)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,l=t.fetch,o=t.endType,i=this.state,r=i.allHeight,d=i.loadHeight,u=r+d-a-e;o||u<=n&&l()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,l=e.style,o=(e.fetch,e.endType),i=e.endload,r=(e.listLoad,e.listzg,e.initLoad),d=e.nullDom,u=e.titleChild,f=this.state.initLoading,s=[];l.height=a,t&&t.map(function(e,t){s.push(y["default"].cloneElement(e))});var c=void 0,p=void 0,_=void 0;return f&&(_=r),o?0!=s&&(c=i):c=n,p=0!=s.length||u?s:d,y["default"].createElement("div",{style:l,ref:"scrollBox"},y["default"].createElement("div",{ref:"listBox"},y["default"].createElement("div",null,u,p),y["default"].createElement("div",{className:(0,E["default"])(L["default"].fsLoading,this.state.init&&!o&&L["default"].block||L["default"].hidden)},this.state.init&&!o&&_||null)),y["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!o&&L["default"].hidden||L["default"].block)},c))}}]),t}(v.Component),r.propTypes={height:T["default"].number,fetch:T["default"].func,isLoading:T["default"].bool,loading:T["default"].object,endType:T["default"].bool,endload:T["default"].object,initLoad:T["default"].object,distance:T["default"].number,nullDom:T["default"].element,fsDom:T["default"].element,titleChild:T["default"].element},r.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:w["default"].loadingDom(),endType:!1,endload:w["default"].loadingEndDom(),initLoad:w["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:w["default"].nullDom(),titleChild:null},d);t["default"]=D},25:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=a(o),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,i["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),u=a(d),f=n(38),s=a(f),c=n(14),p=a(c),_=n(18),g=a(_),h=function(){function e(){l(this,e)}return r(e,null,[{key:"loadingInitDom",value:function(){var e=s["default"].BeatLoader;return u["default"].createElement("div",{className:p["default"].loading},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:p["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=s["default"].ClipLoader;return u["default"].createElement("div",{className:p["default"].loadingList},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:p["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return u["default"].createElement("div",{className:p["default"].loadingEnd},u["default"].createElement("span",{className:p["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return u["default"].createElement("div",{className:p["default"].nullIcon},u["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=h},26:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},218:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),d=a(r),u=n(5),f=a(u),s=n(3),c=a(s),p=n(4),_=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,d["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),m=a(h),v=n(265),y=a(v),b=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.desc1,a=e.desc2,l=e.from,o=e.to,i=e.status,r=e.endStyle;return m["default"].createElement("div",{className:y["default"].accMain},m["default"].createElement("div",{className:y["default"].addList},m["default"].createElement("div",{className:y["default"].listCenter},m["default"].createElement("h1",null,t,m["default"].createElement("span",{className:y["default"].status},i)),m["default"].createElement("p",null,n),m["default"].createElement("p",null,a)),m["default"].createElement("h2",{style:r},"有效期",l,"到",o)))}}]),t}(m["default"].Component);t["default"]=b},235:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".accMain___2VqIj{padding:0 15px;overflow:hidden}.addList___2IyRY{background:#fff;border-radius:5px;overflow:hidden;width:100%;margin-top:15px}.listCenter___3XPe0{width:100%;padding:0 15px}.listCenter___3XPe0 h1{border-bottom:1px solid #ddd;font-size:20px;font-weight:400;padding:10px 0 15px}.listCenter___3XPe0 p{font-size:12px;color:#888;padding:5px 0}.addList___2IyRY h2{font-size:14px;background:#feb178;color:#fff;padding:10px 15px;margin-top:15px;font-weight:400}.status___1IvEp{float:right}",""]),t.locals={accMain:"accMain___2VqIj",addList:"addList___2IyRY",listCenter:"listCenter___3XPe0",status:"status___1IvEp"}},265:[2579,235],499:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___2dhT9{background:#f5f5f5;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:1}*{padding:0;margin:0}.pastDue___SP7k6{position:fixed;bottom:20px;text-align:center;font-size:16px;color:#888;width:100%}.nullBox___130Yg{text-align:center;margin-top:40px}.content___2qL_d{overflow:hidden;margin-top:44px}.nonePast___w5o1Q{width:100%;margin-top:40px}.rightBox___2jTq_{font-size:12px;color:#fff}.nonePast___w5o1Q img{display:block;width:169px;height:152px;margin:0 auto}",""]),t.locals={bg:"bg___2dhT9",pastDue:"pastDue___SP7k6",nullBox:"nullBox___130Yg",content:"content___2qL_d",nonePast:"nonePast___w5o1Q",rightBox:"rightBox___2jTq_"}},601:function(e,t,n){var a=n(499);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)},1197:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),d=a(r),u=n(5),f=a(u),s=n(3),c=a(s),p=n(4),_=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,d["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),m=a(h),v=n(12),y=a(v),b=n(601),E=a(b),x=n(218),w=a(x),k=n(22),L=n(2135),S=a(L),T=n(11),D=n(24),R=a(D),B=n(10),C=n(20),H=a(C),P=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.state={},n}return i(t,e),g(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.listData,n=e.pending,a=e.end,l=e.getList,o=e.pop,i=document.body.clientHeight,r=i-44-50;return m["default"].createElement("div",null,m["default"].createElement(y["default"],{onLeft:o,rightNode:m["default"].createElement(k.Link,{className:E["default"].rightBox,to:"/user/ruleVoucher"},"抵用券规则")},"我的抵用券"),m["default"].createElement("div",{className:E["default"].bg},m["default"].createElement("div",{className:E["default"].content},m["default"].createElement(R["default"],{height:r,fetch:l,isLoading:n,distance:5,endType:a,nullDom:m["default"].createElement("div",{className:E["default"].nullBox},m["default"].createElement("img",{src:S["default"],width:169,height:152})),endload:m["default"].createElement("div",null)},t&&t.map(function(e,t){var n=e.apply,a=e.end_date,l=e.start_date,o=e.amount,i=e.invest_money,r=e.type,d="投资"+i+"即可使用";return m["default"].createElement("div",{key:t},m["default"].createElement(w["default"],{title:o+"元"+r,desc1:d,desc2:n,from:l,to:a,endStyle:{backgroundColor:"rgb(125,206,159)"}}))})),m["default"].createElement(k.Link,{to:"/user/vouchersPast"},m["default"].createElement("div",{className:E["default"].pastDue},m["default"].createElement("span",null,"过期抵用券>"))))))}}]),t}(m["default"].Component),M=function(e){return{listData:e.listdata.getIn(["USER_VOUCHERS","data"]),pending:e.listdata.getIn(["USER_VOUCHERS","pending"]),end:e.listdata.getIn(["USER_VOUCHERS","pageEnd"])}},N=function(e){return{getList:function(){e({type:"USER_VOUCHERS"})},clearData:function(){e({type:"CLEAR_DATA",key:"USER_VOUCHERS"})},pop:function(){e((0,B.goBack)())}}};t["default"]=(0,T.connect)(M,N)((0,H["default"])(P))},2135:function(e,t,n){e.exports=n.p+"static/media/nodiyong.fb7343a5.png"}});