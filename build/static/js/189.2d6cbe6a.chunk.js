webpackJsonp([189],{1114:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),d=l(r),f=a(5),_=l(f),u=a(3),c=l(u),s=a(4),p=l(s),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,d["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),h=a(1),x=l(h),b=a(2162),k=l(b),v=a(10),g=l(v),E=a(24),y=l(E),w=a(9),N=a(8),I=a(17),T=l(I),C=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.quit=function(e){1==a.props.location.query.status?a.refs.alert.show({title:"是否申请退出？",content:"若不主动申请退出，聚点+到期1天后系统将自发申请退出;\n根据平台运营情况，平均转让时间3天～多持有的天数将按预期利息正常计算",okText:"确定",cancel:"取消",okCallback:function(){a.props.quit(e)}}):a.refs.alert.show({content:"只有到达锁定期才可申请退出哦～",okText:"确定"})},a.state={data:{},type:""},a}return o(t,e),m(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.props.data?this.props.getFillContractsList(this.props.data.invest_id,"F"):this.refs.alert.show({content:"请先选择你需要查看的聚点+",okText:"确定",okCallback:function(){e.props.pop()}}),this.setState({data:this.props.data,type:this.props.data&&this.props.data.zh_type||""})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.quitData;a&&100==a.code?setTimeout(function(){t.refs.alert.show({content:"你已成功申请退出，退出成功后本息自动回款到余额",okText:"确定",okCallback:function(){t.props.pop()}})},1e3):a&&100!=a.code&&setTimeout(function(){t.refs.alert.show({content:"申请退出失败，请重新尝试",okText:"确定"})},1e3)}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.pop,l=t.push,n=t.contractsFillList,i=this.state,o=i.data,r=i.type;return x["default"].createElement("div",{className:k["default"].container},x["default"].createElement(g["default"],{onLeft:a},"聚点+详情"),o&&x["default"].createElement("div",null,x["default"].createElement("div",{className:k["default"].header},x["default"].createElement("div",{className:k["default"].left},o.name),x["default"].createElement("div",{className:k["default"].right},r)),x["default"].createElement("div",{className:k["default"].center},x["default"].createElement("div",{className:k["default"].num},o.plan_income),x["default"].createElement("div",{className:k["default"].title},"预期收益(元)")),x["default"].createElement("div",{className:k["default"].detailItem},x["default"].createElement("div",{className:k["default"].item},x["default"].createElement("div",{className:k["default"].left},"加入金额"),x["default"].createElement("div",{className:k["default"].right},o.invest_money)),x["default"].createElement("div",{className:k["default"].item},x["default"].createElement("div",{className:k["default"].left},"预计年化利率"),x["default"].createElement("div",{className:k["default"].right},o.rate,"%")),x["default"].createElement("div",{className:k["default"].item},x["default"].createElement("div",{className:k["default"].left},"锁定期限(月)"),x["default"].createElement("div",{className:k["default"].right},o.month)),x["default"].createElement("div",{className:k["default"].item},x["default"].createElement("div",{className:k["default"].left},"产品起息日"),x["default"].createElement("div",{className:k["default"].right},T["default"].formatDate("yyyy-MM-dd",new Date(1e3*o.start_time)))),x["default"].createElement("div",{className:k["default"].item},x["default"].createElement("div",{className:k["default"].left},"锁定结束时间"),x["default"].createElement("div",{className:k["default"].right},T["default"].formatDate("yyyy-MM-dd",new Date(1e3*o.end_time))))),x["default"].createElement("div",{className:k["default"].linkItem},x["default"].createElement("div",{className:k["default"].item,onClick:function(){l("/user/gatherProjects/"+o.invest_id+"/"+o.type)}},x["default"].createElement("div",{className:k["default"].left},"出借项目"),x["default"].createElement("span",{className:k["default"].arrow})),x["default"].createElement("div",{className:k["default"].item},n&&0!=n.data.length&&x["default"].createElement("div",{className:k["default"].left,onClick:function(){e.props.push("/fillList/"+o.invest_id+"/F")}},"服务协议")||x["default"].createElement("div",{className:k["default"].left,onClick:function(){e.props.push("/serviceContract/"+o.invest_id+"/1")}},"服务协议"),x["default"].createElement("span",{className:k["default"].arrow}))),x["default"].createElement("div",{className:k["default"].btnContainer},x["default"].createElement("div",{className:k["default"].btn,onClick:function(){e.quit(o.invest_id)}},"申请退出"))),x["default"].createElement(y["default"],{ref:"alert"}," "))}}]),t}(h.Component),D=function(e){return{data:e.regStore.getIn(["SAVE_GATHER_DATA","data"]),contractsFillList:e.infodata.getIn(["GET_FILL_CONTRACTS_LIST","data"]),quitData:e.infodata.getIn(["GATHER_QUIT","data"])}},L=function(e,t){return{pop:function(){e((0,N.goBack)())},push:function(t){e((0,N.push)(t))},replace:function(t){e((0,N.replace)(t))},getFillContractsList:function(t,a){e({type:"GET_FILL_CONTRACTS_LIST",params:[{product_id:t,product_type:a}]})},quit:function(t){e({type:"GATHER_QUIT",params:[t]})},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"GATHER_QUIT"})}}};t["default"]=(0,w.connect)(D,L)(C)},1581:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___1kWCq{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.header___1rrXL{padding:10px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.header___1rrXL .left___2tiUH,.header___1rrXL .right___1Ar4P{-webkit-box-flex:1;-ms-flex:1;flex:1}.header___1rrXL .right___1Ar4P{text-align:right;color:#888}.center___3n409{margin-top:10px;background-color:#fff;padding:30px 15px;text-align:center}.center___3n409 .num___c8wFJ{font-size:32px;color:#f70}.center___3n409 .title___10DvB{font-size:12px;padding-top:6px;color:#999}.detailItem___16hDt{margin-top:10px;padding-left:15px;background-color:#fff;box-sizing:border-box}.detailItem___16hDt .item___3fupk{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;border-bottom:1px solid #ddd}.detailItem___16hDt .item___3fupk:last-child{border-bottom:none}.detailItem___16hDt .item___3fupk .left___2tiUH{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px}.detailItem___16hDt .item___3fupk .right___1Ar4P{text-align:right;padding-right:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#888}.linkItem___14a6l{margin-top:10px;padding-left:15px;background-color:#fff;box-sizing:border-box}.linkItem___14a6l .item___3fupk{position:relative;padding:10px 0;border-bottom:1px solid #ddd}.linkItem___14a6l .item___3fupk:last-child{border-bottom:none}.linkItem___14a6l .item___3fupk .left___2tiUH{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px}.linkItem___14a6l .item___3fupk .arrow___du7KV{-webkit-box-flex:1;-ms-flex:1;flex:1}.linkItem___14a6l .item___3fupk .arrow___du7KV:after,.linkItem___14a6l .item___3fupk .arrow___du7KV:before{border:10px solid transparent;border-left:10px solid #b6b6b6;width:0;height:0;position:absolute;top:8px;right:4px;content:' '}.linkItem___14a6l .item___3fupk .arrow___du7KV:after{border-left-color:#fff;right:6px}.btnContainer___1uJcV{height:44px;width:100%;position:fixed;bottom:0;left:0}.btnContainer___1uJcV .btn___2epX8{width:100%;height:100%;background-color:#00a6e2;line-height:44px;text-align:center;color:#fff}",""]),t.locals={container:"container___1kWCq",header:"header___1rrXL",left:"left___2tiUH",right:"right___1Ar4P",center:"center___3n409",num:"num___c8wFJ",title:"title___10DvB",detailItem:"detailItem___16hDt",item:"item___3fupk",linkItem:"linkItem___14a6l",arrow:"arrow___du7KV",btnContainer:"btnContainer___1uJcV",btn:"btn___2epX8"}},2162:function(e,t,a){var l=a(1581);"string"==typeof l&&(l=[[e.id,l,""]]);a(7)(l,{});l.locals&&(e.exports=l.locals)}});