webpackJsonp([78],{27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=n(2),u=o(l),s=n(5),d=o(s),f=n(3),c=o(f),p=n(4),_=o(p),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),g=o(h),m=n(30),y=o(m),k=function(e){function t(){return a(this,t),i(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props.id;return g["default"].createElement("div",{className:y["default"].box+" "+this.props.className,id:e},this.props.children)}}]),t}(g["default"].Component);t["default"]=k},28:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".box___2KEmr{position:absolute;top:45px;right:0;bottom:0;left:0;height:auto;overflow-y:scroll;margin-top:-1px;padding:0;margin-bottom:-1px;width:auto;-webkit-overflow-scrolling:touch}.box___2KEmr::-webkit-scrollbar{display:none}",""]),t.locals={box:"box___2KEmr"}},30:[2356,28],396:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,u,s=n(2),d=o(s),f=n(5),c=o(f),p=n(3),_=o(p),b=n(4),h=o(b),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,d["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=n(1),y=o(m),k=n(601),x=o(k),w=n(12),E=o(w),v=(u=l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.change=function(){return!(!n.props.checkCanClick&&n.props.status)&&void n.props.callBackFun(!n.props.status,n.props.id)},n}return r(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props.backgroundColor;return y["default"].createElement("input",{className:t&&x["default"].inputRed||x["default"].input,onChange:function(){e.change()},type:"checkbox",checked:this.props.status})}}]),t}(y["default"].Component),l.propTypes={callBackFun:E["default"].func,status:E["default"].bool,id:E["default"].number,checkedCanClick:E["default"].bool,backgroundColor:E["default"].string},u);t["default"]=v},465:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".input___1AqRy{position:relative;width:28px;height:28px;display:block;border:0;background:0 0;cursor:pointer;-webkit-appearance:none}.input___1AqRy:before{display:table;width:100%;height:100%;border-radius:28px;background:#fff;content:' ';-webkit-transition:background-color 20ms ease-in-out;transition:background-color 20ms ease-in-out;border:1px solid #ddd;box-sizing:border-box}.input___1AqRy:checked:before{background:#00a6e2;border-color:#00a6e2}.input___1AqRy:after{-webkit-transition:opacity .05s ease-in-out;transition:opacity .05s ease-in-out;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:33%;left:25%;display:table;width:14px;height:6px;border:1px solid #fff;border-top:0;border-right:0;content:' ';opacity:0}.input___1AqRy:checked:after{opacity:1}.inputRed___1__IE{position:relative;width:28px;height:28px;display:block;border:0;background:0 0;cursor:pointer;-webkit-appearance:none}.inputRed___1__IE:before{display:table;width:100%;height:100%;border-radius:28px;background:#fff;content:' ';-webkit-transition:background-color 20ms ease-in-out;transition:background-color 20ms ease-in-out;border:1px solid #ddd;box-sizing:border-box}.inputRed___1__IE:checked:before{background:#fe684b;border-color:#fe684b}.inputRed___1__IE:after{-webkit-transition:opacity .05s ease-in-out;transition:opacity .05s ease-in-out;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:33%;left:25%;display:table;width:14px;height:6px;border:1px solid #fff;border-top:0;border-right:0;content:' ';opacity:0}.inputRed___1__IE:checked:after{opacity:1}",""]),t.locals={input:"input___1AqRy",inputRed:"inputRed___1__IE"}},601:[2356,465],1184:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=o(l),s=n(5),d=o(s),f=n(3),c=o(f),p=n(35),_=o(p),b=n(4),h=o(b),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,u["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=n(1),y=o(m),k=n(9),x=n(8),w=n(10),E=o(w),v=n(27),T=o(v),I=n(396),S=o(I),C=n(24),A=o(C),R=n(56),D=o(R),N=n(19),z=n(2245),L=o(z),M=n(11),j=o(M),q=n(97),F=o(q),B=0,O=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.componentWillReceiveProps=function(e){var t=e.set,o=e.del,a=n.state.flag;o.status&&o.id==B&&(B=0,n.props.getAddress()),t&&100!=t.code&&!a&&n.refs.alert.show({title:"",content:"设置默认地址失败",okText:"确定",okCallback:function(){n.setState({flag:!0})}}),t&&100==t.code&&!a&&n.refs.alert.show({title:"",content:"设置默认地址成功",okText:"确定",okCallback:function(){n.setState({flag:!0}),n.props.getAddress()}})},n.choose=function(){n.setState({flag:!1}),(arguments.length<=0?void 0:arguments[0])&&n.props.setDeafult([arguments.length<=1?void 0:arguments[1]])},n.del=function(e){n.refs.confirm.show({title:"",content:"确认删除该地址？",okText:"删除",cancelText:"取消",okCallback:function(){B=e,n.props.delSite(e)}})},n.eidt=function(e){sessionStorage.setItem("baoEditSite",(0,_["default"])(e)),n.props.push("/user/setting/siteEdit")},n.nullAddress=function(){return y["default"].createElement("div",{className:L["default"].nullDom},y["default"].createElement("img",{src:F["default"]}))},n.hasAddress=function(){var e=n.props.address;return y["default"].createElement("div",null,e&&e.sort(function(e,t){return t.is_default-e.is_default})&&e.map(function(e,t){return y["default"].createElement("div",{className:L["default"].item,key:t},y["default"].createElement("p",{className:L["default"].name},e.consignee,y["default"].createElement("span",{className:L["default"].phone},e.phone)),y["default"].createElement("p",{className:L["default"].site},e.address),y["default"].createElement("div",{className:L["default"].eidt_bg},y["default"].createElement("span",null,y["default"].createElement(S["default"],{checkedCanClick:!1,status:1==e.is_default,id:parseInt(e.id),callBackFun:n.choose}),y["default"].createElement("span",{className:(0,j["default"])(L["default"].do_default,1==e.is_default?L["default"]["default"]:"")},1==e.is_default?"默认地址":"设为默认")),y["default"].createElement("span",{className:L["default"].eidt,onClick:function(){return n.eidt(e)}},"编辑"),y["default"].createElement("span",{className:L["default"].del,onClick:function(){n.del(e.id)}},"删除")))}))},n.state={flag:!0},n}return r(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.getAddress()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.address,n=e.pop,o=this.nullAddress();return 0!=t.length&&(o=this.hasAddress()),y["default"].createElement("div",{className:L["default"].bg},y["default"].createElement(E["default"],{onLeft:n,rightNode:y["default"].createElement(N.Link,{to:"/user/setting/siteAdd",style:{color:"#fff"}},"新增")},"收货地址"),y["default"].createElement(T["default"],null,o),y["default"].createElement(A["default"],{ref:"alert"}),y["default"].createElement(D["default"],{ref:"confirm"}))}}]),t}(y["default"].Component),U=function(e){return e&&100==e.code?e.data:[]},P=function(e){return e&&100==e.code?{status:!0,id:e.id}:{status:!1}},K=function(e){return{address:U(e.infodata.getIn(["SITE_LIST","data"])),set:e.infodata.getIn(["SITE_SET_DEFAULT","data"]),del:P(e.infodata.getIn(["SITE_SET_DEL","data"]))}},Y=function(e){return{getAddress:function(){e({type:"SITE_LIST"})},setDeafult:function(t){e({type:"SITE_SET_DEFAULT",params:t})},delSite:function(t){e({type:"SITE_SET_DEL",params:[t],id:t})},pop:function(){e((0,x.goBack)())},push:function(t){e((0,x.push)(t))}}};t["default"]=(0,k.connect)(K,Y)(O)},1666:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___3wvOB{background:#f0eff5;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto;padding-top:44px}.item___FvTgc{background:#fff;margin-bottom:10px}.name___1T0yL{padding:10px 15px;font-size:16px;color:#000}.phone___2p5fL{float:right}.site___2zkZm{line-height:24px;font-size:16px;color:#000;padding:0 15px 15px}.eidt_bg___25855{position:relative;box-sizing:border-box;width:100%;height:49px;border-top:1px solid #dedede}.eidt_bg___25855 span{display:inline-block;height:49px;line-height:49px}.eidt_bg___25855 span.eidt___1MfjD{font-size:14px;color:#666;position:absolute;right:60px}.eidt_bg___25855 span.del___2s8aX{font-size:14px;color:#666;position:absolute;right:15px}.eidt_bg___25855 span:first-child{margin-left:15px;padding-top:10px}.add___I2yYh{font-size:16px;color:#000;background:#fff;height:50px;line-height:50px;width:100%;padding-left:15px}.add___I2yYh img{display:inline-block;width:18px;float:right;margin-right:15px;margin-top:10px}.do_default___1A0Hk{font-size:14px;color:#666;position:relative;top:-40px;left:40px}.default___39qUz{color:#00a6e2}.nullDom___E-h2w{position:absolute;left:0;top:0;width:100%;height:100%}.nullDom___E-h2w img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),t.locals={bg:"bg___3wvOB",item:"item___FvTgc",name:"name___1T0yL",phone:"phone___2p5fL",site:"site___2zkZm",eidt_bg:"eidt_bg___25855",eidt:"eidt___1MfjD",del:"del___2s8aX",add:"add___I2yYh",do_default:"do_default___1A0Hk","default":"default___39qUz",nullDom:"nullDom___E-h2w"}},2245:function(e,t,n){var o=n(1666);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)}});