webpackJsonp([8],{132:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,d=a(2),u=n(d),f=a(5),c=n(f),_=a(3),p=n(_),m=a(4),b=n(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),g=n(x),E=a(160),v=n(E),y=a(16),w=n(y),k=(s=i=function(e){function t(){return o(this,t),l(this,(t.__proto__||(0,b["default"])(t)).apply(this,arguments))}return r(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,n=e.activityName,o=e.rateA,l=e.rateB;return g["default"].createElement("div",{className:v["default"].header},g["default"].createElement("p",{className:v["default"].lxYear},"年利率(%)"),g["default"].createElement("p",{className:v["default"].lxNum},function(){var e=n.split("|"),a=!1;return e.length>0&&""!=n&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?g["default"].createElement("span",null,o,"0.00"==l?"":g["default"].createElement("span",{style:{fontSize:"36px"}},"+",l)):g["default"].createElement("span",null,t)}()),g["default"].createElement("div",{className:v["default"].lxContent},a&&a.map(function(e,t){var a=e.name,n=e.val;return g["default"].createElement("span",{key:t},g["default"].createElement("p",{className:v["default"].textColor},a),g["default"].createElement("p",null,n))})))}}]),t}(x.Component),i.propTypes={rate:w["default"].string,data:w["default"].array,activityName:w["default"].string,rateA:w["default"].string,rateB:w["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},s);t["default"]=k},149:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},160:[2252,149],198:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,d=a(2),u=n(d),f=a(5),c=n(f),_=a(3),p=n(_),m=a(4),b=n(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),g=n(x),E=a(230),v=n(E),y=a(15),w=n(y),k=a(16),C=n(k),N=(s=i=function(e){function t(e){o(this,t);var a=l(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.switchPanel=function(){var e=a;e.state.open?e.setState({open:!1}):e.setState({open:!0})},a.state={open:a.props.status},a}return r(t,e),h(t,[{key:"render",value:function(){return g["default"].createElement("div",{className:v["default"].panel,style:this.state.open?this.props.styles.border:this.props.styles.none},g["default"].createElement("div",{className:v["default"].header,style:this.props.padding,onClick:this.switchPanel},this.props.title," ",g["default"].createElement("span",{className:(0,w["default"])(v["default"].arrows,this.state.open&&v["default"].down||"")})),g["default"].createElement("div",{className:v["default"].body,style:this.state.open?this.props.styles.show:this.props.styles.hidden},this.props.children))}}]),t}(x.Component),i.defaultProps={title:"面板标题",status:!1,styles:{show:{display:"block"},hidden:{display:"none"},border:{borderBottom:"1px solid #ddd"},none:{borderBottom:"none"}}},i.propTypes={title:C["default"].string,status:C["default"].bool},s);t["default"]=N},214:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".panel___1miVF{background-color:#fff}.header____MqaR{border-bottom:1px solid #ddd;padding:10px 15px;font-size:16px}.body___lEHyn{padding:10px 15px;font-size:14px;color:#999}.arrows___24Lsi{position:relative;float:right;left:8px}.arrows___24Lsi:after,.arrows___24Lsi:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi:before{border-left-color:#b6b6b6;right:-2px}.arrows___24Lsi.down___3OJRE{position:relative;float:right;left:4px;top:2px}.arrows___24Lsi.down___3OJRE:after,.arrows___24Lsi.down___3OJRE:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi.down___3OJRE:before{border-top-color:#b6b6b6;top:2px}",""]),t.locals={panel:"panel___1miVF",header:"header____MqaR",body:"body___lEHyn",arrows:"arrows___24Lsi",down:"down___3OJRE"}},230:[2248,214],286:function(e,t,a){e.exports=a.p+"static/media/ok.a25682b3.png"},1004:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=n(i),d=a(5),u=n(d),f=a(3),c=n(f),_=a(4),p=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),h=n(b),x=a(11),g=n(x),E=a(2060),v=n(E),y=a(132),w=n(y),k=a(303),C=n(k),N=a(39),B=n(N),D=a(17),L=n(D),T=a(286),I=n(T),R=a(163),P=n(R),H=a(85),A=n(H),O=a(10),z=a(9),S=a(198),M=n(S),F=a(15),j=n(F),Y=a(432),J=n(Y),U=a(114),K=n(U),Q=a(69),V=n(Q),q=a(76),X=n(q),G=function(e){function t(e){o(this,t);var a=l(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.btDom=function(){var e=a.props,t=e.pending,n=e.end,o=e.listData,l=void 0;if(t&&!n?l=J["default"].loadingDom():n&&(l=h["default"].createElement("div",{className:v["default"].nullDom},"没有更多")),o&&n&&0==o.size){var r=a.refs.tabBox;if(r){var i=r.offsetHeight;l=h["default"].createElement("div",{style:{height:i},className:v["default"].nullImg},h["default"].createElement("img",{src:K["default"]}))}}return l},a.demoDom=function(){var e=a.props.listData,t=a.state.demoNull;return t?null:h["default"].createElement("div",{className:(0,j["default"])(v["default"].tabBox,v["default"].demoBox),ref:"demo"},e&&e.map(function(e,t){var a=e.name,n=e.date,o=e.amount;return h["default"].createElement("div",{className:v["default"].tabListBox,key:t},h["default"].createElement("div",{className:v["default"].tabListLeft},h["default"].createElement("p",null,a),h["default"].createElement("p",null,n)),h["default"].createElement("div",{className:v["default"].tabListRight},o,"元"))}))},a.addScroll=function(){var e=a.refs.body,t=document.body.offsetHeight;e.addEventListener("scroll",function(){var n=a.state.tabPage,o=a.props,l=o.listData,r=o.pending,i=o.getList,s=o.end,d=o.routeParams.id;if(1==n&&l){var u=e.scrollTop,f=a.refs.content.offsetHeight+94,c=f-u-t;c<10&&!r&&!s&&i(d)}})},a.setPage=function(e){a.setState({tabPage:e})},a.loadEndDom=function(){var e=a.props.infoData.data,t=e.total,n=e.rate,o=e.term,l=e.activityName,r=e.type,i=e.fundraising,s=e.borrow_interest_rate_one,d=e.borrow_interest_rate_two,u=e.peasant_loan_title,f=e.peasant_loan_content,c=e.interest_start_time,_=e.interest_end_time,p=e.credit_rating,m=e.repayment,b=e.loan_purpose,x=e.loan_source,E=e.authenticated,y=e.loan_info,k=e.name,N=a.props,D=N.listData,L=N.pop,T=N.push,R=N.routeParams.id,H=a.state.tabPage,O=[{name:"借款总额",val:t},{name:"剩余金额",val:t-i},{name:"投资期限",val:o+"个月"}],z=a.btDom();return h["default"].createElement("div",{ref:"content"},h["default"].createElement(g["default"],{onLeft:L},h["default"].createElement("div",{className:v["default"].title},k)),h["default"].createElement("div",{ref:"topHeight"},h["default"].createElement(w["default"],{rate:n,data:O,activityName:l,rateA:s,rateB:d}),h["default"].createElement("div",{className:v["default"].suBox,onClick:function(){T("/safeplan")}},"安全保障计划",h["default"].createElement("img",{src:B["default"],className:v["default"].suJt})),h["default"].createElement("div",{className:v["default"].timeBox},h["default"].createElement(C["default"],{type:"B",startTime:c,endTime:_,Grade:p,repayment:m,lx:r})),function(){var e=l.split("|"),t=!1;return e.length>0&&""!=l&&e.map(function(e,a){"扶农贷"==e&&(t=!0)}),t?h["default"].createElement(M["default"],{status:!1,title:u},f):""}(),h["default"].createElement("div",{className:v["default"].tabHeader},h["default"].createElement("span",{className:0==H&&v["default"].tabCheck||null,onClick:function(){a.setPage(0)}},"借款人"),h["default"].createElement("span",{className:1==H&&v["default"].tabCheck||null,onClick:function(){a.setPage(1)}},"投资记录"))),h["default"].createElement("div",{className:(0,j["default"])(v["default"].tabBox,0!=H&&v["default"].none),ref:"tabBox"},h["default"].createElement("div",{className:v["default"].tabOne},h["default"].createElement("div",{className:v["default"].tabContent},h["default"].createElement("h3",null,"借款用途"),h["default"].createElement("div",null,b))),function(){switch(r){case 1:return"";case 5:return h["default"].createElement("div",{className:v["default"].tabOne},h["default"].createElement("div",{className:v["default"].tabContent},h["default"].createElement("h3",null,"还款来源"),h["default"].createElement("div",null,x)));default:return h["default"].createElement("div",{className:v["default"].tabOne},h["default"].createElement("div",{className:v["default"].tabContent},h["default"].createElement("h3",null,"还款来源"),h["default"].createElement("div",null,x)))}}(),h["default"].createElement("div",{className:v["default"].tabOne},h["default"].createElement("div",{className:v["default"].tabContent},h["default"].createElement("h3",null,"平台认证"),h["default"].createElement("div",null,E&&E.map(function(e,t){return h["default"].createElement("span",{key:t,className:v["default"].newsBox},e," ",h["default"].createElement("img",{src:I["default"]}))})))),h["default"].createElement("div",{className:v["default"].tabOne},h["default"].createElement("div",{className:v["default"].tabContent},h["default"].createElement("h3",null,"借款人信息"),h["default"].createElement("div",null,y)))),h["default"].createElement("div",{className:(0,j["default"])(v["default"].tabBox,1!=H&&v["default"].none)},D&&D.map(function(e,t){var a=e.name,n=e.date,o=e.amount;return h["default"].createElement("div",{className:v["default"].tabListBox,key:t},h["default"].createElement("div",{className:v["default"].tabListLeft},h["default"].createElement("p",null,a),h["default"].createElement("p",null,n)),h["default"].createElement("div",{className:v["default"].tabListRight},o,"元"))}),z),h["default"].createElement("div",{className:v["default"].bottom},h["default"].createElement("div",{onClick:function(){return a.refs.calculator.show()},className:v["default"].calculator}),h["default"].createElement("button",{onClick:function(){a.purchase(R,T)}},"马上买入")),h["default"].createElement(A["default"],{ref:"store"}),h["default"].createElement(V["default"],{ref:"isAuth"}),h["default"].createElement(P["default"],{ref:"calculator",unit:"m",rate:n,term:o,amount:1e4,modalStyle:v["default"].modalStyle,modalBody:v["default"].modalBody,termFixed:!0}))},a.purchase=function(e,t){var n=JSON.parse(sessionStorage.getItem("bao-store"));if(n.isRegister&&n.isBindBankcard){var o=a.props.infoData.data.term;a.refs.isAuth.Verification("/directBuy/"+e+"/"+o,t,a.succsseFn,a.props.location.pathname)}else n.isRegister?t("/user/setting/cardBind"):a.refs.store.show()},a.succsseFn=function(e){X["default"].setUrl(e)},a.loadDom=function(){return h["default"].createElement(L["default"],null)},a.state={tabPage:0,demoNull:!1},a}return r(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getData,a=e.getList,n=e.routeParams.id;t(n),a(n),this.addScroll()}},{key:"componentDidUpdate",value:function(){var e=this.refs.demo,t=this.refs.topHeight;if(e){var a=e.offsetHeight,n=t.offsetHeight,o=document.body.offsetHeight;if(0==a)return!1;var l=this.props,r=l.end,i=l.getList,s=l.routeParams.id,d=n+a;if(d<=o&&!r)i(s);else{var u=this.state.demoNull;u||this.setState({demoNull:!0})}}}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props.infoData,t=this.loadDom(),a=void 0;return e&&(t=this.loadEndDom(),a=this.demoDom()),h["default"].createElement("div",null,h["default"].createElement("div",{className:v["default"].body,ref:"body"},t))}}]),t}(b.Component),W=function(e){return{infoData:e.infodata.getIn(["DIRECTINVEST_DETAIL","data"]),listData:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","data"]),pending:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","pending"]),end:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","pageEnd"])}},Z=function(e){return{getData:function(t){e({type:"DIRECTINVEST_DETAIL",params:[t]})},getList:function(t){e({type:"FETCH_DIRECT_BUY_RECORD_DATA",params:[t]})},clearData:function(){e({type:"CLEAR_DATA",key:"FETCH_DIRECT_BUY_RECORD_DATA"})},pop:function(){e((0,z.goBack)())},push:function(t){e((0,z.push)(t))}}};t["default"]=(0,O.connect)(W,Z)(G)},1149:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1004),l=n(o);t["default"]=l["default"]},1475:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".body___28cLQ{position:absolute;left:0;top:0;padding-top:43px;width:100%;height:100%;overflow:auto;padding-bottom:50px;z-index:9;background-color:#f0eff5}.title___2MImF{width:100%;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden;text-align:center}.none___2oNC8{display:none}.suBox___qdVBv{padding:10px 15px;background-color:#fff;margin-top:10px;font-size:16px}.suBox___qdVBv .suJt___3KgW3{width:10px;height:20px;float:right;margin-top:-2px}.tabHeader___1sC_3{background-color:#fff;margin-top:10px}.tabHeader___1sC_3 span{display:inline-block;height:38px;width:50%;text-align:center;box-sizing:border-box;border-bottom:1px solid #e5e5e5;line-height:38px}.tabHeader___1sC_3 .tabCheck___ZB8eI{color:#02a6e1;border-bottom:2px solid #02a6e1}.tabContent___1XGoC{padding:15px;border-bottom:1px solid #e5e5e5}.tabContent___1XGoC h3{font-size:16px;margin-bottom:10px}.tabContent___1XGoC div{font-size:12px;color:#999;word-break:break-all;line-height:15px}.timeBox___1HKPT{margin-top:10px;margin-bottom:10px}.tabBox___2BFMp{background-color:#fff}.newsBox___2Ods1{display:inline-block;white-space:nowrap;padding-right:15px;margin-bottom:12px}.newsBox___2Ods1 img{width:15px}.bottom___AgII-{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___AgII-,.bottom___AgII- .calculator___2KP7k{display:-webkit-box;display:-ms-flexbox;display:flex}.bottom___AgII- .calculator___2KP7k{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom___AgII- .calculator___2KP7k:before{height:70%;width:50%;content:'';background:url("+a(193)+") 50% no-repeat;background-size:contain}.bottom___AgII- button{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}.tabListBox___1H32Q{overflow:hidden;padding:15px;border-bottom:1px solid #e5e5e5}.tabListBox___1H32Q .tabListLeft___2TdkN{float:left;display:inline-block}.tabListBox___1H32Q .tabListLeft___2TdkN p{line-height:20px;font-size:16px;color:#898989}.tabListBox___1H32Q .tabListLeft___2TdkN p:nth-child(2){font-size:12px;color:#aaa;margin-top:5px}.tabListBox___1H32Q .tabListRight___2yYMF{float:right;display:inline-block;font-size:16px;color:#00a6e2;line-height:45px}.modalStyle___3m8Tr{position:fixed;z-index:999}.modalBody___3ghfk{position:absolute;bottom:0;padding-bottom:30px;height:auto}.demoBox___12y9t{position:absolute;left:0;top:0;background-color:red;z-index:1}.nullDom___3bUYI{font-size:12px;color:#888;padding:10px}.nullDom___3bUYI,.nullImg___3Xef_{text-align:center}.nullImg___3Xef_ img{width:161px;margin-top:40px}",""]),t.locals={body:"body___28cLQ",title:"title___2MImF",none:"none___2oNC8",suBox:"suBox___qdVBv",suJt:"suJt___3KgW3",tabHeader:"tabHeader___1sC_3",tabCheck:"tabCheck___ZB8eI",tabContent:"tabContent___1XGoC",timeBox:"timeBox___1HKPT",tabBox:"tabBox___2BFMp",newsBox:"newsBox___2Ods1",bottom:"bottom___AgII-",calculator:"calculator___2KP7k",tabListBox:"tabListBox___1H32Q",tabListLeft:"tabListLeft___2TdkN",tabListRight:"tabListRight___2yYMF",modalStyle:"modalStyle___3m8Tr",modalBody:"modalBody___3ghfk",demoBox:"demoBox___12y9t",nullDom:"nullDom___3bUYI",nullImg:"nullImg___3Xef_"}},2060:function(e,t,a){var n=a(1475);"string"==typeof n&&(n=[[e.id,n,""]]);a(8)(n,{});n.locals&&(e.exports=n.locals)}});