webpackJsonp([96],{939:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(p["default"]?(0,p["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),d=a(r),c=n(5),p=a(c),s=n(3),u=a(s),f=n(4),_=a(f),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,d["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=n(1),m=a(x),b=(n(19),n(10)),g=a(b),w=n(9),E=n(8),v=n(2391),S=a(v),k=n(26),T=a(k),y=n(52),D=a(y),A=n(50),P=a(A),I=n(21),N=a(I),z=n(18),B=a(z),W=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.handleSubmit=function(e){var t=n.refs.siteBox.mobile.value,a=n.refs.siteBox.realname.value,o=n.refs.siteBox.address.value;B["default"].checkMobile(t)?a?o?n.props.editAddress(a,t,o,n.state.id,n.state.is_default):n.showTips("请输入详细地址！"):n.showTips("请输入收货人!"):n.showTips("请输入正确的手机号码!")},n.showTips=function(e){n.refs.tipbar.open(e)},n.componentWillReceiveProps=function(e){var t=e.editData;e.pop;t&&n.refs.success.show({text:"编辑地址成功",callback:function(){n.props.pop()}}),del&&100==del.code&&n.refs.success.show({text:"删除成功",callback:function(){n.props.pop()}}),del&&100!=del.code&&n.refs.alert.show({title:"",content:"删除地址失败",okText:"确定",okCallback:function(){}})},n.del=function(){n.refs.confirm.show({title:"",content:"确认删除该地址？",okText:"删除",cancelText:"取消",okCallback:function(){n.props.delSite(n.state.id)}})},n.state={id:JSON.parse(sessionStorage.baoEditSite).id,mobile:JSON.parse(sessionStorage.baoEditSite).phone,address:JSON.parse(sessionStorage.baoEditSite).address,realname:JSON.parse(sessionStorage.baoEditSite).consignee,is_default:JSON.parse(sessionStorage.baoEditSite).is_default,index:0,windowPop:0,num:0},n}return l(t,e),h(t,[{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.pop;return m["default"].createElement("div",null,m["default"].createElement("div",{className:S["default"].bg},m["default"].createElement(g["default"],{title:"编辑地址",onLeft:e,backgroundColor:"#fff",color:"#000"}),m["default"].createElement(T["default"],{ref:"tipbar",className:S["default"].tips}),m["default"].createElement(P["default"],{ref:"confirm"}),m["default"].createElement(D["default"],{ref:"success"}),m["default"].createElement(N["default"],{ref:"alert"}),m["default"].createElement("div",{className:S["default"].container},m["default"].createElement("form",{ref:"siteBox"},m["default"].createElement("ul",null,m["default"].createElement("li",null,m["default"].createElement("span",null,"收货人 "),m["default"].createElement("input",{type:"text",name:"realname",placeholder:"请输入收货人",defaultValue:this.state.realname})),m["default"].createElement("li",null,m["default"].createElement("span",null,"收货电话"),m["default"].createElement("input",{type:"text",name:"mobile",placeholder:"请输入联系电话",maxLength:"11",defaultValue:this.state.mobile})),m["default"].createElement("li",null,m["default"].createElement("span",{className:S["default"].addTitle},"收货地址"),m["default"].createElement("textarea",{name:"address",className:S["default"].addtxt,type:"text",cols:"80",rows:"5",placeholder:"请确保收货地址无误",defaultValue:this.state.address}),m["default"].createElement("div",{style:{clear:"both"}})))),m["default"].createElement("div",{style:{textAlign:"center"}},m["default"].createElement("div",{className:S["default"].subBtn,onClick:this.handleSubmit},"保存")))))}}]),t}(m["default"].Component),M=function(e){return!(!e||100!=e.code)},U=function(e){return{editData:M(e.infodata.getIn(["EDIT_ADDRESS","data"]))}},C=function(e){return{editAddress:function(t,n,a,o,i){e({type:"EDIT_ADDRESS",params:[t,n,a,o,i]})},pop:function(){e((0,E.goBack)())},push:function(t){e((0,E.push)(t))},clearData:function(){e({type:"CLEAR_INFO_DATA",key:"EDIT_ADDRESS"})}}};t["default"]=(0,w.connect)(U,C)(W)},1529:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___2Q7IU{position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto}.container___wAMS0{width:100%;background-color:#f0eff5;margin-top:44px}.container___wAMS0 ul{width:100%;list-style:none;border-bottom:1px solid #ccc;background-color:#fff}.container___wAMS0 ul .title___1PvxI{font-size:16px}.container___wAMS0 ul .title___1PvxI .titleTxt___346jv{float:left;width:80%;line-height:50px;text-align:center;font-weight:700}.container___wAMS0 ul li{font-size:14px;width:100%;padding-left:20px;line-height:50px;border-top:1px solid #ccc}.container___wAMS0 ul li .gobackImg___V6tEa{border:1px solid #fff;width:25px;float:left}.container___wAMS0 ul li input{border:none;outline:none;margin-left:20px;color:#666}.tip___39mWb{line-height:20px;width:60%;margin:0 auto;background-color:#000;color:#fff;font-size:12px;padding:5px 20px;text-align:center}.tipWraper___DtD8H{width:100%;position:fixed;top:30%;display:none}.active___AdpPF{width:100%;position:fixed;top:30%;display:block}.popWraper___1CUUw{position:fixed;top:14%;left:0;width:100%;z-index:1005}.needPop___ho92o{width:305px;height:332px;margin:0 auto;color:#fff;background-size:100% 100%;padding:100px 30px 40px}.closeWraper___1gBLZ{width:100%;text-align:center;margin-top:20px}.contentTxtSuc___3THDv{text-align:center;font-size:12px;line-height:20px;width:235px}.titleTxtsc___2KecE{font-size:16px;line-height:80px;text-align:center}.Active11___1puPa{display:none}.shadow___GXcbb{position:fixed;top:0;width:100%;height:200%;background-color:#000;opacity:.6;z-index:1000}.subBtn___36PgB{border:none;width:90%;height:44px;line-height:44px;margin:0 auto;background-color:#fe684b;margin-top:20px;color:#fff;font-size:18px}.needPopfail___3r7jT{width:305px;height:261px;margin:0 auto;color:#fff;background-size:100% 100%;padding:80px 30px 40px}.addTitle___2LE3U{display:block;float:left}.addtxt___3DZ-k{outline:none;border:none;width:72%;height:50px;color:#666;margin-top:14px;margin-left:20px;float:left;line-height:20px;resize:none}.tips___1zIUN{position:relative}",""]),t.locals={bg:"bg___2Q7IU",container:"container___wAMS0",title:"title___1PvxI",titleTxt:"titleTxt___346jv",gobackImg:"gobackImg___V6tEa",tip:"tip___39mWb",tipWraper:"tipWraper___DtD8H",active:"active___AdpPF",popWraper:"popWraper___1CUUw",needPop:"needPop___ho92o",closeWraper:"closeWraper___1gBLZ",contentTxtSuc:"contentTxtSuc___3THDv",titleTxtsc:"titleTxtsc___2KecE",Active11:"Active11___1puPa",shadow:"shadow___GXcbb",subBtn:"subBtn___36PgB",needPopfail:"needPopfail___3r7jT",addTitle:"addTitle___2LE3U",addtxt:"addtxt___3DZ-k",tips:"tips___1zIUN"}},2391:[2555,1529]});