webpackJsonp([168],{1059:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function _(e,t,o){return t in e?(0,p["default"])(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),p=a(i),u=o(5),d=a(u),c=o(3),s=a(c),m=o(57),f=a(m),g=o(35),h=a(g),x=o(4),b=a(x),B=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,p["default"])(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),v=o(1),T=a(v),y=o(10),E=a(y),I=(o(19),o(2140)),N=a(I),D=o(9),w=o(8),M=o(16),k=a(M),S=o(25),C=(a(S),o(17)),P=a(C),Y=o(24),J=a(Y),A=o(1801),z=(a(A),o(533)),V=a(z),Q=o(11),W=a(Q),O=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return o.handleChange1=function(e){o.setState({num:e.target.value})},o.changeBar=function(e,t,a){e<0?o.refs.alert.show({content:"数目不能小于0!",okText:"确定"}):0!=t&&e>t?o.refs.alert.show({content:"每人只限购"+t+"件!",okText:"确定"}):e>a?o.refs.alert.show({content:"商品库存不足!",okText:"确定"}):o.setState({num:e})},o.dataInspect=function(){var e=sessionStorage.getItem("bao-product"),t=o.props.params.id;return!(!e||JSON.parse(e).id!=t)},o.setData=function(){var e=o.props.infoData.data;sessionStorage.setItem("bao-product",(0,h["default"])(e))},o.loadDom=function(){return T["default"].createElement(k["default"],null)},o.choose=function(e,t){var a=void 0;o.setState(function(o){a=(0,f["default"])(o.params,_({},e,t))})},o.confirm=function(e,t){for(var a=o.state,_=a.params,n=a.num,r=(a.type_name,[]),l="",i=0;i<_.length;i++)"undefined"!=typeof _[i]&&(r.push(_[i]),l=l+i+"|"+_[i]+"||");r.length<t.length?o.refs.alert.show({content:"请选择商品属性",okText:"确定"}):0==n?o.refs.alert.show({content:"商品数目不能为0",okText:"确定"}):(sessionStorage.setItem("propertyStr",l),o.props.push("/find/productCash/"+e+"/"+n))},o.loadEndDom=function(e){var t=o.state,a=t.num,_=t.params,n=o.props.VipData,r=JSON.parse(sessionStorage.getItem("bao-auth")),l=void 0;r&&n&&(l=n.data.vip_level);var i=e.image,p=(e.product_id,e.product_name),u=e.product_info,d=e.price,c=e.alone_price,s=e.stock,m=(e.cash_limit_time,e.cash_limit_num),f=(e.label_name,e.product_property),g=e.down_time,h=e.server_time,x=P["default"].millisecondToDate(g-h);return T["default"].createElement("div",null,T["default"].createElement(E["default"],{backgroundColor:"#fff",color:"#333",onLeft:o.props.pop},p),T["default"].createElement("div",{className:N["default"].goodsTop},T["default"].createElement("div",{className:N["default"].goodsImg},T["default"].createElement("img",{src:i,className:N["default"].productImg}),T["default"].createElement("div",{className:0!=g&&N["default"].numDiv||N["default"].none},T["default"].createElement("div",{className:N["default"].dayNum},"距结束",x))),T["default"].createElement("div",{className:N["default"].proTitle},T["default"].createElement("p",{className:N["default"].titleTop},T["default"].createElement("span",{className:N["default"].titieTxt},p)),T["default"].createElement("p",{className:N["default"].titleBottom},T["default"].createElement("span",{className:N["default"].priceTxt},c,"点币"),T["default"].createElement("img",{src:V["default"],className:(!l||"1"==l||"2"==l||"0"==l)&&N["default"].none||N["default"].priceImg}),T["default"].createElement("span",{className:(!l||"1"==l||"2"==l||"0"==l)&&N["default"].none||N["default"].priceTxt1},d,"点币")))),T["default"].createElement("div",{className:N["default"].propertyDiv},f&&f.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:item,t=e.type_name,a=e.property_value,n=e.id,r=arguments[1];return T["default"].createElement("div",{className:N["default"].propertyItem,key:r},T["default"].createElement("p",{className:N["default"].nump,ref:"property"},t,"：",T["default"].createElement("span",{className:N["default"].num2},_[n]&&_[n]||"选择")),T["default"].createElement("p",{className:N["default"].propertyValue},a.split("|").map(function(e,t){return T["default"].createElement("span",{key:t,onClick:function(){o.choose(n,e)},className:(0,W["default"])(_[n]==e?N["default"].current:"")},e)})))}),T["default"].createElement("p",{className:N["default"].num1},"数目：",T["default"].createElement("span",{className:N["default"].num2},o.state.num)),T["default"].createElement("p",{className:N["default"].numSelect},T["default"].createElement("span",{className:N["default"].numBorder,onClick:function(){o.changeBar(a-1)}},"-"),T["default"].createElement("input",{type:"text",className:N["default"].productNum,value:o.state.num,onChange:o.handleChange1}),T["default"].createElement("span",{className:N["default"].numBorder,onClick:function(){o.changeBar(a+1,m,s)}},"+"),T["default"].createElement("span",{className:0==m&&N["default"].none||N["default"].limitTxt},"每人每天限购",m,"件"),T["default"].createElement("span",{className:N["default"].limitTxt},"剩余数量",s,"件  "))),T["default"].createElement("div",{className:N["default"].detailImg},T["default"].createElement("p",{className:N["default"].infoTitle},"商品详情"),T["default"].createElement("div",{dangerouslySetInnerHTML:{__html:u},className:N["default"].infoContent})))},o.state={flag:!1,num:1,params:[],init:!1,index:0},o.handleChange1=o.handleChange1.bind(o),o}return l(t,e),B(t,[{key:"componentWillMount",value:function(){this.props.clearData("PRODUCT_DETAIL");var e=sessionStorage.getItem("bao-auth");e&&this.props.getVip(),sessionStorage.removeItem("bao-product"),sessionStorage.removeItem("isCoupon");var t=this.dataInspect();if(!t){var o=this.props.params.id;this.props.productDetail(o)}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.infoDate,o={};t&&100==t.code&&!this.state.init&&(t.data.product_property.map(function(e){var t=e.id;o[t]=""}),this.setState({params:o}))}},{key:"render",value:function(){var e=this,t=this.props,o=t.infoData,a=t.VipData,_=void 0,n=this.dataInspect(),r=void 0,l=sessionStorage.getItem("bao-auth");return o?(sessionStorage.setItem("isCoupon",o.data.is_coupon),r=this.loadEndDom(o.data),a&&l&&(_=a.data.coin_total>o.data.alone_price),this.setData()):r=this.loadDom(),n&&(r=this.loadEndDom()),T["default"].createElement("div",{className:N["default"].bg},r,T["default"].createElement(J["default"],{ref:"alert"}),T["default"].createElement("div",{className:N["default"].Botton||N["default"].none},T["default"].createElement("p",{onClick:function(){e.confirm(o.data.product_id,o.data.product_property)}},"立即兑换")),T["default"].createElement("div",{className:l&&!_&&N["default"].BottonNo||N["default"].none},T["default"].createElement("p",null,"点币不足")))}}]),t}(T["default"].Component),L=function(e){return{infoData:e.infodata.getIn(["PRODUCT_DETAIL","data"]),VipData:e.infodata.getIn(["GET_VIP","data"])}},j=function(e){return{pop:function(){e((0,w.goBack)())},productDetail:function(t){e({type:"PRODUCT_DETAIL",params:[t]})},push:function(t){e((0,w.push)(t))},getVip:function(){e({type:"GET_VIP"})},clearData:function(t){e({type:"CLEAR_DATA",key:t})}}};t["default"]=(0,D.connect)(L,j)(O)},1560:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".bg___1MBle{background:#f6f6f9;position:absolute;left:0;top:0;overflow:auto;width:100%;height:100vh;padding-top:44px;padding-bottom:80px}.bg___1MBle .goodsTop___3JQht{width:100%;background-color:#fff}.bg___1MBle .goodsTop___3JQht .goodsImg___1LIBE{width:96%;margin:0 auto;height:240px;border-bottom:1px solid #dedede;text-align:center;position:relative}.bg___1MBle .goodsTop___3JQht .goodsImg___1LIBE .productImg___1nrx1{width:45%;margin:0 auto}.bg___1MBle .goodsTop___3JQht .goodsImg___1LIBE .numDiv___3Wr9B{width:100%;position:absolute;bottom:0}.bg___1MBle .goodsTop___3JQht .goodsImg___1LIBE .dayNum___6Jecd{width:110px;margin:0 auto;height:20px;line-height:20px;font-size:12px;color:#fff;background-color:#858585}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo{width:100%;padding:15px 17px}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo .titleTop___1Shxw{height:15px;line-height:15px;font-size:12px;color:#333}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo .titleTop___1Shxw .titieTxt___1nhji{float:left}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo .titleBottom___1PA_B{height:40px;line-height:40px}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo .titleBottom___1PA_B .priceTxt___1mIcX{font-size:18px;color:#333;margin-right:5px}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo .titleBottom___1PA_B .priceImg___Miok2{width:30px}.bg___1MBle .goodsTop___3JQht .proTitle___1bWzo .titleBottom___1PA_B .priceTxt1___1lhPh{color:#666;font-size:12px;text-decoration:line-through;margin-left:25px}.bg___1MBle .propertyDiv___1-hYm{width:100%;background-color:#fff;padding:15px 17px;font-size:14px;margin-top:10px}.bg___1MBle .propertyDiv___1-hYm .num1___AJYll{font-size:14px;margin-top:20px}.bg___1MBle .propertyDiv___1-hYm .num2___2POso{color:#666}.bg___1MBle .propertyDiv___1-hYm .numSelect___3wBxE{height:40px;padding:5px 0}.bg___1MBle .propertyDiv___1-hYm .numSelect___3wBxE .numBorder___3GyzT{float:left;width:30px;height:30px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___1MBle .propertyDiv___1-hYm .numSelect___3wBxE .limitTxt___37xcu{float:right;font-size:12px;color:#333;margin-top:15px}.bg___1MBle .propertyDiv___1-hYm .numSelect___3wBxE .productNum___Pl_9g{outline:none;float:left;width:40px;height:30px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___1MBle .propertyDiv___1-hYm .propertyItem___HYlFN .nump___43jjg{font-size:14px;margin-top:20px}.bg___1MBle .propertyDiv___1-hYm .propertyItem___HYlFN .propertyValue___11oxx{height:40px;padding:5px 0}.bg___1MBle .propertyDiv___1-hYm .propertyItem___HYlFN .propertyValue___11oxx .current___1ZsxK,.bg___1MBle .propertyDiv___1-hYm .propertyItem___HYlFN .propertyValue___11oxx span{float:left;padding:0 10px;border:1px solid #999;border-radius:3px;margin:0 3px;margin-top:5px;text-align:center;line-height:30px}.bg___1MBle .propertyDiv___1-hYm .propertyItem___HYlFN .propertyValue___11oxx .current___1ZsxK{background-color:#fe684b;color:#fff}.bg___1MBle .detailImg___3q9PO{background:#fff}.bg___1MBle .detailImg___3q9PO .infoTitle___2SC3Q{padding-left:20px;margin-bottom:10px;margin-top:10px;padding-top:10px}.bg___1MBle .detailImg___3q9PO .infoContent___BqGwX img{width:100%}.bg___1MBle .Botton____-bA3{position:fixed;width:100%;height:80px;bottom:0;text-align:center;background-color:#fff;padding-top:15px}.bg___1MBle .Botton____-bA3 p{width:80%;margin:0 auto;height:46px;line-height:46px;background-color:#fe684b;color:#fff;border-radius:28px;box-shadow:0 5px 2px #fea999}.bg___1MBle .BottonNo___1rVAo{position:fixed;width:100%;height:80px;bottom:0;text-align:center;background-color:#fff;padding-top:15px}.bg___1MBle .BottonNo___1rVAo p{width:80%;margin:0 auto;height:46px;line-height:46px;background-color:#ccc;color:#fff;border-radius:28px;box-shadow:0 5px 2px #ddd}.bg___1MBle .none___3Igkt{display:none}",""]),t.locals={bg:"bg___1MBle",goodsTop:"goodsTop___3JQht",goodsImg:"goodsImg___1LIBE",productImg:"productImg___1nrx1",numDiv:"numDiv___3Wr9B",dayNum:"dayNum___6Jecd",proTitle:"proTitle___1bWzo",titleTop:"titleTop___1Shxw",titieTxt:"titieTxt___1nhji",titleBottom:"titleBottom___1PA_B",priceTxt:"priceTxt___1mIcX",priceImg:"priceImg___Miok2",priceTxt1:"priceTxt1___1lhPh",propertyDiv:"propertyDiv___1-hYm",num1:"num1___AJYll",num2:"num2___2POso",numSelect:"numSelect___3wBxE",numBorder:"numBorder___3GyzT",limitTxt:"limitTxt___37xcu",productNum:"productNum___Pl_9g",propertyItem:"propertyItem___HYlFN",nump:"nump___43jjg",propertyValue:"propertyValue___11oxx",current:"current___1ZsxK",detailImg:"detailImg___3q9PO",infoTitle:"infoTitle___2SC3Q",infoContent:"infoContent___BqGwX",Botton:"Botton____-bA3",BottonNo:"BottonNo___1rVAo",none:"none___3Igkt"}},1801:function(e,t,o){e.exports=o.p+"static/media/product.6c735755.png"},2140:[2356,1560]});