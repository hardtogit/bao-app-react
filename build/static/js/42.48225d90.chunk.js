webpackJsonp([42],{157:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}.textContent___VnGLK{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___12jPR{color:#00a6e2}",""]),e.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir",textContent:"textContent___VnGLK",protocol:"protocol___12jPR"}},173:[2491,157],1028:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,s["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(c["default"]?(0,c["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),_=o(u),l=n(5),c=o(l),p=n(3),s=o(p),f=n(4),d=o(f),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,_["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),m=n(1),x=o(m),b=n(173),h=o(b),y=n(1997),v=o(y),w=(n(19),n(23)),E=o(w),I=n(10),k=n(9),T=function(t){function e(){var t,n,o,i;a(this,e);for(var u=arguments.length,_=Array(u),l=0;l<u;l++)_[l]=arguments[l];return n=o=r(this,(t=e.__proto__||(0,d["default"])(e)).call.apply(t,[this].concat(_))),o.alert=function(t){o.refs.alert.show({content:"请先进行手机号验证",okText:"确定",okCallback:function(){o.props.go(t)}})},o.dom=function(){var t=o.props,e=t.set,n=t.go;return x["default"].createElement("div",null,x["default"].createElement("div",{className:h["default"].suTitle},"恭喜你注册成功"),x["default"].createElement("div",{className:h["default"].suText},"抵用券已放入账户"),x["default"].createElement("div",{className:h["default"].suImg},x["default"].createElement("img",{src:v["default"]})),x["default"].createElement("div",{className:h["default"].suMs},"实名投资可再得",x["default"].createElement("span",null,"700"),"元抵用券"),x["default"].createElement("div",{className:h["default"].buttonBox},x["default"].createElement("span",{className:h["default"].button,onClick:function(){e(),n("/home")}},"立即投资")))},i=n,r(o,i)}return i(e,t),g(e,[{key:"componentDidMount",value:function(){this.props.upDateStore();var t=this.props,e=t.mobile,n=t.code,o=t.data;e?n?o||this.alert("/registerSetPassword"):this.alert("/registerVerifyMobile"):this.alert("/register")}},{key:"render",value:function(){var t=this.props,e=t.mobile,n=t.code,o=t.data,a=void 0;return e&&n&&o&&(a=this.dom()),x["default"].createElement("div",{className:h["default"].suBody},a,x["default"].createElement(E["default"],{ref:"alert"}))}}]),e}(m.Component),N=function(t){return{mobile:t.infodata.getIn(["REGISTER_NUM","mobile"]),code:t.infodata.getIn(["REGISTER_NUM","code"]),data:t.infodata.getIn(["REGISTER","data"])}},B=function(t,e){return{go:function(e){t((0,k.push)(e))},upDateStore:function(){},set:function(){t({type:"REGISTER_NUM",key:"regSuccess",data:{reg:!0}})}}};e["default"]=(0,I.connect)(N,B)(T)},1080:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1028),r=o(a);e["default"]=r["default"]},1997:function(t,e,n){t.exports=n.p+"static/media/juan.f6fab12c.png"}});