webpackJsonp([69],{148:function(e,t,a){e.exports=a.p+"static/media/ticket.50d0e972.png"},181:function(e,t,a){e.exports=a.p+"static/media/rulebg.ec32aa12.png"},313:function(e,t,a){e.exports=a.p+"static/media/3j.b247be8a.png"},314:function(e,t,a){e.exports=a.p+"static/media/4j.ebb146e1.png"},315:function(e,t,a){e.exports=a.p+"static/media/5j.dbcfa876.png"},316:function(e,t,a){e.exports=a.p+"static/media/6j.289a2ede.png"},1057:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),l=n(s),_=a(5),u=n(_),p=a(3),d=n(p),c=a(4),f=n(c),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),b=n(m),h=a(10),x=n(h),k=a(9),y=a(313),v=(n(y),a(314)),w=(n(v),a(315)),E=(n(w),a(316)),T=(n(E),a(2214)),C=n(T),M=a(8),O=function(e){function t(e){o(this,t);var a=i(this,(t.__proto__||(0,f["default"])(t)).call(this,e));return a.loadEndDom=function(e,t){a.props.pop;return b["default"].createElement("div",{className:C["default"].messageContent},b["default"].createElement("div",{className:C["default"].tacket},b["default"].createElement("ul",{className:C["default"].ruleTable},b["default"].createElement("li",{className:C["default"].ruleTh},b["default"].createElement("span",null,"年化待收金额(万)"),b["default"].createElement("span",null,"级别")),e&&e.map(function(e,t){return b["default"].createElement("li",{key:t},b["default"].createElement("span",null,e.annual),b["default"].createElement("span",null,e.level))})),t&&t.map(function(e,t){return b["default"].createElement("p",{key:t},e)})))},a}return r(t,e),g(t,[{key:"componentWillMount",value:function(){this.props.getVipStr()}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.vipStrData,n=void 0;return a&&100==a.code&&(n=this.loadEndDom(a.data.relation,a.data.note)),b["default"].createElement("div",{className:C["default"].findMessage},b["default"].createElement("div",{className:C["default"].findMessageHeader},b["default"].createElement(x["default"],{title:"整体规则",backgroundColor:"#d0a15e",onLeft:t})),n)}}]),t}(m.Component),N=function(e,t){return{vipStrData:e.infodata.getIn(["GET_VIP_STR","data"])}},P=function(e,t){return{pop:function(){e((0,M.goBack)())},getVipStr:function(){e({type:"GET_VIP_STR"})}}};t["default"]=(0,k.connect)(N,P)(O)},1636:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".findMessage___1ikw2{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#fff}.findMessageHeader___2yQhR{position:relative;z-index:999}.messageContent___1Y4iP{width:100%;background-image:url("+a(181)+');background-repeat:no-repeat;background-size:100%;background-color:#fff;padding-top:20px}.messageContent___1Y4iP .massageList___1qa3k{background-color:#fff;padding-left:15px}.messageContent___1Y4iP .massageOne___2uo1u{border-bottom:1px solid #efefef;position:relative}.massageOne___2uo1u .massageTitle___3MaHP{padding:15px 0 10px}.massageOne___2uo1u .massageIcon___3mOQS{display:inline-block;border-radius:5px;padding:5px 8px;font-size:10px;vertical-align:middle;color:#fff;position:absolute;left:0;top:12px}.massageOne___2uo1u .massageNew___3kKE1{display:inline-block;font-size:16px;padding-left:50px;word-wrap:break-word;word-break:normal;padding-right:25px}.massageOne___2uo1u .notice___1QNV_{background-color:#f76260}.massageOne___2uo1u .system___3zpcB{background-color:#59c5ec}.massageOne___2uo1u .massageBody___1ADqi{padding-bottom:10px;font-size:12px;color:#aaa;line-height:18px;padding-right:32px}.massageOne___2uo1u .massagefooter___-mKPA{font-size:12px;color:#aaa;padding-bottom:17px}.massageOne___2uo1u .glyphiconChevronRight___3vfMi{display:inline-block;width:24px;height:24px;position:absolute;right:0;top:50%;margin-top:-9px}.massageOne___2uo1u .glyphiconChevronRight___3vfMi:before{content:"";display:inline-block;border-width:12px;border-color:transparent transparent transparent #ccc;border-style:solid}.massageOne___2uo1u .glyphiconChevronRight___3vfMi:after{content:"";display:inline-block;border-width:10px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.Link___3upH3{color:#000}.tacket____bnsI{width:300px;margin:0 auto;background-image:url('+a(148)+");background-size:100% 100%;padding:13px;color:#333;font-size:12px}.tacket____bnsI p{margin:10px 0;line-height:20px}.ruleTable___2Ctfr li{height:30px;line-height:30px}.ruleTable___2Ctfr li:nth-child(odd){background-color:#edecec}.ruleTable___2Ctfr li:first-child{background:none}.ruleTable___2Ctfr li span{display:block;float:left;width:65%;text-align:center}.ruleTable___2Ctfr li span:nth-child(2){width:35%}.ruleTh___QGjG2{color:#d7b27c}.ruleTh___QGjG2 img{width:18px}",""]),t.locals={findMessage:"findMessage___1ikw2",findMessageHeader:"findMessageHeader___2yQhR",messageContent:"messageContent___1Y4iP",massageList:"massageList___1qa3k",massageOne:"massageOne___2uo1u",massageTitle:"massageTitle___3MaHP",massageIcon:"massageIcon___3mOQS",massageNew:"massageNew___3kKE1",notice:"notice___1QNV_",system:"system___3zpcB",massageBody:"massageBody___1ADqi",massagefooter:"massagefooter___-mKPA",glyphiconChevronRight:"glyphiconChevronRight___3vfMi",Link:"Link___3upH3",tacket:"tacket____bnsI",ruleTable:"ruleTable___2Ctfr",ruleTh:"ruleTh___QGjG2"}},2214:[2360,1636]});