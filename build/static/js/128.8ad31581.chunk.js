webpackJsonp([128],{13:[2308,25],17:function(e,t,n){e.exports=n.p+"static/media/record.28c4700d.png"},23:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d,r,u=n(2),s=a(u),f=n(5),_=a(f),c=n(3),p=a(c),h=n(4),g=a(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,s["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=n(1),v=a(y),b=n(8),E=a(b),x=n(24),T=a(x),k=n(13),w=a(k),L=n(9),R=a(L),D=(r=d=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||(0,g["default"])(t)).call(this,e));return n.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.init;e.isLoading&&a||!this.state.first&&a?!function(){var e=n;setTimeout(function(){e.getListall()},0),!n.state.first&&a&&n.setState({first:!0})}():e.isLoading&&!a&&setTimeout(function(){var e=n.refs.listBox.offsetHeight;n.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,n=t.height,a=t.fetch,i=t.endType;if(!e)return!1;var l=e.offsetHeight;if(l<=n&&!i)a();else{var o=this.refs.scrollBox;this.setState({init:!1,allHeight:l}),this.addScroll(o)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var n=e.scrollTop;t.next(n)})}},{key:"next",value:function(e){var t=this.props,n=t.distance,a=t.height,i=t.fetch,l=t.endType,o=this.state,d=o.allHeight,r=o.loadHeight,u=d+r-a-e;l||u<=n&&i()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.loading,a=e.height,i=e.style,l=(e.fetch,e.endType),o=e.endload,d=(e.listLoad,e.listzg,e.initLoad),r=e.nullDom,u=e.titleChild,s=this.state.initLoading,f=[];i.height=a,t&&t.map(function(e,t){f.push(v["default"].cloneElement(e))});var _=void 0,c=void 0,p=void 0;return s&&(p=d),l?0!=f&&(_=o):_=n,c=0!=f.length||u?f:r,v["default"].createElement("div",{style:i,ref:"scrollBox"},v["default"].createElement("div",{ref:"listBox"},v["default"].createElement("div",null,u,c),v["default"].createElement("div",{className:(0,E["default"])(w["default"].fsLoading,this.state.init&&!l&&w["default"].block||w["default"].hidden)},this.state.init&&!l&&p||null)),v["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,E["default"])(this.state.init&&!l&&w["default"].hidden||w["default"].block)},_))}}]),t}(y.Component),d.propTypes={height:R["default"].number,fetch:R["default"].func,isLoading:R["default"].bool,loading:R["default"].object,endType:R["default"].bool,endload:R["default"].object,initLoad:R["default"].object,distance:R["default"].number,nullDom:R["default"].element,fsDom:R["default"].element,titleChild:R["default"].element},d.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:T["default"].loadingDom(),endType:!1,endload:T["default"].loadingEndDom(),initLoad:T["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:T["default"].nullDom(),titleChild:null},r);t["default"]=D},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),o=a(l),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),u=a(r),s=n(35),f=a(s),_=n(13),c=a(_),p=n(17),h=a(p),g=function(){function e(){i(this,e)}return d(e,null,[{key:"loadingInitDom",value:function(){var e=f["default"].BeatLoader;return u["default"].createElement("div",{className:c["default"].loading},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:c["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=f["default"].ClipLoader;return u["default"].createElement("div",{className:c["default"].loadingList},u["default"].createElement(e,{color:"#00a6e2",size:"20px"}),u["default"].createElement("p",{className:c["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return u["default"].createElement("div",{className:c["default"].loadingEnd},u["default"].createElement("span",{className:c["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return u["default"].createElement("div",{className:c["default"].nullIcon},u["default"].createElement("img",{src:h["default"]}))}}]),e}();t["default"]=g},25:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},932:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2),r=a(d),u=n(5),s=a(u),f=n(3),_=a(f),c=n(4),p=a(c),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),m=a(g),y=n(2082),v=a(y),b=n(12),E=a(b),x=n(23),T=a(x),k=n(11),w=n(10),L=function(e){function t(){return i(this,t),l(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return o(t,e),h(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"render",value:function(){var e=this;Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var t=document.body.clientHeight-44,n=this.props,a=n.listData,i=n.pending,l=n.end,o=n.pop;return m["default"].createElement("div",{className:v["default"].body},m["default"].createElement(E["default"],{onLeft:o},"投资记录"),m["default"].createElement(T["default"],{height:t,fetch:function(){e.props.gitData(e.props.params.id)},isLoading:i,distance:20,endType:l},a&&a.map(function(e,t){return m["default"].createElement("div",{key:t,className:v["default"].data_list_item},m["default"].createElement("div",{className:v["default"].item},m["default"].createElement("div",{className:v["default"].left},m["default"].createElement("p",{className:v["default"].name},e.userphone),m["default"].createElement("p",{className:v["default"].time},new Date(1e3*e.add_time).format("yyyy-MM-dd hh:mm:ss"))),m["default"].createElement("div",{className:v["default"].right},"￥",e.money)))})))}}]),t}(g.Component),R=function(e){return{listData:e.listdata.getIn(["GATHER_INVEST_RECORD","data"]),pending:e.listdata.getIn(["GATHER_INVEST_RECORD","pending"]),end:e.listdata.getIn(["GATHER_INVEST_RECORD","pageEnd"])}},D=function(e,t){return{pop:function(){e((0,w.goBack)())},gitData:function(t){e({type:"GATHER_INVEST_RECORD",params:[{id:t}]})},clean:function(){e({type:"CLEAR_DATA",key:"GATHER_INVEST_RECORD"})}}};t["default"]=(0,k.connect)(R,D)(L)},1458:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".body___1T8Bh{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.body___1T8Bh .data_list_item___1orQe{margin-top:15px;background-color:#fff;padding-left:10px}.body___1T8Bh .data_list_item___1orQe .item___SMot4{height:60px;border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.body___1T8Bh .data_list_item___1orQe .item___SMot4:last-child{border-bottom:none}.body___1T8Bh .data_list_item___1orQe .item___SMot4 .left___3vetN{-webkit-box-flex:1;-ms-flex:1;flex:1}.body___1T8Bh .data_list_item___1orQe .item___SMot4 .left___3vetN .name___3m2C1{font-size:18px;margin-top:10px;margin-bottom:6px;color:#898989}.body___1T8Bh .data_list_item___1orQe .item___SMot4 .left___3vetN .time___3rElK{font-size:12px;color:#aaa}.body___1T8Bh .data_list_item___1orQe .item___SMot4 .right___20hUg{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:60px;text-align:right;color:#f70;padding-right:10px;font-size:20px}",""]),t.locals={body:"body___1T8Bh",data_list_item:"data_list_item___1orQe",item:"item___SMot4",left:"left___3vetN",name:"name___3m2C1",time:"time___3rElK",right:"right___20hUg"}},2082:[2307,1458]});