webpackJsonp([104],{13:[2320,25],17:function(e,t,a){e.exports=a.p+"static/media/record.28c4700d.png"},23:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,d,u=a(2),s=n(u),f=a(5),c=n(f),_=a(3),p=n(_),g=a(4),h=n(g),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),y=n(v),b=a(8),E=n(b),x=a(24),w=n(x),k=a(13),T=n(k),L=a(9),H=n(L),N=(d=r=function(e){function t(e){i(this,t);var a=l(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},a}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.init;e.isLoading&&n||!this.state.first&&n?!function(){var e=a;setTimeout(function(){e.getListall()},0),!a.state.first&&n&&a.setState({first:!0})}():e.isLoading&&!n&&setTimeout(function(){var e=a.refs.listBox.offsetHeight;a.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,a=t.height,n=t.fetch,i=t.endType;if(!e)return!1;var l=e.offsetHeight;if(l<=a&&!i)n();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:l}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var a=e.scrollTop;t.next(a)})}},{key:"next",value:function(e){var t=this.props,a=t.distance,n=t.height,i=t.fetch,l=t.endType,o=this.state,r=o.allHeight,d=o.loadHeight,u=r+d-n-e;l||u<=a&&i()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.loading,n=e.height,i=e.style,l=(e.fetch,e.endType),o=e.endload,r=(e.listLoad,e.listzg,e.initLoad),d=e.nullDom,u=e.titleChild,s=this.state.initLoading,f=[];i.height=n,t&&t.map(function(e,t){f.push(y["default"].cloneElement(e))});var c=void 0,_=void 0,p=void 0;return s&&(p=r),l?0!=f&&(c=o):c=a,_=0!=f.length||u?f:d,y["default"].createElement("div",{style:i,ref:"scrollBox"},y["default"].createElement("div",{ref:"listBox"},y["default"].createElement("div",null,u,_),y["default"].createElement("div",{className:(0,E["default"])(T["default"].fsLoading,this.state.init&&!l&&T["default"].block||T["default"].hidden)},this.state.init&&!l&&p||null)),y["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!l&&T["default"].hidden||T["default"].block)},c))}}]),t}(v.Component),r.propTypes={height:H["default"].number,fetch:H["default"].func,isLoading:H["default"].bool,loading:H["default"].object,endType:H["default"].bool,endload:H["default"].object,initLoad:H["default"].object,distance:H["default"].number,nullDom:H["default"].element,fsDom:H["default"].element,titleChild:H["default"].element},r.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:w["default"].loadingDom(),endType:!1,endload:w["default"].loadingEndDom(),initLoad:w["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:w["default"].nullDom(),titleChild:null},d);t["default"]=N},24:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),o=n(l),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),u=n(d),s=a(36),f=n(s),c=a(13),_=n(c),p=a(17),g=n(p),h=function(){function e(){i(this,e)}return r(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return u["default"].createElement("div",{className:_["default"].loading},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return u["default"].createElement("div",{className:_["default"].loadingList},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return u["default"].createElement("div",{className:_["default"].loadingEnd},u["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return u["default"].createElement("div",{className:_["default"].nullIcon},u["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=h},25:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},147:function(e,t,a){e.exports=a.p+"static/media/ticket.50d0e972.png"},966:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),d=n(r),u=a(5),s=n(u),f=a(3),c=n(f),_=a(4),p=n(_),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),m=n(h),v=a(12),y=n(v),b=a(11),E=(a(21),a(8)),x=(n(E),a(23)),w=(n(x),a(147)),k=(n(w),a(2137)),T=n(k),L=a(10),H=function(e){function t(e){i(this,t);var a=l(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.toActivity=function(e){window.location.href=e},a}return o(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getHotActivityList()}}]),g(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.pop,n=t.activityData,i=[];return n&&n.data.map(function(t,a){1==t.status?i.push(m["default"].createElement("li",{onClick:t.status&&function(){e.toActivity(t.url_wap)},key:a},m["default"].createElement("div",{className:T["default"].acWraper},m["default"].createElement("div",{className:1!=t.status&&T["default"].shadow},"0"==t.status&&"活动未开始"||"2"==t.status&&"活动已结束"),m["default"].createElement("img",{src:t.image_wap})),m["default"].createElement("p",{className:T["default"].activityTitle},t.title),m["default"].createElement("p",{className:T["default"].activityTime},t.time_str))):i.push(m["default"].createElement("li",null,m["default"].createElement("div",{className:T["default"].acWraper},m["default"].createElement("div",{className:1!=t.status&&T["default"].shadow},"0"==t.status&&"活动未开始"||"2"==t.status&&"活动已结束"),m["default"].createElement("img",{src:t.image_wap})),m["default"].createElement("p",{className:T["default"].activityTitle},t.title),m["default"].createElement("p",{className:T["default"].activityTime},t.time_str)))}),m["default"].createElement("div",{className:T["default"].findMessage},m["default"].createElement("div",{className:T["default"].findMessageHeader},m["default"].createElement(y["default"],{title:"热门活动",backgroundColor:"#fff",color:"#666",onLeft:a})),m["default"].createElement("div",{className:T["default"].messageContent},m["default"].createElement("ul",{className:T["default"].hotActive},i)))}}]),t}(h.Component),N=function(e,t){return{activityData:e.infodata.getIn(["GET_HOT_ACTIVITY","data"])}},M=function(e,t){return{pop:function(){e((0,L.goBack)())},getHotActivityList:function(){e({type:"GET_HOT_ACTIVITY"})},push:function(t){e((0,L.push)(t))}}};t["default"]=(0,b.connect)(N,M)(H)},1537:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".findMessage___3JcoL{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.findMessageHeader___-KVyr{position:relative;z-index:999}.messageContent___1oYXH{width:100%;background-color:#fff;padding-top:20px}.hotActive___2VgW-{list-style:none;text-align:center;margin-top:20px;padding-bottom:40px}.hotActive___2VgW- li .acWraper___3bO3a{width:90%;height:74px;margin:20px auto;margin-bottom:5px;border-radius:35px;overflow:hidden;position:relative}.hotActive___2VgW- li .acWraper___3bO3a .shadow___2U1AO{width:100%;height:74px;border-radius:35px;background-color:#000;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:100;color:#fff;text-align:center;line-height:74px}.hotActive___2VgW- li img{width:100%;height:100%;margin:0 auto}.activityTitle___gRnhW{font-size:14px;color:#333}.activityTime___3_ukX{font-size:12px;color:#707070}",""]),t.locals={findMessage:"findMessage___3JcoL",findMessageHeader:"findMessageHeader___-KVyr",messageContent:"messageContent___1oYXH",hotActive:"hotActive___2VgW-",acWraper:"acWraper___3bO3a",shadow:"shadow___2U1AO",activityTitle:"activityTitle___gRnhW",activityTime:"activityTime___3_ukX"}},2137:function(e,t,a){var n=a(1537);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});