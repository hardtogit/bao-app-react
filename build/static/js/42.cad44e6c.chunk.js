webpackJsonp([42],{374:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".formWrap___f-h94{margin-top:15px}.loading___1xDuv{width:100%;text-align:center;color:#fff;font-size:18px}.loading___1xDuv,.loading___1xDuv>span{display:inline-block}",""]),t.locals={formWrap:"formWrap___f-h94",loading:"loading___1xDuv"}},445:[2385,374],1171:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),f=o(i),c=n(5),s=o(c),d=n(3),p=o(d),_=n(4),m=o(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n(1),g=o(v),y=n(10),b=n(136),w=o(b),E=n(24),D=o(E),k=n(11),x=o(k),I=n(44),W=o(I),T=n(27),P=o(T),M=n(445),N=o(M),S=n(53),F=o(S),O=n(17),C=o(O),R=n(19),j=a(R),L=n(21),V=o(L),G=n(62),z=o(G),A=n(9),J=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||(0,m["default"])(t)).call(this,e));return n.onValid=function(){var e=n.refs.form.getValue().password,t=n.props.data,a=t.mobile,o=t.captcha;n.props.send({mobile:a,code:o,password:e})},n.onInvalid=function(e,t,a){n.setState({errorMessage:a})},n.state={errorMessage:""},n}return u(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data;t||this.refs.alert.show({content:"请先认证手机号码",okText:"确定",okCallback:function(){e.props.replace("/findpassword")}})}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.code;if(n){var a=this.refs.alert;100==n&&this.refs.success.show({text:"重置密码成功",callback:function(){t.props.replace("/login"),t.props.clear()}}),300==n&&a.show({content:"重置密码失败，请重新提交",okText:"确定"}),301==n&&a.show({content:"手机号不存在",okText:"确定"})}}},{key:"Dom",value:function(){return g["default"].createElement("div",null,g["default"].createElement(W["default"],{className:N["default"].formWrap,ref:"form",onValid:this.onValid,onInvalid:this.onInvalid},g["default"].createElement(w["default"],{containerStyle:{marginTop:15},ref:"password",name:"password",maxLength:16,label:"密码",placeholder:"设置新登录密码",type:"validateItem",reg:{reg:{reg:C["default"].checkPassword,message:"请输入正确密码"}}}),g["default"].createElement(D["default"],{className:F["default"].buttonWrap,text:this.props.pending&&g["default"].createElement(InlineLoading,{color:"rgba(255,255,255,.8)",text:"提交中",className:F["default"].loading})||"确认设置",type:"submit"})))}},{key:"render",value:function(){var e=this.props.data,t=void 0;return e&&(t=this.Dom()),g["default"].createElement("div",{className:F["default"].panel},g["default"].createElement(x["default"],{title:"设置密码"}),t,g["default"].createElement(P["default"],{ref:"tipbar"}),g["default"].createElement(z["default"],{ref:"success"}),g["default"].createElement(V["default"],{ref:"alert"}))}}]),t}(g["default"].Component),U=function(e){return{data:e.infodata.getIn(["FOR_GET_PWD","data"]),code:e.infodata.getIn(["FIND_PWD_SET","data"])&&e.infodata.getIn(["FIND_PWD_SET","data"]).code||!1,pending:e.infodata.getIn(["FIND_PWD_SET","pending"])}},q=function(e){return{send:function(t){e({type:j.FIND_PWD_SET,params:[t]})},replace:function(t){e((0,A.replace)(t))},clear:function(){e({type:"CLAER_LC",key:["FOR_GET_PWD"]})}}};t["default"]=(0,y.connect)(U,q)(J)},1222:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1171),r=a(o);t["default"]=r["default"]}});