webpackJsonp([82],{28:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,d["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(s["default"]?(0,s["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l,_,p=n(2),u=o(p),f=n(5),s=o(f),c=n(3),d=o(c),x=n(4),g=o(x),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),b=n(1),h=o(b),y=n(8),v=o(y),k=n(30),w=o(k),T=n(9),I=o(T),E=(_=l=function(t){function e(t){a(this,e);var n=i(this,(e.__proto__||(0,g["default"])(e)).call(this,t));return n.state={disable:!0,message:""},n}return r(e,t),m(e,[{key:"open",value:function(t,e){var n=this;this.setState({disable:!1,message:t}),this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){n.setState({disable:!0}),e&&"function"==typeof e&&e()},2e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.disable?null:h["default"].createElement("div",{className:(0,v["default"])(w["default"].Tipbar,this.props.className)},h["default"].createElement("span",{className:w["default"].text},this.state.message||this.props.text))}}]),e}(h["default"].Component),l.propTypes={text:I["default"].string},_);e["default"]=E},29:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".Tipbar___38rzT{position:fixed;top:44px;width:100%;height:45px;background-color:#7b0002;color:#fff}.Tipbar___38rzT .text___3NoM-{display:block;line-height:45px;text-align:center}",""]),e.locals={Tipbar:"Tipbar___38rzT",text:"text___3NoM-"}},30:[2322,29],49:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,"a{text-decoration:none}.ml0___Lrba9{margin-left:0}.mt15___3Iu-Y{margin-top:15px}.mt30___mElkZ{margin-top:30px}.topBar___sdCDR{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;padding-left:15px;padding-right:15px;margin-top:14px}.topBarLeft___ptMsa{text-align:left;color:#00a6e2}.topBarLeft___ptMsa,.topBarRight___1-WHt{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:16px}.topBarRight___1-WHt{text-align:right}.markTitle___1Ryki{margin-top:34px;margin-bottom:40px;font-size:25px;color:#000;text-align:center;display:block}.panel___suO5X{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:#f0eff5;padding-top:44px}.panelContent___1oJxV{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.buttonWrap___3LCCb{margin-top:40px;margin-left:15px;margin-right:15px}.loading____zTXo{width:100%;text-align:center;color:#fff;font-size:18px}.loading____zTXo,.loading____zTXo>span{display:inline-block}.center___2mH3M{text-align:center}.content___75OOP{position:absolute;left:0;padding-top:44px;top:0;width:100%;height:100%;background-color:#fff}.tip___29ByO{left:0}",""]),e.locals={ml0:"ml0___Lrba9",mt15:"mt15___3Iu-Y",mt30:"mt30___mElkZ",topBar:"topBar___sdCDR",topBarLeft:"topBarLeft___ptMsa",topBarRight:"topBarRight___1-WHt",markTitle:"markTitle___1Ryki",panel:"panel___suO5X",panelContent:"panelContent___1oJxV",buttonWrap:"buttonWrap___3LCCb",loading:"loading____zTXo",center:"center___2mH3M",content:"content___75OOP",tip:"tip___29ByO"}},50:function(t,e,n){var o=n(49);"string"==typeof o&&(o=[[t.id,o,""]]);n(7)(o,{});o.locals&&(t.exports=o.locals)},225:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".header___17tYc{background-color:#fff}.agreement___2oAJK{text-align:center;margin-top:20px;color:#626262;font-size:12px}.agreement___2oAJK .agreementText___2HpuB{color:#00a6e2;margin:0 5px}.Icon___3sRiC{margin-right:15px}.Icon___3sRiC img{width:20px}.suBody___1Pbdf{position:absolute;background-color:#fff;height:100%;width:100%;overflow:auto}.suMs___1_0Wi{margin-top:50px;font-size:13px;color:#666;text-align:center}.suMs___1_0Wi span{font-size:17px;color:#f13e15;display:inline-block}.buttonBox___2LGX4{margin-top:15px;margin-bottom:20px;text-align:center}.buttonBox___2LGX4 .button___dN6lA{display:inline-block;width:70%;text-align:center;padding:8px 0;background-color:#f70;border-radius:30px;color:#fff;font-size:18px}.suTitle___1_060{margin-top:71px;font-size:25px;text-align:center}.suText___2wple{text-align:center;margin-top:40px;font-size:15px;color:#666}.suImg___Jb3nS{margin-top:20px;text-align:center}.suImg___Jb3nS img{width:80%}.backImg___2tiDo{width:10px;height:20px;margin-left:15px;margin-top:12px}.buttonWrap___3irmd{margin:30px 15px 0}.content___3YN0a{top:0}.content___3YN0a,.InputBox___yZdKF{padding-top:44px;position:absolute;left:0;width:100%;height:100%;background-color:#fff}.inputWrap___20wir{margin:30px 0 0 15px}.textContent___VnGLK{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___12jPR{color:#00a6e2}",""]),e.locals={header:"header___17tYc",agreement:"agreement___2oAJK",agreementText:"agreementText___2HpuB",Icon:"Icon___3sRiC",suBody:"suBody___1Pbdf",suMs:"suMs___1_0Wi",buttonBox:"buttonBox___2LGX4",button:"button___dN6lA",suTitle:"suTitle___1_060",suText:"suText___2wple",suImg:"suImg___Jb3nS",backImg:"backImg___2tiDo",buttonWrap:"buttonWrap___3irmd",content:"content___3YN0a",InputBox:"InputBox___yZdKF",inputWrap:"inputWrap___20wir",textContent:"textContent___VnGLK",protocol:"protocol___12jPR"}},251:function(t,e,n){var o=n(225);"string"==typeof o&&(o=[[t.id,o,""]]);n(7)(o,{});o.locals&&(t.exports=o.locals)},319:function(t,e,n){t.exports=n.p+"static/media/regBack.f08fc33c.png"},1072:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,s["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u["default"]?(0,u["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),_=o(l),p=n(5),u=o(p),f=n(3),s=o(f),c=n(4),d=o(c),x=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,_["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),g=n(1),m=o(g),b=n(11),h=n(10),y=n(91),v=o(y),k=n(42),w=o(k),T=n(12),I=o(T),E=n(78),B=o(E),M=n(124),C=o(M),R=n(28),L=o(R),z=n(251),N=o(z),W=n(50),O=o(W),S=n(32),P=n(1705),X=o(P),V=n(319),J=o(V),j=n(26),H=o(j),K=n(20),Y=o(K),D=function(t){function e(t){a(this,e);var n=i(this,(e.__proto__||(0,d["default"])(e)).call(this,t));return n.onValid=function(){if(n.props.pending)return!1;var t=n.refs.form.getValue();n.props.checkExistMobile(t.mobile)},n.onInvalid=function(t,e,o){n.openTipbar(o)},n.state={init:!0},n}return r(e,t),x(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,n=this.props.go;e&&(302==e.code&&this.refs.alert.show({content:"手机号码已注册，立即登录",okText:"确定",cancel:"取消",okCallback:function(){n("/login")}}),300==e.code&&this.refs.alert.show({content:"发送验证码失败",okText:"确定",cancel:"取消"}),100==e.code&&this.state.init&&(this.props.savenum(this.refs.form.getValue().mobile),this.props.go("/registerVerifyMobile"),this.setState({init:!1})))}},{key:"openTipbar",value:function(t){this.refs.tipbar.open(t)}},{key:"render",value:function(){return m["default"].createElement("div",{className:N["default"].loginPage},m["default"].createElement(I["default"],{backgroundColor:"#fff",leftNode:m["default"].createElement("img",{src:J["default"],className:N["default"].backImg}),onLeft:this.props.goBack}),m["default"].createElement("div",{className:N["default"].content},m["default"].createElement("span",{className:O["default"].markTitle},"手机号将成为你的账号"),m["default"].createElement(B["default"],{ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},m["default"].createElement(v["default"],{containerStyle:{margin:"30px 0 0 0",paddingRight:"15px"},ref:"mobile",name:"mobile",noLeftPadding:!0,placeholder:"请输入手机号",type:"validateItem",icon:m["default"].createElement("div",{className:N["default"].Icon},m["default"].createElement("img",{src:X["default"]})),reg:{required:{message:"手机号不能为空"},mobile:{message:"请输入正确的手机号"}},borderType:"four"}),m["default"].createElement(w["default"],{containerStyle:{margin:"30px 15px 0"},text:this.props.pending?m["default"].createElement(C["default"],{text:"下一步"}):"下一步",type:"submit"}))),m["default"].createElement(L["default"],{ref:"tipbar"}),m["default"].createElement(H["default"],{ref:"alert"}))}}]),e}(m["default"].Component),G=function(t,e){var n=t.infodata;return{pending:n.getIn([S.EXIST_MOBILE,"pending"]),data:n.getIn([S.EXIST_MOBILE,"data"])||{}}},A=function(t,e){return{goBack:function(){t((0,h.goBack)())},go:function(e){t((0,h.push)(e))},checkExistMobile:function(e){var n=Date.parse(new Date)/1e3,o=e+1+n+Y["default"].key();t({type:S.EXIST_MOBILE,params:[{mobile:e,type:1,clientTime:n,sign:Y["default"].md5(o)}]})},savenum:function(e){t({type:S.REGISTER_NUM,key:"mobile",data:e})}}};e["default"]=(0,b.connect)(G,A)(D)},1125:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1072),i=o(a);e["default"]=i["default"]},1705:function(t,e,n){t.exports=n.p+"static/media/PhoneIcon.d9b2ee13.png"}});