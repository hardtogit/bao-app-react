webpackJsonp([166],{229:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,u=o(2),f=n(u),p=o(5),d=n(p),c=o(3),_=n(c),h=o(4),b=n(h),y=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,f["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),w=o(1),m=n(w),g=o(275),v=n(g),E=o(8),x=n(E),L=o(9),k=n(L),R=(s=l=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return o.switchPanel=function(){var e=o;e.state.open?e.setState({open:!1}):e.setState({open:!0})},o.state={open:o.props.status},o}return i(t,e),y(t,[{key:"render",value:function(){return m["default"].createElement("div",{className:v["default"].panel,style:this.state.open?this.props.styles.border:this.props.styles.none},m["default"].createElement("div",{className:v["default"].header,style:this.props.padding,onClick:this.switchPanel},this.props.title," ",m["default"].createElement("span",{className:(0,x["default"])(v["default"].arrows,this.state.open&&v["default"].down||"")})),m["default"].createElement("div",{className:v["default"].body,style:this.state.open?this.props.styles.show:this.props.styles.hidden},this.props.children))}}]),t}(w.Component),l.defaultProps={title:"面板标题",status:!1,styles:{show:{display:"block"},hidden:{display:"none"},border:{borderBottom:"1px solid #ddd"},none:{borderBottom:"none"}}},l.propTypes={title:k["default"].string,status:k["default"].bool},s);t["default"]=R},245:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".panel___1miVF{background-color:#fff}.header____MqaR{border-bottom:1px solid #ddd;padding:10px 15px;font-size:16px}.body___lEHyn{padding:10px 15px;font-size:14px;color:#999}.arrows___24Lsi{position:relative;float:right;left:8px}.arrows___24Lsi:after,.arrows___24Lsi:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi:before{border-left-color:#b6b6b6;right:-2px}.arrows___24Lsi.down___3OJRE{position:relative;float:right;left:4px;top:2px}.arrows___24Lsi.down___3OJRE:after,.arrows___24Lsi.down___3OJRE:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi.down___3OJRE:before{border-top-color:#b6b6b6;top:2px}",""]),t.locals={panel:"panel___1miVF",header:"header____MqaR",body:"body___lEHyn",arrows:"arrows___24Lsi",down:"down___3OJRE"}},275:[2366,245],1060:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(2),s=n(l),u=o(5),f=n(u),p=o(3),d=n(p),c=o(4),_=n(c),h=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),b=o(1),y=n(b),w=o(2141),m=n(w),g=o(12),v=n(g),E=o(229),x=n(E),L=o(26),k=n(L),R=o(10),O=o(11),M=function(e){function t(){return r(this,t),a(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.gitProblems()}},{key:"render",value:function(){var e=this.props,t=e.pop,o=e.data,n=e.pending,r=y["default"].createElement(k["default"],null);return n||(r=y["default"].createElement("div",{className:m["default"].container},o&&o.data.map(function(e,t){return y["default"].createElement("div",{key:t},y["default"].createElement(x["default"],{padding:{paddingLeft:"0px"},title:e.title}," ",y["default"].createElement("p",{style:{lineHeight:"1.6"}},e.content)))}))),y["default"].createElement("div",{className:m["default"].root},y["default"].createElement(v["default"],{onLeft:t},"常见问题"),r)}}]),t}(b.Component),P=function(e){return{data:e.infodata.getIn(["YOU_PROBLEMS","data"]),pending:e.infodata.getIn(["YOU_PROBLEMS","pending"])}},S=function(e){return{pop:function(){e((0,O.goBack)())},gitProblems:function(){e({type:"YOU_PROBLEMS"})}}};t["default"]=(0,R.connect)(P,S)(M)},1588:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".root___Lok7D{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.root___Lok7D .container___3RKM9{margin-top:15px;padding-left:15px;background-color:#fff}",""]),t.locals={root:"root___Lok7D",container:"container___3RKM9"}},2141:[2365,1588]});