webpackJsonp([24],{988:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,m["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),s=r(o),c=a(5),i=r(c),f=a(3),m=r(f),p=a(4),h=r(p),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(1),C=r(v),E=a(11),w=r(E),_=a(47),b=r(_),N=a(1832),y=r(N),R=a(733),S=r(R),x=a(15),I=r(x),T=a(1912),A=r(T),L=a(1851),k=r(L),D=a(10),B=a(19),M=n(B),O=a(20),P=a(9),j=a(1837),U=r(j),H=void 0,F=function(e){function t(e){d(this,t);var a=u(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return a.componentWillMount=function(){a.props.detail()},a.componentDidUpdate=function(){H=new Image,H.src=k["default"],H.onload=function(){a.state.showCanvas&&a.initCard()}},a.pdCardRes=function(e){if(e){var t=e.data;if(100==e.code){var n=t.name,r=t.amount;a.setState({cardResName:n,cardResAmount:r,fetch:!1}),a.setState({gua:!0})}else a.setState({cardResName:"获取刮刮卡失败",fetch:!1}),a.setState({gua:!0})}},a.initCard=function(){var e=document.body.style;e.mozUserSelect="none",e.webkitUserSelect="none";var t=300,n=152,r=!1,d=document.getElementById("guaCanvas"),u=document.getElementById("box");if(!d)return!1;var l=document.getElementById("card"),o=l.offsetLeft,s=l.offsetTop,c=d.getContext("2d"),i=function(){for(var e=a.state.fetch,r=c.getImageData(0,0,t,n).data,d=0,u=0;d<r.length;d+=4)r[d]&&r[d+1]&&r[d+2]&&r[d+3]&&u++;if(u<=t*n*.6&&!e){var l=a.props.cardInfo.newCards.length;return a.props.useCard(a.props.cardInfo.newCards[a.state.index].id),a.setState({fetch:!0}),a.setState({showCanvas:!1,index:a.state.index+1}),l<=parseInt(a.state.index+1)?a.setState({guaBtn:!0}):c.clearRect(0,0,t,n),!0}return!1},f=void 0,m=function(e){e.preventDefault(),f=u.scrollTop,r=!0},p=function(e){setTimeout(i,800),e.preventDefault(),r=!1},h=function(e){if(e.preventDefault(),r){e.changedTouches&&(e=e.changedTouches[e.changedTouches.length-1]);var t=(e.clientX+document.body.scrollLeft||e.pageX)-o||0,a=(e.clientY+f||e.pageY)-s||0;c.globalCompositeOperation="destination-out",c.beginPath(),c.arc(t,a,15,0,2*Math.PI),c.fill()}};c.drawImage(H,0,0,t,n),d.addEventListener("touchstart",m),d.addEventListener("touchend",p),d.addEventListener("touchmove",h),d.addEventListener("mousedown",m),d.addEventListener("mouseup",p),d.addEventListener("mousemove",h)},a.useNext=function(){a.setState({showCanvas:!0,fetch:!1,cardResName:"",cardResAmount:""})},a.state={showCanvas:!0,index:0,fetch:!1,cardResName:"",cardResAmount:"",guaBtn:!1},a}return l(t,e),g(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.state.fetch,a=e.userCard;t&&this.pdCardRes(a)}},{key:"render",value:function(){var e=this.state,t=e.cardResName,a=e.cardResAmount,n=e.guaBtn,r=e.index,d=(e.over,this.props.cardInfo),u=d.newCards.length;return 0!=r&&(u=d.newCards.length-r),C["default"].createElement("div",{className:S["default"].bg},C["default"].createElement(w["default"],{backgroundColor:"transparent",leftNode:C["default"].createElement("img",{src:y["default"],height:"20",width:"10",alt:""}),rightNode:C["default"].createElement(O.Link,{className:S["default"].rightNode,to:"/user/scratchesRule"},"规则"),onLeft:this.props.pop},"我的刮刮卡"),C["default"].createElement(b["default"],{className:S["default"].box,id:"box"},C["default"].createElement("img",{className:S["default"].card_bg_img,src:A["default"],alt:""}),C["default"].createElement("div",{className:S["default"].card_bg},C["default"].createElement("div",{id:"card",className:S["default"].card},d.newCards.length>0&&this.state.showCanvas&&C["default"].createElement("div",{id:"have_card",className:S["default"].have_card},C["default"].createElement("canvas",{id:"guaCanvas",style:{width:283,height:142},className:S["default"].guaBox})),C["default"].createElement("div",{className:S["default"].answer},C["default"].createElement("h2",null,t,a),C["default"].createElement("div",{className:(0,I["default"])(d.newCards.length<=0?S["default"].show:"",S["default"].nullCard)},C["default"].createElement("img",{src:U["default"]}),C["default"].createElement("h2",{className:S["default"].noChoose},"没有刮奖机会"),C["default"].createElement("p",null,"每周五投资即可参与刮奖!")),C["default"].createElement("button",{onClick:this.useNext,className:(0,I["default"])(d.newCards.length>0?S["default"].show:"",S["default"].next),disabled:n},"刮下一张"))),C["default"].createElement("div",{className:S["default"].gg_b},C["default"].createElement("p",{className:S["default"].gg_line}),C["default"].createElement("p",{className:S["default"].gg_info},C["default"].createElement("span",null,"您有",u,"次刮奖机会"),C["default"].createElement(O.Link,{to:"/user/guaguaList"},C["default"].createElement("span",null,"您已获得",d.rewardsTime,"次奖励>")))))))}}]),t}(C["default"].Component),W=function(e){return e&&100===e.code?{newCards:e.data.luck_rewards||[],rewardsTime:e.data.rewards}:{newCards:[],rewardsTime:0}},X=function(e){return{cardInfo:W(e.infodata.getIn([M.SCRATCHES_CARD_INFO,"data"])),userCard:e.infodata.getIn([M.SCRATCHES_CARD_USE,"data"])}},Y=function(e){return{detail:function(){e({type:M.SCRATCHES_CARD_INFO})},useCard:function(t){e({type:M.SCRATCHES_CARD_USE,params:[t]})},pop:function(){e((0,P.goBack)())}}};t["default"]=(0,D.connect)(X,Y)(F)},1076:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(988),d=n(r);t["default"]=d["default"]},1832:function(e,t,a){e.exports=a.p+"static/media/arrowtab.4dde4c61.png"},1837:function(e,t,a){e.exports=a.p+"static/media/cry.cc155451.png"},1851:function(e,t,a){e.exports=a.p+"static/media/gua.20c170b2.png"},1912:function(e,t,a){e.exports=a.p+"static/media/scratchebg.3f8da319.jpg"}});