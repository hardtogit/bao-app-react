webpackJsonp([7],{41:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,s,d=a(2),f=l(d),u=a(5),c=l(u),p=a(3),m=l(p),_=a(4),g=l(_),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,f["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),h=a(1),b=l(h),E=a(8),y=(l(E),a(40)),v=(l(y),a(35)),w=(l(v),a(34)),N=(l(w),a(21)),T=a(9),k=l(T),L=(s=r=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.show=function(){a.setState({show:!0})},a.hide=function(){a.setState({show:!1})},a.clearTimer=function(){},a.state={show:!1},a}return o(t,e),x(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=void 0,t=JSON.parse(sessionStorage.getItem("bao-store"))||{},l="/user/setting/regStore";return t.isRegister&&(l="/user/setting/cardBind"),e=this.state.show?{display:"block"}:{display:"none"},b["default"].createElement("div",{style:e},b["default"].createElement("div",{ref:"dialog",style:{zIndex:"1050",position:"fixed",transform:"translate3d(-50%, -50%, 0px)",top:"50%",left:"50%",width:"86%"}},b["default"].createElement("div",{style:{width:"100%",position:"relative",height:"140px"}},b["default"].createElement("img",{style:{width:"100%",height:"100%"},src:a(46)}),b["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",top:"-10px"},src:a(43),alt:""}),b["default"].createElement("img",{width:"40px",style:{position:"absolute",left:"-14px",bottom:"16px"},src:a(44),alt:""}),b["default"].createElement("img",{width:"40px",style:{position:"absolute",right:"-14px",bottom:"-10px"},src:a(45),alt:""})),b["default"].createElement("div",{style:{textAlign:"center",backgroundColor:"#fff",marginTop:"-7px",paddingTop:"22px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}},b["default"].createElement("a",{style:{marginTop:"15px",fontSize:"13px",letterSpacing:"1px",borderTop:"2px solid #f2f2f2",borderBottom:"2px solid #f2f2f2",padding:"4px 0"}},"个人账户升级为银行存管账户"),b["default"].createElement("div",{style:{fontSize:"12px",marginTop:"16px",color:"#777",height:"13px",lineHeight:"13px"}},"资金有保障    投资更放心"),b["default"].createElement("div",{style:{height:"40px",borderTop:"1px solid #ddd",marginTop:"30px"}},b["default"].createElement("div",{onClick:this.hide,style:{"float":"left",width:"50%",height:"40px",color:"#777",lineHeight:"40px",borderRight:"1px solid #ddd"}},"取消"),b["default"].createElement("div",{style:{"float":"left",width:"50%",lineHeight:"40px",color:"#00a6e2"}},b["default"].createElement(N.Link,{to:l},"立即开通"))))),b["default"].createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"1040",backgroundColor:"rgba(0, 0, 0, 0.498039)"}}))}}]),t}(b["default"].Component),r.propTypes={time:k["default"].number,text:k["default"].string,mode:k["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),callback:k["default"].func},r.defaultProps={mode:"ScaleModal"},s);t["default"]=L},43:function(e,t,a){e.exports=a.p+"static/media/01.7231ba32.png"},44:function(e,t,a){e.exports=a.p+"static/media/02.912b9dc7.png"},45:function(e,t,a){e.exports=a.p+"static/media/03.a7ec7297.png"},46:function(e,t,a){e.exports=a.p+"static/media/header.127f8ac5.png"},52:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getAuthDetail=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isRegister&&e.isBindBankcard?0!=e.authInstrCd.length?1:2:3},t.platFormGetAuthDetail=function(){var e=JSON.parse(sessionStorage.getItem("bao-store"));return e&&e.isAuthIdentity&&e.isSecurityCard?1:e&&e.isRegister&&e.isBindBankcard?0!=e.authInstrCd.length?1:2:3}},282:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,s,d=a(2),f=l(d),u=a(5),c=l(u),p=a(3),m=l(p),_=a(4),g=l(_),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,f["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),h=a(1),b=l(h),E=a(40),y=l(E),v=a(341),w=l(v),N=a(194),T=l(N),k=a(330),L=(l(k),a(327)),I=(l(L),a(331)),P=(l(I),a(326)),z=l(P),C=a(329),A=l(C),D=a(328),S=l(D),F=a(9),M=l(F),R=(s=r=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.toggle=function(){return a.refs.modal.toggle()},a.show=function(){return a.refs.modal.show()},a.hide=function(){return a.refs.modal.hide()},a.doSign=function(){var e=a;a.props.sign?e.hide():T["default"].sign().then(function(t){var a=t.response;100==a.code?e.props.callBackFun(a):e.hide()})},a.state={coin:0,day:0},a}return o(t,e),x(t,[{key:"render",value:function(){var e=this,t=y["default"][this.props.mode];return b["default"].createElement(t,{ref:"modal"},b["default"].createElement("div",{className:w["default"].sign},b["default"].createElement("img",{src:A["default"],className:w["default"].qianImg}),b["default"].createElement("p",{className:w["default"].info+" "+w["default"].mt15},"每日签到得10点币"),b["default"].createElement("p",{className:w["default"].info2+" "+w["default"].mt15},"—— 您已连续签到 ",b["default"].createElement("span",null,this.props.days)," 天 ——"),b["default"].createElement("img",{src:S["default"],className:w["default"].qianImg2}),b["default"].createElement("p",{className:w["default"].fiveDay},"每连续签到5天,额外获得50点币"),b["default"].createElement("button",{onClick:function(){e.doSign()}},this.props.sign&&"确定"||"点击签到")),b["default"].createElement("img",{onClick:function(){e.hide()},src:z["default"],className:w["default"].close,alt:""}))}}]),t}(b["default"].PureComponent),r.propTypes={mode:M["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),coin:M["default"].number,days:M["default"].number,sign:M["default"].bool,callBackFun:M["default"].func},r.defaultProps={mode:"ScaleModal"},s);t["default"]=R},298:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".close___2-rU4{margin:30px auto 0;width:60px;display:block}.fiveDay___2PHPo{text-align:center;font-size:14px;padding-left:0;line-height:26px;color:#333}.sign___3q_KT{position:relative;width:270px;box-sizing:border-box;border-radius:5px;background:#fff;padding:60px 10px 25px;overflow:hidden}.sign___3q_KT .qianImg___1c0GA{width:100px;position:absolute;top:-50px;left:85px}.sign___3q_KT .qianImg2___25trP{width:100%;margin-top:10px}.sign___3q_KT .t___3jg0w{width:80%}.sign___3q_KT .info___nTjpr{text-align:center;font-size:24px;color:#f56c62;line-height:20px}.sign___3q_KT .info___nTjpr.mt15___33xoi{margin-top:12px}.sign___3q_KT .info2___so8mu{text-align:center;font-size:16px;color:#666;line-height:20px}.sign___3q_KT .info2___so8mu.mt15___33xoi{margin-top:12px}.sign___3q_KT .info2___so8mu span{font-size:18px;color:#f56c62}.sign___3q_KT button{margin-top:20px;margin-left:24px;width:206px;height:46px;border-radius:23px;font-size:20px;color:#fff;display:block;background:#fe684b;box-shadow:0 5px 0 #fea999;border:none}.sign___3q_KT .pen___1mltm{position:absolute;bottom:50px;width:105px;right:-30px}",""]),t.locals={close:"close___2-rU4",fiveDay:"fiveDay___2PHPo",sign:"sign___3q_KT",qianImg:"qianImg___1c0GA",qianImg2:"qianImg2___25trP",t:"t___3jg0w",info:"info___nTjpr",mt15:"mt15___33xoi",info2:"info2___so8mu",pen:"pen___1mltm"}},326:function(e,t,a){e.exports=a.p+"static/media/closex.39b6b6c0.png"},327:function(e,t,a){e.exports=a.p+"static/media/done.8604fb81.png"},328:function(e,t,a){e.exports=a.p+"static/media/qianImg2.d8c9fd78.png"},329:function(e,t,a){e.exports=a.p+"static/media/qiandao.6e7869b0.png"},330:function(e,t,a){e.exports=a.p+"static/media/sign.4afebd5e.jpg"},331:function(e,t,a){e.exports=a.p+"static/media/sign_pen.d21c0b14.png"},341:[2317,298],488:function(e,t,a){e.exports=a.p+"static/media/close.14cb8b42.png"},1062:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),s=l(r),d=a(5),f=l(d),u=a(3),c=l(u),p=a(55),m=l(p),_=a(4),g=l(_),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,s["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),h=a(1),b=l(h),E=a(21),y=a(10),v=a(11),w=a(22),N=l(w),T=a(282),k=l(T),L=a(2105),I=l(L),P=a(1813),z=(l(P),a(1820)),C=l(z),A=a(1814),D=(l(A),a(1815)),S=l(D),F=a(1816),M=l(F),R=a(1817),B=(l(R),a(1818)),q=l(B),O=a(1819),W=l(O),G=a(1806),U=l(G),Z=a(1791),j=l(Z),K=a(1807),J=(l(K),a(1834)),V=(l(J),a(1808)),Y=(l(V),a(1809)),H=l(Y),X=a(1810),Q=l(X),$=a(1811),ee=l($),te=a(52),ae=a(1812),le=l(ae),ie=a(1832),ne=l(ie),oe=a(488),re=l(oe),se=a(1826),de=l(se),fe=a(1836),ue=l(fe),ce=a(1837),pe=l(ce),me=a(1835),_e=l(me),ge=a(1831),xe=l(ge),he=a(41),be=l(he),Ee=a(1822),ye=l(Ee),ve=a(1830),we=(l(ve),function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.doSign=function(){a.refs.SignModel.show()},a.handleClick=function(){a.refs.fridayPop.style.display="none"},a.state={ifSet:!0,ifShow:!1},a}return o(t,e),x(t,[{key:"loadingDom",value:function(){return b["default"].createElement(N["default"],null)}},{key:"componentWillReceiveProps",value:function(e){var t=e.fridayPopData;if(t&&100==t.code&&this.state.ifSet&&t.data){if(t.data.isFriday){var a=sessionStorage.getItem("bao-user");a=JSON.parse(a);var l=a.id;if(document.cookie.length>0){var i=void 0;if(i=document.cookie.indexOf(l+"="),i!=-1)this.setState({ifShow:!1});else{this.setState({ifShow:!0});var n=new Date;n.setDate(n.getDate()+2),document.cookie=l+"=true;expires="+n.toGMTString()+";path=/"}}}this.setState({ifSet:!1})}}},{key:"loadingEndDom",value:function(e){var t=this,a=(e.avatar,e.username),l=(e.grade,e.isSign),i=e.signNumbers,n=e.amount,o=(e.balance,e.balance_platform,e.demand,e.directInvest),r=e.creditors,s=e.privilege,d=e.bonuse,f=e.interestRateSecurities,u=(e.scratcheCard,e.voucher),c=e.coins,p=e.deposit,_=(e.isBuyDemand,e.depositb),g=this.props,x=g.userInfo,h=g.VipData,y=void 0;return h&&(y=h.data.vip_level),b["default"].createElement("div",null,b["default"].createElement(k["default"],{ref:"SignModel",coin:+c,days:+i,sign:l,callBackFun:this.props.load}),b["default"].createElement("div",{className:I["default"].userAccount},b["default"].createElement("img",{className:I["default"].userBg,src:ue["default"],alt:""}),b["default"].createElement("img",{onClick:function(){t.props.push("/user/setting")},className:I["default"].setting,src:_e["default"],alt:""}),b["default"].createElement("img",{onClick:function(){t.props.push("/find/messages")},className:I["default"].news,src:xe["default"],alt:""}),b["default"].createElement("div",{className:I["default"].userInfo},b["default"].createElement("div",{className:I["default"].img_c},b["default"].createElement("img",{src:ye["default"],alt:""})),b["default"].createElement("div",{className:I["default"].name},a)),b["default"].createElement("div",{className:I["default"].settingBg}),b["default"].createElement("div",{className:I["default"].settings,onClick:function(){t.props.push("/find/memberCenter")}},b["default"].createElement("img",{src:pe["default"],alt:""}),b["default"].createElement("span",null,0==y&&"普通会员"||1==y&&"VIP1"||2==y&&"VIP2"||3==y&&"VIP3"||4==y&&"VIP4"||5==y&&"VIP5"||6==y&&"VIP6"))),b["default"].createElement(E.Link,{to:"/user/analysis"},b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].mpLeft},b["default"].createElement("p",{className:I["default"].one},"总资产 (元)"),b["default"].createElement("p",{className:I["default"].two},n)),b["default"].createElement("div",{className:I["default"].mpright},b["default"].createElement("p",null,"账户安全保障中"),b["default"].createElement("div",{className:I["default"].rightArrows},b["default"].createElement("span",{className:I["default"].arrows}))))),b["default"].createElement("div",{className:I["default"].contents},b["default"].createElement(E.Link,{to:"/user/main"},b["default"].createElement("div",{className:I["default"].myProduct,style:{height:"65px"}},b["default"].createElement("div",{className:I["default"].mpLeft},b["default"].createElement("p",{className:I["default"].one},"账户余额 (元)"),b["default"].createElement("p",{className:I["default"].two},function(){if(x){var e=(0,m["default"])(parseInt(100*x.data.balance+100*x.data.balance_platform)/100);if(!e.split(".")[1])return e+".00";switch(e.split(".")[1].length){case 1:return e+"0";case 2:return e;default:return e+".00"}}}())),b["default"].createElement("div",{className:I["default"].mpright},b["default"].createElement(E.Link,{to:"/user/rechargeMain",className:I["default"].a},b["default"].createElement("div",{className:I["default"].rechange},"充值")," "),b["default"].createElement(E.Link,{to:"/user/cashMain",className:I["default"].a},b["default"].createElement("div",{className:I["default"].withdrawals},"提现")," ")))),b["default"].createElement(E.Link,{to:"/user/calendar"},b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].mpLeft},b["default"].createElement("img",{src:C["default"]}),b["default"].createElement("p",{className:I["default"].mpFont1},"回款日历")),b["default"].createElement("div",{className:I["default"].mpright},b["default"].createElement("div",{className:I["default"].rightArrows},b["default"].createElement("span",{className:I["default"].arrows}))))),b["default"].createElement(be["default"],{ref:"store"}),b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},b["default"].createElement(E.Link,{onClick:function(){switch((0,te.getAuthDetail)()){case 1:t.props.push("/user/autoBuy");break;case 2:t.props.push("/user/setting/authorization");break;case 3:t.refs.store.show()}}},b["default"].createElement("img",{src:W["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"自动投标"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},"省时省心")))),b["default"].createElement("div",{className:I["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},b["default"].createElement(E.Link,{to:"/user/dcbB"},b["default"].createElement("img",{src:le["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"定存宝B"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},0==_&&"每月还息  到期还本"||"+"+_))))),b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList},b["default"].createElement(E.Link,{to:"/user/dcb"},b["default"].createElement("img",{src:S["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"定存宝A"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},0==p&&"到期还本付息"||"+"+p)))),b["default"].createElement("div",{className:I["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},b["default"].createElement(E.Link,{to:"/user/zt"},b["default"].createElement("img",{src:q["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"直投项目"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},0==o&&"期限灵活门槛低"||"+"+o))))),b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList},b["default"].createElement(E.Link,{to:"/user/zq"},b["default"].createElement("img",{src:M["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"债权转让"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},0==r&&"流动性高"||"+"+r)))),b["default"].createElement("div",{className:I["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},b["default"].createElement(E.Link,{to:"/user/gatherMy"},b["default"].createElement("img",{src:M["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"聚点+"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},"智能投标"))))),b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList},b["default"].createElement(E.Link,{to:"/user/wisdomMy"},b["default"].createElement("img",{style:{width:"24px",position:"relative",left:"3px",marginRight:"3px"},src:j["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"智享计划"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},"投资更灵活")))))),b["default"].createElement("div",{className:I["default"].contents,style:{marginBottom:"40px"}},b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList},b["default"].createElement(E.Link,{to:"/user/redPacket"},b["default"].createElement("img",{src:U["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"红包"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#888"}},d)))),b["default"].createElement("div",{className:I["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},b["default"].createElement(E.Link,{to:"/user/addRate"},b["default"].createElement("img",{src:H["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"加息券"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#888"}},0==f?"更多活动":f+"张"))))),b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList},b["default"].createElement(E.Link,{to:"/user/fridayActivity"},b["default"].createElement("img",{src:de["default"],style:{width:"26px",height:"25px",marginLeft:"2px"}}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"周五狂享礼"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#888"}},"点币大派送")))),b["default"].createElement("div",{className:I["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},b["default"].createElement(E.Link,{to:"/user/vouchers"},b["default"].createElement("img",{src:Q["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"抵用券"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#888"}},0==u?"更多活动":u+"张"))))),b["default"].createElement("div",{className:I["default"].myProduct},b["default"].createElement("div",{className:I["default"].myList,style:{display:"none"}},b["default"].createElement("img",{src:ee["default"]}),b["default"].createElement("div",{className:I["default"].myListText},b["default"].createElement("p",{className:I["default"].listTitle},"理财金"),b["default"].createElement("p",{className:I["default"].listColor,style:{color:"#F19149"}},s))))))}},{key:"fridayPopDom",value:function(e){var t=e.coin,a=e.username;return b["default"].createElement("div",{ref:"fridayPop",className:I["default"].fridayPopWraper},b["default"].createElement("div",{className:I["default"].shadow}),b["default"].createElement("div",{className:I["default"].popWraper},b["default"].createElement("div",{className:I["default"].popContent},b["default"].createElement("img",{className:I["default"].pop1,src:ne["default"]}),b["default"].createElement("div",{className:I["default"].pop2},b["default"].createElement("div",{className:I["default"].txt1},b["default"].createElement("p",{className:I["default"].txt11},"尊敬的",a),b["default"].createElement("p",{className:I["default"].txt12},"你在上一个活动周期里")),b["default"].createElement("div",{className:I["default"].txt2},b["default"].createElement("p",{className:I["default"].txt21},"恭喜获得点币数"),b["default"].createElement("p",{className:I["default"].txt22},t))),b["default"].createElement("div",{className:I["default"].pop3},b["default"].createElement("p",null,"向更多点币发起冲击吧！")),b["default"].createElement("img",{src:re["default"],className:I["default"].close,onClick:this.handleClick}))))}},{key:"componentDidMount",value:function(){this.props.load(),this.props.fridayPop(),this.props.getVip()}},{key:"render",value:function(){var e=this.props,t=e.nobjs,a=e.fridayPopData,l=void 0,i=void 0;return a&&a.data&&0!=a.data.coin&&(i=this.fridayPopDom(a.data)),l=t?this.loadingEndDom(t.data):this.loadingDom(),b["default"].createElement("div",null,b["default"].createElement("div",{className:I["default"].myContent},l),b["default"].createElement("div",null,this.state.ifShow&&i))}}]),t}(b["default"].Component)),Ne=function(e,t){return{nobjs:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),fridayPopData:e.infodata.getIn(["FRIDAY_POP","data"]),userInfo:e.infodata.getIn(["USER_INFO","data"]),VipData:e.infodata.getIn(["GET_VIP","data"])}},Te=function(e,t){return{getVip:function(){e({type:"GET_VIP"})},load:function(){e({type:"USER_INFO_WITH_LOGIN"})},fridayPop:function(){e({type:"FRIDAY_POP"})},push:function(t){e((0,y.push)(t))}}};t["default"]=(0,v.connect)(Ne,Te)(we)},1137:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1062),n=l(i);t["default"]=n["default"]},1504:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".myContent___3NSEy{position:absolute;width:100%;height:100%;overflow:auto;margin-bottom:40px;-webkit-overflow-scrolling:touch}.myContent___3NSEy::-webkit-scrollbar{display:none}.listTitle___1sPDW{color:#000}.header___3i_b4{background:#fff;height:50px;width:100%;text-align:center;line-height:50px;font-size:17px;color:#333;position:fixed;top:0;left:0;z-index:10}body{background:#f0eff5}.userAccount___3IZDR{width:100%;overflow:hidden;position:relative;margin-bottom:15px;z-index:5;background:#fff;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.userAccount___3IZDR .settingBg___2o738{position:absolute;width:92px;right:0;height:28px;border-bottom-left-radius:17px;border-top-left-radius:17px;background-color:#000;opacity:.3;bottom:31px}.userAccount___3IZDR .news___3FwKL{position:absolute;right:55px;top:10px;width:24px}.userAccount___3IZDR .setting___3au0t{position:absolute;right:15px;top:10px;width:24px}.userAccount___3IZDR .settings___3sxpP{position:absolute;width:90px;right:0;height:28px;bottom:31px;line-height:28px;color:#fff;font-size:14px}.userAccount___3IZDR .settings___3sxpP img{float:left;width:24px;margin-top:7px;margin-right:4px}.userAccount___3IZDR .userBg___O_zxA{width:100%;display:block}.userAccount___3IZDR .userInfo___1A9To{width:100%;height:90px;position:absolute;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.userAccount___3IZDR .userInfo___1A9To .name___ah9vf{color:#fff;text-align:center;margin:8px auto}.userAccount___3IZDR .userInfo___1A9To .img_c___9tzBT{height:90px;-webkit-box-flex:0;-ms-flex:0 90px;flex:0 90px}.userAccount___3IZDR .userInfo___1A9To .img_c___9tzBT img{width:60px;height:60px;margin:15px}.userAccount___3IZDR .userInfo___1A9To .name___ah9vf{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:left}.headImg___3AreY{width:55px;float:left}.headImg___3AreY img{width:55px;height:55px}.nameCenter___1u9Dz{float:left;height:55px;margin-left:15px}.nameCenter___1u9Dz p{font-size:20px;color:#898989;padding:0;margin:0;margin-top:8px;font-family:Hiragino Sans GB,Arial,Helvetica,\\\\5B8B\\4F53,sans-serif;font-weight:400}.nameCenter___1u9Dz a{font-size:12px;color:#00a6e2;text-decoration:none;padding:0;position:relative;top:-8px}.nameCenter___1u9Dz a img{display:inline-block;position:relative;top:5px;margin-right:8px}.arrows___2ZToz{position:relative}.arrows___2ZToz:after,.arrows___2ZToz:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___2ZToz:before{border-left-color:#b6b6b6;right:-2px}.rightArrows___2OhdY{float:right;margin-top:20px}.contents___1bavX{border-top:1px solid #e4e4e4;background:#fff;margin-top:15px}.myProduct___naTWQ{width:100%;overflow:hidden;background-color:#fff;border-bottom:1px solid #e4e4e4}.mpLeft___3WXfI{width:50%;float:left;padding-left:15px}.mpLeft___3WXfI .one___30fTn{height:auto;line-height:1;font-size:12px;color:#999;margin:12px 0 6px}.mpLeft___3WXfI .two___3UopR{height:auto;line-height:1}.mpright___3-UzG{float:left;width:50%;padding:0 15px;position:relative}.mpright___3-UzG .a___2FzPu{display:inline-block;float:right;margin-top:16px}.mpright___3-UzG .withdrawals___1Tcdq{background-color:#fff;color:#ff7701}.mpright___3-UzG .rechange___1DnAL,.mpright___3-UzG .withdrawals___1Tcdq{display:inline-block;padding:6px 12px;border-radius:2px;border:1px solid #ff7701}.mpright___3-UzG .rechange___1DnAL{background-color:#ff7701;color:#fff;margin-left:6px}.myProduct___naTWQ P{height:65px;line-height:65px}.mpLeft___3WXfI p{font-size:20px;color:#000}.mpright___3-UzG p{font-size:14px;color:#888}.mpright___3-UzG .rightArrows___2OhdY{position:absolute;height:100%;right:15px;top:2px}.myProduct___naTWQ .mpFont1___N71Ss{font-size:14px}.mpLeft___3WXfI img{display:inline-block;position:relative;top:18px;width:30px;height:30px;float:left;margin-right:10px}.myList___3g0xt{width:50%;float:left;padding:0 0 0 15px;position:relative}.myList___3g0xt a{display:block;height:65px}.myList___3g0xt img{float:left;margin-top:16px;width:30px}.myListText___phgim{float:left;height:65px;margin-left:10px}.myListText___phgim p{height:20px;margin:0;padding:0}.listTitle___1sPDW{font-size:14px;position:relative;top:-10px}.listColor___rlnON{font-size:12px;position:relative;top:-10px}.sign___2lGxx{font-size:14px;color:#00a6e2;float:right;position:absolute;right:15px}.remove___-gi8J{position:absolute;right:0;top:0;width:0;height:0;border-top:50px solid #dedede;border-left:60px solid transparent}.text___xZvfG{position:absolute;right:0;top:3px;right:2px;font-size:12px;color:#999}.shadow___2jnx2{background-color:#000;opacity:.5;filter:alpha(opacity=60);z-index:10}.popWraper___2nE_K,.shadow___2jnx2{position:fixed;width:100%;height:100%}.popWraper___2nE_K{opacity:1;z-index:20}.popContent___lb7SP{width:69.3%;border-radius:7px;margin:0 auto;position:relative;-webkit-transform:translateY(50%);transform:translateY(50%);bottom:0}.pop1___21Fv6{width:100%;height:38%;border-radius:7px 7px 0 0}.pop2___3dUFh{width:100%;background-color:#fff;margin-top:-3px;padding-bottom:12px}.txt1___to-5q{width:80%;margin:0 auto;text-align:center;padding-top:13px;border-bottom:1px solid #ddd}.txt11___2GA6M{font-size:14px}.txt12___e3MUF{font-size:12px;margin:8px 0 15px;color:#888}.txt2___2iQNk{width:80%;margin:0 auto;text-align:center;padding-top:10px}.txt22___2LLEJ{font-size:28px;color:#ff7701;margin-top:4px}.pop3___3uJcu{width:100%;height:44px;line-height:44px;background-color:#a350eb;border-radius:0 0 7px 7px}.pop3___3uJcu p{width:80%;text-align:center;display:block;margin:0 auto;color:#fff}.close___vPAyk{position:absolute;bottom:-50px;left:45%;width:40px;height:40px;z-index:20}",""]),t.locals={myContent:"myContent___3NSEy",listTitle:"listTitle___1sPDW",header:"header___3i_b4",userAccount:"userAccount___3IZDR",settingBg:"settingBg___2o738",news:"news___3FwKL",setting:"setting___3au0t",settings:"settings___3sxpP",userBg:"userBg___O_zxA",userInfo:"userInfo___1A9To",name:"name___ah9vf",img_c:"img_c___9tzBT",headImg:"headImg___3AreY",nameCenter:"nameCenter___1u9Dz",arrows:"arrows___2ZToz",rightArrows:"rightArrows___2OhdY",contents:"contents___1bavX",myProduct:"myProduct___naTWQ",mpLeft:"mpLeft___3WXfI",one:"one___30fTn",two:"two___3UopR",mpright:"mpright___3-UzG",a:"a___2FzPu",withdrawals:"withdrawals___1Tcdq",rechange:"rechange___1DnAL",mpFont1:"mpFont1___N71Ss",myList:"myList___3g0xt",myListText:"myListText___phgim",listColor:"listColor___rlnON",sign:"sign___2lGxx",remove:"remove___-gi8J",text:"text___xZvfG",shadow:"shadow___2jnx2",popWraper:"popWraper___2nE_K",popContent:"popContent___lb7SP",pop1:"pop1___21Fv6",pop2:"pop2___3dUFh",txt1:"txt1___to-5q",txt11:"txt11___2GA6M",txt12:"txt12___e3MUF",txt2:"txt2___2iQNk",txt22:"txt22___2LLEJ",pop3:"pop3___3uJcu",close:"close___vPAyk"}},1791:function(e,t,a){e.exports=a.p+"static/media/wisdom.b9a7d41f.png"},1806:function(e,t,a){e.exports=a.p+"static/media/10.438c418c.png"},1807:function(e,t,a){e.exports=a.p+"static/media/11.1fe70f7b.png"},1808:function(e,t,a){e.exports=a.p+"static/media/12.b1eb6d98.png"},1809:function(e,t,a){e.exports=a.p+"static/media/13.1258b9f0.png"},1810:function(e,t,a){e.exports=a.p+"static/media/14.14717a51.png"},1811:function(e,t,a){e.exports=a.p+"static/media/15.1830f0cf.png"},1812:function(e,t,a){e.exports=a.p+"static/media/16.7dd17495.png"},1813:function(e,t,a){e.exports=a.p+"static/media/2.d890e059.png"},1814:function(e,t,a){e.exports=a.p+"static/media/3.ae6fa681.png"},1815:function(e,t,a){e.exports=a.p+"static/media/4.63a4e871.png"},1816:function(e,t,a){e.exports=a.p+"static/media/5.15072c1d.png"},1817:function(e,t,a){e.exports=a.p+"static/media/6.2d3b8b6d.png"},1818:function(e,t,a){e.exports=a.p+"static/media/7.a4e199fd.png"},1819:function(e,t,a){e.exports=a.p+"static/media/8.d9f38b3d.png"},1820:function(e,t,a){e.exports=a.p+"static/media/9.6aec0b28.png"},1822:function(e,t,a){e.exports=a.p+"static/media/avatar.b1cf841a.png"},1826:function(e,t,a){
e.exports=a.p+"static/media/gift.5286eb62.png"},1830:function(e,t,a){e.exports=a.p+"static/media/new.9662a476.png"},1831:function(e,t,a){e.exports=a.p+"static/media/news.2d92e758.png"},1832:function(e,t,a){e.exports=a.p+"static/media/pop1.b01cf1f0.png"},1834:function(e,t,a){e.exports=a.p+"static/media/rt.e8d98d75.png"},1835:function(e,t,a){e.exports=a.p+"static/media/setting.9165062f.png"},1836:function(e,t,a){e.exports=a.p+"static/media/user_bg.14659354.png"},1837:function(e,t,a){e.exports=a.p+"static/media/vip.33299be6.png"},2105:function(e,t,a){var l=a(1504);"string"==typeof l&&(l=[[e.id,l,""]]);a(7)(l,{});l.locals&&(e.exports=l.locals)}});