webpackJsonp([30],{874:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=o(2),c=a(r),d=o(5),_=a(d),u=o(3),s=a(u),p=o(60),f=a(p),m=o(4),g=a(m),h=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,c["default"])(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),x=o(1),y=a(x),v=o(11),b=a(v),E=(o(22),o(1931)),D=a(E),I=o(9),S=o(10),N=o(19),z=a(N),k=o(20),T=(a(k),o(23)),M=a(T),j=function(e){function t(e){i(this,t);var o=n(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return o.remove=function(){sessionStorage.removeItem("bao-product"),o.props.clearData()},o.dataInspect=function(){var e=sessionStorage.getItem("bao-product"),t=o.props.params.id;return!(!e||JSON.parse(e).id!=t)},o.setData=function(){var e=o.props.infoData.data;sessionStorage.setItem("bao-product",(0,f["default"])(e))},o.loadDom=function(){return y["default"].createElement(z["default"],null)},o.vaold=function(){var e=o.props.infoData,t=e&&e.data||JSON.parse(sessionStorage.getItem("bao-product")),a=t.id,i=t.count;0==i?o.refs.alert.show({content:"对不起你兑换的物品数量不足!",okText:"确定"}):o.props.push("/user/trueExchangeConfirm/"+a)},o.loadEndDom=function(){var e=o.props.infoData,t=e&&e.data||JSON.parse(sessionStorage.getItem("bao-product")),a=t.cover,i=t.name,n=t.count,l=t.price,r=t.value,c=t.description;return y["default"].createElement("div",null,y["default"].createElement(b["default"],{backgroundColor:"#F76260",onLeft:o.props.pop},i),y["default"].createElement("div",{className:D["default"].commodity},y["default"].createElement("div",{className:D["default"].productImg},y["default"].createElement("img",{src:a})),y["default"].createElement("div",{className:D["default"].commodityMs},y["default"].createElement("p",{className:D["default"].priceBox},y["default"].createElement("span",{className:D["default"].price},l),y["default"].createElement("span",null,"点币"),y["default"].createElement("span",null,o.state.dj)),y["default"].createElement("p",{className:D["default"].originalPrice},y["default"].createElement("span",{className:D["default"].originalLeft},y["default"].createElement("span",null,"价格"),y["default"].createElement("span",null,r)),y["default"].createElement("span",{className:D["default"].originalRight},y["default"].createElement("span",null,"剩余数量:"),y["default"].createElement("span",null,n))))),y["default"].createElement("div",{className:D["default"].commodityDetails},y["default"].createElement("div",{className:D["default"].commodityTitle},"商品详情"),y["default"].createElement("div",{className:D["default"].productDetails},y["default"].createElement("div",{dangerouslySetInnerHTML:{__html:c}}))),y["default"].createElement("div",{className:D["default"].buyBottom,onClick:o.vaold},"立即兑换"))},o.state={flag:!1,dj:JSON.parse(sessionStorage.getItem("bao-user")).grade},o}return l(t,e),h(t,[{key:"componentWillMount",value:function(){this.remove();var e=this.dataInspect();if(!e){var t=this.props.params.id;this.props.getInfo(t)}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.infoData,t=this.dataInspect(),o=this.loadDom();return e&&(o=this.loadEndDom(),this.setData()),t&&(o=this.loadEndDom()),y["default"].createElement("div",{className:D["default"].bg},o,y["default"].createElement(M["default"],{ref:"alert"}))}}]),t}(y["default"].Component),w=function(e){return{infoData:e.infodata.getIn(["COMMODITY_DETAILS","data"])}},O=function(e){return{pop:function(){e((0,S.goBack)())},getInfo:function(t){e({type:"COMMODITY_DETAILS",params:[t]})},push:function(t){e((0,S.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"COMMODITY_DETAILS"})}}};t["default"]=(0,I.connect)(w,O)(j)},961:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(874),n=a(i);t["default"]=n["default"]},1266:function(e,t,o){t=e.exports=o(7)(),t.push([e.id,".bg___2Bjl9{background:#f6f6f9;position:absolute;left:0;top:0;overflow:auto;width:100%;height:100vh;padding-top:44px}.productImg___3ESHh img{vertical-align:bottom;width:100%}.commodity___1x8z_ .commodityMs___3QOTT{padding:20px 15px;background-color:#fff}.commodity___1x8z_ .price___2CYx8{font-size:26px;color:#f76260}.commodity___1x8z_ .priceBox___1YIe6{font-size:14px;color:#000}.commodity___1x8z_ .priceBox___1YIe6 span{vertical-align:middle}.commodity___1x8z_ .priceBox___1YIe6 span:nth-child(2){margin-left:6px;margin-top:7px;display:inline-block}.commodity___1x8z_ .priceBox___1YIe6 span:nth-child(3){font-size:9px;color:#f76260;padding:3px 4px;border:1px solid #f76260;margin-left:6px;border-radius:3px;margin-top:2px;display:inline-block}.commodity___1x8z_ .originalPrice___1SW-j{padding-top:15px}.commodity___1x8z_ .originalPrice___1SW-j .originalLeft___13Y4A span:first-child{font-size:14px;color:#000}.commodity___1x8z_ .originalPrice___1SW-j .originalLeft___13Y4A span:nth-child(2){margin-left:6px;font-size:14px;color:#888;position:relative;display:inline-block}.commodity___1x8z_ .originalPrice___1SW-j .originalRight___1ajRv{display:inline-block;float:right;font-size:14px;color:#888;line-height:20px}.commodity___1x8z_ .originalPrice___1SW-j .originalRight___1ajRv span:nth-child(2){margin-left:6px}.productDetails___2IDxN img{vertical-align:bottom;width:100%}.buyBottom___2N3Il{background-color:#f76260;height:50px;line-height:50px;text-align:center;font-size:18px;color:#fff;position:fixed;left:0;bottom:0;width:100%}.commodityDetails___1re3A{margin-top:10px;background-color:#fff;margin-bottom:50px}.commodityDetails___1re3A .commodityTitle___2-JEo{padding:15px;font-size:14px;color:#000}",""]),t.locals={bg:"bg___2Bjl9",productImg:"productImg___3ESHh",commodity:"commodity___1x8z_",commodityMs:"commodityMs___3QOTT",price:"price___2CYx8",priceBox:"priceBox___1YIe6",originalPrice:"originalPrice___1SW-j",originalLeft:"originalLeft___13Y4A",originalRight:"originalRight___1ajRv",productDetails:"productDetails___2IDxN",buyBottom:"buyBottom___2N3Il",commodityDetails:"commodityDetails___1re3A",commodityTitle:"commodityTitle___2-JEo"}},1931:[2078,1266]});