webpackJsonp([138],{18:function(e,t,a){e.exports=a.p+"static/media/arrow2.4ba5831c.png"},1107:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),u=l(s),c=a(5),d=l(c),i=a(3),f=l(i),m=a(4),_=l(m),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,u["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),N=a(1),g=l(N),y=a(10),E=l(y),x=a(2158),h=l(x),b=a(18),D=l(b),v=a(9),T=a(8),I=a(19),B=a(16),w=l(B),P=function(e){function t(){var e,a,l,r;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return a=l=n(this,(e=t.__proto__||(0,_["default"])(t)).call.apply(e,[this].concat(u))),l.loadDom=function(){return g["default"].createElement(w["default"],null)},l.loadEndDom=function(){var e=l.props,t=e.infoData.data,a=e.params.id,o=e.location.query.access_sys,n=e.contractData,r=void 0;r=o?n&&0!=n.data.length||n&&300==n.code?"/fillDetail/"+a+"?type=A":"/user/securityPlan/"+a+"?access_sys=platform":n&&0!=n.data.length||n&&300==n.code?"/fillDetail/"+a+"?type=D":"/user/securityPlan/"+a;var s=t.name,u=t.total,c=t.rate,d=t.term,i=t.type,f=t.interest_start_time,m=t.interest_end_time,_=t.repayment;return g["default"].createElement("div",{className:h["default"].content},g["default"].createElement("div",{className:h["default"].messageBox},g["default"].createElement("div",{className:h["default"].title},"产品信息"),g["default"].createElement("ul",{className:h["default"].messageUl},g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"产品名称"),g["default"].createElement("span",{className:h["default"].productName},s)),g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"借款总额"),g["default"].createElement("span",{className:h["default"].productName},u)),g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"约定年化收益率"),g["default"].createElement("span",{className:h["default"].productName},c,"%")),g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"产品期限"),g["default"].createElement("span",{className:h["default"].productName},d,"个月")),g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"产品到期日"),g["default"].createElement("span",{className:h["default"].productName},m)),g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"产品起息日"),g["default"].createElement("span",{className:h["default"].productName},f)),g["default"].createElement("li",null,g["default"].createElement("span",{className:h["default"].messageName},"产品类型"),g["default"].createElement("span",{className:h["default"].productName},function(){switch(i){case 1:return"信用";case 5:return"抵押";default:return"抵押"}}())))),g["default"].createElement("div",{className:h["default"].modeBox},g["default"].createElement("span",null,"还款方式"),g["default"].createElement("span",{className:h["default"].modeText},_)),g["default"].createElement(I.Link,{to:r},g["default"].createElement("div",{className:h["default"].modeBox},g["default"].createElement("span",null,"产品合同"),g["default"].createElement("span",{className:h["default"].modeText},g["default"].createElement("img",{src:D["default"]})))))},r=a,n(l,r)}return r(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props.params.id,t=this.props.location.query.access_sys;t?(this.props.getInfo(e,t),this.props.getDetailByProductId({borrow_id:e,product_type:"A"})):(this.props.getInfo(e),this.props.getDetailByProductId({borrow_id:e,product_type:"D"}))}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.infoData,a=e.pop,l=this.loadDom();return t&&(l=this.loadEndDom()),g["default"].createElement("div",{className:h["default"].body},g["default"].createElement(E["default"],{onLeft:a},"产品详情"),l)}}]),t}(N.Component),k=function(e){return{infoData:e.infodata.getIn(["DIRECT_INVEST_PRODUCT_INFO","data"]),contractData:e.infodata.getIn(["GET_DETAIL_BY_PRODUCT_ID","data"])}},G=function(e){return{getInfo:function(t,a){e({type:"DIRECT_INVEST_PRODUCT_INFO",params:[t,a]})},pop:function(){e((0,T.goBack)())},getDetailByProductId:function(t){e({type:"GET_DETAIL_BY_PRODUCT_ID",params:[t]})},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"DIRECT_INVEST_PRODUCT_INFO"})}}};t["default"]=(0,v.connect)(k,G)(P)},1232:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1107),n=l(o);t["default"]=n["default"]},1577:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___BQP0w{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px;background-color:#f1eff5}.content___1GyoN{margin-top:15px}.content___1GyoN .messageBox___3xWel{padding:0 15px;background-color:#fff;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.content___1GyoN .messageBox___3xWel .title___1ZfRe{padding:15px 0;font-size:16px;font-weight:700;border-bottom:1px solid #ddd;margin-right:-15px;margin-bottom:10px}.content___1GyoN .messageBox___3xWel .messageUl___3Fhqz{display:block;width:100%}.content___1GyoN .messageBox___3xWel .messageUl___3Fhqz li{display:block;padding:6px 0}.content___1GyoN .messageName___1OoHb{font-size:15px;color:#888}.content___1GyoN .productName___EWX4I{font-size:15px;color:#000;float:right}.content___1GyoN .modeBox___Mml7c{margin-top:15px;background-color:#fff;padding:15px;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4;font-size:15px;color:#000}.content___1GyoN .modeBox___Mml7c .modeText___1viuT{color:#888;float:right}.content___1GyoN .modeBox___Mml7c .modeText___1viuT img{width:10px;height:20px;margin-top:-2px}",""]),t.locals={body:"body___BQP0w",content:"content___1GyoN",messageBox:"messageBox___3xWel",title:"title___1ZfRe",messageUl:"messageUl___3Fhqz",messageName:"messageName___1OoHb",productName:"productName___EWX4I",modeBox:"modeBox___Mml7c",modeText:"modeText___1viuT"}},2158:function(e,t,a){var l=a(1577);"string"==typeof l&&(l=[[e.id,l,""]]);a(7)(l,{});l.locals&&(e.exports=l.locals)}});