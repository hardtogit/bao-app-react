webpackJsonp([130],{13:[2320,25],17:function(t,e,n){t.exports=n.p+"static/media/record.28c4700d.png"},23:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,p["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(c["default"]?(0,c["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var d,r,s=n(2),u=a(s),f=n(5),c=a(f),_=n(3),p=a(_),g=n(4),h=a(g),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u["default"])(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),y=n(1),v=a(y),b=n(8),x=a(b),E=n(24),T=a(E),k=n(13),L=a(k),w=n(9),D=a(w),A=(r=d=function(t){function e(t){i(this,e);var n=l(this,(e.__proto__||(0,h["default"])(e)).call(this,t));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(e,t),m(e,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(t){if(t.isLoading){var e=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:e})}}},{key:"componentDidUpdate",value:function(t,e){var n=this,a=this.state.init;t.isLoading&&a||!this.state.first&&a?!function(){var t=n;setTimeout(function(){t.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():t.isLoading&&!a&&setTimeout(function(){var t=n.refs.listBox.offsetHeight;n.setState({allHeight:t})},0)}},{key:"getListall",value:function(){var t=this.refs.listBox,e=this.props,n=e.height,a=e.fetch,i=e.endType;if(!t)return!1;var l=t.offsetHeight;if(l<=n&&!i)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:l}),this.addScroll(o)}}},{key:"addScroll",value:function(t){var e=this;t.addEventListener("scroll",function(){var n=t.scrollTop;e.next(n)})}},{key:"next",value:function(t){var e=this.props,n=e.distance,a=e.height,i=e.fetch,l=e.endType,o=this.state,d=o.allHeight,r=o.loadHeight,s=d+r-a-t;l||s<=n&&i()}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.loading,a=t.height,i=t.style,l=(t.fetch,t.endType),o=t.endload,d=(t.listLoad,t.listzg,t.initLoad),r=t.nullDom,s=t.titleChild,u=this.state.initLoading,f=[];i.height=a,e&&e.map(function(t,e){f.push(v["default"].cloneElement(t))});var c=void 0,_=void 0,p=void 0;return u&&(p=d),l?0!=f&&(c=o):c=n,_=0!=f.length||s?f:r,v["default"].createElement("div",{style:i,ref:"scrollBox"},v["default"].createElement("div",{ref:"listBox"},v["default"].createElement("div",null,s,_),v["default"].createElement("div",{className:(0,x["default"])(L["default"].fsLoading,this.state.init&&!l&&L["default"].block||L["default"].hidden)},this.state.init&&!l&&p||null)),v["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,x["default"])(this.state.init&&!l&&L["default"].hidden||L["default"].block)},c))}}]),e}(y.Component),d.propTypes={height:D["default"].number,fetch:D["default"].func,isLoading:D["default"].bool,loading:D["default"].object,endType:D["default"].bool,endload:D["default"].object,initLoad:D["default"].object,distance:D["default"].number,nullDom:D["default"].element,fsDom:D["default"].element,titleChild:D["default"].element},d.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:T["default"].loadingDom(),endType:!1,endload:T["default"].loadingEndDom(),initLoad:T["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:T["default"].nullDom(),titleChild:null},r);e["default"]=A},24:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),o=a(l),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(1),s=a(r),u=n(36),f=a(u),c=n(13),_=a(c),p=n(17),g=a(p),h=function(){function t(){i(this,t)}return d(t,null,[{key:"loadingInitDom",value:function(){var t=f["default"].BeatLoader;return s["default"].createElement("div",{className:_["default"].loading},s["default"].createElement(t,{color:"#00a6e2",size:"20px"}),s["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var t=f["default"].ClipLoader;return s["default"].createElement("div",{className:_["default"].loadingList},s["default"].createElement(t,{color:"#00a6e2",size:"20px"}),s["default"].createElement("p",{className:_["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return s["default"].createElement("div",{className:_["default"].loadingEnd},s["default"].createElement("span",{className:_["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return s["default"].createElement("div",{className:_["default"].nullIcon},s["default"].createElement("img",{src:g["default"]}))}}]),t}();e["default"]=h},25:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".fsLoading___2j0UF{z-index:9999;background-color:#fff}.fsLoading___2j0UF,.nullIcon___2APKK{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___2APKK{text-align:center}.nullIcon___2APKK img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___2EPfg{display:block}.hidden___2pEyZ{display:none}.loading___3217S{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2FGz3{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___3jpNl{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___3jpNl .loadingText___2FGz3{margin-top:2px}.loadingEnd___2shs7,.loadingEndB___Cd-Tk{padding:8px;text-align:center}.loadingEndB___Cd-Tk{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),e.locals={fsLoading:"fsLoading___2j0UF",nullIcon:"nullIcon___2APKK",block:"block___2EPfg",hidden:"hidden___2pEyZ",loading:"loading___3217S",loadingText:"loadingText___2FGz3",loadingList:"loadingList___3jpNl",loadingEnd:"loadingEnd___2shs7",loadingEndB:"loadingEndB___Cd-Tk"}},929:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,c["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u["default"]?(0,u["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var d=n(2),r=a(d),s=n(5),u=a(s),f=n(3),c=a(f),_=n(4),p=a(_),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),h=n(1),m=a(h),y=n(2058),v=a(y),b=n(12),x=a(b),E=n(23),T=a(E),k=n(11),L=n(10),w=function(t){function e(){return i(this,e),l(this,(e.__proto__||(0,p["default"])(e)).apply(this,arguments))}return o(e,t),g(e,[{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"render",value:function(){var t=this;Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var e=document.body.clientHeight-44,n=this.props,a=n.listData,i=n.pending,l=n.end,o=n.pop;return m["default"].createElement("div",{className:v["default"].body},m["default"].createElement(x["default"],{onLeft:o},"还款详情"),m["default"].createElement(T["default"],{height:e,fetch:function(){t.props.gitData(t.props.params.id)},isLoading:i,distance:20,endType:l},a&&a.map(function(t,e){return m["default"].createElement("div",{key:e,className:v["default"].data_list_item},m["default"].createElement("div",{className:v["default"].item},m["default"].createElement("div",{className:v["default"].left},m["default"].createElement("p",{className:v["default"].time},new Date(1e3*t.time).format("yyyy-MM-dd"))),m["default"].createElement("div",{className:v["default"].right},0==t.status?"未还款":"正常还款")))})))}}]),e}(h.Component),D=function(t){return{listData:t.listdata.getIn(["GATHER_BID_BACK_DETAIL","data"]),pending:t.listdata.getIn(["GATHER_BID_BACK_DETAIL","pending"]),end:t.listdata.getIn(["GATHER_BID_BACK_DETAIL","pageEnd"])}},A=function(t,e){return{pop:function(){t((0,L.goBack)())},gitData:function(e){t({type:"GATHER_BID_BACK_DETAIL",params:[{id:e}]})},clean:function(){t({type:"CLEAR_DATA",key:"GATHER_BID_BACK_DETAIL"})}}};e["default"]=(0,k.connect)(D,A)(w)},1457:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".body___1UNT4{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___1UNT4 .data_list_item___2afvU{margin-top:15px;background-color:#fff;padding-left:15px}.body___1UNT4 .data_list_item___2afvU .item___t7ATj{border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex;padding:15px 0}.body___1UNT4 .data_list_item___2afvU .item___t7ATj .left___1TxMs{-webkit-box-flex:1;-ms-flex:1;flex:1}.body___1UNT4 .data_list_item___2afvU .item___t7ATj .left___1TxMs .time___1dCy_{color:#888;font-size:18px}.body___1UNT4 .data_list_item___2afvU .item___t7ATj .right___2wRZt{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;color:#666;padding-right:15px}",""]),e.locals={body:"body___1UNT4",data_list_item:"data_list_item___2afvU",item:"item___t7ATj",left:"left___1TxMs",time:"time___1dCy_",right:"right___2wRZt"}},2058:[2319,1457]});