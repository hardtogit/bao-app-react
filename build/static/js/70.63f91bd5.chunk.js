webpackJsonp([70],{885:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),s=o(u),c=n(5),f=o(c),d=n(3),p=o(d),m=n(4),_=o(m),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,s["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),y=o(h),x=n(10),g=n(9),k=n(21),v=o(k),B=n(19),w=a(B),E=n(11),T=o(E),D=n(2268),S=o(D),U=n(236),N=o(U),A=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.listA=function(e){var t=e.buy_time,n=e.start_date,a=e.maturityDate;return[{title:"你已投资成功",date:t},{title:"起息日",date:n},{title:"到期日",date:a,curStep:!0}]},n.time=function(e,t){var a=new Date(1e3*parseInt(e)),o=a.getFullYear(),i=n.lessTen(a.getMonth()+1),r=n.lessTen(a.getDate()),l=n.lessTen(a.getHours()),u=n.lessTen(a.getMinutes()),s=n.lessTen(a.getSeconds());return 1==t?o+"-"+i+"-"+r+"  "+l+":"+u+":"+s:o+"-"+i+"-"+r},n.lessTen=function(e){return e<10?"0"+e:e},n.listB=function(e){var t=e.currentTime,a=e.maturityTime,o=n.time(t,1),i=n.time(t,2),r=n.time(a,2);return[{title:"你已投资成功",date:o},{title:"起息日",date:i},{title:"到期日",date:r,curStep:!0}]},n}return l(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"componentWillUnmount",value:function(){"A"==this.props.params.type?this.props.clearData("DEPOSIT_BUY"):this.props.clearData("DEPOSITBS_BUYRESULT")}},{key:"render",value:function(){var e=this,t=this.props,n=t.params.type,a=t.depositBuyData,o=t.depositsbBuyData,i=void 0,r=void 0;return"A"==n?(i=a&&a.data||{},r=this.listA(i)):(i=o&&o.data.additional||{},r=this.listB(i)),y["default"].createElement("div",{className:S["default"].root},y["default"].createElement(T["default"],{onLeft:this.props.goBack},"投资成功"),y["default"].createElement("div",{className:S["default"].content},y["default"].createElement("div",{className:S["default"].amount},y["default"].createElement("span",null,"投资金额"),y["default"].createElement("span",null,"¥",i&&i.amount||"")),y["default"].createElement("div",{className:S["default"].timeLine},y["default"].createElement(N["default"],{data:r}))),y["default"].createElement("div",{onClick:function(){e.props.push("/user/setting/Manage")},className:S["default"].finish},"完成"))}}]),t}(y["default"].Component),I=function(e,t){return{depositBuyData:e.infodata.getIn([w.DEPOSIT_BUY,"data"]),depositsbBuyData:e.infodata.getIn([w.DEPOSITBS_BUYRESULT,"data"])}},M=function(e,t){return{push:function(t){e((0,g.push)(t))},getUser:function(){e({type:"USER_INFO"})},clearData:function(t){e({type:"CLEAR_INFO_DATA",key:t})},goBack:function(){e((0,g.goBack)())}}};t["default"]=(0,x.connect)(I,M)((0,v["default"])(A))},1509:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".root___1nuUq{height:100%;background-color:#f0eff5;padding-top:44px}.content___2w8A8{background-color:#fff;margin-top:15px;border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding-bottom:8px}.amount___3ecHB{height:44px;padding:0 15px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #ddd}.amount___3ecHB>span:nth-child(1){font-size:14px;color:#888}.amount___3ecHB>span:nth-child(2){font-size:16px}.timeLine___3NMVS{padding:26px 0 0 15px}.finish___NUmBh{margin:40px 15px 0;border-radius:3px;color:#fff;background-color:#00a6e2;height:50px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),t.locals={root:"root___1nuUq",content:"content___2w8A8",amount:"amount___3ecHB",timeLine:"timeLine___3NMVS",finish:"finish___NUmBh"}},2268:[2361,1509]});