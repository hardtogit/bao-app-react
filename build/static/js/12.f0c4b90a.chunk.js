webpackJsonp([12],{139:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,d,u=a(2),s=o(u),f=a(5),p=o(f),c=a(3),_=o(c),m=a(4),x=o(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s["default"])(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),g=a(1),h=o(g),y=a(173),E=o(y),v=a(15),k=o(v),B=(d=i=function(e){function t(){return n(this,t),l(this,(t.__proto__||(0,x["default"])(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,o=e.activityName,n=e.rateA,l=e.rateB;return h["default"].createElement("div",{className:E["default"].header},h["default"].createElement("p",{className:E["default"].lxYear},"预期年化利率(%)"),h["default"].createElement("p",{className:E["default"].lxNum},function(){var e=o.split("|"),a=!1;return e.length>0&&""!=o&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?h["default"].createElement("span",null,n,"0.00"==l?"":h["default"].createElement("span",{style:{fontSize:"36px"}},"+",l)):h["default"].createElement("span",null,t)}()),h["default"].createElement("div",{className:E["default"].lxContent},a&&a.map(function(e,t){var a=e.name,o=e.val;return h["default"].createElement("span",{key:t},h["default"].createElement("p",{className:E["default"].textColor},a),h["default"].createElement("p",null,o))})))}}]),t}(g.Component),i.propTypes={rate:k["default"].string,data:k["default"].array,activityName:k["default"].string,rateA:k["default"].string,rateB:k["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},d);t["default"]=B},158:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},173:[2572,158],936:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),d=o(i),u=a(5),s=o(u),f=a(3),p=o(f),c=a(4),_=o(c),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,d["default"])(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),x=a(1),b=o(x),g=a(10),h=o(g),y=a(175),E=o(y),v=a(2483),k=o(v),B=a(13),T=o(B),N=a(47),A=o(N),C=a(22),w=o(C),S=a(8),I=a(9),D=a(20),U=a(2097),O=o(U),P=a(2037),j=o(P),M=a(1963),R=o(M),z=a(2089),L=o(z),F=a(18),W=o(F),Y=a(139),J=o(Y),V=a(323),X=o(V),Z=a(58),q=o(Z),H=a(69),Q=o(H),G=a(19),K=function(e){function t(){var e,a,o,r;n(this,t);for(var i=arguments.length,d=Array(i),u=0;u<i;u++)d[u]=arguments[u];return a=o=l(this,(e=t.__proto__||(0,_["default"])(t)).call.apply(e,[this].concat(d))),o.state={descActive:!1,type:"A"},o.Timer=function(e){var t=o.props,a=t.datas,n=t.datasB,l=t.params,r=(l.id,l.type),i=a;"B"==r&&(i=n);var d=i.data,u=d.startTime,s=d.endTime;return{startTime:u,endTime:s}},o.moneyFn=function(e,t){var a=parseFloat(1e4*e/100*(t/12)).toString();return a.indexOf(".")!=-1&&(a=a.substring(0,a.indexOf(".")+3)),a},o.loadEnd=function(e,t,a){var n=o.props,l=n.push,r=n.deposit,i=n.datas,d=n.datasB,u=n.new_deposit,s=n.params,f=s.id,p=s.type,c=o.state.type,_=0,m=0,x=1e3,g=r,h=i;"B"==p&&(g=e,h=d),5!=f?(_=g[f].rate,m=g[f].month):(_=u.rate,m=u.month,x=50),_=parseFloat(_).toFixed(2);var y=o.Timer(m,g),v=y.startTime,B=y.endTime,N=o.moneyFn(_,m),A="A"==p?"锁定时间":"投资时间",C=[{name:"起投金额",val:x},{name:A,val:m+"个月"}],w="马上买入",S=!1;return t&&0==a?(w="已售罄",S=!0):t||(w="未开始",S=!0),b["default"].createElement("div",null,b["default"].createElement(J["default"],{rate:_,data:C}),b["default"].createElement("div",{className:k["default"].timeBox},b["default"].createElement(X["default"],{startTime:v,endTime:B,type:c})),b["default"].createElement("div",{className:k["default"].depositBox},b["default"].createElement("div",{className:k["default"].profit},b["default"].createElement("p",null,"收益估算")),b["default"].createElement("div",{className:k["default"].profitContent},b["default"].createElement("p",{className:k["default"].profitText},"投资10000元，",m,"个月后到期预计预期可赚"),b["default"].createElement("p",{className:k["default"].profitText1},"具体收益以实际到账为准"),b["default"].createElement("p",{className:k["default"].profitNum},N,b["default"].createElement("span",null,"元")))),b["default"].createElement("div",{className:(0,T["default"])(k["default"].depositBox,k["default"].pdAll)},b["default"].createElement("ul",{className:k["default"].iconUl},b["default"].createElement("li",{onClick:function(){l("/safeplan")}},b["default"].createElement("span",null,b["default"].createElement("img",{src:O["default"]})),b["default"].createElement("span",null,"风险控制")),b["default"].createElement("li",{onClick:function(){l("/depositDetails")}},b["default"].createElement("span",null,b["default"].createElement("img",{src:j["default"]})),b["default"].createElement("span",null,"定存宝介绍")),b["default"].createElement("li",{onClick:function(){l("/planDetails/"+f+"/"+o.props.params.type)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:R["default"]})),b["default"].createElement("span",null,"计划详情")),b["default"].createElement("li",{onClick:function(){l("/demand-related-projects/"+h.data.periods+"/"+p)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:L["default"]})),b["default"].createElement("span",null,"涉及项目")))),b["default"].createElement("div",{className:(0,T["default"])(k["default"].depositBox,k["default"].pdAll1)},"累计加入",h.data.total,"人"),b["default"].createElement("div",{className:k["default"].bottom},b["default"].createElement("div",{onClick:function(){return o.refs.calculator.show()},className:k["default"].calculator}),b["default"].createElement("button",{onClick:function(){o.purchase(f,p,l)},disabled:S,style:S&&{backgroundColor:"#aaa"}||{}},w)),b["default"].createElement(E["default"],{ref:"calculator",unit:"m",rate:_,term:m,amount:1e4,rateMap:r.map(function(e){var t=e.rate,a=e.month;return{term:a,rate:t}}),modalStyle:k["default"].modalStyle,modalBody:k["default"].modalBody}),b["default"].createElement(q["default"],{ref:"isAuth"}))},o.purchase=function(e,t,a){var n=JSON.parse(sessionStorage.getItem("bao-store"));return n&&n.isAuthIdentity&&n.isSecurityCard?void o.refs.isAuth.Verification("/deposit-buy/"+e+"/"+t+"/"+o.props.params.productId,a,o.succsseFn,o.props.location.pathname):void(n&&n.isRegister&&n.isBindBankcard?o.refs.isAuth.Verification("/deposit-buy/"+e+"/"+t+"/"+o.props.params.productId,a,o.succsseFn,o.props.location.pathname):n&&n.isRegister?a("/user/setting/authorization"):o.refs.store.show())},o.succsseFn=function(e){Q["default"].setUrl(e)},r=a,l(o,r)}return r(t,e),m(t,[{key:"componentWillMount",value:function(){this.setState({type:this.props.params.type})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params,a=t.type,o=t.productId,n=e.getList,l=e.get,r=e.getB,i=JSON.parse(sessionStorage.getItem("bao-depositbs"));"B"==a&&(r(o),null==i&&n()),"A"==a&&l(o)}},{key:"loading",value:function(){return b["default"].createElement(W["default"],null)}},{key:"render",value:function(){var e=this.props,t=e.datas,a=(e.pop,e.datasB),o=e.backgroundColor,n=e.params,l=n.type,r=n.id,i=this.state.type,d=this.loading();if("A"==l){var u=JSON.parse(sessionStorage.getItem("bao-deposit"));if(t){var s=!0;s=5!=r?u.deposit[r].isBuy:u.new_deposit.isBuy,d=this.loadEnd("",s,t.data.quantity)}}else{var f=JSON.parse(sessionStorage.getItem("bao-depositbs"));a&&f&&(d=this.loadEnd(f.list,f.list[r].isBuy,a.data.remain))}var p=o?{borderRightColor:o}:{borderRightColor:"#00a6e2"};return b["default"].createElement("div",{className:k["default"].root},b["default"].createElement(A["default"],{ref:"store"}),b["default"].createElement(h["default"],{leftNode:b["default"].createElement(G.Link,{className:k["default"].leftNode,to:"/home/productIndex"},b["default"].createElement("span",null,b["default"].createElement("span",{className:k["default"].backBefore},"  ")," ",b["default"].createElement("span",{className:k["default"].backAfter,style:p})))},"A"==i&&(5==r&&"新手标计划详情"||"定存宝A计划详情")||"定存宝B计划详情"),d)}}]),t}(b["default"].Component),$=function(e){return{deposit:e.infodata.getIn([D.RATE,"data"])&&e.infodata.getIn([D.RATE,"data"]).data.deposit||[],new_deposit:e.infodata.getIn([D.RATE,"data"])&&e.infodata.getIn([D.RATE,"data"]).data.new_deposit||{},total:e.infodata.getIn([D.DEPOSIT_DETAIL,"data"])&&e.infodata.getIn([D.DEPOSIT_DETAIL,"data"]).data.total||0,userInfoCode:e.infodata.getIn([D.USER_INFO,"data"])&&e.infodata.getIn([D.USER_INFO,"data"]).code||0,datas:e.infodata.getIn(["DEPOSIT_DETAILS","data"]),datasB:e.infodata.getIn(["DEPOSITBS_DETAILS","data"])}},ee=function(e){return{push:function(t){e((0,S.push)(t))},pop:function(){e((0,S.goBack)())},get:function(t){e({type:"DEPOSIT_DETAILS",params:[t]})},getB:function(t){e({type:"DEPOSITBS_DETAILS",params:[t]})},getList:function(){e({type:"DEPOSITBS_PLANB"})}}};t["default"]=(0,I.connect)($,ee)((0,w["default"])(K))},1117:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(936),l=o(n);t["default"]=l["default"]},1637:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___PGcrB{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5;padding-bottom:50px}.timeBox___aUYku{margin-top:10px}.backAfter___13uu8,.backBefore___6H7Nm{border:10px solid transparent;border-right:10px solid #00a6e2;width:0;height:0;position:absolute;top:12px;left:4px;content:' '}.backBefore___6H7Nm{border-right-color:#fff;left:2px}.endTime___3WbTS{position:absolute;right:0;top:0}.endTime___3WbTS img{width:13px}.depositBox___3rdr7{background-color:#fff;margin-top:10px}.pds___12edn{padding:0 15px}.profit___iQEsB{padding:15px 0;border-bottom:1px solid #e5e5e5}.profit___iQEsB p{padding:0 15px;font-size:16px}.profitContent___g2haA{padding:15px 15px 23px}.profitContent___g2haA .profitText___1-uj3{font-size:14px;color:#666;margin-bottom:6px}.profitContent___g2haA .profitText1___3V1aW{font-size:12px;color:#d2d2d2;margin-bottom:20px}.profitContent___g2haA .profitNum___1rg2u{font-size:22px;color:#f70;vertical-align:bottom}.profitContent___g2haA .profitNum___1rg2u span{display:inline-block;font-size:14px;padding-bottom:4px;vertical-align:bottom}.pdAll___2XmL7{padding:20px 17px}.iconUl___1txDC{display:block;width:100%}.iconUl___1txDC li{display:inline-block;width:25%}.iconUl___1txDC li span{display:block;width:100%;text-align:center;font-size:12px;color:#666}.iconUl___1txDC li img{width:30px;margin-bottom:10px}.pdAll1___2-mOg{padding:15px}.hx___1vUi7{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.modalStyle___2aTrb{position:fixed;z-index:999}.modalBody___18cX-{position:absolute;bottom:0;padding-bottom:30px;height:auto}.bottom___1MvUc{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___1MvUc,.bottom___1MvUc .calculator___bbZtB{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.bottom___1MvUc .calculator___bbZtB{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.bottom___1MvUc .calculator___bbZtB:before{height:70%;width:50%;content:'';background:url("+a(235)+") 50% no-repeat;background-size:contain}.bottom___1MvUc button{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}",""]),t.locals={root:"root___PGcrB",timeBox:"timeBox___aUYku",backBefore:"backBefore___6H7Nm",backAfter:"backAfter___13uu8",endTime:"endTime___3WbTS",depositBox:"depositBox___3rdr7",pds:"pds___12edn",profit:"profit___iQEsB",profitContent:"profitContent___g2haA",profitText:"profitText___1-uj3",profitText1:"profitText1___3V1aW",profitNum:"profitNum___1rg2u",pdAll:"pdAll___2XmL7",iconUl:"iconUl___1txDC",pdAll1:"pdAll1___2-mOg",hx:"hx___1vUi7",modalStyle:"modalStyle___2aTrb",modalBody:"modalBody___18cX-",bottom:"bottom___1MvUc",calculator:"calculator___bbZtB"}},1963:function(e,t,a){e.exports=a.p+"static/media/details.9250ca59.png"},2037:function(e,t,a){e.exports=a.p+"static/media/introduce.5b87b227.png"},2089:function(e,t,a){e.exports=a.p+"static/media/project.462ae2df.png"},2097:function(e,t,a){e.exports=a.p+"static/media/security.ae2342d4.png"},2483:[2573,1637]});