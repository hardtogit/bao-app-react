webpackJsonp([50],{936:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),r=n(o),f=a(5),s=n(f),u=a(3),_=n(u),c=a(32),p=n(c),m=a(4),g=n(m),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),b=n(x),E=a(9),v=a(8),D=a(10),k=n(D),y=a(40),S=n(y),w=a(465),T=n(w),A=a(21),I=n(A),C=a(50),N=n(C),B=a(19),z=a(2388),F=n(z),L=a(14),R=n(L),M=a(82),K=n(M),G=a(1962),H=n(G),V=a(1967),J=n(V),O=0,U=function(e){function t(e){l(this,t);var a=d(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return a.componentWillReceiveProps=function(e){var t=e.set,n=e.del,l=a.state.flag;n.status&&n.id==O&&(O=0,a.props.getAddress()),t&&100!=t.code&&!l&&a.refs.alert.show({title:"",content:"设置默认地址失败",okText:"确定",okCallback:function(){a.setState({flag:!0})}}),t&&100==t.code&&!l&&a.refs.alert.show({title:"",content:"设置默认地址成功",okText:"确定",okCallback:function(){a.setState({flag:!0}),a.props.getAddress()}})},a.choose=function(){a.setState({flag:!1}),a.props.setDeafult(arguments.length<=1?void 0:arguments[1])},a.del=function(e){a.refs.confirm.show({title:"",content:"确认删除该地址？",okText:"删除",cancelText:"取消",okCallback:function(){O=e,a.props.delSite(e)}})},a.eidt=function(e){sessionStorage.setItem("baoEditSite",(0,p["default"])(e)),a.props.push("/find/editAddress")},a.nullAddress=function(){return b["default"].createElement("div",{className:F["default"].nullDom},b["default"].createElement("img",{src:K["default"]}))},a.hasAddress=function(){var e=a.props.address;return b["default"].createElement("div",null,e&&e.sort(function(e,t){return t.is_default-e.is_default})&&e.map(function(e,t){return b["default"].createElement("div",{className:F["default"].item,key:t},b["default"].createElement("p",{className:F["default"].name},e.consignee,b["default"].createElement("span",{className:F["default"].phone},e.phone)),b["default"].createElement("p",{className:F["default"].site},e.address),b["default"].createElement("div",{className:F["default"].eidt_bg},b["default"].createElement("span",null,b["default"].createElement(T["default"],{checkedCanClick:!1,status:1==e.is_default,id:parseInt(e.id),backgroundColor:"fe684b",callBackFun:a.choose}),b["default"].createElement("span",{className:(0,R["default"])(F["default"].do_default,1==e.is_default?F["default"]["default"]:"")},1==e.is_default?"默认地址":"设为默认")),b["default"].createElement("div",{className:F["default"].delDiv,onClick:function(){a.del(e.id)}},b["default"].createElement("span",{className:F["default"].deleteTxt},"删除"),b["default"].createElement("img",{className:F["default"].deleteImg,src:H["default"]})),b["default"].createElement("div",{className:F["default"].delDiv,onClick:function(){return a.eidt(e)}},b["default"].createElement("span",{className:F["default"].editTxt},"编辑"),b["default"].createElement("img",{className:F["default"].editImg,src:J["default"]}))))}))},a.state={flag:!0},a}return i(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.getAddress()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.address,a=e.pop,n=this.nullAddress();return 0!=t.length&&(n=this.hasAddress()),b["default"].createElement("div",{className:F["default"].bg},b["default"].createElement(k["default"],{onLeft:a,backgroundColor:"#fff",color:"#333"},"收货地址"),b["default"].createElement(S["default"],null,n),b["default"].createElement(I["default"],{ref:"alert"}),b["default"].createElement(N["default"],{ref:"confirm"}),b["default"].createElement("div",{className:F["default"].addBtnDiv},b["default"].createElement(B.Link,{to:"/find/addAddress"},b["default"].createElement("div",{className:F["default"].addBtn},"添加新地址"))))}}]),t}(b["default"].Component),j=function(e){return e&&100==e.code?e.data:[]},P=function(e){return e&&100==e.code?{status:!0,id:e.id}:{status:!1}},Q=function(e){return{address:j(e.infodata.getIn(["GET_ADDRESS_LIST","data"])),set:e.infodata.getIn(["SET_ADDRESS","data"]),del:P(e.infodata.getIn(["DEL_ADDRESS","data"]))}},W=function(e){return{getAddress:function(){e({type:"GET_ADDRESS_LIST"})},setDeafult:function(t){e({type:"SET_ADDRESS",params:[t]})},delSite:function(t){e({type:"DEL_ADDRESS",params:[t],id:t})},pop:function(){e((0,v.goBack)())},push:function(t){e((0,v.push)(t))}}};t["default"]=(0,E.connect)(Q,W)(U)},1526:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___1cxVT{background:#f0eff5;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.item___2Fryb{background:#fff;margin-bottom:10px}.name___1Y905{padding:10px 15px;font-size:16px;color:#000}.phone___1hGH1{float:right}.site___2TbnO{line-height:24px;font-size:16px;color:#000;padding:0 15px 15px}.eidt_bg___2ICib{position:relative;box-sizing:border-box;width:100%;height:49px;line-height:49px;border-top:1px solid #dedede;padding:10px}.eidt_bg___2ICib span{display:inline-block}.eidt_bg___2ICib span.eidt___1L-TU{font-size:14px;color:#666;position:absolute;right:60px}.eidt_bg___2ICib span.del___1C0Qy{font-size:14px;color:#666;position:absolute;right:15px}.add___1mDsy{font-size:16px;color:#000;background:#fff;height:50px;line-height:50px;width:100%;padding-left:15px}.add___1mDsy img{display:inline-block;width:18px;float:right;margin-right:15px;margin-top:10px}.do_default___3_fdd{font-size:14px;color:#666;position:relative;top:-40px;left:40px}.default___1FzKf{color:#fe684b}.nullDom___31SBF{position:absolute;left:0;top:0;width:100%;height:100%}.nullDom___31SBF img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.addBtnDiv___2k5vM{position:absolute;bottom:20px;width:100%}.addBtn___2KAAM{width:90%;margin:0 auto;background-color:#fe684b;height:40px;line-height:40px;color:#fff;text-align:center}.editImg___3uywo{float:right;margin-right:2px;width:20px}.editTxt___3a0HE{float:right;margin-right:15px;margin-left:2px;color:#666;font-size:14px}.deleteImg___2tS7k{float:right;margin-right:5px;width:20px}.deleteTxt___heKVJ{float:right;margin-right:5px;margin-left:5px;color:#666;font-size:14px}.delDiv___25AaD{height:50px;line-height:16px;padding:8px 0;float:right}",""]),t.locals={bg:"bg___1cxVT",item:"item___2Fryb",name:"name___1Y905",phone:"phone___1hGH1",site:"site___2TbnO",eidt_bg:"eidt_bg___2ICib",eidt:"eidt___1L-TU",del:"del___1C0Qy",add:"add___1mDsy",do_default:"do_default___3_fdd","default":"default___1FzKf",nullDom:"nullDom___31SBF",addBtnDiv:"addBtnDiv___2k5vM",addBtn:"addBtn___2KAAM",editImg:"editImg___3uywo",editTxt:"editTxt___3a0HE",deleteImg:"deleteImg___2tS7k",deleteTxt:"deleteTxt___heKVJ",delDiv:"delDiv___25AaD"}},1962:function(e,t,a){e.exports=a.p+"static/media/delete.15695d5d.png"},1967:function(e,t,a){e.exports=a.p+"static/media/edit.92a6695b.png"},2388:[2555,1526]});