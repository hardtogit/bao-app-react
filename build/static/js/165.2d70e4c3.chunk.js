webpackJsonp([165],{409:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,d["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(f["default"]?(0,f["default"])(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(2),_=l(r),s=a(5),f=l(s),c=a(3),d=l(c),u=a(4),p=l(u),b=function(){function t(t,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,_["default"])(t,l.key,l)}}return function(e,a,l){return a&&t(e.prototype,a),l&&t(e,l),e}}(),m=a(1),h=l(m),g=a(11),x=l(g),w=a(600),S=l(w),E=a(9),v=a(26),C=l(v),k=a(8),L=a(97),j=l(L),N=a(25),y=l(N),A=function(t){function e(t){n(this,e);var a=o(this,(e.__proto__||(0,p["default"])(e)).call(this,t));return a.componentDidMount=function(){a.props.getList(a.state.flag),a.setState({init:!0})},a.filters=function(){a.setState({filterShow:!a.state.filterShow})},a.choose=function(t){a.refs.scroll.setState({init:!0}),a.setState({flag:t,filterShow:!1}),a.props.clearData(),a.props.getList(t)},a.ScrollDom=function(){var t=document.body.clientHeight-98,e=a.props,l=e.listData,n=e.pending,o=e.end;return h["default"].createElement("div",{className:S["default"].contentList,style:{height:t}},h["default"].createElement(C["default"],{ref:"scroll",height:t,fetch:function(){a.props.getList(a.state.flag)},isLoading:n,distance:5,endType:o,nullDom:h["default"].createElement("img",{className:S["default"].errorImg,src:j["default"]})},l&&l.map(function(t,e){var a=t.type_name,l=t.date,n=t.amount,o=(t.status,t.way),i=t.desc,r=t.due_amount;return h["default"].createElement("div",{className:S["default"].item,key:e},h["default"].createElement("p",null,h["default"].createElement("span",null,a),h["default"].createElement("span",{className:(0,x["default"])("入账"==o?S["default"]["in"]:"")},"¥",n)),h["default"].createElement("p",null,h["default"].createElement("span",null,l),h["default"].createElement("span",null,"待收金额",r)),h["default"].createElement("p",null,"备注:",i))})))},a.state={filterShow:!1,flag:0,init:!1},a}return i(e,t),b(e,[{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var t=this,e=this.state,a=e.init,l=e.flag,n=void 0;return a&&(n=this.ScrollDom()),document.getElementById("scrollUl")&&(document.getElementById("scrollUl").scrollLeft=92*l),h["default"].createElement("div",{className:S["default"].bg},h["default"].createElement("div",{className:S["default"].tabs},this.state.filterShow&&h["default"].createElement("ul",{className:S["default"].tabUl},h["default"].createElement("li",{className:S["default"].tabLi},"请选择查看类型"))||h["default"].createElement("ul",{id:"scrollUl",className:S["default"].tabUl},h["default"].createElement("li",{onClick:function(){t.choose(0)},className:(0,x["default"])([S["default"].tabLi,0==this.state.flag?S["default"].active:""])},"全部"),h["default"].createElement("li",{onClick:function(){t.choose(1)},className:(0,x["default"])([S["default"].tabLi,1==this.state.flag?S["default"].active:""])},"出借"),h["default"].createElement("li",{onClick:function(){t.choose(2)},className:(0,x["default"])([S["default"].tabLi,2==this.state.flag?S["default"].active:""])},"回款"),h["default"].createElement("li",{onClick:function(){t.choose(3)},className:(0,x["default"])([S["default"].tabLi,3==this.state.flag?S["default"].active:""])},"红包"),h["default"].createElement("li",{onClick:function(){t.choose(4)},className:(0,x["default"])([S["default"].tabLi,4==this.state.flag?S["default"].active:""])},"理财金收益"),h["default"].createElement("li",{onClick:function(){t.choose(5)},className:(0,x["default"])([S["default"].tabLi,5==this.state.flag?S["default"].active:""])},"充值"),h["default"].createElement("li",{onClick:function(){t.choose(6)},className:(0,x["default"])([S["default"].tabLi,6==this.state.flag?S["default"].active:""])},"提现")),h["default"].createElement("div",{className:(0,x["default"])([S["default"].btn,this.state.filterShow?S["default"]["default"]:""]),onClick:this.filters},h["default"].createElement("span",{className:(0,x["default"])([this.state.filterShow?S["default"].arrowUp:S["default"].arrowDown])}))),n,h["default"].createElement("div",{className:(0,x["default"])(S["default"].filter,this.state.filterShow?S["default"].active:"hide")},h["default"].createElement("ul",null,h["default"].createElement("li",{ref:"scrollUl",onClick:function(){t.choose(0)},className:(0,x["default"])(0==this.state.flag?S["default"].current:"")},"全部"),h["default"].createElement("li",{onClick:function(){t.choose(1)},className:(0,x["default"])(1==this.state.flag?S["default"].current:"")},"出借"),h["default"].createElement("li",{onClick:function(){t.choose(2)},className:(0,x["default"])(2==this.state.flag?S["default"].current:"")},"回款"),h["default"].createElement("li",{onClick:function(){t.choose(3)},className:(0,x["default"])(3==this.state.flag?S["default"].current:"")},"红包"),h["default"].createElement("li",{onClick:function(){t.choose(4)},className:(0,x["default"])(4==this.state.flag?S["default"].current:"")},"理财金收益"),h["default"].createElement("li",{onClick:function(){t.choose(5)},className:(0,x["default"])(5==this.state.flag?S["default"].current:"")},"充值"),h["default"].createElement("li",{onClick:function(){t.choose(6)},className:(0,x["default"])(6==this.state.flag?S["default"].current:"")},"提现"))))}}]),e}(h["default"].Component),T=function(t){return{listData:t.listdata.getIn(["FETCH_MONEY_LOG","data"]),pending:t.listdata.getIn(["FETCH_MONEY_LOG","pending"]),end:t.listdata.getIn(["FETCH_MONEY_LOG","pageEnd"])}},V=function(t){return{getList:function(e){t({type:"FETCH_MONEY_LOG",params:[e]})},pop:function(){t((0,k.goBack)())},clearData:function(){t({type:"CLEAR_DATA",key:"FETCH_MONEY_LOG"})}}};e["default"]=(0,E.connect)(T,V)((0,y["default"])(A))},464:function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".bg___26SdC{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;padding-top:44px}.bg___26SdC .tabs___39TAj{position:relative;height:44px;margin-bottom:10px;background-color:#fff}.bg___26SdC .tabs___39TAj .btn___mMSJx{position:absolute;width:44px;height:44px;right:0;top:0;background-color:#fff;border-left:1px solid #ddd;box-shadow:-2px 0 5px #ddd}.bg___26SdC .tabs___39TAj .btn___mMSJx.default___1SsS1{box-shadow:none;border-left:none}.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowUp___WbVtv{position:relative}.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowUp___WbVtv:after,.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowUp___WbVtv:before{border:10px solid transparent;border-bottom:10px solid #fff;width:0;height:0;position:absolute;top:8px;left:12px;content:' '}.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowUp___WbVtv:before{border-bottom:10px solid #666;top:7px}.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowDown___KbfQb{position:relative}.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowDown___KbfQb:after,.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowDown___KbfQb:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:16px;left:12px;content:' '}.bg___26SdC .tabs___39TAj .btn___mMSJx .arrowDown___KbfQb:before{border-top:10px solid #666;top:17px}.bg___26SdC .tabs___39TAj .tabUl___3SlAi{padding:0 15px;white-space:nowrap;overflow-x:scroll}.bg___26SdC .tabs___39TAj .tabUl___3SlAi .tabLi___1hWSh{display:inline-block;height:44px;white-space:nowrap;line-height:44px;margin-right:60px;color:#666}.bg___26SdC .tabs___39TAj .tabUl___3SlAi .tabLi___1hWSh.active___15wfY{border-bottom:2px solid #00a6e2;color:#00a6e2}.contentList___fjVWz{background-color:#fff;padding-left:15px}.contentList___fjVWz .errorImg___2V5an{display:block;margin:50px auto 0}.contentList___fjVWz .item___23jsn{border-bottom:1px solid #e4e4e4;padding:15px 0}.contentList___fjVWz .item___23jsn p{font-size:11px;color:#aaa;line-height:20px}.contentList___fjVWz .item___23jsn p:nth-child(1){font-size:16px;color:#000}.contentList___fjVWz .item___23jsn p:nth-child(1) span:last-child{color:#2caf69;font-size:20px;float:right;margin-right:15px}.contentList___fjVWz .item___23jsn p:nth-child(1) span:last-child.in___2dulp{color:#ff7300}.contentList___fjVWz .item___23jsn p:nth-child(2) span:last-child{float:right;margin-right:15px}.filter___1Vs0r{position:fixed;top:88px;left:0;height:100%;width:100%;background:rgba(0,0,0,.4);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .4s cubic-bezier(.1,.7,.1,1);transition:all .4s cubic-bezier(.1,.7,.1,1)}.filter___1Vs0r.active___15wfY,.filter___1Vs0r.active___15wfY ul{-webkit-transform:translateZ(0);transform:translateZ(0)}.filter___1Vs0r ul{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .6s cubic-bezier(.1,.7,.1,1);transition:all .6s cubic-bezier(.1,.7,.1,1);width:100%;padding:15px;background:#fff;height:120px}.filter___1Vs0r ul li{list-style:none;text-align:center;color:#626262;font-size:14px;padding:6px 8px;display:inline-block;border:1px solid #ddd;margin:0 20px 15px 0}.filter___1Vs0r ul li.current___1DOAZ{color:#00a6e2;border-color:#00a6e2}",""]),e.locals={bg:"bg___26SdC",tabs:"tabs___39TAj",btn:"btn___mMSJx","default":"default___1SsS1",arrowUp:"arrowUp___WbVtv",arrowDown:"arrowDown___KbfQb",tabUl:"tabUl___3SlAi",tabLi:"tabLi___1hWSh",active:"active___15wfY",contentList:"contentList___fjVWz",errorImg:"errorImg___2V5an",item:"item___23jsn","in":"in___2dulp",filter:"filter___1Vs0r",current:"current___1DOAZ"}},600:function(t,e,a){var l=a(464);"string"==typeof l&&(l=[[t.id,l,""]]);a(7)(l,{});l.locals&&(t.exports=l.locals)},1231:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(409),o=l(n);e["default"]=o["default"]}});