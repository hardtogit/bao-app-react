webpackJsonp([122],{13:[2320,25],17:function(e,t,a){e.exports=a.p+"static/media/record.28c4700d.png"},23:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,d,r=a(2),u=n(r),f=a(5),c=n(f),_=a(3),p=n(_),g=a(4),m=n(g),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),y=n(v),b=a(8),E=n(b),x=a(24),k=n(x),C=a(13),L=n(C),T=a(9),w=n(T),N=(d=s=function(e){function t(e){o(this,t);var a=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},a}return l(t,e),h(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.init;e.isLoading&&n||!this.state.first&&n?!function(){var e=a;setTimeout(function(){e.getListall()},0),!a.state.first&&n&&a.setState({first:!0})}():e.isLoading&&!n&&setTimeout(function(){var e=a.refs.listBox.offsetHeight;a.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,a=t.height,n=t.fetch,o=t.endType;if(!e)return!1;var i=e.offsetHeight;if(i<=a&&!o)n();else{var l=this.refs.scrollBox;this.setState({init:!1,allHeight:i}),this.addScroll(l)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var a=e.scrollTop;t.next(a)})}},{key:"next",value:function(e){var t=this.props,a=t.distance,n=t.height,o=t.fetch,i=t.endType,l=this.state,s=l.allHeight,d=l.loadHeight,r=s+d-n-e;i||r<=a&&o()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.loading,n=e.height,o=e.style,i=(e.fetch,e.endType),l=e.endload,s=(e.listLoad,e.listzg,e.initLoad),d=e.nullDom,r=e.titleChild,u=this.state.initLoading,f=[];o.height=n,t&&t.map(function(e,t){f.push(y["default"].cloneElement(e))});var c=void 0,_=void 0,p=void 0;return u&&(p=s),i?0!=f&&(c=l):c=a,_=0!=f.length||r?f:d,y["default"].createElement("div",{style:o,ref:"scrollBox"},y["default"].createElement("div",{ref:"listBox"},y["default"].createElement("div",null,r,_),y["default"].createElement("div",{className:(0,E["default"])(L["default"].fsLoading,this.state.init&&!i&&L["default"].block||L["default"].hidden)},this.state.init&&!i&&p||null)),y["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!i&&L["default"].hidden||L["default"].block)},c))}}]),t}(v.Component),s.propTypes={height:w["default"].number,fetch:w["default"].func,isLoading:w["default"].bool,loading:w["default"].object,endType:w["default"].bool,endload:w["default"].object,initLoad:w["default"].object,distance:w["default"].number,nullDom:w["default"].element,fsDom:w["default"].element,titleChild:w["default"].element},s.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:k["default"].loadingDom(),endType:!1,endload:k["default"].loadingEndDom(),initLoad:k["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:k["default"].nullDom(),titleChild:null},d);t["default"]=N},24:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),l=n(i),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),r=n(d),u=a(36),f=n(u),c=a(13),_=n(c),p=a(17),g=n(p),m=function(){function e(){o(this,e)}return s(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return r["default"].createElement("div",{className:_["default"].loading},r["default"].createElement(e,{color:"#00a6e2",size:"20px"}),r["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return r["default"].createElement("div",{className:_["default"].loadingList},r["default"].createElement(e,{color:"#00a6e2",size:"20px"}),r["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return r["default"].createElement("div",{className:_["default"].loadingEnd},r["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return r["default"].createElement("div",{className:_["default"].nullIcon},r["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=m},25:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".fsLoading___2j0UF{z-index:9999;background-color:#fff}.fsLoading___2j0UF,.nullIcon___2APKK{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___2APKK{text-align:center}.nullIcon___2APKK img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___2EPfg{display:block}.hidden___2pEyZ{display:none}.loading___3217S{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2FGz3{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___3jpNl{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___3jpNl .loadingText___2FGz3{margin-top:2px}.loadingEnd___2shs7,.loadingEndB___Cd-Tk{padding:8px;text-align:center}.loadingEndB___Cd-Tk{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___2j0UF",nullIcon:"nullIcon___2APKK",block:"block___2EPfg",hidden:"hidden___2pEyZ",loading:"loading___3217S",loadingText:"loadingText___2FGz3",loadingList:"loadingList___3jpNl",loadingEnd:"loadingEnd___2shs7",loadingEndB:"loadingEndB___Cd-Tk"}},974:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),d=n(s),r=a(5),u=n(r),f=a(3),c=n(f),_=a(4),p=n(_),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),h=n(m),v=a(12),y=n(v),b=a(11),E=a(8),x=n(E),k=a(23),C=n(k),L=a(2141),T=n(L),w=a(10),N=function(e){function t(e){o(this,t);var a=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.oneDom=function(e,t,n){var o=e.title,i=e.content,l=(e.description,e.date),s=(e.msgKey,e.id,e.type),d=e.is_read,r=void 0,u=void 0;n&&(r=h["default"].createElement("span",{className:T["default"].glyphiconChevronRight}));var f=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,x["default"])(T["default"].massageIcon,T["default"].system)},"0"==d&&"New"||1==s&&"系统"||"公告"),h["default"].createElement("span",{className:T["default"].massageNew},o));return 1!==s&&(u=a.props.push,f=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,x["default"])(T["default"].massageIcon,T["default"].notice)},"0"==d&&"New"||1==s&&"系统"||"公告"),h["default"].createElement("span",{className:T["default"].massageNew},o))),h["default"].createElement("div",{className:T["default"].massageList,key:t,onClick:function(){u&&u()}},h["default"].createElement("div",{className:T["default"].massageOne},h["default"].createElement("div",{className:T["default"].massageTitle},f),h["default"].createElement("div",{className:T["default"].massageBody,dangerouslySetInnerHTML:{__html:i}}),h["default"].createElement("div",{className:T["default"].massagefooter},l),r))},a}return l(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getNotice(),this.props.setRead()}},{key:"componentWillUnmount",value:function(){this.props.clearData("FETCH_MY_MASSAGE_S"),this.props.clearData("GET_NOTICE")}},{key:"list",value:function(){var e=this,t=this.props,a=t.listData,n=t.pending,o=t.end,i=t.noticeData,l=this.oneDom(i,-1,!0),s=document.body.clientHeight-44;return h["default"].createElement(C["default"],{height:s,fetch:function(){e.props.getList(1)},isLoading:n,distance:20,endType:o,titleChild:l},a&&a.map(function(t,a){return e.oneDom(t,a)}))}},{key:"render",value:function(){var e=this.props,t=e.noticeData,a=e.pop,n=void 0;return t&&(n=this.list()),h["default"].createElement("div",{className:T["default"].findMessage},h["default"].createElement("div",{className:T["default"].findMessageHeader},h["default"].createElement(y["default"],{title:"商城首页",onLeft:a})),h["default"].createElement("div",{className:T["default"].messageContent},n))}}]),t}(m.Component),B=function(e,t){return{noticeData:e.listdata.getIn(["GET_NOTICE","data","0"]),listData:e.listdata.getIn(["FETCH_MY_MASSAGE_S","data"]),pending:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pending"]),end:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pageEnd"])}},S=function(e,t){return{getNotice:function(){e({type:"GET_NOTICE"})},setRead:function(){e({type:"SET_READ",params:[{type:1}]})},getList:function(t){e({type:"FETCH_MY_MASSAGE_S",params:[t]})},clearData:function(t){e({type:"CLEAR_DATA",key:t})},pop:function(){e((0,w.goBack)())},push:function(){e((0,w.push)("/find/announcement"))}}};t["default"]=(0,b.connect)(B,S)(N)},1541:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'.findMessage___17x55{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.findMessageHeader___H5oG_{position:relative;z-index:999}.messageContent___3xI-0{background-color:#f0eff5}.messageContent___3xI-0 .massageList___2SZVF{background-color:#fff;padding-left:15px}.messageContent___3xI-0 .massageOne___YZBC8{border-bottom:1px solid #efefef;position:relative}.massageOne___YZBC8 .massageTitle___3EO9z{padding:15px 0 10px}.massageOne___YZBC8 .massageIcon___3IxLH{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___YZBC8 .massageNew___144rU{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___YZBC8 .notice___33Y5e{background-color:#f76260}.massageOne___YZBC8 .system___jYU-4{background-color:#59c5ec}.massageOne___YZBC8 .massageBody___3Uaoe{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___YZBC8 .massagefooter___302tK{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___YZBC8 .glyphiconChevronRight___sBQhC{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___YZBC8 .glyphiconChevronRight___sBQhC:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___YZBC8 .glyphiconChevronRight___sBQhC:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___2SIIT{color:#000}',""]),t.locals={findMessage:"findMessage___17x55",findMessageHeader:"findMessageHeader___H5oG_",messageContent:"messageContent___3xI-0",massageList:"massageList___2SZVF",massageOne:"massageOne___YZBC8",massageTitle:"massageTitle___3EO9z",massageIcon:"massageIcon___3IxLH",massageNew:"massageNew___144rU",notice:"notice___33Y5e",system:"system___jYU-4",massageBody:"massageBody___3Uaoe",massagefooter:"massagefooter___302tK",glyphiconChevronRight:"glyphiconChevronRight___sBQhC",Link:"Link___2SIIT"}},2141:function(e,t,a){var n=a(1541);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});