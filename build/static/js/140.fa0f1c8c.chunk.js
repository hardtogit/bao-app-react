webpackJsonp([140],{18:function(e,t,a){e.exports=a.p+"static/media/arrow2.4ba5831c.png"},1088:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,i["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),u=o(s),c=a(5),d=o(c),f=a(3),i=o(f),_=a(4),m=o(_),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),g=a(1),E=o(g),x=a(10),y=o(x),N=a(2155),h=o(N),b=a(18),v=o(b),D=a(9),I=a(8),T=a(19),w=a(16),B=o(w),R=function(e){function t(){var e,a,o,r;l(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return a=o=n(this,(e=t.__proto__||(0,m["default"])(t)).call.apply(e,[this].concat(u))),o.loadDom=function(){return E["default"].createElement(B["default"],null)},o.loadEndDom=function(){var e=o.props,t=e.infoData.data,a=(e.params.id,e.location.query),l=a.access_sys,n=a.borrow_id,r=(e.push,e.contractData),s=void 0;s=l?r&&0!=r.data.length||r&&300==r.code?"/fillDetail/"+n+"?type=A":"/user/zqSecurityPlan/"+n+"?access_sys=platform":r&&0!=r.data.length||r&&300==r.code?"/fillDetail/"+n+"?type=D":"/user/zqSecurityPlan/"+n;var u=t.name,c=t.total,d=t.rate,f=t.term,i=t.type,_=t.interest_start_time,m=t.interest_end_time,p=t.repayment;return E["default"].createElement("div",{className:h["default"].content},E["default"].createElement("div",{className:h["default"].messageBox},E["default"].createElement("div",{className:h["default"].title},"产品信息"),E["default"].createElement("ul",{className:h["default"].messageUl},E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"产品名称"),E["default"].createElement("span",{className:h["default"].productName},u)),E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"借款总额"),E["default"].createElement("span",{className:h["default"].productName},c)),E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"约定年化收益率"),E["default"].createElement("span",{className:h["default"].productName},d,"%")),E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"产品期限"),E["default"].createElement("span",{className:h["default"].productName},f,"个月")),E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"产品到期日"),E["default"].createElement("span",{className:h["default"].productName},m)),E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"产品起息日"),E["default"].createElement("span",{className:h["default"].productName},_)),E["default"].createElement("li",null,E["default"].createElement("span",{className:h["default"].messageName},"产品类型"),E["default"].createElement("span",{className:h["default"].productName},i)))),E["default"].createElement("div",{className:h["default"].modeBox},E["default"].createElement("span",null,"还款方式"),E["default"].createElement("span",{className:h["default"].modeText},p)),E["default"].createElement(T.Link,{to:s},E["default"].createElement("div",{className:h["default"].modeBox},E["default"].createElement("span",null,"产品合同"),E["default"].createElement("span",{className:h["default"].modeText},E["default"].createElement("img",{src:v["default"]})))))},r=a,n(o,r)}return r(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props.params.id,t=this.props.location.query.access_sys;this.props.getInfo(e,t),t?this.props.getDetailByProductId({borrow_id:this.props.location.query.borrow_id,product_type:"A"}):this.props.getDetailByProductId({borrow_id:this.props.location.query.borrow_id,product_type:"D"})}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.infoData,a=e.pop,o=this.loadDom();return t&&(o=this.loadEndDom()),E["default"].createElement("div",{className:h["default"].body},E["default"].createElement(y["default"],{onLeft:a},"产品详情"),o)}}]),t}(g.Component),U=function(e){return{infoData:e.infodata.getIn(["CREDITORS_PRODUCTINFO","data"]),contractData:e.infodata.getIn(["GET_DETAIL_BY_PRODUCT_ID","data"])}},O=function(e){return{getInfo:function(t,a){e({type:"CREDITORS_PRODUCTINFO",params:[t,a]})},getDetailByProductId:function(t){e({type:"GET_DETAIL_BY_PRODUCT_ID",params:[t]})},pop:function(){e((0,I.goBack)())},push:function(t){e((0,I.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"CREDITORS_PRODUCTINFO"})}}};t["default"]=(0,D.connect)(U,O)(R)},1242:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1088),n=o(l);t["default"]=n["default"]},1575:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___1Mvgj{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px;background-color:#f1eff5}.content___TfxI3{margin-top:15px}.content___TfxI3 .messageBox___3vEDs{padding:0 15px;background-color:#fff;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.content___TfxI3 .messageBox___3vEDs .title___1ENu9{padding:15px 0;font-size:16px;font-weight:700;border-bottom:1px solid #ddd;margin-right:-15px;margin-bottom:10px}.content___TfxI3 .messageBox___3vEDs .messageUl___25Jyc{display:block;width:100%}.content___TfxI3 .messageBox___3vEDs .messageUl___25Jyc li{display:block;padding:6px 0}.content___TfxI3 .messageName___35Crv{font-size:15px;color:#888}.content___TfxI3 .productName___VcwvE{font-size:15px;color:#000;float:right}.content___TfxI3 .modeBox___4Ug2_{margin-top:15px;background-color:#fff;padding:15px;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4;font-size:15px;color:#000}.content___TfxI3 .modeBox___4Ug2_ .modeText___2RnKI{color:#888;float:right}.content___TfxI3 .modeBox___4Ug2_ .modeText___2RnKI img{width:10px;height:20px;margin-top:-2px}",""]),t.locals={body:"body___1Mvgj",content:"content___TfxI3",messageBox:"messageBox___3vEDs",title:"title___1ENu9",messageUl:"messageUl___25Jyc",messageName:"messageName___35Crv",productName:"productName___VcwvE",modeBox:"modeBox___4Ug2_",modeText:"modeText___2RnKI"}},2155:function(e,t,a){var o=a(1575);"string"==typeof o&&(o=[[e.id,o,""]]);a(7)(o,{});o.locals&&(e.exports=o.locals)}});