webpackJsonp([51],{1110:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=n(r),c=a(5),d=n(c),f=a(3),m=n(f),_=a(4),i=n(_),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),g=n(x),N=a(11),E=n(N),h=a(2190),y=n(h),b=a(37),v=n(b),j=a(10),B=a(9),D=a(20),q=a(18),T=n(q),k=function(e){function t(){var e,a,n,s;l(this,t);for(var r=arguments.length,u=Array(r),c=0;c<r;c++)u[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,i["default"])(t)).call.apply(e,[this].concat(u))),n.loadDom=function(){return g["default"].createElement(T["default"],null)},n.loadEndDom=function(){var e=n.props,t=e.infoData.data,a=e.params.id,l=e.location.query.access_sys,o=e.push,s=t.name,r=t.total,u=t.rate,c=t.term,d=t.type,f=t.interest_start_time,m=t.interest_end_time,_=t.repayment;return g["default"].createElement("div",{className:y["default"].content},g["default"].createElement("div",{className:y["default"].messageBox},g["default"].createElement("div",{className:y["default"].title},"产品信息"),g["default"].createElement("ul",{className:y["default"].messageUl},g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"产品名称"),g["default"].createElement("span",{className:y["default"].productName},s)),g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"借款总额"),g["default"].createElement("span",{className:y["default"].productName},r)),g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"约定年化收益率"),g["default"].createElement("span",{className:y["default"].productName},u,"%")),g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"产品期限"),g["default"].createElement("span",{className:y["default"].productName},c,"个月")),g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"产品到期日"),g["default"].createElement("span",{className:y["default"].productName},m)),g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"产品起息日"),g["default"].createElement("span",{className:y["default"].productName},f)),g["default"].createElement("li",null,g["default"].createElement("span",{className:y["default"].messageName},"产品类型"),g["default"].createElement("span",{className:y["default"].productName},d)))),g["default"].createElement("div",{className:y["default"].modeBox},g["default"].createElement("span",null,"还款方式"),g["default"].createElement("span",{className:y["default"].modeText},_)),g["default"].createElement(D.Link,{onClick:function(){o(l?"/user/zqSecurityPlan/"+a+"?access_sys=platform":"/user/zqSecurityPlan/"+a)}},g["default"].createElement("div",{className:y["default"].modeBox},g["default"].createElement("span",null,"产品合同"),g["default"].createElement("span",{className:y["default"].modeText},g["default"].createElement("img",{src:v["default"]})))))},s=a,o(n,s)}return s(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props.params.id,t=this.props.location.query.access_sys;this.props.getInfo(e,t)}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props,t=e.infoData,a=e.pop,n=this.loadDom();return t&&(n=this.loadEndDom()),g["default"].createElement("div",{className:y["default"].body},g["default"].createElement(E["default"],{onLeft:a},"产品详情"),n)}}]),t}(x.Component),w=function(e){return{infoData:e.infodata.getIn(["CREDITORS_PRODUCTINFO","data"])}},I=function(e){return{getInfo:function(t,a){e({type:"CREDITORS_PRODUCTINFO",params:[t,a]})},pop:function(){e((0,B.goBack)())},push:function(t){e((0,B.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"CREDITORS_PRODUCTINFO"})}}};t["default"]=(0,j.connect)(w,I)(k)},1269:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1110),o=n(l);t["default"]=o["default"]},1583:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___17_hB{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px;background-color:#f1eff5}.content___2j4xq{margin-top:15px}.content___2j4xq .messageBox___xvPjM{padding:0 15px;background-color:#fff;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.content___2j4xq .messageBox___xvPjM .title___19-Zf{padding:15px 0;font-size:16px;font-weight:700;border-bottom:1px solid #ddd;margin-right:-15px;margin-bottom:10px}.content___2j4xq .messageBox___xvPjM .messageUl___2I3nf{display:block;width:100%}.content___2j4xq .messageBox___xvPjM .messageUl___2I3nf li{display:block;padding:6px 0}.content___2j4xq .messageName___l9xjo{font-size:15px;color:#888}.content___2j4xq .productName___2r66a{font-size:15px;color:#000;float:right}.content___2j4xq .modeBox___3Kv-J{margin-top:15px;background-color:#fff;padding:15px;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4;font-size:15px;color:#000}.content___2j4xq .modeBox___3Kv-J .modeText___1aj7N{color:#888;float:right}.content___2j4xq .modeBox___3Kv-J .modeText___1aj7N img{width:10px;height:20px;margin-top:-2px}",""]),t.locals={body:"body___17_hB",content:"content___2j4xq",messageBox:"messageBox___xvPjM",title:"title___19-Zf",messageUl:"messageUl___2I3nf",messageName:"messageName___l9xjo",productName:"productName___2r66a",modeBox:"modeBox___3Kv-J",modeText:"modeText___1aj7N"}},2190:[2378,1583]});