webpackJsonp([5],{138:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,d,u=a(2),f=l(u),c=a(5),s=l(c),_=a(3),p=l(_),m=a(4),x=l(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,f["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),g=a(1),h=l(g),y=a(169),E=l(y),v=a(16),k=l(v),T=(d=i=function(e){function t(){return n(this,t),o(this,(t.__proto__||(0,x["default"])(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,l=e.activityName,n=e.rateA,o=e.rateB;return h["default"].createElement("div",{className:E["default"].header},h["default"].createElement("p",{className:E["default"].lxYear},"年利率(%)"),h["default"].createElement("p",{className:E["default"].lxNum},function(){var e=l.split("|"),a=!1;return e.length>0&&""!=l&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?h["default"].createElement("span",null,n,"0.00"==o?"":h["default"].createElement("span",{style:{fontSize:"36px"}},"+",o)):h["default"].createElement("span",null,t)}()),h["default"].createElement("div",{className:E["default"].lxContent},a&&a.map(function(e,t){var a=e.name,l=e.val;return h["default"].createElement("span",{key:t},h["default"].createElement("p",{className:E["default"].textColor},a),h["default"].createElement("p",null,l))})))}}]),t}(g.Component),i.propTypes={rate:k["default"].string,data:k["default"].array,activityName:k["default"].string,rateA:k["default"].string,rateB:k["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},d);t["default"]=T},157:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},169:[2300,157],315:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,d,u=a(2),f=l(u),c=a(5),s=l(c),_=a(3),p=l(_),m=a(4),x=l(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,f["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),g=a(1),h=l(g),y=a(432),E=l(y),v=a(296),k=l(v),T=a(295),N=l(T),w=a(294),B=l(w),C=a(292),A=l(C),j=a(16),I=l(j),L=(d=i=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return a.state={lx:["抵押标","担保标"]},a}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.startTime,a=e.endTime,l=e.type,n=e.repayment;return h["default"].createElement("div",{className:E["default"].depositBox},h["default"].createElement("ul",{className:E["default"].depositUl},h["default"].createElement("li",{className:E["default"].depositLi},h["default"].createElement("div",{className:E["default"].tbBox},h["default"].createElement("ul",null,h["default"].createElement("li",null,h["default"].createElement("span",{className:E["default"].startTime},h["default"].createElement("img",{src:k["default"]})),h["default"].createElement("span",{className:E["default"].goNext})),h["default"].createElement("li",null,h["default"].createElement("span",{className:E["default"].hx}),h["default"].createElement("span",{className:E["default"].locking},"A"==l&&h["default"].createElement("img",{src:N["default"]})||h["default"].createElement("img",{src:A["default"]})),h["default"].createElement("span",{className:E["default"].hx})),h["default"].createElement("li",null,h["default"].createElement("span",{className:E["default"].goNext}),h["default"].createElement("span",{className:E["default"].endTime},h["default"].createElement("img",{src:B["default"]}))))),h["default"].createElement("div",{className:E["default"].tbText},h["default"].createElement("ul",null,h["default"].createElement("li",null,h["default"].createElement("p",{className:E["default"].tbName},"起息日"),h["default"].createElement("p",{className:E["default"].timeText},t)),h["default"].createElement("li",null,h["default"].createElement("p",null,"A"==l&&"锁定期"||n)),h["default"].createElement("li",null,h["default"].createElement("p",{className:E["default"].tbName},"本息到账"),h["default"].createElement("p",{className:E["default"].timeText},a)))))))}}]),t}(g.Component),i.propTypes={startTime:I["default"].string,endTime:I["default"].string,type:I["default"].string,lx:I["default"].number,Grade:I["default"].string,repayment:I["default"].string},i.defaultProps={startTime:"20170214",endTime:"20170214",type:"A",lx:2,Grade:"A",repayment:"每月还息 到期还本"},d);t["default"]=L},364:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".depositBox___2F1qU,.depositLi___3A5gb{background-color:#fff}.depositLi___3A5gb{display:block}.depositLi___3A5gb .tbBox___3L3Y9{padding:20px 34px 0}.depositLi___3A5gb .tbBox___3L3Y9 ul{display:block;width:100%;margin-bottom:10px}.depositLi___3A5gb .tbBox___3L3Y9 ul li{display:inline-block;width:33.33333%;vertical-align:top;position:relative}.depositLi___3A5gb .tbBox___3L3Y9 ul li:nth-of-type(1){padding-left:15px}.depositLi___3A5gb .tbBox___3L3Y9 ul li:nth-of-type(3){padding-right:15px}.goNext___2_xbb{width:100%;background-color:#e5e5e5;height:3px;display:inline-block;vertical-align:middle;margin-top:-5px}.startTime___ae9CD{position:absolute;left:0;top:0}.startTime___ae9CD img{width:13px}.locking___1cnM-{display:inline-block;width:17px;background-color:#fff;position:absolute;left:50%;margin-left:-8.5px;text-align:center}.locking___1cnM- img{width:13px}.endTime___1Kp2o{position:absolute;right:0;top:0}.endTime___1Kp2o img{width:13px}.tbText___Ij9xD{padding:0 15px;border-bottom:1px solid #e5e5e5}.tbText___Ij9xD ul{display:block;width:100%;margin-bottom:20px}.tbText___Ij9xD ul li{display:inline-block;width:33.33333%;vertical-align:top;font-size:12px;color:#666}.tbText___Ij9xD ul li:nth-of-type(2){text-align:center}.tbText___Ij9xD ul li:nth-of-type(3){text-align:right}.tbText___Ij9xD ul li .tbName___Xee_Y{padding-bottom:6px}.tbText___Ij9xD ul li .timeText___1004W{font-size:11px;color:#aaa}.hx___2s85e{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.msBox___1Q-pn{padding:15px;background-color:#fff}.msBox___1Q-pn p{font-size:14px;color:#aaa}.msBox___1Q-pn p:nth-of-type(1){margin-bottom:10px}.msBox___1Q-pn .dbType___1Z_jf{color:#666;float:right;text-align:right}",""]),t.locals={depositBox:"depositBox___2F1qU",depositLi:"depositLi___3A5gb",tbBox:"tbBox___3L3Y9",goNext:"goNext___2_xbb",startTime:"startTime___ae9CD",locking:"locking___1cnM-",endTime:"endTime___1Kp2o",tbText:"tbText___Ij9xD",tbName:"tbName___Xee_Y",timeText:"timeText___1004W",hx:"hx___2s85e",msBox:"msBox___1Q-pn",dbType:"dbType___1Z_jf"}},432:[2300,364],785:function(e,t,a){e.exports=a.p+"static/media/icon-01.98125c38.png"},786:function(e,t,a){e.exports=a.p+"static/media/icon-02.9116ed96.png"},787:function(e,t,a){e.exports=a.p+"static/media/icon-03.6376a9f6.png"},788:function(e,t,a){e.exports=a.p+"static/media/icon-04.030b2889.png"},1017:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),d=l(i),u=a(5),f=l(u),c=a(3),s=l(c),_=a(4),p=l(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,d["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),x=a(1),b=l(x),g=a(11),h=l(g),y=a(173),E=l(y),v=a(2212),k=l(v),T=a(15),N=l(T),w=a(21),B=l(w),C=a(9),A=a(10),j=a(53),I=l(j),L=(a(19),a(785)),M=l(L),z=a(786),D=l(z),O=a(787),R=l(O),S=a(788),Y=l(S),F=a(18),P=l(F),U=a(138),W=l(U),V=a(315),X=l(V),G=a(61),K=l(G),J=a(68),Q=l(J),q=a(20),H=function(e){function t(){var e,a,l,r;n(this,t);for(var i=arguments.length,d=Array(i),u=0;u<i;u++)d[u]=arguments[u];return a=l=o(this,(e=t.__proto__||(0,p["default"])(t)).call.apply(e,[this].concat(d))),l.state={descActive:!1,type:2},l.Timer=function(e){var t=l.props,a=t.datas,n=t.datasB,o=t.params,r=(o.id,o.type),i=a;"B"==r&&(i=n);var d=i.data.currentTime,u=void 0,f=void 0,c=new Date(1e3*parseInt(d)),s=c.getFullYear(),_=c.getMonth()+1,p=c.getDate();return u=s+"年"+_+"月"+p+"日",_+=parseInt(e),_>12&&(_-=12,s+=1),f=s+"年"+_+"月"+p+"日",{startTime:u,endTime:f}},l.moneyFn=function(e,t){var a=parseFloat(1e4*e/100*(t/12)).toString();return a.indexOf(".")!=-1&&(a=a.substring(0,a.indexOf(".")+3)),a},l.loadEnd=function(){var e=l.props,t=e.data,a=e.push,n=t.data,o=n.id,r=n.rate,i=n.buy_total,d=n.buy_status,u=n.value_start_date,f=n.value_end_date,c=n.type,s=n.has_money,_=n.money,p=n.price,m=n.title,x=n.month;r=parseFloat(r).toFixed(2);var g="锁定时间",h=[{name:"起投金额",val:p},{name:g,val:x+"个月"}],y="",v=!0;return 0==d?parseInt(s)>=parseInt(_)?(y="已售罄",v=!0):(y="马上买入",v=!1):1==d?(y="未开始",v=!0):2==d&&(y="已结束",v=!0),b["default"].createElement("div",null,b["default"].createElement(W["default"],{rate:r,data:h}),b["default"].createElement("div",{className:k["default"].timeBox},b["default"].createElement(X["default"],{repayment:"到期还本息",startTime:u,endTime:f,type:c})),b["default"].createElement("div",{className:k["default"].depositBox},b["default"].createElement("div",{className:k["default"].profit},b["default"].createElement("p",null,"收益估算")),b["default"].createElement("div",{className:k["default"].profitContent},b["default"].createElement("p",{className:k["default"].profitText},"投资10000元，",x,"个月后到期预计预期可赚"),b["default"].createElement("p",{className:k["default"].profitText1},"具体收益以实际到账为准"),b["default"].createElement("p",{className:k["default"].profitNum},l.moneyFn(r,x),b["default"].createElement("span",null,"元")))),b["default"].createElement("div",{className:(0,N["default"])(k["default"].depositBox,k["default"].pdAll)},b["default"].createElement("ul",{className:k["default"].iconUl},b["default"].createElement("li",{onClick:function(){a("/gatherDetail/"+m+"/"+x)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:M["default"]})),b["default"].createElement("span",null,"产品详情")),b["default"].createElement("li",{onClick:function(){a("/gatherDeposits/"+o)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:D["default"]})),b["default"].createElement("span",null,"标的详情")),b["default"].createElement("li",{onClick:function(){a("/gatherJoin/"+o)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:R["default"]})),b["default"].createElement("span",null,"加入记录")),b["default"].createElement("li",{onClick:function(){a("/gatherProblems")}},b["default"].createElement("span",null,b["default"].createElement("img",{src:Y["default"]})),b["default"].createElement("span",null,"常见问题")))),b["default"].createElement("div",{className:(0,N["default"])(k["default"].depositBox,k["default"].pdAll1)},"累计加入",i,"人"),b["default"].createElement("div",{className:k["default"].bottom},b["default"].createElement("div",{onClick:function(){return l.refs.calculator.show()},className:k["default"].calculator}),b["default"].createElement("button",{onClick:function(){l.purchase(o,a)},disabled:v,style:v&&{backgroundColor:"#aaa"}||{}},y)),b["default"].createElement(E["default"],{ref:"calculator",unit:"m",rate:r,term:x,amount:1e4,modalStyle:k["default"].modalStyle,modalBody:k["default"].modalBody}),b["default"].createElement(K["default"],{ref:"isAuth"}),b["default"].createElement(I["default"],{ref:"store"}," "))},l.purchase=function(e,t){var a=JSON.parse(sessionStorage.getItem("bao-store")),n=l.props.params.type;a&&a.isRegister&&a.isBindBankcard?l.refs.isAuth.Verification("/gatherBuy/"+e+"/"+n,t,l.succsseFn,l.props.location.pathname):a&&a.isRegister?t("/user/setting/cardBind"):l.refs.store.show()},l.succsseFn=function(e){Q["default"].setUrl(e)},r=a,o(l,r)}return r(t,e),m(t,[{key:"componentWillMount",value:function(){this.setState({type:this.props.params.type})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params.productId,a=e.get;a(t)}},{key:"loading",value:function(){return b["default"].createElement(P["default"],null)}},{key:"render",value:function(){var e=this.props,t=e.data,a=(e.pop,e.backgroundColor),l=this.state.type,n=this.loading();t&&(n=this.loadEnd());var o=a?{borderRightColor:a}:{borderRightColor:"#00a6e2"};return b["default"].createElement("div",{className:k["default"].root},b["default"].createElement(h["default"],{leftNode:b["default"].createElement(q.Link,{className:k["default"].leftNode,to:"/home/productIndex"},b["default"].createElement("span",null,b["default"].createElement("span",{className:k["default"].backBefore},"  ")," ",b["default"].createElement("span",{className:k["default"].backAfter,style:o})))},5==l?"新手标计划详情":"聚点+详情"),n)}}]),t}(b["default"].Component),Z=function(e){return{data:e.infodata.getIn(["GATHER_DETAIL","data"])}},$=function(e){return{push:function(t){e((0,C.push)(t))},pop:function(){e((0,C.goBack)())},get:function(t){e({type:"GATHER_DETAIL",params:[t]})}}};t["default"]=(0,A.connect)(Z,$)((0,B["default"])(H))},1178:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1017),o=l(n);t["default"]=o["default"]},1636:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___86RKZ{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5;padding-bottom:50px}.backAfter___1a04n,.backBefore___3zxrT{border:10px solid transparent;border-right:10px solid #00a6e2;width:0;height:0;position:absolute;top:12px;left:4px;content:' '}.backBefore___3zxrT{border-right-color:#fff;left:2px}.timeBox___JRtuc{margin-top:10px}.endTime___269tV{position:absolute;right:0;top:0}.endTime___269tV img{width:13px}.depositBox___tgeuK{background-color:#fff;margin-top:10px}.pds___2wEn5{padding:0 15px}.profit___3tl2L{padding:15px 0;border-bottom:1px solid #e5e5e5}.profit___3tl2L p{padding:0 15px;font-size:16px}.profitContent___stjcM{padding:15px 15px 23px}.profitContent___stjcM .profitText___1BHTA{font-size:14px;color:#666;margin-bottom:6px}.profitContent___stjcM .profitText1___pytnj{font-size:12px;color:#d2d2d2;margin-bottom:20px}.profitContent___stjcM .profitNum___3aB8R{font-size:22px;color:#f70;vertical-align:bottom}.profitContent___stjcM .profitNum___3aB8R span{display:inline-block;font-size:14px;padding-bottom:4px;vertical-align:bottom}.pdAll___2wCuW{padding:20px 17px}.iconUl___fsmCV{display:block;width:100%}.iconUl___fsmCV li{display:inline-block;width:25%}.iconUl___fsmCV li span{display:block;width:100%;text-align:center;font-size:12px;color:#666}.iconUl___fsmCV li img{width:30px;margin-bottom:10px}.pdAll1___3mTW3{padding:15px}.hx___cs9ji{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.modalStyle___lyle2{position:fixed;z-index:999}.modalBody___FWGWG{position:absolute;bottom:0;padding-bottom:30px;height:auto}.bottom___OfgXI{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___OfgXI,.bottom___OfgXI .calculator___2Ogsf{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.bottom___OfgXI .calculator___2Ogsf{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.bottom___OfgXI .calculator___2Ogsf:before{height:70%;width:50%;content:'';background:url("+a(203)+") 50% no-repeat;background-size:contain}.bottom___OfgXI button{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}",""]),t.locals={root:"root___86RKZ",backBefore:"backBefore___3zxrT",backAfter:"backAfter___1a04n",timeBox:"timeBox___JRtuc",endTime:"endTime___269tV",depositBox:"depositBox___tgeuK",pds:"pds___2wEn5",profit:"profit___3tl2L",profitContent:"profitContent___stjcM",profitText:"profitText___1BHTA",profitText1:"profitText1___pytnj",profitNum:"profitNum___3aB8R",pdAll:"pdAll___2wCuW",iconUl:"iconUl___fsmCV",pdAll1:"pdAll1___3mTW3",hx:"hx___cs9ji",modalStyle:"modalStyle___lyle2",modalBody:"modalBody___FWGWG",bottom:"bottom___OfgXI",calculator:"calculator___2Ogsf"}},2212:[2302,1636]});