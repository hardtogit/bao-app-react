webpackJsonp([197],{1052:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),_=a(5),d=n(_),c=a(3),p=n(c),f=a(4),u=n(f),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),h=n(m),v=a(10),y=n(v),E=a(9),b=a(11),T=n(b),S=a(26),x=n(S),w=a(2210),C=n(w),k=a(8),M=function(e){function t(e){s(this,t);var a=o(this,(t.__proto__||(0,u["default"])(t)).call(this,e));return a.oneDom=function(e,t,n){var s=e.title,o=e.content,i=(e.description,e.date),l=(e.msgKey,e.id,e.type),r=e.is_read,_=void 0,d=void 0;n&&(_=h["default"].createElement("span",{className:C["default"].glyphiconChevronRight}));var c=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,T["default"])(C["default"].massageIcon,C["default"].system)},"0"==r&&"New"||1==l&&"系统"||"公告"),h["default"].createElement("span",{className:C["default"].massageNew},s));return 1!==l&&(d=a.props.push,c=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,T["default"])(C["default"].massageIcon,C["default"].notice)},"0"==r&&"New"||1==l&&"系统"||"公告"),h["default"].createElement("span",{className:C["default"].massageNew},s))),h["default"].createElement("div",{className:C["default"].massageList,key:t,onClick:function(){d&&d()}},h["default"].createElement("div",{className:C["default"].massageOne},h["default"].createElement("div",{className:C["default"].massageTitle},c),h["default"].createElement("div",{className:C["default"].massageBody,dangerouslySetInnerHTML:{__html:o}}),h["default"].createElement("div",{className:C["default"].massagefooter},i),_))},a}return i(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getNotice(),this.props.setRead()}},{key:"componentWillUnmount",value:function(){this.props.clearData("FETCH_MY_MASSAGE_S"),this.props.clearData("GET_NOTICE")}},{key:"list",value:function(){var e=this,t=this.props,a=t.listData,n=t.pending,s=t.end,o=t.noticeData,i=this.oneDom(o,-1,!0),l=document.body.clientHeight-44;return h["default"].createElement(x["default"],{height:l,fetch:function(){e.props.getList(1)},isLoading:n,distance:20,endType:s,titleChild:i},a&&a.map(function(t,a){return e.oneDom(t,a)}))}},{key:"render",value:function(){var e=this.props,t=e.noticeData,a=e.pop,n=void 0;return t&&(n=this.list()),h["default"].createElement("div",{className:C["default"].findMessage},h["default"].createElement("div",{className:C["default"].findMessageHeader},h["default"].createElement(y["default"],{title:"商城通知",onLeft:a})),h["default"].createElement("div",{className:C["default"].messageContent},n))}}]),t}(m.Component),N=function(e,t){return{noticeData:e.listdata.getIn(["GET_NOTICE","data","0"]),listData:e.listdata.getIn(["FETCH_MY_MASSAGE_S","data"]),pending:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pending"]),end:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pageEnd"])}},O=function(e,t){return{getNotice:function(){e({type:"GET_NOTICE"})},setRead:function(){e({type:"SET_READ",params:[{type:1}]})},getList:function(t){e({type:"FETCH_MY_MASSAGE_S",params:[t]})},clearData:function(t){e({type:"CLEAR_DATA",key:t})},pop:function(){e((0,k.goBack)())},push:function(){e((0,k.push)("/find/announcement"))}}};t["default"]=(0,E.connect)(N,O)(M)},1631:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'.findMessage___1Vy4C{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.findMessageHeader___1IvTc{position:relative;z-index:999}.messageContent___2az_H{background-color:#f0eff5}.messageContent___2az_H .massageList___PtuF2{background-color:#fff;padding-left:15px}.messageContent___2az_H .massageOne___1ScvT{border-bottom:1px solid #efefef;position:relative}.massageOne___1ScvT .massageTitle___3ETfD{padding:15px 0 10px}.massageOne___1ScvT .massageIcon___2llSl{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___1ScvT .massageNew___Wy8Mg{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___1ScvT .notice___E32-M{background-color:#f76260}.massageOne___1ScvT .system___1tZ-F{background-color:#59c5ec}.massageOne___1ScvT .massageBody___Y12kr{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___1ScvT .massagefooter___1WIQf{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___1ScvT .glyphiconChevronRight___1Z4Os{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___1ScvT .glyphiconChevronRight___1Z4Os:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___1ScvT .glyphiconChevronRight___1Z4Os:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___pqv4w{color:#000}',""]),t.locals={findMessage:"findMessage___1Vy4C",findMessageHeader:"findMessageHeader___1IvTc",messageContent:"messageContent___2az_H",massageList:"massageList___PtuF2",massageOne:"massageOne___1ScvT",massageTitle:"massageTitle___3ETfD",massageIcon:"massageIcon___2llSl",massageNew:"massageNew___Wy8Mg",notice:"notice___E32-M",system:"system___1tZ-F",massageBody:"massageBody___Y12kr",massagefooter:"massagefooter___1WIQf",glyphiconChevronRight:"glyphiconChevronRight___1Z4Os",Link:"Link___pqv4w"}},2210:[2357,1631]});