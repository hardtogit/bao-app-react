webpackJsonp([53],{1087:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),_=a(5),d=n(_),c=a(3),u=n(c),f=a(4),p=n(f),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),h=n(m),y=a(11),b=n(y),v=a(10),E=a(14),M=n(E),x=a(25),A=n(x),w=a(2236),C=n(w),k=a(9),N=function(e){function t(e){s(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.oneDom=function(e,t,n){var s=e.title,o=e.content,i=(e.description,e.date),l=(e.msgKey,e.id,e.type),r=e.is_read,_=void 0,d=void 0;n&&(_=h["default"].createElement("span",{className:C["default"].glyphiconChevronRight}));var c=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,M["default"])(C["default"].massageIcon,C["default"].system)},"0"==r&&"New"||1==l&&"系统"||"公告"),h["default"].createElement("span",{className:C["default"].massageNew},s));return 1!==l&&(d=a.props.push,c=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,M["default"])(C["default"].massageIcon,C["default"].notice)},"0"==r&&"New"||1==l&&"系统"||"公告"),h["default"].createElement("span",{className:C["default"].massageNew},s))),h["default"].createElement("div",{className:C["default"].massageList,key:t,onClick:function(){d&&d()}},h["default"].createElement("div",{className:C["default"].massageOne},h["default"].createElement("div",{className:C["default"].massageTitle},c),h["default"].createElement("div",{className:C["default"].massageBody,dangerouslySetInnerHTML:{__html:o}}),h["default"].createElement("div",{className:C["default"].massagefooter},i),_))},a}return i(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getNotice(),this.props.setRead()}},{key:"componentWillUnmount",value:function(){this.props.clearData("FETCH_MY_MASSAGE_S"),this.props.clearData("GET_NOTICE")}},{key:"list",value:function(){var e=this,t=this.props,a=t.listData,n=t.pending,s=t.end,o=t.noticeData,i=this.oneDom(o,-1,!0),l=document.body.clientHeight-44;return h["default"].createElement(A["default"],{height:l,fetch:function(){e.props.getList(1)},isLoading:n,distance:20,endType:s,titleChild:i},a&&a.map(function(t,a){return e.oneDom(t,a)}))}},{key:"render",value:function(){var e=this.props,t=e.noticeData,a=e.pop,n=void 0;return t&&(n=this.list()),h["default"].createElement("div",{className:C["default"].findMessage},h["default"].createElement("div",{className:C["default"].findMessageHeader},h["default"].createElement(b["default"],{title:"我的消息",onLeft:a})),h["default"].createElement("div",{className:C["default"].messageContent},n))}}]),t}(m.Component),T=function(e,t){return{noticeData:e.listdata.getIn(["GET_NOTICE","data","0"]),listData:e.listdata.getIn(["FETCH_MY_MASSAGE_S","data"]),pending:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pending"]),end:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pageEnd"])}},O=function(e,t){return{getNotice:function(){e({type:"GET_NOTICE"})},setRead:function(){e({type:"SET_READ",params:[{type:1}]})},getList:function(t){e({type:"FETCH_MY_MASSAGE_S",params:[t]})},clearData:function(t){e({type:"CLEAR_DATA",key:t})},pop:function(){e((0,k.goBack)())},push:function(){e((0,k.push)("/find/announcement"))}}};t["default"]=(0,v.connect)(T,O)(N)},1236:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1087),o=n(s);t["default"]=o["default"]},1635:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'.findMessage___1j-dC{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.findMessageHeader___1PawZ{position:relative;z-index:999}.messageContent___3qMu0{background-color:#f0eff5}.messageContent___3qMu0 .massageList___2avkY{background-color:#fff;padding-left:15px}.messageContent___3qMu0 .massageOne___29AXJ{border-bottom:1px solid #efefef;position:relative}.massageOne___29AXJ .massageTitle___63X-9{padding:15px 0 10px}.massageOne___29AXJ .massageIcon___1TRc6{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___29AXJ .massageNew___2RbuH{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___29AXJ .notice___lnbE6{background-color:#f76260}.massageOne___29AXJ .system___2t0ch{background-color:#59c5ec}.massageOne___29AXJ .massageBody___3lhLX{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___29AXJ .massagefooter___20iAc{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___29AXJ .glyphiconChevronRight___1mlPe{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___29AXJ .glyphiconChevronRight___1mlPe:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___29AXJ .glyphiconChevronRight___1mlPe:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___1fFXM{color:#000}',""]),t.locals={findMessage:"findMessage___1j-dC",findMessageHeader:"findMessageHeader___1PawZ",messageContent:"messageContent___3qMu0",massageList:"massageList___2avkY",massageOne:"massageOne___29AXJ",massageTitle:"massageTitle___63X-9",massageIcon:"massageIcon___1TRc6",massageNew:"massageNew___2RbuH",notice:"notice___lnbE6",system:"system___2t0ch",massageBody:"massageBody___3lhLX",massagefooter:"massagefooter___20iAc",glyphiconChevronRight:"glyphiconChevronRight___1mlPe",Link:"Link___1fFXM"}},2236:[2380,1635]});