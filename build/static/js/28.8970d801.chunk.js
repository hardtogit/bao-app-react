webpackJsonp([28],{758:function(e,t,n){e.exports=n.p+"static/media/IDcardDown.b79ec6df.png"},759:function(e,t,n){e.exports=n.p+"static/media/IDcardUp.e9b1e639.png"},760:function(e,t,n){e.exports=n.p+"static/media/addicon.a6a76fa6.png"},1195:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,u,c=n(2),f=a(c),p=n(5),s=a(p),_=n(3),d=a(_),m=n(4),h=a(m),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,f["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),b=a(g),v=n(2092),w=a(v),k=n(11),E=a(k),y=n(24),F=a(y),N=n(23),D=a(N),T=n(760),O=a(T),C=n(10),R=n(9),z=(u=r=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.submit=function(){if(n.refs.back.src&&n.refs.front.src){var e=new FormData,t=n.refs.file1.files[0],a=n.refs.file2.files[0];e.append("front",t),e.append("back",a),e.append("device","WAP"),n.props.upload(e)}else n.refs.alert.show({title:"",content:"请先选择您要上传的图片",okText:"确定",okCallback:function(){}})},n.changeOne=function(e){var t=e.target.files[0],a=new FileReader,i=t.name,o=/[^\s]+\.(jpg)/i;o.test(i)?(a.readAsDataURL(t),a.onload=function(e){n.refs.front.src=e.target.result}):(n.refs.front.src="",n.refs.alert.show({title:"",content:"上传文件格式错误，存管只支持jpg格式的图片。",okText:"确定",okCallback:function(){}}))},n.changeTwo=function(e){var t=e.target.files[0],a=new FileReader,i=t.name,o=/[^\s]+\.(jpg)/i;o.test(i)?(a.readAsDataURL(t),a.onload=function(e){n.refs.back.src=e.target.result}):(n.refs.back.src="",n.refs.alert.show({title:"",content:"上传文件格式错误，只能为jpg格式的图片。",okText:"确定",okCallback:function(){}}))},n.state={isOpen:!1},n}return l(t,e),x(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.data&&100==e.data.code&&this.props.push("/successTemplate?title=身份证上传成功&pushUrl=/user/recharge&text=上传成功")}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.pop,n=e.push;return b["default"].createElement("div",{className:w["default"].container},b["default"].createElement(E["default"],{onLeft:t,rightNode:b["default"].createElement("div",null,"说明"),onRight:function(){n("/user/IdCardUploadExplain")}},"身份证上传"),b["default"].createElement("div",{className:w["default"].tip},"开通存管后，第一次提现需要验证您的身份证。因涉及重要交易，请务必填写本人真实信息。"),b["default"].createElement("div",null,b["default"].createElement("div",{className:w["default"].content},b["default"].createElement("div",{className:w["default"].inputFileOne},b["default"].createElement("img",{className:w["default"].picture,ref:"front",src:"",alt:""}),b["default"].createElement("img",{className:w["default"].circle,src:O["default"],alt:""}),b["default"].createElement("div",{className:w["default"].text},"上传本人身份证(正)"),b["default"].createElement("input",{onChange:this.changeOne,ref:"file1",className:w["default"].input,type:"file"}))),b["default"].createElement("div",{className:w["default"].content},b["default"].createElement("div",{className:w["default"].inputFileTwo},b["default"].createElement("img",{className:w["default"].picture,ref:"back",src:"",alt:""}),b["default"].createElement("img",{className:w["default"].circle,src:O["default"],alt:""}),b["default"].createElement("div",{className:w["default"].text},"上传本人身份证(反)"),b["default"].createElement("input",{onChange:this.changeTwo,ref:"file2",className:w["default"].input,type:"file"}))),b["default"].createElement(F["default"],{className:w["default"].submit,onClick:this.submit,text:"确认上传"})),b["default"].createElement(D["default"],{ref:"alert"}))}}]),t}(g.Component),r.defaultProps={},u),A=function(e){return{data:e.infodata.getIn(["IDCARD_UPLOAD","data"])}},j=function(e,t){return{pop:function(){e((0,R.goBack)())},upload:function(t){e({type:"IDCARD_UPLOAD",params:[t]})},push:function(t){e((0,R.push)(t))}}};t["default"]=(0,C.connect)(A,j)(z)},1511:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".container___13nf2{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#fff}.container___13nf2 .submit___33gEu{width:90%;margin-left:5%;position:fixed;bottom:15px}.container___13nf2 .tip___1Hnx7{color:#888;font-size:14px;line-height:1.4;padding:10px 15px;background-color:#f0eff5}.container___13nf2 .inputFileOne___22kNB{width:288px;overflow:hidden;margin:0 auto;height:180px;background-image:url("+n(759)+");background-size:100% 100%;position:relative}.container___13nf2 .inputFileOne___22kNB input{width:100%;height:100%;opacity:0;position:absolute;z-index:22}.container___13nf2 .inputFileOne___22kNB .picture___mDzQK{width:290px;height:182px;top:-1px;left:-1px;position:absolute;border-radius:10px;border:0;z-index:10;display:block}.container___13nf2 .inputFileOne___22kNB .circle___25jFv{width:80px;left:105px;top:30px;position:absolute}.container___13nf2 .inputFileOne___22kNB .text___1AR3f{position:absolute;text-align:center;width:100%;top:130px;color:#999}.container___13nf2 .content___xCIJ4{width:288px;background-color:#f0eff5;border-radius:10px;margin:0 auto;margin-top:30px}.container___13nf2 .inputFileTwo___KV8Jv{width:288px;overflow:hidden;margin:0 auto;margin-bottom:70px;position:relative;height:180px;background-image:url("+n(758)+");background-size:100% 100%}.container___13nf2 .inputFileTwo___KV8Jv input{width:100%;height:100%;position:absolute;opacity:0;z-index:22}.container___13nf2 .inputFileTwo___KV8Jv .picture___mDzQK{width:290px;height:182px;top:-1px;left:-1px;z-index:10;position:absolute;border-radius:10px;border:0;display:block}.container___13nf2 .inputFileTwo___KV8Jv .circle___25jFv{width:80px;left:105px;top:30px;position:absolute}.container___13nf2 .inputFileTwo___KV8Jv .text___1AR3f{position:absolute;text-align:center;width:100%;top:130px;color:#999}",""]),t.locals={container:"container___13nf2",submit:"submit___33gEu",tip:"tip___1Hnx7",inputFileOne:"inputFileOne___22kNB",picture:"picture___mDzQK",circle:"circle___25jFv",text:"text___1AR3f",content:"content___xCIJ4",inputFileTwo:"inputFileTwo___KV8Jv"}},2092:[2246,1511]});