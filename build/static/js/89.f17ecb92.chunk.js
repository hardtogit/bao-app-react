webpackJsonp([89],{18:function(e,t,n){e.exports=n.p+"static/media/arrow2.4ba5831c.png"},209:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),u=a(r),f=n(5),_=a(f),c=n(3),d=a(c),m=n(4),s=a(m),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),b=a(g),h=n(249),y=a(h),x=n(19),w=n(18),v=a(w),E=function(e){function t(){return o(this,t),i(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return l(t,e),p(t,[{key:"render",value:function(){return b["default"].createElement("div",null,b["default"].createElement("div",{className:y["default"].item_bg},this.props.item.map(function(e){return e.href&&b["default"].createElement("div",{className:y["default"].item,key:e.name},b["default"].createElement(x.Link,{to:e.href,key:e.name},b["default"].createElement("span",{className:y["default"].item_name},e.name),b["default"].createElement("div",{className:y["default"].item_info},b["default"].createElement("span",{dangerouslySetInnerHTML:{__html:e.info}}),b["default"].createElement("img",{className:e.arrow?y["default"].item_go_next:y["default"].item_hide,src:v["default"],alt:""}))))||b["default"].createElement("div",{key:e.name,className:y["default"].item},b["default"].createElement("span",{className:y["default"].item_name},e.name),b["default"].createElement("div",{className:y["default"].item_info},b["default"].createElement("span",{dangerouslySetInnerHTML:{__html:e.info}}),b["default"].createElement("img",{className:e.arrow?y["default"].item_go_next:y["default"].item_hide,src:v["default"],alt:""})))})))}}]),t}(b["default"].Component);t["default"]=E},227:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".item_bg___24oOk{width:100%;padding:0 15px;box-sizing:border-box}.item___awDTb{height:44px;line-height:43px;background:#fff;font-size:16px;color:#000;width:100%;border-bottom:1px solid #efefef}.item___awDTb a{display:block}.item___awDTb .item_name___12DR1{color:#000}.item___awDTb:last-child{border:none}.item_info___1UTxm{font-size:14px;color:#888;float:right;height:100%;vertical-align:middle}.item_info___1UTxm a{color:#00a6e2}.item_go_next___2jTgG{width:15px;padding-left:5px;vertical-align:middle}.item_hide___1IKcB{display:none}",""]),t.locals={item_bg:"item_bg___24oOk",item:"item___awDTb",item_name:"item_name___12DR1",name:"name___3Yrpp",item_info:"item_info___1UTxm",item_go_next:"item_go_next___2jTgG",item_hide:"item_hide___1IKcB"}},249:[2356,227],540:function(e,t,n){e.exports=n.p+"static/media/logo.98290f66.png"},1158:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),u=a(r),f=n(5),_=a(f),c=n(3),d=a(c),m=n(4),s=a(m),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),b=a(g),h=n(8),y=n(9),x=n(10),w=a(x),v=n(2237),E=a(v),T=n(209),k=a(T),N=n(540),D=a(N),R=[{name:"版本介绍",info:"",arrow:!0,href:"/user/setting/versionInfo"}],j=function(e){function t(){return o(this,t),i(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return l(t,e),p(t,[{key:"render",value:function(){return b["default"].createElement("div",{className:E["default"].bg},b["default"].createElement(w["default"],{onLeft:this.props.pop},"关于"),b["default"].createElement("img",{className:E["default"].logo,src:D["default"],alt:""}),b["default"].createElement("h2",{className:E["default"].about_h2},"当前版本"),b["default"].createElement("p",{className:E["default"].about_p},"V4.2.1"),b["default"].createElement("div",{className:E["default"].mid},b["default"].createElement(k["default"],{item:R})))}}]),t}(b["default"].Component),I=function(e,t){return{}},L=function(e,t){return{pop:function(){e((0,h.goBack)())}}};t["default"]=(0,y.connect)(I,L)(j)},1658:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___18Y0N{position:absolute;left:0;top:0;background:#f0eff5;width:100%;height:100%}.logo___FT0-Y{margin:89px auto 0;display:block;width:60px}.about_h2___2-OpW{text-align:center;margin-top:30px;font-size:16px;color:#000;font-weight:500;font-family:-apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;line-height:1.2;padding:0;margin-bottom:0}.about_p___3lgrL{margin-top:5px;text-align:center;font-size:14px;color:#888;margin-bottom:25px}.mid___52RDe{margin-top:15px;background:#fff;width:100%}",""]),t.locals={bg:"bg___18Y0N",logo:"logo___FT0-Y",about_h2:"about_h2___2-OpW",about_p:"about_p___3lgrL",mid:"mid___52RDe"}},2237:function(e,t,n){var a=n(1658);"string"==typeof a&&(a=[[e.id,a,""]]);n(7)(a,{});a.locals&&(e.exports=a.locals)}});