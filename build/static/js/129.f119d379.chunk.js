webpackJsonp([129],{13:[2366,24],15:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,r,d=n(2),u=a(d),c=n(5),f=a(c),_=n(3),p=a(_),g=n(4),m=a(g),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n(1),b=a(v),y=n(8),x=a(y),E=n(22),k=a(E),w=n(13),L=a(w),T=n(9),C=a(T),N=(r=s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return l(t,e),h(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,o=t.endType;if(!e)return!1;var i=e.offsetHeight;if(i<=n&&!o)a();else{var l=this.refs.scrollBox;this.setState({init:!1,allHeight:i}),this.addScroll(l)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,o=t.fetch,i=t.endType,l=this.state,s=l.allHeight,r=l.loadHeight,d=s+r-a-e;i||d<=n&&o()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,o=e.style,i=(e.fetch,e.endType),l=e.endload,s=(e.listLoad,e.listzg,e.initLoad),r=e.nullDom,d=e.titleChild,u=this.state.initLoading,c=[];o.height=a,t&&t.map(function(e,t){c.push(b["default"].cloneElement(e))});var f=void 0,_=void 0,p=void 0;return u&&(p=s),i?0!=c&&(f=l):f=n,_=0!=c.length||d?c:r,b["default"].createElement("div",{style:o,ref:"scrollBox"},b["default"].createElement("div",{ref:"listBox"},b["default"].createElement("div",null,d,_),b["default"].createElement("div",{className:(0,x["default"])(L["default"].fsLoading,this.state.init&&!i&&L["default"].block||L["default"].hidden)},this.state.init&&!i&&p||null)),b["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,x["default"])(this.state.init&&!i&&L["default"].hidden||L["default"].block)},f))}}]),t}(v.Component),s.propTypes={height:C["default"].number,fetch:C["default"].func,isLoading:C["default"].bool,loading:C["default"].object,endType:C["default"].bool,endload:C["default"].object,initLoad:C["default"].object,distance:C["default"].number,nullDom:C["default"].element,fsDom:C["default"].element,titleChild:C["default"].element},s.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:k["default"].loadingDom(),endType:!1,endload:k["default"].loadingEndDom(),initLoad:k["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:k["default"].nullDom(),titleChild:null},r);t["default"]=N},22:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=a(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,l["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),d=a(r),u=n(34),c=a(u),f=n(13),_=a(f),p=n(15),g=a(p),m=function(){function e(){o(this,e)}return s(e,null,[{key:"loadingInitDom",value:function(){var e=c["default"].BeatLoader;return d["default"].createElement("div",{className:_["default"].loading},d["default"].createElement(e,{color:"#00a6e2",size:"20px"}),d["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=c["default"].ClipLoader;return d["default"].createElement("div",{className:_["default"].loadingList},d["default"].createElement(e,{color:"#00a6e2",size:"20px"}),d["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return d["default"].createElement("div",{className:_["default"].loadingEnd},d["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return d["default"].createElement("div",{className:_["default"].nullIcon},d["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=m},24:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},1102:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),r=a(s),d=n(5),u=a(d),c=n(3),f=a(c),_=n(4),p=a(_),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=n(1),h=a(m),v=n(12),b=a(v),y=n(26),x=a(y),E=n(10),k=n(20),w=a(k),L=n(2228),T=a(L),C=n(11),N=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return n.push=function(e){n.props.push(e)},n.loadingDom=function(){return h["default"].createElement(x["default"],null)},n.loadEndDom=function(){var e=n.props,t=e.listData,a=e.pending,o=e.end,i=document.body.clientHeight-44;return h["default"].createElement("div",{className:T["default"].messageContent},h["default"].createElement(w["default"],{height:i,ref:"scroll",fetch:function(){n.props.getNoticeList()},isLoading:a,distance:20,endType:o},t&&t.map(function(e,t){var a=e.id,o=e.title,i=e.status,l=e.ctime,s=(e.day,e.info);return h["default"].createElement("div",{className:1==i&&T["default"].massageList||T["default"].active,key:t,onClick:function(){n.push(a)}},h["default"].createElement("div",{className:T["default"].massageOne},h["default"].createElement("div",{className:T["default"].massageTitle},h["default"].createElement("div",{className:T["default"].Link},h["default"].createElement("p",{className:T["default"].massageNew},o))),h["default"].createElement("div",{className:T["default"].massageBody},s),h["default"].createElement("div",{className:T["default"].massagefooter},l),h["default"].createElement("span",{className:T["default"].glyphiconChevronRight})))})))},n.state={init:!1},n}return l(t,e),g(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){this.props.clearData()}},{key:"componentWillReceiveProps",value:function(){this.refs.scroll.setState({init:!0,first:!1})}},{key:"render",value:function(){var e=this.props.pop,t=void 0;return t=this.loadEndDom(),h["default"].createElement("div",{className:T["default"].announceMent},h["default"].createElement("div",{className:T["default"].announceMentHeader},h["default"].createElement(b["default"],{title:"商城通知",onLeft:e,backgroundColor:"#fff",color:"#666"})),t)}}]),t}(m.Component),A=function(e,t){return{listData:e.listdata.getIn(["GET_NOTICE_LIST","data"]),pending:e.listdata.getIn(["GET_NOTICE_LIST","pending"]),end:e.listdata.getIn(["GET_NOTICE_LIST","pageEnd"])}},I=function(e,t){return{getNoticeList:function(){e({type:"GET_NOTICE_LIST"})},clearData:function(){e({type:"CLEAR_DATA",key:"GET_NOTICE_LIST"})},pop:function(){e((0,C.goBack)())},push:function(t){e((0,C.push)("/find/shoppingMall/shopMessageDetail/"+t))}}};t["default"]=(0,E.connect)(A,I)(N)},1676:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,'.announceMent___8PSXY{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.announceMentHeader___1poJ3{position:relative;z-index:999}.messageContent___3eVBb{background-color:#f0eff5}.messageContent___3eVBb .massageList___TjKd6{background-color:#fff;width:90%;margin:0 auto;border-radius:10px;margin-top:20px;padding-left:15px;border-top:2px solid #ccc}.messageContent___3eVBb .massageOne____AAeJ{position:relative}.active___2XOJP{background-color:#fff;width:90%;margin:0 auto;border-radius:10px;margin-top:20px;padding-left:15px;border-top:2px solid #fe684b}.massageOne____AAeJ .massageTitle___y4-mY{padding:15px 0 10px}.massageOne____AAeJ .massageIcon___IavUm{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne____AAeJ .massageNew___39xQU{display:inline-block;font-size:16px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne____AAeJ .notice___TGOCE{background-color:#f76260}.massageOne____AAeJ .system___7p0jZ{background-color:#59c5ec}.massageOne____AAeJ .massageBody___1PqjT{padding-bottom:10px;margin-bottom:10px;font-size:12px;color:#aaa;line-height:18px;height:36px;width:94%;padding-right:32px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.massageOne____AAeJ .massagefooter___3_anU{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne____AAeJ .glyphiconChevronRight___3i3xt{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne____AAeJ .glyphiconChevronRight___3i3xt:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne____AAeJ .glyphiconChevronRight___3i3xt:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___sJktc{color:#000}',""]),t.locals={announceMent:"announceMent___8PSXY",announceMentHeader:"announceMentHeader___1poJ3",messageContent:"messageContent___3eVBb",massageList:"massageList___TjKd6",massageOne:"massageOne____AAeJ",active:"active___2XOJP",massageTitle:"massageTitle___y4-mY",massageIcon:"massageIcon___IavUm",massageNew:"massageNew___39xQU",notice:"notice___TGOCE",system:"system___7p0jZ",massageBody:"massageBody___1PqjT",massagefooter:"massagefooter___3_anU",glyphiconChevronRight:"glyphiconChevronRight___3i3xt",Link:"Link___sJktc"}},2228:function(e,t,n){var a=n(1676);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)}});