webpackJsonp([211],{1020:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),u=n(5),f=a(u),c=n(3),s=a(c),d=n(4),p=a(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,i["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),x=a(h),v=n(2128),y=a(v),b=n(10),g=a(b),E=n(9),k=n(8),w=function(e){function t(){return o(this,t),l(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return _(t,e),m(t,[{key:"render",value:function(){return x["default"].createElement("div",{className:y["default"].item},x["default"].createElement("div",{className:y["default"].left},this.props.name),x["default"].createElement("div",{className:y["default"].right,style:this.props.style,onClick:this.props.onClick},this.props.value))}}]),t}(h.Component),C=function(e){function t(){return o(this,t),l(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return _(t,e),m(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.push,a=this.props.params,o=a.name,l=a.month;return x["default"].createElement("div",{className:y["default"].root},x["default"].createElement(g["default"],{onLeft:t},"更多详情"),x["default"].createElement("div",{className:y["default"].container},x["default"].createElement("div",{className:y["default"].headPanel},x["default"].createElement("div",{className:y["default"].tip},"温馨提示：理财有风险 投资需谨慎"),x["default"].createElement("div",{className:y["default"].introduce},x["default"].createElement("h3",{className:y["default"].title},"简介"),x["default"].createElement("p",{className:y["default"].content},"“优享+”是宝点网推出的新型智能投资服务工具。加入优享+的资金将由系统在投资者认可的标的范围内分散匹配符合要求的标的，持续服务期间内系统在投资者授权下将所投标的回款自动再次匹配符合要求的标的，并在计划到期后自动转让退出。参考回报不代表对实际利息回报的承诺。"))),x["default"].createElement("div",{className:y["default"].items},x["default"].createElement(w,{name:"产品名称",value:o}),x["default"].createElement(w,{name:"计息方式",value:"预期利息=预期年化收益*借款期限*持有金额/12+预期年化收益*借款期限外多持有天数*金额/（12*退出月自然日）"}),x["default"].createElement(w,{name:"投资期限",value:l+"个月"}),x["default"].createElement(w,{name:"起投金额",value:"1000元起投，并以1000元的整倍数递增"}),x["default"].createElement(w,{name:"资金去向",value:"匹配优质个人或企业小额借款，安全有保障。风控采用四大行都在用的美国FICO技术，与合作机构双重验证"}),x["default"].createElement(w,{name:"退出规则",value:"优享+对应期限到期后用户自发申请债权转让，若到期3内未自己申请，将由系统申请进行债权转让"}),x["default"].createElement(w,{name:"费用规则",value:"免手续费。宝点网目前为用户支付买入与取现产生的手续费。"}),x["default"].createElement(w,{name:"服务协议",value:"点击查看",style:{color:"#00a6e2"},onClick:function(){n("/serviceContract/123/0?product=1")}}))))}}]),t}(h.Component),N=function(e){return{}},P=function(e,t){return{pop:function(){e((0,k.goBack)())},push:function(t){e((0,k.push)(t))}}};t["default"]=(0,E.connect)(N,P)(C)},1548:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".root___22yfn{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.root___22yfn .container___18s17 .headPanel___1s7K8{background-color:#fff}.root___22yfn .container___18s17 .headPanel___1s7K8 .tip___2ocOo{margin-top:10px;text-align:center;color:#777;padding:8px 0;border-bottom:1px solid #ddd}.root___22yfn .container___18s17 .headPanel___1s7K8 .introduce___s7jIV{padding:0 15px}.root___22yfn .container___18s17 .headPanel___1s7K8 .introduce___s7jIV .title___3fcBn{font-weight:400;padding:10px 0;font-size:16px}.root___22yfn .container___18s17 .headPanel___1s7K8 .introduce___s7jIV .content___1lP-v{font-size:15px;line-height:1.5;padding-bottom:10px;color:#888}.root___22yfn .container___18s17 .items___1taQC{padding:0 15px;margin-top:10px;background-color:#fff;padding-bottom:15px}.root___22yfn .container___18s17 .items___1taQC .item___kDxZM{padding-top:15px}.item___kDxZM{display:-webkit-box;display:-ms-flexbox;display:flex}.item___kDxZM .left___2nGAY{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;color:#888}.item___kDxZM .right___fMrG7{font-size:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:1.3;color:#000}",""]),t.locals={root:"root___22yfn",container:"container___18s17",headPanel:"headPanel___1s7K8",tip:"tip___2ocOo",introduce:"introduce___s7jIV",title:"title___3fcBn",content:"content___1lP-v",items:"items___1taQC",item:"item___kDxZM",left:"left___2nGAY",right:"right___fMrG7"}},2128:[2355,1548]});