webpackJsonp([26],{143:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir"}},152:[2083,143],892:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),_=o(u),l=n(5),c=o(l),s=n(3),f=o(s),p=n(4),d=o(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,_["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=n(1),x=o(m),b=n(152),h=o(b),y=n(1654),v=o(y),w=(n(22),n(23)),E=o(w),I=n(9),k=n(10),T=function(e){function t(){var e,n,o,i;a(this,t);for(var u=arguments.length,_=Array(u),l=0;l<u;l++)_[l]=arguments[l];return n=o=r(this,(e=t.__proto__||(0,d["default"])(t)).call.apply(e,[this].concat(_))),o.alert=function(e){o.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){o.props.go(e)}})},o.dom=function(){var e=o.props,t=e.set,n=e.go;return x["default"].createElement("div",null,x["default"].createElement("div",{className:h["default"].suTitle},"恭喜你注册成功"),x["default"].createElement("div",{className:h["default"].suText},"抵用券已放入账户"),x["default"].createElement("div",{className:h["default"].suImg},x["default"].createElement("img",{src:v["default"]})),x["default"].createElement("div",{className:h["default"].suMs},"实名投资可再得",x["default"].createElement("span",null,"700"),"元抵用券"),x["default"].createElement("div",{className:h["default"].buttonBox},x["default"].createElement("span",{className:h["default"].button,onClick:function(){t(),n("/user/setting/identityAuth")}},"立即投资")))},i=n,r(o,i)}return i(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mobile,n=e.code,o=e.data;t?n?o||this.alert("/registerSetPassword"):this.alert("/registerVerifyMobile"):this.alert("/register")}},{key:"render",value:function(){var e=this.props,t=e.mobile,n=e.code,o=e.data,a=void 0;return t&&n&&o&&(a=this.dom()),x["default"].createElement("div",{className:h["default"].suBody},a,x["default"].createElement(E["default"],{ref:"alert"}))}}]),t}(m.Component),N=function(e){return{mobile:e.infodata.getIn(["REGISTER_NUM","mobile"]),code:e.infodata.getIn(["REGISTER_NUM","code"]),data:e.infodata.getIn(["REGISTER","data"])}},B=function(e,t){return{go:function(t){e((0,k.push)(t))},set:function(){e({type:"REGISTER_NUM",key:"regSuccess",data:{reg:!0}})}}};t["default"]=(0,I.connect)(N,B)(T)},935:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(892),r=o(a);t["default"]=r["default"]},1654:function(e,t,n){e.exports=n.p+"static/media/juan.f6fab12c.png"}});