webpackJsonp([203],{1039:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d,f,o=a(2),c=l(o),u=a(5),s=l(u),_=a(3),m=l(_),p=a(4),v=l(p),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,c["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),E=a(1),h=l(E),g=a(2363),N=l(g),x=a(12),y=l(x),w=a(11),k=a(10),B=a(8),H=l(B),J=a(23),W=l(J),I=(f=d=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||(0,v["default"])(t)).call(this,e));return a.loadEnd=function(){var e=a.props.data.data,t=e.name,l=e.has_borrow,n=e.rate,r=e.month,i=e.value_start_date,d=e.value_end_date,f=e.type,o=e.total,c=e.repayment_type;switch(parseInt(f)){case 1:f="信用";break;case 5:f="抵押"}switch(parseInt(c)){case 1:c="按天到期";break;case 2:c="等额本息";break;case 3:c="按季分期";break;case 4:c="每月还息到期还本";break;case 5:c="到期还本付息"}return h["default"].createElement("div",null,h["default"].createElement("div",{className:N["default"].items},h["default"].createElement("div",{className:N["default"].title},"产品信息"),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"产品名称"),h["default"].createElement("div",{className:N["default"].right},t)),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"借款总额"),h["default"].createElement("div",{className:N["default"].right},l)),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"预期年化收益率"),h["default"].createElement("div",{className:N["default"].right},n)),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"产品期限"),h["default"].createElement("div",{className:N["default"].right},r,"月")),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"产品起息日"),h["default"].createElement("div",{className:N["default"].right},i)),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"产品到息日"),h["default"].createElement("div",{className:N["default"].right},d)),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"产品类型"),h["default"].createElement("div",{className:N["default"].right},f)),h["default"].createElement("div",{className:N["default"].item},h["default"].createElement("div",{className:N["default"].left},"转让价值"),h["default"].createElement("div",{className:N["default"].right},o))),h["default"].createElement("div",{className:(0,H["default"])(N["default"].item,N["default"].backWay)},h["default"].createElement("div",{className:N["default"].left},"还款方式"),h["default"].createElement("div",{className:N["default"].right},c)),h["default"].createElement("div",{className:(0,H["default"])(N["default"].item,N["default"].backWay)},h["default"].createElement("div",{className:N["default"].left},"产品合同"),h["default"].createElement("div",{className:N["default"].right}," ",h["default"].createElement("span",{onClick:function(){a.props.push("/fillDetail/"+a.props.params.id+"?type=G")},className:N["default"].arrow}))))},a.state={isOpen:!1},a}return i(t,e),b(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.params.id,a=e.getBorrowInfo;a(t)}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.data,l=void 0;return l=a?this.loadEnd():h["default"].createElement(W["default"],null),h["default"].createElement("div",{className:N["default"].container},h["default"].createElement(y["default"],{onLeft:t},"产品信息"),l)}}]),t}(E.Component),d.defaultProps={},f),M=function(e){return{data:e.infodata.getIn(["GATHER_BID_DETAIL","data"])}},P=function(e,t){return{pop:function(){e((0,k.goBack)())},getBorrowInfo:function(t){e({type:"GATHER_BID_DETAIL",params:[t]})}}};t["default"]=(0,w.connect)(M,P)(I)},1553:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3BH_J{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___3BH_J .items___25oB3{background-color:#fff;padding:9px 0;padding-left:15px}.container___3BH_J .items___25oB3 .title___Oz5ia{border-bottom:1px solid #ddd;font-size:14px;padding:6px 0 9px}.container___3BH_J .item___2M2u6{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px 15px 6px 0;font-size:14px}.container___3BH_J .item___2M2u6 .left___3yWwV{color:#666;-webkit-box-flex:1;-ms-flex:1;flex:1}.container___3BH_J .item___2M2u6 .right___1RSRn{text-align:right}.container___3BH_J .backWay___257ks{margin-top:15px;background-color:#fff;padding:10px 15px}.container___3BH_J .backWay___257ks .left___3yWwV{color:#000}.container___3BH_J .arrow___2FPnX{position:relative;left:4px;bottom:1px}.container___3BH_J .arrow___2FPnX:after,.container___3BH_J .arrow___2FPnX:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.container___3BH_J .arrow___2FPnX:before{border-left-color:#b6b6b6;right:-2px}",""]),t.locals={container:"container___3BH_J",items:"items___25oB3",title:"title___Oz5ia",item:"item___2M2u6",left:"left___3yWwV",right:"right___1RSRn",backWay:"backWay___257ks",arrow:"arrow___2FPnX"}},2363:[2578,1553]});