webpackJsonp([3],{270:function(e,t,a){e.exports=a.p+"static/media/closex.39b6b6c0.png"},271:function(e,t,a){e.exports=a.p+"static/media/done.8604fb81.png"},272:function(e,t,a){e.exports=a.p+"static/media/sign.4afebd5e.jpg"},273:function(e,t,a){e.exports=a.p+"static/media/sign_pen.d21c0b14.png"},277:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o,s,d=a(2),u=l(d),f=a(5),c=l(f),m=a(3),p=l(m),_=a(4),g=l(_),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,u["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),x=a(1),h=l(x),y=a(111),b=l(y),v=a(393),N=l(v),w=a(155),L=l(w),T=a(272),k=l(T),C=a(271),F=l(C),z=a(273),B=l(z),P=a(270),I=l(P),M=a(15),A=l(M),S=(s=o=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.toggle=function(){return a.refs.modal.toggle()},a.show=function(){return a.refs.modal.show()},a.hide=function(){return a.refs.modal.hide()},a.doSign=function(){var e=a;a.props.sign?e.hide():L["default"].sign().then(function(t){var a=t.response;100==a.code?e.props.callBackFun(a):e.hide()})},a.state={coin:0,day:0},a}return r(t,e),E(t,[{key:"render",value:function(){var e=this,t=b["default"][this.props.mode];return h["default"].createElement(t,{ref:"modal"},h["default"].createElement("div",{className:N["default"].sign},this.props.sign&&h["default"].createElement("img",{className:N["default"].t,src:F["default"],alt:""})||h["default"].createElement("img",{className:N["default"].t,src:k["default"],alt:""}),h["default"].createElement("div",{className:N["default"].msBox},h["default"].createElement("p",null,"连续签到5天"),h["default"].createElement("p",null,"额外获得50点币"),h["default"].createElement("hr",null)),h["default"].createElement("p",{className:N["default"].info+" "+N["default"].mt15},"您已累计签到 ",h["default"].createElement("span",null,this.props.days)," 天"),h["default"].createElement("p",{className:N["default"].info},"已获得点币 ",h["default"].createElement("span",null,this.props.coin)),h["default"].createElement("button",{onClick:function(){e.doSign()}},this.props.sign&&"确定"||"点击签到"),h["default"].createElement("img",{className:N["default"].pen,src:B["default"],alt:""})),h["default"].createElement("img",{onClick:function(){e.hide()},src:I["default"],className:N["default"].close,alt:""}))}}]),t}(h["default"].PureComponent),o.propTypes={mode:A["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),coin:A["default"].number,days:A["default"].number,sign:A["default"].bool,callBackFun:A["default"].func},o.defaultProps={mode:"ScaleModal"},s);t["default"]=S},327:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".close___2-rU4{margin:30px auto 0;width:60px;display:block}.msBox___15bX3{padding:10px 30px 0 0}.msBox___15bX3 hr{height:1px;border:0;background-color:#fff;margin-top:10px}.msBox___15bX3 p{font-size:18px;font-style:italic;padding-left:0;line-height:26px;color:#fff}.sign___3q_KT{position:relative;width:270px;box-sizing:border-box;border:8px solid #fff799;border-radius:5px;background:#f76260;padding-top:33px;padding-left:35px;padding-bottom:25px}.sign___3q_KT .t___3jg0w{width:80%}.sign___3q_KT .info___nTjpr{font-size:15px;color:#fff;line-height:20px}.sign___3q_KT .info___nTjpr.mt15___33xoi{margin-top:12px}.sign___3q_KT .info___nTjpr span{font-size:18px;color:#fff799}.sign___3q_KT button{margin-top:20px;width:200px;height:54px;border-radius:5px;font-size:24px;color:#1580b3;display:block;background:#7ecff5;box-shadow:0 5px 0 #16a1d9;border:none}.sign___3q_KT .pen___1mltm{position:absolute;bottom:50px;width:105px;right:-30px}",""]),t.locals={close:"close___2-rU4",msBox:"msBox___15bX3",sign:"sign___3q_KT",t:"t___3jg0w",info:"info___nTjpr",mt15:"mt15___33xoi",pen:"pen___1mltm"}},393:[2088,327],741:function(e,t,a){e.exports=a.p+"static/media/10.438c418c.png"},742:function(e,t,a){e.exports=a.p+"static/media/11.1fe70f7b.png"},743:function(e,t,a){e.exports=a.p+"static/media/12.b1eb6d98.png"},744:function(e,t,a){e.exports=a.p+"static/media/13.1258b9f0.png"},745:function(e,t,a){e.exports=a.p+"static/media/14.14717a51.png"},746:function(e,t,a){e.exports=a.p+"static/media/15.1830f0cf.png"},747:function(e,t,a){e.exports=a.p+"static/media/16.7dd17495.png"},748:function(e,t,a){e.exports=a.p+"static/media/2.d890e059.png"},749:function(e,t,a){e.exports=a.p+"static/media/3.ae6fa681.png"},750:function(e,t,a){e.exports=a.p+"static/media/4.63a4e871.png"},751:function(e,t,a){e.exports=a.p+"static/media/5.15072c1d.png"},752:function(e,t,a){e.exports=a.p+"static/media/6.2d3b8b6d.png"},753:function(e,t,a){e.exports=a.p+"static/media/7.a4e199fd.png"},754:function(e,t,a){e.exports=a.p+"static/media/8.d9f38b3d.png"},755:function(e,t,a){e.exports=a.p+"static/media/9.6aec0b28.png"},1e3:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),s=l(o),d=a(5),u=l(d),f=a(3),c=l(f),m=a(4),p=l(m),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,s["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),g=a(1),E=l(g),x=a(22),h=a(10),y=a(19),b=l(y),v=a(277),N=l(v),w=a(1979),L=l(w),T=a(748),k=l(T),C=a(755),F=l(C),z=a(749),B=l(z),P=a(750),I=l(P),M=a(751),A=l(M),S=a(752),j=l(S),q=a(753),K=l(q),O=a(754),D=l(O),R=a(741),U=l(R),X=a(742),Q=l(X),W=a(743),H=l(W),G=a(744),J=l(G),Y=a(745),Z=l(Y),V=a(746),$=l(V),ee=a(747),te=l(ee),ae=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.doSign=function(){a.refs.SignModel.show()},a}return r(t,e),_(t,[{key:"loadingDom",value:function(){return E["default"].createElement(b["default"],null)}},{key:"loadingEndDom",value:function(e){var t=e.avatar,a=e.username,l=(e.grade,e.isSign),n=e.signNumbers,i=e.amount,r=e.balance,o=e.demand,s=e.directInvest,d=e.creditors,u=e.privilege,f=e.bonuse,c=e.interestRateSecurities,m=e.scratcheCard,p=e.voucher,_=e.coins,g=e.deposit,h=e.isBuyDemand,y=e.depositb;return E["default"].createElement("div",null,E["default"].createElement("div",{className:L["default"].header},"账户"),E["default"].createElement(N["default"],{ref:"SignModel",coin:+_,days:+n,sign:l,callBackFun:this.props.load}),E["default"].createElement("div",{className:L["default"].userAccount},E["default"].createElement("div",{className:L["default"].headImg},E["default"].createElement("img",{src:t})),E["default"].createElement("div",{className:L["default"].nameCenter},E["default"].createElement("p",null,a),E["default"].createElement("p",{onClick:function(e){return e.stopPropagation()}},E["default"].createElement(x.Link,null,E["default"].createElement("img",{src:k["default"]}),"普通会员"))),E["default"].createElement("div",{className:L["default"].rightArrows},E["default"].createElement(x.Link,{to:"/user/setting"},E["default"].createElement("span",{className:L["default"].arrows})))),E["default"].createElement("div",{className:L["default"].contents},E["default"].createElement(x.Link,{to:"/user/analysis"},E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].mpLeft},E["default"].createElement("p",null,i)),E["default"].createElement("div",{className:L["default"].mpright},E["default"].createElement("p",null,"账户安全保障中"),E["default"].createElement("div",{className:L["default"].rightArrows},E["default"].createElement("span",{className:L["default"].arrows}))))),E["default"].createElement(x.Link,{to:"/user/calendar"},E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].mpLeft},E["default"].createElement("img",{src:F["default"]}),E["default"].createElement("p",{className:L["default"].mpFont1},"回款日历")),E["default"].createElement("div",{className:L["default"].mpright},E["default"].createElement("div",{className:L["default"].rightArrows},E["default"].createElement("span",{className:L["default"].arrows}))))),E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].myList},E["default"].createElement(x.Link,{to:"/user/recharge"},E["default"].createElement("img",{src:B["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"充值"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#888"}},0==r&&"立即充值"||r)))),E["default"].createElement("div",{className:L["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},E["default"].createElement(x.Link,{to:"/user/autoBuy"},E["default"].createElement("img",{src:D["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"自动投标"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},"省时省心"))))),E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].myList},E["default"].createElement(x.Link,{to:"/user/dcbB"},E["default"].createElement("img",{src:te["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"定存宝B"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},0==y&&"每月还息  到期还本"||"+"+y)))),E["default"].createElement("div",{className:L["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},E["default"].createElement(x.Link,{to:"/user/dcb"},E["default"].createElement("img",{src:I["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"定存宝A"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},0==g&&"到期还本付息"||"+"+g))))),E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].myList},E["default"].createElement(x.Link,{to:"/user/zt"},E["default"].createElement("img",{src:K["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"直投项目"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},0==s&&"期限灵活门槛低"||"+"+s)))),E["default"].createElement("div",{className:L["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},E["default"].createElement(x.Link,{to:"/user/zq"},E["default"].createElement("img",{src:A["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"债权转让"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},0==d&&"流动性高"||"+"+d))))),E["default"].createElement("div",{className:L["default"].myProduct},0!=h&&E["default"].createElement("div",{className:L["default"].myList},E["default"].createElement(x.Link,{to:"/user/MyDemandIndex"},E["default"].createElement("img",{src:j["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"零钱宝"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},0==o&&"查看详情"||"+"+o))),E["default"].createElement("div",{className:L["default"].remove}),E["default"].createElement("span",{className:L["default"].text},"已下架")))),E["default"].createElement("div",{className:L["default"].contents,style:{marginBottom:"40px"}},E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].myList},E["default"].createElement(x.Link,{to:"/user/redPacket"},E["default"].createElement("img",{src:U["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"红包"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#888"}},f)))),E["default"].createElement("div",{className:L["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},E["default"].createElement(x.Link,{to:"/user/addRate"},E["default"].createElement("img",{src:J["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"加息券"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#888"}},0==c?"更多活动":c+"张"))))),E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].myList},E["default"].createElement(x.Link,{to:"/user/scratchesCard"},E["default"].createElement("img",{src:Q["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"刮刮卡"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#888"}},0==m?"红色星期五":m+"张")))),E["default"].createElement("div",{className:L["default"].myList,style:{borderLeft:"1px solid #E4E4E4"}},E["default"].createElement(x.Link,{to:"/user/vouchers"},E["default"].createElement("img",{src:Z["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"抵用券"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#888"}},0==p?"更多活动":p+"张"))))),E["default"].createElement("div",{className:L["default"].myProduct},E["default"].createElement("div",{className:L["default"].myList,style:{borderRight:"1px solid #E4E4E4"}},E["default"].createElement(x.Link,{to:"/user/coinShop"},E["default"].createElement("img",{src:H["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"积分商城"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#888"}},0==_&&"更多活动"||_)))),E["default"].createElement("div",{className:L["default"].myList,style:{display:"none"}},E["default"].createElement("img",{src:$["default"]}),E["default"].createElement("div",{className:L["default"].myListText},E["default"].createElement("p",{className:L["default"].listTitle},"理财金"),E["default"].createElement("p",{className:L["default"].listColor,style:{color:"#F19149"}},u))))))}},{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var e=this.props.nobjs,t=void 0;return t=e?this.loadingEndDom(e.data):this.loadingDom(),E["default"].createElement("div",{className:L["default"].myContent},t)}}]),t}(E["default"].Component),le=function(e,t){return{nobjs:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"])}},ne=function(e,t){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})}}};t["default"]=(0,h.connect)(le,ne)(ae)},1068:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1e3),i=l(n);t["default"]=i["default"]},1434:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".myContent___wEInw{padding-top:50px;position:absolute;width:100%;height:100%;overflow:auto;margin-bottom:40px;-webkit-overflow-scrolling:touch}.myContent___wEInw::-webkit-scrollbar{display:none}.listTitle___3BOF2{color:#000}.header___3MpB-{background:#fff;height:50px;width:100%;text-align:center;line-height:50px;font-size:17px;color:#333;position:fixed;top:0;left:0;z-index:10}body{background:#f0eff5}.userAccount___3iCK2{width:100%;overflow:hidden;position:relative;padding:15px;z-index:5;background:#fff;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4;margin-top:15px}.headImg___gTCyY{width:55px;float:left}.headImg___gTCyY img{width:55px;height:55px}.nameCenter___2dmF8{float:left;height:55px;margin-left:15px}.nameCenter___2dmF8 p{font-size:20px;color:#898989;padding:0;margin:0;margin-top:8px;font-family:Hiragino Sans GB,Arial,Helvetica,\\\\5B8B\\4F53,sans-serif;font-weight:400}.nameCenter___2dmF8 a{font-size:12px;color:#00a6e2;text-decoration:none;padding:0;position:relative;top:-8px}.nameCenter___2dmF8 a img{display:inline-block;position:relative;top:5px;margin-right:8px}.arrows___34yWd{position:relative}.arrows___34yWd:after,.arrows___34yWd:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___34yWd:before{border-left-color:#b6b6b6;right:-2px}.rightArrows___2i3FS{float:right;margin-top:20px}.contents___1mi_3{border-top:1px solid #e4e4e4;background:#fff;margin-top:15px}.myProduct___17zL5{width:100%;overflow:hidden;border-bottom:1px solid #e4e4e4}.mpLeft___2NXQK{width:50%;float:left;padding-left:15px}.mpright___1TsQp{float:left;width:50%;padding:0 15px;position:relative}.myProduct___17zL5 P{height:65px;line-height:65px}.mpLeft___2NXQK p{font-size:20px;color:#000}.mpright___1TsQp p{font-size:14px;color:#888}.mpright___1TsQp .rightArrows___2i3FS{position:absolute;height:100%;right:15px;top:2px}.myProduct___17zL5 .mpFont1___2GDqZ{font-size:14px}.mpLeft___2NXQK img{display:inline-block;position:relative;top:18px;width:30px;height:30px;float:left;margin-right:10px}.myList___1-xFJ{width:50%;float:left;padding:0 15px;position:relative}.myList___1-xFJ a{display:block;height:65px}.myList___1-xFJ img{float:left;margin-top:16px;width:30px}.myListText___Rfq7A{float:left;height:65px;margin-left:10px}.myListText___Rfq7A p{height:20px;margin:0;padding:0}.listTitle___3BOF2{font-size:14px;position:relative;top:-10px}.listColor___A2jUi{font-size:12px;position:relative;top:-10px}.sign___2Uvp7{font-size:14px;color:#00a6e2;float:right;position:absolute;right:15px}.remove___1gm6U{position:absolute;right:0;top:0;width:0;height:0;border-top:50px solid #dedede;border-left:60px solid transparent}.text___2XqHI{position:absolute;right:0;top:3px;right:2px;font-size:12px;color:#999}",""]),t.locals={myContent:"myContent___wEInw",listTitle:"listTitle___3BOF2",header:"header___3MpB-",userAccount:"userAccount___3iCK2",headImg:"headImg___gTCyY",nameCenter:"nameCenter___2dmF8",arrows:"arrows___34yWd",rightArrows:"rightArrows___2i3FS",contents:"contents___1mi_3",myProduct:"myProduct___17zL5",mpLeft:"mpLeft___2NXQK",mpright:"mpright___1TsQp",mpFont1:"mpFont1___2GDqZ",myList:"myList___1-xFJ",myListText:"myListText___Rfq7A",listColor:"listColor___A2jUi",sign:"sign___2Uvp7",remove:"remove___1gm6U",text:"text___2XqHI"}},1979:[2093,1434]});