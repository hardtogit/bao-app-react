webpackJsonp([29],{299:function(e,t,a){e.exports=a.p+"static/media/cunguan.4d56aad2.png"},301:function(e,t,a){e.exports=a.p+"static/media/main_bg.44b3ca4d.png"},302:function(e,t,a){e.exports=a.p+"static/media/tuoguan.331cc8fd.png"},1075:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),c=n(l),d=a(5),i=n(d),s=a(3),f=n(s),u=a(34),p=n(u),m=a(4),h=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),g=n(v),x=a(10),w=a(9),S=a(23),y=n(S),E=a(11),k=n(E),N=a(45),L=n(N),F=a(2154),R=n(F),Z=a(14),I=n(Z),z=a(299),O=n(z),U=a(302),C=n(U),T=function(e){function t(e){_(this,t);var a=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.goCash=function(e){var t=a,n=JSON.parse(sessionStorage.getItem("bao-store"));if(n.isBindBankcard&&n.isRegister){if(n.isUploadIdcard)t.money(e);else if(t.props.uploadData)if(100==t.props.uploadData.code)switch(t.props.uploadData.data.status){case"-1":t.refs.alert.show({content:"审核失败",okText:"重新上传",okCallback:function(){t.props.push("/user/IdCardUpload")}});break;case"0":t.refs.alert.show({content:"身份证审核中，请稍后再试",okText:"确定"}),t.props.queryUpload();break;case"1":t.money(e);break;case"9":t.props.push("/user/IdCardUpload");break;default:t.props.push("/user/IdCardUpload")}else t.refs.alert.show({content:"身份证审核中，请稍后再试",okText:"确定"}),t.props.queryUpload()}else n.isRegister?a.props.push("/user/setting/cardBind"):a.refs.store.show()},a.goCashOld=function(e){var t=JSON.parse(sessionStorage.getItem("bao-store"));return t&&t.isAuthIdentity&&t.isSecurityCard?void a.moneyOld(e):void(t.isBindBankcard&&t.isRegister?a.moneyOld(e):t.isRegister?a.props.push("/user/setting/cardBind"):a.refs.store.show())},a.money=function(e){a.props.push("/user/withdrawals")},a.moneyOld=function(e){a.props.push("/user/withdrawalsOld")},a.state={disable1:!0,disable2:!0},a}return r(t,e),b(t,[{key:"componentWillMount",value:function(){this.props.getDefault(),this.props.queryUpload()}},{key:"componentDidMount",value:function(){this.props.load()}},{key:"componentWillReceiveProps",value:function(e){var t=e.userInfo,a=e.cashSetting;t&&a&&(parseFloat(t.data.balance)>=parseInt(a.data.withdrawSingleMinMoney)&&this.setState({disable1:!1}),parseFloat(t.data.balance_platform)>=parseInt(a.data.withdrawSingleMinMoney)&&this.setState({disable2:!1}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.pop,n=t.push,_=t.userInfo;t.cashSetting;return g["default"].createElement("div",{className:R["default"].container},g["default"].createElement(L["default"],{ref:"store"}),g["default"].createElement(y["default"],{ref:"alert"}),g["default"].createElement(k["default"],{onLeft:a,rightNode:g["default"].createElement("div",null,"明细"),onRight:function(){n("/user/cashLog")}},"提现"),g["default"].createElement("div",{className:R["default"].content},g["default"].createElement("h4",{className:R["default"].text},"账户余额 (元)"),g["default"].createElement("div",{className:R["default"].num},function(){if(_){var e=(0,p["default"])((100*_.data.balance+100*_.data.balance_platform)/100);if(!e.split(".")[1])return e+".00";switch(e.split(".")[1].length){case 1:return e+"0";case 2:return e;default:return e+".00"}}}()),g["default"].createElement("div",{className:R["default"].card},g["default"].createElement("div",{className:R["default"].header},g["default"].createElement("div",{className:R["default"].store},"存"),g["default"].createElement("div",{className:R["default"].detail,onClick:function(){n("/user/moneyLog")}},"余额明细 ",g["default"].createElement("span",{className:R["default"].arrow}))),g["default"].createElement("div",{className:R["default"].body},g["default"].createElement("div",{className:R["default"].left},g["default"].createElement("img",{src:O["default"],alt:""})),g["default"].createElement("div",{className:R["default"].right},g["default"].createElement("p",{className:R["default"].title},"存管账户余额 (元)"),g["default"].createElement("p",{className:R["default"].money},_&&_.data.balance))),g["default"].createElement("div",{className:R["default"].footer},g["default"].createElement("div",{className:(0,I["default"])([R["default"].btn,this.state.disable1&&R["default"].disable||""]),onClick:function(){return!e.state.disable1&&void e.goCash(_&&_.data.balance)}},"提现"))),g["default"].createElement("div",{className:R["default"].card},g["default"].createElement("div",{className:R["default"].header},g["default"].createElement("div",{className:R["default"].store},"托"),g["default"].createElement("div",{className:R["default"].detail,onClick:function(){n("/user/moneyLogOld")}},"余额明细 ",g["default"].createElement("span",{className:R["default"].arrow}))),g["default"].createElement("div",{className:R["default"].body},g["default"].createElement("div",{className:R["default"].left},g["default"].createElement("img",{src:C["default"],alt:""})),g["default"].createElement("div",{className:R["default"].right},g["default"].createElement("p",{className:R["default"].title},"托管账户余额 (元)"),g["default"].createElement("p",{className:R["default"].money},_&&_.data.balance_platform))),g["default"].createElement("div",{className:R["default"].footer},g["default"].createElement("div",{className:(0,I["default"])([R["default"].btn,this.state.disable2&&R["default"].disable||""]),onClick:function(){return!e.state.disable2&&void e.goCashOld(_&&_.data.balance_platform)}},"提现")))))}}]),t}(v.Component),D=function(e){return{userInfo:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),uploadData:e.infodata.getIn(["QUERY_UPLOAD","data"]),cashSetting:e.infodata.getIn(["GET_DEFAULT_TAB","data"])}},B=function(e){return{pop:function(){e((0,w.goBack)())},push:function(t){e((0,w.push)(t))},load:function(){e({type:"USER_INFO_WITH_LOGIN"})},getDefault:function(){e({type:"GET_DEFAULT_TAB"})},queryUpload:function(){e({type:"QUERY_UPLOAD"})}}};t["default"]=(0,x.connect)(D,B)(T)},1552:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3cvS-{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___3cvS- .content___19Z6w{background-image:url("+a(301)+");background-size:100% auto;background-position:0 0;background-repeat:no-repeat}.container___3cvS- .content___19Z6w .text___3ntqZ{text-align:center;color:#fff;font-size:12px;padding:20px 0 10px}.container___3cvS- .content___19Z6w .num___26BvG{text-align:center;color:#fff;font-size:30px}.container___3cvS- .content___19Z6w .card___1FvLR{width:80%;background-color:#fff;border-radius:4px;box-shadow:0 0 4px #ddd;position:relative;margin:20px auto}.container___3cvS- .content___19Z6w .card___1FvLR:last-child .header___33Sps .store___1kmkI{background-color:#41bce9}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps{color:#fff;text-align:center}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps:after,.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps:before{display:table;content:''}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps:after{clear:both}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .store___1kmkI{float:left;height:24px;width:31px;font-size:12px;margin-top:10px;line-height:24px;background-color:#f6923a;border-bottom-right-radius:12px;border-top-right-radius:12px}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL{color:#666;float:right;margin-top:12px;margin-right:40px;font-size:14px}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH{position:relative}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH:after,.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH:before{border:8px solid transparent;border-left:8px solid #fff;width:0;height:0;position:absolute;top:-16px;left:36px;content:' '}.container___3cvS- .content___19Z6w .card___1FvLR .header___33Sps .detail___3zWFL .arrow___1m8NH:before{border-left-color:#666;left:38px}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 32px 0 40px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .left___1s8h1{-webkit-box-flex:30px;-ms-flex:30px 0;flex:30px 0}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .left___1s8h1 img{display:block;width:100%}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .right___3UOz8{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:12px}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .right___3UOz8 .title___3sK75{font-size:12px;color:#666;margin-bottom:4px}.container___3cvS- .content___19Z6w .card___1FvLR .body___3Solj .right___3UOz8 .money___IHihz{font-size:24px;color:#000}.container___3cvS- .content___19Z6w .card___1FvLR .footer___34aeu{padding:24px 30px 30px}.container___3cvS- .content___19Z6w .card___1FvLR .footer___34aeu .btn___1hn8a{height:44px;line-height:44px;text-align:center;color:#f6923a;border:1px solid #f6923a;font-size:18px;border-radius:22px}.container___3cvS- .content___19Z6w .card___1FvLR .footer___34aeu .btn___1hn8a.disable___1tTaD{background-color:#f5f5f5;color:#666;border:none}",""]),t.locals={container:"container___3cvS-",content:"content___19Z6w",text:"text___3ntqZ",num:"num___26BvG",card:"card___1FvLR",header:"header___33Sps",store:"store___1kmkI",detail:"detail___3zWFL",arrow:"arrow___1m8NH",body:"body___3Solj",left:"left___1s8h1",right:"right___3UOz8",title:"title___3sK75",money:"money___IHihz",footer:"footer___34aeu",btn:"btn___1hn8a",disable:"disable___1tTaD"}},2154:[2349,1552]});