webpackJsonp([88],{1072:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,h["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c,f=n(2),p=o(f),s=n(5),d=o(s),_=n(3),h=o(_),g=n(4),m=o(g),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,p["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n(1),y=o(v),w=n(2396),x=o(w),k=n(20),E=a(k),T=n(10),A=o(T),C=(n(19),n(9)),P=n(25),D=o(P),O=n(21),j=o(O),N=n(85),B=o(N),J=n(8),G=(c=u=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.handClick=function(){return!n.state.disable&&void n.props.goBankPage({type:473,way:1,returnUrl:"",data:{freeTransCode:[],device:"WAP",freeFlag:0}})},n.handChange=function(e){e.target.checked?n.setState({disable:!1}):n.setState({disable:!0})},n.state={isOpen:!1,disable:!1},n}return l(t,e),b(t,[{key:"componentWillMount",value:function(){this.props.authorizationText()}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.goBankData;t&&100==t.code?(this.props.clearData(E.GO_BANK_PAGE),this.props.push("/user/setting/bankPage?url="+t.data.url)):t&&(this.props.clearData(E.GO_BANK_PAGE),this.refs.alert.show({content:"授权失败！",okText:"确定"}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.authorizationTextData,a=this.state.disable;return y["default"].createElement("div",{className:x["default"].container},y["default"].createElement(A["default"],{onLeft:t},"功能授权"),y["default"].createElement("div",null,y["default"].createElement("p",{className:x["default"].p},n&&n.data),y["default"].createElement("p",null),y["default"].createElement("div",{className:x["default"].btnContainer},y["default"].createElement(D["default"],{ref:"bottom",style:{marginTop:"15px"},onClick:this.handClick,disable:a,className:x["default"].bottom,text:this.state.pending?y["default"].createElement(B["default"],{text:"跳转中..."}):"下一步"}),y["default"].createElement(j["default"],{ref:"alert"}))))}}]),t}(v.Component),u.defaultProps={},c),I=function(e){return{goBankData:e.infodata.getIn([E.GO_BANK_PAGE,"data"]),authorizationTextData:e.infodata.getIn([E.AUTHORIZATION_TEXT,"data"])}},R=function(e,t){return{pop:function(){e((0,J.goBack)())},goBankPage:function(t){e({type:E.GO_BANK_PAGE,params:[t]})},push:function(t){e((0,J.push)(t))},clearData:function(t){e({type:E.CLEAR_INFO_DATA,key:t})},authorizationText:function(){e({type:E.AUTHORIZATION_TEXT})}}};t["default"]=(0,C.connect)(I,R)(G)},1523:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".container___29jwJ{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___29jwJ .choice___3jvC8{text-align:left;padding:0 15px;font-size:14px;margin:20px auto}.container___29jwJ .choice___3jvC8 input{position:relative;top:2px;margin-right:3px}.container___29jwJ .btnContainer___1RJHP{padding:15px}.container___29jwJ .p___1KDDw{margin:20px 15px;font-size:14px;letter-spacing:1px;line-height:1.2;color:#666}",""]),t.locals={container:"container___29jwJ",choice:"choice___3jvC8",btnContainer:"btnContainer___1RJHP",p:"p___1KDDw"}},2396:[2594,1523]});