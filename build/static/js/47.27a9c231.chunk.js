webpackJsonp([47],{1095:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=n(r),d=a(5),s=n(d),f=a(3),c=n(f),_=a(4),p=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),h=n(g),b=a(11),R=n(b),E=a(2217),D=n(E),y=a(10),S=a(9),v=a(179),C=n(v),O=a(25),x=n(O),w=a(81),B=n(w),I=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.componentDidMount=function(){a.setState({componentDid:!0}),a.props.getList(a.state.flag?"1":"2")},a.componentWillUnmount=function(){a.props.clearData("CREDITORS_RECORDS"),a.props.clearData("CREDITORS_RECORDS_HISTORY")},a.toggle=function(e){(2==e&&a.state.flag||1==e&&!a.state.flag)&&a.setState({flag:!a.state.flag}),a.state.flag?a.props.getListB():a.props.getList()},a.listA=function(){var e=document.body.clientHeight,t=e-95,n=a.props,l=n.getList,o=n.pending,i=n.end,r=n.listData,u=n.push;return h["default"].createElement(x["default"],{height:t,fetch:l,isLoading:o,distance:5,endType:i,nullDom:h["default"].createElement("div",{className:D["default"].nullBox},h["default"].createElement("img",{src:B["default"]})),endload:h["default"].createElement("div",null)},r&&r.map(function(e,t){var a=e.name,n=e.date,l=e.amount,o=e.status,i=e.id;return h["default"].createElement(C["default"],{key:t,title:a,data:n,price:l,state:o,moneyColor:"#aaa",statusColor:"#f70",click:function(){u("/user/zqPropertyDetail/"+i)}})}))},a.listB=function(){var e=document.body.clientHeight,t=e-95,n=a.props,l=n.getListB,o=n.pendingB,i=n.endB,r=n.listDataB;n.push;return h["default"].createElement(x["default"],{height:t,fetch:l,isLoading:o,distance:5,endType:i,nullDom:h["default"].createElement("div",{className:D["default"].nullBox},h["default"].createElement("img",{src:B["default"]})),endload:h["default"].createElement("div",null)},r&&r.map(function(e,t){var a=e.name,n=e.amount,l=e.status,o=e.date;return h["default"].createElement(C["default"],{key:t,title:a,data:o,price:n,state:l,moneyColor:"#aaa",statusColor:"#f70"})}))},a.state={flag:!0,componentDid:!1},a}return i(t,e),m(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.flag,n=t.componentDid,l=void 0,o=void 0;return n&&(l=this.listA(),o=this.listB()),h["default"].createElement("div",null,h["default"].createElement(R["default"],{onLeft:this.props.pop},"债权记录"),h["default"].createElement("div",{className:D["default"].bg},h["default"].createElement("ul",{className:D["default"].tabmenu},h["default"].createElement("li",null,h["default"].createElement("a",{className:this.state.flag?D["default"].borderBlue:D["default"].borderWhite,onClick:function(){e.toggle(1)}}," 待回款项目")),h["default"].createElement("li",null,h["default"].createElement("a",{className:this.state.flag?D["default"].borderWhite:D["default"].borderBlue,onClick:function(){e.toggle(2)}}," 历史资产"))),h["default"].createElement("div",{className:D["default"].recordsMain},h["default"].createElement("div",{className:D["default"].tablist},h["default"].createElement("div",{className:a&&D["default"].show||D["default"].hide},l),h["default"].createElement("div",{className:!a&&D["default"].show||D["default"].hide},o)))))}}]),t}(h["default"].Component),T=function(e,t){return{listData:e.listdata.getIn(["CREDITORS_RECORDS","data"]),pending:e.listdata.getIn(["CREDITORS_RECORDS","pending"]),end:e.listdata.getIn(["CREDITORS_RECORDS","pageEnd"]),listDataB:e.listdata.getIn(["CREDITORS_RECORDS_HISTORY","data"]),pendingB:e.listdata.getIn(["CREDITORS_RECORDS_HISTORY","pending"]),endB:e.listdata.getIn(["CREDITORS_RECORDS_HISTORY","pageEnd"])}},k=function(e,t){return{getList:function(){e({type:"CREDITORS_RECORDS",params:[1]})},getListB:function(){e({type:"CREDITORS_RECORDS_HISTORY",params:[2]})},pop:function(){e((0,S.goBack)())},clearData:function(t){e({type:"CLEAR_DATA",key:t})},push:function(t){e((0,S.push)(t))}}};t["default"]=(0,y.connect)(T,k)(I)},1252:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1095),o=n(l);t["default"]=o["default"]},1622:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___1SVUq{position:absolute;left:0;top:0;width:100%;height:100%;background:#f1eff5;z-index:1}.show___31LGe{display:block}.hide___3hHqR{display:none}.tabmenu___2YFfM li .borderBlue___1lZ4R{border-bottom:2px solid #00a6e2}.tabmenu___2YFfM li .borderWhite___XUDTL{border-bottom:2px solid #fff}.recordsMain___21o4U{background:#f1eff5;margin-top:88px;overflow:hidden}.tablist___ORggB{width:100%}.tabmenu___2YFfM{width:100%;background:#fff;list-style:none;overflow:hidden;position:fixed;top:44px}.tabmenu___2YFfM li{float:left;width:50%;text-align:center;height:44px;border-bottom:1px solid #ddd}.tabmenu___2YFfM li a{display:block;width:100%;height:44px;line-height:41px;border-bottom:1px solid #fff;font-size:16px;color:#626262;text-decoration:none}.errorImg___3Tthj{width:100%;margin-top:50px}.errorImg___3Tthj img{display:block;width:169px;height:152px;margin:0 auto}.nullBox____J0uA{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nullBox____J0uA img{width:161px}",""]),t.locals={bg:"bg___1SVUq",show:"show___31LGe",hide:"hide___3hHqR",tabmenu:"tabmenu___2YFfM",borderBlue:"borderBlue___1lZ4R",borderWhite:"borderWhite___XUDTL",recordsMain:"recordsMain___21o4U",tablist:"tablist___ORggB",errorImg:"errorImg___3Tthj",nullBox:"nullBox____J0uA"}},2217:[2352,1622]});