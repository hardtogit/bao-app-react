webpackJsonp([70],{1074:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,_,c=a(2),f=l(c),o=a(5),d=l(o),u=a(3),m=l(u),p=a(4),h=l(p),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,f["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),N=a(1),E=l(N),b=a(2153),y=l(b),g=a(14),C=l(g),w=a(11),v=l(w),k=a(18),L=l(k),A=a(17),M=l(A),S=a(10),D=a(92),P=l(D),H=a(23),O=l(H),U=a(9),T=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.handleClick=function(){a.setState({isOpen:!a.state.isOpen})},a.dateLine=function(e,t,a){switch(e){case 0:return"";case 1:return E["default"].createElement("div",{className:y["default"].lineContainer},E["default"].createElement("ul",{className:y["default"].lineUl},E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"提交申请"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*t)))),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"处理中"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*a))))));case 2:return E["default"].createElement("div",{className:y["default"].lineContainer},E["default"].createElement("ul",{className:y["default"].lineUl},E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"提交申请"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*t)))),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"信息核实成功"),E["default"].createElement("p",{className:y["default"].time,style:{height:"13px"}})),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"处理成功"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*a))))));case 3:return E["default"].createElement("div",{className:y["default"].lineContainer},E["default"].createElement("ul",{className:y["default"].lineUl},E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"提交申请"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*t)))),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:(0,C["default"])([y["default"].stepName,y["default"].red])},"审核不通过"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*a))))));case 4:return E["default"].createElement("div",{className:y["default"].lineContainer},E["default"].createElement("ul",{className:y["default"].lineUl},E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"提交申请"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*t)))),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"已取消"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*a))))));case 5:return E["default"].createElement("div",{className:y["default"].lineContainer},E["default"].createElement("ul",{className:y["default"].lineUl},E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"提交申请"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*t)))),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:y["default"].stepName},"信息核实成功"),E["default"].createElement("p",{className:y["default"].time,style:{height:"13px"}})),E["default"].createElement("li",{className:y["default"].lineLi},E["default"].createElement("span",{className:y["default"].point}),E["default"].createElement("p",{className:(0,C["default"])([y["default"].stepName,y["default"].red])},"银行处理失败"),E["default"].createElement("p",{className:y["default"].time},M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*a))))));default:return""}},a.state={isOpen:!1},a}return i(t,e),x(t,[{key:"render",value:function(){var e=this,t=this.props.item;return E["default"].createElement("div",{className:(0,C["default"])([y["default"].box,this.state.isOpen?"":y["default"].hidden]),onClick:this.handleClick},E["default"].createElement("div",{className:y["default"].cashContent},E["default"].createElement("div",{className:y["default"].left},E["default"].createElement("ul",{className:y["default"].cashUl},E["default"].createElement("li",{className:y["default"].text},"提现金额  ","platform"==t.access_sys&&E["default"].createElement("span",{className:y["default"].plat},"托管")||E["default"].createElement("span",{className:y["default"].store},"存管"),"   "),E["default"].createElement("li",{className:y["default"].money},"￥",t.txwithdrawmoney," "),E["default"].createElement("li",{className:y["default"].bankName},t.bankName," (尾号",t.bank_card.substr(t.bank_card.length-4),")"),E["default"].createElement("li",{className:y["default"].time},"申请时间：",M["default"].formatDate("yyyy-MM-dd hh:mm:ss",new Date(1e3*t.txaddtime))))),E["default"].createElement("div",{className:y["default"].right},E["default"].createElement("div",{className:y["default"].status},function(){switch(parseInt(t.txwithdrawstatus)){case 0:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].orange},"申请中"),E["default"].createElement("span",{className:y["default"].cancel,onClick:function(a){a.stopPropagation(),"platform"==t.access_sys?e.props.cancelFn(t.txid,"platform"):e.props.cancelFn(t.txid,"")}},"撤销"));case 1:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].blue},"处理中"));case 2:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].blue},"处理成功"));case 3:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].red},"审核不通过"));case 4:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].blue},"已取消"));case 5:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].red},"银行处理失败"));default:return E["default"].createElement("div",{className:y["default"].statusText},E["default"].createElement("span",{className:y["default"].blue},"提现失败"))}}())),E["default"].createElement(O["default"],{ref:"alert"})),this.dateLine(t.txwithdrawstatus,t.txaddtime,t.txdealtime))}}]),t}(N.Component),B=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.state={isOpen:!1},a}return i(t,e),x(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.label,l=t.data;return E["default"].createElement("div",{className:y["default"].cashBox},E["default"].createElement("div",{className:y["default"].month},a),l.map(function(t,a){return E["default"].createElement(T,{key:a,item:t,cancelFn:e.props.cancelFn})}))}}]),t}(N.Component),j=(_=r=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.filters=function(){a.setState({filterShow:!a.state.filterShow})},a.cancelCashFn=function(e,t){a.refs.alert.show({content:"确定取消该提现申请？",okText:"确定",cancel:"取消",okCallback:function(){"platform"==t?a.props.cancelCash({txid:e,access_sys:"platform"}):a.props.cancelCash({txid:e})}})},a.choose=function(e){a.setState({flag:e}),a.props.getList({type:e}),a.filters()},a.state={filterShow:!1,flag:3},a}return i(t,e),x(t,[{key:"componentDidMount",value:function(){this.props.getList(3)}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.cancelData;a&&100==a.code?(this.props.clearCancelData(),this.refs.tip.show({content:"撤销成功",okText:"确定",okCallback:function(){t.props.getList({type:t.state.flag})}})):a&&100!=a.code&&(this.props.clearCancelData(),this.refs.tip.show({content:"撤销失败",okText:"确定",okCallback:function(){}}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.pop,l=t.data,n=t.pending;return E["default"].createElement("div",{className:y["default"].container},E["default"].createElement(v["default"],{onLeft:a,rightNode:E["default"].createElement("div",{onClick:this.filters},"筛选")},"提现明细"),E["default"].createElement("div",{className:(0,C["default"])(y["default"].filter,this.state.filterShow?y["default"].active:"hide")},E["default"].createElement("ul",null,E["default"].createElement("li",{onClick:function(){e.choose(3)},className:(0,C["default"])(3===this.state.flag?y["default"].current:"")},"全部数据"),E["default"].createElement("li",{onClick:function(){e.choose(1)},className:(0,C["default"])(1===this.state.flag?y["default"].current:"")},"存管数据"),E["default"].createElement("li",{onClick:function(){e.choose(2)},className:(0,C["default"])(2==this.state.flag?y["default"].current:"")},"托管数据"))),E["default"].createElement("div",{className:y["default"].content},function(){if(n)return E["default"].createElement(L["default"],null);if(l&&100==l.code){if(0===l.data.length)return E["default"].createElement("div",null,E["default"].createElement("img",{className:y["default"].nodata,src:P["default"],alt:""}));var t=[];for(var a in l.data)t.push(E["default"].createElement(B,{key:a,label:a,data:l.data[a],cancelFn:e.cancelCashFn}));return t}}()),E["default"].createElement(O["default"],{ref:"alert"}),E["default"].createElement(O["default"],{ref:"tip"}))}}]),t}(N.Component),r.defaultProps={},_),Y=function(e){return{data:e.infodata.getIn(["GET_CASH_LOG","data"]),cancelData:e.infodata.getIn(["CANCEL_CASH","data"]),pending:e.infodata.getIn(["GET_CASH_LOG","pending"])}},z=function(e,t){return{pop:function(){e((0,U.goBack)())},push:function(t){e((0,U.push)(t))},getList:function(t){e({type:"GET_CASH_LOG",params:[t]})},cancelCash:function(t){e({type:"CANCEL_CASH",params:[t]})},clearCancelData:function(){e({type:"CLEAR_INFO_DATA",key:"CANCEL_CASH"})}}};t["default"]=(0,S.connect)(Y,z)(j)},1551:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___txA42{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___txA42 .cashBox___l1LH8 .month___6HG2u{padding:10px 12px}.container___txA42 .cashBox___l1LH8 .box___jQrTb{border-bottom:1px solid #ddd}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9{background-color:#fff;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q{-webkit-box-flex:1;-ms-flex:1;flex:1}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q .text___1Q97J{font-size:14px}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q .text___1Q97J .store___2bL40{font-size:12px;padding:0 6px;border-radius:14px;color:#fff;background-color:#f6923a}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q .text___1Q97J .plat___mRkjw{font-size:12px;padding:0 6px;border-radius:14px;color:#fff;background-color:#41bce9}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q .money___3lTmj{color:#2caf69;font-size:22px;margin-left:-5px;margin-top:4px;margin-bottom:10px}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q .bankName___1-XEV{font-size:11px;color:#000;margin-bottom:4px}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .left___3gr1q .time___XgOYC{font-size:11px;color:#aaa}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .right___3nXM2{-webkit-box-flex:140px;-ms-flex:140px 0;flex:140px 0;text-align:right;font-size:14px}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .right___3nXM2 .orange___1eSGh{color:#ff7701}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .right___3nXM2 .blue___Q89bf{color:#00a6e2}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .right___3nXM2 .red___1wyOR{color:#f76260}.container___txA42 .cashBox___l1LH8 .cashContent___S2Pi9 .right___3nXM2 .cancel___2CH4R{padding:3px 18px;border-radius:20px;border:1px solid #ddd;margin-left:10px}.container___txA42 .filter___2sf8v{position:fixed;top:44px;left:0;height:100%;width:100%;background:rgba(0,0,0,.4);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .4s cubic-bezier(.1,.7,.1,1);transition:all .4s cubic-bezier(.1,.7,.1,1)}.container___txA42 .filter___2sf8v.active___1cKnF,.container___txA42 .filter___2sf8v.active___1cKnF ul{-webkit-transform:translateZ(0);transform:translateZ(0)}.container___txA42 .filter___2sf8v ul{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .6s cubic-bezier(.1,.7,.1,1);transition:all .6s cubic-bezier(.1,.7,.1,1);width:100%;padding:0 15px;background:#fff;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container___txA42 .filter___2sf8v ul li{min-width:33%;list-style:none;text-align:center;color:#626262;font-size:14px}.container___txA42 .filter___2sf8v ul li:not(:nth-of-type(3n)){border-right:1px solid #e4e4e4}.container___txA42 .filter___2sf8v ul li:last-child{border-right:none}.container___txA42 .filter___2sf8v ul li.current___3wfZa{color:#00a6e2}.container___txA42 .lineContainer___OPUY4{background-color:#fff;padding:15px}.container___txA42 .lineContainer___OPUY4 .lineUl___1VAi5 .lineLi___33osC{position:relative;padding-left:14px;border-left:2px solid #00a6e2;margin-left:4px;padding-bottom:15px}.container___txA42 .lineContainer___OPUY4 .lineUl___1VAi5 .lineLi___33osC:last-child{border-left:2px solid transparent}.container___txA42 .lineContainer___OPUY4 .lineUl___1VAi5 .lineLi___33osC .point___uLyNf{position:absolute;display:block;left:-6px;top:-2px;width:10px;height:10px;border-radius:100%;background-color:#00a6e2}.container___txA42 .lineContainer___OPUY4 .lineUl___1VAi5 .lineLi___33osC .stepName___Yjdtj{font-size:14px;color:#00a6e2;position:relative;top:-6px}.container___txA42 .lineContainer___OPUY4 .lineUl___1VAi5 .lineLi___33osC .stepName___Yjdtj.red___1wyOR{color:#f76260}.container___txA42 .lineContainer___OPUY4 .lineUl___1VAi5 .lineLi___33osC .time___XgOYC{font-size:11px;color:#aaa;position:relative;top:-2px}.container___txA42 .hidden___3Xmjq .lineContainer___OPUY4{display:none}.container___txA42 .nodata___1mwi9{display:block;margin:40px auto}",""]),t.locals={container:"container___txA42",cashBox:"cashBox___l1LH8",month:"month___6HG2u",box:"box___jQrTb",cashContent:"cashContent___S2Pi9",left:"left___3gr1q",text:"text___1Q97J",store:"store___2bL40",plat:"plat___mRkjw",money:"money___3lTmj",bankName:"bankName___1-XEV",time:"time___XgOYC",right:"right___3nXM2",orange:"orange___1eSGh",blue:"blue___Q89bf",red:"red___1wyOR",cancel:"cancel___2CH4R",filter:"filter___2sf8v",active:"active___1cKnF",current:"current___3wfZa",lineContainer:"lineContainer___OPUY4",lineUl:"lineUl___1VAi5",lineLi:"lineLi___33osC",point:"point___uLyNf",stepName:"stepName___Yjdtj",hidden:"hidden___3Xmjq",nodata:"nodata___1mwi9"}},2153:[2349,1551]});