webpackJsonp([16],{204:function(e,t,n){e.exports=n.p+"static/media/zhitouicon1.24162947.png"},300:function(e,t,n){e.exports=n.p+"static/media/dingicon.d4075fee.png"},320:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,u,d=n(2),f=l(d),c=n(5),p=l(c),s=n(3),_=l(s),m=n(4),h=l(m),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,f["default"])(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),b=n(1),x=l(b),y=n(435),E=l(y),v=n(210),B=l(v),O=n(81),w=l(O),T=n(300),k=l(T),C=n(204),I=l(C),D=n(25),L=l(D),N=n(17),A=l(N),F=n(16),S=l(F),M=(u=r=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.bannerEnd=function(e){null!=e&&n.setState({height:e.offsetHeight})},n.ScrollDom=function(){var e=n.props,t=e.fetch,l=e.pending,a=e.end,o=e.data,i=e.click,r=n.state.height,u=document.body.clientHeight,d=u-r-44-50;return x["default"].createElement("div",{style:{height:d},className:E["default"].listBox},x["default"].createElement(L["default"],{height:d,fetch:t,isLoading:l,distance:5,endType:a,nullDom:x["default"].createElement("div",{className:E["default"].nullBox},x["default"].createElement("img",{src:w["default"]})),endload:x["default"].createElement("div",null)},o&&o.map(function(e,t){var n=e.name,l=e.surplus_days,a=e.profit_accumulate,o=e.profit_expire,r=e.amount,u=e.coupon_text,d=e.coupon_type,f=e.id,c=void 0;return 1==d?c=x["default"].createElement("span",null,u):2==d&&(c=x["default"].createElement("span",{className:E["default"].dyBox},u)),x["default"].createElement("div",{className:E["default"].manageList,key:t,onClick:function(){i(f)}},x["default"].createElement("div",{className:E["default"].listtitle},x["default"].createElement("img",{src:k["default"]}),n,c,x["default"].createElement("p",null,"还剩",l,"天")),x["default"].createElement("ul",null,x["default"].createElement("li",null,x["default"].createElement("p",{className:E["default"].orgFont},A["default"].padMoney(a)),x["default"].createElement("p",null,"累计收益")),x["default"].createElement("li",null,x["default"].createElement("p",null,A["default"].padMoney(o)),x["default"].createElement("p",null,"到期收益")),x["default"].createElement("li",null,x["default"].createElement("p",null,A["default"].padMoney(r)),x["default"].createElement("p",null,"持有金额"))))})))},n.ScrollDomB=function(){var e=n.props,t=e.fetch,l=e.pending,a=e.end,o=e.data,i=e.click,r=n.state.height,u=document.body.clientHeight,d=u-r-44-50;return x["default"].createElement("div",{style:{height:d},className:E["default"].listBox},x["default"].createElement(L["default"],{height:d,fetch:t,isLoading:l,distance:5,endType:a,nullDom:x["default"].createElement("div",{className:E["default"].nullBox},x["default"].createElement("img",{src:w["default"]})),endload:x["default"].createElement("div",null)},o&&o.map(function(e,t){var n=e.name,l=e.surplusDays,a=e.profitAccumulate,o=e.profitExpire,r=e.amount,u=e.couponText,d=e.couponType,f=e.id,c=e.status,p=e.periods,s=e.accountIncome,_=void 0,m=void 0;return _="竞标中"==c?x["default"].createElement("p",{className:E["default"].competitive},c):x["default"].createElement("p",{className:E["default"].surplus},"剩余",l,"天"),d&&(m=x["default"].createElement("span",{className:E["default"].dyBox,style:1==d&&{background:"#feb278"}||{background:"#7acb9f"}},u)),x["default"].createElement("ul",{key:t,className:E["default"].listBoxOne,onClick:function(){i(f)}},x["default"].createElement("li",null,x["default"].createElement("img",{src:I["default"]}),n,_),x["default"].createElement("li",null,"持有金额",m,x["default"].createElement("p",null,A["default"].padMoney(r))),x["default"].createElement("li",null,"到期收益",x["default"].createElement("p",null,A["default"].padMoney(o))),x["default"].createElement("li",null,"已到账收益(",p,")",x["default"].createElement("p",null,A["default"].padMoney(s))),x["default"].createElement("li",null,"累计收益",x["default"].createElement("p",null,A["default"].padMoney(a))))})))},n.loadEndDom=function(){var e=n.props.type;if("A"==e)var t=n.props.banner,l=t.total,a=t.profit_yesterday,o=t.profit_accumulate,i=t.revenue;else var r=n.props.banner,l=r.total,a=r.profitYesterday,o=r.profitAccumulate,i=r.revenue;return x["default"].createElement("div",{ref:n.bannerEnd},x["default"].createElement("div",{className:E["default"].m_h_title},x["default"].createElement(B["default"],{titleLeft:"昨日收益",titleRight:"累计收益",priceLeft:A["default"].padMoney(a),priceRight:A["default"].padMoney(o),titleBottom:"待收本息（利息部分"+A["default"].padMoney(i)+")",priceBottom:A["default"].padMoney(l)})))},n.state={height:0},n}return i(t,e),g(t,[{key:"render",value:function(){var e=this.props.type,t=this.state.height,n=void 0;return 0!=t&&(n="B"==e?this.ScrollDomB():this.ScrollDom()),x["default"].createElement("div",{className:E["default"].bg},this.loadEndDom(),n)}}]),t}(b.Component),r.PropTypes={banner:S["default"].object,fetch:S["default"].func,data:S["default"].array,pending:S["default"].bool,end:S["default"].bool,click:S["default"].func,type:S["default"].string},r.defaultProps={banner:{},fetch:function(){},data:[],pending:!0,end:!1,click:function(){},type:"A"},u);t["default"]=M},368:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"*{padding:0;margin:0}.bg___1CSMI{position:absolute;left:0;top:0;width:100%;height:100vh;background:#f1eff5;z-index:1;overflow:auto}.m_h_title___22u8F{margin-top:44px;position:relative;z-index:1}.errorImg___2NYX5{width:100%}.errorImg___2NYX5 img{display:block;width:169px;height:152px;margin:0 auto}.gobuy___ww7yO{position:fixed;width:100%;bottom:0;left:0;background:#00a7e1;text-align:center;font-size:18px;color:#fff;height:50px;line-height:50px}.manageContent___37MTy{margin-bottom:50px;width:100%}.manageList___1uB2h{background:#fff;width:100%;padding-left:15px;border-bottom:1px solid #e5e5e5;border-top:1px solid #e5e5e5;margin-top:15px;height:112px}.listtitle___3as1_{border-bottom:1px solid #e5e5e5;font-size:14px;color:#000;height:44px;line-height:44px}.listtitle___3as1_ img{display:inline-block;width:21px;height:21px;position:relative;top:6px;padding-right:3px;margin-right:5px}.nullBox___FMoQO{text-align:center;margin-top:40px}.listtitle___3as1_ span{font-size:12px;padding:3px;background:#feb278;border-radius:3px;color:#fff;padding-left:2px;margin-left:8px}.listtitle___3as1_ .dyBox___1bMPO{background-color:#7acb9f}.listtitle___3as1_ p{float:right;color:#898989;padding-right:15px}.manageList___1uB2h ul{list-style:none;overflow:hidden;padding-right:15px}.manageList___1uB2h ul li{width:33.3%;float:left}.manageList___1uB2h ul li p:nth-child(1){font-size:18px;margin-top:12px}.manageList___1uB2h ul li p:nth-child(2){font-size:12px;color:#aaa;margin-top:8px}.orgFont___3c8Ez{color:#ff7701}.manageList___1uB2h ul li:nth-child(3){text-align:right}.manageList___1uB2h ul li:nth-child(2){text-align:center}.listBoxOne___1FHbb{width:100%;border-top:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;background:#fff;list-style:none;padding-left:15px;box-sizing:border-box;margin-top:15px;padding-bottom:6px}.listBoxOne___1FHbb li img{display:inline-block;float:left;width:20px;padding-right:6px;margin-top:15px}.listBoxOne___1FHbb li p{float:right;padding-right:15px}.listBoxOne___1FHbb li:nth-child(1){border-bottom:1px solid #e5e5e5;font-size:14px;color:#000;height:45px;line-height:45px;overflow:hidden}.listBoxOne___1FHbb li:nth-child(2),.listBoxOne___1FHbb li:nth-child(3),.listBoxOne___1FHbb li:nth-child(4),.listBoxOne___1FHbb li:nth-child(5){height:32px;line-height:32px;color:#aaa;font-size:14px}.listBoxOne___1FHbb li .competitive___38HoP{color:#0ba9e3}.listBoxOne___1FHbb li .surplus___3OF_k{color:#888}.listBoxOne___1FHbb .dyBox___1bMPO{font-size:9px;color:#fff;padding:3px 5px;margin-left:15px;border-radius:2px}.listBoxOne___1FHbb li:nth-child(2) p,.listBoxOne___1FHbb li:nth-child(3) p{font-size:18px;color:#000}.listBoxOne___1FHbb li:nth-child(4) p,.listBoxOne___1FHbb li:nth-child(5) p{color:#ff7701}",""]),t.locals={bg:"bg___1CSMI",m_h_title:"m_h_title___22u8F",errorImg:"errorImg___2NYX5",gobuy:"gobuy___ww7yO",manageContent:"manageContent___37MTy",manageList:"manageList___1uB2h",listtitle:"listtitle___3as1_",nullBox:"nullBox___FMoQO",dyBox:"dyBox___1bMPO",orgFont:"orgFont___3c8Ez",listBoxOne:"listBoxOne___1FHbb",competitive:"competitive___38HoP",surplus:"surplus___3OF_k"}},372:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"*{padding:0;margin:0}.bg___2twKB{position:absolute;left:0;top:0;width:100%;height:100vh;background:#f1eff5;z-index:1;overflow:auto}.gobuy___3VYK8{position:fixed;width:100%;bottom:0;left:0;background:#00a7e1;text-align:center;font-size:18px;color:#fff;height:50px;line-height:50px;z-index:99}",""]),t.locals={bg:"bg___2twKB",gobuy:"gobuy___3VYK8"}},435:[2373,368],442:[2379,372],1124:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),u=l(r),d=n(5),f=l(d),c=n(3),p=l(c),s=n(4),_=l(s),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,u["default"])(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),h=n(1),g=l(h),b=n(11),x=l(b),y=n(442),E=l(y),v=n(10),B=n(18),O=l(B),w=n(20),T=n(9),k=n(320),C=l(k),I=function(e){function t(){var e,n,l,i;a(this,t);for(var r=arguments.length,u=Array(r),d=0;d<r;d++)u[d]=arguments[d];return n=l=o(this,(e=t.__proto__||(0,_["default"])(t)).call.apply(e,[this].concat(u))),l.buyDom=function(){var e=l.props.listData;return g["default"].createElement("div",{onClick:function(){l.goPlanB()}},g["default"].createElement("div",{className:E["default"].gobuy},0==e.size?"立即购买":"再次购买"))},l.goPlanB=function(){var e=l.props,t=e.proIndexs,n=e.push;t(),n("/home/productIndex")},l.listClick=function(e){var t=l.props.push;t("/user/detailsDcb/"+e+"/0")},l.loadEndDom=function(e){var t=l.props,n=t.getList,a=t.pending,o=t.end,i=t.listData;return g["default"].createElement(C["default"],{banner:e.data,fetch:n,pending:a,end:o,data:i,click:l.listClick,type:"B"})},i=n,o(l,i)}return i(t,e),m(t,[{key:"loadDom",value:function(){return g["default"].createElement(O["default"],null)}},{key:"componentDidMount",value:function(){this.props.load()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.datas,n=e.pop,l=e.listData,a=void 0,o=void 0;return t?(a=this.loadEndDom(t),l&&(o=this.buyDom())):a=this.loadDom(),g["default"].createElement("div",{className:E["default"].bg},g["default"].createElement(x["default"],{onLeft:n,rightNode:g["default"].createElement(w.Link,{to:"/user/dcbRecordsB",style:{color:"#fff"}},"记录")},"我的定存宝B计划"),a,o)}}]),t}(g["default"].Component),D=function(e,t){return{datas:e.infodata.getIn(["DEPOSITBS_ACCOUNTCAPITALINFO","data"]),listData:e.listdata.getIn(["DEPOSITBS_ACCOUNTCAPITALLIST","data"]),pending:e.listdata.getIn(["DEPOSITBS_ACCOUNTCAPITALLIST","pending"]),end:e.listdata.getIn(["DEPOSITBS_ACCOUNTCAPITALLIST","pageEnd"])}},L=function(e,t){return{load:function(){e({type:"DEPOSITBS_ACCOUNTCAPITALINFO"})},getList:function(){e({type:"DEPOSITBS_ACCOUNTCAPITALLIST",params:[0]})},clearData:function(){e({type:"CLEAR_DATA",key:"DEPOSITBS_ACCOUNTCAPITALLIST"})},push:function(t){e((0,T.push)(t))},pop:function(){e((0,T.goBack)())},proIndexs:function(){e({type:"PRODUCT_INDEX",index:1})}}};t["default"]=(0,v.connect)(D,L)(I)},1258:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1124),o=l(a);t["default"]=o["default"]}});