webpackJsonp([172],{1088:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(2),u=a(c),r=n(5),_=a(r),s=n(3),d=a(s),f=n(4),p=a(f),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),h=a(g),x=n(12),b=a(x),k=n(8),E=(a(k),n(2114)),v=a(E),w=n(26),D=a(w),B=n(22),y=a(B),N=n(11),C=n(10),I=n(83),O=a(I),F=n(79),A=a(F),U=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return n.keyUp=function(e){var t=e.target.value;n.setState({content:t}),""!=t&&n.refs.contactNum.value.length>4?n.setState({disable:!1,number:n.refs.contactNum.value}):n.setState({disable:!0})},n.numChange=function(e){var t="";t=n.refs.contactNum.value.replace(/\D/g,""),n.refs.contactNum.value=t,t.length>4&&""!=n.refs.text.value?n.setState({disable:!1,number:t}):n.setState({disable:!0})},n.change=function(e){var t=e.target.files[0],a=n.state,o=(a.img,a.file,new FileReader),l=t.name,i=/[^\s]+\.(jpg|gif|png|bmp)/i;i.test(l)?(o.readAsDataURL(t),o.onload=function(e){var a=h["default"].createElement("span",null,h["default"].createElement("img",{src:e.target.result}));n.setState({img:a,file:t}),n.uploadImg()}):n.refs.alert.show({title:"",content:"上传文件格式错误，只能为图片。",okText:"确定",okCallback:function(){}})},n.uploadImg=function(){var e=new FormData;e.append("photo",n.state.file);var t={file:"file",data:e};n.props.upload(t)},n.loading=function(){return h["default"].createElement(y["default"],{Text:"图片上传中..."})},n.send=function(){var e={imgs:n.state.imgUrl,content:n.state.content,contact:n.state.number};n.props.send(e)},n.state={img:"",file:"",content:"",numReady:!1,disable:!0,number:"",imgUrl:[]},n}return i(t,e),m(t,[{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.code,a=e.pending,o=e.imgData,l=e.imgUpload;100!=n||a||this.refs.success.show({text:"提交意见成功!",callback:function(){t.props.pop("/login")}}),300!=n||a||this.refs.alert.show({title:"对不起提交意见出错！重新提交？",okText:"确定"}),o&&100==o.code&&this.setState({imgUrl:[o.data.url]}),l&&1==l?this.setState({disable:!0}):""!=this.state.content&&this.refs.contactNum.value.length>4?this.setState({disable:!1}):this.setState({disable:!0})}},{key:"render",value:function(){var e=this,t=this.props,n=t.pending,a=t.imgUpload,o="";return o=1==a?h["default"].createElement("div",null,"图片上传中..."):n&&h["default"].createElement(O["default"],{color:"rgba(255,255,255,.8)",text:"提交中",className:v["default"].loading})||"提交意见反馈",h["default"].createElement("div",null,h["default"].createElement(b["default"],{onLeft:this.props.pop},"意见反馈"),h["default"].createElement("div",{className:v["default"].content},h["default"].createElement("div",{className:v["default"].textBox},h["default"].createElement("textarea",{ref:"text",placeholder:"请详细描述您的问题或建议，我们将及时跟进解决。(建议添加相关问题的截图)",value:this.state.content,onChange:this.keyUp}),h["default"].createElement("div",{className:v["default"].choose},h["default"].createElement("span",{className:v["default"].OneInput},h["default"].createElement("input",{type:"file",name:"photo",onChange:function(t){e.change(t)}}),this.state.img))),h["default"].createElement("div",{className:v["default"].contact},h["default"].createElement("label",{className:v["default"].num},"联系方式(必填)"),h["default"].createElement("input",{type:"text",ref:"contactNum",onChange:this.numChange,placeholder:"手机号码/QQ"})),h["default"].createElement("div",{className:v["default"].sendBox},h["default"].createElement("button",{className:v["default"].sendBt,ref:"btn",disabled:1==this.state.disable,onClick:this.send},o))),h["default"].createElement(D["default"],{ref:"alert"}),h["default"].createElement(A["default"],{ref:"success"}))}}]),t}(g.Component),V=function(e){return{pending:e.infodata.getIn(["FEED_BACK","pending"]),imgData:e.infodata.getIn(["UPLOAD_FEED_BACK_IMG","data"]),imgUpload:e.infodata.getIn(["UPLOAD_FEED_BACK_IMG","pending"]),code:e.infodata.getIn(["FEED_BACK","data"])&&e.infodata.getIn(["FEED_BACK","data"]).code||!1}},P=function(e){return{send:function(t){e({type:"FEED_BACK",params:[t]})},upload:function(t){e({type:"UPLOAD_FEED_BACK_IMG",params:[t]})},pop:function(){e((0,C.goBack)())},clean:function(){e({type:"CLEAR_INFO_DATA",key:"FEED_BACK"})}}};t["default"]=(0,N.connect)(V,P)(U)},1513:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".content___25uDk{position:absolute;width:100%;height:100%;padding-top:44px;overflow:auto}.content___25uDk .textBox___2rzfX{background-color:#fff}.content___25uDk .textBox___2rzfX textarea{width:100%;height:200px;font-size:16px;padding:8px 15px;border:0;outline:none;resize:none}.content___25uDk .choose___1BVmV{width:100%;padding:8px 15px}.content___25uDk .choose___1BVmV .OneInput___2Fq5M{display:inline-block;width:50px;height:50px;background:url("+n(1794)+") 50% no-repeat;background-size:100% 100%;border:1px solid #ddd;position:relative}.content___25uDk .choose___1BVmV .OneInput___2Fq5M>input{opacity:0;width:100%;height:100%;position:absolute;left:0;top:0;z-index:99}.content___25uDk .choose___1BVmV .OneInput___2Fq5M>span{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#fff}.content___25uDk .choose___1BVmV .OneInput___2Fq5M>span>img{position:absolute;left:0;top:0;width:100%;height:100%}.content___25uDk .maginL___2lCn_{margin-left:12px}.content___25uDk .sendBox___3Dy3U{width:100%;padding:12px 15px}.content___25uDk .sendBt___2Jw6N{width:100%;line-height:40px;background-color:#00a6e2;border:1px solid #00a6e2;color:#fff;border-radius:5px}.content___25uDk .sendBt___2Jw6N[disabled]{border:1px solid #90d1ed;background-color:#90d1ed}.content___25uDk .contact___ZPO2Y{display:-webkit-box;display:-ms-flexbox;display:flex;padding:15px}.content___25uDk .contact___ZPO2Y label{-webkit-box-flex:0;-ms-flex:0 1 112px;flex:0 1 112px;width:1%;line-height:28px;color:#666}.content___25uDk .contact___ZPO2Y label span{color:red}.content___25uDk .contact___ZPO2Y input{-webkit-box-flex:8;-ms-flex:8 1 auto;flex:8 1 auto;border:2px solid #90d1ed;border-radius:4px;background-color:transparent;height:32px;width:1%;text-indent:10px}.content___25uDk .contact___ZPO2Y input:focus{outline:none}.backdrop___3NQBo{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.backdrop___3NQBo .text___10VBT{color:#fff;margin:200px auto 0;text-align:center}.loading___1uwas{width:100%;text-align:center;color:#fff;font-size:18px}.loading___1uwas,.loading___1uwas>span{display:inline-block}",""]),t.locals={content:"content___25uDk",textBox:"textBox___2rzfX",choose:"choose___1BVmV",OneInput:"OneInput___2Fq5M",maginL:"maginL___2lCn_",sendBox:"sendBox___3Dy3U",sendBt:"sendBt___2Jw6N",contact:"contact___ZPO2Y",backdrop:"backdrop___3NQBo",text:"text___10VBT",loading:"loading___1uwas"}},1794:function(e,t,n){e.exports=n.p+"static/media/imageplus.02815e8f.png"},2114:[2319,1513]});