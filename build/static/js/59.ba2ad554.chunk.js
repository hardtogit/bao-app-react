webpackJsonp([59],{13:[2308,25],15:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".page___3jSee{position:absolute;top:0;left:0;height:100vh;width:100%;overflow:hidden}",""]),t.locals={page:"page___3jSee"}},16:[2310,15],17:function(e,t,o){e.exports=o.p+"static/media/record.28c4700d.png"},19:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),l=n(i),a=o(16),r=n(a);t["default"]=function(e){return function(t){return l["default"].createElement("div",{className:r["default"].page},l["default"].createElement(e,t))}}},23:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,d,_=o(2),s=n(_),c=o(5),u=n(c),f=o(3),p=n(f),g=o(4),h=n(g),x=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),m=o(1),b=n(m),v=o(8),y=n(v),w=o(24),k=n(w),E=o(13),B=n(E),L=o(9),M=n(L),T=(d=r=function(e){function t(e){i(this,t);var o=l(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return o.state={init:!0,allHeight:0,loadHeight:0,initLoading:!1},o}return a(t,e),x(t,[{key:"componentDidMount",value:function(){this.setState({init:!0,allHeight:0,loadHeight:0,first:!0,initLoading:!0}),this.getListall()}},{key:"componentWillReceiveProps",value:function(e){if(e.isLoading){var t=this.refs.loadingBox.offsetHeight;this.setState({loadHeight:t})}}},{key:"componentDidUpdate",value:function(e,t){var o=this,n=this.state.init;e.isLoading&&n||!this.state.first&&n?!function(){var e=o;setTimeout(function(){e.getListall()},0),!o.state.first&&n&&o.setState({first:!0})}():e.isLoading&&!n&&setTimeout(function(){var e=o.refs.listBox.offsetHeight;o.setState({allHeight:e})},0)}},{key:"getListall",value:function(){var e=this.refs.listBox,t=this.props,o=t.height,n=t.fetch,i=t.endType;if(!e)return!1;var l=e.offsetHeight;if(l<=o&&!i)n();else{var a=this.refs.scrollBox;this.setState({init:!1,allHeight:l}),this.addScroll(a)}}},{key:"addScroll",value:function(e){var t=this;e.addEventListener("scroll",function(){var o=e.scrollTop;t.next(o)})}},{key:"next",value:function(e){var t=this.props,o=t.distance,n=t.height,i=t.fetch,l=t.endType,a=this.state,r=a.allHeight,d=a.loadHeight,_=r+d-n-e;l||_<=o&&i()}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.loading,n=e.height,i=e.style,l=(e.fetch,e.endType),a=e.endload,r=(e.listLoad,e.listzg,e.initLoad),d=e.nullDom,_=e.titleChild,s=this.state.initLoading,c=[];i.height=n,t&&t.map(function(e,t){c.push(b["default"].cloneElement(e))});var u=void 0,f=void 0,p=void 0;return s&&(p=r),l?0!=c&&(u=a):u=o,f=0!=c.length||_?c:d,b["default"].createElement("div",{style:i,ref:"scrollBox"},b["default"].createElement("div",{ref:"listBox"},b["default"].createElement("div",null,_,f),b["default"].createElement("div",{className:(0,y["default"])(B["default"].fsLoading,this.state.init&&!l&&B["default"].block||B["default"].hidden)},this.state.init&&!l&&p||null)),b["default"].createElement("div",{ref:"loadingBox",style:this.state.DomHeight,className:(0,y["default"])(this.state.init&&!l&&B["default"].hidden||B["default"].block)},u))}}]),t}(m.Component),r.propTypes={height:M["default"].number,fetch:M["default"].func,isLoading:M["default"].bool,loading:M["default"].object,endType:M["default"].bool,endload:M["default"].object,initLoad:M["default"].object,distance:M["default"].number,nullDom:M["default"].element,fsDom:M["default"].element,titleChild:M["default"].element},r.defaultProps={height:400,fetch:function(){},isLoading:!0,loading:k["default"].loadingDom(),endType:!1,endload:k["default"].loadingEndDom(),initLoad:k["default"].loadingInitDom(),style:{height:400,overflowY:"scroll",position:"relative",width:"100%"},distance:5,listLoad:{display:"none"},listzg:{display:"block"},nullDom:k["default"].nullDom(),titleChild:null},d);t["default"]=T},24:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=o(2),a=n(l),r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,a["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(1),_=n(d),s=o(35),c=n(s),u=o(13),f=n(u),p=o(17),g=n(p),h=function(){function e(){i(this,e)}return r(e,null,[{key:"loadingInitDom",value:function(){var e=c["default"].BeatLoader;return _["default"].createElement("div",{className:f["default"].loading},_["default"].createElement(e,{color:"#00a6e2",size:"20px"}),_["default"].createElement("p",{className:f["default"].loadingText},"加载中..."))}},{key:"loadingDom",value:function(){var e=c["default"].ClipLoader;return _["default"].createElement("div",{className:f["default"].loadingList},_["default"].createElement(e,{color:"#00a6e2",size:"20px"}),_["default"].createElement("p",{className:f["default"].loadingText},"加载中..."))}},{key:"loadingEndDom",value:function(){return _["default"].createElement("div",{className:f["default"].loadingEnd},_["default"].createElement("span",{className:f["default"].loadingEndB},"没有更多了"))}},{key:"nullDom",value:function(){return _["default"].createElement("div",{className:f["default"].nullIcon},_["default"].createElement("img",{src:g["default"]}))}}]),e}();t["default"]=h},25:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".fsLoading___1e2z3{z-index:9999;background-color:#fff}.fsLoading___1e2z3,.nullIcon___1-FE1{position:absolute;left:0;top:0;width:100%;height:100%}.nullIcon___1-FE1{text-align:center}.nullIcon___1-FE1 img{width:161px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.block___kp87H{display:block}.hidden___1M1Qd{display:none}.loading___3R-yq{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0)}.loadingText___2hHv7{font-size:14px;margin-top:12px;text-align:center;color:#666}.loadingList___14SgR{text-align:center;padding-top:8px;margin-bottom:8px}.loadingList___14SgR .loadingText___2hHv7{margin-top:2px}.loadingEnd___2BRMu,.loadingEndB___2Pva1{padding:8px;text-align:center}.loadingEndB___2Pva1{display:inline-block;width:60%;font-size:14px;color:#d0d0d0}",""]),t.locals={fsLoading:"fsLoading___1e2z3",nullIcon:"nullIcon___1-FE1",block:"block___kp87H",hidden:"hidden___1M1Qd",loading:"loading___3R-yq",loadingText:"loadingText___2hHv7",loadingList:"loadingList___14SgR",loadingEnd:"loadingEnd___2BRMu",loadingEndB:"loadingEndB___2Pva1"}},172:function(e,t,o){e.exports=o.p+"static/media/storeOver.6328868e.png"},295:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".bg___SMYr2{background:#f6f6f9;position:absolute;left:0;top:0;width:100%;height:100vh;z-index:1;overflow:auto}.dhOver___3aKpr{display:inline-block;width:50px;height:50px;position:absolute;top:-8px;right:5px;background:url("+o(172)+");background-size:100% 100%}.coinMain___3DJQ2{width:100%;margin-top:44px}.coinText___3xsPc{width:100%;text-align:center}.coinText___3xsPc img{margin-top:55px}.coinText___3xsPc h1{font-size:16px;color:#181818}.coinText___3xsPc h2{font-size:28px;color:#000;margin-top:20px}.coinText___3xsPc p{font-size:16px;color:#626262;margin-top:10px}.noneCoin___10Hvo{width:100%;text-align:center;font-size:16px;color:#626262;margin-top:55px}.coinlist___2Fa3X{overflow:hidden;position:relative;padding:15px}.coinBox___2IgAj,.coinlist___2Fa3X{border-bottom:1px solid #ddd;background-color:#fff}.coinBox___2IgAj{padding:15px 15px 0}.coinBox___2IgAj .coinContent___1lHd6{border-bottom:1px solid #ddd;margin-right:-15px;padding-right:15px}.coinBox___2IgAj .coinContent___1lHd6:last-child{border-bottom:0}.coinBox___2IgAj .coinTitle___36a46{font-size:16px;color:#000}.coinBox___2IgAj .coinTitle___36a46 .consume___2tVRv{float:right}.coinBox___2IgAj .coinAddress___2Q5HQ{padding:10px 0;font-size:12px;color:#aaa}.coinBox___2IgAj .coinTime___3n6AK{font-size:11px;color:#aaa;padding-bottom:15px}.listleft___5-dzb{top:12px;position:absolute}.listleft___5-dzb p{font-size:12px;color:#aaa}.potop___1jyS3{position:relative;top:-8px}.listleft___5-dzb h1{font-size:16px;font-weight:400;color:#000}.listright___2beol{float:right;padding-right:15px;margin-top:40px;margin-bottom:40px}.listright___2beol p{font-size:18px;color:#000}.rightNode___3tVsu{width:30px}.top___2OkXH{position:relative;top:0;left:0;width:100%;height:103px;background:#f76260}.top___2OkXH img{position:absolute;left:23px;bottom:24px;display:inline-block;width:60px}.top___2OkXH span.coins___3u67L{position:absolute;top:35px;left:105px;font-size:21px;color:#fff}.top___2OkXH span.sign___2BcaF{position:absolute;right:15px;top:32px;display:inline-block;height:32px;width:76px;text-align:center;line-height:32px;box-sizing:border-box;font-size:17px;color:#fff;border:1px solid #fff;border-radius:4px}.top___2OkXH span.coins_desc___28OMB{position:absolute;left:105px;top:58px;color:#fdb7b3;font-size:14px}.items___2uItM{width:100%;height:40px;background:#fff;overflow:hidden;position:relative}.items___2uItM .scrollBar___3RWeM{position:absolute;width:100%;height:100%;overflow:auto}.items___2uItM ul{height:40px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}.items___2uItM ul::-webkit-scrollbar{display:none}.items___2uItM ul li{white-space:nowrap;box-sizing:border-box;height:40px;text-align:center;line-height:40px;display:inline-block;font-size:16px;color:#333;margin-left:15px}.items___2uItM ul li.active___wyvZv{color:#f76260;border-bottom:2px solid #f76260}.products___7gMjD{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.products___7gMjD .productBox___uipbq{position:relative;list-style:none;overflow:hidden;height:240px;width:50%;background:#fff;margin-top:14px;border-right:7px solid #f6f6f9;box-sizing:border-box;display:inline-block}.products___7gMjD .productBox___uipbq:nth-of-type(2n){border-left:7px solid #f6f6f9;border-right:0}.products___7gMjD .productBox___uipbq .products_img___1fBwF{max-width:100%;width:100%;height:180px}.products___7gMjD .productBox___uipbq p{text-align:center}.products___7gMjD .productBox___uipbq p.name___32oO0{font-size:14px;color:#000;margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.products___7gMjD .productBox___uipbq p.money___Sc2yt{font-size:14px;color:#f76260;padding-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.products___7gMjD .productBox___uipbq p.money___Sc2yt img{padding-right:2px;display:inline-block;width:18px}.block___H9OTg{display:block}.hide___8fU0G{display:none}",""]),t.locals={bg:"bg___SMYr2",dhOver:"dhOver___3aKpr",coinMain:"coinMain___3DJQ2",coinText:"coinText___3xsPc",noneCoin:"noneCoin___10Hvo",coinlist:"coinlist___2Fa3X",coinBox:"coinBox___2IgAj",coinContent:"coinContent___1lHd6",coinTitle:"coinTitle___36a46",consume:"consume___2tVRv",coinAddress:"coinAddress___2Q5HQ",coinTime:"coinTime___3n6AK",listleft:"listleft___5-dzb",potop:"potop___1jyS3",listright:"listright___2beol",rightNode:"rightNode___3tVsu",top:"top___2OkXH",coins:"coins___3u67L",sign:"sign___2BcaF",coins_desc:"coins_desc___28OMB",items:"items___2uItM",scrollBar:"scrollBar___3RWeM",active:"active___wyvZv",products:"products___7gMjD",productBox:"productBox___uipbq",products_img:"products_img___1fBwF",name:"name___32oO0",money:"money___Sc2yt",block:"block___H9OTg",hide:"hide___8fU0G"}},343:[2307,295],1053:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s["default"]?(0,s["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=o(2),d=n(r),_=o(5),s=n(_),c=o(3),u=n(c),f=o(4),p=n(f),g=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),h=o(1),x=n(h),m=o(12),b=n(m),v=o(11),y=o(10),w=o(23),k=n(w),E=o(343),B=n(E),L=o(19),M=n(L),T=function(e){function t(e){i(this,t);var o=l(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return o.state={},o}return a(t,e),g(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=document.body.clientHeight-44,t=this.props,o=t.listData,n=t.pending,i=t.end,l=t.goBack;return x["default"].createElement("div",{className:B["default"].bg},x["default"].createElement(b["default"],{onLeft:l},"我的点币记录"),x["default"].createElement("div",{className:B["default"].coinMain},x["default"].createElement(k["default"],{height:e,fetch:this.props.getList,isLoading:n,distance:5,endType:i,endload:x["default"].createElement("div",null)},o&&o.map(function(e,t){return x["default"].createElement("div",{key:t,className:B["default"].coinBox},x["default"].createElement("div",{className:B["default"].coinContent},x["default"].createElement("div",{className:B["default"].coinTitle},x["default"].createElement("span",null,e.name),x["default"].createElement("span",{className:B["default"].consume},"增加"==e.type&&"+"||"-",e.amount)),x["default"].createElement("div",{className:B["default"].coinAddress},e.desc),x["default"].createElement("div",{className:B["default"].coinTime},e.date)))}))))}}]),t}(x["default"].Component),z=function(e){return{listData:e.listdata.getIn(["COIN_LOG","data"]),pending:e.listdata.getIn(["COIN_LOG","pending"]),end:e.listdata.getIn(["COIN_LOG","pageEnd"])}},H=function(e){return{goBack:function(){e((0,y.goBack)())},getList:function(){e({type:"COIN_LOG"})},clearData:function(){e({type:"CLEAR_DATA",key:"COIN_LOG"})}}};t["default"]=(0,v.connect)(z,H)((0,M["default"])(T))}});