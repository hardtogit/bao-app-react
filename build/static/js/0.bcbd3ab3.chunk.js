webpackJsonp([0],{28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,s,d=a(2),c=n(d),u=a(5),_=n(u),f=a(3),p=n(f),m=a(4),b=n(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),E=n(x),g=a(8),y=n(g),v=a(30),N=n(v),T=a(9),k=n(T),B=(s=r=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.state={disable:!0,message:""},a}return i(t,e),h(t,[{key:"open",value:function(e,t){var a=this;this.setState({disable:!1,message:e}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){a.setState({disable:!0}),t&&"function"==typeof t&&t()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:E["default"].createElement("div",{className:(0,y["default"])(N["default"].Tipbar,this.props.className)},E["default"].createElement("span",{className:N["default"].text},this.state.message||this.props.text))}}]),t}(E["default"].Component),r.propTypes={text:k["default"].string},s);t["default"]=B},29:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),t.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},30:[2322,29],406:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),s=n(r),d=a(5),c=n(d),u=a(3),_=n(u),f=a(4),p=n(f),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),h=n(b),x=a(12),E=n(x),g=a(2098),y=n(g),v=a(1882),N=n(v),T=a(8),k=n(T),B=a(22),I=n(B),R=a(11),L=a(21),w=a(28),S=n(w),D=a(26),z=n(D),C=a(79),O=n(C),P=a(10),W=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.alert=function(){a.refs.alert.show({content:"出借人在90天以上可以进行债权转让，出借人转让直投标的统一收取2%的债权转让管理费，具体金额以债权转让页面显示为准，债权转让管理费在成交后直接从成交金额中扣除，不成交平台不向用户收取转让管理费。",okText:"知道了"})},a.change=function(e){var t=e.target.value,n=/^\d+(\.\d{1,2})?$/,l=a.props.infoData;if(n.test(t))if(t>parseFloat(l.data.amount))a.refs.tipbar.open("转让价格不能高于转让价值！"),a.setState({disabled:!0,money:0});else if(t<42.5)a.refs.tipbar.open("转让率不能低于15%!"),a.setState({disabled:!0,money:0});else{var o=parseFloat(l.data.amount)/50;a.setState({disabled:!1,money:(t-1)*o+parseFloat(l.data.transfer_collection_interest)})}else a.refs.tipbar.open("请输入正确的格式!"),a.setState({disabled:!0,money:0});a.setState({val:t})},a.send=function(){var e=a.props.params.id,t=a.state.val;a.props.send(e,t)},a.componentWillReceiveProps=function(e){var t=e.resDate,n=e.push;t&&(300==t.code?a.refs.alert.show({title:"转让失败",okText:"返回"}):100==t.code&&a.refs.success.show({text:"转让成功",callback:function(){n("/user/projectRecorde")}}))},a.ifScan=function(e){a.state.checkBox?a.setState({checkBox:!1}):a.setState({checkBox:!0})},a.loadDom=function(){return h["default"].createElement(I["default"],null)},a.loadEndDom=function(){var e=a.props,t=e.infoData.data,n=e.contractData,l=t.amount,o=t.months_left,i=t.transfer_collection_interest,r=t.name,s=a.state,d=s.val,c=s.disabled,u=s.money,_=s.checkBox,f=!0;return c||(f=!_),h["default"].createElement("div",null,h["default"].createElement("div",{className:y["default"].content},h["default"].createElement("div",{className:y["default"].information},h["default"].createElement("div",{className:y["default"].title},h["default"].createElement("img",{src:N["default"]}),h["default"].createElement("span",null,r)),h["default"].createElement("div",{className:y["default"].detailed},h["default"].createElement("div",{className:y["default"].detailedBox},h["default"].createElement("p",{className:y["default"].Text},"持有金额"),h["default"].createElement("p",{className:y["default"].money},l,"元")),h["default"].createElement("div",{className:y["default"].detailedBox},h["default"].createElement("p",{className:y["default"].Text},"剩余期限"),h["default"].createElement("p",{className:y["default"].money},o,"个月")))),h["default"].createElement("div",{className:y["default"].InputBox},h["default"].createElement("div",{className:(0,k["default"])(y["default"].one,y["default"].borderBottom)},h["default"].createElement("span",{className:y["default"].label},"转让价值"),h["default"].createElement("span",{className:y["default"].controll},"50.00"),h["default"].createElement("span",{className:y["default"].company},"元/份")),h["default"].createElement("div",{className:y["default"].one},h["default"].createElement("span",{className:(0,k["default"])(y["default"].label,y["default"].colorB)},"转让价格"),h["default"].createElement("span",{className:y["default"].controll},h["default"].createElement("input",{className:y["default"].Input,type:"text",placeholder:"不得高于转让价值",onChange:a.change,value:d})),h["default"].createElement("span",{className:y["default"].company},"元/份"))),h["default"].createElement("p",{className:y["default"].describe},"为促进转让进度,可折价转让,折价率为0%-15%,折价率越高，越容易转让成功。"),h["default"].createElement("div",{className:y["default"].describeList},h["default"].createElement("div",{className:y["default"].describeOne,onClick:a.alert},h["default"].createElement("span",{className:y["default"].label},"手续费",h["default"].createElement("span",null,"（元）")),h["default"].createElement("span",{className:y["default"].textR},parseFloat(.02*l).toFixed(2))),h["default"].createElement("div",{className:y["default"].describeOne},h["default"].createElement("span",{className:y["default"].label},"转让待收利息",h["default"].createElement("span",null,"（元）")),h["default"].createElement("span",{className:y["default"].textR},i)),h["default"].createElement("div",{className:y["default"].describeOne},h["default"].createElement("span",{className:y["default"].label},"实际到账金额",h["default"].createElement("span",null,"（元）")),h["default"].createElement("span",{className:y["default"].textR},u))),h["default"].createElement("p",{className:y["default"].hetong},h["default"].createElement("input",{type:"checkbox",onClick:a.ifScan,checked:a.state.checkBox}),"我已阅读并同意",n&&n.data.map(function(e,t){return h["default"].createElement(L.Link,{key:t,to:"/emptyTemplate/"+(e.hetong_type?e.hetong_type:0)+"?name="+encodeURIComponent(e.hetong_name),className:y["default"].protocol},"《",e.hetong_name,"》")}))),h["default"].createElement("button",{className:y["default"].buttom,disabled:f,onClick:a.send},"确认转让"))},a.go=function(){a.props.push("/user/zqTransferRule")},a.state={disabled:!0,val:"",money:0,checkBox:!0},a}return i(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.get,a=e.params.id,n=e.location.query.access_sys;t(a,n);var l=void 0;l=n?"B":"E",this.props.getEmptyContractsList(l)}},{key:"componentWillUnmount",value:function(){this.props.clear()}},{key:"render",value:function(){var e=this.props,t=e.infoData,a=e.pop,n=this.loadDom(),l=void 0;return t&&(n=this.loadEndDom(),1==t.data.isTransfer&&(l=h["default"].createElement("span",null,"规则"))),h["default"].createElement("div",{className:y["default"].bg},h["default"].createElement(E["default"],{onLeft:a,rightNode:l,onRight:l&&this.go||null},"债权转让"),n,h["default"].createElement(S["default"],{ref:"tipbar"}),h["default"].createElement(z["default"],{ref:"alert"}),h["default"].createElement(O["default"],{ref:"success"}))}}]),t}(b.Component),F=function(e){return{infoData:e.infodata.getIn(["DIRECT_INVEST_PROPERTY_DETAIL","data"]),resDate:e.infodata.getIn(["DIRECT_INVEST_TRANSFER","data"]),contractData:e.infodata.getIn(["GET_EMPTY_CONTRACTS_LIST","data"])}},A=function(e){return{getEmptyContractsList:function(t){e({type:"GET_EMPTY_CONTRACTS_LIST",params:[{product_type:t}]})},get:function(t,a){e({type:"DIRECT_INVEST_PROPERTY_DETAIL",params:[t,a]})},send:function(t,a){e({type:"DIRECT_INVEST_TRANSFER",params:[{id:t,amount:a}]})},clear:function(){e({type:"CLEAR_INFO_DATA",key:"DIRECT_INVEST_TRANSFER"})},push:function(t){e((0,P.push)(t))},pop:function(){e((0,P.goBack)())}}};t["default"]=(0,R.connect)(F,A)(W)},1497:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___3pfUv{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px;padding-bottom:44px}.information___1hx1b{background-color:#00a6e2;padding:20px 15px}.information___1hx1b .title___38ONL{font-size:15px;color:#fff}.information___1hx1b .title___38ONL img{width:15px;margin-right:10px}.information___1hx1b .title___38ONL img,.information___1hx1b .title___38ONL span{display:inline-block;vertical-align:middle}.detailed___23Ey3{margin-top:30px}.detailed___23Ey3 .detailedBox___3zegF{display:inline-block;width:50%}.detailed___23Ey3 .detailedBox___3zegF .Text___2Q2_m{font-size:11px;color:#fff}.detailed___23Ey3 .detailedBox___3zegF .money___2Z6X-{padding-top:12px;font-size:25px;color:#fff}.InputBox___2l-aW{border-top:1px solid #e4e4e4;margin-top:15px;margin-bottom:10px;padding:0 15px;border-bottom:1px solid #e4e4e4;background-color:#fff}.InputBox___2l-aW .one___QoL33{padding:12px 0;position:relative}.InputBox___2l-aW .one___QoL33 .label___3j3Nd{color:#888;font-size:14px;display:inline-block;padding-right:10px}.InputBox___2l-aW .one___QoL33 .controll___zx0rR{position:absolute;left:80px;right:70px;display:inline-block;top:0;line-height:44px}.InputBox___2l-aW .one___QoL33 .company___YWpAl{float:right}.InputBox___2l-aW .one___QoL33 .Input___3e5RK{width:100%;display:inline-block;height:39px;padding:0;outline:none;border:0}.describe___3PntD{padding:5px 15px;font-size:14px;color:#888}.describeList___2iBfc{margin-top:10px;background-color:#fff;padding:0 15px}.describeList___2iBfc .describeOne___LsquP .label___3j3Nd{display:inline-block;line-height:44px;font-size:12px;color:#626262}.describeList___2iBfc .describeOne___LsquP .label___3j3Nd span{margin-left:5px}.describeList___2iBfc .describeOne___LsquP .textR___3w7an{display:inline-block;line-height:44px;font-size:12px;float:right}.borderBottom___v6HMI{border-bottom:1px solid #e4e4e4}.buttom___2-W4t{position:fixed;left:0;bottom:0;color:#fff;background-color:#00a6e2;height:44px;line-height:44px;text-align:center;width:100%;border:0}.buttom___2-W4t[disabled]{background-color:#99dbf3}.colorB___2dEz5{color:#000!important}.hetong___2Vv8H{padding:0 15px;margin-top:10px;font-size:14px}",""]),t.locals={bg:"bg___3pfUv",information:"information___1hx1b",title:"title___38ONL",detailed:"detailed___23Ey3",detailedBox:"detailedBox___3zegF",Text:"Text___2Q2_m",money:"money___2Z6X-",InputBox:"InputBox___2l-aW",one:"one___QoL33",label:"label___3j3Nd",controll:"controll___zx0rR",company:"company___YWpAl",Input:"Input___3e5RK",describe:"describe___3PntD",describeList:"describeList___2iBfc",describeOne:"describeOne___LsquP",textR:"textR___3w7an",borderBottom:"borderBottom___v6HMI",buttom:"buttom___2-W4t",colorB:"colorB___2dEz5",hetong:"hetong___2Vv8H"}},1882:function(e,t,a){e.exports=a.p+"static/media/zricon.5bec8906.png"},2098:function(e,t,a){var n=a(1497);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});