webpackJsonp([69],{959:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),l=n(r),_=a(5),d=n(_),c=a(3),p=n(c),u=a(4),f=n(u),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),h=n(m),b=a(10),x=n(b),v=a(17),y=n(v),E=a(9),w=a(24),k=n(w),A=a(2404),T=n(A),O=a(8),C=function(e){function t(){var e,a,n,s;o(this,t);for(var r=arguments.length,l=Array(r),_=0;_<r;_++)l[_]=arguments[_];return a=n=i(this,(e=t.__proto__||(0,f["default"])(t)).call.apply(e,[this].concat(l))),n.push=function(e){n.props.push(e)},n.loadingDom=function(){return h["default"].createElement(y["default"],null)},n.loadEndDom=function(){var e=n.props,t=e.listData,a=e.pending,o=e.end,i=document.body.clientHeight-44;return h["default"].createElement("div",{className:T["default"].messageContent},h["default"].createElement(k["default"],{height:i,fetch:n.props.getNoticeList(),isLoading:a,distance:20,endType:o,endload:h["default"].createElement("div",null,"没有更多了哦")},t&&t.map(function(e,t){var a=e.id,o=e.title,i=e.status,s=e.ctime,r=(e.day,e.info);return h["default"].createElement("div",{className:1==i&&T["default"].massageList||T["default"].active,key:t,onClick:function(){n.push(a)}},h["default"].createElement("div",{className:T["default"].massageOne},h["default"].createElement("div",{className:T["default"].massageTitle},h["default"].createElement("div",{className:T["default"].Link},h["default"].createElement("p",{className:T["default"].massageNew},o,i,a))),h["default"].createElement("div",{className:T["default"].massageBody},r),h["default"].createElement("div",{className:T["default"].massagefooter},s),h["default"].createElement("span",{className:T["default"].glyphiconChevronRight})))})))},s=a,i(n,s)}return s(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.listData,a=(e.pending,e.end,e.pop),n=void 0;return n=t?this.loadEndDom():this.loadingDom(),h["default"].createElement("div",{className:T["default"].announceMent},h["default"].createElement("div",{className:T["default"].announceMentHeader},h["default"].createElement(x["default"],{title:"商城通知",onLeft:a,backgroundColor:"#fff",color:"#666"})),n)}}]),t}(m.Component),N=function(e,t){return{listData:e.listdata.getIn(["GET_NOTICE_LIST","data"]),pending:e.listdata.getIn(["GET_NOTICE_LIST","pending"]),end:e.listdata.getIn(["GET_NOTICE_LIST","pageEnd"])}},J=function(e,t){return{getNoticeList:function(){e({type:"GET_NOTICE_LIST"})},pop:function(){e((0,O.goBack)())},push:function(t){e((0,O.push)("/find/shoppingMall/shopMessageDetail/"+t))}}};t["default"]=(0,E.connect)(N,J)(C)},1121:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(959),i=n(o);t["default"]=i["default"]},1543:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'.announceMent___8PSXY{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.announceMentHeader___1poJ3{position:relative;z-index:999}.messageContent___3eVBb{background-color:#f0eff5}.messageContent___3eVBb .massageList___TjKd6{background-color:#fff;width:90%;margin:0 auto;border-radius:10px;margin-top:20px;padding-left:15px;border-top:2px solid #ccc}.messageContent___3eVBb .massageOne____AAeJ{position:relative}.active___2XOJP{background-color:#fff;width:90%;margin:0 auto;border-radius:10px;margin-top:20px;padding-left:15px;border-top:2px solid #fe684b}.massageOne____AAeJ .massageTitle___y4-mY{padding:15px 0 10px}.massageOne____AAeJ .massageIcon___IavUm{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne____AAeJ .massageNew___39xQU{display:inline-block;font-size:16px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne____AAeJ .notice___TGOCE{background-color:#f76260}.massageOne____AAeJ .system___7p0jZ{background-color:#59c5ec}.massageOne____AAeJ .massageBody___1PqjT{padding-bottom:10px;margin-bottom:10px;font-size:12px;color:#aaa;line-height:18px;height:36px;width:94%;padding-right:32px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.massageOne____AAeJ .massagefooter___3_anU{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne____AAeJ .glyphiconChevronRight___3i3xt{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne____AAeJ .glyphiconChevronRight___3i3xt:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne____AAeJ .glyphiconChevronRight___3i3xt:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___sJktc{color:#000}',""]),t.locals={announceMent:"announceMent___8PSXY",announceMentHeader:"announceMentHeader___1poJ3",messageContent:"messageContent___3eVBb",massageList:"massageList___TjKd6",massageOne:"massageOne____AAeJ",active:"active___2XOJP",massageTitle:"massageTitle___y4-mY",massageIcon:"massageIcon___IavUm",massageNew:"massageNew___39xQU",notice:"notice___TGOCE",system:"system___7p0jZ",massageBody:"massageBody___1PqjT",massagefooter:"massagefooter___3_anU",glyphiconChevronRight:"glyphiconChevronRight___3i3xt",Link:"Link___sJktc"}},2404:[2557,1543]});