webpackJsonp([176],{27:function(e,t,a){e.exports=a.p+"static/media/arrow2.4ba5831c.png"},467:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'*{padding:0;margin:0}.bg___24OTz{background:#f1eff5;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;z-index:1;padding-top:44px}.addressBar___2_xt7{background-color:#fff;padding:15px;position:relative;border-bottom:1px solid #efefef}.addressNews___33zeJ{font-size:16px;color:#000;padding-right:20px}.commodityInfo___cYTla{margin-top:15px;padding-left:15px;background-color:#fff}.infoOne___3LJqY{padding:15px 15px 15px 0;border-bottom:1px solid #efefef;position:relative}.infoOne___3LJqY span{display:inline-block;font-size:16px}.infoOne___3LJqY span:first-child{text-align:left;color:#888;position:absolute;left:0;top:15px}.commodityInfo___cYTla .infoOne___3LJqY:last-child{border-bottom:0}.commodityInfo___cYTla .infoOne___3LJqY .fontColor___ZbLg1{font-size:16px;color:#f70}.clearfix___1JR9R:after{content:".";display:block;height:0;clear:both;visibility:hidden}.infoOne___3LJqY span:nth-child(2){float:right;color:#000;margin-left:80px}.addressNews___33zeJ span{display:inline-block}.mgLeft___1u7A7{margin-left:8px}.mgTop___FxyHA{margin-top:10px}.jtIcon___oBgSN{width:10px;height:20px;position:absolute;right:15px;top:50%;margin-top:-10px}.button___1xjPi{width:calc(100% - 30px);margin:50px auto;text-align:center;background-color:#44a4e1;padding:10px 0;color:#fff;border-radius:5px;display:block;border:0;outline:none}.button___1xjPi img{display:inline-block;width:20px;vertical-align:middle;margin-right:8px;margin-top:-6px}',""]),t.locals={bg:"bg___24OTz",addressBar:"addressBar___2_xt7",addressNews:"addressNews___33zeJ",commodityInfo:"commodityInfo___cYTla",infoOne:"infoOne___3LJqY",fontColor:"fontColor___ZbLg1",clearfix:"clearfix___1JR9R",mgLeft:"mgLeft___1u7A7",mgTop:"mgTop___FxyHA",jtIcon:"jtIcon___oBgSN",button:"button___1xjPi"}},554:function(e,t,a){var n=a(467);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},1049:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),d=n(i),s=a(5),u=n(s),f=a(3),c=n(f),p=a(4),_=n(p),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),b=n(g),h=a(12),x=n(h),E=a(11),y=a(10),v=a(8),I=n(v),N=a(27),k=n(N),w=a(554),A=n(w),T=a(22),L=n(T),C=a(26),O=n(C),J=a(497),Y=n(J),j=function(e){function t(e){o(this,t);var a=l(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return a.loadDom=function(){return b["default"].createElement(L["default"],null)},a.loadEndDom=function(){var e=a.props,t=e.address.data,n=e.location.query,o=a.state.flag,l=a.nullAddress();return 0!=t.length&&(l=a.hasAddress()),b["default"].createElement("div",null,l,b["default"].createElement("div",{className:A["default"].commodityInfo},b["default"].createElement("div",{className:(0,I["default"])(A["default"].clearfix,A["default"].infoOne)},b["default"].createElement("span",null,"商品详情"),b["default"].createElement("span",null,n.name)),b["default"].createElement("div",{className:(0,I["default"])(A["default"].clearfix,A["default"].infoOne)},b["default"].createElement("span",null,n.moneyName),b["default"].createElement("span",null,n.money))),b["default"].createElement("button",{className:A["default"].button,onClick:a.submit,disabled:o},!o&&"确认兑换"||b["default"].createElement("span",null,b["default"].createElement("img",{src:Y["default"]}),"兑换中")),b["default"].createElement(O["default"],{ref:"alert"}))},a.submit=function(){var e=a.props,t=e.address.data,n=e.location.query,o=n.id,l=n.activityId,r=e.push;0==t.length?a.refs.alert.show({content:"请添加收货地址!",okText:"去添加",cancel:"取消",okCallback:function(){r("/user/setting/siteAdd")}}):(a.setState({flag:!0}),a.props.send(l,o,t[0].id))},a.hasAddress=function(){var e=a.props,t=e.address.data,n=e.push;return b["default"].createElement("div",{className:A["default"].addressBar,onClick:function(){n("/user/setting/siteList")}},b["default"].createElement("div",{className:A["default"].addressNews},b["default"].createElement("p",null,b["default"].createElement("span",null,t[0].consignee),b["default"].createElement("span",{className:A["default"].mgLeft},t[0].phone)),b["default"].createElement("p",{className:A["default"].mgTop},t[0].address)),b["default"].createElement("img",{src:k["default"],className:A["default"].jtIcon}))},a.nullAddress=function(){var e=a.props.push;return b["default"].createElement("div",{className:A["default"].addressBar,onClick:function(){e("/user/setting/siteAdd")}},b["default"].createElement("div",{className:A["default"].addressNews},b["default"].createElement("p",null,"添加收货地址")),b["default"].createElement("img",{src:k["default"],className:A["default"].jtIcon}))},a.state={flag:!1,init:!1},a}return r(t,e),m(t,[{key:"componentWillMount",value:function(){this.props.getAddress()}},{key:"componentWillReceiveProps",value:function(e){var t=e.submiteData,a=e.location.search,n=e.address,o=e.push;if(t){var l=e.submiteData.code;o(100==l?"/user/exchangeSuccess"+a:"/user/exchangeFail"+a)}n&&(100!=n.code?o("/login"):sessionStorage.setItem("bao-auth",!0))}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.address,n=this.loadDom();return a&&100==a.code&&(n=this.loadEndDom()),b["default"].createElement("div",null,b["default"].createElement(x["default"],{onLeft:t},"确认兑换"),b["default"].createElement("div",{className:A["default"].bg},n))}}]),t}(b["default"].Component),D=function(e){return{address:e.infodata.getIn(["SITE_LIST","data"]),submiteData:e.infodata.getIn(["ACTIVE_EXCHANGE","data"])}},S=function(e){return{pop:function(){e((0,y.goBack)())},push:function(t){e((0,y.push)(t))},getAddress:function(){e({type:"SITE_LIST"})},send:function(t,a,n){e({type:"ACTIVE_EXCHANGE",params:[{activityId:t,productId:a,addressId:n}]})},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"ACTIVE_EXCHANGE"})}}};t["default"]=(0,E.connect)(D,S)(j)}});