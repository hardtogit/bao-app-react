webpackJsonp([26],{156:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}.textContent___VnGLK{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___12jPR{color:#00a6e2}",""]),t.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir",textContent:"textContent___VnGLK",protocol:"protocol___12jPR"}},170:[2357,156],228:function(e,t,n){e.exports=n.p+"static/media/regBack.f08fc33c.png"},979:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=o(l),_=n(5),c=o(_),p=n(3),f=o(p),s=n(4),d=o(s),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=n(1),x=o(m),b=n(10),h=n(9),y=n(52),I=o(y),k=n(24),v=o(k),E=n(11),w=o(E),T=n(44),B=o(T),M=n(93),N=o(M),S=n(28),C=o(S),L=n(170),P=o(L),R=n(51),W=o(R),V=n(19),z=n(1820),J=o(z),K=n(228),G=o(K),X=n(23),j=o(X),A=n(17),O=o(A),Y=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||(0,d["default"])(t)).call(this,e));return n.onValid=function(){if(n.props.pending)return!1;var e=n.refs.form.getValue();n.props.checkExistMobile(e.mobile)},n.onInvalid=function(e,t,o){n.openTipbar(o)},n.state={init:!0},n}return r(t,e),g(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=this.props.go;t&&(302==t.code&&this.refs.alert.show({content:"手机号码已注册，立即登录",okText:"确定",cancel:"取消",okCallback:function(){n("/login")}}),300==t.code&&this.refs.alert.show({content:"发送验证码失败",okText:"确定",cancel:"取消"}),100==t.code&&this.state.init&&(this.props.savenum(this.refs.form.getValue().mobile),this.props.go("/registerVerifyMobile"),this.setState({init:!1})))}},{key:"openTipbar",value:function(e){this.refs.tipbar.open(e)}},{key:"render",value:function(){return x["default"].createElement("div",{className:P["default"].loginPage},x["default"].createElement(w["default"],{backgroundColor:"#fff",leftNode:x["default"].createElement("img",{src:G["default"],className:P["default"].backImg}),onLeft:this.props.goBack}),x["default"].createElement("div",{className:P["default"].content},x["default"].createElement("span",{className:W["default"].markTitle},"手机号将成为你的账号"),x["default"].createElement(B["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},x["default"].createElement(I["default"],{containerStyle:{margin:"30px 0 0 0",paddingRight:"15px"},ref:"mobile",name:"mobile",noLeftPadding:!0,placeholder:"请输入手机号",type:"validateItem",icon:x["default"].createElement("div",{className:P["default"].Icon},x["default"].createElement("img",{src:J["default"]})),reg:{required:{message:"手机号不能为空"},mobile:{message:"请输入正确的手机号"}},borderType:"four"}),x["default"].createElement(v["default"],{containerStyle:{margin:"30px 15px 0"},text:this.props.pending?x["default"].createElement(N["default"],{text:"下一步"}):"下一步",type:"submit"}))),x["default"].createElement(C["default"],{ref:"tipbar"}),x["default"].createElement(j["default"],{ref:"alert"}))}}]),t}(x["default"].Component),D=function(e,t){var n=e.infodata;return{pending:n.getIn([V.EXIST_MOBILE,"pending"]),data:n.getIn([V.EXIST_MOBILE,"data"])||{}}},F=function(e,t){return{goBack:function(){e((0,h.goBack)())},go:function(t){e((0,h.push)(t))},checkExistMobile:function(t){var n=Date.parse(new Date)/1e3,o=t+1+n+O["default"].key();e({type:V.EXIST_MOBILE,params:[{mobile:t,type:1,clientTime:n,sign:O["default"].md5(o)}]})},savenum:function(t){e({type:V.REGISTER_NUM,key:"mobile",data:t})}}};t["default"]=(0,b.connect)(D,F)(Y)},1030:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(979),i=o(a);t["default"]=i["default"]},1820:function(e,t,n){e.exports=n.p+"static/media/PhoneIcon.d9b2ee13.png"}});