webpackJsonp([62],{1162:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,m["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u["default"]?(0,u["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var _,r,d=a(2),s=n(d),c=a(5),u=n(c),f=a(3),m=n(f),p=a(4),h=n(p),b=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),x=a(1),g=n(x),N=a(2177),v=n(N),k=a(11),y=n(k),E=a(18),w=(n(E),a(27)),D=n(w),C=a(174),I=n(C),O=a(24),W=n(O),S=a(23),B=n(S),G=a(94),L=n(G),Z=a(10),A=a(9),T=(r=_=function(t){function e(t){i(this,e);var a=o(this,(e.__proto__||(0,h["default"])(e)).call(this,t));return a.alert=function(t){a.refs.alert.show({content:"请先选择银行卡",okText:"确定",okCallback:function(){a.props.pop()}})},a.checkAccredit=function(){var t=a;a.refs.red.show({title:"请输入交易密码",okCallback:function(e,a){var n=void 0;n={bankCard:t.props.data.bankCard,passwordFactor:sessionStorage.getItem("passwordFactor"),mapKey:sessionStorage.getItem("mapKey"),device:"WAP",password:a},t.setState({submitting:!0,time:0}),t.props.unBind(n),e()}})},a.submit=function(){a.state.submitting||(a.props.clean(),a.checkAccredit())},a.state={isOpen:!1,submitting:!1,time:0},a}return l(e,t),b(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.data||this.alert("/user/setting/myBankCard")}},{key:"componentWillReceiveProps",value:function(t){var e=this;t.unbindData&&(1==t.unbindData.status?this.state.time<=3&&(this.setState({time:this.state.time+1}),t.flagData&&"0001"==t.flagData.code?this.props.replace("/successTemplate?title=解绑成功&text=解绑成功"):this.state.time>=3?(this.setState({submitting:!1}),t.flagData&&"0001"!=t.flagData.code?this.refs.alert.show({content:t.flagData.msg,okText:"确定"}):this.refs.alert.show({content:"解绑失败",okText:"确定"})):setTimeout(function(){e.props.verify(t.unbindData.msgId)},3e3)):301==t.unbindData.code&&(this.refs.alert.show({content:"交易密码错误",okText:"确定"}),this.setState({submitting:!1})))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=void 0,e=this.props,a=e.pop,n=e.data,i=this.props.params.color;if(n){var o=n.bankCard.substr(n.bankCard.length-4,4);t=g["default"].createElement("div",null,g["default"].createElement("div",{className:v["default"].header},g["default"].createElement("div",{className:v["default"].item_content},g["default"].createElement("div",{className:v["default"].item,style:{backgroundColor:i}},g["default"].createElement("div",{className:v["default"].title},g["default"].createElement("div",{className:v["default"].left},g["default"].createElement("img",{className:v["default"].img,src:n.bankIcon,alt:""})),g["default"].createElement("div",{className:v["default"].right},n.bankName)),g["default"].createElement("div",{className:v["default"].num},"****  ****  ****  ",o),g["default"].createElement("img",{className:v["default"].bg,src:n.bankImg,alt:""})))),g["default"].createElement("div",{className:v["default"].detail},g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"姓名"),g["default"].createElement("div",{className:v["default"].right},n.realName)),g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"身份证号"),g["default"].createElement("div",{className:v["default"].right},n.idCard)),g["default"].createElement("div",{className:v["default"].item},g["default"].createElement("div",{className:v["default"].left},"预留手机"),g["default"].createElement("div",{className:v["default"].right},n.telNo.substr(0,3)+"****"+n.telNo.substr(n.telNo.length-4,4)))),g["default"].createElement("div",{className:v["default"].submit},g["default"].createElement(W["default"],{ref:"bottom",onClick:this.submit,className:v["default"].bottom,text:this.state.submitting?g["default"].createElement(L["default"],{text:"解绑中..."}):"同意解绑"})))}return g["default"].createElement("div",{className:v["default"].container},g["default"].createElement(y["default"],{onLeft:a,backgroundColor:"#33454c"},"管理"),g["default"].createElement(D["default"],{className:v["default"].tip,ref:"tip"}),g["default"].createElement(B["default"],{ref:"alert"}),g["default"].createElement(I["default"],{hasMoney:!1,ref:"red"}),t)}}]),e}(x.Component),_.defaultProps={},r),F=function(t){return{data:t.regStore.getIn(["STORE_CARD_INFO","data"]),unbindData:t.infodata.getIn(["UNBIND_CARD","data"]),flagData:t.infodata.getIn(["UNBIND_VERIFY","data"])}},R=function(t,e){return{pop:function(){t((0,A.goBack)())},push:function(e){t((0,A.push)(e))},unBind:function(e){t({type:"UNBIND_CARD",params:[e]})},replace:function(e){t((0,A.replace)(e))},clean:function(){t({type:"CLEAR_INFO_DATA",key:"UNBIND_CARD"}),t({type:"CLEAR_INFO_DATA",key:"UNBIND_VERIFY"})},verify:function(e){t({type:"UNBIND_VERIFY",params:[{id:e}]})}}};e["default"]=(0,Z.connect)(F,R)(T)},1579:function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".container___3-No5{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___3-No5 .header___3SCBs{background-color:#33454c}.container___3-No5 .item_content___Wa9GZ{padding:15px 25px 30px}.container___3-No5 .item_content___Wa9GZ .item___OLhh5{background-color:#317fcf;padding:15px 25px 0;height:115px;color:#fff;position:relative;overflow:hidden;border-top-left-radius:10px;border-top-right-radius:10px}.container___3-No5 .item_content___Wa9GZ .item___OLhh5 .title___1hdHY{font-size:18px;display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px;margin-bottom:20px}.container___3-No5 .item_content___Wa9GZ .item___OLhh5 .title___1hdHY .img___1Zd_z{width:30px;display:block;margin-right:10px;float:left}.container___3-No5 .item_content___Wa9GZ .item___OLhh5 .title___1hdHY .right___22E7-{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container___3-No5 .item_content___Wa9GZ .item___OLhh5 .num___1KhpD{font-size:24px;padding-left:42px;position:relative;z-index:10}.container___3-No5 .item_content___Wa9GZ .item___OLhh5 .bg___F3BFD{position:absolute;width:100px;right:-10px;bottom:-20px;opacity:.3}.container___3-No5 .item_content___Wa9GZ .btn___Silty{height:35px;border:1px solid #389a88;text-align:center;color:#389a88;margin:15px 0}.container___3-No5 .item_content___Wa9GZ .btn___Silty .add___156c6{font-size:32px;position:relative;bottom:5px;color:#888}.container___3-No5 .item_content___Wa9GZ .btn___Silty .text___tGfXP{font-size:16px;position:relative;bottom:8px}.detail___3utC1{margin-left:15px;margin-right:15px;border-top:1px solid #ddd;margin-top:30px;padding:5px 20px 40px;border-top-left-radius:6px;border-top-right-radius:6px;background-color:#fff;border-bottom:1px solid #ddd}.detail___3utC1 .item___OLhh5{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;border-bottom:1px solid #ddd}.detail___3utC1 .item___OLhh5 .left___62m0V{-webkit-box-flex:0;-ms-flex:0 80px;flex:0 80px}.detail___3utC1 .item___OLhh5 .right___22E7-{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#888}.tip___1eTm9{z-index:1000}.submit___lnIgc{margin-top:15px;padding:15px}@media screen and (max-width:360px){.container___3-No5 .item_content___Wa9GZ .item___OLhh5 .num___1KhpD{font-size:20px}}",""]),e.locals={container:"container___3-No5",header:"header___3SCBs",item_content:"item_content___Wa9GZ",item:"item___OLhh5",title:"title___1hdHY",img:"img___1Zd_z",right:"right___22E7-",num:"num___1KhpD",bg:"bg___F3BFD",btn:"btn___Silty",add:"add___156c6",text:"text___tGfXP",detail:"detail___3utC1",left:"left___62m0V",tip:"tip___1eTm9",submit:"submit___lnIgc"}},2177:[2347,1579]});