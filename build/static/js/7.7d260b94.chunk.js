webpackJsonp([7],{138:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,d,u=a(2),_=l(u),f=a(5),s=l(f),p=a(3),c=l(p),m=a(4),x=l(m),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,_["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),b=a(1),h=l(b),y=a(169),E=l(y),v=a(16),N=l(v),w=(d=r=function(e){function t(){return n(this,t),i(this,(t.__proto__||(0,x["default"])(t)).apply(this,arguments))}return o(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,l=e.activityName,n=e.rateA,i=e.rateB;return h["default"].createElement("div",{className:E["default"].header},h["default"].createElement("p",{className:E["default"].lxYear},"预期年化利率(%)"),h["default"].createElement("p",{className:E["default"].lxNum},function(){var e=l.split("|"),a=!1;return e.length>0&&""!=l&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?h["default"].createElement("span",null,n,"0.00"==i?"":h["default"].createElement("span",{style:{fontSize:"36px"}},"+",i)):h["default"].createElement("span",null,t)}()),h["default"].createElement("div",{className:E["default"].lxContent},a&&a.map(function(e,t){var a=e.name,l=e.val;return h["default"].createElement("span",{key:t},h["default"].createElement("p",{className:E["default"].textColor},a),h["default"].createElement("p",null,l))})))}}]),t}(b.Component),r.propTypes={rate:N["default"].string,data:N["default"].array,activityName:N["default"].string,rateA:N["default"].string,rateB:N["default"].string},r.defaultProps={rate:"12.8",data:[],activityName:""},d);t["default"]=w},157:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},169:[2381,157],322:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,d,u=a(2),_=l(u),f=a(5),s=l(f),p=a(3),c=l(p),m=a(4),x=l(m),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,_["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),b=a(1),h=l(b),y=a(443),E=l(y),v=a(297),N=l(v),w=a(296),k=l(w),T=a(295),B=l(T),j=a(293),C=l(j),A=a(16),I=l(A),L=(d=r=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return a.state={lx:["抵押标","担保标"]},a}return o(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.startTime,a=e.endTime,l=e.type,n=e.repayment;return h["default"].createElement("div",{className:E["default"].depositBox},h["default"].createElement("ul",{className:E["default"].depositUl},h["default"].createElement("li",{className:E["default"].depositLi},h["default"].createElement("div",{className:E["default"].tbBox},h["default"].createElement("ul",null,h["default"].createElement("li",null,h["default"].createElement("span",{className:E["default"].startTime},h["default"].createElement("img",{src:N["default"]})),h["default"].createElement("span",{className:E["default"].goNext})),h["default"].createElement("li",null,h["default"].createElement("span",{className:E["default"].hx}),h["default"].createElement("span",{className:E["default"].locking},"A"==l&&h["default"].createElement("img",{src:k["default"]})||h["default"].createElement("img",{src:C["default"]})),h["default"].createElement("span",{className:E["default"].hx})),h["default"].createElement("li",null,h["default"].createElement("span",{className:E["default"].goNext}),h["default"].createElement("span",{className:E["default"].endTime},h["default"].createElement("img",{src:B["default"]}))))),h["default"].createElement("div",{className:E["default"].tbText},h["default"].createElement("ul",null,h["default"].createElement("li",null,h["default"].createElement("p",{className:E["default"].tbName},"起息日"),h["default"].createElement("p",{className:E["default"].timeText},t)),h["default"].createElement("li",null,h["default"].createElement("p",null,"A"==l&&"锁定期"||n)),h["default"].createElement("li",null,h["default"].createElement("p",{className:E["default"].tbName},"本息到账"),h["default"].createElement("p",{className:E["default"].timeText},a)))))))}}]),t}(b.Component),r.propTypes={startTime:I["default"].string,endTime:I["default"].string,type:I["default"].string,lx:I["default"].number,Grade:I["default"].string,repayment:I["default"].string},r.defaultProps={startTime:"20170214",endTime:"20170214",type:"A",lx:2,Grade:"A",repayment:"每月还息 到期还本"},d);t["default"]=L},373:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".depositBox___2F1qU,.depositLi___3A5gb{background-color:#fff}.depositLi___3A5gb{display:block}.depositLi___3A5gb .tbBox___3L3Y9{padding:20px 34px 0}.depositLi___3A5gb .tbBox___3L3Y9 ul{display:block;width:100%;margin-bottom:10px}.depositLi___3A5gb .tbBox___3L3Y9 ul li{display:inline-block;width:33.33333%;vertical-align:top;position:relative}.depositLi___3A5gb .tbBox___3L3Y9 ul li:nth-of-type(1){padding-left:15px}.depositLi___3A5gb .tbBox___3L3Y9 ul li:nth-of-type(3){padding-right:15px}.goNext___2_xbb{width:100%;background-color:#e5e5e5;height:3px;display:inline-block;vertical-align:middle;margin-top:-5px}.startTime___ae9CD{position:absolute;left:0;top:0}.startTime___ae9CD img{width:13px}.locking___1cnM-{display:inline-block;width:17px;background-color:#fff;position:absolute;left:50%;margin-left:-8.5px;text-align:center}.locking___1cnM- img{width:13px}.endTime___1Kp2o{position:absolute;right:0;top:0}.endTime___1Kp2o img{width:13px}.tbText___Ij9xD{padding:0 15px;border-bottom:1px solid #e5e5e5}.tbText___Ij9xD ul{display:block;width:100%;margin-bottom:20px}.tbText___Ij9xD ul li{display:inline-block;width:33.33333%;vertical-align:top;font-size:12px;color:#666}.tbText___Ij9xD ul li:nth-of-type(2){text-align:center}.tbText___Ij9xD ul li:nth-of-type(3){text-align:right}.tbText___Ij9xD ul li .tbName___Xee_Y{padding-bottom:6px}.tbText___Ij9xD ul li .timeText___1004W{font-size:11px;color:#aaa}.hx___2s85e{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.msBox___1Q-pn{padding:15px;background-color:#fff}.msBox___1Q-pn p{font-size:14px;color:#aaa}.msBox___1Q-pn p:nth-of-type(1){margin-bottom:10px}.msBox___1Q-pn .dbType___1Z_jf{color:#666;float:right;text-align:right}",""]),t.locals={depositBox:"depositBox___2F1qU",depositLi:"depositLi___3A5gb",tbBox:"tbBox___3L3Y9",goNext:"goNext___2_xbb",startTime:"startTime___ae9CD",locking:"locking___1cnM-",endTime:"endTime___1Kp2o",tbText:"tbText___Ij9xD",tbName:"tbName___Xee_Y",timeText:"timeText___1004W",hx:"hx___2s85e",msBox:"msBox___1Q-pn",dbType:"dbType___1Z_jf"}},443:[2381,373],805:function(e,t,a){e.exports=a.p+"static/media/icon-05.67d6db12.png"},806:function(e,t,a){e.exports=a.p+"static/media/icon-06.4ba5932c.png"},807:function(e,t,a){e.exports=a.p+"static/media/icon-07.4b946386.png"},1055:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),d=l(r),u=a(5),_=l(u),f=a(3),s=l(f),p=a(4),c=l(p),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,d["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),x=a(1),g=l(x),b=a(11),h=l(b),y=a(173),E=(l(y),a(2290)),v=l(E),N=a(14),w=l(N),k=a(22),T=l(k),B=a(9),j=a(10),C=(a(19),a(37)),A=l(C),I=a(805),L=l(I),M=a(806),D=l(M),z=a(807),P=l(z),S=a(18),Y=l(S),R=a(138),U=l(R),Q=a(322),F=(l(Q),a(17)),K=(l(F),a(56)),X=(l(K),a(69)),q=l(X),J=function(e){function t(){var e,a,l,o;n(this,t);for(var r=arguments.length,d=Array(r),u=0;u<r;u++)d[u]=arguments[u];return a=l=i(this,(e=t.__proto__||(0,c["default"])(t)).call.apply(e,[this].concat(d))),l.state={descActive:!1,type:"A"},l.moneyFn=function(e,t){var a=parseFloat(1e4*e/100*(t/12)).toString();return a.indexOf(".")!=-1&&(a=a.substring(0,a.indexOf(".")+3)),a},l.loadEnd=function(){Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e};var e=l.props,t=e.data,a=e.params.id,n=e.push,i=t.data,o=i.rate,r=i.type,d=(i.name,i.repayment_type),u=i.end_time,_=i.start_time,f=i.total,s=(i.price,i.title,i.month);o=parseFloat(o).toFixed(2);var p=(l.moneyFn(o,s),[{name:"借款金额",val:f},{name:"借款期限",val:s+"个月"}]);return g["default"].createElement("div",null,g["default"].createElement(U["default"],{rate:o,data:p}),g["default"].createElement("div",{className:v["default"].timeBox}),g["default"].createElement("div",{className:v["default"].depositBox},g["default"].createElement("div",{className:v["default"].suBox,onClick:function(){n("/safeplan")}},"安全保障计划",g["default"].createElement("img",{src:A["default"],className:v["default"].suJt}))),g["default"].createElement("div",{className:v["default"].listInfo},g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"产品类型"),g["default"].createElement("div",{className:v["default"].right},function(){return"1"==r?"信用":"5"==r?"抵押":"信用"}())),g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"还款方式"),g["default"].createElement("div",{className:v["default"].right},function(){return"1"==d?"按天到期还款":"2"==d?"按月分期还款":"3"==d?"按季分期还款":"4"==d?"每月还息到期还本":""}())),g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"起息日期"),g["default"].createElement("div",{className:v["default"].right},new Date(1e3*_).format("yyyy-MM-dd"))),g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"结束日期"),g["default"].createElement("div",{className:v["default"].right},new Date(1e3*u).format("yyyy-MM-dd")))),g["default"].createElement("div",{className:(0,w["default"])(v["default"].depositBox,v["default"].pdAll)},g["default"].createElement("ul",{className:v["default"].iconUl},g["default"].createElement("li",{onClick:function(){n("/gatherBorrowDetail/"+a)}},g["default"].createElement("span",null,g["default"].createElement("img",{src:L["default"]})),g["default"].createElement("span",null,"借款详情")),g["default"].createElement("li",{onClick:function(){n("/gatherBackDetail/"+a)}},g["default"].createElement("span",null,g["default"].createElement("img",{src:D["default"]})),g["default"].createElement("span",null,"还款详情")),g["default"].createElement("li",{onClick:function(){n("/gatherInvestRecord/"+a)}},g["default"].createElement("span",null,g["default"].createElement("img",{src:P["default"]})),g["default"].createElement("span",null,"投资记录")))),g["default"].createElement("div",{className:v["default"].tip},"温馨提示：理财有风险 投资需谨慎"))},l.succsseFn=function(e){q["default"].setUrl(e)},o=a,i(l,o)}return o(t,e),m(t,[{key:"componentWillMount",value:function(){this.setState({type:this.props.params.type})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params.id,a=e.get;a(t)}},{key:"loading",value:function(){return g["default"].createElement(Y["default"],null)}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.pop,l=(this.state.type,this.loading());return t&&(l=this.loadEnd()),g["default"].createElement("div",{className:v["default"].root},g["default"].createElement(h["default"],{onLeft:a},t&&t.data.name),l)}}]),t}(g["default"].Component),O=function(e){return{data:e.infodata.getIn(["GATHER_BID_DETAIL","data"])}},Z=function(e){return{push:function(t){e((0,B.push)(t))},pop:function(){e((0,B.goBack)())},get:function(t){e({type:"GATHER_BID_DETAIL",params:[t]})}}};t["default"]=(0,j.connect)(O,Z)((0,T["default"])(J))},1702:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___3p6rS{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5;padding-bottom:50px}.timeBox___2K8wl{margin-top:10px}.endTime___2jeTi{position:absolute;right:0;top:0}.endTime___2jeTi img{width:13px}.suJt___2lfgO{width:10px;height:20px;float:right;margin-top:-2px}.depositBox___2vKQm{background-color:#fff;margin-top:10px}.pds___3ytv2{padding:0 15px}.profit___wQztz{padding:15px 0;border-bottom:1px solid #e5e5e5}.profit___wQztz p{padding:0 15px;font-size:16px}.pdAll___z_oH0{padding:20px 17px}.iconUl___2vNLj{display:block;width:100%}.iconUl___2vNLj li{display:inline-block;width:33.33333%}.iconUl___2vNLj li span{display:block;width:100%;text-align:center;font-size:12px;color:#666}.iconUl___2vNLj li img{width:30px;margin-bottom:10px}.pdAll1___3K15S{padding:15px}.hx___1a6mq{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.modalStyle___2sEC_{position:fixed;z-index:999}.modalBody___VZinp{position:absolute;bottom:0;padding-bottom:30px;height:auto}.suBox___bM324{padding:10px 15px;font-size:16px}.listInfo___2dPdX,.suBox___bM324{background-color:#fff;margin-top:10px}.listInfo___2dPdX{padding-bottom:10px}.listInfo___2dPdX .item___1l8uc{padding-top:10px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.listInfo___2dPdX .item___1l8uc .left___3YIJh{padding-left:15px;color:#888;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.listInfo___2dPdX .item___1l8uc .right___3t17t{padding-right:15px;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;color:#777;text-align:right}.tip___3VhZh{margin-top:30px;text-align:center;color:#aaa}",""]),t.locals={root:"root___3p6rS",timeBox:"timeBox___2K8wl",endTime:"endTime___2jeTi",suJt:"suJt___2lfgO",depositBox:"depositBox___2vKQm",pds:"pds___3ytv2",profit:"profit___wQztz",pdAll:"pdAll___z_oH0",iconUl:"iconUl___2vNLj",pdAll1:"pdAll1___3K15S",hx:"hx___1a6mq",modalStyle:"modalStyle___2sEC_",modalBody:"modalBody___VZinp",suBox:"suBox___bM324",listInfo:"listInfo___2dPdX",item:"item___1l8uc",left:"left___3YIJh",right:"right___3t17t",tip:"tip___3VhZh"}},2290:[2383,1702]});