webpackJsonp([98],{946:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,h["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,p,c,d=n(2),u=a(d),_=n(5),f=a(_),s=n(3),h=a(s),x=n(4),m=a(x),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=n(1),w=a(b),v=(n(19),n(10)),E=a(v),y=n(9),k=n(8),D=n(2403),T=a(D),W=n(26),A=a(W),S=n(52),z=a(S),N=n(17),O=a(N),P=(p=r=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||(0,m["default"])(t)).call(this,e));c.call(n);var a=n.props.params;a.address,a.phone,a.consignee,a.is_default,a.id;return n.state={index:0,num:0},n.handleSubmit=n.handleSubmit.bind(n),n}return l(t,e),g(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.clearData()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.pop;return w["default"].createElement("div",null,w["default"].createElement("div",{className:T["default"].bg},w["default"].createElement(E["default"],{title:"新增地址",onLeft:e,backgroundColor:"#fff",color:"#000"}),w["default"].createElement(A["default"],{ref:"tipbar",className:T["default"].tips}),w["default"].createElement(z["default"],{ref:"success"}),w["default"].createElement("div",{className:T["default"].container},w["default"].createElement("form",{ref:"siteBox"},w["default"].createElement("ul",null,w["default"].createElement("li",null,w["default"].createElement("span",null,"收货人 "),w["default"].createElement("input",{type:"text",name:"realname",placeholder:"请输入姓名"})),w["default"].createElement("li",null,w["default"].createElement("span",null,"收货电话"),w["default"].createElement("input",{type:"text",name:"mobile",placeholder:"请输入11位手机号码"})),w["default"].createElement("li",null,w["default"].createElement("span",{className:T["default"].addTitle},"收货地址"),w["default"].createElement("textarea",{rows:"2",cols:"20",name:"address",className:T["default"].addtxt,placeholder:"请详细填写收货地址"}),w["default"].createElement("div",{style:{clear:"both"}})))),w["default"].createElement("div",{style:{textAlign:"center"}},w["default"].createElement("div",{className:T["default"].subBtn,onClick:this.handleSubmit},"保存")))))}}]),t}(w["default"].Component),c=function(){var e=this;this.handleSubmit=function(t){var n=(e.props.addData,e.refs.siteBox.mobile.value),a=e.refs.siteBox.realname.value,o=e.refs.siteBox.address.value;O["default"].checkMobile(n)?a?o?e.props.addAddress(a,n,o,"0"):e.showTips("请输入详细地址！"):e.showTips("请输入收货人!"):e.showTips("请输入正确的手机号码!")},this.showTips=function(t){e.refs.tipbar.open(t)},this.componentWillReceiveProps=function(t){var n=t.addData;t.pop;n&&e.refs.success.show({text:"添加地址成功",callback:function(){e.props.pop()}})}},p),B=function(e){return!(!e||100!=e.code)},V=function(e){return{addData:B(e.infodata.getIn(["ADD_ADDRESS","data"]))}},C=function(e){return{addAddress:function(t,n,a,o){e({type:"ADD_ADDRESS",params:[t,n,a,o]})},pop:function(){e((0,k.goBack)())},push:function(t){e((0,k.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"ADD_ADDRESS"})}}};t["default"]=(0,y.connect)(V,C)(P)},1538:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___1hlZ0{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto}.container___VxanE{width:100%;background-color:#f0eff5;margin-top:44px}.container___VxanE ul{width:100%;list-style:none;border-bottom:1px solid #ccc;background-color:#fff}.container___VxanE ul .title___2JfDg{font-size:16px}.container___VxanE ul .title___2JfDg .titleTxt___22bpj{float:left;width:80%;line-height:50px;text-align:center;font-weight:700}.container___VxanE ul li{font-size:14px;width:100%;padding-left:20px;line-height:50px;border-top:1px solid #ccc}.container___VxanE ul li .gobackImg___qksPD{border:1px solid #fff;width:25px;float:left}.container___VxanE ul li input{border:none;outline:none;margin-left:20px;color:#666}.tip___1NYl2{line-height:20px;width:60%;margin:0 auto;background-color:#000;color:#fff;font-size:12px;padding:5px 20px;text-align:center}.tipWraper___HgO-h{width:100%;position:fixed;top:30%;display:none}.active___O1Tyw{width:100%;position:fixed;top:30%;display:block}.popWraper___1C6qs{position:fixed;top:14%;left:0;width:100%;z-index:1005}.needPop___1XDQc{width:305px;height:332px;margin:0 auto;color:#fff;background-size:100% 100%;padding:100px 30px 40px}.closeWraper___3rWJy{width:100%;text-align:center;margin-top:20px}.contentTxtSuc___WFmNp{text-align:center;font-size:12px;line-height:20px;width:235px}.titleTxtsc___cw80F{font-size:16px;line-height:80px;text-align:center}.Active11___1z77p{display:none}.shadow___3vlOj{position:fixed;top:0;width:100%;height:200%;background-color:#000;opacity:.6;z-index:1000}.subBtn___36ONT{border:none;width:90%;height:44px;line-height:44px;margin:0 auto;background-color:#fe684b;margin-top:20px;color:#fff;font-size:18px}.needPopfail___18-hu{width:305px;height:261px;margin:0 auto;color:#fff;background-size:100% 100%;padding:80px 30px 40px}.addTitle___24Kcg{display:block;float:left}.addtxt___1hKa4{outline:none;border:none;width:72%;height:50px;color:#666;margin-top:14px;margin-left:20px;float:left;line-height:20px;resize:none}.tips___3rOGy{position:relative}",""]),t.locals={bg:"bg___1hlZ0",container:"container___VxanE",title:"title___2JfDg",titleTxt:"titleTxt___22bpj",gobackImg:"gobackImg___qksPD",tip:"tip___1NYl2",tipWraper:"tipWraper___HgO-h",active:"active___O1Tyw",popWraper:"popWraper___1C6qs",needPop:"needPop___1XDQc",closeWraper:"closeWraper___3rWJy",contentTxtSuc:"contentTxtSuc___WFmNp",titleTxtsc:"titleTxtsc___cw80F",Active11:"Active11___1z77p",shadow:"shadow___3vlOj",subBtn:"subBtn___36ONT",needPopfail:"needPopfail___18-hu",addTitle:"addTitle___24Kcg",addtxt:"addtxt___1hKa4",tips:"tips___3rOGy"}},2403:[2573,1538]});