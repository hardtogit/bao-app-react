webpackJsonp([158],{37:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,_["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(p["default"]?(0,p["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(2),d=o(r),u=a(5),p=o(u),c=a(3),_=o(c),s=a(4),f=o(s),m=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,d["default"])(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),g=a(1),h=o(g),x=a(41),b=o(x),v=function(t){function e(){return n(this,e),i(this,(e.__proto__||(0,f["default"])(e)).apply(this,arguments))}return l(e,t),m(e,[{key:"render",value:function(){var t=this.props.id;return h["default"].createElement("div",{className:b["default"].box+" "+this.props.className,id:t},this.props.children)}}]),e}(h["default"].Component);e["default"]=v},40:function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".box___2KEmr{position:absolute;top:45px;right:0;bottom:0;left:0;height:auto;overflow-y:scroll;margin-top:-1px;padding:0;margin-bottom:-1px;width:auto;-webkit-overflow-scrolling:touch}.box___2KEmr::-webkit-scrollbar{display:none}",""]),e.locals={box:"box___2KEmr"}},41:[2366,40],1094:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,_["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(p["default"]?(0,p["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(2),d=o(r),u=a(5),p=o(u),c=a(3),_=o(c),s=a(4),f=o(s),m=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,d["default"])(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),g=a(1),h=o(g),x=a(10),b=a(11),v=a(12),E=o(v),y=a(37),w=o(y),D=a(27),T=o(D),k=a(74),A=o(k),I=a(21),N=a(2224),C=o(N),K=function(t){function e(t){n(this,e);var a=i(this,(e.__proto__||(0,f["default"])(e)).call(this,t));return a.confirmBtn=function(){var t=a.props.params,e=t.product_id,o=t.num,n=a.props,i=n.address;n.cashData;a.setState({flag:!1});var l=void 0;i.length>0&&(l=i[0].id);var r=sessionStorage.getItem("propertyStr");r=r.substring(0,r.length-2),i&&0==i.length?a.refs.alert.show({content:"请选择地址!",okText:"确定"}):a.props.cashProduct(e,l,o,r)},a.nullAddress=function(){return h["default"].createElement("div",{className:C["default"].nullDom},h["default"].createElement(I.Link,{to:"/find/addAddress"},h["default"].createElement("div",{className:C["default"].addAddress},"+添加地址")))},a.hasAddress=function(){var t=a.props.address,e=[];return t&&t.map(function(t,a){0==a&&e.push(h["default"].createElement("div",{className:C["default"].item,key:a},h["default"].createElement("p",{className:C["default"].name},t.consignee,h["default"].createElement("span",{className:C["default"].phone},t.phone)),h["default"].createElement("p",{className:C["default"].site},t.address),h["default"].createElement("div",{className:C["default"].eidt_bg},h["default"].createElement("div",{className:C["default"].delDiv},h["default"].createElement(I.Link,{to:"/find/address",style:{width:"50%"}},h["default"].createElement("span",{className:C["default"].editTxt},"更多地址>")))),h["default"].createElement("div",{className:C["default"].bottomBg})))}),h["default"].createElement("div",null,e)},a.produceDom=function(t){var e=t.image,o=(t.product_id,t.product_name),n=(t.product_info,t.price,t.alone_price),i=(t.stock,t.cash_limit_time,t.cash_limit_num,t.label_name,t.product_property),l=(t.down_time,t.server_time,a.props.params.num),r=sessionStorage.getItem("propertyStr"),d=r.split("||"),u=[];return d.map(function(t,e){if(e<d.length-1){var a=t.split("|");u.push(a[1])}}),h["default"].createElement("div",null,h["default"].createElement("div",{className:C["default"].productInfo},h["default"].createElement("div",{className:C["default"].productImg},h["default"].createElement("img",{src:e})),h["default"].createElement("div",{className:C["default"].productDetail},h["default"].createElement("div",null,h["default"].createElement("p",{className:C["default"].nameTxt},o),h["default"].createElement("p",null,i&&i.map(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:item,e=t.type_name,a=(t.property_value,t.id,arguments[1]);return h["default"].createElement("p",{className:C["default"].nump,ref:"property"},e,"：",u[a])}))),h["default"].createElement("div",null,h["default"].createElement("p",{className:C["default"].numTxt},"*",l)))),h["default"].createElement("div",{className:C["default"].discount},h["default"].createElement("span",null,"商品合计"),h["default"].createElement("span",null,n,"点币")))},a.state={flag:!0},a}return l(e,t),m(e,[{key:"componentWillMount",value:function(){this.props.clearData("CASH_PRODUCT")}},{key:"componentDidMount",value:function(){var t=this.props.params.product_id;this.props.getAddress(),this.props.productDetail(t),this.props.getVip()}},{key:"componentWillReceiveProps",value:function(t){var e=this,a=this.state.flag,o=t.cashData;o&&300==o.code&&!a&&this.refs.alert.show({content:o.msg,okText:"确定",okCallback:function(){e.setState({flag:!0})}}),o&&100==o.code&&!a&&this.refs.alert.show({content:"兑换成功，请到兑换记录中查看！",okText:"确定",okCallback:function(){e.setState({flag:!0}),e.props.pop()}})}},{key:"render",value:function(){var t=this,e=this.props,a=e.address,o=e.pop,n=e.productData,i=e.VipData,l=(e.cashData,void 0),r=void 0,d=void 0,u=void 0,p=void 0;n&&(r=this.produceDom(n.data));var c=sessionStorage.getItem("isCoupon");return 0==c&&(l=0!=a.length?this.hasAddress():this.nullAddress()),i&&(d=i.data.coin_total,u=i.data.vip_level,p=i.data.discount_num),h["default"].createElement("div",{className:C["default"].bg},h["default"].createElement(E["default"],{onLeft:o,backgroundColor:"#fff",color:"#333"},"产品兑换"),h["default"].createElement(w["default"],null,l,r,h["default"].createElement("div",{className:C["default"].discount},10==p&&"当前等级无优惠"||"会员VIP"+u+"级"+p+"折优惠")),h["default"].createElement("div",{className:C["default"].addBtnDiv},h["default"].createElement("p",{className:C["default"].coinNum},"您的当前可用点币：",d),h["default"].createElement("div",{className:C["default"].addBtn,onClick:function(){t.confirmBtn()}},"确认兑换")),h["default"].createElement(T["default"],{ref:"alert"}),h["default"].createElement(A["default"],{ref:"confirm"}))}}]),e}(h["default"].Component),S=function(t){return t&&100==t.code?t.data:[]},J=function(t){return{address:S(t.infodata.getIn(["GET_ADDRESS_LIST","data"])),productData:t.infodata.getIn(["PRODUCT_DETAIL","data"]),VipData:t.infodata.getIn(["GET_VIP","data"]),cashData:t.infodata.getIn(["CASH_PRODUCT","data"])}},P=function(t){return{getAddress:function(){t({type:"GET_ADDRESS_LIST"})},cashProduct:function(e,a,o,n){t({type:"CASH_PRODUCT",params:[{product_id:e,address_id:a,num:o,product_property:n}]})},productDetail:function(e){t({type:"PRODUCT_DETAIL",params:[e]})},getVip:function(){t({type:"GET_VIP"})},pop:function(){t((0,b.goBack)())},push:function(e){t((0,b.push)(e))},clearData:function(e){t({type:"CLEAR_DATA",key:e})}}};e["default"]=(0,x.connect)(J,P)(K)},1672:function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".bg___2dcqk{background:#f0eff5;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.item___3YLXy{background:#fff;margin-bottom:10px}.name___9cxKE{padding:10px 15px;font-size:16px;color:#000}.phone___3CoJJ{float:right}.site___O-Ly0{line-height:24px;font-size:16px;color:#000;padding:0 15px}.eidt_bg___1bAui{position:relative;box-sizing:border-box;width:100%;height:34px;line-height:49px;padding:0 10px}.eidt_bg___1bAui span{display:inline-block}.eidt_bg___1bAui span.eidt___1QJbb{font-size:14px;color:#666;position:absolute;right:60px}.eidt_bg___1bAui span.del___1U9pK{font-size:14px;color:#666;position:absolute;right:15px}.add___1M2Kc{font-size:16px;color:#000;background:#fff;height:50px;line-height:50px;width:100%;padding-left:15px}.add___1M2Kc img{display:inline-block;width:18px;float:right;margin-right:15px;margin-top:10px}.do_default___1OHKT{font-size:14px;color:#666;position:relative;top:-40px;left:40px}.default___2PeUt{color:#fe684b}.nullDom___2vZN5{width:100%;height:100px;background-color:#fff;position:relative}.addAddress___3fYAe{width:120px;height:40px;border:1px solid #ccc;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;line-height:40px;color:#666}.addBtnDiv___3oaAY{position:absolute;bottom:20px;width:100%}.addBtn___3UC9F{width:80%;margin:0 auto;background-color:#fe684b;height:40px;line-height:40px;border-radius:20px;color:#fff;text-align:center}.coinNum___QgvXK{text-align:center;color:#fe684b;font-size:12px;padding:10px 0}.editImg___1EH47{float:right;margin-right:2px;width:20px}.editTxt___2KlbO{float:right;margin-right:15px;margin-left:2px;color:#666;font-size:14px}.deleteImg___2b1uJ{float:right;margin-right:5px;width:20px}.deleteTxt___16IZ3{float:right;margin-right:5px;margin-left:5px;color:#666;font-size:14px}.delDiv___1Qc8H{line-height:16px;padding:8px 0;float:right}.bottomBg___HLiJU{width:100%;height:5px;background-image:url("+a(1808)+");background-repeat:no-repeat}.productInfo___I1KEK{width:100%;height:100px;padding:0 10px;background-color:#fff;margin-top:7px}.productImg___2AdDZ{width:23%;height:100%;float:left;padding:10px}.productImg___2AdDZ img{width:60px}.productDetail___3wJo3{float:left;height:100%;width:75%}.nameTxt___1pXiq{padding-top:10px;padding-left:10px;height:40px}.productDetail___3wJo3 div{float:left}.productDetail___3wJo3 div:nth-child(2){margin-top:3px;margin-left:24px}.nump___22jJl{font-size:12px;color:#666;padding-left:10px;margin-top:4px}.proceTxt___2eGL4{font-size:12px;color:#fe684b;margin-top:14px;margin-left:23px}.numTxt___PK5Tl{font-size:12px;color:#000;margin-top:10px;text-align:right;margin-left:23px}.discount___2CEhM{width:100%;background-color:#fff;height:46px;line-height:46px;margin-top:10px;color:#fe684b;font-size:16px;padding-left:20px}.discount___2CEhM span:first-child{float:left;color:#666}.discount___2CEhM span:nth-child(2){float:right;margin-right:20px}",""]),e.locals={bg:"bg___2dcqk",item:"item___3YLXy",name:"name___9cxKE",phone:"phone___3CoJJ",site:"site___O-Ly0",eidt_bg:"eidt_bg___1bAui",eidt:"eidt___1QJbb",del:"del___1U9pK",add:"add___1M2Kc",do_default:"do_default___1OHKT","default":"default___2PeUt",nullDom:"nullDom___2vZN5",addAddress:"addAddress___3fYAe",addBtnDiv:"addBtnDiv___3oaAY",addBtn:"addBtn___3UC9F",coinNum:"coinNum___QgvXK",editImg:"editImg___1EH47",editTxt:"editTxt___2KlbO",deleteImg:"deleteImg___2b1uJ",deleteTxt:"deleteTxt___16IZ3",delDiv:"delDiv___1Qc8H",bottomBg:"bottomBg___HLiJU",productInfo:"productInfo___I1KEK",productImg:"productImg___2AdDZ",productDetail:"productDetail___3wJo3",nameTxt:"nameTxt___1pXiq",nump:"nump___22jJl",proceTxt:"proceTxt___2eGL4",numTxt:"numTxt___PK5Tl",discount:"discount___2CEhM"}},1808:function(t,e,a){t.exports=a.p+"static/media/botbg.d849d296.png"},2224:function(t,e,a){var o=a(1672);"string"==typeof o&&(o=[[t.id,o,""]]);a(7)(o,{});o.locals&&(t.exports=o.locals)}});