webpackJsonp([5],{266:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,u,s=n(2),c=a(s),d=n(5),f=a(d),p=n(3),m=a(p),_=n(4),g=a(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,c["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=n(1),E=a(b),v=n(110),x=a(v),y=n(392),S=a(y),N=n(154),T=a(N),k=n(354),w=a(k),O=n(353),D=a(O),C=n(355),P=a(C),B=n(352),M=a(B),I=n(15),R=a(I),U=(u=r=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return n.toggle=function(){return n.refs.modal.toggle()},n.show=function(){return n.refs.modal.show()},n.hide=function(){return n.refs.modal.hide()},n.doSign=function(){var e=n;n.props.sign?e.hide():T["default"].sign().then(function(t){var n=t.response;100==n.code?e.props.callBackFun(n):e.hide()})},n.state={coin:0,day:0},n}return i(t,e),h(t,[{key:"render",value:function(){var e=this,t=x["default"][this.props.mode];return E["default"].createElement(t,{ref:"modal"},E["default"].createElement("div",{className:S["default"].sign},this.props.sign&&E["default"].createElement("img",{className:S["default"].t,src:D["default"],alt:""})||E["default"].createElement("img",{className:S["default"].t,src:w["default"],alt:""}),E["default"].createElement("div",{className:S["default"].msBox},E["default"].createElement("p",null,"连续签到5天"),E["default"].createElement("p",null,"额外获得50点币"),E["default"].createElement("hr",null)),E["default"].createElement("p",{className:S["default"].info+" "+S["default"].mt15},"您已累计签到 ",E["default"].createElement("span",null,this.props.days)," 天"),E["default"].createElement("p",{className:S["default"].info},"已获得点币 ",E["default"].createElement("span",null,this.props.coin)),E["default"].createElement("button",{onClick:function(){e.doSign()}},this.props.sign&&"确定"||"点击签到"),E["default"].createElement("img",{className:S["default"].pen,src:P["default"],alt:""})),E["default"].createElement("img",{onClick:function(){e.hide()},src:M["default"],className:S["default"].close,alt:""}))}}]),t}(E["default"].PureComponent),r.propTypes={mode:R["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),coin:R["default"].number,days:R["default"].number,sign:R["default"].bool,callBackFun:R["default"].func},r.defaultProps={mode:"ScaleModal"},u);t["default"]=U},316:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".close___2-rU4{margin:30px auto 0;width:60px;display:block}.msBox___15bX3{padding:10px 30px 0 0}.msBox___15bX3 hr{height:1px;border:0;background-color:#fff;margin-top:10px}.msBox___15bX3 p{font-size:18px;font-style:italic;padding-left:0;line-height:26px;color:#fff}.sign___3q_KT{position:relative;width:270px;box-sizing:border-box;border:8px solid #fff799;border-radius:5px;background:#f76260;padding-top:33px;padding-left:35px;padding-bottom:25px}.sign___3q_KT .t___3jg0w{width:80%}.sign___3q_KT .info___nTjpr{font-size:15px;color:#fff;line-height:20px}.sign___3q_KT .info___nTjpr.mt15___33xoi{margin-top:12px}.sign___3q_KT .info___nTjpr span{font-size:18px;color:#fff799}.sign___3q_KT button{margin-top:20px;width:200px;height:54px;border-radius:5px;font-size:24px;color:#1580b3;display:block;background:#7ecff5;box-shadow:0 5px 0 #16a1d9;border:none}.sign___3q_KT .pen___1mltm{position:absolute;bottom:50px;width:105px;right:-30px}",""]),t.locals={close:"close___2-rU4",msBox:"msBox___15bX3",sign:"sign___3q_KT",t:"t___3jg0w",info:"info___nTjpr",mt15:"mt15___33xoi",pen:"pen___1mltm"}},352:function(e,t,n){e.exports=n.p+"static/media/closex.39b6b6c0.png"},353:function(e,t,n){e.exports=n.p+"static/media/done.8604fb81.png"},354:function(e,t,n){e.exports=n.p+"static/media/sign.4afebd5e.jpg"},355:function(e,t,n){e.exports=n.p+"static/media/sign_pen.d21c0b14.png"},392:[2078,316],870:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),u=a(r),s=n(5),c=a(s),d=n(3),f=a(d),p=n(56),m=a(p),_=n(4),g=a(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=n(1),E=a(b),v=n(11),x=a(v),y=n(45),S=a(y),N=n(22),T=n(396),k=a(T),w=n(9),O=n(10),D=n(266),C=a(D),P=n(1711),B=a(P),M=n(1713),I=a(M),R=n(1710),U=a(R),j=n(19),L=a(j),q=n(34),K=a(q),F=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return n.set=function(e){n.setState({signNumbers:e.signNumbers,coins:e.coins,isSign:e.isSign})},n.doSign=function(){n.refs.SignModel.show()},n.changeBar=function(e){n.setState({index:e})},n.loadDom=function(){return E["default"].createElement(L["default"],null)},n.ScrollDom=function(){var e=document.body.clientHeight-44-103-40,t=n.props,a=t.barData,o=t.getList,l=t.listData,i=t.pending,r=t.end,u=n.state.index,s=a.data.slice(0);return s.unshift({id:0,name:"全部"}),E["default"].createElement("div",null,s.map(function(t,n){var a=t.id;if(n==u){var s=l("SHOP_PRODUCT_LIST"+n),c=i("SHOP_PRODUCT_LIST"+n),d=r("SHOP_PRODUCT_LIST"+n);return E["default"].createElement("div",{key:n,className:k["default"].products},E["default"].createElement(K["default"],{height:e,fetch:function(){o("SHOP_PRODUCT_LIST"+n,a)},isLoading:c,distance:20,endType:d,endload:E["default"].createElement("div",null)},s&&s.map(function(e,t){var n=e.id,a=e.name,o=e.cover,l=e.price,i=e.count;return E["default"].createElement("div",{className:k["default"].productBox,key:t},0==i&&E["default"].createElement("div",{className:k["default"].dhOver})||null,E["default"].createElement(N.Link,{to:"/user/goodsDetail/"+n},E["default"].createElement("img",{className:k["default"].products_img,src:o,alt:a}),E["default"].createElement("p",{className:k["default"].name},a)),E["default"].createElement(N.Link,{to:"/user/trueExchangeConfirm/"+n},E["default"].createElement("p",{className:k["default"].money},E["default"].createElement("img",{src:U["default"]}),E["default"].createElement("span",null,l))))})))}}))},n.loadEndDom=function(){var e=n.state,t=e.coins,a=e.index,o=n.props.barData.data,l=n.ScrollDom();return E["default"].createElement(S["default"],null,E["default"].createElement("div",{className:k["default"].top},E["default"].createElement("img",{src:I["default"],alt:""}),E["default"].createElement("span",{className:k["default"].coins},t),E["default"].createElement("span",{className:k["default"].coins_desc},"当前点币"),E["default"].createElement("span",{className:k["default"].sign,onClick:!n.state.isSign&&n.doSign},n.state.isSign&&"已签到"||"签到")),E["default"].createElement("div",{className:k["default"].items},E["default"].createElement("div",{className:k["default"].scrollBar},E["default"].createElement("ul",{ref:"ul"},E["default"].createElement("li",{className:0==a&&k["default"].active||null,onClick:function(){n.changeBar(0)}},"全部"),o&&o.map(function(e,t){var o=(e.id,e.name);return E["default"].createElement("li",{key:t,className:a==t+1&&k["default"].active||null,onClick:function(){n.changeBar(t+1)}},o)})))),l)},n.signSuccess=function(e){n.setState({isSign:!0,coins:e.data.coins});var t=JSON.parse(sessionStorage.getItem("bao-user"));t.isSign=!0,t.coins=e.data.coins,sessionStorage.setItem("bao-user",(0,m["default"])(t)),n.refs.SignModel.hide()},n.qdDom=function(){var e=n.state,t=e.coins,a=e.signNumbers,o=e.isSign;return E["default"].createElement(C["default"],{ref:"SignModel",coin:+t,days:+a,sign:o,callBackFun:function(e){n.signSuccess(e)}})},n.state={signNumbers:"",coins:"",isSign:"",index:0,id:0},n}return i(t,e),h(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(sessionStorage.getItem("bao-user"));e?this.set(e):this.props.getUser(),this.props.productBar()}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.user;t&&100==t.code&&this.set(t.data)}},{key:"render",value:function(){var e=this,t=this.state.coins,n=this.props.barData,a=this.loadDom(),o=void 0;return n&&(t||0==t)&&(a=this.loadEndDom(),o=this.qdDom()),E["default"].createElement("div",{className:k["default"].bg},E["default"].createElement(x["default"],{rightNode:E["default"].createElement(N.Link,{to:"/user/shopCenter"},E["default"].createElement("img",{src:B["default"],className:k["default"].rightNode})),backgroundColor:"#F76260",onLeft:function(){e.props.push("/home/myIndex")}},"积分商城"),o,a)}}]),t}(E["default"].Component),H=function(e){return{barData:e.infodata.getIn(["SHOP_PRODUCT_BAR","data"]),listData:function(t){return e.listdata.getIn([t,"data"])},pending:function(t){return e.listdata.getIn([t,"pending"])},end:function(t){return e.listdata.getIn([t,"pageEnd"])},user:e.infodata.getIn(["USER_INFO","data"])}},z=function(e){return{productBar:function(){e({type:"SHOP_PRODUCT_BAR"})},push:function(t){e((0,O.push)(t))},getList:function(t,n){e({type:"SHOP_PRODUCT_LIST",OtherKey:t,params:[10,2,n]})},getUser:function(){e({type:"USER_INFO"})}}};t["default"]=(0,w.connect)(H,z)(F)},954:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(870),l=a(o);t["default"]=l["default"]},1710:function(e,t,n){e.exports=n.p+"static/media/icon.3dd6b26b.png"},1711:function(e,t,n){e.exports=n.p+"static/media/shoppCenter.5dd2b489.png"},1713:function(e,t,n){e.exports=n.p+"static/media/total.3a64f443.png"}});