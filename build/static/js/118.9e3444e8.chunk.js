webpackJsonp([118],{124:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,h["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,u,c=n(2),s=o(c),f=n(5),d=o(f),p=n(3),h=o(p),_=n(4),b=o(_),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=n(1),m=o(v),x=n(8),w=o(x),g=n(33),k=(o(g),n(150)),C=o(k),S=n(9),E=o(S),T=(u=a=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.handleAppStateChange=function(e){if("inactive"==e)n.exitTime=(new Date).getTime();else if("background"==e)n.exitTime=(new Date).getTime();else if("active"==e){if(!n.exitTime)return!1;var t=Math.round(((new Date).getTime()-n.exitTime)/1e3);t<=n.state.count?n.setState({count:n.state.count-t}):(n.setState({active:!0,count:0}),clearInterval(n.interval))}},n.state={active:!0,count:0,text:"发送验证码",time:0},n.exitTime="",n}return l(t,e),y(t,[{key:"tick",value:function(){var e=this.state,t=e.count,n=e.time;t>0?this.setState({count:t-1}):(this.setState({active:!0,time:n+1}),clearInterval(this.interval))}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.interval=setInterval(this.tick.bind(this),1e3)})},{key:"handleClick",value:function(){this.state.active&&(this.setState({active:!1,count:this.props.countdown||this.props.countdown}),this.setInterval(),this.props.onClick&&0==this.props.onClick()&&this.setState({active:!0,count:0}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderActiveStatus",value:function(){var e=this.props,t=e.label,n=e.init,o=this.state,r=o.text,i=o.time,l=t;return n&&0==i&&(l=r),m["default"].createElement("div",{className:(0,w["default"])(C["default"].verifyCode,this.props.className),style:this.props.containerStyle,onClick:this.handleClick.bind(this)},m["default"].createElement("span",{className:C["default"].text,style:this.props.textStyle},l))}},{key:"renderUnactiveStatus",value:function(e){var t=(this.props.format||this.props.format).replace(/\$time/,e);return m["default"].createElement("div",{className:(0,w["default"])(C["default"].verifyCode,C["default"].verifyCodeDisable,this.props.className),style:this.props.containerDisableStyle},m["default"].createElement("span",{className:(0,w["default"])(C["default"].text,C["default"].textDisable),style:this.props.textDisableStyle},t))}},{key:"render",value:function(){return this.state.active?this.renderActiveStatus(C["default"]):this.renderUnactiveStatus(this.state.count,C["default"])}},{key:"open",value:function(){this.handleClick()}}]),t}(m["default"].Component),a.propTypes={label:E["default"].string,countdown:E["default"].number,format:E["default"].string,onClick:E["default"].func,containerStyle:E["default"].object,containerDisableStyle:E["default"].object,textStyle:E["default"].object,textDisableStyle:E["default"].object},a.defaultProps={label:"重新发送",countdown:60,format:"$timeS"},u);t["default"]=T},135:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".verifyCode___3kbyl{width:122px;height:44px;background-color:#00a7e1;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.verifyCodeDisable___1pq7E{background-color:#45c4f0;border-color:#45c4f0;border-width:0}.verifyCodeWrap___1AZwh{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.text___2ZjGX{font-size:14px;text-align:center;color:#fff;display:block;width:100%}.textDisable___1XtuM{color:#87dfff}",""]),t.locals={verifyCode:"verifyCode___3kbyl",verifyCodeDisable:"verifyCodeDisable___1pq7E",verifyCodeWrap:"verifyCodeWrap___1AZwh",text:"text___2ZjGX",textDisable:"textDisable___1XtuM"}},150:[2369,135],212:[2362,243],219:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,h["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,u,c=n(2),s=o(c),f=n(5),d=o(f),p=n(3),h=o(p),_=n(4),b=o(_),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=n(1),m=o(v),x=n(38),w=o(x),g=n(212),k=o(g),C=n(8),S=(o(C),n(9)),E=o(S),T=(u=a=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return n.toggle=function(){return n.refs.modal.toggle()},n.show=function(){return n.refs.modal.show()},n.hide=function(){return n.refs.modal.hide()},n.contentStyle=function(){return{backgroundColor:"blue",height:"100%"}},n.choose=function(e){n.props.items[e].canClick&&(n.props.callBackFun(e),n.hide())},n}return l(t,e),y(t,[{key:"render",value:function(){var e=this,t=w["default"][this.props.mode],n={width:"100%",position:"absolute",bottom:"0",boxSizing:"border-box",padding:"0 8px"};return m["default"].createElement(t,{ref:"modal",className:k["default"].selectBox,contentStyle:n},m["default"].createElement("ul",{className:k["default"].select},this.props.items.map(function(t,n){return m["default"].createElement("li",{style:{color:t.color},onClick:function(){e.choose(n)},key:n},t.text)})),m["default"].createElement("div",{className:k["default"].cancel,onClick:function(){e.hide()}},"取消"))}}]),t}(m["default"].PureComponent),a.propTypes={mode:E["default"].oneOf(["OutlineModal","ScaleModal","FadeModal","FlyModal","DropModal","WaveModal"]),items:E["default"].arrayOf(E["default"].object),callBackFun:E["default"].func.isRequired},a.defaultProps={mode:"FlyModal"},u);t["default"]=T},243:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".selectBox___TI9HV{width:100%;height:100%}.selectBox___TI9HV .cancel___2P152{margin-bottom:8px;border-radius:4px;background-color:#fff;overflow:hidden;font-weight:500;padding:1px;width:100%;border-color:#d1d3d6;color:#007aff;font-size:21px;line-height:42px;height:44px;cursor:pointer;text-align:center;margin-top:8px}.selectBox___TI9HV .select___1bWGR{width:100%;background:#f1f2f3;border-radius:4px}.selectBox___TI9HV .select___1bWGR li{height:44px;line-height:44px;font-size:16px;list-style:none;text-align:center;border-bottom:1px solid #ddd}.selectBox___TI9HV .select___1bWGR li:last-child{border-bottom:none}",""]),t.locals={selectBox:"selectBox___TI9HV",cancel:"cancel___2P152",select:"select___1bWGR"}},1231:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c,s=n(2),f=r(s),d=n(5),p=r(d),h=n(3),_=r(h),b=n(4),y=r(b),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,f["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=n(1),x=r(m),w=n(12),g=(r(w),n(42)),k=(r(g),n(156)),C=(r(k),n(87)),S=(r(C),n(32)),E=(o(S),n(103)),T=(r(E),n(99)),M=(r(T),n(124)),D=r(M),j=n(219),I=(r(j),n(74)),B=(r(I),n(27)),P=(r(B),n(88)),W=(r(P),n(2197)),N=(r(W),n(11),n(10)),O=n(301),R=(r(O),n(26)),G=(r(R),c=u=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||(0,y["default"])(t)).call(this,e));return n.state={time:0},n}return a(t,e),v(t,[{key:"sendCode",value:function(){this.refs.phone.value}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return x["default"].createElement("div",null,"预留手机号：",x["default"].createElement("input",{ref:"phone",type:"text"}),x["default"].createElement("input",{type:"text",placeholder:"请输入验证码"}),x["default"].createElement(D["default"],{init:!0,onClick:this.sendCode}))}}]),t}(m.Component),u.defaultProps={data:[{color:"#000",text:"ds"},{color:"#000",text:"ds"},{color:"#000",text:"ds"}]},c),H=function(e,t){return{}},V=function(e,t){return{sendCode:function(t){e({type:"",param:[t]})}}};t["default"]=(0,N.connect)(H,V)(G)},1644:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"",""])},2197:[2365,1644]});