webpackJsonp([121],{14:[2579,26],18:function(e,t,a){e.exports=a.p+"static/media/record.28c4700d.png"},24:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,d,r=a(2),u=n(r),f=a(5),c=n(f),_=a(3),p=n(_),g=a(4),m=n(g),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),y=n(v),E=a(8),b=n(E),x=a(25),T=n(x),k=a(14),w=n(k),S=a(9),L=n(S),M=(d=s=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},a}return l(t,e),h(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.init;e.isLoading&&n||!this.state.first&&n?!function(){var e=a;setTimeout(function(){e.getListall()},0),!a.state.first&&n&&a.setState({first:!0})}():e.isLoading&&!n&&setTimeout(function(){var e=a.refs.listBox.offsetHeight;a.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,a=t.height,n=t.fetch,i=t.endType;if(!e)return!1;var o=e.offsetHeight;if(o<=a&&!i)n();else{var l=this.refs.scrollBox;this.setState({init:!1,allHeight:o}),this.addScroll(l)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var a=e.scrollTop;t.next(a)})}},{key:"next",value:function(e){var t=this.props,a=t.distance,n=t.height,i=t.fetch,o=t.endType,l=this.state,s=l.allHeight,d=l.loadHeight,r=s+d-n-e;o||r<=a&&i()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.loading,n=e.height,i=e.style,o=(e.fetch,e.endType),l=e.endload,s=(e.listLoad,e.listzg,e.initLoad),d=e.nullDom,r=e.titleChild,u=this.state.initLoading,f=[];i.height=n,t&&t.map(function(e,t){f.push(y["default"].cloneElement(e))});var c=void 0,_=void 0,p=void 0;return u&&(p=s),o?0!=f&&(c=l):c=a,_=0!=f.length||r?f:d,y["default"].createElement("div",{style:i,ref:"scrollBox"},y["default"].createElement("div",{ref:"listBox"},y["default"].createElement("div",null,r,_),y["default"].createElement("div",{className:(0,b["default"])(w["default"].fsLoading,this.state.init&&!o&&w["default"].block||w["default"].hidden)},this.state.init&&!o&&p||null)),y["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,b["default"])(this.state.init&&!o&&w["default"].hidden||w["default"].block)},c))}}]),t}(v.Component),s.propTypes={height:L["default"].number,fetch:L["default"].func,isLoading:L["default"].bool,loading:L["default"].object,endType:L["default"].bool,endload:L["default"].object,initLoad:L["default"].object,distance:L["default"].number,nullDom:L["default"].element,fsDom:L["default"].element,titleChild:L["default"].element},s.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:T["default"].loadingDom(),endType:!1,endload:T["default"].loadingEndDom(),initLoad:T["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:T["default"].nullDom(),titleChild:null},d);t["default"]=M},25:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),l=n(o),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),r=n(d),u=a(38),f=n(u),c=a(14),_=n(c),p=a(18),g=n(p),m=function(){function e(){i(this,e)}return s(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return r["default"].createElement("div",{className:_["default"].loading},r["default"].createElement(e,{color:"#00a6e2",size:"20px"}),r["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return r["default"].createElement("div",{className:_["default"].loadingList},r["default"].createElement(e,{color:"#00a6e2",size:"20px"}),r["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return r["default"].createElement("div",{className:_["default"].loadingEnd},r["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return r["default"].createElement("div",{className:_["default"].nullIcon},r["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=m},26:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},1058:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),d=n(s),r=a(5),u=n(r),f=a(3),c=n(f),_=a(4),p=n(_),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),h=n(m),v=a(12),y=n(v),E=a(11),b=a(8),x=n(b),T=a(24),k=n(T),w=a(2434),S=n(w),L=a(10),M=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.oneDom=function(e,t,n){var i=e.title,o=e.content,l=(e.description,e.date),s=(e.msgKey,e.id,e.type),d=e.is_read,r=void 0,u=void 0;n&&(r=h["default"].createElement("span",{className:S["default"].glyphiconChevronRight}));var f=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,x["default"])(S["default"].massageIcon,S["default"].system)},"0"==d&&"New"||1==s&&"系统"||"公告"),h["default"].createElement("span",{className:S["default"].massageNew},i));return 1!==s&&(u=a.props.push,f=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,x["default"])(S["default"].massageIcon,S["default"].notice)},"0"==d&&"New"||1==s&&"系统"||"公告"),h["default"].createElement("span",{className:S["default"].massageNew},i))),h["default"].createElement("div",{className:S["default"].massageList,key:t,onClick:function(){u&&u()}},h["default"].createElement("div",{className:S["default"].massageOne},h["default"].createElement("div",{className:S["default"].massageTitle},f),h["default"].createElement("div",{className:S["default"].massageBody,dangerouslySetInnerHTML:{__html:o}}),h["default"].createElement("div",{className:S["default"].massagefooter},l),r))},a}return l(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getNotice(),this.props.setRead()}},{key:"componentWillUnmount",value:function(){this.props.clearData("FETCH_MY_MASSAGE_S"),this.props.clearData("GET_NOTICE")}},{key:"list",value:function(){var e=this,t=this.props,a=t.listData,n=t.pending,i=t.end,o=t.noticeData,l=this.oneDom(o,-1,!0),s=document.body.clientHeight-44;return h["default"].createElement(k["default"],{height:s,fetch:function(){e.props.getList(1)},isLoading:n,distance:20,endType:i,titleChild:l},a&&a.map(function(t,a){return e.oneDom(t,a)}))}},{key:"render",value:function(){var e=this.props,t=e.noticeData,a=e.pop,n=void 0;return t&&(n=this.list()),h["default"].createElement("div",{className:S["default"].findMessage},h["default"].createElement("div",{className:S["default"].findMessageHeader},h["default"].createElement(y["default"],{title:"商城通知",onLeft:a})),h["default"].createElement("div",{className:S["default"].messageContent},n))}}]),t}(m.Component),C=function(e,t){return{noticeData:e.listdata.getIn(["GET_NOTICE","data","0"]),listData:e.listdata.getIn(["FETCH_MY_MASSAGE_S","data"]),pending:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pending"]),end:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pageEnd"])}},N=function(e,t){return{getNotice:function(){e({type:"GET_NOTICE"})},setRead:function(){e({type:"SET_READ",params:[{type:1}]})},getList:function(t){e({type:"FETCH_MY_MASSAGE_S",params:[t]})},clearData:function(t){e({type:"CLEAR_DATA",key:t})},pop:function(){e((0,L.goBack)())},push:function(){e((0,L.push)("/find/announcement"))}}};t["default"]=(0,E.connect)(C,N)(M)},1625:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'.findMessage___1Vy4C{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.findMessageHeader___1IvTc{position:relative;z-index:999}.messageContent___2az_H{background-color:#f0eff5}.messageContent___2az_H .massageList___PtuF2{background-color:#fff;padding-left:15px}.messageContent___2az_H .massageOne___1ScvT{border-bottom:1px solid #efefef;position:relative}.massageOne___1ScvT .massageTitle___3ETfD{padding:15px 0 10px}.massageOne___1ScvT .massageIcon___2llSl{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___1ScvT .massageNew___Wy8Mg{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___1ScvT .notice___E32-M{background-color:#f76260}.massageOne___1ScvT .system___1tZ-F{background-color:#59c5ec}.massageOne___1ScvT .massageBody___Y12kr{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___1ScvT .massagefooter___1WIQf{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___1ScvT .glyphiconChevronRight___1Z4Os{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___1ScvT .glyphiconChevronRight___1Z4Os:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___1ScvT .glyphiconChevronRight___1Z4Os:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___pqv4w{color:#000}',""]),t.locals={findMessage:"findMessage___1Vy4C",findMessageHeader:"findMessageHeader___1IvTc",messageContent:"messageContent___2az_H",massageList:"massageList___PtuF2",massageOne:"massageOne___1ScvT",massageTitle:"massageTitle___3ETfD",massageIcon:"massageIcon___2llSl",massageNew:"massageNew___Wy8Mg",notice:"notice___E32-M",system:"system___1tZ-F",massageBody:"massageBody___Y12kr",massagefooter:"massagefooter___1WIQf",glyphiconChevronRight:"glyphiconChevronRight___1Z4Os",Link:"Link___pqv4w"}},2434:function(e,t,a){var n=a(1625);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});