webpackJsonp([14],{137:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=o(r),c=a(5),p=o(c),d=a(3),f=o(d),_=a(4),h=o(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),b=o(y),x=a(11),v=o(x),g=a(168),C=o(g),E=a(19),k=n(E),I=a(10),w=a(21),N=o(w),P=a(9),D=a(163),S=o(D),R=a(160),A=o(R),T=a(161),B=o(T),z=a(17),U=(o(z),function(e){function t(){var e,a,n,o;i(this,t);for(var s=arguments.length,r=Array(s),u=0;u<s;u++)r[u]=arguments[u];return a=n=l(this,(e=t.__proto__||(0,h["default"])(t)).call.apply(e,[this].concat(r))),n.nullDom=function(e){return b["default"].createElement("img",{src:e,className:C["default"].nullImg})},o=a,l(n,o)}return s(t,e),m(t,[{key:"renderVoucher",value:function(e,t){var a=this,n=this.props,o=n.selected,i=n.money,l=e.amount,s=e.apply,r=e.end_date,u=e.start_date,c=e.id,p=e.invest_money,d=e.type,f=void 0;return f=i<parseFloat(p)?b["default"].createElement("span",{className:C["default"].noUse},"不可用"):o.id==c?b["default"].createElement("img",{src:A["default"],alt:"选中"}):b["default"].createElement("img",{onClick:function(){a.props.onSelect(e)},src:B["default"]}),b["default"].createElement("div",{className:C["default"].rateCell,key:t,style:{width:this.props.screenW}},b["default"].createElement("div",null,b["default"].createElement("div",null,b["default"].createElement("p",null,l+"元"+d),f),b["default"].createElement("div",null,b["default"].createElement("p",null,"投资",p,"即可使用"),b["default"].createElement("p",null,s))),b["default"].createElement("div",{style:{backgroundColor:"rgb(125,206,159)"}},b["default"].createElement("p",null,"有效期",u,"到",r)))}},{key:"renderInterestRate",value:function(e,t){var a=this,n=this.props,o=n.selected,i=n.money,l=e.rate,s=e.apply,r=e.end_date,u=e.start_date,c=e.id,p=e.invest_money,d=e.type,f=void 0;return f=i<parseFloat(p)?b["default"].createElement("span",{className:C["default"].noUse},"不可用"):o.id==c?b["default"].createElement("img",{src:A["default"],alt:"选中"}):b["default"].createElement("img",{onClick:function(){a.props.onSelect(e)},src:B["default"]}),b["default"].createElement("div",{className:C["default"].rateCell,key:t,style:{width:this.props.screenW}},b["default"].createElement("div",null,b["default"].createElement("div",null,b["default"].createElement("p",null,l+"%"+d),f),b["default"].createElement("div",null,b["default"].createElement("p",null,"投资",p,"即可使用"),b["default"].createElement("p",null,s))),b["default"].createElement("div",{style:{backgroundColor:"#feb178"}},b["default"].createElement("p",null,"有效期",u,"到",r)))}},{key:"render",value:function(){var e=this,t=this.props.type;if(!this.props.datas)return null;var a=[],n=[];return this.props.datas.map(function(o,i){1==t?a.push(e.renderVoucher(o,i)):n.push(e.renderInterestRate(o,i))}),b["default"].createElement("div",{className:C["default"].listBox},a,n)}}]),t}(b["default"].Component)),V=function(e){function t(e){i(this,t);var a=l(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.changeType=function(e){e!=a.state.selectID&&a.setState({selectID:e})},a.selectHandle=function(e){a.setState({selectedCoupon:e})},a.useCouponHandle=function(){var e=a.state.selectedCoupon;a.props.setUseCoupons(e,!0),a.props.useFn(e),a.props.click(),"加息券"==e.type?a.props.useCoupon(e.rate):a.props.useCoupon()},a.unUseCouponHandle=function(){a.setState({selectedCoupon:""}),a.props.setUseCoupons("",!1),a.props.goBack()},a.nullCoupon=function(){a.props.nullCoupon(),a.props.useFn(null)},a.state={selectID:1,selectedCoupon:a.props.selectedCoupon},a}return s(t,e),m(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props,a=t.click,n=t.money;return b["default"].createElement("div",{className:C["default"].root},b["default"].createElement(v["default"],{title:"选择优惠券",leftNode:b["default"].createElement("span",{style:{paddingLeft:"15px"}},"关闭"),onLeft:a,style:{position:"absolute",left:"0px",top:"0px"}}),b["default"].createElement("div",{style:{height:44}}),b["default"].createElement("div",{className:C["default"].selectDiv},b["default"].createElement("div",{style:{borderBottomColor:1===this.state.selectID?"#00a6e2":"transparent"},onClick:function(){e.changeType(1)}},b["default"].createElement("p",{style:{color:1===this.state.selectID?"#00a6e2":"#626262"}},"抵用券")),b["default"].createElement("div",{style:{borderBottomColor:2===this.state.selectID?"#00a6e2":"transparent"},onClick:function(){e.changeType(2)}},b["default"].createElement("p",{style:{color:2===this.state.selectID?"#00a6e2":"#626262"}},"加息券"))),b["default"].createElement("div",{style:{flex:1,overflowY:"scroll",position:"relative"}},b["default"].createElement(U,{onSelect:this.selectHandle,datas:1==this.state.selectID?this.props.vouchers:this.props.interestRates,type:this.state.selectID,money:n,selected:this.state.selectedCoupon||""})),b["default"].createElement("div",{style:{height:50}}),b["default"].createElement("div",{className:C["default"].sure},b["default"].createElement("div",{onClick:this.nullCoupon},b["default"].createElement("p",null,"不使用优惠")),b["default"].createElement("div",{onClick:this.useCouponHandle},b["default"].createElement("p",null,"使用"))))}}]),t}(b["default"].Component),O=function(e,t){var a=e.infodata.getIn([k.AVAILABLE_COUPONS,"data"]);return{vouchers:a&&a.data&&a.data.filter(function(e){return"抵用券"===e.type}),interestRates:a&&a.data&&a.data.filter(function(e){return"加息券"===e.type}),selectedCoupon:e.useCoupons.getIn(["coupons","selectedCoupon"])}},F=function(e,t){return{setAppointPassword:function(t){e({type:k.SET_APPOINT_PASSWORD,payload:t})},push:function(t){e((0,P.push)(t))},goBack:function(){e((0,P.goBack)())},setUseCoupons:function(t,a){e({type:k.SET_USE_COUPONS,useCoupon:a,selectedCoupon:t})}}};t["default"]=(0,S["default"])()((0,I.connect)(O,F)((0,N["default"])(V)))},154:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___26zht{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;background:#f5f5f5}.root___26zht,.selectDiv___1ZdjX{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.selectDiv___1ZdjX{height:40px;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #ddd}.selectDiv___1ZdjX>div{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;border-bottom:2px solid transparent}.selectDiv___1ZdjX>div>p{font-size:16px;color:#000}.selectDiv___1ZdjX div:nth-child(1){border-bottom-color:#00a6e2}.selectDiv___1ZdjX div:nth-child(1)>p{color:#00a6e2}.rateCell___2WGU7{margin:10px 15px;height:171px;background:#fff}.rateCell___2WGU7>div:nth-child(1){height:131px;padding:0 20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1){height:50px;border-bottom:1px solid #888;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>p{line-height:50px;font-size:15px;color:#111}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>div{height:20px;margin-top:15px;width:20px;border-radius:10px;border:1px solid #00a7e1;background:transparent}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>img{height:20px;margin-top:15px;width:20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p{color:#888;font-size:13px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(1){margin-top:18px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(2){margin-top:10px}.rateCell___2WGU7>div:nth-child(2){background:#feb178;height:40px}.rateCell___2WGU7>div:nth-child(2)>p{color:#fff;margin-left:20px;line-height:40px;font-size:13px}.noUse___vAjam{line-height:49px;font-size:20px;color:#aaa}.sure___22RPV{position:absolute;bottom:0;height:50px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.sure___22RPV,.sure___22RPV>div{display:-webkit-box;display:-ms-flexbox;display:flex}.sure___22RPV>div{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#59c5ec}.sure___22RPV>div>p{font-size:16px;color:#fff}.sure___22RPV div:nth-child(1){width:30%}.sure___22RPV div:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;background:#00a7e1}.nullImg___2k9fu{width:161px;position:absolute;left:50%;top:50%}.listBox___1fRXU{position:absolute;left:0;top:0;width:100%;height:100%;overflow:scroll}",""]),t.locals={root:"root___26zht",selectDiv:"selectDiv___1ZdjX",rateCell:"rateCell___2WGU7",noUse:"noUse___vAjam",sure:"sure___22RPV",nullImg:"nullImg___2k9fu",listBox:"listBox___1fRXU"}},160:function(e,t,a){e.exports=a.p+"static/media/0k2.2fc4ca54.png"},161:function(e,t,a){e.exports=a.p+"static/media/circle.f77227eb.png"},168:function(e,t,a){var n=a(154);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},346:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___16a1E{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;background:#f5f5f5}.bg___30WRx{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.title___10aGB{font-size:14px;color:#888;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:15px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.zg___2zeVC{position:absolute;left:0;top:0;width:100%;height:100%;background-color:red;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;z-index:9999}.scroll___22zyx{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.scroll___22zyx::-webkit-scrollbar{width:0}.scroll___22zyx::-webkit-scrollbar-thumb{border-radius:2px;background:#999}.infomation___32fbs{background:#fff;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex}.infomation___32fbs>div{-webkit-box-flex:1;-ms-flex:1;flex:1}.infomation___32fbs>div p:first-child{color:#898989;font-size:16px}.infomation___32fbs>div p:first-child>span{font-size:12px}.infomation___32fbs>div p:nth-child(2){margin-top:10px;font-size:18px;color:#000}.buyDiv___179-j{padding:17px 15px 27px;background:#fff;color:#000;font-size:16px}.buyDiv___179-j .buyTip___39qeh{font-size:12px}.expectIncome___h5Qpn{background-color:#fff;padding:0 0 0 15px;height:44}.expectIncome___h5Qpn .wrap___kVTuH{border-top:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.expectIncome___h5Qpn .name___2zGvu{color:#888;line-height:44px}.expectIncome___h5Qpn .profit___3Mtad{color:#ff7701;line-height:44px;-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.payMoney___1oqMx{background:#fff;padding:25px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #ddd}.payMoney___1oqMx>p:nth-child(1){line-height:20px;font-size:14px;color:#898989;-webkit-box-flex:1;-ms-flex:1;flex:1}.payMoney___1oqMx>p:nth-child(2){font-size:25px;color:#ff7701}.payBtn___8SZcY{padding:10px 15px 0;background:#f5f5f5}.payBtn___8SZcY>p{color:#888;font-size:14}.payBtn___8SZcY>div{margin-top:30px;height:54px;border-radius:3px;background:#49a7de;line-height:50px;font-size:16px;color:#fff;text-align:center}.coupon___2zRNl{background-color:#fcfcfc;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.coupon___2zRNl>span{font-size:16px}.coupon___2zRNl>div,.coupon___2zRNl>div div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.coupon___2zRNl>div div{position:relative;height:25px;background-color:#75cda1;padding:0 12px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#fff}.coupon___2zRNl>div div:after,.coupon___2zRNl>div div:before{content:'';height:30px;width:35px;position:absolute;background-color:#fcfcfc;border-radius:100%}.coupon___2zRNl>div div:before{top:-3px;left:-30px}.coupon___2zRNl>div div:after{top:-3px;right:-30px}.coupon___2zRNl>div:after{display:inline-block;content:'';width:9px;height:16px;background:url("+a(37)+");background-size:100% 100%;margin-left:7px;z-index:2}.discountBar___3AWpB{margin-top:20px;background-color:#fcfcfc;padding:0 15px}.discountBarTouch___CLUyt{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.discountBarName___1png_{-webkit-box-flex:1;-ms-flex:1;flex:1;fontsize:16px;color:#888}.textContent___3uTP0{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___FGzfi{color:#00a6e2}",""]),t.locals={root:"root___16a1E",bg:"bg___30WRx",title:"title___10aGB",zg:"zg___2zeVC",scroll:"scroll___22zyx",infomation:"infomation___32fbs",buyDiv:"buyDiv___179-j",buyTip:"buyTip___39qeh",expectIncome:"expectIncome___h5Qpn",wrap:"wrap___kVTuH",name:"name___2zGvu",profit:"profit___3Mtad",payMoney:"payMoney___1oqMx",payBtn:"payBtn___8SZcY",coupon:"coupon___2zRNl",discountBar:"discountBar___3AWpB",discountBarTouch:"discountBarTouch___CLUyt",discountBarName:"discountBarName___1png_",textContent:"textContent___3uTP0",protocol:"protocol___FGzfi"}},428:function(e,t,a){var n=a(346);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},886:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=o(r),c=a(5),p=o(c),d=a(3),f=o(d),_=a(56),h=o(_),m=a(4),y=o(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),v=o(x),g=a(11),C=o(g),E=a(428),k=o(E),I=a(19),w=n(I),N=a(20),P=a(10),D=a(21),S=o(D),R=a(9),A=a(17),T=o(A),B=a(173),z=o(B),U=a(24),V=o(U),O=a(239),F=o(O),M=a(28),q=o(M),j=a(137),W=o(j),L=a(62),Y=o(L),G=a(123),Z=o(G),X=a(17),H=o(X),Q=a(68),K=o(Q),J=window.location.origin,$=function(e){function t(e){i(this,t);var a=l(this,(t.__proto__||(0,y["default"])(t)).call(this,e));return a.changePending=function(){a.setState({pending:!1})},a.ifScan=function(e){a.state.checkBox?a.setState({checkBox:!1}):a.setState({checkBox:!0})},a.directInvestBuy=function(e,t){var n=a.props.useCoupon?a.getCoupon():null,o=a.state.useCoupon;!o&&n&&(n.id=""),a.setState({pendding:!0}),a.props.balancePay(a.directInvestId,a.state.quantity,e,sessionStorage.getItem("passwordFactor"),n&&n.id||"","WAP",sessionStorage.getItem("mapKey"))},a.directCardBuy=function(e,t,n){var o=a.props.useCoupon?a.getCoupon():null,i=a.state.useCoupon;!i&&o&&(o.id=""),a.setState({pending:!0}),a.props.cardPay(n,Number(T["default"].padMoney(a.getPayTotal())),a.directInvestId,a.state.quantity,e,sessionStorage.getItem("passwordFactor"),o&&o.id||"","WAP",sessionStorage.getItem("mapKey"))},a.onValid=function(){var e=a.state.select;1==e?a.refs.isAuth.isSecurityCard(a.successsFn,a.props.push,"/user/setting/tradePasswordSet"):a.successsFn()},a.successsFn=function(){var e=a.state.useCoupon&&a.getCoupon()||null,t=a.props.use;t&&100==t.code&&t.data.is&&e&&(e.id=""),a.setState({time:0}),a.refs.payProcess.open({id:a.directInvestId,num:a.state.quantity,couponId:e&&e.id||"",borrowPwd:a.borrowPwd})},a.changeQuantity=function(e){e<=0?a.refs.tipbar.open("购买份数必须为正整数!"):e>parseFloat(a.props.detail.left_quantity)&&a.refs.tipbar.open("剩余份数不足!"),a.setState({quantity:Number(e)})},a.voucherIsAvailable=function(e){var t=Number(a.state.quantity*a.state.unitPrice);return e.invest_money<=t},a.voucherIsNotAvailable=function(e){return!a.voucherIsAvailable(e)},a.getCoupon=function(){return a.props.selectedCoupon&&("抵用券"===a.props.selectedCoupon.type&&a.voucherIsAvailable(a.props.selectedCoupon)||"加息券"===a.props.selectedCoupon.type)?a.props.selectedCoupon:a.getMaxCoupon()},a.getPayTotal=function(e){var t=a.getCoupon(),n=a.state.useCoupon;return e?a.state.quantity*a.state.unitPrice:n&&a.props.useCoupon&&t&&"抵用券"===t.type?a.state.quantity*a.state.unitPrice-Number(t.amount):a.state.quantity*a.state.unitPrice},a.expectIncome=function(){var e=a.props.detail,t=a.state.rate;if(T["default"].isPlainObject(e))return"";var n=e.rate/100,o=a.getMaxCoupon();if(0!=t){var i=parseFloat(t)/100;n+=i}if(o&&a.state.useCoupon&&"加息券"==o.type&&"boolean"==typeof t){var l=parseFloat(o.rate)/100;n+=l}if(a.props.useCoupon&&a.state.useCoupon){var s=a.props.selectedCoupon||a.getMaxCoupon();s&&"加息券"===s.type&&+s.rate>=0&&+e.directRate>=0&&(n+=+s.rate/100)}return T["default"].padMoney(a.state.unitPrice*a.state.quantity*e.term*n/12)},a.overPay=function(e,t){var n=t.id,o=t.num,i=t.couponId,l="",s=2,r=a.props.location.state,u=H["default"].combineUrl(J+"/mobile_api/directInvest/buy/"+n,{num:o,payPwd:l,type:s,couponId:i,borrowPwd:r});a.setState({url:u,payTop:"0px"})},a.selectPayHandle=function(e){a.setState({chosenPay:e})},a.renderDiscountBar=function(){if(a.state.couponsFetching)return v["default"].createElement("div",{className:k["default"].discountBarTouch},v["default"].createElement("p",{className:k["default"].discountBarName},"正在加载优惠券"));var e=a.getCoupon();if(!e||a.state.quantity<1){var t=a.state.vouchers.sort(function(e,t){return Number(t.amount)-Number(e.amount)}),n=t.filter(a.voucherIsAvailable),o=t.filter(a.voucherIsNotAvailable).map(function(e){return(0,h["default"])({},e,{status:"unavailable"})});t=n.concat(o);a.state.interestRates.sort(function(e,t){return Number(t.rate)-Number(e.rate)});return v["default"].createElement("div",{className:k["default"].discountBarTouch,onClick:function(){a.openDy()}},v["default"].createElement("p",{className:k["default"].discountBarName},"暂无优惠可用"))}var i=a.props.use,l="抵用券"===e.type?"抵用券抵扣"+(e.amount||"")+"元":"加息券加息"+(e.rate||"")+"%",s=a.state.vouchers.sort(function(e,t){return Number(t.amount)-Number(e.amount)});s.filter(a.voucherIsAvailable),s.filter(a.voucherIsNotAvailable).map(function(e){return(0,h["default"])({},e,{status:"unavailable"})});if(i&&100==i.code&&i.data.is)return v["default"].createElement("div",{className:k["default"].coupon},v["default"].createElement("span",null,i.data.name));var r=a.state.useCoupon&&a.props.useCoupon?v["default"].createElement("div",null,v["default"].createElement("div",null,l)):null;return v["default"].createElement("div",{className:k["default"].coupon,onClick:function(){a.openDy()}},v["default"].createElement("span",null,"使用优惠"),r)},a.useDy=function(e){a.setState({choose:e})},a.clickFn=function(){a.setState({top:"100%"})},a.openDy=function(){var e=a.getPayTotal(!0);a.setState({top:"0px",money:e})},a.nullCoupon=function(){a.setState({top:"100%",useCoupon:!1,rate:0})},a.useCoupon=function(e){a.setState({top:"100%",useCoupon:!0}),e?a.setState({rate:e}):a.setState({rate:0})},a.getChoose=function(e){a.setState({select:e})},a.pop=function(){var e=a.refs.pay.getTime();1!=e?a.props.push(K["default"].getUrl()):a.props.goBack()},a.closeFn=function(){a.setState({payTop:"100%",url:""})},a.state={quantity:200,unitPrice:50,chosenPay:"",vouchers:[],interestRates:[],top:"100%",choose:"",money:"",checkBox:!0,useCoupon:!0,payTop:"100%",url:"",select:1,rate:!1,init:!0,pending:!1,time:0},a.directInvestId=a.props.params.id,a.borrowPwd=T["default"].getParams().borrowPwd,a}return s(t,e),b(t,[{key:"componentDidMount",value:function(){this.refs.choice.checked=!0,window.closeFn=this.closeFn,this.props.getDirectInvestDetail(this.directInvestId),this.props.getAvailableCoupons(this.props.params.month),this.props.getUse(this.props.params.id),this.props.getMyBankCards(),this.props.getUser()}},{key:"componentWillReceiveProps",value:function(e){var t=e.buyData,a=e.verifyData,n=e.carBuyData,o=e.cardVerifyData,i=this;if(!T["default"].isPlainObject(this.props.detail)){var l=this.props.detail.left_quantity?this.props.detail.left_quantity<this.state.quantity?this.props.detail.left_quantity:this.state.quantity:1,s=this.props.detail.each_money;this.setState({quantity:l,unitPrice:s})}!this.hasSetCoupon&&e.couponsData&&e.couponsData.data&&(this.hasSetCoupon=!0,this.setState({vouchers:e.couponsData.data.filter(function(e){return"抵用券"===e.type}),interestRates:e.couponsData.data.filter(function(e){return"加息券"===e.type})})),e.buyPending&&this.setState({pending:!0}),n&&1==n.status&&this.state.time<=3&&(this.setState({time:this.state.time+1}),o&&"0001"==o.code||(this.state.time>=3?o&&"0001"!=o.code&&this.setState({time:0}):setTimeout(function(){i.props.cardPayVerify({id:n.msgId})},2e3))),t&&1==t.status?this.state.time<=3&&(this.setState({time:this.state.time+1}),a&&"0001"==a.code||(this.state.time>=3?a&&"0001"!=a.code?(this.setState({time:0}),this.changePending()):this.changePending():setTimeout(function(){i.props.payVerify({id:t.msgId})},2e3))):t&&1!=t.status,e.use&&e.use.data.is&&this.setState({useCoupon:!1})}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"canPay",value:function(){var e=this.props.detail;return!T["default"].isPlainObject(e)&&(!!this.state.checkBox&&(!(Number(T["default"].padMoney(this.getPayTotal()))>this.props.user.balance)&&!!(this.state.quantity&&e.left_quantity&&this.state.quantity<=e.left_quantity)))}},{key:"getMaxCoupon",value:function(){var e=Number(this.state.quantity*this.state.unitPrice),t=void 0,a=void 0,n=void 0;if(this.state.vouchers.length>0){var o=this.state.vouchers.filter(this.voucherIsAvailable);t=o[0],o.forEach(function(e){Number(e.amount)>Number(t.amount)&&(t=e)})}if(this.state.interestRates.length>0&&(a=this.state.interestRates[0],this.state.interestRates.forEach(function(e){Number(e.rate)>Number(a.rate)&&(a=e)})),t&&a){var i=e*Number(a.rate)/100/12*this.props.params.month;n=i>Number(t.amount)?a:t}else t?n=t:a&&(n=a);return n}},{key:"render",value:function(){var e=this.props.detail;if(this.props.banks&&this.props.banks.data){this.props.banks.data}return v["default"].createElement("div",{className:k["default"].root},v["default"].createElement("div",{className:k["default"].bg},v["default"].createElement(C["default"],{title:"购买支付",onLeft:this.pop}),v["default"].createElement("div",{style:{height:44}}),v["default"].createElement("p",{className:k["default"].title},"购买产品：直投 ",e.term,"个月 年化利率（",e.rate||"","%）"),v["default"].createElement("div",{className:k["default"].scroll},v["default"].createElement("div",{className:k["default"].infomation},v["default"].createElement("div",null,v["default"].createElement("p",null,"单价",v["default"].createElement("span",null,"（元/份）")),v["default"].createElement("p",null,this.state.unitPrice)),v["default"].createElement("div",null,v["default"].createElement("p",null,"份数",v["default"].createElement("span",null,"（剩余",e.left_quantity||"","）")),v["default"].createElement(z["default"],{containerStyle:{marginTop:12},value:this.state.quantity,onChange:this.changeQuantity}))),v["default"].createElement("div",{className:k["default"].expectIncome},v["default"].createElement("div",{className:k["default"].wrap},v["default"].createElement("p",{className:k["default"].name},"预期收益（元）"),v["default"].createElement("p",{className:k["default"].profit},this.expectIncome(this.state.quantity)))),v["default"].createElement("div",{className:k["default"].discountBar},this.renderDiscountBar()),v["default"].createElement("div",{className:k["default"].payMoney},v["default"].createElement("p",null,"还需支付（元）"),v["default"].createElement("p",null,T["default"].padMoney(this.getPayTotal()))),v["default"].createElement(F["default"],{ref:"payProcess",type:"directInvest",go:this.props.push,getChoose:this.getChoose,overPay:this.overPay,user:this.props.user,banks:this.props.banks&&this.props.banks.data,time:this.state.time,balance:this.props.user.balance||0,onRequestBalancePay:this.directInvestBuy,onRequestCardPay:this.directCardBuy,verifyData:this.props.verifyData,inputValue:Number(T["default"].padMoney(this.getPayTotal())),balancePayPending:this.state.pending,balancePayData:this.props.buyData,cardPayData:this.props.carBuyData,cardVerifyData:this.props.cardVerifyData,changePending:this.changePending,clear:this.props.clear}),v["default"].createElement("p",{className:k["default"].textContent},v["default"].createElement("input",{ref:"choice",onChange:this.ifScan,style:{marginRight:"6px"},type:"checkbox"}),"我已阅读并同意宝点网",v["default"].createElement(N.Link,{to:"/directContract",className:k["default"].protocol},"《借贷及担保服务协议》")),v["default"].createElement(V["default"],{containerStyle:{margin:"40px 15px 20px"},text:"确认支付",disable:!(this.canPay()>0),onClick:this.onValid,status:this.canPay()>0?"":"disable"})),v["default"].createElement(q["default"],{ref:"tipbar"}),v["default"].createElement(Y["default"],{ref:"isAuth"})),v["default"].createElement("div",{className:k["default"].zg,style:{top:this.state.top}},v["default"].createElement(W["default"],{click:this.clickFn,useFn:this.useDy,money:this.state.money,nullCoupon:this.nullCoupon,useCoupon:this.useCoupon})),v["default"].createElement("div",{className:k["default"].zg,style:{top:this.state.payTop}},v["default"].createElement(Z["default"],{url:this.state.url,closeFn:this.closeFn,ref:"pay"})))}}]),t}(v["default"].Component),ee=function(e,t){var a=e.infodata.getIn([w.USER_INFO,"data"]),n=e.infodata.getIn(["DIRECTINVEST_DETAIL","data"]);return{user:a&&a.data||{},detail:n&&n.data||{},couponsFetching:e.infodata.getIn([w.AVAILABLE_COUPONS,"pending"]),couponsData:e.infodata.getIn([w.AVAILABLE_COUPONS,"data"]),buyPending:e.infodata.getIn([w.NEW_DIRECTINVEST_BUY,"pending"]),buyData:e.infodata.getIn([w.NEW_DIRECTINVEST_BUY,"data"]),carBuyData:e.infodata.getIn([w.NEW_CARD_BUY,"data"]),selectedCoupon:e.useCoupons.getIn(["coupons","selectedCoupon"]),useCoupon:e.useCoupons.getIn(["coupons","useCoupon"]),use:e.infodata.getIn(["DIRECT_INVEST_COUPON","data"]),banks:e.infodata.getIn(["GET_MY_CARD_LIST","data"]),verifyData:e.infodata.getIn(["PAY_VERIFY","data"]),cardVerifyData:e.infodata.getIn(["CARD_PAY_VERIFY","data"])}},te=function(e,t){return{getDirectInvestDetail:function(t){e({type:w.DIRECTINVEST_DETAIL,params:[t]})},getUser:function(){e({type:w.USER_INFO})},getAvailableCoupons:function(t){e({type:w.AVAILABLE_COUPONS,params:["直投",t]})},getUse:function(t){e({type:w.DIRECT_INVEST_COUPON,params:[t]})},push:function(t){e((0,R.push)(t))},goBack:function(){e((0,R.goBack)())},balancePay:function(t,a,n,o,i,l,s){e({type:w.NEW_DIRECTINVEST_BUY,params:[{productId:t,num:a,password:n,passwordFactor:o,couponId:i,productType:"DIRECT",device:l,mapKey:s}]})},cardPay:function(t,a,n,o,i,l,s,r,u){e({type:w.NEW_CARD_BUY,params:[{bankCard:t,transferAmount:a,productId:n,num:o,password:i,passwordFactor:l,couponId:s,productType:"DIRECT",device:r,mapKey:u}]})},payVerify:function(t){e({type:"PAY_VERIFY",params:[t]})},cardPayVerify:function(t){e({type:"CARD_PAY_VERIFY",params:[t]})},setUseCoupons:function(t){e({type:w.SET_USE_COUPONS,selectedCoupon:t})},clear:function(){e({type:"CLEAR_INFO_DATA",key:"NEW_CARD_BUY"}),e({type:"CLEAR_INFO_DATA",key:"NEW_DIRECTINVEST_BUY"}),e({type:"CLEAR_INFO_DATA",key:"PAY_VERIFY"}),e({type:"CLEAR_INFO_DATA",key:"CARD_PAY_VERIFY"})},clearData:function(){e({type:"CLEAR_CONPONS"}),e({type:"CLEAR_INFO_DATA",key:"AVAILABLE_COUPONS"}),e({type:"CLEAR_INFO_DATA",key:"DIRECT_INVEST_COUPON"})},getMyBankCards:function(){e({type:"GET_MY_CARD_LIST"})}}};t["default"]=(0,P.connect)(ee,te)((0,S["default"])($))},1038:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(886),i=n(o);t["default"]=i["default"]}});