webpackJsonp([54],{1086:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_["default"]?(0,_["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),r=i(s),o=a(5),_=i(o),u=a(3),f=i(u),p=a(4),c=i(p),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r["default"])(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),y=a(1),m=i(y),h=a(10),b=a(11),x=i(b),E=a(2235),v=i(E),M=a(9),H=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||(0,c["default"])(t)).call(this,e));return a.state={title:"",date:"",description:""},a}return d(t,e),g(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("bao-noticeData")),t=e.title,a=e.date,i=e.description,n=e.type,l=e.id;this.setState({title:t,date:a,description:i}),this.props.reader(l,n)}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.date,i=e.description;return m["default"].createElement("div",{className:v["default"].finderDetail},m["default"].createElement("div",{className:v["default"].finderDetailHeader},m["default"].createElement(x["default"],{title:"消息详情",onLeft:this.props.pop})),m["default"].createElement("div",{className:v["default"].detailsBody},m["default"].createElement("h3",{className:v["default"].detailsTitle},t),m["default"].createElement("p",{className:v["default"].detailsTime},a),m["default"].createElement("hr",{className:v["default"].detailsHr}),m["default"].createElement("div",{className:v["default"].detailsMassege,dangerouslySetInnerHTML:{__html:i}})))}}]),t}(y.Component),O=function(e,t){return{}},T=function(e,t){return{reader:function(t,a){e({type:"SET_READ",params:[{type:a,msgId:t}]})},pop:function(){e((0,M.goBack)())}}};t["default"]=(0,h.connect)(O,T)(H)},1238:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1086),l=i(n);t["default"]=l["default"]},1634:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".finderDetail___bfAFB{padding-top:44px;position:absolute;left:0;top:0;width:100%;height:100vh;overflow:auto}.finderDetailHeader___k1LQV{position:relative;z-index:999}.detailsBody___1PRpJ{background-color:#fff;padding:0 15px}.detailsBody___1PRpJ .detailsTitle___3qbs2{font-size:20px;text-align:center;padding:20px 0 16px;font-weight:400;letter-spacing:1px}.detailsBody___1PRpJ .detailsTime___18HJ_{font-size:11px;text-align:center;color:#aaa;padding-bottom:30px}.detailsBody___1PRpJ .detailsHr___3jK7h{padding-bottom:8px;border:0;border-top:1px solid #e5e5e5}.detailsBody___1PRpJ .detailsMassege___11Eyt{padding:5px 0 10px;font-size:14px;color:#626262}.detailsMassege___11Eyt .detailsMt___3EfzP{font-weight:700}.detailsMassege___11Eyt .detailsOne___WRiqE{margin-top:8px}.detailsMassege___11Eyt .detailsOneT___tZRbu{padding:8px 0}.detailsMassege___11Eyt .detailsOneM___NSMP2{line-height:20px}.detailsMassege___11Eyt .detailsOneF___vHHd9{padding:10px 0}.detailsOneF___vHHd9 p{text-align:right;padding:5px}",""]),t.locals={finderDetail:"finderDetail___bfAFB",finderDetailHeader:"finderDetailHeader___k1LQV",detailsBody:"detailsBody___1PRpJ",detailsTitle:"detailsTitle___3qbs2",detailsTime:"detailsTime___18HJ_",detailsHr:"detailsHr___3jK7h",detailsMassege:"detailsMassege___11Eyt",detailsMt:"detailsMt___3EfzP",detailsOne:"detailsOne___WRiqE",detailsOneT:"detailsOneT___tZRbu",detailsOneM:"detailsOneM___NSMP2",detailsOneF:"detailsOneF___vHHd9"}},2235:[2380,1634]});