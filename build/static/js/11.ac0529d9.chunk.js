webpackJsonp([11],{18:function(e,t,a){e.exports=a.p+"static/media/arrow2.4ba5831c.png"},91:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,s,u=a(2),d=n(u),c=a(5),f=n(c),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(29),v=n(y),E=a(99),w=n(E),k=a(92),N=n(k),T=a(187),B=n(T),C=a(11),L=n(C);a(98);var D=a(12),I=n(D),A=(s=i=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return a=n=o(this,(e=t.__proto__||(0,b["default"])(t)).call.apply(e,[this].concat(s))),n.state={_active:!1,rate:n.props.rate,amount:n.props.amount,term:n.props.term},n.show=function(){return n.setState({_active:!0})},n.hide=function(){return n.setState({_active:!1})},n.toggle=function(){return n.setState({_active:!n.state._active})},n.handleAmount=function(e){var t=e.target.value;isNaN(+t)||n.setState({amount:t})},n.handleTerm=function(e){var t=e.target.value;isNaN(+t)||n.setState({term:t})},n.calculateProfit=function(){var e=n.props.unit,t=n.state,a=t.rate,l=t.amount,o=t.term,r=/d/.test(e)?365:12;return v["default"].round(+l*(+o/r)*(+a/100),2)},n.handleTermChoose=function(){n.props.rateMap&&n.refs.select.show()},n.changeTerm=function(e){var t=e.rate,a=e.term;return n.setState({rate:t,term:a})},r=a,o(n,r)}return r(t,e),x(t,[{key:"componentWillReceiveProps",value:function(e){e.rate!==this.state.rate&&this.setState({rate:e.rate}),e.amount!==this.state.amount&&this.setState({amount:e.amount}),e.term!==this.state.term&&this.setState({term:e.term})}},{key:"render",value:function(){var e=this.props,t=e.unit,a=e.termFixed,n=e.rateMap,l=e.modalStyle,o=e.modalBody,r=this.state.rate;return g["default"].createElement(B["default"],{transitionName:"calculator",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state._active&&g["default"].createElement("div",{onClick:this.hide,className:(0,L["default"])(w["default"].modal,l)},g["default"].createElement("div",{onClick:function(e){return e.stopPropagation()},className:(0,L["default"])(w["default"].container,o),style:{width:window.innerWidth}},g["default"].createElement(N["default"],{className:w["default"].cross,lineClass:w["default"].crossLine,onClick:this.hide}),g["default"].createElement("p",{className:w["default"].p1},"预期收益"),g["default"].createElement("p",{className:w["default"].p2},"¥",this.calculateProfit()),g["default"].createElement("div",{className:w["default"].form},g["default"].createElement("div",{className:w["default"].row},g["default"].createElement("span",null,"买入金额"),g["default"].createElement("input",{ref:"amount",type:"tel",maxLength:10,value:this.state.amount,onChange:this.handleAmount}),g["default"].createElement("span",null,"元")),g["default"].createElement("div",{className:w["default"].border}),g["default"].createElement("div",{onClick:this.handleTermChoose,className:w["default"].row},g["default"].createElement("span",null,"买入期限"),g["default"].createElement("input",{ref:"term",type:"tel",maxLength:5,value:this.state.term,onChange:this.handleTerm,disabled:!!a||!!n}),g["default"].createElement("span",null,/d/.test(t)?"天":"个月"))),g["default"].createElement("p",{className:w["default"].p3},"预期年化收益：",r,"%")),g["default"].createElement(R,{ref:"select",rate:r,rateMap:n,changeTerm:this.changeTerm,unit:t})))}}]),t}(g["default"].Component),i.propTypes={unit:I["default"].oneOf(["d","m","day","month"]).isRequired,rate:I["default"].oneOfType([I["default"].string,I["default"].number]).isRequired,term:I["default"].oneOfType([I["default"].string,I["default"].number]).isRequired,amount:I["default"].oneOfType([I["default"].string,I["default"].number]).isRequired,termFixed:I["default"].bool,rateMap:I["default"].array},s);t["default"]=A;var R=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return a=n=o(this,(e=t.__proto__||(0,b["default"])(t)).call.apply(e,[this].concat(s))),n.state={_active:!1},n.show=function(){return n.setState({_active:!0})},n.hide=function(){return n.setState({_active:!1})},n.toggle=function(){return n.setState({_active:!n.state._active})},r=a,o(n,r)}return r(t,e),x(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.rate,n=t.rateMap,l=t.changeTerm,o=t.unit;return g["default"].createElement(B["default"],{transitionName:"select",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state._active&&g["default"].createElement("div",{onClick:function(t){t.stopPropagation(),e.hide()},className:w["default"].selectRoot},g["default"].createElement("div",{onClick:function(e){return e.stopPropagation()},className:w["default"].box},n.map(function(t,n){var r=+a===+t.rate;return g["default"].createElement("div",{onClick:function(){l(t),e.hide()},key:n,className:(0,L["default"])(w["default"].row,r&&w["default"].active)},g["default"].createElement("div",{className:(0,L["default"])(w["default"].radioButton,r&&w["default"].active)}),t.term,/d/.test(o)?"天":"个月")}))))}}]),t}(g["default"].PureComponent)},92:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(2),s=n(i),u=a(5),d=n(u),c=a(3),f=n(c),_=a(4),p=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),h=a(100),g=n(h),y=a(11),v=n(y),E=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return r(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.lineClass,n=e.onClick;return x["default"].createElement("div",{onClick:n,className:(0,v["default"])(g["default"].container,t)},x["default"].createElement("div",{className:a}),x["default"].createElement("div",{className:a}))}}]),t}(x["default"].PureComponent);t["default"]=E},94:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".calculator-enter{opacity:.01}.calculator-enter-active{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease}.calculator-leave{opacity:1}.calculator-leave-active{opacity:.01;-webkit-transition:all .3s ease;transition:all .3s ease}.calculator-enter>div{-webkit-transform:translate3d(0,15%,0);transform:translate3d(0,15%,0)}.calculator-enter-active>div{-webkit-transition:all .5s ease;transition:all .5s ease}.calculator-enter-active>div,.calculator-leave>div{-webkit-transform:translateZ(0);transform:translateZ(0)}.calculator-leave-active>div{-webkit-transform:translate3d(0,15%,0);transform:translate3d(0,15%,0);-webkit-transition:all .3s ease;transition:all .3s ease}.select-enter{opacity:.01}.select-enter-active{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease}.select-leave{opacity:1}.select-leave-active{opacity:.01;-webkit-transition:all .3s ease;transition:all .3s ease}.select-enter>div{-webkit-transform:scale(.75);transform:scale(.75)}.select-enter-active>div{-webkit-transition:all .5s ease;transition:all .5s ease}.select-enter-active>div,.select-leave>div{-webkit-transform:scale(1);transform:scale(1)}.select-leave-active>div{-webkit-transform:scale(.75);transform:scale(.75);-webkit-transition:all .3s ease;transition:all .3s ease}",""])},95:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".modal___2u9wg{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.7);z-index:800}.container___1_fLl{margin-top:30%;height:100%;width:100%;background-color:#f0eff5;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.container___1_fLl .cross___1K0vI{height:40px;width:40px;background-color:transparent;align-self:flex-end;-ms-flex-item-align:end}.container___1_fLl .cross___1K0vI .crossLine___r0EMt{width:2px;height:40%;background-color:#aaa}.p1___3XwEK{font-size:15px}.p2___IXnkn{font-size:35px;color:#ff7701;margin-top:15px}.form___FmyE2{background-color:#fff;margin-top:10px;height:90px;align-self:stretch;-ms-flex-item-align:stretch;padding:0 15px;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #ddd;border-bottom:1px solid #ddd}.form___FmyE2,.form___FmyE2 .row___1GlT-{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.form___FmyE2 .row___1GlT-{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.form___FmyE2 .row___1GlT- span{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.form___FmyE2 .row___1GlT- span:nth-child(1){margin-right:15px}.form___FmyE2 .row___1GlT- input{font-size:14px;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;color:#00a6e2}.form___FmyE2 .border___2quNB{height:1px;background-color:#ddd}.p3___1LyaV{margin:15px;font-size:14px;color:#888;text-align:left;align-self:stretch;-ms-flex-item-align:stretch}.selectRoot___Yev7S{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;background-color:rgba(0,0,0,.3);-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}.box___9hBCa{background-color:#fff;border-radius:5px;width:70%}.box___9hBCa .row___1GlT-{height:60px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #ddd;padding:0 30px;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.box___9hBCa .row___1GlT-:nth-child(1){border:0}.box___9hBCa .row___1GlT-.active___3aM4n{color:#00a6e2}.radioButton___UbFXv{background-color:transparent;height:28px;width:28px;border:1px solid #444;border-radius:100%;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.radioButton___UbFXv:before{content:'';background-color:#444;border-radius:100%;height:8.4px;width:8.4px}.radioButton___UbFXv.active___3aM4n{border-color:#00a6e2}.radioButton___UbFXv.active___3aM4n:before{background-color:#00a6e2}",""]),t.locals={modal:"modal___2u9wg",container:"container___1_fLl",cross:"cross___1K0vI",crossLine:"crossLine___r0EMt",p1:"p1___3XwEK",p2:"p2___IXnkn",form:"form___FmyE2",row:"row___1GlT-",border:"border___2quNB",p3:"p3___1LyaV",selectRoot:"selectRoot___Yev7S",box:"box___9hBCa",active:"active___3aM4n",radioButton:"radioButton___UbFXv"}},96:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3ZBr6{height:20px;width:20px;border-radius:100%;position:relative;background-color:#666;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.container___3ZBr6 div{position:absolute;height:50%;width:1px;background-color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.container___3ZBr6 div:nth-child(2){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.locals={container:"container___3ZBr6"}},98:function(e,t,a){var n=a(94);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},99:[2363,95],100:[2363,96],109:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),c=a(5),f=n(c),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(133),v=n(y),E=a(12),w=n(E),k=(s=i=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,b["default"])(t)).apply(this,arguments))}return r(t,e),x(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,n=e.activityName,l=e.rateA,o=e.rateB;return g["default"].createElement("div",{className:v["default"].header},g["default"].createElement("p",{className:v["default"].lxYear},"预期年化利率(%)"),g["default"].createElement("p",{className:v["default"].lxNum},function(){var e=n.split("|"),a=!1;return e.length>0&&""!=n&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?g["default"].createElement("span",null,l,"0.00"==o?"":g["default"].createElement("span",{style:{fontSize:"36px"}},"+",o)):g["default"].createElement("span",null,t)}()),g["default"].createElement("div",{className:v["default"].lxContent},a&&a.map(function(e,t){var a=e.name,n=e.val;return g["default"].createElement("span",{key:t},g["default"].createElement("p",{className:v["default"].textColor},a),g["default"].createElement("p",null,n))})))}}]),t}(h.Component),i.propTypes={rate:w["default"].string,data:w["default"].array,activityName:w["default"].string,rateA:w["default"].string,rateB:w["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},s);t["default"]=k},120:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___hxP8k{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___hxP8k .lxYear___q6Ngv{margin-bottom:20px;color:#69d7ff}.header___hxP8k .textColor___1oRCp{color:#69d7ff}.header___hxP8k .lxNum___36yeT{font-size:69px}.lxContent___sEj02{margin-bottom:30px}.lxContent___sEj02 span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___sEj02 span:first-child{padding-left:0}.lxContent___sEj02 span:last-child{border-right:0;padding-right:0}.lxContent___sEj02 span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___hxP8k",lxYear:"lxYear___q6Ngv",textColor:"textColor___1oRCp",lxNum:"lxNum___36yeT",lxContent:"lxContent___sEj02"}},125:function(e,t,a){e.exports=a.p+"static/media/calculator.448bba73.png"},133:[2363,120],147:function(e,t,a){e.exports=a.p+"static/media/Interest.06b87083.png"},149:function(e,t,a){e.exports=a.p+"static/media/lxArrival.9c6e7d3b.png"},150:function(e,t,a){e.exports=a.p+"static/media/lxSd.993c5245.png"},151:function(e,t,a){e.exports=a.p+"static/media/lxStart.e0816e7d.png"},166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),c=a(5),f=n(c),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(197),v=n(y),E=a(11),w=n(E),k=a(12),N=n(k),T=(s=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.switchPanel=function(){var e=a;e.state.open?e.setState({open:!1}):e.setState({open:!0})},a.state={open:a.props.status},a}return r(t,e),x(t,[{key:"render",value:function(){return g["default"].createElement("div",{className:v["default"].panel,style:this.state.open?this.props.styles.border:this.props.styles.none},g["default"].createElement("div",{className:v["default"].header,style:this.props.padding,onClick:this.switchPanel},this.props.title," ",g["default"].createElement("span",{className:(0,w["default"])(v["default"].arrows,this.state.open&&v["default"].down||"")})),g["default"].createElement("div",{className:v["default"].body,style:this.state.open?this.props.styles.show:this.props.styles.hidden},this.props.children))}}]),t}(h.Component),i.defaultProps={title:"面板标题",status:!1,styles:{show:{display:"block"},hidden:{display:"none"},border:{borderBottom:"1px solid #ddd"},none:{borderBottom:"none"}}},i.propTypes={title:N["default"].string,status:N["default"].bool},s);t["default"]=T},176:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".panel___1miVF{background-color:#fff}.header____MqaR{border-bottom:1px solid #ddd;padding:10px 15px;font-size:16px}.body___lEHyn{padding:10px 15px;font-size:14px;color:#999}.arrows___24Lsi{position:relative;float:right;left:8px}.arrows___24Lsi:after,.arrows___24Lsi:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi:before{border-left-color:#b6b6b6;right:-2px}.arrows___24Lsi.down___3OJRE{position:relative;float:right;left:4px;top:2px}.arrows___24Lsi.down___3OJRE:after,.arrows___24Lsi.down___3OJRE:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi.down___3OJRE:before{border-top-color:#b6b6b6;top:2px}",""]),t.locals={panel:"panel___1miVF",header:"header____MqaR",body:"body___lEHyn",arrows:"arrows___24Lsi",down:"down___3OJRE"}},197:[2359,176],239:function(e,t,a){e.exports=a.p+"static/media/ok.a25682b3.png"},283:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,u=a(2),d=n(u),c=a(5),f=n(c),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(341),v=n(y),E=a(151),w=n(E),k=a(150),N=n(k),T=a(149),B=n(T),C=a(147),L=n(C),D=a(12),I=n(D),A=(s=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.state={lx:["抵押标","担保标"]},a}return r(t,e),x(t,[{key:"render",value:function(){var e=this.props,t=e.startTime,a=e.endTime,n=e.type,l=e.lx,o=e.Grade,r=e.repayment;return g["default"].createElement("div",{className:v["default"].depositBox},g["default"].createElement("ul",{className:v["default"].depositUl},g["default"].createElement("li",{className:v["default"].depositLi},g["default"].createElement("div",{className:v["default"].tbBox},g["default"].createElement("ul",null,g["default"].createElement("li",null,g["default"].createElement("span",{className:v["default"].startTime},g["default"].createElement("img",{src:w["default"]})),g["default"].createElement("span",{className:v["default"].goNext})),g["default"].createElement("li",null,g["default"].createElement("span",{className:v["default"].hx}),g["default"].createElement("span",{className:v["default"].locking},"A"==n&&g["default"].createElement("img",{src:N["default"]})||g["default"].createElement("img",{src:L["default"]})),g["default"].createElement("span",{className:v["default"].hx})),g["default"].createElement("li",null,g["default"].createElement("span",{className:v["default"].goNext}),g["default"].createElement("span",{className:v["default"].endTime},g["default"].createElement("img",{src:B["default"]}))))),g["default"].createElement("div",{className:v["default"].tbText},g["default"].createElement("ul",null,g["default"].createElement("li",null,g["default"].createElement("p",{className:v["default"].tbName},"起息日"),g["default"].createElement("p",{className:v["default"].timeText},t)),g["default"].createElement("li",null,g["default"].createElement("p",null,"A"==n&&"锁定期"||r)),g["default"].createElement("li",null,g["default"].createElement("p",{className:v["default"].tbName},"本息到账"),g["default"].createElement("p",{className:v["default"].timeText},a)))),g["default"].createElement("div",{className:v["default"].msBox},g["default"].createElement("p",null,g["default"].createElement("span",null,"产品类型"),g["default"].createElement("span",{className:v["default"].dbType},function(){switch(l){case 1:return"信用";case 5:return"抵押";default:return"抵押"}}())),g["default"].createElement("p",null,g["default"].createElement("span",null,"信用等级"),g["default"].createElement("span",{className:v["default"].dbType},o,"级"))))))}}]),t}(h.Component),i.propTypes={startTime:I["default"].string,endTime:I["default"].string,type:I["default"].string,lx:I["default"].number,Grade:I["default"].string,repayment:I["default"].string},i.defaultProps={startTime:"20170214",endTime:"20170214",type:"A",lx:2,Grade:"A",repayment:"每月还息 到期还本"},s);t["default"]=A},302:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".depositBox___oFSL3,.depositLi___KssAD{background-color:#fff}.depositLi___KssAD{display:block}.depositLi___KssAD .tbBox___2v14a{padding:20px 34px 0}.depositLi___KssAD .tbBox___2v14a ul{display:block;width:100%;margin-bottom:10px}.depositLi___KssAD .tbBox___2v14a ul li{display:inline-block;width:33.33333%;vertical-align:top;position:relative}.depositLi___KssAD .tbBox___2v14a ul li:nth-of-type(1){padding-left:15px}.depositLi___KssAD .tbBox___2v14a ul li:nth-of-type(3){padding-right:15px}.goNext___19W8D{width:100%;background-color:#e5e5e5;height:3px;display:inline-block;vertical-align:middle;margin-top:-5px}.startTime___2wyTM{position:absolute;left:0;top:0}.startTime___2wyTM img{width:13px}.locking___3plpT{display:inline-block;width:17px;background-color:#fff;position:absolute;left:50%;margin-left:-8.5px;text-align:center}.locking___3plpT img{width:13px}.endTime___2Jjk_{position:absolute;right:0;top:0}.endTime___2Jjk_ img{width:13px}.tbText___26yZa{padding:0 15px;border-bottom:1px solid #e5e5e5}.tbText___26yZa ul{display:block;width:100%;margin-bottom:20px}.tbText___26yZa ul li{display:inline-block;width:33.33333%;vertical-align:top;font-size:12px;color:#666}.tbText___26yZa ul li:nth-of-type(2){text-align:center}.tbText___26yZa ul li:nth-of-type(3){text-align:right}.tbText___26yZa ul li .tbName___jC3Z2{padding-bottom:6px}.tbText___26yZa ul li .timeText___3A8bl{font-size:11px;color:#aaa}.hx___ojmOE{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.msBox___13JzI{padding:15px;background-color:#fff}.msBox___13JzI p{font-size:14px;color:#aaa}.msBox___13JzI p:nth-of-type(1){margin-bottom:10px}.msBox___13JzI .dbType___2Vd7E{color:#666;float:right;text-align:right}",""]),t.locals={depositBox:"depositBox___oFSL3",depositLi:"depositLi___KssAD",tbBox:"tbBox___2v14a",goNext:"goNext___19W8D",startTime:"startTime___2wyTM",locking:"locking___3plpT",endTime:"endTime___2Jjk_",tbText:"tbText___26yZa",tbName:"tbName___jC3Z2",timeText:"timeText___3A8bl",hx:"hx___ojmOE",msBox:"msBox___13JzI",dbType:"dbType___2Vd7E"}},341:[2363,302],1027:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=n(i),u=a(5),d=n(u),c=a(3),f=n(c),_=a(4),p=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),h=a(10),g=n(h),y=a(2132),v=n(y),E=a(109),w=n(E),k=a(283),N=n(k),T=a(18),B=n(T),C=a(16),L=n(C),D=a(239),I=n(D),A=a(91),R=n(A),P=a(45),S=n(P),M=a(9),F=a(8),j=a(19),z=a(166),O=n(z),H=a(11),Z=n(H),K=a(405),G=n(K),J=a(97),U=n(J),q=a(66),X=n(q),Y=a(74),V=n(Y),Q=a(80),W=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.btDom=function(){var e=a.props,t=e.pending,n=e.end,l=e.listData,o=void 0;if(t&&!n?o=G["default"].loadingDom():n&&(o=x["default"].createElement("div",{className:v["default"].nullDom},"没有更多")),l&&n&&0==l.size){var r=a.refs.tabBox;if(r){var i=r.offsetHeight;o=x["default"].createElement("div",{style:{height:i},className:v["default"].nullImg},x["default"].createElement("img",{src:U["default"]}))}}return o},a.demoDom=function(){var e=a.props.listData,t=a.state.demoNull;return t?null:x["default"].createElement("div",{className:(0,Z["default"])(v["default"].tabBox,v["default"].demoBox),ref:"demo"},e&&e.map(function(e,t){var a=e.name,n=e.date,l=e.amount;return x["default"].createElement("div",{className:v["default"].tabListBox,key:t},x["default"].createElement("div",{className:v["default"].tabListLeft},x["default"].createElement("p",null,a),x["default"].createElement("p",null,n)),x["default"].createElement("div",{className:v["default"].tabListRight},l,"元"))}))},a.addScroll=function(){var e=a.refs.body,t=document.body.offsetHeight;e.addEventListener("scroll",function(){var n=a.state.tabPage,l=a.props,o=l.listData,r=l.pending,i=l.getList,s=l.end,u=l.routeParams.id,d=l.location.query.access_sys;if(1==n&&o){var c=e.scrollTop,f=a.refs.content.offsetHeight+94,_=f-c-t;_<10&&!r&&!s&&i(u,d)}})},a.setPage=function(e){a.setState({tabPage:e})},a.loadEndDom=function(){var e=a.props.infoData.data,t=e.total,n=e.rate,l=e.term,o=e.activityName,r=e.type,i=e.fundraising,s=e.borrow_interest_rate_one,u=e.borrow_interest_rate_two,d=e.peasant_loan_title,c=e.peasant_loan_content,f=e.interest_start_time,_=e.interest_end_time,p=e.credit_rating,m=e.repayment,b=e.loan_purpose,h=e.loan_source,y=e.authenticated,E=e.loan_info,k=e.name,T=a.props,C=T.listData,L=(T.pop,T.push),D=T.backgroundColor,A=T.routeParams.id,P=a.state.tabPage,M=[{name:"借款总额",val:t},{name:"剩余金额",val:t-i},{name:"出借期限",val:l+"个月"}],F=a.btDom(),z=D?{borderRightColor:D}:{borderRightColor:"#00a6e2"};return x["default"].createElement("div",{ref:"content"},x["default"].createElement(g["default"],{leftNode:x["default"].createElement(j.Link,{className:v["default"].leftNode,to:"/home/productIndex"},x["default"].createElement("span",null,x["default"].createElement("span",{className:v["default"].backBefore},"  ")," ",x["default"].createElement("span",{className:v["default"].backAfter,style:z})))},x["default"].createElement("div",{className:v["default"].title},k)),x["default"].createElement("div",{ref:"topHeight"},x["default"].createElement(w["default"],{rate:n,data:M,activityName:o,rateA:s,rateB:u}),x["default"].createElement("div",{className:v["default"].suBox,onClick:function(){L("/safeplan")}},"多重风控保障体系",x["default"].createElement("img",{src:B["default"],className:v["default"].suJt})),x["default"].createElement("div",{className:v["default"].timeBox},x["default"].createElement(N["default"],{type:"B",startTime:f,endTime:_,Grade:p,repayment:m,lx:r})),function(){var e=o.split("|"),t=!1;return e.length>0&&""!=o&&e.map(function(e,a){"扶农贷"==e&&(t=!0)}),t?x["default"].createElement(O["default"],{status:!1,title:d},c):""}(),x["default"].createElement("div",{className:v["default"].tabHeader},x["default"].createElement("span",{className:0==P&&v["default"].tabCheck||null,onClick:function(){a.setPage(0)}},"借款人"),x["default"].createElement("span",{className:1==P&&v["default"].tabCheck||null,onClick:function(){a.setPage(1)}},"出借记录"))),x["default"].createElement("div",{className:(0,Z["default"])(v["default"].tabBox,0!=P&&v["default"].none),ref:"tabBox"},x["default"].createElement("div",{className:v["default"].tabOne},x["default"].createElement("div",{className:v["default"].tabContent},x["default"].createElement("h3",null,"借款用途"),x["default"].createElement("div",null,b))),function(){switch(r){case 1:return"";case 5:return x["default"].createElement("div",{className:v["default"].tabOne},x["default"].createElement("div",{className:v["default"].tabContent},x["default"].createElement("h3",null,"还款来源"),x["default"].createElement("div",null,h)));default:return x["default"].createElement("div",{className:v["default"].tabOne},x["default"].createElement("div",{className:v["default"].tabContent},x["default"].createElement("h3",null,"还款来源"),x["default"].createElement("div",null,h)))}}(),x["default"].createElement("div",{className:v["default"].tabOne},x["default"].createElement("div",{className:v["default"].tabContent},x["default"].createElement("h3",null,"平台认证"),x["default"].createElement("div",null,y&&y.map(function(e,t){return x["default"].createElement("span",{key:t,className:v["default"].newsBox},e," ",x["default"].createElement("img",{src:I["default"]}))})))),x["default"].createElement("div",{
className:v["default"].tabOne},x["default"].createElement("div",{className:v["default"].tabContent},x["default"].createElement("h3",null,"借款人信息"),x["default"].createElement("div",null,E)))),x["default"].createElement("div",{className:(0,Z["default"])(v["default"].tabBox,1!=P&&v["default"].none)},function(){var e=[];return C&&C.map(function(t,a){e.push(x["default"].createElement("div",{className:v["default"].tabListBox,key:a},x["default"].createElement("div",{className:v["default"].tabListLeft},x["default"].createElement("p",null,t.name),x["default"].createElement("p",null,t.date)),x["default"].createElement("div",{className:v["default"].tabListRight},t.amount,"元")))}),e}(),F),x["default"].createElement("div",{className:v["default"].bottom},x["default"].createElement("div",{onClick:function(){return a.refs.calculator.show()},className:v["default"].calculator}),x["default"].createElement("button",{onClick:function(){a.purchase(A,L)}},"马上出借")),x["default"].createElement(S["default"],{ref:"store"}),x["default"].createElement(X["default"],{ref:"isAuth"}),x["default"].createElement(R["default"],{ref:"calculator",unit:"m",rate:n,term:l,amount:1e4,modalStyle:v["default"].modalStyle,modalBody:v["default"].modalBody,termFixed:!0}))},a.purchase=function(e,t){var n=a.props.infoData.data.term;if(a.props.location.query.access_sys)switch((0,Q.platFormGetAuthDetail)()){case 1:a.refs.isAuth.Verification("/directBuyOld/"+e+"/"+n,t,a.succsseFn,a.props.location.pathname);break;case 2:t("/user/setting/authorization");break;case 3:a.refs.store.show()}else switch((0,Q.getAuthDetail)()){case 1:a.refs.isAuth.Verification("/directBuy/"+e+"/"+n,t,a.succsseFn,a.props.location.pathname);break;case 2:t("/user/setting/authorization");break;case 3:a.refs.store.show()}},a.succsseFn=function(e){V["default"].setUrl(e)},a.loadDom=function(){return x["default"].createElement(L["default"],null)},a.state={tabPage:0,demoNull:!1},a}return r(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getData,a=e.getList,n=e.routeParams.id,l=e.location.query.access_sys;t(n,l),a(n,l),this.addScroll()}},{key:"componentDidUpdate",value:function(){var e=this.refs.demo,t=this.refs.topHeight;if(e){var a=e.offsetHeight,n=t.offsetHeight,l=document.body.offsetHeight;if(0==a)return!1;var o=this.props,r=o.end,i=o.getList,s=o.routeParams.id,u=n+a;if(u<=l&&!r)i(s);else{var d=this.state.demoNull;d||this.setState({demoNull:!0})}}}},{key:"componentWillUnmount",value:function(){this.props.clearData()}},{key:"render",value:function(){var e=this.props.infoData,t=this.loadDom();return e&&(t=this.loadEndDom()),x["default"].createElement("div",null,x["default"].createElement("div",{className:v["default"].body,ref:"body"},t))}}]),t}(b.Component),$=function(e){return{infoData:e.infodata.getIn(["DIRECTINVEST_DETAIL","data"]),listData:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","data"]),pending:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","pending"]),end:e.listdata.getIn(["FETCH_DIRECT_BUY_RECORD_DATA","pageEnd"])}},ee=function(e){return{getData:function(t,a){e({type:"DIRECTINVEST_DETAIL",params:[t,a]})},getList:function(t,a){e({type:"FETCH_DIRECT_BUY_RECORD_DATA",params:[t,a]})},clearData:function(){e({type:"CLEAR_DATA",key:"FETCH_DIRECT_BUY_RECORD_DATA"})},pop:function(){e((0,F.goBack)())},push:function(t){e((0,F.push)(t))}}};t["default"]=(0,M.connect)($,ee)(W)},1215:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1027),o=n(l);t["default"]=o["default"]},1552:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".body___28cLQ{position:absolute;left:0;top:0;padding-top:43px;width:100%;height:100%;overflow:auto;padding-bottom:50px;z-index:9;background-color:#f0eff5}.title___2MImF{width:100%;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden;text-align:center}.backAfter___1iI9Z,.backBefore___N_CZD{border:10px solid transparent;border-right:10px solid #00a6e2;width:0;height:0;position:absolute;top:12px;left:4px;content:' '}.backBefore___N_CZD{border-right-color:#fff;left:2px}.none___2oNC8{display:none}.suBox___qdVBv{padding:10px 15px;background-color:#fff;margin-top:10px;font-size:16px}.suBox___qdVBv .suJt___3KgW3{width:10px;height:20px;float:right;margin-top:-2px}.tabHeader___1sC_3{background-color:#fff;margin-top:10px}.tabHeader___1sC_3 span{display:inline-block;height:38px;width:50%;text-align:center;box-sizing:border-box;border-bottom:1px solid #e5e5e5;line-height:38px}.tabHeader___1sC_3 .tabCheck___ZB8eI{color:#02a6e1;border-bottom:2px solid #02a6e1}.tabContent___1XGoC{padding:15px;border-bottom:1px solid #e5e5e5}.tabContent___1XGoC h3{font-size:16px;margin-bottom:10px}.tabContent___1XGoC div{font-size:12px;color:#999;word-break:break-all;line-height:15px}.timeBox___1HKPT{margin-top:10px;margin-bottom:10px}.tabBox___2BFMp{background-color:#fff}.newsBox___2Ods1{display:inline-block;white-space:nowrap;padding-right:15px;margin-bottom:12px}.newsBox___2Ods1 img{width:15px}.bottom___AgII-{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___AgII-,.bottom___AgII- .calculator___2KP7k{display:-webkit-box;display:-ms-flexbox;display:flex}.bottom___AgII- .calculator___2KP7k{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom___AgII- .calculator___2KP7k:before{height:70%;width:50%;content:'';background:url("+a(125)+") 50% no-repeat;background-size:contain}.bottom___AgII- button{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}.tabListBox___1H32Q{overflow:hidden;padding:15px;border-bottom:1px solid #e5e5e5}.tabListBox___1H32Q .tabListLeft___2TdkN{float:left;display:inline-block}.tabListBox___1H32Q .tabListLeft___2TdkN p{line-height:20px;font-size:16px;color:#898989}.tabListBox___1H32Q .tabListLeft___2TdkN p:nth-child(2){font-size:12px;color:#aaa;margin-top:5px}.tabListBox___1H32Q .tabListRight___2yYMF{float:right;display:inline-block;font-size:16px;color:#00a6e2;line-height:45px}.modalStyle___3m8Tr{position:fixed;z-index:999}.modalBody___3ghfk{position:absolute;bottom:0;padding-bottom:30px;height:auto}.demoBox___12y9t{position:absolute;left:0;top:0;background-color:red;z-index:1}.nullDom___3bUYI{font-size:12px;color:#888;padding:10px}.nullDom___3bUYI,.nullImg___3Xef_{text-align:center}.nullImg___3Xef_ img{width:161px;margin-top:40px}",""]),t.locals={body:"body___28cLQ",title:"title___2MImF",backBefore:"backBefore___N_CZD",backAfter:"backAfter___1iI9Z",none:"none___2oNC8",suBox:"suBox___qdVBv",suJt:"suJt___3KgW3",tabHeader:"tabHeader___1sC_3",tabCheck:"tabCheck___ZB8eI",tabContent:"tabContent___1XGoC",timeBox:"timeBox___1HKPT",tabBox:"tabBox___2BFMp",newsBox:"newsBox___2Ods1",bottom:"bottom___AgII-",calculator:"calculator___2KP7k",tabListBox:"tabListBox___1H32Q",tabListLeft:"tabListLeft___2TdkN",tabListRight:"tabListRight___2yYMF",modalStyle:"modalStyle___3m8Tr",modalBody:"modalBody___3ghfk",demoBox:"demoBox___12y9t",nullDom:"nullDom___3bUYI",nullImg:"nullImg___3Xef_"}},2132:function(e,t,a){var n=a(1552);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});