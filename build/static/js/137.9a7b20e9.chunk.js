webpackJsonp([137],{13:[2366,24],15:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d,r,f=n(2),u=a(f),s=n(5),_=a(s),c=n(3),p=a(c),m=n(4),h=a(m),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=n(1),b=a(y),v=n(8),x=a(v),E=n(22),L=a(E),k=n(13),w=a(k),D=n(9),T=a(D),S=(r=d=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(t,e),g(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,i=t.endType;if(!e)return!1;var l=e.offsetHeight;if(l<=n&&!i)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:l}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,i=t.fetch,l=t.endType,o=this.state,d=o.allHeight,r=o.loadHeight,f=d+r-a-e;l||f<=n&&i()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,i=e.style,l=(e.fetch,e.endType),o=e.endload,d=(e.listLoad,e.listzg,e.initLoad),r=e.nullDom,f=e.titleChild,u=this.state.initLoading,s=[];i.height=a,t&&t.map(function(e,t){s.push(b["default"].cloneElement(e))});var _=void 0,c=void 0,p=void 0;return u&&(p=d),l?0!=s&&(_=o):_=n,c=0!=s.length||f?s:r,b["default"].createElement("div",{style:i,ref:"scrollBox"},b["default"].createElement("div",{ref:"listBox"},b["default"].createElement("div",null,f,c),b["default"].createElement("div",{className:(0,x["default"])(w["default"].fsLoading,this.state.init&&!l&&w["default"].block||w["default"].hidden)},this.state.init&&!l&&p||null)),b["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,x["default"])(this.state.init&&!l&&w["default"].hidden||w["default"].block)},_))}}]),t}(y.Component),d.propTypes={height:T["default"].number,fetch:T["default"].func,isLoading:T["default"].bool,loading:T["default"].object,endType:T["default"].bool,endload:T["default"].object,initLoad:T["default"].object,distance:T["default"].number,nullDom:T["default"].element,fsDom:T["default"].element,titleChild:T["default"].element},d.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:L["default"].loadingDom(),endType:!1,endload:L["default"].loadingEndDom(),initLoad:L["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:L["default"].nullDom(),titleChild:null},r);t["default"]=S},22:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),o=a(l),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),f=a(r),u=n(34),s=a(u),_=n(13),c=a(_),p=n(15),m=a(p),h=function(){function e(){i(this,e)}return d(e,null,[{key:"loadingInitDom",value:function(){var e=s["default"].BeatLoader;return f["default"].createElement("div",{className:c["default"].loading},f["default"].createElement(e,{color:"#00a6e2",size:"20px"}),f["default"].createElement("p",{className:c["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=s["default"].ClipLoader;return f["default"].createElement("div",{className:c["default"].loadingList},f["default"].createElement(e,{color:"#00a6e2",size:"20px"}),f["default"].createElement("p",{className:c["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return f["default"].createElement("div",{className:c["default"].loadingEnd},f["default"].createElement("span",{className:c["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return f["default"].createElement("div",{className:c["default"].nullIcon},f["default"].createElement("img",{src:m["default"]}))}}]),e}();t["default"]=h},24:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},1057:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2),r=a(d),f=n(5),u=a(f),s=n(3),_=a(s),c=n(4),p=a(c),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),g=a(h),y=n(2139),b=a(y),v=n(12),x=a(v),E=n(20),L=a(E),k=n(10),w=n(11),D=n(23),T=a(D),S=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return n.state={init:!1},n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0})}},{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"render",value:function(){var e=this,t=document.body.clientHeight-44,n=this.props,a=n.listData,i=n.pending,l=n.end,o=n.pop;return g["default"].createElement("div",{className:b["default"].body},g["default"].createElement(x["default"],{onLeft:o},"出借记录"),this.state.init&&g["default"].createElement(L["default"],{height:t,fetch:function(){e.props.gitData(e.props.params.id)},isLoading:i,distance:20,endType:l},a&&a.map(function(e,t){return g["default"].createElement("div",{key:t,className:b["default"].data_list_item},g["default"].createElement("div",{className:b["default"].item},g["default"].createElement("div",{className:b["default"].left},g["default"].createElement("p",{className:b["default"].name},e.userphone),g["default"].createElement("p",{className:b["default"].time},T["default"].formatDate("yyyy-MM-dd",new Date(1e3*e.add_time)))),g["default"].createElement("div",{className:b["default"].right},"￥",e.money)))})))}}]),t}(h.Component),N=function(e){return{listData:e.listdata.getIn(["YOU_INVEST_RECORD","data"]),pending:e.listdata.getIn(["YOU_INVEST_RECORD","pending"]),end:e.listdata.getIn(["YOU_INVEST_RECORD","pageEnd"])}},O=function(e,t){return{pop:function(){e((0,w.goBack)())},gitData:function(t){e({type:"YOU_INVEST_RECORD",params:[{id:t}]})},clean:function(){e({type:"CLEAR_DATA",key:"YOU_INVEST_RECORD"})}}};t["default"]=(0,k.connect)(N,O)(S)},1586:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".body___2LAhf{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___2LAhf .data_list_item___10lO6{margin-top:15px;background-color:#fff;padding-left:10px}.body___2LAhf .data_list_item___10lO6 .item___3oxJd{height:60px;border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.body___2LAhf .data_list_item___10lO6 .item___3oxJd:last-child{border-bottom:none}.body___2LAhf .data_list_item___10lO6 .item___3oxJd .left___1p9FS{-webkit-box-flex:1;-ms-flex:1;flex:1}.body___2LAhf .data_list_item___10lO6 .item___3oxJd .left___1p9FS .name___219jZ{font-size:18px;margin-top:10px;margin-bottom:6px;color:#898989}.body___2LAhf .data_list_item___10lO6 .item___3oxJd .left___1p9FS .time___3Awro{font-size:12px;color:#aaa}.body___2LAhf .data_list_item___10lO6 .item___3oxJd .right___2Vfgq{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:60px;text-align:right;color:#f70;padding-right:10px;font-size:20px}",""]),t.locals={body:"body___2LAhf",data_list_item:"data_list_item___10lO6",item:"item___3oxJd",left:"left___1p9FS",name:"name___219jZ",time:"time___3Awro",right:"right___2Vfgq"}},2139:[2365,1586]});