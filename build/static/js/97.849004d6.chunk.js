webpackJsonp([97],{19:function(e,t,n){e.exports=n.p+"static/media/arrow2.4ba5831c.png"},33:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"a{text-decoration:none}.ml0___Lrba9{margin-left:0}.mt15___3Iu-Y{margin-top:15px}.mt30___mElkZ{margin-top:30px}.topBar___sdCDR{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___ptMsa{text-align:left;color:#00a6e2}.topBarLeft___ptMsa,.topBarRight___1-WHt{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1-WHt{text-align:right}.markTitle___1Ryki{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___suO5X{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___1oJxV{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___3LCCb{margin-top:40px;margin-left:15px;margin-right:15px}.loading____zTXo{width:100%;text-align:center;color:#fff;font-size:18px}.loading____zTXo,.loading____zTXo>span{display:inline-block}.center___2mH3M{text-align:center}.content___75OOP{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___29ByO{left:0}",""]),t.locals={ml0:"ml0___Lrba9",mt15:"mt15___3Iu-Y",mt30:"mt30___mElkZ",topBar:"topBar___sdCDR",topBarLeft:"topBarLeft___ptMsa",topBarRight:"topBarRight___1-WHt",markTitle:"markTitle___1Ryki",panel:"panel___suO5X",panelContent:"panelContent___1oJxV",buttonWrap:"buttonWrap___3LCCb",loading:"loading____zTXo",center:"center___2mH3M",content:"content___75OOP",tip:"tip___29ByO"}},34:function(e,t,n){var o=n(33);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(h["default"]?(0,h["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,s=n(82),f=o(s),c=n(81),d=o(c),_=n(2),p=o(_),b=n(5),h=o(b),g=n(3),m=o(g),y=n(4),x=o(y),k="function"==typeof d["default"]&&"symbol"==typeof f["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof d["default"]&&e.constructor===d["default"]&&e!==d["default"].prototype?"symbol":typeof e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,p["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=n(1),T=o(v),E=n(29),O=(o(E),n(11)),C=o(O),B=n(63),R=o(B),N=n(12),S=o(N),P=(u=i=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return n.clickHandle=function(){n.props.onClick&&n.props.onClick()},n.state={value:n.props.defaultValue||""},n.validateRu=n.validateRun,n}return l(t,e),w(t,[{key:"validateRun",value:function(){return this.state.value?{result:!0}:{result:!1}}},{key:"setValue",value:function(e){e&&(this.setState({value:e}),this.props.onChange&&this.props.onChange(e))}},{key:"renderLeft",value:function(){return T["default"].createElement("div",{className:R["default"].left},this.props.label&&T["default"].createElement("span",{style:this.props.leftStyle,className:R["default"].leftText},this.props.label))}},{key:"renderContent",value:function(){var e=this.props.content,t=void 0;return e&&(t="object"==("undefined"==typeof e?"undefined":k(e))?e:T["default"].createElement("span",{className:R["default"].contentText,style:this.props.contentStyle},e)),T["default"].createElement("div",{className:(0,C["default"])(R["default"].content)},t)}},{key:"renderRight",value:function(){var e=this.props.right;return e===!1?null:T["default"].createElement("div",{className:R["default"].right},"object"==("undefined"==typeof e?"undefined":k(e))?e:T["default"].createElement("img",{className:R["default"].arrowIcon,src:n(19)}))}},{key:"render",value:function(){var e=this.props,t=e.borderType;return T["default"].createElement("div",{className:(0,C["default"])([R["default"].container,t&&R["default"][t],e.className]),style:this.props.containerStyle},T["default"].createElement("div",{className:R["default"].wrap,onClick:this.clickHandle},this.renderLeft(),this.renderContent(),this.renderRight()))}}]),t}(T["default"].Component),i.nameq="BaseText",i.propTypes={className:S["default"].string,defaultValue:S["default"].string,label:S["default"].oneOfType([S["default"].string,S["default"].object]),content:S["default"].oneOfType([S["default"].string,S["default"].element]),right:S["default"].oneOfType([S["default"].bool,S["default"].element]),borderType:S["default"].string,onClick:S["default"].func,onChange:S["default"].func,containerStyle:S["default"].object,contentStyle:S["default"].object},u);t["default"]=P},58:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".container___2iOoq{border-color:#ddd;border-width:1px 0;background-color:#fff;padding-left:15px;height:44px;border-style:solid}.container___2iOoq .wrap___3WGXV{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding-right:15px}.container___2iOoq .leftText___Pj2n5{font-size:16px;display:block;color:#000}.container___2iOoq .content___2zhnK{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.container___2iOoq .contentText___2RBdm{color:#888;text-align:right;font-size:14px;display:block}.container___2iOoq .right____2M60{padding-left:7px}.container___2iOoq .arrowIcon___1h463{height:15px;width:9px}.container___2iOoq.two___2UQnC{border-bottom-width:0}.container___2iOoq.two___2UQnC .wrap___3WGXV{border-bottom:1px solid #ddd}.container___2iOoq.three___3JHjg{border-top-width:0}.container___2iOoq.four___oHlQS{border-top-width:0;border-bottom-width:0}.container___2iOoq.four___oHlQS .wrap___3WGXV{border-bottom:1px solid #ddd}",""]),t.locals={container:"container___2iOoq",wrap:"wrap___3WGXV",leftText:"leftText___Pj2n5",content:"content___2zhnK",contentText:"contentText___2RBdm",right:"right____2M60",arrowIcon:"arrowIcon___1h463",two:"two___2UQnC",three:"three___3JHjg",four:"four___oHlQS"}},63:[2365,58],93:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=o(a),l=n(11),i=o(l),u=n(199),s=o(u);t["default"]=function(e){var t=e.children,n=e.className,o=e.style;return r["default"].createElement("div",{className:(0,i["default"])(s["default"].page,n),style:o},t||"")}},1187:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=o(i),s=n(5),f=o(s),c=n(3),d=o(c),_=n(4),p=o(_),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),g=o(h),m=n(8),y=n(55),x=o(y),k=n(10),w=o(k),v=n(93),T=o(v),E=n(45),O=o(E),C=n(34),B=o(C),R=n(17),N=o(R),S=n(80),P=n(9),D=n(16),I=o(D),M=function(e){function t(){return a(this,t),r(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return l(t,e),b(t,[{key:"loadDom",value:function(){return g["default"].createElement(I["default"],null)}},{key:"componentWillUnmount",value:function(){this.props.clearData("GO_BANK_PAGE")}},{key:"loadEndDom",value:function(e){var t=this,n=e.data,o=n.isAuth,a=n.mobile,r=n.isSetTradePassword,l=n.card,i=this.props.push,u=JSON.parse(sessionStorage.getItem("bao-store")),s="",f="";switch((0,S.getAuthDetail)()){case 1:s="已开通";break;case 2:s="未授权",f="/user/setting/authorization";break;case 3:s="未开通",f="/user/setting/regStore"}return g["default"].createElement("div",null,g["default"].createElement("div",{style:{marginTop:15}},g["default"].createElement(x["default"],{onClick:function(){return 0===o&&i("/user/setting/regStore")},label:"身份认证",content:1===o?"审核中":2===o?N["default"].replaceTextToSymbol(l,9,14):"未认证",borderType:"two"}),a?g["default"].createElement(x["default"],{onClick:function(){switch((0,S.getAuthDetail)()){case 1:i("/user/setting/mobileBindModify");break;case 2:i("/user/setting/authorization");break;case 3:t.refs.store.show()}},label:"修改绑定手机",content:N["default"].replaceTextToSymbol(a,4,7),borderType:"four"}):g["default"].createElement(x["default"],{onClick:function(){switch((0,S.getAuthDetail)()){case 1:i("/user/setting/mobileBind");break;case 2:i("/user/setting/authorization");break;case 3:t.refs.store.show()}},label:"绑定手机",borderType:"four"}),g["default"].createElement(x["default"],{onClick:function(){switch((0,S.getAuthDetail)()){case 1:u.isUploadIdcard||i("/user/idCardUpload");break;case 2:i("/user/setting/authorization");break;case 3:t.refs.store.show()}},label:"身份证认证",content:u.isUploadIdcard&&"已认证"||"未认证",borderType:"three"})),g["default"].createElement("div",{style:{marginTop:15}},g["default"].createElement(x["default"],{onClick:function(){i("/user/setting/loginPasswordModify")},label:"修改登录密码",borderType:"two"}),r?g["default"].createElement(x["default"],{onClick:function(){u.isRegister&&u.isBindBankcard?t.changePassWord():u.isRegister?i("/user/setting/authorization"):t.refs.store.show()},label:"修改交易密码",borderType:"four"}):null,r?g["default"].createElement(x["default"],{onClick:function(){switch((0,S.getAuthDetail)()){case 1:i("/user/setting/tradePasswordForget/verifyMobile");break;case 2:i("/user/setting/tradePasswordForget/verifyMobile");break;case 3:t.refs.store.show()}},label:"忘记交易密码",borderType:"four"}):g["default"].createElement(x["default"],{onClick:function(){switch((0,S.getAuthDetail)()){case 1:u.isUploadIdcard||i("/user/setting/tradePasswordSet");break;case 2:i("/user/setting/authorization");break;case 3:t.refs.store.show()}},label:"设置交易密码",borderType:"four"}),g["default"].createElement(x["default"],{onClick:function(){return(!u.isRegister||!u.isBindBankcard)&&void i(f)},label:"开通银行存管",content:s,borderType:"three"})),g["default"].createElement(O["default"],{ref:"store"}," "))}},{key:"componentWillMount",value:function(){this.props.update()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.user;e.load;t||this.props.load()}},{key:"changePassWord",value:function(){this.props.goBankPage({type:2,way:1,data:{device:"WAP"},returnUrl:""})}},{key:"componentWillReceiveProps",value:function(e){var t=e.goBankData;t&&100==t.code&&(this.props.clearData("goBankData"),this.props.push("/user/setting/bankPage?url="+t.data.url))}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.pop,o=void 0;return o=t?this.loadEndDom(t):this.loadDom(),g["default"].createElement(T["default"],null,g["default"].createElement("div",{className:B["default"].panel},g["default"].createElement(w["default"],{title:"安全中心",onLeft:n}),g["default"].createElement("div",{className:B["default"].panelContent},o)))}}]),t}(g["default"].Component),A=function(e){return{user:e.infodata.getIn(["USER_INFO_WITH_LOGIN","data"]),goBankData:e.infodata.getIn(["GO_BANK_PAGE","data"])}},W=function(e){return{load:function(){e({type:"USER_INFO_WITH_LOGIN"})},goBankPage:function(t){e({type:"GO_BANK_PAGE",params:[t]})},push:function(t){e((0,P.push)(t))},pop:function(){e((0,P.goBack)())},clearData:function(t){e({type:"CLEAR_INFO_DATA",key:t})},update:function(){e({type:"STORE_STATUS_INFO"})}}};t["default"]=(0,m.connect)(A,W)(M)}});