webpackJsonp([49],{165:function(e,t,o){e.exports=o.p+"static/media/private2.47e3ef01.png"},964:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function _(e,t,o){return t in e?(0,p["default"])(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),p=a(i),d=o(5),u=a(d),m=o(3),c=a(m),s=o(41),f=a(s),g=o(31),h=a(g),x=o(4),b=a(x),I=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,p["default"])(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),v=o(1),y=a(v),T=o(10),D=a(T),N=(o(19),o(2345)),E=a(N),R=o(9),S=o(8),w=o(18),k=a(w),B=o(22),C=(a(B),o(17)),V=a(C),z=o(21),L=a(z),F=o(1994),H=(a(F),o(165)),j=a(H),M=o(13),O=a(M),Q=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return o.handleChange1=function(e){o.setState({num:e.target.value})},o.changeBar=function(e,t,a){e<0?o.refs.alert.show({content:"数目不能小于0!",okText:"确定"}):e>t?o.refs.alert.show({content:"每人只限购"+t+"件!",okText:"确定"}):e>a?o.refs.alert.show({content:"商品库存不足!",okText:"确定"}):o.setState({num:e})},o.dataInspect=function(){var e=sessionStorage.getItem("bao-product"),t=o.props.params.id;return!(!e||JSON.parse(e).id!=t)},o.setData=function(){var e=o.props.infoData.data;sessionStorage.setItem("bao-product",(0,h["default"])(e))},o.loadDom=function(){return y["default"].createElement(k["default"],null)},o.choose=function(e,t){var a=void 0;o.setState(function(o){a=(0,f["default"])(o.params,_({},e,t))})},o.confirm=function(e,t){for(var a=o.state,_=a.params,n=a.num,r=(a.type_name,[]),l="",i=0;i<_.length;i++)"undefined"!=typeof _[i]&&(r.push(_[i]),l=l+i+"|"+_[i]+"||");r.length<t.length?o.refs.alert.show({content:"请选择商品属性",okText:"确定"}):0==n?o.refs.alert.show({content:"商品数目不能为0",okText:"确定"}):(sessionStorage.setItem("propertyStr",l),o.props.push("/find/productCash/"+e+"/"+n))},o.loadEndDom=function(e){var t=o.state,a=t.num,_=t.params,n=o.props.VipData,r=JSON.parse(sessionStorage.getItem("bao-auth")),l=void 0;r&&n&&(l=n.data.vip_level);var i=e.image,p=(e.product_id,e.product_name),d=e.product_info,u=e.price,m=e.alone_price,c=e.stock,s=(e.cash_limit_time,e.cash_limit_num),f=(e.label_name,e.product_property),g=e.down_time,h=e.server_time,x=V["default"].millisecondToDate(g-h);return y["default"].createElement("div",null,y["default"].createElement(D["default"],{backgroundColor:"#fff",color:"#333",onLeft:o.props.pop},p),y["default"].createElement("div",{className:E["default"].goodsTop},y["default"].createElement("div",{className:E["default"].goodsImg},y["default"].createElement("img",{src:i,className:E["default"].productImg}),y["default"].createElement("div",{className:0!=g&&E["default"].numDiv||E["default"].none},y["default"].createElement("div",{className:E["default"].dayNum},"距结束",x))),y["default"].createElement("div",{className:E["default"].proTitle},y["default"].createElement("p",{className:E["default"].titleTop},y["default"].createElement("span",{className:E["default"].titieTxt},p)),y["default"].createElement("p",{className:E["default"].titleBottom},y["default"].createElement("span",{className:E["default"].priceTxt},m,"点币"),y["default"].createElement("img",{src:j["default"],className:(!l||"1"==l||"2"==l||"0"==l)&&E["default"].none||E["default"].priceImg}),y["default"].createElement("span",{className:(!l||"1"==l||"2"==l||"0"==l)&&E["default"].none||E["default"].priceTxt1},u,"点币")))),y["default"].createElement("div",{className:E["default"].propertyDiv},f&&f.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:item,t=e.type_name,a=e.property_value,n=e.id,r=arguments[1];return y["default"].createElement("div",{className:E["default"].propertyItem,key:r},y["default"].createElement("p",{className:E["default"].nump,ref:"property"},t,"：",y["default"].createElement("span",{className:E["default"].num2},_[n]&&_[n]||"选择")),y["default"].createElement("p",{className:E["default"].propertyValue},a.split("|").map(function(e,t){return y["default"].createElement("span",{key:t,onClick:function(){o.choose(n,e)},className:(0,O["default"])(_[n]==e?E["default"].current:"")},e)})))}),y["default"].createElement("p",{className:E["default"].num1},"数目：",y["default"].createElement("span",{className:E["default"].num2},o.state.num)),y["default"].createElement("p",{className:E["default"].numSelect},y["default"].createElement("span",{className:E["default"].numBorder,onClick:function(){o.changeBar(a-1)}},"-"),y["default"].createElement("input",{type:"text",className:E["default"].productNum,value:o.state.num,onChange:o.handleChange1}),y["default"].createElement("span",{className:E["default"].numBorder,onClick:function(){o.changeBar(a+1,s,c)}},"+"),y["default"].createElement("span",{className:E["default"].limitTxt},"每人每天限购",s,"件"),y["default"].createElement("span",{className:E["default"].limitTxt},"剩余数量",c,"件  "))),y["default"].createElement("div",{className:E["default"].detailImg},y["default"].createElement("p",{className:E["default"].infoTitle},"商品详情"),y["default"].createElement("div",{dangerouslySetInnerHTML:{__html:d},className:E["default"].infoContent})))},o.state={flag:!1,num:1,params:[],init:!1,index:0},o.handleChange1=o.handleChange1.bind(o),o}return l(t,e),I(t,[{key:"componentWillMount",value:function(){this.props.clearData("PRODUCT_DETAIL");var e=sessionStorage.getItem("bao-auth");e&&this.props.getVip(),sessionStorage.removeItem("bao-product");var t=this.dataInspect();if(!t){var o=this.props.params.id;this.props.productDetail(o)}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.infoDate,o={};t&&100==t.code&&!this.state.init&&(t.data.product_property.map(function(e){var t=e.id;o[t]=""}),this.setState({params:o}))}},{key:"render",value:function(){var e=this,t=this.props,o=t.infoData,a=t.VipData,_=void 0,n=this.dataInspect(),r=void 0,l=sessionStorage.getItem("bao-auth");return o?(r=this.loadEndDom(o.data),a&&l&&(_=a.data.coin_total>o.data.alone_price),this.setData()):r=this.loadDom(),n&&(r=this.loadEndDom()),y["default"].createElement("div",{className:E["default"].bg},r,y["default"].createElement(L["default"],{ref:"alert"}),y["default"].createElement("div",{className:E["default"].Botton||E["default"].none},y["default"].createElement("p",{onClick:function(){e.confirm(o.data.product_id,o.data.product_property)}},"立即兑换")),y["default"].createElement("div",{className:l&&!_&&E["default"].BottonNo||E["default"].none},y["default"].createElement("p",null,"点币不足")))}}]),t}(y["default"].Component),P=function(e){return{infoData:e.infodata.getIn(["PRODUCT_DETAIL","data"]),VipData:e.infodata.getIn(["GET_VIP","data"])}},Y=function(e){return{pop:function(){e((0,S.goBack)())},productDetail:function(t){e({type:"PRODUCT_DETAIL",params:[t]})},push:function(t){e((0,S.push)(t))},getVip:function(){e({type:"GET_VIP"})},clearData:function(t){e({type:"CLEAR_DATA",key:t})}}};t["default"]=(0,R.connect)(P,Y)(Q)},1474:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".bg___7ImRl{background:#f6f6f9;position:absolute;left:0;top:0;overflow:auto;width:100%;height:100vh;padding-top:44px;padding-bottom:80px}.bg___7ImRl .goodsTop___3DeSH{width:100%;background-color:#fff}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x{width:96%;margin:0 auto;height:240px;border-bottom:1px solid #dedede;text-align:center;position:relative}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x .productImg___1FVKJ{width:45%;margin:0 auto}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x .numDiv___2fbCb{width:100%;position:absolute;bottom:0}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x .dayNum___1XiCn{width:110px;margin:0 auto;height:20px;line-height:20px;font-size:12px;color:#fff;background-color:#858585}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ{width:100%;padding:15px 17px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleTop___2YIE_{height:15px;line-height:15px;font-size:12px;color:#333}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleTop___2YIE_ .titieTxt___i9RIg{float:left}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln{height:40px;line-height:40px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln .priceTxt___FHVjL{font-size:18px;color:#333;margin-right:5px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln .priceImg___1_A5n{width:30px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln .priceTxt1___nvbEq{color:#666;font-size:12px;text-decoration:line-through;margin-left:25px}.bg___7ImRl .propertyDiv___1mF4g{width:100%;background-color:#fff;padding:15px 17px;font-size:14px;margin-top:10px}.bg___7ImRl .propertyDiv___1mF4g .num1___3-PZD{font-size:14px;margin-top:20px}.bg___7ImRl .propertyDiv___1mF4g .num2___1gcfe{color:#666}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy{height:40px;padding:5px 0}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy .numBorder___1OqVn{float:left;width:30px;height:30px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy .limitTxt___3w1wO{float:right;font-size:12px;color:#333;margin-top:15px}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy .productNum___QQKmY{outline:none;float:left;width:40px;height:30px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .nump___1e88a{font-size:14px;margin-top:20px}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e{height:40px;padding:5px 0}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e .current___3tXlb,.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e span{float:left;padding:0 10px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e .current___3tXlb{background-color:#fe684b;color:#fff}.bg___7ImRl .detailImg___XnjND{background:#fff}.bg___7ImRl .detailImg___XnjND .infoTitle___3VZcU{padding-left:20px;margin-bottom:10px;margin-top:10px;padding-top:10px}.bg___7ImRl .detailImg___XnjND .infoContent___25Lvo img{width:100%}.bg___7ImRl .Botton___r8WIW{position:fixed;width:100%;height:80px;bottom:0;text-align:center;background-color:#fff;padding-top:15px}.bg___7ImRl .Botton___r8WIW p{width:80%;margin:0 auto;height:46px;line-height:46px;background-color:#fe684b;color:#fff;border-radius:28px;box-shadow:0 5px 2px #fea999}.bg___7ImRl .BottonNo___7DtfO{position:fixed;width:100%;height:80px;bottom:0;text-align:center;background-color:#fff;padding-top:15px}.bg___7ImRl .BottonNo___7DtfO p{width:80%;margin:0 auto;height:46px;line-height:46px;background-color:#ccc;color:#fff;border-radius:28px;box-shadow:0 5px 2px #ddd}.bg___7ImRl .none___2BP7M{display:none}",""]),t.locals={bg:"bg___7ImRl",goodsTop:"goodsTop___3DeSH",goodsImg:"goodsImg___1-y8x",productImg:"productImg___1FVKJ",numDiv:"numDiv___2fbCb",dayNum:"dayNum___1XiCn",proTitle:"proTitle___tzeLQ",titleTop:"titleTop___2YIE_",titieTxt:"titieTxt___i9RIg",titleBottom:"titleBottom___2zdln",priceTxt:"priceTxt___FHVjL",priceImg:"priceImg___1_A5n",priceTxt1:"priceTxt1___nvbEq",propertyDiv:"propertyDiv___1mF4g",num1:"num1___3-PZD",num2:"num2___1gcfe",numSelect:"numSelect___1_Nhy",numBorder:"numBorder___1OqVn",limitTxt:"limitTxt___3w1wO",productNum:"productNum___QQKmY",propertyItem:"propertyItem___20MjS",nump:"nump___1e88a",propertyValue:"propertyValue___2_Y8e",current:"current___3tXlb",detailImg:"detailImg___XnjND",infoTitle:"infoTitle___3VZcU",infoContent:"infoContent___25Lvo",Botton:"Botton___r8WIW",BottonNo:"BottonNo___7DtfO",none:"none___2BP7M"}},1994:function(e,t,o){e.exports=o.p+"static/media/product.6c735755.png"},2345:[2570,1474]});