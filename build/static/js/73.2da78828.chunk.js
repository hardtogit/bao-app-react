webpackJsonp([73],{960:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),_=a(5),d=n(_),c=a(3),u=n(c),f=a(4),p=n(f),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),h=n(m),y=a(10),v=n(y),E=a(9),b=a(13),x=n(b),O=a(24),N=n(O),T=a(2414),w=n(T),C=a(8),k=function(e){function t(e){s(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.oneDom=function(e,t,n){var s=e.title,o=e.content,i=(e.description,e.date),l=(e.msgKey,e.id,e.type),r=e.is_read,_=void 0,d=void 0;n&&(_=h["default"].createElement("span",{className:w["default"].glyphiconChevronRight}));var c=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,x["default"])(w["default"].massageIcon,w["default"].system)},"0"==r&&"New"||1==l&&"系统"||"公告"),h["default"].createElement("span",{className:w["default"].massageNew},s));return 1!==l&&(d=a.props.push,c=h["default"].createElement("div",null,h["default"].createElement("span",{className:(0,x["default"])(w["default"].massageIcon,w["default"].notice)},"0"==r&&"New"||1==l&&"系统"||"公告"),h["default"].createElement("span",{className:w["default"].massageNew},s))),h["default"].createElement("div",{className:w["default"].massageList,key:t,onClick:function(){d&&d()}},h["default"].createElement("div",{className:w["default"].massageOne},h["default"].createElement("div",{className:w["default"].massageTitle},c),h["default"].createElement("div",{className:w["default"].massageBody,dangerouslySetInnerHTML:{__html:o}}),h["default"].createElement("div",{className:w["default"].massagefooter},i),_))},a}return i(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getNotice(),this.props.setRead()}},{key:"componentWillUnmount",value:function(){this.props.clearData("FETCH_MY_MASSAGE_S"),this.props.clearData("GET_NOTICE")}},{key:"list",value:function(){var e=this,t=this.props,a=t.listData,n=t.pending,s=t.end,o=t.noticeData,i=this.oneDom(o,-1,!0),l=document.body.clientHeight-44;return h["default"].createElement(N["default"],{height:l,fetch:function(){e.props.getList(1)},isLoading:n,distance:20,endType:s,titleChild:i},a&&a.map(function(t,a){return e.oneDom(t,a)}))}},{key:"render",value:function(){var e=this.props,t=e.noticeData,a=e.pop,n=void 0;return t&&(n=this.list()),h["default"].createElement("div",{className:w["default"].findMessage},h["default"].createElement("div",{className:w["default"].findMessageHeader},h["default"].createElement(v["default"],{title:"商城首页",onLeft:a})),h["default"].createElement("div",{className:w["default"].messageContent},n))}}]),t}(m.Component),M=function(e,t){return{noticeData:e.listdata.getIn(["GET_NOTICE","data","0"]),listData:e.listdata.getIn(["FETCH_MY_MASSAGE_S","data"]),pending:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pending"]),end:e.listdata.getIn(["FETCH_MY_MASSAGE_S","pageEnd"])}},R=function(e,t){return{getNotice:function(){e({type:"GET_NOTICE"})},setRead:function(){e({type:"SET_READ",params:[{type:1}]})},getList:function(t){e({type:"FETCH_MY_MASSAGE_S",params:[t]})},clearData:function(t){e({type:"CLEAR_DATA",key:t})},pop:function(){e((0,C.goBack)())},push:function(){e((0,C.push)("/find/announcement"))}}};t["default"]=(0,E.connect)(M,R)(k)},1129:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(960),o=n(s);t["default"]=o["default"]},1550:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'.findMessage___1RjTa{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.findMessageHeader___1xhVp{position:relative;z-index:999}.messageContent___3RTNU{background-color:#f0eff5}.messageContent___3RTNU .massageList___3oj6d{background-color:#fff;padding-left:15px}.messageContent___3RTNU .massageOne___1QXOs{border-bottom:1px solid #efefef;position:relative}.massageOne___1QXOs .massageTitle___A1fxg{padding:15px 0 10px}.massageOne___1QXOs .massageIcon___3qtnq{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___1QXOs .massageNew___1TV3y{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___1QXOs .notice___30tWo{background-color:#f76260}.massageOne___1QXOs .system___GxRPY{background-color:#59c5ec}.massageOne___1QXOs .massageBody___3GL_s{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___1QXOs .massagefooter___15A5y{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___1QXOs .glyphiconChevronRight___mElvy{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___1QXOs .glyphiconChevronRight___mElvy:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___1QXOs .glyphiconChevronRight___mElvy:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___2PZ1H{color:#000}',""]),t.locals={findMessage:"findMessage___1RjTa",findMessageHeader:"findMessageHeader___1xhVp",messageContent:"messageContent___3RTNU",massageList:"massageList___3oj6d",massageOne:"massageOne___1QXOs",massageTitle:"massageTitle___A1fxg",massageIcon:"massageIcon___3qtnq",massageNew:"massageNew___1TV3y",notice:"notice___30tWo",system:"system___GxRPY",massageBody:"massageBody___3GL_s",massagefooter:"massagefooter___15A5y",glyphiconChevronRight:"glyphiconChevronRight___mElvy",Link:"Link___2PZ1H"}},2414:[2573,1550]});