webpackJsonp([12],{138:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,d=a(2),u=o(d),f=a(5),c=o(f),_=a(3),p=o(_),m=a(4),b=o(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),x=a(1),g=o(x),y=a(172),E=o(y),v=a(15),w=o(v),k=(s=i=function(e){function t(){return n(this,t),l(this,(t.__proto__||(0,b["default"])(t)).apply(this,arguments))}return r(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,o=e.activityName,n=e.rateA,l=e.rateB;return g["default"].createElement("div",{className:E["default"].header},g["default"].createElement("p",{className:E["default"].lxYear},"预期年化利率(%)"),g["default"].createElement("p",{className:E["default"].lxNum},function(){var e=o.split("|"),a=!1;return e.length>0&&""!=o&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?g["default"].createElement("span",null,n,"0.00"==l?"":g["default"].createElement("span",{style:{fontSize:"36px"}},"+",l)):g["default"].createElement("span",null,t)}()),g["default"].createElement("div",{className:E["default"].lxContent},a&&a.map(function(e,t){var a=e.name,o=e.val;return g["default"].createElement("span",{key:t},g["default"].createElement("p",{className:E["default"].textColor},a),g["default"].createElement("p",null,o))})))}}]),t}(x.Component),i.propTypes={rate:w["default"].string,data:w["default"].array,activityName:w["default"].string,rateA:w["default"].string,rateB:w["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},s);t["default"]=k},156:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},172:[2558,156],208:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,d=a(2),u=o(d),f=a(5),c=o(f),_=a(3),p=o(_),m=a(4),b=o(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),x=a(1),g=o(x),y=a(248),E=o(y),v=a(14),w=o(v),k=a(15),C=o(k),N=(s=i=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.switchPanel=function(){var e=a;e.state.open?e.setState({open:!1}):e.setState({open:!0})},a.state={open:a.props.status},a}return r(t,e),h(t,[{key:"render",value:function(){return g["default"].createElement("div",{className:E["default"].panel,style:this.state.open?this.props.styles.border:this.props.styles.none},g["default"].createElement("div",{className:E["default"].header,style:this.props.padding,onClick:this.switchPanel},this.props.title," ",g["default"].createElement("span",{className:(0,w["default"])(E["default"].arrows,this.state.open&&E["default"].down||"")})),g["default"].createElement("div",{className:E["default"].body,style:this.state.open?this.props.styles.show:this.props.styles.hidden},this.props.children))}}]),t}(x.Component),i.defaultProps={title:"面板标题",status:!1,styles:{show:{display:"block"},hidden:{display:"none"},border:{borderBottom:"1px solid #ddd"},none:{borderBottom:"none"}}},i.propTypes={title:C["default"].string,status:C["default"].bool},s);t["default"]=N},223:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".panel___1miVF{background-color:#fff}.header____MqaR{border-bottom:1px solid #ddd;padding:10px 15px;font-size:16px}.body___lEHyn{padding:10px 15px;font-size:14px;color:#999}.arrows___24Lsi{position:relative;float:right;left:8px}.arrows___24Lsi:after,.arrows___24Lsi:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi:before{border-left-color:#b6b6b6;right:-2px}.arrows___24Lsi.down___3OJRE{position:relative;float:right;left:4px;top:2px}.arrows___24Lsi.down___3OJRE:after,.arrows___24Lsi.down___3OJRE:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi.down___3OJRE:before{border-top-color:#b6b6b6;top:2px}",""]),t.locals={panel:"panel___1miVF",header:"header____MqaR",body:"body___lEHyn",arrows:"arrows___24Lsi",down:"down___3OJRE"}},248:[2554,223],402:function(e,t,a){e.exports=a.p+"static/media/ok.a25682b3.png"},928:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=o(i),d=a(5),u=o(d),f=a(3),c=o(f),_=a(4),p=o(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s["default"])(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),b=a(1),h=o(b),x=a(10),g=o(x),y=a(2325),E=o(y),v=a(138),w=o(v),k=a(311),C=o(k),N=a(38),B=o(N),D=a(17),L=o(D),I=a(402),T=o(I),R=a(174),A=o(R),P=a(47),H=o(P),O=a(9),S=a(8),z=a(19),F=a(208),M=o(F),j=a(14),Y=o(j),J=a(468),U=o(J),q=a(82),V=o(q),K=a(58),Q=o(K),X=a(69),Z=o(X),G=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.btDom=function(){var e=a.props,t=e.pending,o=e.end,n=e.listData,l=void 0;if(t&&!o?l=U["default"].loadingDom():o&&(l=h["default"].createElement("div",{className:E["default"].nullDom},"没有更多")),n&&o&&0==n.size){var r=a.refs.tabBox;if(r){var i=r.offsetHeight;l=h["default"].createElement("div",{style:{height:i},className:E["default"].nullImg},h["default"].createElement("img",{src:V["default"]}))}}return l},a.demoDom=function(){var e=a.props.listData,t=a.state.demoNull;return t?null:h["default"].createElement("div",{className:(0,Y["default"])(E["default"].tabBox,E["default"].demoBox),ref:"demo"},e&&e.map(function(e,t){var a=e.name,o=e.date,n=e.amount;return h["default"].createElement("div",{className:E["default"].tabListBox,key:t},h["default"].createElement("div",{className:E["default"].tabListLeft},h["default"].createElement("p",null,a),h["default"].createElement("p",null,o)),h["default"].createElement("div",{className:E["default"].tabListRight},n,"元"))}))},a.addScroll=function(){var e=a.refs.body,t=document.body.offsetHeight;e.addEventListener("scroll",function(){var o=a.state.tabPage,n=a.props,l=n.listData,r=n.pending,i=n.getList,s=n.end,d=n.routeParams.id,u=n.location.query.access_sys;if(1==o&&l){var f=e.scrollTop,c=a.refs.content.offsetHeight+94,_=c-f-t;_<10&&!r&&!s&&i(d,u)}})},a.setPage=function(e){a.setState({tabPage:e})},a.loadEndDom=function(){var e=a.props.infoData.data,t=e.total,o=e.rate,n=e.term,l=e.activityName,r=e.type,i=e.fundraising,s=e.borrow_interest_rate_one,d=e.borrow_interest_rate_two,u=e.peasant_loan_title,f=e.peasant_loan_content,c=e.interest_start_time,_=e.interest_end_time,p=e.credit_rating,m=e.repayment,b=e.loan_purpose,x=e.loan_source,y=e.authenticated,v=e.loan_info,k=e.name,N=a.props,D=N.listData,L=(N.pop,N.push),I=N.backgroundColor,R=N.routeParams.id,P=a.state.tabPage,O=[{name:"借款总额",val:t},{name:"剩余金额",val:t-i},{name:"投资期限",val:n+"个月"}],S=a.btDom(),F=I?{borderRightColor:I}:{borderRightColor:"#00a6e2"};return h["default"].createElement("div",{ref:"content"},h["default"].createElement(g["default"],{leftNode:h["default"].createElement(z.Link,{className:E["default"].leftNode,to:"/home/productIndex"},h["default"].createElement("span",null,h["default"].createElement("span",{className:E["default"].backBefore},"  ")," ",h["default"].createElement("span",{className:E["default"].backAfter,style:F})))},h["default"].createElement("div",{className:E["default"].title},k)),h["default"].createElement("div",{ref:"topHeight"},h["default"].createElement(w["default"],{rate:o,data:O,activityName:l,rateA:s,rateB:d}),h["default"].createElement("div",{className:E["default"].suBox,onClick:function(){L("/safeplan")}},"安全保障计划",h["default"].createElement("img",{src:B["default"],className:E["default"].suJt})),h["default"].createElement("div",{className:E["default"].timeBox},h["default"].createElement(C["default"],{type:"B",startTime:c,endTime:_,Grade:p,repayment:m,lx:r})),function(){var e=l.split("|"),t=!1;return e.length>0&&""!=l&&e.map(function(e,a){"扶农贷"==e&&(t=!0)}),t?h["default"].createElement(M["default"],{status:!1,title:u},f):""}(),h["default"].createElement("div",{className:E["default"].tabHeader},h["default"].createElement("span",{className:0==P&&E["default"].tabCheck||null,onClick:function(){a.setPage(0)}},"借款人"),h["default"].createElement("span",{className:1==P&&E["default"].tabCheck||null,onClick:function(){a.setPage(1)}},"投资记录"))),h["default"].createElement("div",{className:(0,Y["default"])(E["default"].tabBox,0!=P&&E["default"].none),ref:"tabBox"},h["default"].createElement("div",{className:E["default"].tabOne},h["default"].createElement("div",{className:E["default"].tabContent},h["default"].createElement("h3",null,"借款用途"),h["default"].createElement("div",null,b))),function(){switch(r){case 1:return"";case 5:return h["default"].createElement("div",{className:E["default"].tabOne},h["default"].createElement("div",{className:E["default"].tabContent},h["default"].createElement("h3",null,"还款来源"),h["default"].createElement("div",null,x)));default:return h["default"].createElement("div",{className:E["default"].tabOne},h["default"].createElement("div",{className:E["default"].tabContent},h["default"].createElement("h3",null,"还款来源"),h["default"].createElement("div",null,x)))}}(),h["default"].createElement("div",{className:E["default"].tabOne},h["default"].createElement("div",{className:E["default"].tabContent},h["default"].createElement("h3",null,"平台认证"),h["default"].createElement("div",null,y&&y.map(function(e,t){return h["default"].createElement("span",{key:t,className:E["default"].newsBox},e," ",h["default"].createElement("img",{src:T["default"]}))})))),h["default"].createElement("div",{className:E["default"].tabOne},h["default"].createElement("div",{className:E["default"].tabContent},h["default"].createElement("h3",null,"借款人信息"),h["default"].createElement("div",null,v)))),h["default"].createElement("div",{className:(0,Y["default"])(E["default"].tabBox,1!=P&&E["default"].none)},function(){var e=[];return D&&D.map(function(t,a){e.push(h["default"].createElement("div",{className:E["default"].tabListBox,key:a},h["default"].createElement("div",{className:E["default"].tabListLeft},h["default"].createElement("p",null,t.name),h["default"].createElement("p",null,t.date)),h["default"].createElement("div",{className:E["default"].tabListRight},t.amount,"元")))}),e}(),S),h["default"].createElement("div",{className:E["default"].bottom},h["default"].createElement("div",{onClick:function(){return a.refs.calculator.show()},className:E["default"].calculator}),h["default"].createElement("button",{onClick:function(){a.purchase(R,L)}},"马上买入")),h["default"].createElement(H["default"],{ref:"store"}),h["default"].createElement(Q["default"],{ref:"isAuth"}),h["default"].createElement(A["default"],{ref:"calculator",unit:"m",rate:o,term:n,amount:1e4,modalStyle:E["default"].modalStyle,modalBody:E["default"].modalBody,termFixed:!0}))},a.purchase=function(e,t){var o=JSON.parse(sessionStorage.getItem("bao-store")),n=a.props.infoData.data.term;if(a.props.location.query.access_sys){if(o&&o.isAuthIdentity&&o.isSecurityCard)return void a.refs.isAuth.Verification("/directBuyOld/"+e+"/"+n,t,a.succsseFn,a.props.location.pathname);o.isRegister?t("/user/setting/cardBind"):a.refs.store.show()}else o&&o.isRegister&&o.isBindBankcard?a.refs.isAuth.Verification("/directBuy/"+e+"/"+n,t,a.succsseFn,a.props.location.pathname):o.isRegister?t("/user/setting/cardBind"):a.refs.store.show()},a.succsseFn=function(e){Z["default"].setUrl(e)},a.loadDom=function(){return h["default"].createElement(L["default"],null)},a.state={tabPage:0,demoNull:!1},a}return r(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getData,a=e.getList,o=e.routeParams.id,n=e.location.query.access_sys;t(o,n),a(o,n),this.addScroll()}},{key:"componentDidUpdate",value:function(){var e=this.refs.demo,t=this.refs.topHeight;if(e){var a=e.offsetHeight,o=t.offsetHeight,n=document.body.offsetHeight;if(0==a)return!1;var l=this.props,r=l.end,i=l.getList,s=l.routeParams.id,d=o+a;if(d<=n&&!r)i(s);else{var u=this.state.demoNull;u||this.setState({demoNull:!0})}}}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props.infoData,t=this.loadDom();return e&&(t=this.loadEndDom()),h["default"].createElement("div",null,h["default"].createElement("div",{className:E["default"].body,ref:"body"},t))}}]),t}(b.Component),W=function(e){return{infoData:e.infodata.getIn(["DIRECTINVEST_DETAIL","data"]),listData:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","data"]),pending:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","pending"]),end:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","pageEnd"])}},$=function(e){return{getData:function(t,a){e({type:"DIRECTINVEST_DETAIL",params:[t,a]})},getList:function(t,a){e({type:"FETCH_DIRECT_BUY_RECORD_DATA",params:[t,a]})},clearData:function(){e({type:"CLEAR_DATA",key:"FETCH_DIRECT_BUY_RECORD_DATA"})},pop:function(){e((0,S.goBack)())},push:function(t){e((0,S.push)(t))}}};t["default"]=(0,O.connect)(W,$)(G)},1107:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(928),l=o(n);t["default"]=l["default"]},1458:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___28cLQ{position:absolute;left:0;top:0;padding-top:43px;width:100%;height:100%;overflow:auto;padding-bottom:50px;z-index:9;background-color:#f0eff5}.title___2MImF{width:100%;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden;text-align:center}.backAfter___1iI9Z,.backBefore___N_CZD{border:10px solid transparent;border-right:10px solid #00a6e2;width:0;height:0;position:absolute;top:12px;left:4px;content:' '}.backBefore___N_CZD{border-right-color:#fff;left:2px}.none___2oNC8{display:none}.suBox___qdVBv{padding:10px 15px;background-color:#fff;margin-top:10px;font-size:16px}.suBox___qdVBv .suJt___3KgW3{width:10px;height:20px;float:right;margin-top:-2px}.tabHeader___1sC_3{background-color:#fff;margin-top:10px}.tabHeader___1sC_3 span{display:inline-block;height:38px;width:50%;text-align:center;box-sizing:border-box;border-bottom:1px solid #e5e5e5;line-height:38px}.tabHeader___1sC_3 .tabCheck___ZB8eI{color:#02a6e1;border-bottom:2px solid #02a6e1}.tabContent___1XGoC{padding:15px;border-bottom:1px solid #e5e5e5}.tabContent___1XGoC h3{font-size:16px;margin-bottom:10px}.tabContent___1XGoC div{font-size:12px;color:#999;word-break:break-all;line-height:15px}.timeBox___1HKPT{margin-top:10px;margin-bottom:10px}.tabBox___2BFMp{background-color:#fff}.newsBox___2Ods1{display:inline-block;white-space:nowrap;padding-right:15px;margin-bottom:12px}.newsBox___2Ods1 img{width:15px}.bottom___AgII-{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___AgII-,.bottom___AgII- .calculator___2KP7k{display:-webkit-box;display:-ms-flexbox;display:flex}.bottom___AgII- .calculator___2KP7k{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom___AgII- .calculator___2KP7k:before{height:70%;width:50%;content:'';background:url("+a(233)+") 50% no-repeat;background-size:contain}.bottom___AgII- button{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}.tabListBox___1H32Q{overflow:hidden;padding:15px;border-bottom:1px solid #e5e5e5}.tabListBox___1H32Q .tabListLeft___2TdkN{float:left;display:inline-block}.tabListBox___1H32Q .tabListLeft___2TdkN p{line-height:20px;font-size:16px;color:#898989}.tabListBox___1H32Q .tabListLeft___2TdkN p:nth-child(2){font-size:12px;color:#aaa;margin-top:5px}.tabListBox___1H32Q .tabListRight___2yYMF{float:right;display:inline-block;font-size:16px;color:#00a6e2;line-height:45px}.modalStyle___3m8Tr{position:fixed;z-index:999}.modalBody___3ghfk{position:absolute;bottom:0;padding-bottom:30px;height:auto}.demoBox___12y9t{position:absolute;left:0;top:0;background-color:red;z-index:1}.nullDom___3bUYI{font-size:12px;color:#888;padding:10px}.nullDom___3bUYI,.nullImg___3Xef_{text-align:center}.nullImg___3Xef_ img{width:161px;margin-top:40px}",""]),t.locals={body:"body___28cLQ",title:"title___2MImF",backBefore:"backBefore___N_CZD",backAfter:"backAfter___1iI9Z",none:"none___2oNC8",suBox:"suBox___qdVBv",suJt:"suJt___3KgW3",tabHeader:"tabHeader___1sC_3",tabCheck:"tabCheck___ZB8eI",tabContent:"tabContent___1XGoC",timeBox:"timeBox___1HKPT",tabBox:"tabBox___2BFMp",newsBox:"newsBox___2Ods1",bottom:"bottom___AgII-",calculator:"calculator___2KP7k",tabListBox:"tabListBox___1H32Q",tabListLeft:"tabListLeft___2TdkN",tabListRight:"tabListRight___2yYMF",modalStyle:"modalStyle___3m8Tr",modalBody:"modalBody___3ghfk",demoBox:"demoBox___12y9t",nullDom:"nullDom___3bUYI",nullImg:"nullImg___3Xef_"}},2325:function(e,t,a){var o=a(1458);"string"==typeof o&&(o=[[e.id,o,""]]);a(7)(o,{});o.locals&&(e.exports=o.locals)}});