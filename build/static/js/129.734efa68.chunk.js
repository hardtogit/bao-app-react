webpackJsonp([129],{14:[2579,26],18:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d,r,u=n(2),f=a(u),s=n(5),c=a(s),_=n(3),p=a(_),g=n(4),m=a(g),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=n(1),v=a(y),b=n(8),E=a(b),x=n(25),k=a(x),D=n(14),w=a(D),L=n(9),T=a(L),H=(r=d=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(t,e),h(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,i=t.endType;if(!e)return!1;var l=e.offsetHeight;if(l<=n&&!i)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:l}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,i=t.fetch,l=t.endType,o=this.state,d=o.allHeight,r=o.loadHeight,u=d+r-a-e;l||u<=n&&i()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,i=e.style,l=(e.fetch,e.endType),o=e.endload,d=(e.listLoad,e.listzg,e.initLoad),r=e.nullDom,u=e.titleChild,f=this.state.initLoading,s=[];i.height=a,t&&t.map(function(e,t){s.push(v["default"].cloneElement(e))});var c=void 0,_=void 0,p=void 0;return f&&(p=d),l?0!=s&&(c=o):c=n,_=0!=s.length||u?s:r,v["default"].createElement("div",{style:i,ref:"scrollBox"},v["default"].createElement("div",{ref:"listBox"},v["default"].createElement("div",null,u,_),v["default"].createElement("div",{className:(0,E["default"])(w["default"].fsLoading,this.state.init&&!l&&w["default"].block||w["default"].hidden)},this.state.init&&!l&&p||null)),v["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!l&&w["default"].hidden||w["default"].block)},c))}}]),t}(y.Component),d.propTypes={height:T["default"].number,fetch:T["default"].func,isLoading:T["default"].bool,loading:T["default"].object,endType:T["default"].bool,endload:T["default"].object,initLoad:T["default"].object,distance:T["default"].number,nullDom:T["default"].element,fsDom:T["default"].element,titleChild:T["default"].element},d.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:k["default"].loadingDom(),endType:!1,endload:k["default"].loadingEndDom(),initLoad:k["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:k["default"].nullDom(),titleChild:null},r);t["default"]=H},25:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),o=a(l),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),u=a(r),f=n(38),s=a(f),c=n(14),_=a(c),p=n(18),g=a(p),m=function(){function e(){i(this,e)}return d(e,null,[{key:"loadingInitDom",value:function(){var e=s["default"].BeatLoader;return u["default"].createElement("div",{className:_["default"].loading},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=s["default"].ClipLoader;return u["default"].createElement("div",{className:_["default"].loadingList},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return u["default"].createElement("div",{className:_["default"].loadingEnd},u["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return u["default"].createElement("div",{className:_["default"].nullIcon},u["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=m},26:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},1015:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2),r=a(d),u=n(5),f=a(u),s=n(3),c=a(s),_=n(4),p=a(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=n(1),h=a(m),y=n(2351),v=a(y),b=n(12),E=a(b),x=n(24),k=a(x),D=n(11),w=n(10),L=function(e){function t(){return i(this,t),l(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return o(t,e),g(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this,t=document.body.clientHeight-108,n=this.props,a=n.data,i=n.pending,l=n.end,o=n.push,d=n.pop;return h["default"].createElement("div",{className:v["default"].body},h["default"].createElement(E["default"],{onLeft:d},"标的详情"),h["default"].createElement("div",{className:v["default"].header},"为保护借款人信息，仅展示部分商品匹配标的信息。投资聚点+后可在个人中心中查看已购买项目的匹配记录。"),h["default"].createElement(k["default"],{height:t,fetch:function(){e.props.gitData(e.props.params.id)},isLoading:i,distance:20,endType:l},a&&a.map(function(e,t){return h["default"].createElement("div",{key:t,className:v["default"].data_list_item,onClick:function(){o("/gatherBidDetail/"+e.edid)}},h["default"].createElement("div",{className:v["default"].item,style:{paddingTop:"12px"}},h["default"].createElement("div",{className:v["default"].left},e.borrow_name),h["default"].createElement("div",{className:v["default"].right},e.borrow_duration,"个月")),h["default"].createElement("div",{className:v["default"].item,style:{paddingTop:"6px"}},h["default"].createElement("div",{className:v["default"].left},e.borrow_use),h["default"].createElement("div",{className:v["default"].right},"借款金额: ",h["default"].createElement("span",{className:v["default"].money},e.borrow_money),"元")))})))}}]),t}(m.Component),T=function(e){return{data:e.listdata.getIn(["GATHER_BID_LIST","data"]),pending:e.listdata.getIn(["GATHER_BID_LIST","pending"]),end:e.listdata.getIn(["GATHER_BID_LIST","pageEnd"])}},H=function(e,t){return{pop:function(){e((0,w.goBack)())},gitData:function(t){e({type:"GATHER_BID_LIST",params:[{id:t}]})},push:function(t){e((0,w.push)(t))},clearData:function(){e({type:"CLEAR_DATA",key:"GATHER_BID_LIST"})}}};t["default"]=(0,D.connect)(T,H)(L)},1541:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".body___3mHpD{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___3mHpD .header___3XwjY{background-color:#00a6e2;color:#fff;padding:12px 15px 14px;font-size:14px;line-height:1.4}.body___3mHpD .data_list_item___3Dja-{font-size:15px;height:70px;margin-top:10px;background-color:#fff}.body___3mHpD .data_list_item___3Dja- .item___3duEr{display:-webkit-box;display:-ms-flexbox;display:flex;height:35px}.body___3mHpD .data_list_item___3Dja- .item___3duEr .left___2mKrX{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:15px}.body___3mHpD .data_list_item___3Dja- .item___3duEr .right___36d_g{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.body___3mHpD .data_list_item___3Dja- .item___3duEr .right___36d_g .money___1AUoz{color:#00a6e2}",""]),t.locals={body:"body___3mHpD",header:"header___3XwjY",data_list_item:"data_list_item___3Dja-",item:"item___3duEr",left:"left___2mKrX",right:"right___36d_g",money:"money___1AUoz"}},2351:[2578,1541]});