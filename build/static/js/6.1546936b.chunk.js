webpackJsonp([6],{270:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,d,u=a(2),p=n(u),f=a(5),s=n(f),c=a(3),_=n(c),m=a(4),x=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,p["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),h=n(g),y=a(401),E=n(y),v=a(15),T=n(v),k=(d=i=function(e){function t(){return o(this,t),l(this,(t.__proto__||(0,x["default"])(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,n=e.activityName,o=e.rateA,l=e.rateB;return h["default"].createElement("div",{className:E["default"].header},h["default"].createElement("p",{className:E["default"].lxYear},"年利率(%)"),h["default"].createElement("p",{className:E["default"].lxNum},function(){var e=n.split("|"),a=!1;return e.length>0&&""!=n&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?h["default"].createElement("span",null,o,h["default"].createElement("span",{style:{fontSize:"36px"}},"+",l)):h["default"].createElement("span",null,t)}()),h["default"].createElement("div",{className:E["default"].lxContent},a&&a.map(function(e,t){var a=e.name,n=e.val;return h["default"].createElement("span",{key:t},h["default"].createElement("p",{className:E["default"].textColor},a),h["default"].createElement("p",null,n))})))}}]),t}(g.Component),i.propTypes={rate:T["default"].string,data:T["default"].array,activityName:T["default"].string,rateA:T["default"].string,rateB:T["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},d);t["default"]=k},323:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},401:[2089,323],813:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),d=n(i),u=a(5),p=n(u),f=a(3),s=n(f),c=a(4),_=n(c),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),b=n(x),g=a(11),h=n(g),y=a(209),E=n(y),v=a(2003),T=n(v),k=a(16),B=n(k),w=a(21),C=n(w),N=a(10),A=a(9),S=a(18),I=a(1711),D=n(I),U=a(1658),O=n(U),P=a(1648),M=n(P),j=a(1701),z=n(j),L=a(19),F=n(L),R=a(270),Y=n(R),W=a(269),J=n(W),X=a(90),Z=n(X),q=a(82),Q=n(q),V=function(e){function t(){var e,a,n,r;o(this,t);for(var i=arguments.length,d=Array(i),u=0;u<i;u++)d[u]=arguments[u];return a=n=l(this,(e=t.__proto__||(0,_["default"])(t)).call.apply(e,[this].concat(d))),n.state={descActive:!1,type:"A"},n.Timer=function(e){var t=n.props,a=t.datas,o=t.datasB,l=t.params,r=(l.id,l.type),i=a;"B"==r&&(i=o);var d=i.data.currentTime,u=void 0,p=void 0,f=new Date(1e3*parseInt(d)),s=f.getFullYear(),c=f.getMonth()+1,_=f.getDate();return u=s+"年"+c+"月"+_+"日",c+=parseInt(e),c>12&&(c-=12,s+=1),p=s+"年"+c+"月"+_+"日",{startTime:u,endTime:p}},n.moneyFn=function(e,t){var a=parseFloat(1e4*e/100*(t/12)).toString();return a.indexOf(".")!=-1&&(a=a.substring(0,a.indexOf(".")+3)),a},n.loadEnd=function(e,t,a){var o=n.props,l=o.push,r=o.deposit,i=o.datas,d=o.datasB,u=o.new_deposit,p=o.params,f=p.id,s=p.type,c=n.state.type,_=0,m=0,x=1e3,g=r,h=i;"B"==s&&(g=e,h=d),5!=f?(_=g[f].rate,m=g[f].month):(_=u.rate,m=u.month,x=50),_=parseFloat(_).toFixed(2);var y=n.Timer(m,g),v=y.startTime,k=y.endTime,w=n.moneyFn(_,m),C="A"==s?"锁定时间":"投资时间",N=[{name:"起投金额",val:x},{name:C,val:m+"个月"}],A="马上买入",S=!1;return t&&0==a?(A="已售罄",S=!0):t||(A="未开始",S=!0),b["default"].createElement("div",null,b["default"].createElement(Y["default"],{rate:_,data:N}),b["default"].createElement("div",{className:T["default"].timeBox},b["default"].createElement(J["default"],{startTime:v,endTime:k,type:c})),b["default"].createElement("div",{className:T["default"].depositBox},b["default"].createElement("div",{className:T["default"].profit},b["default"].createElement("p",null,"收益估算")),b["default"].createElement("div",{className:T["default"].profitContent},b["default"].createElement("p",{className:T["default"].profitText},"投资10000元，",m,"个月后到期预计预期可赚"),b["default"].createElement("p",{className:T["default"].profitText1},"具体收益以实际到账为准"),b["default"].createElement("p",{className:T["default"].profitNum},w,b["default"].createElement("span",null,"元")))),b["default"].createElement("div",{className:(0,B["default"])(T["default"].depositBox,T["default"].pdAll)},b["default"].createElement("ul",{className:T["default"].iconUl},b["default"].createElement("li",{onClick:function(){l("/safeplan")}},b["default"].createElement("span",null,b["default"].createElement("img",{src:D["default"]})),b["default"].createElement("span",null,"安全保障")),b["default"].createElement("li",{onClick:function(){l("/depositDetails")}},b["default"].createElement("span",null,b["default"].createElement("img",{src:O["default"]})),b["default"].createElement("span",null,"定存宝介绍")),b["default"].createElement("li",{onClick:function(){l("/planDetails/"+f+"/"+n.props.params.type)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:M["default"]})),b["default"].createElement("span",null,"计划详情")),b["default"].createElement("li",{onClick:function(){l("/demand-related-projects/"+h.data.periods+"/"+s)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:z["default"]})),b["default"].createElement("span",null,"涉及项目")))),b["default"].createElement("div",{className:(0,B["default"])(T["default"].depositBox,T["default"].pdAll1)},"累计加入",h.data.total,"人"),b["default"].createElement("div",{className:T["default"].bottom},b["default"].createElement("div",{onClick:function(){return n.refs.calculator.show()},className:T["default"].calculator}),b["default"].createElement("button",{onClick:function(){n.purchase(f,s,l)},disabled:S,style:S&&{backgroundColor:"#aaa"}||{}},A)),b["default"].createElement(E["default"],{ref:"calculator",unit:"m",rate:_,term:m,amount:1e4,rateMap:r.map(function(e){var t=e.rate,a=e.month;return{term:a,rate:t}}),modalStyle:T["default"].modalStyle,modalBody:T["default"].modalBody}),b["default"].createElement(Z["default"],{ref:"isAuth"}))},n.purchase=function(e,t,a){n.refs.isAuth.Verification("/deposit-buy/"+e+"/"+t+"/"+n.props.params.productId,a,n.succsseFn,n.props.location.pathname)},n.succsseFn=function(e){Q["default"].setUrl(e)},r=a,l(n,r)}return r(t,e),m(t,[{key:"componentWillMount",value:function(){this.setState({type:this.props.params.type})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params,a=t.type,n=t.productId,o=e.getList,l=e.get,r=e.getB,i=JSON.parse(sessionStorage.getItem("bao-depositbs"));"B"==a&&(r(n),null==i&&o()),"A"==a&&l(n)}},{key:"loading",value:function(){return b["default"].createElement(F["default"],null)}},{key:"render",value:function(){var e=this.props,t=e.datas,a=e.pop,n=e.datasB,o=e.params,l=o.type,r=o.id,i=this.state.type,d=this.loading();if("A"==l){var u=JSON.parse(sessionStorage.getItem("bao-deposit"));if(t){var p=!0;p=5!=r?u.deposit[r].isBuy:u.new_deposit.isBuy,d=this.loadEnd("",p,t.data.quantity)}}else{var f=JSON.parse(sessionStorage.getItem("bao-depositbs"));n&&f&&(d=this.loadEnd(f.list,f.list[r].isBuy,n.data.remain))}return b["default"].createElement("div",{className:T["default"].root},b["default"].createElement(h["default"],{onLeft:a},"A"==i&&(5==r&&"新手标计划详情"||"定存宝A计划详情")||"定存宝B计划详情"),d)}}]),t}(b["default"].Component),G=function(e){return{deposit:e.infodata.getIn([S.RATE,"data"])&&e.infodata.getIn([S.RATE,"data"]).data.deposit||[],new_deposit:e.infodata.getIn([S.RATE,"data"])&&e.infodata.getIn([S.RATE,"data"]).data.new_deposit||{},total:e.infodata.getIn([S.DEPOSIT_DETAIL,"data"])&&e.infodata.getIn([S.DEPOSIT_DETAIL,"data"]).data.total||0,userInfoCode:e.infodata.getIn([S.USER_INFO,"data"])&&e.infodata.getIn([S.USER_INFO,"data"]).code||0,datas:e.infodata.getIn(["DEPOSIT_DETAILS","data"]),datasB:e.infodata.getIn(["DEPOSITBS_DETAILS","data"])}},H=function(e){return{push:function(t){e((0,N.push)(t))},pop:function(){e((0,N.goBack)())},get:function(t){e({type:"DEPOSIT_DETAILS",params:[t]})},getB:function(t){e({type:"DEPOSITBS_DETAILS",params:[t]})},getList:function(){e({type:"DEPOSITBS_PLANB"})}}};t["default"]=(0,A.connect)(G,H)((0,C["default"])(V))},942:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(813),l=n(o);t["default"]=l["default"]},1356:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".root___PGcrB{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5;padding-bottom:50px}.timeBox___aUYku{margin-top:10px}.endTime___3WbTS{position:absolute;right:0;top:0}.endTime___3WbTS img{width:13px}.depositBox___3rdr7{background-color:#fff;margin-top:10px}.pds___12edn{padding:0 15px}.profit___iQEsB{padding:15px 0;border-bottom:1px solid #e5e5e5}.profit___iQEsB p{padding:0 15px;font-size:16px}.profitContent___g2haA{padding:15px 15px 23px}.profitContent___g2haA .profitText___1-uj3{font-size:14px;color:#666;margin-bottom:6px}.profitContent___g2haA .profitText1___3V1aW{font-size:12px;color:#d2d2d2;margin-bottom:20px}.profitContent___g2haA .profitNum___1rg2u{font-size:22px;color:#f70;vertical-align:bottom}.profitContent___g2haA .profitNum___1rg2u span{display:inline-block;font-size:14px;padding-bottom:4px;vertical-align:bottom}.pdAll___2XmL7{padding:20px 17px}.iconUl___1txDC{display:block;width:100%}.iconUl___1txDC li{display:inline-block;width:25%}.iconUl___1txDC li span{display:block;width:100%;text-align:center;font-size:12px;color:#666}.iconUl___1txDC li img{width:30px;margin-bottom:10px}.pdAll1___2-mOg{padding:15px}.hx___1vUi7{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.modalStyle___2aTrb{position:fixed;z-index:999}.modalBody___18cX-{position:absolute;bottom:0;padding-bottom:30px;height:auto}.bottom___1MvUc{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___1MvUc,.bottom___1MvUc .calculator___bbZtB{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.bottom___1MvUc .calculator___bbZtB{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.bottom___1MvUc .calculator___bbZtB:before{height:70%;width:50%;content:'';background:url("+a(241)+") 50% no-repeat;background-size:contain}.bottom___1MvUc button{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}",""]),t.locals={root:"root___PGcrB",timeBox:"timeBox___aUYku",endTime:"endTime___3WbTS",depositBox:"depositBox___3rdr7",pds:"pds___12edn",profit:"profit___iQEsB",profitContent:"profitContent___g2haA",profitText:"profitText___1-uj3",profitText1:"profitText1___3V1aW",profitNum:"profitNum___1rg2u",pdAll:"pdAll___2XmL7",iconUl:"iconUl___1txDC",pdAll1:"pdAll1___2-mOg",hx:"hx___1vUi7",modalStyle:"modalStyle___2aTrb",modalBody:"modalBody___18cX-",bottom:"bottom___1MvUc",calculator:"calculator___bbZtB"}},1648:function(e,t,a){e.exports=a.p+"static/media/details.9250ca59.png"},1658:function(e,t,a){e.exports=a.p+"static/media/introduce.5b87b227.png"},1701:function(e,t,a){e.exports=a.p+"static/media/project.462ae2df.png"},1711:function(e,t,a){e.exports=a.p+"static/media/security.ae2342d4.png"},2003:[2091,1356]});