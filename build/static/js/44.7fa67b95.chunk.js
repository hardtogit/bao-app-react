webpackJsonp([44],{890:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),r=a(u),c=n(5),f=a(c),d=n(3),s=a(d),p=n(4),_=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),m=a(h),x=n(10),b=a(x),v=n(2305),y=a(v),w=n(17),E=a(w),k=n(8),B=n(9),N=n(14),z=a(N),C=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.send=function(){var e=n.state.login;1==e?window.location.href="http://api.bao.cn/static-page/wechat-bind":(n.setState({login:0}),n.props.get())},n.synchronization=function(){var e=n.state,t=e.login,a=(e.text,e.text1),o=e.text2;return m["default"].createElement("div",{className:y["default"].body},m["default"].createElement("div",{className:(0,z["default"])(y["default"].imgBox,0==t&&y["default"].block||y["default"].hide)}),m["default"].createElement("div",{className:(0,z["default"])(y["default"].failBox,0==t&&y["default"].hide||y["default"].block)},m["default"].createElement("div",{className:y["default"].failIcon})),m["default"].createElement("div",{className:y["default"].content},m["default"].createElement("h1",null,a[t]),m["default"].createElement("p",null,"点击走进宝点-我的账户，光速查看昨天收益"),m["default"].createElement("button",{onClick:n.send},o[t])))},n.inWap=function(){var e=n.state,t=e.login,a=e.inWap;return m["default"].createElement("div",null,m["default"].createElement("div",{className:(0,z["default"])(y["default"].imgBox,0==t&&y["default"].block||y["default"].hide)}),m["default"].createElement("div",{className:(0,z["default"])(y["default"].failBox,0==t&&y["default"].hide||y["default"].block)},m["default"].createElement("div",{className:y["default"].failIcon})),m["default"].createElement("div",{className:y["default"].content},m["default"].createElement("h1",null,a[t]),2==t&&m["default"].createElement("p",null,"可关闭当前页面，重新进入")||""))},n.state={login:0,text:["成功开启","未授权","开启失败"],text1:["您已成功开启免登陆模式","您还未授权","您开启免登陆模式失败"],text2:["查看我的账户","去授权","重新登录"],inWap:["你已经开启免登录","","跳转失败"],url:{inviteFriends:"/find/inviteFriends",coinShop:"/user/coinShop",myIndex:"/home/myIndex"}},n}return i(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.push,n=e.get,a=window.navigator.userAgent.toLowerCase();"micromessenger"==a.match(/MicroMessenger/i)?n():t("/home")}},{key:"componentWillReceiveProps",value:function(e){var t=e.wechat,n=e.getAll,a=e.push,o=e.location.query.type,l=this.state.url,i=t&&t.code;100==i?(sessionStorage.setItem("bao-auth",!0),n(),a(o?l[o]:"/home/myIndex")):(this.setState({login:1}),o&&a("/login"))}},{key:"render",value:function(){var e=this.props.location.query.type,t=this.state,n=t.login,a=t.text,o=this.props.pop,l=this.synchronization();return e&&(l=this.inWap()),m["default"].createElement("div",{className:y["default"].bg},m["default"].createElement(b["default"],{onLeft:o},a[n]),l,m["default"].createElement("div",{className:(0,z["default"])(y["default"].zg,0==n&&y["default"].block||y["default"].hide)},m["default"].createElement("div",{className:y["default"].bgColor}),m["default"].createElement(E["default"],{Text:"登陆授权中",textColor:"#fff"})))}}]),t}(h.Component),I=function(e){return{wechat:e.infodata.getIn(["USER_INFO","data"])}},R=function(e){return{push:function(t){e((0,k.push)(t))},pop:function(){e((0,k.goBack)())},get:function(){e({type:"USER_INFO"})},getAll:function(){e({type:"RATE"}),e({type:"SAFE_CARD_INFO"})}}};t["default"]=(0,B.connect)(I,R)(C)},1103:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(890),l=a(o);t["default"]=l["default"]},1437:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___G73Z0{background-color:#fff;position:absolute;padding-top:44px}.bg___G73Z0,.zg___wUvCx{left:0;top:0;width:100%;height:100vh}.zg___wUvCx{position:fixed;z-index:9999}.zg___wUvCx .bgColor___19R-P{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#000;opacity:.65}.content___1KRnL{padding:10px 15px}.content___1KRnL h1{font-size:20px;text-align:center;line-height:20px}.content___1KRnL p{font-size:14px;text-align:center}.content___1KRnL button{color:#fff;font-size:18px;text-align:center;height:40px;width:100%;margin-top:32px;background-color:#00a7e1;border:0;border-radius:5px}.imgBox___38XBy{background:url("+n(2024)+") no-repeat;background-size:100% 100%}.failBox___5KQ-n,.imgBox___38XBy{width:105px;height:108px;margin:0 auto;margin-top:32px}.failBox___5KQ-n{background-color:#f76260;border-radius:50%;position:relative}.failIcon___1J3Dw{width:8px;height:50px;position:absolute;left:50%;top:50%;margin-top:-25px;margin-left:-4px;background:url("+n(1953)+") no-repeat;background-size:100% 100%}.block___3i039{display:block}.hide___3uVDt{display:none}",""]),t.locals={bg:"bg___G73Z0",zg:"zg___wUvCx",bgColor:"bgColor___19R-P",content:"content___1KRnL",imgBox:"imgBox___38XBy",failBox:"failBox___5KQ-n",failIcon:"failIcon___1J3Dw",block:"block___3i039",hide:"hide___3uVDt"}},1953:function(e,t,n){e.exports=n.p+"static/media/fail.4f7184aa.png"},2024:function(e,t,n){e.exports=n.p+"static/media/hd_ok.ea592fa8.png"},2305:[2550,1437]});