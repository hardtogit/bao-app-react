webpackJsonp([46],{1001:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),_=a(5),d=n(_),u=a(3),c=n(u),p=a(43),f=n(p),g=a(4),m=n(g),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),N=a(1),y=n(N),b=a(11),E=n(b),v=a(10),x=a(15),C=n(x),k=a(27),O=n(k),w=a(2072),M=n(w),T=a(9),B=function(e){function t(){var e,a,n,i;o(this,t);for(var l=arguments.length,r=Array(l),_=0;_<l;_++)r[_]=arguments[_];return a=n=s(this,(e=t.__proto__||(0,m["default"])(t)).call.apply(e,[this].concat(r))),n.push=function(e){sessionStorage.setItem("bao-noticeData",(0,f["default"])(e)),n.props.push()},i=a,s(n,i)}return i(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.clearId()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.listData,n=t.pending,o=t.end,s=(t.idList,t.pop),i=document.body.clientHeight-44;return y["default"].createElement("div",{className:M["default"].announceMent},y["default"].createElement("div",{className:M["default"].announceMentHeader},y["default"].createElement(E["default"],{title:"我的公告",onLeft:s})),y["default"].createElement("div",{className:M["default"].messageContent},y["default"].createElement(O["default"],{height:i,fetch:this.props.getLoad,isLoading:n,distance:20,endType:o,endload:y["default"].createElement("div",null,"没有更多了哦")},a&&a.map(function(t,a){var n=t.title,o=t.content,s=t.description,i=t.date,l=t.msgKey,r=t.id,_=t.type,d=t.is_read,u={title:n,msgKey:l,description:s,type:_,id:r,date:i};return y["default"].createElement("div",{className:M["default"].massageList,key:a,onClick:function(){e.push(u)}},y["default"].createElement("div",{className:M["default"].massageOne},y["default"].createElement("div",{className:M["default"].massageTitle},y["default"].createElement("div",{className:M["default"].Link},y["default"].createElement("span",{className:(0,C["default"])(M["default"].massageIcon,1==_&&M["default"].system||M["default"].notice)},"0"==d&&"New"||1==_&&"系统"||"公告"),y["default"].createElement("span",{className:M["default"].massageNew},n))),y["default"].createElement("div",{className:M["default"].massageBody},o),y["default"].createElement("div",{className:M["default"].massagefooter},i),y["default"].createElement("span",{className:M["default"].glyphiconChevronRight})))}))))}}]),t}(N.Component),L=function(e,t){return{listData:e.listdata.getIn(["FETCH_ANNOUNCEMENT_S","data"]),pending:e.listdata.getIn(["FETCH_ANNOUNCEMENT_S","pending"]),end:e.listdata.getIn(["FETCH_ANNOUNCEMENT_S","pageEnd"])}},S=function(e,t){return{getLoad:function(){e({type:"FETCH_ANNOUNCEMENT_S",params:[2]})},clearData:function(){e({type:"CLEAR_DATA",key:"FETCH_ANNOUNCEMENT_S"})},clearId:function(){e({type:"CLEAR_ID",key:"FETCH_ANNOUNCEMENT_S"})},pop:function(){e((0,T.goBack)())},push:function(){e((0,T.push)("/find/messagedetail"))}}};t["default"]=(0,v.connect)(L,S)(B)},1139:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1001),s=n(o);t["default"]=s["default"]},1501:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,'.announceMent___3WbtD{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.announceMentHeader___3Vz55{position:relative;z-index:999}.messageContent___32sJU{background-color:#f0eff5}.messageContent___32sJU .massageList___1ZiOU{background-color:#fff;padding-left:15px}.messageContent___32sJU .massageOne___1NBGu{border-bottom:1px solid #efefef;position:relative}.massageOne___1NBGu .massageTitle___2S9oO{padding:15px 0 10px}.massageOne___1NBGu .massageIcon___2IFW6{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___1NBGu .massageNew___27_jm{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___1NBGu .notice___WKk75{background-color:#f76260}.massageOne___1NBGu .system___A2YV3{background-color:#59c5ec}.massageOne___1NBGu .massageBody___1qMM1{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___1NBGu .massagefooter___3x8D2{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___1NBGu .glyphiconChevronRight___3xl9S{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___1NBGu .glyphiconChevronRight___3xl9S:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___1NBGu .glyphiconChevronRight___3xl9S:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___3vygc{color:#000}',""]),t.locals={announceMent:"announceMent___3WbtD",announceMentHeader:"announceMentHeader___3Vz55",messageContent:"messageContent___32sJU",massageList:"massageList___1ZiOU",massageOne:"massageOne___1NBGu",massageTitle:"massageTitle___2S9oO",massageIcon:"massageIcon___2IFW6",massageNew:"massageNew___27_jm",notice:"notice___WKk75",system:"system___A2YV3",massageBody:"massageBody___1qMM1",massagefooter:"massagefooter___3x8D2",glyphiconChevronRight:"glyphiconChevronRight___3xl9S",Link:"Link___3vygc"}},2072:[2214,1501]});