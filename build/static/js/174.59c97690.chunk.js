webpackJsonp([174],{27:function(e,t,a){e.exports=a.p+"static/media/arrow2.4ba5831c.png"},464:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,'*{padding:0;margin:0}.bg___33ZAK{background:#f1eff5;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;z-index:1;padding-top:44px}.addressBar___1-3t8{background-color:#fff;padding:15px;position:relative;border-bottom:1px solid #efefef}.addressNews___2kP2X{font-size:16px;color:#000;padding-right:20px}.commodityInfo___r9miM{margin-top:15px;padding-left:15px;background-color:#fff}.infoOne___3CXgI{padding:15px 15px 15px 0;border-bottom:1px solid #efefef;position:relative}.infoOne___3CXgI span{display:inline-block;font-size:16px}.infoOne___3CXgI span:first-child{text-align:left;color:#888;position:absolute;left:0;top:15px}.commodityInfo___r9miM .infoOne___3CXgI:last-child{border-bottom:0}.commodityInfo___r9miM .infoOne___3CXgI .fontColor___18GGp{font-size:16px;color:#f70}.clearfix___3Tpzg:after{content:".";display:block;height:0;clear:both;visibility:hidden}.infoOne___3CXgI span:nth-child(2){float:right;color:#000;margin-left:80px}.addressNews___2kP2X span{display:inline-block}.mgLeft___6vuhq{margin-left:8px}.mgTop___2R322{margin-top:10px}.jtIcon___PXrKQ{width:10px;height:20px;position:absolute;right:15px;top:50%;margin-top:-10px}.button___1iW4s{width:calc(100% - 30px);margin:50px auto;text-align:center;background-color:#44a4e1;padding:10px 0;color:#fff;border-radius:5px;display:block;border:0;outline:none}.button___1iW4s img{display:inline-block;width:20px;vertical-align:middle;margin-right:8px;margin-top:-6px}',""]),t.locals={bg:"bg___33ZAK",addressBar:"addressBar___1-3t8",addressNews:"addressNews___2kP2X",commodityInfo:"commodityInfo___r9miM",infoOne:"infoOne___3CXgI",fontColor:"fontColor___18GGp",clearfix:"clearfix___3Tpzg",mgLeft:"mgLeft___6vuhq",mgTop:"mgTop___2R322",jtIcon:"jtIcon___PXrKQ",button:"button___1iW4s"}},549:function(e,t,a){var n=a(464);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},1057:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),i=n(s),d=a(5),f=n(d),u=a(3),c=n(u),p=a(56),_=n(p),m=a(4),g=n(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),v=a(12),E=n(v),I=a(11),y=a(10),k=a(8),N=n(k),C=a(27),D=n(C),w=a(549),T=n(w),O=a(22),A=n(O),S=a(26),X=n(S),L=a(491),M=n(L),P=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.dataInspect=function(){var e=sessionStorage.getItem("bao-product"),t=a.props.params.id;return!(!e||JSON.parse(e).id!=t)},a.setData=function(){var e=a.props.infoData.data;sessionStorage.setItem("bao-product",(0,_["default"])(e))},a.loadDom=function(){return x["default"].createElement(A["default"],null)},a.loadEndDom=function(){var e=a.props,t=e.address.data,n=e.infoData,o=a.state.flag,r=n&&n.data||JSON.parse(sessionStorage.getItem("bao-product")),l=void 0;return 22!=r.tagId&&(l=a.nullAddress(),0!=t.length&&(l=a.hasAddress())),x["default"].createElement("div",null,l,x["default"].createElement("div",{className:T["default"].commodityInfo},x["default"].createElement("div",{className:(0,N["default"])(T["default"].clearfix,T["default"].infoOne)},x["default"].createElement("span",null,"商品详情"),x["default"].createElement("span",null,r.name)),x["default"].createElement("div",{className:(0,N["default"])(T["default"].clearfix,T["default"].infoOne)},x["default"].createElement("span",null,"点币"),x["default"].createElement("span",{className:T["default"].fontColor},r.price))),x["default"].createElement("button",{className:T["default"].button,onClick:a.submit,disabled:o},!o&&"确认兑换"||x["default"].createElement("span",null,x["default"].createElement("img",{src:M["default"]}),"兑换中")),x["default"].createElement(X["default"],{ref:"alert"}))},a.submit=function(){var e=a.props,t=e.address.data,n=e.infoData,o=e.push,r=n&&n.data||JSON.parse(sessionStorage.getItem("bao-product"));r.count<=0?a.refs.alert.show({content:"对不起你兑换的物品数量不足!",okText:"确定"}):22!=r.tagId&&0==t.length?a.refs.alert.show({content:"请添加收货地址!",okText:"去添加",cancel:"取消",okCallback:function(){o("/user/setting/siteAdd")}}):(a.setState({flag:!0}),22==r.tagId?a.props.send(r.id):a.props.send(r.id,t[0].id))},a.hasAddress=function(){var e=a.props,t=e.address.data,n=e.push;return x["default"].createElement("div",{className:T["default"].addressBar,onClick:function(){n("/user/setting/siteList")}},x["default"].createElement("div",{className:T["default"].addressNews},x["default"].createElement("p",null,x["default"].createElement("span",null,t[0].consignee),x["default"].createElement("span",{className:T["default"].mgLeft},t[0].phone)),x["default"].createElement("p",{className:T["default"].mgTop},t[0].address)),x["default"].createElement("img",{src:D["default"],className:T["default"].jtIcon}))},a.nullAddress=function(){var e=a.props.push;return x["default"].createElement("div",{className:T["default"].addressBar,onClick:function(){e("/user/setting/siteAdd")}},x["default"].createElement("div",{className:T["default"].addressNews},x["default"].createElement("p",null,"添加收货地址")),x["default"].createElement("img",{src:D["default"],className:T["default"].jtIcon}))},a.state={flag:!1,init:!1},a}return l(t,e),h(t,[{key:"componentWillMount",value:function(){var e=(this.props.address,this.dataInspect());if(!e){var t=this.props.params.id;this.props.getInfo(t)}this.props.getAddress()}},{key:"componentWillReceiveProps",value:function(e){var t=e.submiteData;t&&!function(){var t=e.submiteData,a=t.code,n=t.data,o=e.push;300==a?o("/user/exchangeFail"):100==a&&(sessionStorage.setItem("bao-coin",(0,_["default"])(n.coin)),setTimeout(function(){o("/user/exchangeSuccess")},500))}()}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.dataInspect(),t=this.props,a=t.pop,n=t.infoData,o=t.address,r=this.loadDom();return n&&this.setData(),o&&(e||n)&&(r=this.loadEndDom()),x["default"].createElement("div",null,x["default"].createElement(E["default"],{onLeft:a},"确认兑换"),x["default"].createElement("div",{className:T["default"].bg},r))}}]),t}(x["default"].Component),R=function(e){return{address:e.infodata.getIn(["SITE_LIST","data"]),infoData:e.infodata.getIn(["COMMODITY_DETAILS","data"]),submiteData:e.infodata.getIn(["PRODUCT_EXCHANGE","data"])}},j=function(e){return{pop:function(){e((0,y.goBack)())},push:function(t){e((0,y.push)(t))},getInfo:function(t){e({type:"COMMODITY_DETAILS",params:[t]})},getAddress:function(){e({type:"SITE_LIST"})},send:function(t,a){e({type:"PRODUCT_EXCHANGE",params:[t,a]})},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"PRODUCT_EXCHANGE"})}}};t["default"]=(0,I.connect)(R,j)(P)}});