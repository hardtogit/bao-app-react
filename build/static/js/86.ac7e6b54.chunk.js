webpackJsonp([86],{1015:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),d=l(o),f=a(5),_=l(f),u=a(3),s=l(u),c=a(4),m=l(c),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,d["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),h=a(1),x=l(h),g=a(2355),b=l(g),v=a(10),k=l(v),E=a(21),y=l(E),w=a(9),N=a(8),I=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return a.state={data:{},type:""},a}return i(t,e),p(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.props.data||this.refs.alert.show({content:"请先选择你需要查看的聚点+",okText:"确定",okCallback:function(){e.props.pop()}}),this.setState({data:this.props.data,type:this.props.data&&this.props.data.type||""})}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e};var t=this.props,a=t.pop,l=t.push,n=this.state,r=n.data,i=n.type;return x["default"].createElement("div",{className:b["default"].container},x["default"].createElement(k["default"],{onLeft:a},"聚点+详情"),r&&x["default"].createElement("div",null,x["default"].createElement("div",{className:b["default"].header},x["default"].createElement("div",{className:b["default"].left},r.name),x["default"].createElement("div",{className:b["default"].right},i)),x["default"].createElement("div",{className:b["default"].center},x["default"].createElement("div",{className:b["default"].num},r.plan_income),x["default"].createElement("div",{className:b["default"].title},"预期收益(元)")),x["default"].createElement("div",{className:b["default"].detailItem},x["default"].createElement("div",{className:b["default"].item},x["default"].createElement("div",{className:b["default"].left},"加入金额"),x["default"].createElement("div",{className:b["default"].right},r.invest_money)),x["default"].createElement("div",{className:b["default"].item},x["default"].createElement("div",{className:b["default"].left},"预计年化利率"),x["default"].createElement("div",{className:b["default"].right},r.rate,"%")),x["default"].createElement("div",{className:b["default"].item},x["default"].createElement("div",{className:b["default"].left},"锁定期限(月)"),x["default"].createElement("div",{className:b["default"].right},r.month)),x["default"].createElement("div",{className:b["default"].item},x["default"].createElement("div",{className:b["default"].left},"产品起息日"),x["default"].createElement("div",{className:b["default"].right},new Date(1e3*r.start_time).format("yyyy-MM-dd"))),x["default"].createElement("div",{className:b["default"].item},x["default"].createElement("div",{className:b["default"].left},"锁定结束时间"),x["default"].createElement("div",{className:b["default"].right},new Date(1e3*r.end_time).format("yyyy-MM-dd")))),x["default"].createElement("div",{className:b["default"].linkItem},x["default"].createElement("div",{className:b["default"].item,onClick:function(){l("/user/gatherProjects/"+r.invest_id+"/"+r.type)}},x["default"].createElement("div",{className:b["default"].left},"投资项目"),x["default"].createElement("span",{className:b["default"].arrow})),x["default"].createElement("div",{className:b["default"].item},x["default"].createElement("div",{className:b["default"].left,onClick:function(){e.props.push("/serviceContract/"+r.invest_id+"/1")}},"查看协议"),x["default"].createElement("span",{className:b["default"].arrow})))),x["default"].createElement(y["default"],{ref:"alert"}," "))}}]),t}(h.Component),D=function(e){return{data:e.regStore.getIn(["SAVE_GATHER_DATA","data"])}},M=function(e,t){return{pop:function(){e((0,N.goBack)())},push:function(t){e((0,N.push)(t))},replace:function(t){e((0,N.replace)(t))}}};t["default"]=(0,w.connect)(D,M)(I)},1488:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___1kWCq{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.header___1rrXL{padding:10px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.header___1rrXL .left___2tiUH,.header___1rrXL .right___1Ar4P{-webkit-box-flex:1;-ms-flex:1;flex:1}.header___1rrXL .right___1Ar4P{text-align:right;color:#888}.center___3n409{margin-top:10px;background-color:#fff;padding:30px 15px;text-align:center}.center___3n409 .num___c8wFJ{font-size:32px;color:#f70}.center___3n409 .title___10DvB{font-size:12px;padding-top:6px;color:#999}.detailItem___16hDt{margin-top:10px;padding-left:15px;background-color:#fff;box-sizing:border-box}.detailItem___16hDt .item___3fupk{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;border-bottom:1px solid #ddd}.detailItem___16hDt .item___3fupk:last-child{border-bottom:none}.detailItem___16hDt .item___3fupk .left___2tiUH{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px}.detailItem___16hDt .item___3fupk .right___1Ar4P{text-align:right;padding-right:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#888}.linkItem___14a6l{margin-top:10px;padding-left:15px;background-color:#fff;box-sizing:border-box}.linkItem___14a6l .item___3fupk{position:relative;padding:10px 0;border-bottom:1px solid #ddd}.linkItem___14a6l .item___3fupk:last-child{border-bottom:none}.linkItem___14a6l .item___3fupk .left___2tiUH{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px}.linkItem___14a6l .item___3fupk .arrow___du7KV{-webkit-box-flex:1;-ms-flex:1;flex:1}.linkItem___14a6l .item___3fupk .arrow___du7KV:after,.linkItem___14a6l .item___3fupk .arrow___du7KV:before{border:10px solid transparent;border-left:10px solid #b6b6b6;width:0;height:0;position:absolute;top:8px;right:4px;content:' '}.linkItem___14a6l .item___3fupk .arrow___du7KV:after{border-left-color:#fff;right:6px}",""]),t.locals={container:"container___1kWCq",header:"header___1rrXL",left:"left___2tiUH",right:"right___1Ar4P",center:"center___3n409",num:"num___c8wFJ",title:"title___10DvB",detailItem:"detailItem___16hDt",item:"item___3fupk",linkItem:"linkItem___14a6l",arrow:"arrow___du7KV"}},2355:[2553,1488]});