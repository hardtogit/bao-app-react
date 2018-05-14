webpackJsonp([14],{91:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,s,c=a(2),d=n(c),u=a(5),f=n(u),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(29),v=n(y),k=a(99),w=n(k),E=a(92),N=n(E),T=a(187),C=n(T),B=a(11),z=n(B);a(98);var M=a(12),S=n(M),R=(s=i=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,b["default"])(t)).call.apply(e,[this].concat(s))),n.state={_active:!1,rate:n.props.rate,amount:n.props.amount,term:n.props.term},n.show=function(){return n.setState({_active:!0})},n.hide=function(){return n.setState({_active:!1})},n.toggle=function(){return n.setState({_active:!n.state._active})},n.handleAmount=function(e){var t=e.target.value;isNaN(+t)||n.setState({amount:t})},n.handleTerm=function(e){var t=e.target.value;isNaN(+t)||n.setState({term:t})},n.calculateProfit=function(){var e=n.props.unit,t=n.state,a=t.rate,l=t.amount,o=t.term,r=/d/.test(e)?365:12;return v["default"].round(+l*(+o/r)*(+a/100),2)},n.handleTermChoose=function(){n.props.rateMap&&n.refs.select.show()},n.changeTerm=function(e){var t=e.rate,a=e.term;return n.setState({rate:t,term:a})},r=a,o(n,r)}return r(t,e),x(t,[{key:"componentWillReceiveProps",value:function(e){e.rate!==this.state.rate&&this.setState({rate:e.rate}),e.amount!==this.state.amount&&this.setState({amount:e.amount}),e.term!==this.state.term&&this.setState({term:e.term})}},{key:"render",value:function(){var e=this.props,t=e.unit,a=e.termFixed,n=e.rateMap,l=e.modalStyle,o=e.modalBody,r=this.state.rate;return g["default"].createElement(C["default"],{transitionName:"calculator",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state._active&&g["default"].createElement("div",{onClick:this.hide,className:(0,z["default"])(w["default"].modal,l)},g["default"].createElement("div",{onClick:function(e){return e.stopPropagation()},className:(0,z["default"])(w["default"].container,o),style:{width:window.innerWidth}},g["default"].createElement(N["default"],{className:w["default"].cross,lineClass:w["default"].crossLine,onClick:this.hide}),g["default"].createElement("p",{className:w["default"].p1},"预期收益"),g["default"].createElement("p",{className:w["default"].p2},"¥",this.calculateProfit()),g["default"].createElement("div",{className:w["default"].form},g["default"].createElement("div",{className:w["default"].row},g["default"].createElement("span",null,"买入金额"),g["default"].createElement("input",{ref:"amount",type:"tel",maxLength:10,value:this.state.amount,onChange:this.handleAmount}),g["default"].createElement("span",null,"元")),g["default"].createElement("div",{className:w["default"].border}),g["default"].createElement("div",{onClick:this.handleTermChoose,className:w["default"].row},g["default"].createElement("span",null,"买入期限"),g["default"].createElement("input",{ref:"term",type:"tel",maxLength:5,value:this.state.term,onChange:this.handleTerm,disabled:!!a||!!n}),g["default"].createElement("span",null,/d/.test(t)?"天":"个月"))),g["default"].createElement("p",{className:w["default"].p3},"预期年化收益：",r,"%")),g["default"].createElement(A,{ref:"select",rate:r,rateMap:n,changeTerm:this.changeTerm,unit:t})))}}]),t}(g["default"].Component),i.propTypes={unit:S["default"].oneOf(["d","m","day","month"]).isRequired,rate:S["default"].oneOfType([S["default"].string,S["default"].number]).isRequired,term:S["default"].oneOfType([S["default"].string,S["default"].number]).isRequired,amount:S["default"].oneOfType([S["default"].string,S["default"].number]).isRequired,termFixed:S["default"].bool,rateMap:S["default"].array},s);t["default"]=R;var A=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,b["default"])(t)).call.apply(e,[this].concat(s))),n.state={_active:!1},n.show=function(){return n.setState({_active:!0})},n.hide=function(){return n.setState({_active:!1})},n.toggle=function(){return n.setState({_active:!n.state._active})},r=a,o(n,r)}return r(t,e),x(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.rate,n=t.rateMap,l=t.changeTerm,o=t.unit;return g["default"].createElement(C["default"],{transitionName:"select",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state._active&&g["default"].createElement("div",{onClick:function(t){t.stopPropagation(),e.hide()},className:w["default"].selectRoot},g["default"].createElement("div",{onClick:function(e){return e.stopPropagation()},className:w["default"].box},n.map(function(t,n){var r=+a===+t.rate;return g["default"].createElement("div",{onClick:function(){l(t),e.hide()},key:n,className:(0,z["default"])(w["default"].row,r&&w["default"].active)},g["default"].createElement("div",{className:(0,z["default"])(w["default"].radioButton,r&&w["default"].active)}),t.term,/d/.test(o)?"天":"个月")}))))}}]),t}(g["default"].PureComponent)},92:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(2),s=n(i),c=a(5),d=n(c),u=a(3),f=n(u),_=a(4),p=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),h=a(100),g=n(h),y=a(11),v=n(y),k=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,p["default"])(t)).apply(this,arguments))}return r(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.lineClass,n=e.onClick;return x["default"].createElement("div",{onClick:n,className:(0,v["default"])(g["default"].container,t)},x["default"].createElement("div",{className:a}),x["default"].createElement("div",{className:a}))}}]),t}(x["default"].PureComponent);t["default"]=k},94:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".calculator-enter{opacity:.01}.calculator-enter-active{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease}.calculator-leave{opacity:1}.calculator-leave-active{opacity:.01;-webkit-transition:all .3s ease;transition:all .3s ease}.calculator-enter>div{-webkit-transform:translate3d(0,15%,0);transform:translate3d(0,15%,0)}.calculator-enter-active>div{-webkit-transition:all .5s ease;transition:all .5s ease}.calculator-enter-active>div,.calculator-leave>div{-webkit-transform:translateZ(0);transform:translateZ(0)}.calculator-leave-active>div{-webkit-transform:translate3d(0,15%,0);transform:translate3d(0,15%,0);-webkit-transition:all .3s ease;transition:all .3s ease}.select-enter{opacity:.01}.select-enter-active{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease}.select-leave{opacity:1}.select-leave-active{opacity:.01;-webkit-transition:all .3s ease;transition:all .3s ease}.select-enter>div{-webkit-transform:scale(.75);transform:scale(.75)}.select-enter-active>div{-webkit-transition:all .5s ease;transition:all .5s ease}.select-enter-active>div,.select-leave>div{-webkit-transform:scale(1);transform:scale(1)}.select-leave-active>div{-webkit-transform:scale(.75);transform:scale(.75);-webkit-transition:all .3s ease;transition:all .3s ease}",""])},95:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".modal___1lYzh{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.7);z-index:800}.container___3dvfC{margin-top:30%;height:100%;width:100%;background-color:#f0eff5;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.container___3dvfC .cross___C4Tq1{height:40px;width:40px;background-color:transparent;align-self:flex-end;-ms-flex-item-align:end}.container___3dvfC .cross___C4Tq1 .crossLine___2R3cX{width:2px;height:40%;background-color:#aaa}.p1___3pa_N{font-size:15px}.p2___3iig7{font-size:35px;color:#ff7701;margin-top:15px}.form___EfhjB{background-color:#fff;margin-top:10px;height:90px;align-self:stretch;-ms-flex-item-align:stretch;padding:0 15px;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #ddd;border-bottom:1px solid #ddd}.form___EfhjB,.form___EfhjB .row___3o5-0{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.form___EfhjB .row___3o5-0{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.form___EfhjB .row___3o5-0 span{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.form___EfhjB .row___3o5-0 span:nth-child(1){margin-right:15px}.form___EfhjB .row___3o5-0 input{font-size:14px;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;color:#00a6e2}.form___EfhjB .border___3DYF6{height:1px;background-color:#ddd}.p3___ZTdqK{margin:15px;font-size:14px;color:#888;text-align:left;align-self:stretch;-ms-flex-item-align:stretch}.selectRoot___MtXHp{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;background-color:rgba(0,0,0,.3);-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}.box___UViXz{background-color:#fff;border-radius:5px;width:70%}.box___UViXz .row___3o5-0{height:60px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #ddd;padding:0 30px;-webkit-box-pack:justify;-o-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.box___UViXz .row___3o5-0:nth-child(1){border:0}.box___UViXz .row___3o5-0.active___3JVpY{color:#00a6e2}.radioButton___3sBZb{background-color:transparent;height:28px;width:28px;border:1px solid #444;border-radius:100%;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.radioButton___3sBZb:before{content:'';background-color:#444;border-radius:100%;height:8.4px;width:8.4px}.radioButton___3sBZb.active___3JVpY{border-color:#00a6e2}.radioButton___3sBZb.active___3JVpY:before{background-color:#00a6e2}",""]),t.locals={modal:"modal___1lYzh",container:"container___3dvfC",cross:"cross___C4Tq1",crossLine:"crossLine___2R3cX",p1:"p1___3pa_N",p2:"p2___3iig7",form:"form___EfhjB",row:"row___3o5-0",border:"border___3DYF6",p3:"p3___ZTdqK",selectRoot:"selectRoot___MtXHp",box:"box___UViXz",active:"active___3JVpY",radioButton:"radioButton___3sBZb"}},96:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___3bFZN{height:20px;width:20px;border-radius:100%;position:relative;background-color:#666;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.container___3bFZN div{position:absolute;height:50%;width:1px;background-color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.container___3bFZN div:nth-child(2){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.locals={container:"container___3bFZN"}},98:function(e,t,a){var n=a(94);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)},99:[2363,95],100:[2363,96],109:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,c=a(2),d=n(c),u=a(5),f=n(u),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(133),v=n(y),k=a(12),w=n(k),E=(s=i=function(e){function t(){return l(this,t),o(this,(t.__proto__||(0,b["default"])(t)).apply(this,arguments))}return r(t,e),x(t,[{key:"render",value:function(){var e=this.props,t=e.rate,a=e.data,n=e.activityName,l=e.rateA,o=e.rateB;return g["default"].createElement("div",{className:v["default"].header},g["default"].createElement("p",{className:v["default"].lxYear},"预期年化利率(%)"),g["default"].createElement("p",{className:v["default"].lxNum},function(){var e=n.split("|"),a=!1;return e.length>0&&""!=n&&e.map(function(e,t){"扶农贷"==e&&(a=!0)}),a?g["default"].createElement("span",null,l,"0.00"==o?"":g["default"].createElement("span",{style:{fontSize:"36px"}},"+",o)):g["default"].createElement("span",null,t)}()),g["default"].createElement("div",{className:v["default"].lxContent},a&&a.map(function(e,t){var a=e.name,n=e.val;return g["default"].createElement("span",{key:t},g["default"].createElement("p",{className:v["default"].textColor},a),g["default"].createElement("p",null,n))})))}}]),t}(h.Component),i.propTypes={rate:w["default"].string,data:w["default"].array,activityName:w["default"].string,rateA:w["default"].string,rateB:w["default"].string},i.defaultProps={rate:"12.8",data:[],activityName:""},s);t["default"]=E},120:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".header___1OV2R{display:-webkit-box;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-o-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;background-color:#00a6e2;color:#fff;padding-top:36px}.header___1OV2R .lxYear___3WBug{margin-bottom:20px;color:#69d7ff}.header___1OV2R .textColor___15alq{color:#69d7ff}.header___1OV2R .lxNum___1DfxP{font-size:69px}.lxContent___3dDdB{margin-bottom:30px}.lxContent___3dDdB span{display:inline-block;font-size:12px;padding:0 40px;border-right:1px solid #fff}.lxContent___3dDdB span:first-child{padding-left:0}.lxContent___3dDdB span:last-child{border-right:0;padding-right:0}.lxContent___3dDdB span p{text-align:center;line-height:20px}",""]),t.locals={header:"header___1OV2R",lxYear:"lxYear___3WBug",textColor:"textColor___15alq",lxNum:"lxNum___1DfxP",lxContent:"lxContent___3dDdB"}},125:function(e,t,a){e.exports=a.p+"static/media/calculator.448bba73.png"},133:[2363,120],147:function(e,t,a){e.exports=a.p+"static/media/Interest.06b87083.png"},149:function(e,t,a){e.exports=a.p+"static/media/lxArrival.9c6e7d3b.png"},150:function(e,t,a){e.exports=a.p+"static/media/lxSd.993c5245.png"},151:function(e,t,a){e.exports=a.p+"static/media/lxStart.e0816e7d.png"},284:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,c=a(2),d=n(c),u=a(5),f=n(u),_=a(3),p=n(_),m=a(4),b=n(m),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),g=n(h),y=a(342),v=n(y),k=a(151),w=n(k),E=a(150),N=n(E),T=a(149),C=n(T),B=a(147),z=n(B),M=a(12),S=n(M),R=(s=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return a.state={lx:["抵押标","担保标"]},a}return r(t,e),x(t,[{key:"render",value:function(){var e=this.props,t=e.startTime,a=e.endTime,n=e.type,l=e.centerTime,o=e.startLabel,r=e.repayment,i=e.endLabel;return g["default"].createElement("div",{className:v["default"].depositBox},g["default"].createElement("ul",{className:v["default"].depositUl},g["default"].createElement("li",{className:v["default"].depositLi},g["default"].createElement("div",{className:v["default"].tbBox},g["default"].createElement("ul",null,g["default"].createElement("li",null,g["default"].createElement("span",{className:v["default"].startTime},g["default"].createElement("img",{src:w["default"]})),g["default"].createElement("span",{className:v["default"].goNext})),g["default"].createElement("li",null,g["default"].createElement("span",{className:v["default"].hx}),g["default"].createElement("span",{className:v["default"].locking},"A"==n&&g["default"].createElement("img",{src:N["default"]})||g["default"].createElement("img",{src:z["default"]})),g["default"].createElement("span",{className:v["default"].hx})),g["default"].createElement("li",null,g["default"].createElement("span",{className:v["default"].goNext}),g["default"].createElement("span",{className:v["default"].endTime},g["default"].createElement("img",{src:C["default"]}))))),g["default"].createElement("div",{className:v["default"].tbText},g["default"].createElement("ul",null,g["default"].createElement("li",null,g["default"].createElement("p",{className:v["default"].tbName},o&&o||"起息日"),g["default"].createElement("p",{className:v["default"].timeText},t)),g["default"].createElement("li",null,g["default"].createElement("p",{className:v["default"].tbName},"A"==n&&"锁定期"||r),g["default"].createElement("p",{className:v["default"].timeText},l)),g["default"].createElement("li",null,g["default"].createElement("p",{className:v["default"].tbName},i||"本息到账"),g["default"].createElement("p",{className:v["default"].timeText},a)))))))}}]),t}(h.Component),i.propTypes={startTime:S["default"].string,endTime:S["default"].string,type:S["default"].string,lx:S["default"].number,Grade:S["default"].string,repayment:S["default"].string},i.defaultProps={startTime:"20170214",endTime:"",type:"A",lx:2,Grade:"A",repayment:"每月还息 到期还本"},s);t["default"]=R},303:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".depositBox___2udGE,.depositLi___2C_dz{background-color:#fff}.depositLi___2C_dz{display:block}.depositLi___2C_dz .tbBox___2fq9D{padding:20px 34px 0}.depositLi___2C_dz .tbBox___2fq9D ul{display:block;width:100%;margin-bottom:10px}.depositLi___2C_dz .tbBox___2fq9D ul li{display:inline-block;width:33.33333%;vertical-align:top;position:relative}.depositLi___2C_dz .tbBox___2fq9D ul li:nth-of-type(1){padding-left:15px}.depositLi___2C_dz .tbBox___2fq9D ul li:nth-of-type(3){padding-right:15px}.goNext___3zS6p{width:100%;background-color:#e5e5e5;height:3px;display:inline-block;vertical-align:middle;margin-top:-5px}.startTime___mZ84r{position:absolute;left:0;top:0}.startTime___mZ84r img{width:13px}.locking___1oBf9{display:inline-block;width:17px;background-color:#fff;position:absolute;left:50%;margin-left:-8.5px;text-align:center}.locking___1oBf9 img{width:13px}.endTime___fFbLj{position:absolute;right:0;top:0}.endTime___fFbLj img{width:13px}.tbText___22m0U{padding:0 15px;border-bottom:1px solid #e5e5e5}.tbText___22m0U ul{display:block;width:100%;margin-bottom:20px}.tbText___22m0U ul li{display:inline-block;width:33.33333%;vertical-align:top;font-size:12px;color:#666}.tbText___22m0U ul li:nth-of-type(2){text-align:center}.tbText___22m0U ul li:nth-of-type(3){text-align:right}.tbText___22m0U ul li .tbName___o9mJT{padding-bottom:6px}.tbText___22m0U ul li .timeText___1-yle{font-size:11px;color:#aaa}.hx___2IgiG{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.msBox___36sUS{padding:15px;background-color:#fff}.msBox___36sUS p{font-size:14px;color:#aaa}.msBox___36sUS p:nth-of-type(1){margin-bottom:10px}.msBox___36sUS .dbType___2iMPl{color:#666;float:right;text-align:right}",""]),t.locals={depositBox:"depositBox___2udGE",depositLi:"depositLi___2C_dz",tbBox:"tbBox___2fq9D",goNext:"goNext___3zS6p",startTime:"startTime___mZ84r",locking:"locking___1oBf9",endTime:"endTime___fFbLj",tbText:"tbText___22m0U",tbName:"tbName___o9mJT",timeText:"timeText___1-yle",hx:"hx___2IgiG",msBox:"msBox___36sUS",dbType:"dbType___2iMPl"}},342:[2363,303],535:function(e,t,a){e.exports=a.p+"static/media/icon-01.98125c38.png"},536:function(e,t,a){e.exports=a.p+"static/media/icon-02.9116ed96.png"},537:function(e,t,a){e.exports=a.p+"static/media/icon-03.6376a9f6.png"},538:function(e,t,a){e.exports=a.p+"static/media/icon-04.030b2889.png"},1008:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=n(i),c=a(5),d=n(c),u=a(3),f=n(u),_=a(4),p=n(_),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(1),x=n(b),h=a(10),g=n(h),y=a(91),v=n(y),k=a(2270),w=n(k),E=a(11),N=n(E),T=a(25),C=n(T),B=a(8),z=a(9),M=a(45),S=n(M),R=(a(23),a(535)),A=n(R),j=a(536),L=n(j),U=a(537),D=n(U),Z=a(538),O=n(Z),F=a(16),P=n(F),q=a(109),V=n(q),Y=a(284),I=n(Y),W=a(66),Q=n(W),X=a(74),G=n(X),H=a(80),J=a(19),K=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||(0,p["default"])(t)).call.apply(e,[this].concat(s))),n.state={descActive:!1,type:2},n.Timer=function(e){var t=n.props,a=t.datas,l=t.datasB,o=t.params,r=(o.id,o.type),i=a;"B"==r&&(i=l);var s=i.data.currentTime,c=void 0,d=void 0,u=new Date(1e3*parseInt(s)),f=u.getFullYear(),_=u.getMonth()+1,p=u.getDate();return c=f+"年"+_+"月"+p+"日",_+=parseInt(e),_>12&&(_-=12,f+=1),d=f+"年"+_+"月"+p+"日",{startTime:c,endTime:d}},n.moneyFn=function(e,t){var a=parseFloat(1e4*e/100*(t/12)).toString();return a.indexOf(".")!=-1&&(a=a.substring(0,a.indexOf(".")+3)),a},n.loadEnd=function(){var e=n.props,t=e.data,a=e.push,l=t.data,o=l.id,r=l.rate,i=l.buy_total,s=l.buy_status,c=l.value_start_date,d=l.value_end_date,u=l.type,f=l.has_money,_=l.money,p=l.price,m=l.title,b=l.month;r=parseFloat(r).toFixed(2);var h="锁定时间",g=[{name:"起投金额",val:p},{name:h,val:b+"个月"}],y="",k=!0;return 0==s?parseInt(f)>=parseInt(_)?(y="已售罄",k=!0):(y="马上出借",k=!1):1==s?(y="未开始",k=!0):2==s&&(y="已结束",k=!0),x["default"].createElement("div",null,x["default"].createElement(V["default"],{rate:r,data:g}),x["default"].createElement("div",{className:w["default"].timeBox},x["default"].createElement(I["default"],{repayment:"锁定结束",centerTime:d,startTime:c,endLabel:"转让成功",type:u})),x["default"].createElement("div",{className:w["default"].depositBox},x["default"].createElement("div",{className:w["default"].profit},x["default"].createElement("p",null,"收益估算")),x["default"].createElement("div",{className:w["default"].profitContent},x["default"].createElement("p",{className:w["default"].profitText},"出借10000元，",b,"个月后到期预期可赚"),x["default"].createElement("p",{className:w["default"].profitText1},"具体收益以实际到账为准"),x["default"].createElement("p",{className:w["default"].profitNum},n.moneyFn(r,b),x["default"].createElement("span",null,"元")))),x["default"].createElement("div",{className:(0,N["default"])(w["default"].depositBox,w["default"].pdAll)},x["default"].createElement("ul",{className:w["default"].iconUl},x["default"].createElement("li",{onClick:function(){a("/gatherDetail/"+m+"/"+b)}},x["default"].createElement("span",null,x["default"].createElement("img",{src:A["default"]})),x["default"].createElement("span",null,"产品详情")),x["default"].createElement("li",{onClick:function(){a("/gatherDeposits/"+o)}},x["default"].createElement("span",null,x["default"].createElement("img",{src:L["default"]})),x["default"].createElement("span",null,"标的详情")),x["default"].createElement("li",{onClick:function(){a("/gatherJoin/"+o)}},x["default"].createElement("span",null,x["default"].createElement("img",{src:D["default"]})),x["default"].createElement("span",null,"加入记录")),x["default"].createElement("li",{onClick:function(){a("/gatherProblems")}},x["default"].createElement("span",null,x["default"].createElement("img",{src:O["default"]})),x["default"].createElement("span",null,"常见问题")))),x["default"].createElement("div",{className:(0,N["default"])(w["default"].depositBox,w["default"].pdAll1)},"累计加入",i,"人"),x["default"].createElement("div",{className:w["default"].bottom},x["default"].createElement("div",{onClick:function(){return n.refs.calculator.show()},className:w["default"].calculator}),x["default"].createElement("button",{onClick:function(){n.purchase(o,a)},disabled:k,style:k&&{backgroundColor:"#aaa"}||{}},y)),x["default"].createElement(v["default"],{ref:"calculator",unit:"m",rate:r,term:b,amount:1e4,modalStyle:w["default"].modalStyle,modalBody:w["default"].modalBody}),x["default"].createElement(Q["default"],{ref:"isAuth"}),x["default"].createElement(S["default"],{ref:"store"}," "))},n.purchase=function(e,t){var a=n.props.params.type;switch((0,H.getAuthDetail)()){case 1:n.refs.isAuth.Verification("/gatherBuy/"+e+"/"+a,t,n.succsseFn,n.props.location.pathname);break;case 2:t("/user/setting/authorization");break;case 3:n.refs.store.show()}},n.succsseFn=function(e){G["default"].setUrl(e)},r=a,o(n,r)}return r(t,e),m(t,[{key:"componentWillMount",value:function(){this.setState({type:this.props.params.type})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params.productId,a=e.get;a(t)}},{key:"loading",value:function(){return x["default"].createElement(P["default"],null)}},{key:"render",value:function(){var e=this.props,t=e.data,a=(e.pop,e.backgroundColor),n=this.state.type,l=this.loading();t&&(l=this.loadEnd());var o=a?{borderRightColor:a}:{borderRightColor:"#00a6e2"};return x["default"].createElement("div",{className:w["default"].root},x["default"].createElement(g["default"],{leftNode:x["default"].createElement(J.Link,{className:w["default"].leftNode,to:"/home/productIndex"},x["default"].createElement("span",null,x["default"].createElement("span",{className:w["default"].backBefore},"  ")," ",x["default"].createElement("span",{className:w["default"].backAfter,style:o})))},5==n?"新手标计划详情":"聚点+详情"),l)}}]),t}(x["default"].Component),$=function(e){return{data:e.infodata.getIn(["GATHER_DETAIL","data"])}},ee=function(e){return{push:function(t){e((0,B.push)(t))},pop:function(){e((0,B.goBack)())},get:function(t){e({type:"GATHER_DETAIL",params:[t]})}}};t["default"]=(0,z.connect)($,ee)((0,C["default"])(K))},1216:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1008),o=n(l);t["default"]=o["default"]},1695:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".root___2pCf5{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5;padding-bottom:50px}.backAfter___22Hfv,.backBefore___lQciy{border:10px solid transparent;border-right:10px solid #00a6e2;width:0;height:0;position:absolute;top:12px;left:4px;content:' '}.backBefore___lQciy{border-right-color:#fff;left:2px}.timeBox___2kn3_{margin-top:10px}.endTime___1C5Oq{position:absolute;right:0;top:0}.endTime___1C5Oq img{width:13px}.depositBox___3W0pR{background-color:#fff;margin-top:10px}.pds___yHVOB{padding:0 15px}.profit___27atc{padding:15px 0;border-bottom:1px solid #e5e5e5}.profit___27atc p{padding:0 15px;font-size:16px}.profitContent____gsW2{padding:15px 15px 23px}.profitContent____gsW2 .profitText___3Nr1w{font-size:14px;color:#666;margin-bottom:6px}.profitContent____gsW2 .profitText1___YznYQ{font-size:12px;color:#d2d2d2;margin-bottom:20px}.profitContent____gsW2 .profitNum___3u538{font-size:22px;color:#f70;vertical-align:bottom}.profitContent____gsW2 .profitNum___3u538 span{display:inline-block;font-size:14px;padding-bottom:4px;vertical-align:bottom}.pdAll___1ulsI{padding:20px 17px}.iconUl___M6ohw{display:block;width:100%}.iconUl___M6ohw li{display:inline-block;width:25%}.iconUl___M6ohw li span{display:block;width:100%;text-align:center;font-size:12px;color:#666}.iconUl___M6ohw li img{width:30px;margin-bottom:10px}.pdAll1___1FTYt{padding:15px}.hx___1nZ11{display:inline-block;width:50%;height:3px;background-color:#e5e5e5;vertical-align:middle;margin-top:-5px}.modalStyle___2p2Vi{position:fixed;z-index:999}.modalBody___3Zvll{position:absolute;bottom:0;padding-bottom:30px;height:auto}.bottom___2Re_M{position:fixed;left:0;right:0;bottom:0;height:50px}.bottom___2Re_M,.bottom___2Re_M .calculator___nZwQC{display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.bottom___2Re_M .calculator___nZwQC{width:50px;background-color:#59c5ec;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.bottom___2Re_M .calculator___nZwQC:before{height:70%;width:50%;content:'';background:url("+a(125)+") 50% no-repeat;background-size:contain}.bottom___2Re_M button{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;font-size:18px;color:#fff;background-color:#00a6e2;border:0}",""]),t.locals={root:"root___2pCf5",backBefore:"backBefore___lQciy",backAfter:"backAfter___22Hfv",timeBox:"timeBox___2kn3_",endTime:"endTime___1C5Oq",depositBox:"depositBox___3W0pR",pds:"pds___yHVOB",profit:"profit___27atc",profitContent:"profitContent____gsW2",
profitText:"profitText___3Nr1w",profitText1:"profitText1___YznYQ",profitNum:"profitNum___3u538",pdAll:"pdAll___1ulsI",iconUl:"iconUl___M6ohw",pdAll1:"pdAll1___1FTYt",hx:"hx___1nZ11",modalStyle:"modalStyle___2p2Vi",modalBody:"modalBody___3Zvll",bottom:"bottom___2Re_M",calculator:"calculator___nZwQC"}},2270:function(e,t,a){var n=a(1695);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});