webpackJsonp([4],{743:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(2),c=n(r),u=a(6),_=n(u),d=a(4),f=n(d),s=a(5),p=n(s),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),b=a(22),h=a(1917),E=n(h),x=function(e){function t(){return o(this,t),l(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"render",value:function(){return v["default"].createElement("div",{className:E["default"].bottom_tab_bg},this.props.children,v["default"].createElement("div",{className:E["default"].item},v["default"].createElement(b.Link,{to:"/home",activeClassName:E["default"].current,className:E["default"].col+" "+E["default"].t1},v["default"].createElement("p",null,"理财")),v["default"].createElement(b.Link,{to:"/product",activeClassName:E["default"].current,className:E["default"].col+" "+E["default"].t2},v["default"].createElement("p",null,"产品")),v["default"].createElement(b.Link,{to:"/find",activeClassName:E["default"].current,className:E["default"].col+" "+E["default"].t3},v["default"].createElement("p",null,"发现")),v["default"].createElement(b.Link,{to:"/user",activeClassName:E["default"].current,className:E["default"].col+" "+E["default"].t4},v["default"].createElement("p",null,"我的"))))}}]),t}(v["default"].Component);t["default"]=x},809:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),c=n(r),u=a(6),_=n(u),d=a(4),f=n(d),s=a(5),p=n(s),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),v=n(g),b=a(22),h=a(9),E=a(10),x=a(11),y=n(x),k=a(1641),N=n(k),C=a(1636),L=n(C),w=a(1634),I=n(w),T=a(743),H=n(T),z=a(1930),O=n(z),R=a(17),S=n(R),G=a(20),j=n(G),A=a(402),Y=n(A),P=function(e){function t(){var e,a,n,i;o(this,t);for(var r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];return a=n=l(this,(e=t.__proto__||(0,p["default"])(t)).call.apply(e,[this].concat(c))),n.go=function(){var e=sessionStorage.getItem("bao-auth"),t=n.props.push;e?t("/user/coinShop"):(sessionStorage.setItem("bao-sc",!0),t("/login"))},i=a,l(n,i)}return i(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"loadingDom",value:function(){return v["default"].createElement(j["default"],null)}},{key:"loadingEndDom",value:function(e,t){var a=e.data,n=sessionStorage.getItem("bao-user"),o=void 0;return a&&a.msg_count+a.notice_count!=0&&(o=v["default"].createElement("span",{className:O["default"].newsNum},parseInt(a.msg_count+a.notice_count))),v["default"].createElement("div",null,v["default"].createElement("ul",{className:O["default"].cavUl},v["default"].createElement("li",{className:O["default"].cavLi},v["default"].createElement(b.Link,{to:"/find/message",className:O["default"].Link},v["default"].createElement("span",null,v["default"].createElement("img",{src:N["default"],className:O["default"].cavIcon})),v["default"].createElement("span",{className:O["default"].changeLeft},"消息动态"),n&&a&&0!=a.has_new_activity&&o,v["default"].createElement("span",{className:O["default"].glyphiconChevronRight}))),v["default"].createElement("li",{className:(0,S["default"])(O["default"].cavLi,O["default"].changeTop)},v["default"].createElement(b.Link,{to:"/find/inviteFriends",className:O["default"].Link},v["default"].createElement("span",null,v["default"].createElement("img",{src:L["default"],className:O["default"].cavIcon})),v["default"].createElement("span",{className:O["default"].changeLeft},"邀请好友投资返现"),v["default"].createElement("span",{className:O["default"].glyphiconChevronRight}))),v["default"].createElement("li",{className:(0,S["default"])(O["default"].cavLi,O["default"].changeTop),onClick:this.go},v["default"].createElement("span",null,v["default"].createElement("img",{src:I["default"],className:O["default"].cavIcon})),v["default"].createElement("span",{className:O["default"].changeLeft},"积分商城换好礼"),v["default"].createElement("span",{className:O["default"].glyphiconChevronRight}))),t&&t.data.map(function(e,t){var a=e.title,n=e.img,o=e.url;return v["default"].createElement("div",{className:O["default"].activeBox,key:t},v["default"].createElement("span",{className:O["default"].activeHref,onClick:function(){(0,Y["default"])(o)}},v["default"].createElement("p",{className:O["default"].activeTitle},a),v["default"].createElement("div",{className:O["default"].activeImg},v["default"].createElement("img",{src:n}))))}))}},{key:"render",value:function(){var e=this.props,t=e.ListPending,a=e.massegePending,n=e.activeList,o=e.massegeNum,l=void 0;return t||a||void 0==t||void 0==a?l=this.loadingDom():t||a||(l=this.loadingEndDom(o,n)),v["default"].createElement("div",{className:O["default"].finderHome},v["default"].createElement("div",{className:O["default"].finderHomeHeader},v["default"].createElement(y["default"],{leftNode:null,backgroundColor:"#fff"},v["default"].createElement("span",{className:O["default"].title},"发现"))),v["default"].createElement("div",{className:O["default"].findContent},l),v["default"].createElement(H["default"],null))}}]),t}(g.Component),U=function(e,t){return{ListPending:e.infodata.getIn(["FETCH_ACTIVE_LIST","pending"]),massegePending:e.infodata.getIn(["FETCH_ACTIVE_MASSAGE","pending"]),activeList:e.infodata.getIn(["FETCH_ACTIVE_LIST","data"]),massegeNum:e.infodata.getIn(["FETCH_ACTIVE_MASSAGE","data"])}},V=function(e,t){return{load:function(){e({type:"FETCH_ACTIVE_LIST"}),e({type:"FETCH_ACTIVE_MASSAGE"})},push:function(t){e((0,E.push)(t))}}};t["default"]=(0,h.connect)(U,V)(P)},932:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(809),l=n(o);t["default"]=l["default"]},1254:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".bottom_tab_bg___374Ob{margin-bottom:44px}.item___1k3Gr{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;width:100%;font:inherit;padding-top:2px;box-sizing:border-box;background:#fff;font-size:100%;position:fixed;bottom:0;height:38px}.item___1k3Gr .col___Hhvhv{text-align:center;color:#aaa;-webkit-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:block;box-sizing:border-box;width:100%;list-style:none;font-size:10px}.col___Hhvhv p{padding-top:22px}.col___Hhvhv.current___E_GuE p{color:#00a6e2}.t1___2_2y-{background:url("+a(1710)+") no-repeat top;background-size:auto 20px}.current___E_GuE.t1___2_2y-{background:url("+a(1711)+") no-repeat top;background-size:auto 20px}.t2___30u11{background:url("+a(1716)+") no-repeat top;background-size:auto 20px}.current___E_GuE.t2___30u11{background:url("+a(1717)+") no-repeat top;background-size:auto 20px}.t3___31WbV{background:url("+a(1712)+") no-repeat top;background-size:auto 20px}.current___E_GuE.t3___31WbV{background:url("+a(1713)+") no-repeat top;background-size:auto 20px}.t4___2b0gr{background:url("+a(1714)+") no-repeat top;background-size:auto 20px}.current___E_GuE.t4___2b0gr{background:url("+a(1715)+") no-repeat top;background-size:auto 20px}",""]),t.locals={bottom_tab_bg:"bottom_tab_bg___374Ob",item:"item___1k3Gr",col:"col___Hhvhv",current:"current___E_GuE",t1:"t1___2_2y-",t2:"t2___30u11",t3:"t3___31WbV",t4:"t4___2b0gr"}},1268:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,'.finderHome___3g6Oi{padding-top:44px;position:absolute;width:100%;height:100%}.finderHomeHeader___2NG6K{position:relative;z-index:999}.findContent___uCWZ0{width:100%;position:absolute;left:0;top:0;background-color:#f0eff5;padding:60px 0;height:100%;overflow:auto}.cavUl___7O0YX{display:block}.cavUl___7O0YX .cavLi___1jORE{display:block;background-color:#fff;padding:10px 35px 10px 15px;position:relative}.cavUl___7O0YX .cavIcon___u1kGv{width:22px;vertical-align:bottom}.cavUl___7O0YX .cavLi___1jORE span{vertical-align:middle}.changeTop___1Wcm_{margin-top:1em}.changeLeft___1RSIa{margin-left:1em}.activeBox___2qsYv{background-color:#fff;padding:0 15px 20px;margin-top:1em}.cavLi___1jORE .newsNum___hfxHu{display:inline-block;padding:2px 5px;color:#fff;background-color:#f43530;float:right;font-size:11px;border-radius:9px}.activeBox___2qsYv .activeHref___DpN8S{text-decoration:none}.activeBox___2qsYv .activeTitle___-PjK8{padding:15px 0;font-size:14px;color:#000}.activeBox___2qsYv .activeImg___3I_Io{position:relative}.activeBox___2qsYv .activeImg___3I_Io img{width:100%}.cavLi___1jORE .glyphiconChevronRight___1K0Xv{display:inline-block;width:16px;height:16px;position:absolute;right:8px;top:50%;margin-top:-9px}.cavLi___1jORE .glyphiconChevronRight___1K0Xv:before{content:"";display:inline-block;border-width:8px;border-color:transparent transparent transparent #ccc;border-style:solid}.cavLi___1jORE .glyphiconChevronRight___1K0Xv:after{content:"";display:inline-block;border-width:6px;border-color:transparent transparent transparent #fff;border-style:solid;position:absolute;right:5px;top:2px}.loading___3FU1a{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2EbDP{font-size:14px;margin-top:12px;text-align:center;color:#666}.title___2VC1U{font-size:17px;color:#333}.Link___1yKYL{color:#000;display:inline-block;width:100%;height:100%}',""]),t.locals={finderHome:"finderHome___3g6Oi",finderHomeHeader:"finderHomeHeader___2NG6K",findContent:"findContent___uCWZ0",cavUl:"cavUl___7O0YX",cavLi:"cavLi___1jORE",cavIcon:"cavIcon___u1kGv",changeTop:"changeTop___1Wcm_",changeLeft:"changeLeft___1RSIa",activeBox:"activeBox___2qsYv",newsNum:"newsNum___hfxHu",activeHref:"activeHref___DpN8S",activeTitle:"activeTitle___-PjK8",activeImg:"activeImg___3I_Io",glyphiconChevronRight:"glyphiconChevronRight___1K0Xv",loading:"loading___3FU1a",loadingText:"loadingText___2EbDP",title:"title___2VC1U",Link:"Link___1yKYL"}},1634:function(e,t,a){e.exports=a.p+"static/media/jfsc.209a03c3.png"},1636:function(e,t,a){e.exports=a.p+"static/media/licaiicon.0145587d.png"},1641:function(e,t,a){e.exports=a.p+"static/media/messicon.bbb257bb.png"},1710:1693,1711:1694,1712:1695,1713:1696,1714:1697,1715:1698,1716:1699,1717:1700,1917:[2061,1254],1930:[2062,1268]});