webpackJsonp([16],{91:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,s,c=a(2),u=n(c),d=a(5),f=n(d),p=a(3),_=n(p),m=a(4),x=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),h=n(g),y=a(29),v=n(y),k=a(99),E=n(k),w=a(92),T=n(w),N=a(188),C=n(N),B=a(11),j=n(B);a(98);var A=a(12),L=n(A),M=(s=i=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,x["default"])(t)).call.apply(e,[this].concat(s))),n.state={_active:!1,rate:n.props.rate,amount:n.props.amount,term:n.props.term},n.show=function(){return n.setState({_active:!0})},n.hide=function(){return n.setState({_active:!1})},n.toggle=function(){return n.setState({_active:!n.state._active})},n.handleAmount=function(e){var t=e.target.value;isNaN(+t)||n.setState({amount:t})},n.handleTerm=function(e){var t=e.target.value;isNaN(+t)||n.setState({term:t})},n.calculateProfit=function(){var e=n.props.unit,t=n.state,a=t.rate,l=t.amount,o=t.term,r=/d/.test(e)?365:12;return v["default"].round(+l*(+o/r)*(+a/100),2)},n.handleTermChoose=function(){n.props.rateMap&&n.refs.select.show()},n.changeTerm=function(e){var t=e.rate,a=e.term;return n.setState({rate:t,term:a})},r=a,o(n,r)}return r(t,e),b(t,[{key:"componentWillReceiveProps",value:function(e){e.rate!==this.state.rate&&this.setState({rate:e.rate}),e.amount!==this.state.amount&&this.setState({amount:e.amount}),e.term!==this.state.term&&this.setState({term:e.term})}},{key:"render",value:function(){var e=this.props,t=e.unit,a=e.termFixed,n=e.rateMap,l=e.modalStyle,o=e.modalBody,r=this.state.rate;return h["default"].createElement(C["default"],{transitionName:"calculator",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state._active&&h["default"].createElement("div",{onClick:this.hide,className:(0,j["default"])(E["default"].modal,l)},h["default"].createElement("div",{onClick:function(e){return e.stopPropagation()},className:(0,j["default"])(E["default"].container,o),style:{width:window.innerWidth}},h["default"].createElement(T["default"],{className:E["default"].cross,lineClass:E["default"].crossLine,onClick:this.hide}),h["default"].createElement("p",{className:E["default"].p1},"参考回报"),h["default"].createElement("p",{className:E["default"].p2},"¥",this.calculateProfit()),h["default"].createElement("div",{className:E["default"].form},h["default"].createElement("div",{className:E["default"].row},h["default"].createElement("span",null,"买入金额"),h["default"].createElement("input",{ref:"amount",type:"tel",maxLength:10,value:this.state.amount,onChange:this.handleAmount}),h["default"].createElement("span",null,"元")),h["default"].createElement("div",{className:E["default"].border}),h["default"].createElement("div",{onClick:this.handleTermChoose,className:E["default"].row},h["default"].createElement("span",null,"买入期限"),h["default"].createElement("input",{ref:"term",type:"tel",maxLength:5,value:this.state.term,onChange:this.handleTerm,disabled:!!a||!!n}),h["default"].createElement("span",null,/d/.test(t)?"天":"个月"))),h["default"].createElement("p",{className:E["default"].p3},"参考年化回报：",r,"%")),h["default"].createElement(I,{ref:"select",rate:r,rateMap:n,changeTerm:this.changeTerm,unit:t})))}}]),t}(h["default"].Component),i.propTypes={unit:L["default"].oneOf(["d","m","day","month"]).isRequired,rate:L["default"].oneOfType([L["default"].string,L["default"].number]).isRequired,term:L["default"].oneOfType([L["default"].string,L["default"].number]).isRequired,amount:L["default"].oneOfType([L["default"].string,L["default"].number]).isRequired,termFixed:L["default"].bool,rateMap:L["default"].array},s);t["default"]=M;var I=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,x["default"])(t)).call.apply(e,[this].concat(s))),n.state={_active:!1},n.show=function(){return n.setState({_active:!0})},n.hide=function(){return n.setState({_active:!1})},n.toggle=function(){return n.setState({_active:!n.state._active})},r=a,o(n,r)}return r(t,e),b(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.rate,n=t.rateMap,l=t.changeTerm,o=t.unit;return h["default"].createElement(C["default"],{transitionName:"select",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state._active&&h["default"].createElement("div",{onClick:function(t){t.stopPropagation(),e.hide()},className:E["default"].selectRoot},h["default"].createElement("div",{onClick:function(e){return e.stopPropagation()},className:E["default"].box},n.map(function(t,n){var r=+a===+t.rate;return h["default"].createElement("div",{onClick:function(){l(t),e.hide()},key:n,className:(0,j["default"])(E["default"].row,r&&E["default"].active)},h["default"].createElement("div",{className:(0,j["default"])(E["default"].radioButton,r&&E["default"].active)}),t.term,/d/.test(o)?"天":"个月")}))))}}]),t}(h["default"].PureComponent)},92:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(2),s=n(i),c=a(5),u=n(c),d=a(3),f=n(d),p=a(4),_=n(p),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),b=n(x),g=a(100),h=n(g),y=a(11),v=n(y),k=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return r(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.lineClass,n=e.onClick;return b["default"].createElement("div",{onClick:n,className:(0,v["default"])(h["default"].container,t)},b["default"].createElement("div",{className:a}),b["default"].createElement("div",{className:a}))}}]),t}(b["default"].PureComponent);t["default"]=k},94:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".calculator-enter{opacity:.01}.calculator-enter-active{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease}.calculator-leave{opacity:1}.calculator-leave-active{opacity:.01;-webkit-transition:all .3s ease;transition:all .3s ease}.calculator-enter>div{-webkit-transform:translate3d(0,15%,0);transform:translate3d(0,15%,0)}.calculator-enter-active>div{-webkit-transition:all .5s ease;transition:all .5s ease}.calculator-enter-active>div,.calculator-leave>div{-webkit-transform:translateZ(0);transform:translateZ(0)}.calculator-leave-active>div{-webkit-transform:translate3d(0,15%,0);transform:translate3d(0,15%,0);-webkit-transition:all .3s ease;transition:all .3s ease}.select-enter{opacity:.01}.select-enter-active{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease}.select-leave{opacity:1}.select-leave-active{opacity:.01;-webkit-transition:all .3s ease;transition:all .3s ease}.select-enter>div{-webkit-transform:scale(.75);transform:scale(.75)}.select-enter-active>div{-webkit-transition:all .5s ease;transition:all .5s ease}.select-enter-active>div,.select-leave>div{-webkit-transform:scale(1);transform:scale(1)}.select-leave-active>div{-webkit-transform:scale(.75);transform:scale(.75);-webkit-transition:all .3s ease;transition:all .3s ease}",""])},95:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".modal___2u9wg{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.7);z-index:800}.container___1_fLl{margin-top:30%;height:100%;width:100%;background-color:#f0eff5;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.container___1_fLl .cross___1K0vI{height:40px;width:40px;background-color:transparent;align-self:flex-end;-ms-flex-item-align:end}.container___1_fLl .cross___1K0vI .crossLine___r0EMt{width:2px;height:40%;background-color:#aaa}.p1___3XwEK{font-size:15px}.p2___IXnkn{font-size:35px;color:#ff7701;margin-top:15px}.form___FmyE2{background-color:#fff;margin-top:10px;height:90px;align-self:stretch;-ms-flex-item-align:stretch;padding:0 15px;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #ddd;border-bottom:1px solid #ddd}.form___FmyE2,.form___FmyE2 .row___1GlT-{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.form___FmyE2 .row___1GlT-{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.form___FmyE2 .row___1GlT- span{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.form___FmyE2 .row___1GlT- span:nth-child(1){margin-right:15px}.form___FmyE2 .row___1GlT- input{font-size:14px;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;color:#00a6e2}.form___FmyE2 .border___2quNB{height:1px;background-color:#ddd}.p3___1LyaV{margin:15px;font-size:14px;color:#888;text-align:left;align-self:stretch;-ms-flex-item-align:stretch}.selectRoot___Yev7S{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;background-color:rgba(0,0,0,.3);-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}.box___9hBCa{background-color:#fff;border-radius:5px;width:70%}.box___9hBCa .row___1GlT-{height:60px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #ddd;padding:0 30px;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.box___9hBCa .row___1GlT-:nth-child(1){border:0}.box___9hBCa .row___1GlT-.active___3aM4n{color:#00a6e2}.radioButton___UbFXv{background-color:transparent;height:28px;width:28px;border:1px solid #444;border-radius:100%;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.radioButton___UbFXv:before{content:'';background-color:#444;border-radius:100%;height:8.4px;width:8.4px}.radioButton___UbFXv.active___3aM4n{border-color:#00a6e2}.radioButton___UbFXv.active___3aM4n:before{background-color:#00a6e2}",""]),t.locals={modal:"modal___2u9wg",container:"container___1_fLl",cross:"cross___1K0vI",crossLine:"crossLine___r0EMt",p1:"p1___3XwEK",p2:"p2___IXnkn",form:"form___FmyE2",row:"row___1GlT-",border:"border___2quNB",p3:"p3___1LyaV",selectRoot:"selectRoot___Yev7S",box:"box___9hBCa",active:"active___3aM4n",radioButton:"radioButton___UbFXv"}},96:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3ZBr6{height:20px;width:20px;border-radius:100%;position:relative;background-color:#666;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.container___3ZBr6 div{position:absolute;height:50%;width:1px;background-color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.container___3ZBr6 div:nth-child(2){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.locals={container:"container___3ZBr6"}},98:function(e,t,a){var n=a(94);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},99:[2365,95],100:[2365,96],111:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,c=a(2),u=n(c),d=a(5),f=n(d),p=a(3),_=n(p),m=a(4),x=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),h=n(g),y=a(136),v=n(y),k=a(12),E=n(k),w=(s=i=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,x["default"])(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,n=e.activityName,l=e.rateA,o=e.rateB;return h["default"].createElement("div",{className:v["default"].header},h["default"].createElement("p",{className:v["default"].lxYear},"参考年回报率(%)"),h["default"].createElement("p",{className:v["default"].lxNum},function(){var e=n.split("|"),a=!1;return e.length>0&&""!=n&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?h["default"].createElement("span",null,l,"0.00"==o?"":h["default"].createElement("span",{style:{fontSize:"36px"}},"+",o)):h["default"].createElement("span",null,t)}()),h["default"].createElement("div",{className:v["default"].lxContent},a&&a.map(function(e,t){var a=e.name,n=e.val;return h["default"].createElement("span",{key:t},h["default"].createElement("p",{className:v["default"].textColor},a),h["default"].createElement("p",null,n))})))}}]),t}(g.Component),i.propTypes={rate:E["default"].string,data:E["default"].array,activityName:E["default"].string,rateA:E["default"].string,rateB:E["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},s);t["default"]=w},122:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},127:function(e,t,a){e.exports=a.p+"static/media/calculator.448bba73.png"},136:[2365,122],150:function(e,t,a){e.exports=a.p+"static/media/Interest.06b87083.png"},152:function(e,t,a){e.exports=a.p+"static/media/lxArrival.9c6e7d3b.png"},153:function(e,t,a){e.exports=a.p+"static/media/lxSd.993c5245.png"},154:function(e,t,a){e.exports=a.p+"static/media/lxStart.e0816e7d.png"},286:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,c=a(2),u=n(c),d=a(5),f=n(d),p=a(3),_=n(p),m=a(4),x=n(m),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(1),h=n(g),y=a(344),v=n(y),k=a(154),E=n(k),w=a(153),T=n(w),N=a(152),C=n(N),B=a(150),j=n(B),A=a(12),L=n(A),M=(s=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return a.state={lx:["抵押标","担保标"]},a}return r(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.startTime,a=e.endTime,n=e.type,l=e.centerTime,o=e.startLabel,r=e.repayment,i=e.endLabel;return h["default"].createElement("div",{className:v["default"].depositBox},h["default"].createElement("ul",{className:v["default"].depositUl},h["default"].createElement("li",{className:v["default"].depositLi},h["default"].createElement("div",{className:v["default"].tbBox},h["default"].createElement("ul",null,h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].startTime},h["default"].createElement("img",{src:E["default"]})),h["default"].createElement("span",{className:v["default"].goNext})),h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].hx}),h["default"].createElement("span",{className:v["default"].locking},"A"==n&&h["default"].createElement("img",{src:T["default"]})||h["default"].createElement("img",{src:j["default"]})),h["default"].createElement("span",{className:v["default"].hx})),h["default"].createElement("li",null,h["default"].createElement("span",{className:v["default"].goNext}),h["default"].createElement("span",{className:v["default"].endTime},h["default"].createElement("img",{src:C["default"]}))))),h["default"].createElement("div",{className:v["default"].tbText},h["default"].createElement("ul",null,h["default"].createElement("li",null,h["default"].createElement("p",{className:v["default"].tbName},o&&o||"起息日"),h["default"].createElement("p",{className:v["default"].timeText},t)),h["default"].createElement("li",null,h["default"].createElement("p",{className:v["default"].tbName},"A"==n&&"锁定期"||r),h["default"].createElement("p",{className:v["default"].timeText},l)),h["default"].createElement("li",null,h["default"].createElement("p",{className:v["default"].tbName},i||"本息到账"),h["default"].createElement("p",{className:v["default"].timeText},a)))))))}}]),t}(g.Component),i.propTypes={startTime:L["default"].string,endTime:L["default"].string,type:L["default"].string,lx:L["default"].number,Grade:L["default"].string,repayment:L["default"].string},i.defaultProps={startTime:"20170214",endTime:"",type:"A",lx:2,Grade:"A",repayment:"每月还息 到期还本"},s);t["default"]=M},305:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".depositBox___2F1qU,.depositLi___3A5gb{background-color:#fff}.depositLi___3A5gb{display:block}.depositLi___3A5gb .tbBox___3L3Y9{padding:20px 34px 0}.depositLi___3A5gb .tbBox___3L3Y9 ul{display:block;width:100%;margin-bottom:10px}.depositLi___3A5gb .tbBox___3L3Y9 ul li{display:inline-block;width:33.33333%;vertical-align:top;position:relative}.depositLi___3A5gb .tbBox___3L3Y9 ul li:nth-of-type(1){padding-left:15px}.depositLi___3A5gb .tbBox___3L3Y9 ul li:nth-of-type(3){padding-right:15px}.goNext___2_xbb{width:100%;background-color:#e5e5e5;height:3px;display:inline-block;vertical-align:middle;margin-top:-5px}.startTime___ae9CD{position:absolute;left:0;top:0}.startTime___ae9CD img{width:13px}.locking___1cnM-{display:inline-block;width:17px;background-color:#fff;position:absolute;left:50%;margin-left:-8.5px;text-align:center}.locking___1cnM- img{width:13px}.endTime___1Kp2o{position:absolute;right:0;top:0}.endTime___1Kp2o img{width:13px}.tbText___Ij9xD{padding:0 15px;border-bottom:1px solid #e5e5e5}.tbText___Ij9xD ul{display:block;width:100%;margin-bottom:20px}.tbText___Ij9xD ul li{display:inline-block;width:33.33333%;vertical-align:top;font-size:12px;color:#666}.tbText___Ij9xD ul li:nth-of-type(2){text-align:center}.tbText___Ij9xD ul li:nth-of-type(3){text-align:right}.tbText___Ij9xD ul li .tbName___Xee_Y{padding-bottom:6px}.tbText___Ij9xD ul li .timeText___1004W{font-size:11px;color:#aaa}.hx___2s85e{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.msBox___1Q-pn{padding:15px;background-color:#fff}.msBox___1Q-pn p{font-size:14px;color:#aaa}.msBox___1Q-pn p:nth-of-type(1){margin-bottom:10px}.msBox___1Q-pn .dbType___1Z_jf{color:#666;float:right;text-align:right}",""]),t.locals={depositBox:"depositBox___2F1qU",depositLi:"depositLi___3A5gb",tbBox:"tbBox___3L3Y9",goNext:"goNext___2_xbb",startTime:"startTime___ae9CD",locking:"locking___1cnM-",endTime:"endTime___1Kp2o",tbText:"tbText___Ij9xD",tbName:"tbName___Xee_Y",timeText:"timeText___1004W",hx:"hx___2s85e",msBox:"msBox___1Q-pn",dbType:"dbType___1Z_jf"}},344:[2365,305],537:function(e,t,a){e.exports=a.p+"static/media/icon-01.98125c38.png"},538:function(e,t,a){e.exports=a.p+"static/media/icon-02.9116ed96.png"},539:function(e,t,a){e.exports=a.p+"static/media/icon-03.6376a9f6.png"},540:function(e,t,a){e.exports=a.p+"static/media/icon-04.030b2889.png"},1009:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=n(i),c=a(5),u=n(c),d=a(3),f=n(d),p=a(4),_=n(p),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),b=n(x),g=a(10),h=n(g),y=a(91),v=n(y),k=a(2272),E=n(k),w=a(11),T=n(w),N=a(25),C=n(N),B=a(9),j=a(8),A=a(45),L=n(A),M=(a(24),a(537)),I=n(M),S=a(538),F=n(S),R=a(539),z=n(R),O=a(540),P=n(O),D=a(16),X=n(D),G=a(111),U=n(G),Y=a(286),W=n(Y),K=a(66),V=n(K),q=a(74),Z=n(q),Q=a(80),H=a(18),J=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,_["default"])(t)).call.apply(e,[this].concat(s))),n.state={descActive:!1,type:2},n.Timer=function(e){var t=n.props,a=t.datas,l=t.datasB,o=t.params,r=(o.id,o.type),i=a;"B"==r&&(i=l);var s=i.data.currentTime,c=void 0,u=void 0,d=new Date(1e3*parseInt(s)),f=d.getFullYear(),p=d.getMonth()+1,_=d.getDate();return c=f+"年"+p+"月"+_+"日",p+=parseInt(e),p>12&&(p-=12,f+=1),u=f+"年"+p+"月"+_+"日",{startTime:c,endTime:u}},n.moneyFn=function(e,t){var a=parseFloat(1e4*e/100*(t/12)).toString();return a.indexOf(".")!=-1&&(a=a.substring(0,a.indexOf(".")+3)),a},n.loadEnd=function(){var e=n.props,t=e.data,a=e.push,l=t.data,o=l.id,r=l.rate,i=l.buy_total,s=l.buy_status,c=l.value_start_date,u=l.value_end_date,d=l.type,f=l.has_money,p=l.money,_=l.price,m=l.title,x=l.month;r=parseFloat(r).toFixed(2);var g="锁定时间",h=[{name:"起投金额",val:_},{name:g,val:x+"个月"}],y="",k=!0;return 0==s?parseInt(f)>=parseInt(p)?(y="已售罄",k=!0):(y="马上出借",k=!1):1==s?(y="未开始",k=!0):2==s&&(y="已结束",k=!0),b["default"].createElement("div",null,b["default"].createElement(U["default"],{rate:r,data:h}),b["default"].createElement("div",{className:E["default"].timeBox},b["default"].createElement(W["default"],{repayment:"锁定结束",centerTime:u,startTime:c,endLabel:"转让成功",type:d})),b["default"].createElement("div",{className:E["default"].depositBox},b["default"].createElement("div",{className:E["default"].profit},b["default"].createElement("p",null,"收益估算")),b["default"].createElement("div",{className:E["default"].profitContent},b["default"].createElement("p",{className:E["default"].profitText},"出借10000元，",x,"个月后到期预期可赚"),b["default"].createElement("p",{className:E["default"].profitText1},"具体收益以实际到账为准"),b["default"].createElement("p",{className:E["default"].profitNum},n.moneyFn(r,x),b["default"].createElement("span",null,"元")))),b["default"].createElement("div",{className:(0,T["default"])(E["default"].depositBox,E["default"].pdAll)},b["default"].createElement("ul",{className:E["default"].iconUl},b["default"].createElement("li",{onClick:function(){a("/gatherDetail/"+m+"/"+x)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:I["default"]})),b["default"].createElement("span",null,"产品详情")),b["default"].createElement("li",{onClick:function(){a("/gatherDeposits/"+o)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:F["default"]})),b["default"].createElement("span",null,"标的详情")),b["default"].createElement("li",{onClick:function(){a("/gatherJoin/"+o)}},b["default"].createElement("span",null,b["default"].createElement("img",{src:z["default"]})),b["default"].createElement("span",null,"加入记录")),b["default"].createElement("li",{onClick:function(){a("/gatherProblems")}},b["default"].createElement("span",null,b["default"].createElement("img",{src:P["default"]})),b["default"].createElement("span",null,"常见问题")))),b["default"].createElement("div",{className:(0,T["default"])(E["default"].depositBox,E["default"].pdAll1)},"累计加入",i,"人"),b["default"].createElement("div",{className:E["default"].bottom},b["default"].createElement("div",{onClick:function(){return n.refs.calculator.show()},className:E["default"].calculator}),b["default"].createElement("button",{onClick:function(){n.purchase(o,a)},disabled:k,style:k&&{backgroundColor:"#aaa"}||{}},y)),b["default"].createElement(v["default"],{ref:"calculator",unit:"m",rate:r,term:x,amount:1e4,modalStyle:E["default"].modalStyle,modalBody:E["default"].modalBody}),b["default"].createElement(V["default"],{ref:"isAuth"}),b["default"].createElement(L["default"],{ref:"store"}," "))},n.purchase=function(e,t){var a=n.props.params.type;switch((0,Q.getAuthDetail)()){case 1:n.refs.isAuth.Verification("/gatherBuy/"+e+"/"+a,t,n.succsseFn,n.props.location.pathname);break;case 2:t("/user/setting/authorization");break;case 3:n.refs.store.show()}},n.succsseFn=function(e){Z["default"].setUrl(e)},r=a,o(n,r)}return r(t,e),m(t,[{key:"componentWillMount",value:function(){this.setState({type:this.props.params.type})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params.productId,a=e.get;a(t)}},{key:"loading",value:function(){return b["default"].createElement(X["default"],null)}},{key:"render",value:function(){var e=this.props,t=e.data,a=(e.pop,e.backgroundColor),n=this.state.type,l=this.loading();t&&(l=this.loadEnd());var o=a?{borderRightColor:a}:{borderRightColor:"#00a6e2"};return b["default"].createElement("div",{className:E["default"].root},b["default"].createElement(h["default"],{leftNode:b["default"].createElement(H.Link,{className:E["default"].leftNode,to:"/home/productIndex"},b["default"].createElement("span",null,b["default"].createElement("span",{className:E["default"].backBefore},"  ")," ",b["default"].createElement("span",{className:E["default"].backAfter,style:o})))},5==n?"新手标计划详情":"聚点+详情"),l)}}]),t}(b["default"].Component),$=function(e){return{data:e.infodata.getIn(["GATHER_DETAIL","data"])}},ee=function(e){return{push:function(t){e((0,B.push)(t))},pop:function(){e((0,B.goBack)())},get:function(t){e({type:"GATHER_DETAIL",params:[t]})}}};t["default"]=(0,j.connect)($,ee)((0,C["default"])(J))},1218:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1009),o=n(l);t["default"]=o["default"]},1697:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___86RKZ{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5;padding-bottom:50px}.backAfter___1a04n,.backBefore___3zxrT{border:10px solid transparent;border-right:10px solid #00a6e2;width:0;height:0;position:absolute;top:12px;left:4px;content:' '}.backBefore___3zxrT{border-right-color:#fff;left:2px}.timeBox___JRtuc{margin-top:10px}.endTime___269tV{position:absolute;right:0;top:0}.endTime___269tV img{width:13px}.depositBox___tgeuK{background-color:#fff;margin-top:10px}.pds___2wEn5{padding:0 15px}.profit___3tl2L{padding:15px 0;border-bottom:1px solid #e5e5e5}.profit___3tl2L p{padding:0 15px;font-size:16px}.profitContent___stjcM{padding:15px 15px 23px}.profitContent___stjcM .profitText___1BHTA{font-size:14px;color:#666;margin-bottom:6px}.profitContent___stjcM .profitText1___pytnj{font-size:12px;color:#d2d2d2;margin-bottom:20px}.profitContent___stjcM .profitNum___3aB8R{font-size:22px;color:#f70;vertical-align:bottom}.profitContent___stjcM .profitNum___3aB8R span{display:inline-block;font-size:14px;padding-bottom:4px;vertical-align:bottom}.pdAll___2wCuW{padding:20px 17px}.iconUl___fsmCV{display:block;width:100%}.iconUl___fsmCV li{display:inline-block;width:25%}.iconUl___fsmCV li span{display:block;width:100%;text-align:center;font-size:12px;color:#666}.iconUl___fsmCV li img{width:30px;margin-bottom:10px}.pdAll1___3mTW3{padding:15px}.hx___cs9ji{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.modalStyle___lyle2{position:fixed;z-index:999}.modalBody___FWGWG{position:absolute;bottom:0;padding-bottom:30px;height:auto}.bottom___OfgXI{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___OfgXI,.bottom___OfgXI .calculator___2Ogsf{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.bottom___OfgXI .calculator___2Ogsf{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.bottom___OfgXI .calculator___2Ogsf:before{height:70%;width:50%;content:'';background:url("+a(127)+") 50% no-repeat;background-size:contain}.bottom___OfgXI button{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}",""]),t.locals={root:"root___86RKZ",backBefore:"backBefore___3zxrT",backAfter:"backAfter___1a04n",timeBox:"timeBox___JRtuc",endTime:"endTime___269tV",depositBox:"depositBox___tgeuK",pds:"pds___2wEn5",profit:"profit___3tl2L",profitContent:"profitContent___stjcM",
profitText:"profitText___1BHTA",profitText1:"profitText1___pytnj",profitNum:"profitNum___3aB8R",pdAll:"pdAll___2wCuW",iconUl:"iconUl___fsmCV",pdAll1:"pdAll1___3mTW3",hx:"hx___cs9ji",modalStyle:"modalStyle___lyle2",modalBody:"modalBody___FWGWG",bottom:"bottom___OfgXI",calculator:"calculator___2Ogsf"}},2272:function(e,t,a){var n=a(1697);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});