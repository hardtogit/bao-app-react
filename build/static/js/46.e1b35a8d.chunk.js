webpackJsonp([46],{943:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(2),s=l(u),d=a(5),c=l(d),m=a(3),f=l(m),_=a(4),i=l(_),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,s["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),N=a(1),g=l(N),E=a(11),x=l(E),y=a(2168),b=l(y),h=a(37),v=l(h),T=a(10),w=a(9),B=a(20),D=a(18),I=l(D),k=function(e){function t(){var e,a,l,r;n(this,t);for(var u=arguments.length,s=Array(u),d=0;d<u;d++)s[d]=arguments[d];return a=l=o(this,(e=t.__proto__||(0,i["default"])(t)).call.apply(e,[this].concat(s))),l.loadDom=function(){return g["default"].createElement(I["default"],null)},l.loadEndDom=function(){var e=l.props,t=e.infoData.data,a=e.params.id,n=t.name,o=t.total,r=t.rate,u=t.term,s=t.type,d=t.interest_start_time,c=t.interest_end_time,m=t.repayment;return g["default"].createElement("div",{className:b["default"].content},g["default"].createElement("div",{className:b["default"].messageBox},g["default"].createElement("div",{className:b["default"].title},"产品信息"),g["default"].createElement("ul",{className:b["default"].messageUl},g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"产品名称"),g["default"].createElement("span",{className:b["default"].productName},n)),g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"借款总额"),g["default"].createElement("span",{className:b["default"].productName},o)),g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"约定年化收益率"),g["default"].createElement("span",{className:b["default"].productName},r,"%")),g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"产品期限"),g["default"].createElement("span",{className:b["default"].productName},u,"个月")),g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"产品到期日"),g["default"].createElement("span",{className:b["default"].productName},c)),g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"产品起息日"),g["default"].createElement("span",{className:b["default"].productName},d)),g["default"].createElement("li",null,g["default"].createElement("span",{className:b["default"].messageName},"产品类型"),g["default"].createElement("span",{className:b["default"].productName},function(){switch(s){case 1:return"信用";case 5:return"抵押";default:return"抵押"}}())))),g["default"].createElement("div",{className:b["default"].modeBox},g["default"].createElement("span",null,"还款方式"),g["default"].createElement("span",{className:b["default"].modeText},m)),g["default"].createElement(B.Link,{to:"/user/securityPlan/"+a},g["default"].createElement("div",{className:b["default"].modeBox},g["default"].createElement("span",null,"产品合同"),g["default"].createElement("span",{className:b["default"].modeText},g["default"].createElement("img",{src:v["default"]})))))},r=a,o(l,r)}return r(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props.params.id;this.props.getInfo(e)}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.infoData,a=e.pop,l=this.loadDom();return t&&(l=this.loadEndDom()),g["default"].createElement("div",{className:b["default"].body},g["default"].createElement(x["default"],{onLeft:a},"产品详情"),l)}}]),t}(N.Component),G=function(e){return{infoData:e.infodata.getIn(["DIRECT_INVEST_PRODUCT_INFO","data"])}},O=function(e){return{getInfo:function(t){e({type:"DIRECT_INVEST_PRODUCT_INFO",params:[t]})},pop:function(){e((0,w.goBack)())},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"DIRECT_INVEST_PRODUCT_INFO"})}}};t["default"]=(0,T.connect)(G,O)(k)},1072:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(943),o=l(n);t["default"]=o["default"]},1390:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___BQP0w{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px;background-color:#f1eff5}.content___1GyoN{margin-top:15px}.content___1GyoN .messageBox___3xWel{padding:0 15px;background-color:#fff;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.content___1GyoN .messageBox___3xWel .title___1ZfRe{padding:15px 0;font-size:16px;font-weight:700;border-bottom:1px solid #ddd;margin-right:-15px;margin-bottom:10px}.content___1GyoN .messageBox___3xWel .messageUl___3Fhqz{display:block;width:100%}.content___1GyoN .messageBox___3xWel .messageUl___3Fhqz li{display:block;padding:6px 0}.content___1GyoN .messageName___1OoHb{font-size:15px;color:#888}.content___1GyoN .productName___EWX4I{font-size:15px;color:#000;float:right}.content___1GyoN .modeBox___Mml7c{margin-top:15px;background-color:#fff;padding:15px;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4;font-size:15px;color:#000}.content___1GyoN .modeBox___Mml7c .modeText___1viuT{color:#888;float:right}.content___1GyoN .modeBox___Mml7c .modeText___1viuT img{width:10px;height:20px;margin-top:-2px}",""]),t.locals={body:"body___BQP0w",content:"content___1GyoN",messageBox:"messageBox___3xWel",title:"title___1ZfRe",messageUl:"messageUl___3Fhqz",messageName:"messageName___1OoHb",productName:"productName___EWX4I",modeBox:"modeBox___Mml7c",modeText:"modeText___1viuT"}},2168:[2354,1390]});