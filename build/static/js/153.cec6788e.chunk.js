webpackJsonp([153],{285:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,u=o(2),f=n(u),p=o(5),d=n(p),c=o(3),_=n(c),h=o(4),b=n(h),w=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,f["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),y=o(1),m=n(y),g=o(344),E=n(g),v=o(8),x=n(v),R=o(9),L=n(R),k=(s=l=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||(0,b["default"])(t)).call(this,e));return o.switchPanel=function(){var e=o;e.state.open?e.setState({open:!1}):e.setState({open:!0})},o.state={open:o.props.status},o}return i(t,e),w(t,[{key:"render",value:function(){return m["default"].createElement("div",{className:E["default"].panel,style:this.state.open?this.props.styles.border:this.props.styles.none},m["default"].createElement("div",{className:E["default"].header,style:this.props.padding,onClick:this.switchPanel},this.props.title," ",m["default"].createElement("span",{className:(0,x["default"])(E["default"].arrows,this.state.open&&E["default"].down||"")})),m["default"].createElement("div",{className:E["default"].body,style:this.state.open?this.props.styles.show:this.props.styles.hidden},this.props.children))}}]),t}(y.Component),l.defaultProps={title:"面板标题",status:!1,styles:{show:{display:"block"},hidden:{display:"none"},border:{borderBottom:"1px solid #ddd"},none:{borderBottom:"none"}}},l.propTypes={title:L["default"].string,status:L["default"].bool},s);t["default"]=k},301:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".panel___1miVF{background-color:#fff}.header____MqaR{border-bottom:1px solid #ddd;padding:10px 15px;font-size:16px}.body___lEHyn{padding:10px 15px;font-size:14px;color:#999}.arrows___24Lsi{position:relative;float:right;left:8px}.arrows___24Lsi:after,.arrows___24Lsi:before{border:10px solid transparent;border-left:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi:before{border-left-color:#b6b6b6;right:-2px}.arrows___24Lsi.down___3OJRE{position:relative;float:right;left:4px;top:2px}.arrows___24Lsi.down___3OJRE:after,.arrows___24Lsi.down___3OJRE:before{border:10px solid transparent;border-top:10px solid #fff;width:0;height:0;position:absolute;top:0;right:0;content:' '}.arrows___24Lsi.down___3OJRE:before{border-top-color:#b6b6b6;top:2px}",""]),t.locals={panel:"panel___1miVF",header:"header____MqaR",body:"body___lEHyn",arrows:"arrows___24Lsi",down:"down___3OJRE"}},344:[2320,301],937:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f["default"]?(0,f["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(2),s=n(l),u=o(5),f=n(u),p=o(3),d=n(p),c=o(4),_=n(c),h=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),b=o(1),w=n(b),y=o(2063),m=n(y),g=o(12),E=n(g),v=o(285),x=n(v),R=o(22),L=n(R),k=o(11),M=o(10),O=function(e){function t(){return r(this,t),a(this,(t.__proto__||(0,_["default"])(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.gitProblems()}},{key:"render",value:function(){var e=this.props,t=e.pop,o=e.data,n=e.pending,r=w["default"].createElement(L["default"],null);return n||(r=w["default"].createElement("div",{className:m["default"].container},o&&o.data.map(function(e,t){return w["default"].createElement("div",{key:t},w["default"].createElement(x["default"],{padding:{paddingLeft:"0px"},title:e.title}," ",w["default"].createElement("p",{style:{lineHeight:"1.6"}},e.content)))}))),w["default"].createElement("div",{className:m["default"].root},w["default"].createElement(E["default"],{onLeft:t},"常见问题"),r)}}]),t}(b.Component),P=function(e){return{data:e.infodata.getIn(["GATHER_PROBLEMS","data"]),pending:e.infodata.getIn(["GATHER_PROBLEMS","pending"])}},T=function(e,t){return{pop:function(){e((0,M.goBack)())},gitProblems:function(){e({type:"GATHER_PROBLEMS"})}}};t["default"]=(0,k.connect)(P,T)(O)},1462:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".root___rwcE3{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.root___rwcE3 .container___1UTff{margin-top:15px;padding-left:15px;background-color:#fff}",""]),t.locals={root:"root___rwcE3",container:"container___1UTff"}},2063:[2319,1462]});