webpackJsonp([116],{16:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},17:[2581,16],20:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),_=a(n),r=o(17),l=a(r);t["default"]=function(e){return function(t){return _["default"].createElement("div",{className:l["default"].page},_["default"].createElement(e,t))}}},243:function(e,t,o){e.exports=o.p+"static/media/private2.47e3ef01.png"},1061:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t,o){return t in e?(0,p["default"])(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),p=a(i),u=o(5),d=a(u),m=o(3),c=a(m),s=o(59),f=a(s),g=o(58),h=a(g),x=o(4),b=a(x),I=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,p["default"])(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),v=o(1),y=a(v),T=o(12),D=a(T),E=(o(22),o(2366)),N=a(E),S=o(11),R=o(10),w=o(23),k=a(w),B=o(20),C=(a(B),o(21)),V=a(C),z=o(28),L=a(z),j=o(2045),F=(a(j),o(243)),H=a(F),M=o(8),O=a(M),P=function(e){function t(e){_(this,t);var o=r(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return o.handleChange1=function(e){o.setState({num:e.target.value})},o.changeBar=function(e,t,a){e<0?o.refs.alert.show({content:"数目不能小于0!",okText:"确定"}):0!=t&&e>t?o.refs.alert.show({content:"每人只限购"+t+"件!",okText:"确定"}):e>a?o.refs.alert.show({content:"商品库存不足!",okText:"确定"}):o.setState({num:e})},o.dataInspect=function(){var e=sessionStorage.getItem("bao-product"),t=o.props.params.id;return!(!e||JSON.parse(e).id!=t)},o.setData=function(){var e=o.props.infoData.data;sessionStorage.setItem("bao-product",(0,h["default"])(e))},o.loadDom=function(){return y["default"].createElement(k["default"],null)},o.choose=function(e,t){var a=void 0;o.setState(function(o){a=(0,f["default"])(o.params,n({},e,t))})},o.confirm=function(e,t){for(var a=o.state,n=a.params,_=a.num,r=(a.type_name,[]),l="",i=0;i<n.length;i++)"undefined"!=typeof n[i]&&(r.push(n[i]),l=l+i+"|"+n[i]+"||");r.length<t.length?o.refs.alert.show({content:"请选择商品属性",okText:"确定"}):0==_?o.refs.alert.show({content:"商品数目不能为0",okText:"确定"}):(sessionStorage.setItem("propertyStr",l),o.props.push("/find/productCash/"+e+"/"+_))},o.loadEndDom=function(e){var t=o.state,a=t.num,n=t.params,_=o.props.VipData,r=JSON.parse(sessionStorage.getItem("bao-auth")),l=void 0;r&&_&&(l=_.data.vip_level);var i=e.image,p=(e.product_id,e.product_name),u=e.product_info,d=e.price,m=e.alone_price,c=e.stock,s=(e.cash_limit_time,e.cash_limit_num),f=(e.label_name,e.product_property),g=e.down_time,h=e.server_time,x=V["default"].millisecondToDate(g-h);return y["default"].createElement("div",null,y["default"].createElement(D["default"],{backgroundColor:"#fff",color:"#333",onLeft:o.props.pop},p),y["default"].createElement("div",{className:N["default"].goodsTop},y["default"].createElement("div",{className:N["default"].goodsImg},y["default"].createElement("img",{src:i,className:N["default"].productImg}),y["default"].createElement("div",{className:0!=g&&N["default"].numDiv||N["default"].none},y["default"].createElement("div",{className:N["default"].dayNum},"距结束",x))),y["default"].createElement("div",{className:N["default"].proTitle},y["default"].createElement("p",{className:N["default"].titleTop},y["default"].createElement("span",{className:N["default"].titieTxt},p)),y["default"].createElement("p",{className:N["default"].titleBottom},y["default"].createElement("span",{className:N["default"].priceTxt},m,"点币"),y["default"].createElement("img",{src:H["default"],className:(!l||"1"==l||"2"==l||"0"==l)&&N["default"].none||N["default"].priceImg}),y["default"].createElement("span",{className:(!l||"1"==l||"2"==l||"0"==l)&&N["default"].none||N["default"].priceTxt1},d,"点币")))),y["default"].createElement("div",{className:N["default"].propertyDiv},f&&f.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:item,t=e.type_name,a=e.property_value,_=e.id,r=arguments[1];return y["default"].createElement("div",{className:N["default"].propertyItem,key:r},y["default"].createElement("p",{className:N["default"].nump,ref:"property"},t,"：",y["default"].createElement("span",{className:N["default"].num2},n[_]&&n[_]||"选择")),y["default"].createElement("p",{className:N["default"].propertyValue},a.split("|").map(function(e,t){return y["default"].createElement("span",{key:t,onClick:function(){o.choose(_,e)},className:(0,O["default"])(n[_]==e?N["default"].current:"")},e)})))}),y["default"].createElement("p",{className:N["default"].num1},"数目：",y["default"].createElement("span",{className:N["default"].num2},o.state.num)),y["default"].createElement("p",{className:N["default"].numSelect},y["default"].createElement("span",{className:N["default"].numBorder,onClick:function(){o.changeBar(a-1)}},"-"),y["default"].createElement("input",{type:"text",className:N["default"].productNum,value:o.state.num,onChange:o.handleChange1}),y["default"].createElement("span",{className:N["default"].numBorder,onClick:function(){o.changeBar(a+1,s,c)}},"+"),y["default"].createElement("span",{className:0==s&&N["default"].none||N["default"].limitTxt},"每人每天限购",s,"件"),y["default"].createElement("span",{className:N["default"].limitTxt},"剩余数量",c,"件  "))),y["default"].createElement("div",{className:N["default"].detailImg},y["default"].createElement("p",{className:N["default"].infoTitle},"商品详情"),y["default"].createElement("div",{dangerouslySetInnerHTML:{__html:u},className:N["default"].infoContent})))},o.state={flag:!1,num:1,params:[],init:!1,index:0},o.handleChange1=o.handleChange1.bind(o),o}return l(t,e),I(t,[{key:"componentWillMount",value:function(){this.props.clearData("PRODUCT_DETAIL");var e=sessionStorage.getItem("bao-auth");e&&this.props.getVip(),sessionStorage.removeItem("bao-product"),sessionStorage.removeItem("isCoupon");var t=this.dataInspect();if(!t){var o=this.props.params.id;this.props.productDetail(o)}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.infoDate,o={};t&&100==t.code&&!this.state.init&&(t.data.product_property.map(function(e){var t=e.id;o[t]=""}),this.setState({params:o}))}},{key:"render",value:function(){var e=this,t=this.props,o=t.infoData,a=t.VipData,n=void 0,_=this.dataInspect(),r=void 0,l=sessionStorage.getItem("bao-auth");return o?(sessionStorage.setItem("isCoupon",o.data.is_coupon),r=this.loadEndDom(o.data),a&&l&&(n=a.data.coin_total>o.data.alone_price),this.setData()):r=this.loadDom(),_&&(r=this.loadEndDom()),y["default"].createElement("div",{className:N["default"].bg},r,y["default"].createElement(L["default"],{ref:"alert"}),y["default"].createElement("div",{className:N["default"].Botton||N["default"].none},y["default"].createElement("p",{onClick:function(){e.confirm(o.data.product_id,o.data.product_property)}},"立即兑换")),y["default"].createElement("div",{className:l&&!n&&N["default"].BottonNo||N["default"].none},y["default"].createElement("p",null,"点币不足")))}}]),t}(y["default"].Component),Q=function(e){return{infoData:e.infodata.getIn(["PRODUCT_DETAIL","data"]),VipData:e.infodata.getIn(["GET_VIP","data"])}},Y=function(e){return{pop:function(){e((0,R.goBack)())},productDetail:function(t){e({type:"PRODUCT_DETAIL",params:[t]})},push:function(t){e((0,R.push)(t))},getVip:function(){e({type:"GET_VIP"})},clearData:function(t){e({type:"CLEAR_DATA",key:t})}}};t["default"]=(0,S.connect)(Q,Y)(P)},1556:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".bg___7ImRl{background:#f6f6f9;position:absolute;left:0;top:0;overflow:auto;width:100%;height:100vh;padding-top:44px;padding-bottom:80px}.bg___7ImRl .goodsTop___3DeSH{width:100%;background-color:#fff}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x{width:96%;margin:0 auto;height:240px;border-bottom:1px solid #dedede;text-align:center;position:relative}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x .productImg___1FVKJ{width:45%;margin:0 auto}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x .numDiv___2fbCb{width:100%;position:absolute;bottom:0}.bg___7ImRl .goodsTop___3DeSH .goodsImg___1-y8x .dayNum___1XiCn{width:110px;margin:0 auto;height:20px;line-height:20px;font-size:12px;color:#fff;background-color:#858585}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ{width:100%;padding:15px 17px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleTop___2YIE_{height:15px;line-height:15px;font-size:12px;color:#333}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleTop___2YIE_ .titieTxt___i9RIg{float:left}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln{height:40px;line-height:40px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln .priceTxt___FHVjL{font-size:18px;color:#333;margin-right:5px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln .priceImg___1_A5n{width:30px}.bg___7ImRl .goodsTop___3DeSH .proTitle___tzeLQ .titleBottom___2zdln .priceTxt1___nvbEq{color:#666;font-size:12px;text-decoration:line-through;margin-left:25px}.bg___7ImRl .propertyDiv___1mF4g{width:100%;background-color:#fff;padding:15px 17px;font-size:14px;margin-top:10px}.bg___7ImRl .propertyDiv___1mF4g .num1___3-PZD{font-size:14px;margin-top:20px}.bg___7ImRl .propertyDiv___1mF4g .num2___1gcfe{color:#666}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy{height:40px;padding:5px 0}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy .numBorder___1OqVn{float:left;width:30px;height:30px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy .limitTxt___3w1wO{float:right;font-size:12px;color:#333;margin-top:15px}.bg___7ImRl .propertyDiv___1mF4g .numSelect___1_Nhy .productNum___QQKmY{outline:none;float:left;width:40px;height:30px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .nump___1e88a{font-size:14px;margin-top:20px}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e{height:40px;padding:5px 0}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e .current___3tXlb,.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e span{float:left;padding:0 10px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___7ImRl .propertyDiv___1mF4g .propertyItem___20MjS .propertyValue___2_Y8e .current___3tXlb{background-color:#fe684b;color:#fff}.bg___7ImRl .detailImg___XnjND{background:#fff}.bg___7ImRl .detailImg___XnjND .infoTitle___3VZcU{padding-left:20px;margin-bottom:10px;margin-top:10px;padding-top:10px}.bg___7ImRl .detailImg___XnjND .infoContent___25Lvo img{width:100%}.bg___7ImRl .Botton___r8WIW{position:fixed;width:100%;height:80px;bottom:0;text-align:center;background-color:#fff;padding-top:15px}.bg___7ImRl .Botton___r8WIW p{width:80%;margin:0 auto;height:46px;line-height:46px;background-color:#fe684b;color:#fff;border-radius:28px;box-shadow:0 5px 2px #fea999}.bg___7ImRl .BottonNo___7DtfO{position:fixed;width:100%;height:80px;bottom:0;text-align:center;background-color:#fff;padding-top:15px}.bg___7ImRl .BottonNo___7DtfO p{width:80%;margin:0 auto;height:46px;line-height:46px;background-color:#ccc;color:#fff;border-radius:28px;box-shadow:0 5px 2px #ddd}.bg___7ImRl .none___2BP7M{display:none}",""]),t.locals={bg:"bg___7ImRl",goodsTop:"goodsTop___3DeSH",goodsImg:"goodsImg___1-y8x",productImg:"productImg___1FVKJ",numDiv:"numDiv___2fbCb",dayNum:"dayNum___1XiCn",proTitle:"proTitle___tzeLQ",titleTop:"titleTop___2YIE_",titieTxt:"titieTxt___i9RIg",titleBottom:"titleBottom___2zdln",priceTxt:"priceTxt___FHVjL",priceImg:"priceImg___1_A5n",priceTxt1:"priceTxt1___nvbEq",propertyDiv:"propertyDiv___1mF4g",num1:"num1___3-PZD",num2:"num2___1gcfe",numSelect:"numSelect___1_Nhy",numBorder:"numBorder___1OqVn",limitTxt:"limitTxt___3w1wO",productNum:"productNum___QQKmY",propertyItem:"propertyItem___20MjS",nump:"nump___1e88a",propertyValue:"propertyValue___2_Y8e",current:"current___3tXlb",detailImg:"detailImg___XnjND",infoTitle:"infoTitle___3VZcU",infoContent:"infoContent___25Lvo",Botton:"Botton___r8WIW",BottonNo:"BottonNo___7DtfO",none:"none___2BP7M"}},2045:function(e,t,o){e.exports=o.p+"static/media/product.6c735755.png"},2366:function(e,t,o){var a=o(1556);"string"==typeof a&&(a=[[e.id,a,""]]);o(7)(a,{});a.locals&&(e.exports=a.locals)}});