webpackJsonp([180],{1101:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),d=n(r),u=a(5),f=n(u),c=a(3),p=n(c),s=a(4),_=n(s),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),v=a(10),b=a(12),E=n(b),x=a(26),y=n(x),D=a(1812),w=n(D),T=a(2227),M=n(T),N=a(11),k=function(e){function t(e){i(this,t);var a=l(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return a.loadDom=function(){return g["default"].createElement(y["default"],null)},a.loadEndDom=function(e){var t=e.title,a=e.ctime,n=e.content;return g["default"].createElement("div",{className:M["default"].detailWraper},g["default"].createElement("img",{src:w["default"],className:M["default"].xiongImg}),g["default"].createElement("div",{className:M["default"].detailMain},g["default"].createElement("div",{className:M["default"].detailTitle},g["default"].createElement("p",null,t)),g["default"].createElement("div",{className:M["default"].content,dangerouslySetInnerHTML:{__html:n}}),g["default"].createElement("div",{className:M["default"].detailBtm},g["default"].createElement("p",null,"更新时间：",a))))},a.state={title:"",date:"",description:""},a}return o(t,e),m(t,[{key:"componentWillMount",value:function(){var e=this.props.params.id;this.props.getNoticeDetail(e)}},{key:"render",value:function(){var e=this.props.shopMessageData,t=void 0;return t=this.loadDom(),e&&(t=this.loadEndDom(e.data.detail)),g["default"].createElement("div",{className:M["default"].finderDetail},g["default"].createElement("div",{className:M["default"].finderDetailHeader},g["default"].createElement(E["default"],{title:"商城通知",onLeft:this.props.pop,backgroundColor:"#fff",color:"#666"})),t)}}]),t}(h.Component),I=function(e,t){return{shopMessageData:e.infodata.getIn(["GET_NOTICE_DETAIL","data"])}},O=function(e,t){return{getNoticeDetail:function(t){e({type:"GET_NOTICE_DETAIL",params:[t]})},pop:function(){e((0,N.goBack)())}}};t["default"]=(0,v.connect)(I,O)(k)},1675:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".finderDetail___AT04n{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto}.finderDetailHeader___1Ocvh{position:relative;z-index:999}.detailWraper___3W8eY{width:100%;text-align:center}.xiongImg___zPeL_{width:30%;margin-top:20px}.detailMain___2yQOS{width:90%;margin:0 auto;background-color:#fff;border-radius:20px;overflow:hidden;position:relative}.detailMain___2yQOS .detailTitle___1u4jQ{width:100%;height:50px;background-image:url("+a(1854)+");background-size:100% 100%}.detailMain___2yQOS .detailTitle___1u4jQ p{height:50px;line-height:50px;color:#fff}.content___3p6ZB{text-align:left;padding:20px 20px 40px;font-size:14px}.detailBtm___3rEbm{width:100%;height:26px;background-color:#fe684b;position:absolute;bottom:0}.detailBtm___3rEbm p{color:#fff;font-size:12px;line-height:26px}",""]),t.locals={finderDetail:"finderDetail___AT04n",finderDetailHeader:"finderDetailHeader___1Ocvh",detailWraper:"detailWraper___3W8eY",xiongImg:"xiongImg___zPeL_",detailMain:"detailMain___2yQOS",detailTitle:"detailTitle___1u4jQ",content:"content___3p6ZB",detailBtm:"detailBtm___3rEbm"}},1812:function(e,t,a){e.exports=a.p+"static/media/detail.1e6d89fe.png"},1854:function(e,t,a){e.exports=a.p+"static/media/titlebg.a4e13fd1.png"},2227:function(e,t,a){var n=a(1675);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});