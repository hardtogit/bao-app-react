webpackJsonp([58],{377:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".formWrap___f-h94{margin-top:15px}.loading___1xDuv{width:100%;text-align:center;color:#fff;font-size:18px}.loading___1xDuv,.loading___1xDuv>span{display:inline-block}",""]),t.locals={formWrap:"formWrap___f-h94",loading:"loading___1xDuv"}},465:[2573,377],1056:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=n(2),u=o(f),s=n(5),c=o(s),d=n(3),p=o(d),m=n(4),_=o(m),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n(1),y=o(v),g=n(9),C=n(56),b=o(C),E=n(25),w=o(E),x=n(10),T=o(x),k=n(46),I=o(k),V=n(138),A=o(V),P=n(26),W=o(P),R=n(465),S=o(R),D=n(55),H=o(D),M=n(17),F=o(M),Y=n(21),O=o(Y),j=n(20),K=a(j),N=n(8),q=n(57),z=o(q),B=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.onValid=function(){var e=n.refs.form.getValue();n.props.sendCode(e.mobile,e.captcha)},n.onInvalid=function(e,t,a){n.setState({errorMessage:a})},n.sendVerifyCode=function(){var e=n.refs.form.getValue();return F["default"].checkMobile(e.mobile)?void n.props.getCode(e.mobile):(n.refs.tipbar.open("电话号码错误"),!1)},n.state={errorMessage:"",init:!0,active:!0},n}return l(t,e),h(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.code,n=e.sendCodeData,a=this,o=this.refs.alert;if(n){var r=n.code;300==r&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"验证失败",okText:"确定"})),301==r&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"手机号不存在",okText:"确定"})),302==r&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"手机号已注册",okText:"确定"})),303==r&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"签名错误",okText:"确定"})),304==r&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"用户不存在",okText:"确定"})),305==r&&(a.refs.verifyCode.setState({active:!0,count:0}),o.show({content:"用户被冻结",okText:"确定"}))}if(t){var i=this.refs.alert;100==t&&this.state.init&&(this.props.push("/findpasswordSetPassword"),this.props.gxReders(this.refs.form.getValue()),this.setState({init:!1})),300==t&&i.show({content:"验证码错误，请重新输入验证码 ",okText:"确定"}),301==t&&i.show({content:"验证码失效，请重新获取验证码",okText:"确定"})}}},{key:"render",value:function(){return y["default"].createElement("div",{className:H["default"].panel},y["default"].createElement(T["default"],{onLeft:this.props.pop,title:"验证手机号码"}),y["default"].createElement(I["default"],{className:S["default"].formWrap,ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},y["default"].createElement(b["default"],{ref:"mobile",name:"mobile",label:"手机号",placeholder:"请输入11位手机号",type:"validateItem",reg:{required:{message:"手机号不能为空"},mobile:{message:"请输入正确的手机号"}},borderType:"two"}),y["default"].createElement(b["default"],{ref:"captcha",name:"captcha",label:"验证码",type:"validateItem",right:y["default"].createElement(A["default"],{ref:"verifyCode",onClick:this.sendVerifyCode,containerStyle:{height:44},init:!0}),reg:{required:{message:"验证码不能为空"},captcha:{message:"请输入正确的验证码"}},borderType:"three"}),y["default"].createElement(w["default"],{className:H["default"].buttonWrap,text:this.props.pending&&y["default"].createElement(z["default"],{color:"rgba(255,255,255,.8)",text:"下一步",className:H["default"].loading})||"下一步",type:"submit"})),y["default"].createElement(W["default"],{ref:"tipbar"}),y["default"].createElement(O["default"],{ref:"alert"}))}}]),t}(y["default"].Component),G=function(e,t){return{sendCodeData:e.infodata.getIn([K.VERIFY_CAPTCHA,"data"]),code:e.infodata.getIn([K.CHECK_VERIFY_CAPTCHA_W,"data"])&&e.infodata.getIn([K.CHECK_VERIFY_CAPTCHA_W,"data"]).code||!1,pending:e.infodata.getIn([K.CHECK_VERIFY_CAPTCHA_W,"pending"])}},J=function(e,t){return{getCode:function(t){var n=Date.parse(new Date)/1e3,a=t+2+n+F["default"].key();e({type:K.VERIFY_CAPTCHA,params:[{mobile:t,type:2,clientTime:n,sign:F["default"].md5(a)}]})},pop:function(){e((0,N.goBack)())},gxReders:function(t){e({type:K.FOR_GET_PWD,data:t})},sendCode:function(t,n){e({type:K.CHECK_VERIFY_CAPTCHA_W,params:[{mobile:t,code:n}]})},push:function(t){e((0,N.push)(t))}}};t["default"]=(0,g.connect)(G,J)(B)},1107:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1056),r=a(o);t["default"]=r["default"]}});