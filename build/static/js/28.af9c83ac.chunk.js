webpackJsonp([28],{406:function(e,t,n){e.exports=n.p+"static/media/close.14cb8b42.png"},867:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(d["default"]?(0,d["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s,i,u=n(2),c=a(u),f=n(5),d=a(f),p=n(3),_=a(p),m=n(4),h=a(m),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,c["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=n(1),b=a(g),w=n(2399),E=a(w),v=n(15),T=a(v),N=(i=s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||(0,h["default"])(t)).call(this,e));return n.choose=function(e){var t=n.props.num;n.setState({index:e});var a=void 0;1==e?a="A":2==e?a="B":3==e?a="C":4==e&&(a="D"),sessionStorage.setItem("q"+t,a)},n.state={index:0},n}return l(t,e),x(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,a=t.answer1,o=t.answer2,r=t.answer3,l=t.answer4,s=t.num,i=this.state.index;return b["default"].createElement("div",{className:E["default"].questionItem,onChange:function(){e.change()}},b["default"].createElement("p",null,s,".",n),b["default"].createElement("p",null,b["default"].createElement("span",{onClick:function(){e.choose(1)},className:E["default"].chooseBox},b["default"].createElement("span",{className:1==i&&E["default"].chooseBoxInner||E["default"].none})),b["default"].createElement("span",{className:1==i&&E["default"].answerTxt||E["default"].floatSty},a)," "),b["default"].createElement("p",null,b["default"].createElement("span",{onClick:function(){e.choose(2)},className:E["default"].chooseBox},b["default"].createElement("span",{className:2==i&&E["default"].chooseBoxInner||E["default"].none})),b["default"].createElement("span",{className:2==i&&E["default"].answerTxt||E["default"].floatSty},o)," "),b["default"].createElement("p",null,b["default"].createElement("span",{onClick:function(){e.choose(3)},className:E["default"].chooseBox},b["default"].createElement("span",{className:3==i&&E["default"].chooseBoxInner||E["default"].none})),b["default"].createElement("span",{className:3==i&&E["default"].answerTxt||E["default"].floatSty},r)," "),b["default"].createElement("p",null,b["default"].createElement("span",{onClick:function(){e.choose(4)},className:l&&E["default"].chooseBox||E["default"].none},b["default"].createElement("span",{className:4==i&&E["default"].chooseBoxInner||E["default"].none})),b["default"].createElement("span",{className:4==i&&E["default"].answerTxt||E["default"].floatSty},l)," "))}}]),t}(b["default"].Component),s.propTypes={question:T["default"].string,answer1:T["default"].string,answer2:T["default"].string,answer3:T["default"].string,answer4:T["default"].string,num:T["default"].number},i);t["default"]=N},1086:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,d["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=a(s),u=n(5),c=a(u),f=n(3),d=a(f),p=n(4),_=a(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,i["default"])(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(1),x=a(h),g=n(10),b=a(g),w=n(35),E=a(w),v=n(867),T=a(v),N=n(406),y=a(N),I=n(21),k=a(I),B=n(17),C=a(B),S=n(8),A=n(9),D=n(2452),W=a(D),q=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||(0,_["default"])(t)).call(this,e));return n.handleConfirm=function(e){if(0==e)n.refs.alert.show({title:"",content:"今年您的测评机会已用完",okText:"确定",okCallback:function(){}});else{for(var t=[],a=1;a<=16;a++)sessionStorage.getItem("q"+a),t.splice(a,0,sessionStorage.getItem("q"+a));for(var o="",r=0,l=0;l<t.length;l++)null==t[l]?(r+=1,n.refs.alert.show({title:"",content:"您尚有"+r+"道题未作答，请作答完毕后再次提交！",okText:"确定",okCallback:function(){}})):l==t.length-1?(o=o+Number(l+1)+"-"+t[l],n.props.subAnswer(o),n.setState({popIndex:1})):o=o+Number(l+1)+"-"+t[l]+"_"}},n.handleClose=function(){n.setState({popIndex:0}),n.props.push("/user/setting/riskEvaluation")},n.loadingDom=function(){return x["default"].createElement(C["default"],null)},n.popDom=function(e){var t=e.name,a=(e.max_month,e.content),o=e.has_num,r=n.state.popIndex;return x["default"].createElement("div",{className:1==r&&W["default"].popWraper||W["default"].none},x["default"].createElement("div",{className:W["default"].shadow}),x["default"].createElement("div",{className:W["default"].contentWraper},x["default"].createElement("div",{className:W["default"].content},x["default"].createElement("div",{className:W["default"].title},x["default"].createElement("p",{className:W["default"].titleTxt},"测评结果"),x["default"].createElement("p",{className:W["default"].typeTxt},t)),x["default"].createElement("div",{className:W["default"].contentTxt},x["default"].createElement("p",null,"根据您的实际情况，宝点网预测您的风险承受能力等级为：",t),x["default"].createElement("p",null,"适投于：",a)),x["default"].createElement("div",{className:W["default"].goInvestBtn,onClick:function(){n.props.push("/home/productIndex")}},"立即投资"),x["default"].createElement("p",{className:3==o&&W["default"].none||W["default"].restartTxt},"今年您还可进行",3-o,"次测评，",x["default"].createElement("span",{className:W["default"].restart,onClick:function(){n.props.push("/user/setting/riskEvaluation")}},"重新评测"))),x["default"].createElement("div",{className:W["default"].closeBtn},x["default"].createElement("img",{src:y["default"],className:W["default"].close,onClick:n.handleClose}))))},n.loadingEndDom=function(){var e=n.props.QuestionData;return x["default"].createElement("div",{className:W["default"].questionWraper},e&&e.data.map(function(e,t){return sessionStorage.removeItem("q"+Number(t+1)),x["default"].createElement(T["default"],{key:t,question:e.question,num:t+1,answer1:e.answer.A,answer2:e.answer.B,answer3:e.answer.C,answer4:e.answer.D})}))},n.state={popIndex:0},n}return l(t,e),m(t,[{key:"componentWillMount",value:function(){this.props.getQuestionList(),this.props.getEducationInfo()}},{key:"render",value:function(){var e=this,t=this.props,n=t.QuestionData,a=t.EducationData,o=t.SubAnwserData,r=void 0,l=void 0,s=void 0;return r=n?this.loadingEndDom():this.loadingDom(),o&&100==o.code&&(l=this.popDom(o.data)),a&&100==a.code&&(s=3-a.data.has_num),x["default"].createElement("div",{className:W["default"].bg},x["default"].createElement(b["default"],{onLeft:this.props.pop},"风险承受能力测评"),x["default"].createElement(E["default"],null,x["default"].createElement("p",{className:W["default"].remindTxt},"今年您还可评测",s,"次"),r),x["default"].createElement(k["default"],{ref:"alert"}),l,x["default"].createElement("div",{className:W["default"].startBtn,onClick:function(){e.handleConfirm(s)}},"确认提交"))}}]),t}(x["default"].Component),j=function(e,t){return{QuestionData:e.infodata.getIn(["GET_QIESTION_LIST","data"]),EducationData:e.infodata.getIn(["GET_EDUCATION_INFO","data"]),SubAnwserData:e.infodata.getIn(["SUB_ANSWER","data"])}},Q=function(e,t){return{pop:function(){e((0,S.goBack)())},push:function(t){e((0,S.push)(t))},getQuestionList:function(){e({type:"GET_QIESTION_LIST"})},getEducationInfo:function(){e({type:"GET_EDUCATION_INFO"})},subAnswer:function(t){e({type:"SUB_ANSWER",params:[t]})}}};t["default"]=(0,A.connect)(j,Q)(q)},1533:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".questionItem___2Ngta{margin-top:10px}.questionItem___2Ngta p{line-height:22px;font-size:14px}.chooseBox___1NfVd{display:inline-block;width:14px;height:14px;border-radius:7px;border:1px solid #00a4e0;background-color:#fff;position:relative}.chooseBoxInner___30dT_{display:inline-block;position:absolute;top:3px;left:3px;z-index:100;width:6px;height:6px;border-radius:3px;background-color:#00a4e0}.none___jctuc{display:none}.answerTxt___3ovaH{color:#00a4e0}",""]),t.locals={questionItem:"questionItem___2Ngta",chooseBox:"chooseBox___1NfVd",chooseBoxInner:"chooseBoxInner___30dT_",none:"none___jctuc",answerTxt:"answerTxt___3ovaH"}},1596:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".bg___2HJsi{background:#fff;width:100%;height:100vh;position:absolute;left:0;top:0}.remindTxt___19jAa{background-color:#fbede2;color:#ff7300;width:100%;height:44px;line-height:44px;padding-left:30px;border-top:1px solid #ff7300;border-bottom:1px solid #ff7300;position:fixed;top:44px;left:0;z-index:101}.questionWraper___3XAJ5{margin-top:50px;padding:0 20px 70px}.none___2QBcn{display:none}.startBtn___3Kk9C{width:100%;position:absolute;bottom:0;left:0;background-color:#00a6e2;color:#fff;height:50px;line-height:50px;font-size:16px;text-align:center}.shadow___BFo22{position:fixed;width:100%;height:100%;background-color:#000;opacity:.5;filter:alpha(opacity=60);z-index:101}.contentWraper___3_L9B{width:100%;height:100%;opacity:1;position:fixed;z-index:102}.content___a6Axa{width:85%;background-color:#fff;border-radius:8px;overflow:hidden;margin:0 auto;position:relative;-webkit-transform:translateY(25%);transform:translateY(25%);bottom:0;padding-bottom:40px}.title___1cc3h{width:100%;height:100px;background:url("+n(1965)+");background-size:100% 100%;text-align:center}.titleTxt___3rSQ_{font-size:20px;padding-top:20px}.typeTxt___1kWCO{font-size:24px;padding-top:15px}.contentTxt___2fVVX{font-size:14px;width:90%;margin:0 auto}.contentTxt___2fVVX p{margin-top:20px;line-height:20px}.goInvestBtn___1jfbH{width:240px;margin:0 auto;margin-top:30px;height:40px;line-height:40px;border-radius:4px;background-color:#00a4e0;font-size:20px;color:#fff;text-align:center}.restartTxt___1OQjw{margin-top:15px;font-size:14px;text-align:center}.restart___3bA4e{color:#00a4e0;text-decoration:underline}.closeBtn___1b2YH{width:100%;text-align:center}.close___3WZSI{width:50px;margin-top:115px}",""]),t.locals={bg:"bg___2HJsi",remindTxt:"remindTxt___19jAa",questionWraper:"questionWraper___3XAJ5",none:"none___2QBcn",startBtn:"startBtn___3Kk9C",popWraper:"popWraper___2fDjU",shadow:"shadow___BFo22",contentWraper:"contentWraper___3_L9B",content:"content___a6Axa",title:"title___1cc3h",titleTxt:"titleTxt___3rSQ_",typeTxt:"typeTxt___1kWCO",contentTxt:"contentTxt___2fVVX",goInvestBtn:"goInvestBtn___1jfbH",restartTxt:"restartTxt___1OQjw",restart:"restart___3bA4e",closeBtn:"closeBtn___1b2YH",close:"close___3WZSI"}},1965:function(e,t,n){e.exports=n.p+"static/media/bg_tit.02d63188.png"},2399:[2578,1533],2452:[2581,1596]});