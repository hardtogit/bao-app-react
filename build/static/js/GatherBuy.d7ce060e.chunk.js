webpackJsonp([16],{191:function(e,t,a){e.exports=a.p+"static/media/0k2.2fc4ca54.png"},193:function(e,t,a){e.exports=a.p+"static/media/circle.f77227eb.png"},202:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=o(r),p=a(5),c=o(p),d=a(3),f=o(d),_=a(4),m=o(_),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(1),x=o(y),b=a(11),g=o(b),v=a(229),E=o(v),k=a(17),C=n(k),w=a(10),I=a(21),A=o(I),D=a(9),P=a(185),N=o(P),B=a(191),R=o(B),T=a(193),S=o(T),F=a(20),q=(o(F),function(e){function t(){var e,a,n,o;i(this,t);for(var l=arguments.length,r=Array(l),u=0;u<l;u++)r[u]=arguments[u];return a=n=s(this,(e=t.__proto__||(0,m["default"])(t)).call.apply(e,[this].concat(r))),n.nullDom=function(e){return x["default"].createElement("img",{src:e,className:E["default"].nullImg})},o=a,s(n,o)}return l(t,e),h(t,[{key:"renderVoucher",value:function(e,t){var a=this,n=this.props,o=n.selected,i=n.money,s=e.amount,l=e.apply,r=e.end_date,u=e.start_date,p=e.id,c=e.invest_money,d=e.type,f=void 0;return f=i<parseFloat(c)?x["default"].createElement("span",{className:E["default"].noUse},"不可用"):o.id==p?x["default"].createElement("img",{src:R["default"],alt:"选中"}):x["default"].createElement("img",{onClick:function(){a.props.onSelect(e)},src:S["default"]}),x["default"].createElement("div",{className:E["default"].rateCell,key:t,style:{width:this.props.screenW}},x["default"].createElement("div",null,x["default"].createElement("div",null,x["default"].createElement("p",null,s+"元"+d),f),x["default"].createElement("div",null,x["default"].createElement("p",null,"投资",c,"即可使用"),x["default"].createElement("p",null,l))),x["default"].createElement("div",{style:{backgroundColor:"rgb(125,206,159)"}},x["default"].createElement("p",null,"有效期",u,"到",r)))}},{key:"renderInterestRate",value:function(e,t){var a=this,n=this.props,o=n.selected,i=n.money,s=e.rate,l=e.apply,r=e.end_date,u=e.start_date,p=e.id,c=e.invest_money,d=e.type,f=void 0;return f=i<parseFloat(c)?x["default"].createElement("span",{className:E["default"].noUse},"不可用"):o.id==p?x["default"].createElement("img",{src:R["default"],alt:"选中"}):x["default"].createElement("img",{onClick:function(){a.props.onSelect(e)},src:S["default"]}),x["default"].createElement("div",{className:E["default"].rateCell,key:t,style:{width:this.props.screenW}},x["default"].createElement("div",null,x["default"].createElement("div",null,x["default"].createElement("p",null,s+"%"+d),f),x["default"].createElement("div",null,x["default"].createElement("p",null,"投资",c,"即可使用"),x["default"].createElement("p",null,l))),x["default"].createElement("div",{style:{backgroundColor:"#feb178"}},x["default"].createElement("p",null,"有效期",u,"到",r)))}},{key:"render",value:function(){var e=this,t=this.props.type;if(!this.props.datas)return null;var a=[],n=[];return this.props.datas.map(function(o,i){1==t?a.push(e.renderVoucher(o,i)):n.push(e.renderInterestRate(o,i))}),x["default"].createElement("div",{className:E["default"].listBox},a,n)}}]),t}(x["default"].Component)),U=function(e){function t(e){i(this,t);var a=s(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.changeType=function(e){e!=a.state.selectID&&a.setState({selectID:e})},a.selectHandle=function(e){a.setState({selectedCoupon:e})},a.useCouponHandle=function(){var e=a.state.selectedCoupon;a.props.setUseCoupons(e,!0),a.props.useFn(e),a.props.click(),"加息券"==e.type?a.props.useCoupon(e.rate):a.props.useCoupon()},a.unUseCouponHandle=function(){a.setState({selectedCoupon:""}),a.props.setUseCoupons("",!1),a.props.goBack()},a.nullCoupon=function(){a.props.nullCoupon(),a.props.useFn(null)},a.state={selectID:1,selectedCoupon:a.props.selectedCoupon},a}return l(t,e),h(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props,a=t.click,n=t.money;return x["default"].createElement("div",{className:E["default"].root},x["default"].createElement(g["default"],{title:"选择优惠券",leftNode:x["default"].createElement("span",{style:{paddingLeft:"15px"}},"关闭"),onLeft:a,style:{position:"absolute",left:"0px",top:"0px"}}),x["default"].createElement("div",{style:{height:44}}),x["default"].createElement("div",{className:E["default"].selectDiv},x["default"].createElement("div",{style:{borderBottomColor:1===this.state.selectID?"#00a6e2":"transparent"},onClick:function(){e.changeType(1)}},x["default"].createElement("p",{style:{color:1===this.state.selectID?"#00a6e2":"#626262"}},"抵用券")),x["default"].createElement("div",{style:{borderBottomColor:2===this.state.selectID?"#00a6e2":"transparent"},onClick:function(){e.changeType(2)}},x["default"].createElement("p",{style:{color:2===this.state.selectID?"#00a6e2":"#626262"}},"加息券"))),x["default"].createElement("div",{style:{flex:1,overflowY:"scroll",position:"relative"}},x["default"].createElement(q,{onSelect:this.selectHandle,datas:1==this.state.selectID?this.props.vouchers:this.props.interestRates,type:this.state.selectID,money:n,selected:this.state.selectedCoupon||""})),x["default"].createElement("div",{style:{height:50}}),x["default"].createElement("div",{className:E["default"].sure},x["default"].createElement("div",{onClick:this.nullCoupon},x["default"].createElement("p",null,"不使用优惠")),x["default"].createElement("div",{onClick:this.useCouponHandle},x["default"].createElement("p",null,"使用"))))}}]),t}(x["default"].Component),O=function(e,t){var a=e.infodata.getIn([C.AVAILABLE_COUPONS,"data"]);return{vouchers:a&&a.data&&a.data.filter(function(e){return"抵用券"===e.type}),interestRates:a&&a.data&&a.data.filter(function(e){return"加息券"===e.type}),selectedCoupon:e.useCoupons.getIn(["coupons","selectedCoupon"])}},j=function(e,t){return{setAppointPassword:function(t){e({type:C.SET_APPOINT_PASSWORD,payload:t})},push:function(t){e((0,D.push)(t))},goBack:function(){e((0,D.goBack)())},setUseCoupons:function(t,a){e({type:C.SET_USE_COUPONS,useCoupon:a,selectedCoupon:t})}}};t["default"]=(0,N["default"])()((0,w.connect)(O,j)((0,A["default"])(U)))},212:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".root___26zht{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;background:#f5f5f5}.root___26zht,.selectDiv___1ZdjX{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.selectDiv___1ZdjX{height:40px;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #ddd}.selectDiv___1ZdjX>div{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;border-bottom:2px solid transparent}.selectDiv___1ZdjX>div>p{font-size:16px;color:#000}.selectDiv___1ZdjX div:nth-child(1){border-bottom-color:#00a6e2}.selectDiv___1ZdjX div:nth-child(1)>p{color:#00a6e2}.rateCell___2WGU7{margin:10px 15px;height:171px;background:#fff}.rateCell___2WGU7>div:nth-child(1){height:131px;padding:0 20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1){height:50px;border-bottom:1px solid #888;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>p{line-height:50px;font-size:15px;color:#111}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>div{height:20px;margin-top:15px;width:20px;border-radius:10px;border:1px solid #00a7e1;background:transparent}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>img{height:20px;margin-top:15px;width:20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p{color:#888;font-size:13px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(1){margin-top:18px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(2){margin-top:10px}.rateCell___2WGU7>div:nth-child(2){background:#feb178;height:40px}.rateCell___2WGU7>div:nth-child(2)>p{color:#fff;margin-left:20px;line-height:40px;font-size:13px}.noUse___vAjam{line-height:49px;font-size:20px;color:#aaa}.sure___22RPV{position:absolute;bottom:0;height:50px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.sure___22RPV,.sure___22RPV>div{display:-webkit-box;display:-ms-flexbox;display:flex}.sure___22RPV>div{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#59c5ec}.sure___22RPV>div>p{font-size:16px;color:#fff}.sure___22RPV div:nth-child(1){width:30%}.sure___22RPV div:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;background:#00a7e1}.nullImg___2k9fu{width:161px;position:absolute;left:50%;top:50%}.listBox___1fRXU{position:absolute;left:0;top:0;width:100%;height:100%;overflow:scroll}",""]),t.locals={root:"root___26zht",selectDiv:"selectDiv___1ZdjX",rateCell:"rateCell___2WGU7",noUse:"noUse___vAjam",sure:"sure___22RPV",nullImg:"nullImg___2k9fu",listBox:"listBox___1fRXU"}},229:function(e,t,a){var n=a(212);"string"==typeof n&&(n=[[e.id,n,""]]);a(8)(n,{});n.locals&&(e.exports=n.locals)},982:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=o(r),p=a(5),c=o(p),d=a(3),f=o(d),_=a(43),m=o(_),h=a(117),y=o(h),x=a(4),b=o(x),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),E=o(v),k=a(10),C=a(9),w=a(2128),I=o(w),A=a(11),D=o(A),P=a(26),N=o(P),B=a(21),R=(o(B),a(231)),T=o(R),S=a(32),F=o(S),q=a(17),U=n(q),O=a(200),j=o(O),L=a(20),z=o(L),M=a(22),V=a(202),W=o(V),H=a(69),G=o(H),Y=a(201),X=o(Y),Z=a(76),Q=o(Z),J=(window.location.origin,function(e){function t(e){i(this,t);var a=s(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.gatherBalanceBuy=function(e,t){var n=a.props.useCoupon?a.getCoupon():null,o=a.state,i=o.useCoupon,s=(o.depositId,o.quantity),l=a.props,r=l.params,u=(r.type,r.productId),p=l.balancePay;!i&&n&&(n.id=""),a.props.clearData(),a.setState({pending:!0,time:0}),p(u,s,e,sessionStorage.getItem("passwordFactor"),n&&n.id||"")},a.gatherCardBuy=function(e,t,n){var o=a.props.useCoupon?a.getCoupon():null,i=a.state.useCoupon;!i&&o&&(o.id=""),a.props.clearData(),a.setState({pending:!0,time:0}),a.props.cardPay(n,Number(z["default"].padMoney(a.getPayTotal())),a.directInvestId,a.state.quantity,e,sessionStorage.getItem("passwordFactor"),o&&o.id||"")},a.changeQuantity=function(e){var t=a.props,n=t.params,o=n.id,i=(n.type,t.quantityDataB),s=i;e<=0?a.refs.tipbar.open("购买份数必须为正整数!"):e>parseFloat(s.data.quantity)&&a.refs.tipbar.open("剩余份数不足!"),e>200&&5==o?(a.refs.tipbar.open("新手标购买金额不能超过一万！"),a.setState({quantity:Number(200)})):a.setState({quantity:Number(e)})},a.voucherIsAvailable=function(e){var t=Number(a.state.quantity*a.state.unitPrice);return e.invest_money<=t},a.voucherIsNotAvailable=function(e){return!a.voucherIsAvailable(e)},a.getCoupon=function(){return a.props.selectedCoupon&&("抵用券"===a.props.selectedCoupon.type&&a.voucherIsAvailable(a.props.selectedCoupon)||"加息券"===a.props.selectedCoupon.type)?a.props.selectedCoupon:a.getMaxCoupon()},a.getPayTotal=function(e){var t=a.getCoupon(),n=a.state.useCoupon;return e?a.state.quantity*a.state.unitPrice:"null"==e?a.state.quantity*a.state.unitPrice:n&&t&&"抵用券"===t.type?a.state.quantity*a.state.unitPrice-Number(t.amount):a.state.quantity*a.state.unitPrice},a.expectIncome=function(){var e=a.props.quantityDataB.data,t=a.state.useCoupon;if(!e&&5!=a.props.params.id)return"";var n=e.rate/100;if(!t)return z["default"].padMoney(a.state.unitPrice*a.state.quantity*e.month*n/12);if(a.props.useCoupon){var o=a.props.selectedCoupon||a.getMaxCoupon();o&&"加息券"===o.type&&+o.rate>=0&&+e.rate>=0&&(n+=+o.rate/100)}return 5!=a.props.params.id?z["default"].padMoney(a.state.unitPrice*a.state.quantity*e.month*n/12):a.props.new_deposit.hasOwnProperty("month")?z["default"].padMoney(a.state.unitPrice*a.state.quantity*a.props.new_deposit.month*a.props.new_deposit.rate/100/12):void 0},a.onValid=function(){var e=a.state.select;1==e?a.refs.isAuth.isSecurityCard(a.successsFn,a.props.push,"/user/setting/tradePasswordSet"):a.refs.isAuth.isbindSecurityCard(a.successsFn,a.props.push,"/user/setting/securityCard")},a.successsFn=function(){var e=a.state.useCoupon&&a.getCoupon()||null,t=a.getCurrentMonth();5==a.props.params.id&&e&&(e.id=""),a.refs.payProcess.open({productId:a.state.depositId,quantity:a.state.quantity,couponId:e&&e.id||"",month:t&&t.month||""})},a.renderDiscountBar=function(){if(a.state.couponsFetching)return E["default"].createElement("div",{className:I["default"].discountBarTouch},E["default"].createElement("p",{className:I["default"].discountBarName},"正在加载优惠券"));if(5==a.props.params.id)return E["default"].createElement("div",{className:I["default"].coupon},E["default"].createElement("span",null,"新手标不能使用优惠券"));var e=a.getCoupon();if(!e||a.state.quantity<1){a.state.vouchers.sort(function(e,t){return Number(t.amount)-Number(e.amount)});return E["default"].createElement("div",{className:I["default"].discountBarTouch,onClick:function(){a.openDy()}},E["default"].createElement("p",{className:I["default"].discountBarName},"暂无优惠可用"))}var t=void 0;""!=a.state.choose?(e=a.getCoupon(),t="抵用券"===e.type?"抵用券抵扣"+(e.amount||"")+"元":"加息券加息"+(e.rate||"")+"%"):t="抵用券"===e.type?"抵用券抵扣"+(e.amount||"")+"元":"加息券加息"+(e.rate||"")+"%";var n=a.state.vouchers.sort(function(e,t){return Number(t.amount)-Number(e.amount)}),o=n.filter(a.voucherIsAvailable),i=n.filter(a.voucherIsNotAvailable).map(function(e){return(0,y["default"])({},e,{status:"unavailable"})});n=o.concat(i);var s=(a.state.interestRates.sort(function(e,t){return Number(t.rate)-Number(e.rate)}),a.state.useCoupon&&a.props.useCoupon?E["default"].createElement("div",null,E["default"].createElement("div",null,t)):null);return E["default"].createElement("div",{className:I["default"].coupon,onClick:function(){a.openDy()}},E["default"].createElement("span",null,"使用优惠"),s)},a.openDy=function(){var e=a.getPayTotal(!0);a.setState({top:"0px",money:e})},a.changePending=function(){a.setState({pending:!1})},a.getCurrentMonth=function(){var e=a.props,t=e.deposit,n=e.params,o=n.type,i=n.id,s=e.newDeposit,l=a.state.depositId;if("A"==o)return 5==i?s:t[l];var r=JSON.parse(sessionStorage.getItem("bao-depositbs")).list;return r[i]},a.clickFn=function(){a.setState({top:"100%"})},a.useDy=function(e){a.setState({choose:e})},a.nullCoupon=function(){a.setState({top:"100%",useCoupon:!1})},a.useCoupon=function(){a.setState({top:"100%",useCoupon:!0})},a.getChoose=function(e){a.setState({select:e})},a.pop=function(){var e=a.refs.pay.getTime();1!=e?a.props.push(Q["default"].getUrl()):a.props.goBack()},a.closeFn=function(){if(5==a.props.params.id){var e=JSON.parse(sessionStorage.getItem("bao-user"));e.isInvest=1,sessionStorage.setItem("bao-user",(0,m["default"])(e))}a.setState({payTop:"100%",url:""})},a.state={productId:a.props.params.productId,inputValue:1e4,quantity:200,unitPrice:1e3,vouchers:[],interestRates:[],pending:!1,couponsFetching:!0,top:"100%",choose:"",money:"",useCoupon:!0,payTop:"100%",url:"",sy:"",select:1,type:0,time:0},a}return l(t,e),g(t,[{key:"componentWillMount",value:function(){this.props.params.productId}},{key:"componentDidMount",value:function(){window.closeFn=this.closeFn;var e=this.props.params.productId;this.props.gatherData(e),this.props.getMyBankCards(),this.props.userInfo()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.quantityDataB&&"100"==e.quantityDataB.code&&!this.getAvailableCouponsFlag&&(this.getAvailableCouponsFlag=!0,5==e.params.id?this.props.getAvailableCoupons(e.new_deposit.month):this.props.getAvailableCoupons(e.quantityDataB.data.id)),e.quantityDataB&&"100"==e.quantityDataB.code&&e.quantityDataB.quantity<this.state.quantity&&this.setState({quantity:e.quantityDataB.quantity}),!this.hasSetCoupon&&e.couponsData&&e.couponsData.data&&(this.hasSetCoupon=!0,this.setState({vouchers:e.couponsData.data.filter(function(e){return"抵用券"===e.type}),interestRates:e.couponsData.data.filter(function(e){return"加息券"===e.type})}),this.setState({couponsFetching:!1}));var a=e.cardBuyData,n=e.balanceBuyData,o=e.verifyData,i=e.cardVerifyData;if(n&&1==n.status&&this.state.time<=3)if(this.setState({time:this.state.time+1}),o&&1==o.data.status&&"0000"==o.data.additional[0].code){var s=Date.parse(new Date),l=this.state.val;(0,C.push)(s,l)}else this.state.time>=3?o&&1==o.data.status&&"0000"!=o.data.additional[0].code?this.changePending():this.changePending():setTimeout(function(){t.props.payVerify({id:n.msgId})},2e3);if(a&&1==a.status&&this.state.time<=3)if(this.setState({time:this.state.time+1}),i&&1==i.data.status&&"0000"==i.data.additional[0].code){var r=Date.parse(new Date),u=this.state.val;(0,C.push)(r,u)}else this.state.time>=3?i&&1==i.data.status&&"0000"!=i.data.additional[0].code&&this.alert(i.data.additional[0].msg):setTimeout(function(){t.props.cardPayVerify({id:a.msgId})},2e3)}},{key:"componentWillUnmount",value:function(){this.props.clearDataInfo()}},{key:"getMaxCoupon",value:function(){var e=Number(this.state.quantity*this.state.unitPrice),t=void 0,a=void 0,n=void 0;if(this.state.vouchers.length>0){var o=this.state.vouchers.filter(this.voucherIsAvailable);t=o[0],o.forEach(function(e){Number(e.amount)>Number(t.amount)&&(t=e)})}if(this.state.interestRates.length>0&&(a=this.state.interestRates[0],this.state.interestRates.forEach(function(e){Number(e.rate)>Number(a.rate)&&(a=e)})),t&&a){var i=e*Number(a.rate)/100;n=i>Number(t.amount)?a:t}else t?n=t:a&&(n=a);return n}},{key:"canPay",value:function(){var e=this.props.params,t=(e.type,e.id,this.state.quantity),a=this.props.quantityDataB;return(!a||0==a.data.buy_status)&&!!(t&&t<=(a&&a.data.quantity||0))}},{key:"render",value:function(){var e=this,t=this.props,a=t.params,n=(a.id,a.type),o=(t.deposit,t.new_deposit,t.quantityDataB),i=(this.state.type,void 0),s=void 0;o&&100==o.code&&(i=o.data.quantity,s=this.expectIncome());var l={};return this.props.banks&&this.props.banks.data&&(l=this.props.banks.data),E["default"].createElement("div",{className:I["default"].root},E["default"].createElement("div",{className:I["default"].bg},E["default"].createElement(D["default"],{onLeft:function(){e.pop()},style:{position:"absolute",left:"0px",top:"0px"}},"购买支付"),E["default"].createElement("p",{className:I["default"].title},"购买产品：聚点+ ",o&&o.data.month,"个月 年化利率（",o&&o.data.rate||"","%）"),E["default"].createElement("div",{className:I["default"].status},E["default"].createElement("div",null,E["default"].createElement("p",null,"单价",E["default"].createElement("span",null,"（元 / 份）")),E["default"].createElement("p",null,this.state.unitPrice,".00")),E["default"].createElement("div",null,E["default"].createElement("p",null,"份数",E["default"].createElement("span",null,"（剩余",i,"份）")),E["default"].createElement("div",{className:I["default"].form},E["default"].createElement("div",{className:I["default"].inputWrapper},E["default"].createElement(T["default"],{value:this.state.quantity,onChange:this.changeQuantity,id:this.props.params.id}))))),E["default"].createElement("div",{className:I["default"].expectIncome},E["default"].createElement("div",{className:I["default"].wrap},E["default"].createElement("p",{className:I["default"].name},"预期收益（元）"),E["default"].createElement("p",{className:I["default"].profit},s))),E["default"].createElement("div",{className:I["default"].discountBar},this.renderDiscountBar()),E["default"].createElement("div",{className:I["default"].amount},E["default"].createElement("span",null,"还需支付（元）"),E["default"].createElement("span",null,z["default"].padMoney(this.getPayTotal()))),void 0!=l.length?E["default"].createElement(j["default"],{ref:"payProcess",type:"deposit"+n,go:this.props.push,getChoose:this.getChoose,user:this.props.user,banks:l,balance:+this.props.user.balance,onRequestBalancePay:this.gatherBalanceBuy,onRequestCardPay:this.gatherCardBuy,balancePayData:this.props.balanceBuyData,cardPayData:this.props.cardBuyData,verifyData:this.props.verifyData,cardVerifyData:this.props.cardVerifyData,inputValue:Number(z["default"].padMoney(this.getPayTotal())),balancePayPending:this.state.pending,changePending:this.changePending,clear:function(){e.props.clearData()},money:z["default"].padMoney(this.getPayTotal()),time:this.state.time}):"",E["default"].createElement("p",null,E["default"].createElement(M.Link,{to:"/agreement",className:I["default"].protocol},"《投资咨询及管理服务协议》及相关融资文件")),E["default"].createElement(N["default"],{containerStyle:{margin:"40px 15px 0"},text:"确认支付",disable:!(this.canPay()>0),onClick:this.onValid,status:this.canPay()>0?"":"disable"}),E["default"].createElement(F["default"],{ref:"tipbar"}),E["default"].createElement(G["default"],{ref:"isAuth"})),E["default"].createElement("div",{className:I["default"].zg,style:{top:this.state.top}},E["default"].createElement(W["default"],{click:this.clickFn,useFn:this.useDy,money:this.state.money,nullCoupon:this.nullCoupon,useCoupon:this.useCoupon})),E["default"].createElement("div",{className:I["default"].zg,style:{top:this.state.payTop}},E["default"].createElement(X["default"],{url:this.state.url,closeFn:this.closeFn,ref:"pay"})))}}]),t}(E["default"].Component)),K=function(e,t){var a=e.infodata.getIn([U.USER_INFO,"data"]),n=a&&a.data?a.data:{},o=e.infodata.getIn([U.DEPOSIT_DETAIL,"pending"]),i=e.infodata.getIn([U.GATHER_DETAIL,"data"]),s=e.infodata.getIn([U.GATHER_DETAIL,"pending"]);return{deposit:e.infodata.getIn([q.RATE,"data"])&&e.infodata.getIn([q.RATE,"data"]).data.deposit||[],newDeposit:e.infodata.getIn([q.RATE,"data"])&&e.infodata.getIn([q.RATE,"data"]).data.new_deposit||[],user:n,quantityLeftFetching:o,quantityDataB:i,quantityDataBLeftFetching:s,banks:e.infodata.getIn(["GET_MY_CARD_LIST","data"]),couponsFetching:e.infodata.getIn([U.AVAILABLE_COUPONS,"pending"]),couponsData:e.infodata.getIn([U.AVAILABLE_COUPONS,"data"]),rates:e.infodata.getIn([q.RATE,"data"]),balanceBuyData:e.infodata.getIn([U.GATHER_BALANCE_BUY,"data"]),cardBuyData:e.infodata.getIn([U.GATHER_CARD_BUY,"data"]),verifyData:e.infodata.getIn([U.GATHER_PAY_VERIFY,"data"]),cardVerifyData:e.infodata.getIn([U.GATHER_CARD_VERIFY,"data"]),selectedCoupon:e.useCoupons.getIn(["coupons","selectedCoupon"]),useCoupon:e.useCoupons.getIn(["coupons","useCoupon"]),new_deposit:e.infodata.getIn([q.RATE,"data"])&&e.infodata.getIn([q.RATE,"data"]).data.new_deposit||{}}},$=function(e,t){return{push:function(t){e((0,C.push)(t))},userInfo:function(){e({type:U.USER_INFO})},goBack:function(){e((0,C.goBack)())},getDepositDetail:function(t){e({type:U.DEPOSIT_DETAIL,params:[t]})},getAvailableCoupons:function(t){e({type:U.AVAILABLE_COUPONS,params:["定存",t]})},balancePay:function(t,a,n,o,i){e({type:U.GATHER_BALANCE_BUY,params:[{productId:t,num:a,password:n,passwordFactor:o,couponId:i,type:"POINT"}]})},cardPay:function(t,a,n,o,i,s,l){e({type:U.GATHER_CARD_BUY,params:[{bankCard:t,transferAmount:a,productId:n,num:o,password:i,passwordFactor:s,couponId:l,type:"POINT"}]})},payVerify:function(t){e({type:"GATHER_PAY_VERIFY",params:[t]})},cardPayVerify:function(t){e({type:"GATHER_CARD_VERIFY",params:[t]})},setUseCoupons:function(t){e({type:U.SET_USE_COUPONS,selectedCoupon:t})},clearData:function(t){e({type:"CLEAR_INFO_DATA",key:"GATHER_BALANCE_BUY"}),e({type:"CLEAR_INFO_DATA",key:"GATHER_CARD_BUY"}),e({type:"CLEAR_INFO_DATA",key:"GATHER_PAY_VERIFY"}),e({type:"CLEAR_INFO_DATA",key:"GATHER_CARD_VERIFY"})},gatherData:function(t){e({type:"GATHER_DETAIL",params:[t]})},depositbsBuyResult:function(t){e({type:"DEPOSITBS_BUYRESULT",params:[t]})},clearDataInfo:function(){e({type:"CLEAR_INFO_DATA",key:"AVAILABLE_COUPONS"}),e({type:"CLEAR_CONPONS"})},getMyBankCards:function(){e({type:"GET_MY_CARD_LIST"})}}};t["default"]=(0,k.connect)(K,$)(J)},1570:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".root___13lWx{height:100%;background-color:#f0eff5;padding-top:44px}.bg___1FeOO{overflow:auto}.bg___1FeOO,.zg___3tTia{position:absolute;left:0;top:0;width:100%;height:100%}.zg___3tTia{background-color:red;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;z-index:9999}.title___3voCM{font-size:14px;color:#888;height:30px;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;padding-left:15px;margin-top:44px}.status___1PP8w,.title___3voCM{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.status___1PP8w{background-color:#fcfcfc;height:100px;padding:0 15px}.status___1PP8w>div{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}.status___1PP8w>div p:nth-child(1){font-size:14px;color:#888}.status___1PP8w>div p:nth-child(1) span{font-size:10px}.status___1PP8w>div p:nth-child(2){margin-top:20px;font-size:18px}.expectIncome___iwMgq{background-color:#fff;padding:0 0 0 15px;height:44px}.expectIncome___iwMgq .wrap___1yilj{border-top:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.expectIncome___iwMgq .name___1kqv7{color:#888;line-height:44px}.expectIncome___iwMgq .profit___3C5WC{color:#ff7701;line-height:44px;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.form___3CrtQ{background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}.form___3CrtQ>p{font-size:14px}.form___3CrtQ>p span{font-size:10px}.inputWrapper___2cL5c{margin-top:12px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;height:38px}.inputWrapper___2cL5c>button{width:38px;border:1px solid #e5e5e5;color:#a2a2a2;font-size:35px;font-weight:100;background-color:#fff}.inputWrapper___2cL5c>div{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;margin:0 3px}.inputWrapper___2cL5c>div,.inputWrapper___2cL5c>div>input{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.inputWrapper___2cL5c>div>input{border:1px solid #00a6e2;text-align:center;vertical-align:middle;font-size:18px;color:#000}.coupon___20AEH{background-color:#fcfcfc;height:44px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.coupon___20AEH>span{font-size:16px}.coupon___20AEH>div,.coupon___20AEH>div div{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.coupon___20AEH>div div{position:relative;height:25px;background-color:#75cda1;padding:0 12px;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#fff}.coupon___20AEH>div div:after,.coupon___20AEH>div div:before{content:'';height:30px;width:35px;position:absolute;background-color:#fcfcfc;border-radius:100%}.coupon___20AEH>div div:before{top:-3px;left:-30px}.coupon___20AEH>div div:after{top:-3px;right:-30px}.coupon___20AEH>div:after{content:'';width:9px;height:16px;background:url("+a(39)+") 50% no-repeat;background-size:contain;margin-left:7px;z-index:2}.amount____IuF_{height:70px;padding:0 15px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #ddd;border-top:1px solid #ddd;margin-bottom:20px}.amount____IuF_ span:nth-child(1){color:#888}.amount____IuF_ span:nth-child(2){font-size:25px;color:#ff7701}.pay___39vFv{margin-top:20px;height:45px;border-top:1px solid #ddd;border-bottom:1px solid #ddd;background-color:#fff;padding:0 15px;font-size:16px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pay___39vFv:after{content:'';width:9px;height:16px;background:url("+a(39)+") 50% no-repeat;background-size:contain}.protocol___Zl1AY{display:inline-block;color:#888;margin:10px 15px 0}.next___2Fpn6{margin:40px 15px;height:42px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.next___2Fpn6 button{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;border:0;background-color:#00a6e2;border-radius:5px;-webkit-transition:all .3s;transition:all .3s}.next___2Fpn6 button:disabled{background-color:#0ebfff;color:hsla(0,0%,100%,.5)}.discountBar___1ESyy{background-color:#fcfcfc;padding-left:15px;padding-right:15px;margin-top:20px}.discountBarTouch___2iChu{height:44px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.discountBarName___2r5At{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px;color:#888}",""]),t.locals={root:"root___13lWx",bg:"bg___1FeOO",zg:"zg___3tTia",title:"title___3voCM",status:"status___1PP8w",expectIncome:"expectIncome___iwMgq",wrap:"wrap___1yilj",name:"name___1kqv7",profit:"profit___3C5WC",form:"form___3CrtQ",inputWrapper:"inputWrapper___2cL5c",coupon:"coupon___20AEH",amount:"amount____IuF_",pay:"pay___39vFv",protocol:"protocol___Zl1AY",next:"next___2Fpn6",discountBar:"discountBar___1ESyy",discountBarTouch:"discountBarTouch___2iChu",discountBarName:"discountBarName___2r5At"}},2128:[2219,1570]});