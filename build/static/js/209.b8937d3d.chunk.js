webpackJsonp([209],{933:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=a(i),u=n(5),c=a(u),f=n(3),d=a(f),p=n(4),s=a(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),b=a(h),g=n(2060),v=a(g),x=n(12),E=a(x),y=n(11),K=n(10),P=function(e){function t(){return o(this,t),_(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return l(t,e),m(t,[{key:"render",value:function(){return b["default"].createElement("div",{className:v["default"].item},b["default"].createElement("div",{className:v["default"].left},this.props.name),b["default"].createElement("div",{className:v["default"].right,style:this.props.style,onClick:this.props.onClick},this.props.value))}}]),t}(h.Component),M=function(e){function t(){return o(this,t),_(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return l(t,e),m(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.push,a=this.props.params,o=a.name,_=a.month;return b["default"].createElement("div",{className:v["default"].root},b["default"].createElement(E["default"],{onLeft:t},"更多详情"),b["default"].createElement("div",{className:v["default"].container},b["default"].createElement("div",{className:v["default"].headPanel},b["default"].createElement("div",{className:v["default"].tip},"温馨提示：理财有风险 出借需谨慎"),b["default"].createElement("div",{className:v["default"].introduce},b["default"].createElement("h3",{className:v["default"].title},"简介"),b["default"].createElement("p",{className:v["default"].content},"“聚点+”是宝点网推出的新型智能出借服务工具。加入聚点+的资金将由系统在出借者认可的标的范围内分散匹配符合要求的标的，持续服务期间内系统在出借者授权下将所投标的回款自动再次匹配符合要求的标的，并在计划到期后自动转让退出。参考回报不代表对实际利息回报的承诺。"))),b["default"].createElement("div",{className:v["default"].items},b["default"].createElement(P,{name:"产品名称",value:o}),b["default"].createElement(P,{name:"计息方式",value:"预期利息=预期年化收益*借款期限*持有金额/12+预期年化收益*借款期限外多持有天数*金额/（12*退出月自然日）"}),b["default"].createElement(P,{name:"出借期限",value:_+"个月"}),b["default"].createElement(P,{name:"起投金额",value:"1000元起投，并以1000元的整倍数递增"}),b["default"].createElement(P,{name:"资金去向",value:"匹配优质个人或企业小额借款，安全有保障。风控采用四大行都在用的美国FICO技术，与合作机构双重验证"}),b["default"].createElement(P,{name:"退出规则",value:"聚点+对应期限到期后用户自发申请债权转让，若到期3内未自己申请，将由系统申请进行债权转让"}),b["default"].createElement(P,{name:"费用规则",value:"免手续费。宝点网目前为用户支付买入与取现产生的手续费。"}),b["default"].createElement(P,{name:"服务协议",value:"点击查看",style:{color:"#00a6e2"},onClick:function(){n("/serviceContract/123/0")}}))))}}]),t}(h.Component),k=function(e){return{}},w=function(e,t){return{pop:function(){e((0,K.goBack)())},push:function(t){e((0,K.push)(t))}}};t["default"]=(0,y.connect)(k,w)(M)},1459:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".root___3bMiK{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.root___3bMiK .container___1KPIJ .headPanel___L7qBg{background-color:#fff}.root___3bMiK .container___1KPIJ .headPanel___L7qBg .tip___1c0Mf{margin-top:10px;text-align:center;color:#777;padding:8px 0;border-bottom:1px solid #ddd}.root___3bMiK .container___1KPIJ .headPanel___L7qBg .introduce___1KMjF{padding:0 15px}.root___3bMiK .container___1KPIJ .headPanel___L7qBg .introduce___1KMjF .title___3zVRP{font-weight:400;padding:10px 0;font-size:16px}.root___3bMiK .container___1KPIJ .headPanel___L7qBg .introduce___1KMjF .content____s_jN{font-size:15px;line-height:1.5;padding-bottom:10px;color:#888}.root___3bMiK .container___1KPIJ .items___1C2X5{padding:0 15px;margin-top:10px;background-color:#fff;padding-bottom:15px}.root___3bMiK .container___1KPIJ .items___1C2X5 .item___3_oGA{padding-top:15px}.item___3_oGA{display:-webkit-box;display:-ms-flexbox;display:flex}.item___3_oGA .left___TvZUP{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;color:#888}.item___3_oGA .right___3hp7N{font-size:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:1.3;color:#000}",""]),t.locals={root:"root___3bMiK",container:"container___1KPIJ",headPanel:"headPanel___L7qBg",tip:"tip___1c0Mf",introduce:"introduce___1KMjF",title:"title___3zVRP",content:"content____s_jN",items:"items___1C2X5",item:"item___3_oGA",left:"left___TvZUP",right:"right___3hp7N"}},2060:[2319,1459]});