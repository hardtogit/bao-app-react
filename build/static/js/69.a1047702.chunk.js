webpackJsonp([69],{15:function(e,t,l){t=e.exports=l(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},16:[2322,15],19:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(1),o=a(n),r=l(16),u=a(r);t["default"]=function(e){return function(t){return o["default"].createElement("div",{className:u["default"].page},o["default"].createElement(e,t))}}},27:function(e,t,l){e.exports=l.p+"static/media/arrow2.4ba5831c.png"},71:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,y["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(h["default"]?(0,h["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,i,d=l(87),f=a(d),c=l(86),s=a(c),p=l(2),_=a(p),m=l(5),h=a(m),E=l(3),y=a(E),g=l(4),x=a(g),b="function"==typeof s["default"]&&"symbol"==typeof f["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof s["default"]&&e.constructor===s["default"]&&e!==s["default"].prototype?"symbol":typeof e},v=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,_["default"])(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),w=l(1),T=a(w),O=l(33),D=(a(O),l(8)),C=a(D),N=l(76),B=a(N),R=l(9),k=a(R),I=(i=u=function(e){function t(e){n(this,t);var l=o(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return l.clickHandle=function(){l.props.onClick&&l.props.onClick()},l.state={value:l.props.defaultValue||""},l.validateRu=l.validateRun,l}return r(t,e),v(t,[{key:"validateRun",value:function(){return this.state.value?{result:!0}:{result:!1}}},{key:"setValue",value:function(e){e&&(this.setState({value:e}),this.props.onChange&&this.props.onChange(e))}},{key:"renderLeft",value:function(){return T["default"].createElement("div",{className:B["default"].left},this.props.label&&T["default"].createElement("span",{style:this.props.leftStyle,className:B["default"].leftText},this.props.label))}},{key:"renderContent",value:function(){var e=this.props.content,t=void 0;return e&&(t="object"==("undefined"==typeof e?"undefined":b(e))?e:T["default"].createElement("span",{className:B["default"].contentText,style:this.props.contentStyle},e)),T["default"].createElement("div",{className:(0,C["default"])(B["default"].content)},t)}},{key:"renderRight",value:function(){var e=this.props.right;return e===!1?null:T["default"].createElement("div",{className:B["default"].right},"object"==("undefined"==typeof e?"undefined":b(e))?e:T["default"].createElement("img",{className:B["default"].arrowIcon,src:l(27)}))}},{key:"render",value:function(){var e=this.props,t=e.borderType;return T["default"].createElement("div",{className:(0,C["default"])([B["default"].container,t&&B["default"][t],e.className]),style:this.props.containerStyle},T["default"].createElement("div",{className:B["default"].wrap,onClick:this.clickHandle},this.renderLeft(),this.renderContent(),this.renderRight()))}}]),t}(T["default"].Component),u.nameq="BaseText",u.propTypes={className:k["default"].string,defaultValue:k["default"].string,label:k["default"].oneOfType([k["default"].string,k["default"].object]),content:k["default"].oneOfType([k["default"].string,k["default"].element]),right:k["default"].oneOfType([k["default"].bool,k["default"].element]),borderType:k["default"].string,onClick:k["default"].func,onChange:k["default"].func,containerStyle:k["default"].object,contentStyle:k["default"].object},i);t["default"]=I},74:function(e,t,l){t=e.exports=l(6)(),t.push([e.id,".container___2iOoq{border-color:#ddd;border-width:1px 0;background-color:#fff;padding-left:15px;height:44px;border-style:solid}.container___2iOoq .wrap___3WGXV{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding-right:15px}.container___2iOoq .leftText___Pj2n5{font-size:16px;display:block;color:#000}.container___2iOoq .content___2zhnK{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.container___2iOoq .contentText___2RBdm{color:#888;text-align:right;font-size:14px;display:block}.container___2iOoq .right____2M60{padding-left:7px}.container___2iOoq .arrowIcon___1h463{height:15px;width:9px}.container___2iOoq.two___2UQnC{border-bottom-width:0}.container___2iOoq.two___2UQnC .wrap___3WGXV{border-bottom:1px solid #ddd}.container___2iOoq.three___3JHjg{border-top-width:0}.container___2iOoq.four___oHlQS{border-top-width:0;border-bottom-width:0}.container___2iOoq.four___oHlQS .wrap___3WGXV{border-bottom:1px solid #ddd}",""]),t.locals={container:"container___2iOoq",wrap:"wrap___3WGXV",leftText:"leftText___Pj2n5",content:"content___2zhnK",contentText:"contentText___2RBdm",right:"right____2M60",arrowIcon:"arrowIcon___1h463",two:"two___2UQnC",three:"three___3JHjg",four:"four___oHlQS"}},76:[2322,74],131:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,i,d=l(2),f=a(d),c=l(5),s=a(c),p=l(3),_=a(p),m=l(4),h=a(m),E=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),y=l(1),g=a(y),x=l(12),b=a(x),v=l(152),w=a(v),T=l(11),O=l(10),D=l(27),C=a(D),N=l(22),B=a(N),R=l(9),k=a(R),I=l(71),S=a(I),P=(i=u=function(e){function t(e){n(this,t);var l=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return l.goProductDetail=function(e,t){var a=l.props,n=a.push,o=a.type,r=a.location.query,u=r.access_sys,i=r.borrow_id;i||(i=t),n(o<=3?u?"/user/productInfo/"+e+"?access_sys="+u:"/user/productInfo/"+e:u?"/user/zqProductInfo/"+e+"?access_sys="+u+"&borrow_id="+i:"/user/zqProductInfo/"+e+"?borrow_id="+i)},l.timer=function(e){var t=new Date(1e3*parseInt(e)),l=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return l+"年"+a+"月"+n+"日"},l.loadDom=function(){return g["default"].createElement(B["default"],null)},l.headDom=function(){var e=l.props.infoData.data,t=e.profit_accumulate,a=e.id,n=e.name,o=e.profit_yesterday,r=e.total_periods,u=e.rate;return g["default"].createElement("div",null,g["default"].createElement("div",{className:w["default"].listBoxOne,onClick:function(){l.goProductDetail(a)}},g["default"].createElement("h2",null,n,g["default"].createElement("span",null,"(",a,")")),g["default"].createElement("p",null,g["default"].createElement("span",null,r,"个月"),g["default"].createElement("span",null,"约定年化收益率",u,"%")),g["default"].createElement("img",{src:C["default"]})),g["default"].createElement("div",{className:w["default"].listBoxTwo},g["default"].createElement("p",null,t),g["default"].createElement("p",null,"累计收益（元）"),1==l.props.type&&g["default"].createElement("p",null,"昨日收益：",o,"元")||null))},l.headDomC=function(e){var t=e.accumulateProfit,a=e.yesterdayProfit,n=e.name,o=e.month,r=(e.investId,e.rate),u=e.currentPeriod,i=e.isExpired,d=l.props.type;return g["default"].createElement("div",null,g["default"].createElement("div",{className:w["default"].listBoxOne},g["default"].createElement("h2",null,n),g["default"].createElement("p",null,g["default"].createElement("span",null,o,"个月"),g["default"].createElement("span",null,"约定年化收益率",r,"%"),g["default"].createElement("span",{style:{"float":"right"}},6==d?"到期还本付息":"每月还息  到期还本"))),g["default"].createElement("div",{className:w["default"].listBoxTwo},g["default"].createElement("p",null,t),g["default"].createElement("p",null,"累计收益（元）"),5==d&&""!=u&&g["default"].createElement("p",null,"昨日收益：",a,"元")||null,6==d&&!i&&g["default"].createElement("p",null,"昨日收益：",a,"元")||null))},l.headDomB=function(){var e=l.props.infoData2.data,t=e.name,a=e.term,n=e.rate,o=e.hold_money,r=e.borrow_id,u=e.profit_yesterday,i=e.profit_accumulate;return g["default"].createElement("div",null,g["default"].createElement("div",{className:w["default"].listBoxOne,onClick:function(){l.goProductDetail(l.props.id,r)}},g["default"].createElement("h2",null,t),g["default"].createElement("p",null,g["default"].createElement("span",null,a,"个月"),g["default"].createElement("span",null,"约定年化收益率",n)),g["default"].createElement("img",{src:C["default"]})),g["default"].createElement("div",{className:w["default"].listBoxTwo},g["default"].createElement("p",null,o),g["default"].createElement("p",null,"持有金额"),g["default"].createElement("p",{className:w["default"].profitBox},g["default"].createElement("span",{className:w["default"].profitLeft},"昨日收益：",u,"元"),g["default"].createElement("span",{className:w["default"].profitRight},"累计收益：",i,"元"))))},l.loadEndDomA=function(){var e=l.props,t=e.infoData.data,a=e.contractsFillList,n=t.account_arrival,o=t.account_overdue,r=t.amount,u=t.refund_periods,i=t.profit_expire_arrival,d=t.total_periods,f=t.refund_date;return g["default"].createElement("div",null,g["default"].createElement("ul",{className:w["default"].listBoxThree},g["default"].createElement("li",{className:w["default"].Onetitle},"购买信息"),g["default"].createElement("ul",null,g["default"].createElement("li",null,"购买金额",g["default"].createElement("p",null,r)),g["default"].createElement("li",null,"到期获得",g["default"].createElement("p",null,i))),g["default"].createElement("li",{className:w["default"].Onetitle},"回款记录"),g["default"].createElement("ul",null,g["default"].createElement("li",null,"当前期数",g["default"].createElement("p",null,"期数：",u,"/",d)),g["default"].createElement("li",null,"已到账",g["default"].createElement("p",{className:w["default"].yellowColor},n)),g["default"].createElement("li",null,"已逾期",g["default"].createElement("p",{className:w["default"].yellowColor},o)),g["default"].createElement("li",null,"下期还款日",g["default"].createElement("p",{className:w["default"].yellowColor},f)),a&&0!=a.data.length&&g["default"].createElement(S["default"],{containerStyle:{paddingLeft:0},label:"服务协议",borderType:"four",onClick:function(){var e=l.props.params.id;"platform"==l.props.location.query.access_sys?l.props.push("/fillList/"+e+"/A"):l.props.push("/fillList/"+e+"/D")}}))))},l.loadEndDomB=function(){var e=l.props.infoData.data,t=e.amount,a=e.transfer_money,n=e.account_arrival;return g["default"].createElement("div",null,g["default"].createElement("ul",{className:w["default"].listBoxThree},g["default"].createElement("ul",null,g["default"].createElement("li",null,"购买金额",g["default"].createElement("p",null,t)),g["default"].createElement("li",null,"转让价格",g["default"].createElement("p",{className:w["default"].yellowColor},a)),g["default"].createElement("li",null,"已到账",g["default"].createElement("p",{className:w["default"].yellowColor},n)))))},l.loadEndDomC=function(){var e=l.props.infoData.data,t=e.amount,a=e.account_overdue,n=e.account_arrival,o=e.profit_expire_arrival;return g["default"].createElement("div",null,g["default"].createElement("ul",{className:w["default"].listBoxThree},g["default"].createElement("ul",null,g["default"].createElement("li",null,"购买金额",g["default"].createElement("p",null,t)),g["default"].createElement("li",null,"到期获得",g["default"].createElement("p",{className:w["default"].yellowColor},o)),g["default"].createElement("li",null,"已到账",g["default"].createElement("p",{className:w["default"].yellowColor},n)),g["default"].createElement("li",null,"已逾期",g["default"].createElement("p",{className:w["default"].yellowColor},a)))))},l.loadEndDomE=function(e){var t=l.props,a=t.id,n=t.push,o=t.type,r=t.contractsFillList,u=e.arrivalAccount,i=e.currentPeriod,d=e.total,f=e.collect,c=e.endTime,s=e.startTime,p=e.nextRepaymentDate,_=(e.month,l.timer(c)),m=l.timer(s),h=l.timer(p),E="/user/dcbContract/"+a;return 6==o&&(E="/user/dcContract/"+a),g["default"].createElement("div",null,g["default"].createElement("ul",{className:w["default"].listBoxThree},g["default"].createElement("li",{className:w["default"].Onetitle},"购买信息"),g["default"].createElement("ul",null,g["default"].createElement("li",null,"购买金额",g["default"].createElement("p",null,d)),g["default"].createElement("li",null,"到期获得",g["default"].createElement("p",null,f)),g["default"].createElement("li",null,"产品到期日",g["default"].createElement("p",null,_)),g["default"].createElement("li",null,"产品起息日",g["default"].createElement("p",null,m))),5==o&&""!=i&&g["default"].createElement("li",{className:w["default"].Onetitle},"回款记录")||"",5==o&&""!=i&&g["default"].createElement("ul",null,g["default"].createElement("li",null,"当前期数",g["default"].createElement("p",null,"期数：",i)),g["default"].createElement("li",null,"已到账",g["default"].createElement("p",{className:w["default"].yellowColor},u)),g["default"].createElement("li",null,"下期还款日",g["default"].createElement("p",{className:w["default"].yellowColor},h)),r&&0!=r.data.length&&g["default"].createElement(S["default"],{containerStyle:{paddingLeft:0},label:"服务协议",borderType:"four",onClick:function(){n("/fillList/"+a+"/C")}}))||""))},l.loadEndDomD=function(){var e=l.props.contractsFillList,t=l.props.infoData2.data,a=t.amount,n=t.interest,o=t.profit,r=t.income,u=t.periods,i=t.account_arrival,d=t.account_overdue,f=t.next_periods;return g["default"].createElement("div",null,g["default"].createElement("ul",{className:w["default"].listBoxThree},g["default"].createElement("li",{className:w["default"].Onetitle},"购买信息"),g["default"].createElement("ul",null,g["default"].createElement("li",null,"购买金额",g["default"].createElement("p",null,a)),g["default"].createElement("li",null,"折价收益",g["default"].createElement("p",null,o)),g["default"].createElement("li",null,"预付利息",g["default"].createElement("p",null,n)),g["default"].createElement("li",null,"到期获得",g["default"].createElement("p",null,r))),g["default"].createElement("li",{className:w["default"].Onetitle},"回款记录"),g["default"].createElement("ul",null,g["default"].createElement("li",null,"当前期数",g["default"].createElement("p",null,"期数:",u)),g["default"].createElement("li",null,"已到账",g["default"].createElement("p",{className:w["default"].yellowColor},i)),g["default"].createElement("li",null,"已逾期",g["default"].createElement("p",{className:w["default"].yellowColor},d)),g["default"].createElement("li",null,"下期还款日",g["default"].createElement("p",{className:w["default"].yellowColor},f)),e&&0!=e.data.length&&g["default"].createElement(S["default"],{containerStyle:{paddingLeft:0},label:"服务协议",borderType:"four",onClick:function(){var e=l.props.params.id;"platform"==l.props.location.query.access_sys?l.props.push("/fillList/"+e+"/B"):l.props.push("/fillList/"+e+"/E")}}))))},l.dataN=function(){var e=l.props,t=e.infoData,a=e.infoData2,n=e.infoDate3,o=e.infoData4,r=e.type;return r<=3?t:4==r?a:5==r?n:o},l.state={},l}return r(t,e),E(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id,l=this.props,a=l.type,n=l.getFillContractsList,o=l.getInvestProductDetail,r=l.getZqProductDetail,u=l.getDepositbs,i=l.getDepositasInvest,d=l.index;4==a?(r(t,this.props.location.query.access_sys),this.props.location.query.access_sys?n(t,"B"):n(t,"E")):5==a?(u(t,d),n(t,"C")):6==a?i(t):(o(t,e.props.location.query.access_sys),this.props.location.query.access_sys?n(t,"A"):n(t,"D"))}},{key:"render",value:function(){var e=this.props,t=e.pop,l=e.id,a=e.type,n=e.infoData,o=e.push,r=this.loadDom(),u=void 0,i=void 0,d=this.dataN();return d&&(5==a||6==a?d.data.investId==l&&(u=this.headDomC(d.data),r=this.loadEndDomE(d.data)):d.data.id==l?(u=this.headDom(),1==a?r=this.loadEndDomA():2==a?r=this.loadEndDomB():3==a&&(r=this.loadEndDomC())):100==d.code&&4==a&&(u=this.headDomB(),r=this.loadEndDomD())),n&&1==a&&1==n.data.isTransfer&&(i=g["default"].createElement("div",{className:w["default"].detailsButton,onClick:function(){o("/user/zqTransfer/"+l)}},"债权转让")),g["default"].createElement("div",null,g["default"].createElement(b["default"],{onLeft:t},"资产详情"),g["default"].createElement("div",{className:w["default"].bg},g["default"].createElement("div",{className:w["default"].manageContent},u,r),i))}}]),t}(g["default"].Component),u.PropTypes={type:k["default"].number,id:k["default"].number},u.defaultProps={type:0,id:0},i),L=function(e){return{infoData:e.infodata.getIn(["DIRECT_INVEST_PROPERTY_DETAIL","data"]),infoData2:e.infodata.getIn(["CREDITORS_PROPERTY_DETAIL","data"]),infoDate3:e.infodata.getIn(["DEPOSITBS_INVEST","data"]),infoData4:e.infodata.getIn(["DEPOSITA_SINVEST","data"]),contractsFillList:e.infodata.getIn(["GET_FILL_CONTRACTS_LIST","data"])}},q=function(e,t){return{getInvestProductDetail:function(t,l){e({type:"DIRECT_INVEST_PROPERTY_DETAIL",params:[t,l]})},getFillContractsList:function(t,l){e({type:"GET_FILL_CONTRACTS_LIST",params:[{product_id:t,product_type:l}]})},pop:function(){e((0,O.goBack)())},push:function(t){e((0,O.push)(t))},getZqProductDetail:function(t,l){e({type:"CREDITORS_PROPERTY_DETAIL",params:[t,l]})},getDepositbs:function(t,l){e({type:"DEPOSITBS_INVEST",params:[t,l]})},getDepositasInvest:function(t){e({type:"DEPOSITA_SINVEST",params:[t]})},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"GET_FILL_CONTRACTS_LIST"})}}};t["default"]=(0,T.connect)(L,q)(P)},136:function(e,t,l){t=e.exports=l(6)(),t.push([e.id,"*{padding:0;margin:0}.bg___2SWDZ{background:#f1eff5;position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:1;padding-bottom:44px}.arrowRight___3sGBw{display:inline-block;width:10px;height:20px;background:url("+l(27)+") no-repeat;background-size:100% 100%;float:right;margin-top:10px}.manageContent___3Vo5f{margin-top:44px;width:100%}.listBoxOne___2Efw_{background-color:#fff;height:67px;border-bottom:1px solid #ddd;padding:15px;position:relative}.listBoxOne___2Efw_ h2{font-size:16px;color:#000;padding-bottom:5px}.listBoxOne___2Efw_ p{margin-top:3px;font-size:11px;color:#aaa}.listBoxOne___2Efw_ p>span:nth-child(2){margin-left:10px}.listBoxOne___2Efw_>img{position:absolute;width:14px;height:20px;top:22px;right:20px}.listBoxTwo___1OdrQ{background-color:#fff;height:120px;width:100%;text-align:center}.listBoxTwo___1OdrQ p:nth-child(1){height:44px;font-weight:500;font-size:30px;color:#f70;padding-top:10px}.listBoxTwo___1OdrQ p:nth-child(2){line-height:23px;font-size:11px;color:#aaa}.listBoxTwo___1OdrQ p:nth-child(3){line-height:16px;font-size:11px;color:#000;padding-top:10px}.listBoxThree___1OKR7{list-style:none;margin-top:10px;background-color:#fff}.listBoxThree___1OKR7>ul{padding-left:15px;border-top:1px solid #ddd}.listBoxThree___1OKR7 ul li,.listBoxThree___1OKR7>ul{border-bottom:1px solid #ddd}.listBoxThree___1OKR7 .Onetitle___1Vne-{padding-left:15px}.listBoxThree___1OKR7 li{background-color:#fff;padding-right:15px;list-style:none;color:#000;line-height:40px;font-size:14px}.listBoxThree___1OKR7 li p{float:right;color:#626262}.listBoxThree___1OKR7>li{color:#888;background:#f1eff5}.listBoxThree___1OKR7>ul>li:last-child{border-bottom:none}.yellowColor___1Nk_h{color:#f70!important}.profitBox___20OzP{padding:0 80px;overflow:hidden}.profitLeft___3-aO5{float:left}.profitRight___36qoF{float:right}.detailsButton___1yNV-{position:fixed;height:44px;left:0;bottom:0;background-color:#00a6e2;color:#fff;width:100%;line-height:44px;text-align:center}",""]),t.locals={bg:"bg___2SWDZ",arrowRight:"arrowRight___3sGBw",manageContent:"manageContent___3Vo5f",listBoxOne:"listBoxOne___2Efw_",listBoxTwo:"listBoxTwo___1OdrQ",listBoxThree:"listBoxThree___1OKR7",Onetitle:"Onetitle___1Vne-",yellowColor:"yellowColor___1Nk_h",profitBox:"profitBox___20OzP",profitLeft:"profitLeft___3-aO5",profitRight:"profitRight___36qoF",detailsButton:"detailsButton___1yNV-"}},152:[2320,136],1034:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=l(52),i=a(u),d=l(2),f=a(d),c=l(5),s=a(c),p=l(3),_=a(p),m=l(4),h=a(m),E=i["default"]||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},y=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),g=l(1),x=a(g),b=l(131),v=a(b),w=l(19),T=a(w),O=function(e){function t(){return n(this,t),o(this,(t.__proto__||(0,h["default"])(t)).apply(this,arguments))}return r(t,e),y(t,[{key:"render",value:function(){var e=this.props.params.id;return x["default"].createElement("div",null,x["default"].createElement(v["default"],E({},this.props,{id:e,type:1})))}}]),t}(g.Component);t["default"]=(0,T["default"])(O)},1159:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(1034),o=a(n);t["default"]=o["default"]}});