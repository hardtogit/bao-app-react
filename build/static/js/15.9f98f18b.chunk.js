webpackJsonp([15],{880:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u["default"]?(0,u["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,d,r=a(2),c=n(r),s=a(5),u=n(s),f=a(3),p=n(f),m=a(4),x=n(m),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(1),b=n(h),T=a(78),v=n(T),w=a(77),E=(n(w),a(2503)),k=n(E),y=a(16),I=n(y),N=(d=i=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return a.okHandle=function(){var e=a.state.options;e.okCallback&&e.okCallback.call(null),a.hide()},a.cancelHandle=function(){var e=a.state.options;e.cancelCallback&&e.cancelCallback.call(null),a.hide()},a.state={options:{}},a}return _(t,e),g(t,[{key:"show",value:function(e){this.setState({options:e}),this.refs.dialog.show()}},{key:"hide",value:function(){this.refs.dialog.hide()}},{key:"render",value:function(){var e=this.state.options;return b["default"].createElement(v["default"],{ref:"dialog"},b["default"].createElement("div",{className:k["default"].modal},e.title?b["default"].createElement("p",{className:k["default"].title},e.title):null,b["default"].createElement("div",{className:k["default"].content},b["default"].isValidElement(e.content)?e.content:b["default"].createElement("div",{className:k["default"].contentWrap}," ",e.content," ")),b["default"].createElement("div",{className:k["default"].bottom},b["default"].createElement("span",{onClick:this.cancelHandle,className:k["default"].cancelBtn},e.cancelText||"取消"),b["default"].createElement("span",{onClick:this.okHandle,className:k["default"].okBtn},e.okText||"确定"))))}}]),t}(b["default"].Component),i.propTypes={title:I["default"].string,content:I["default"].oneOfType([b["default"].PropTypes.string,b["default"].PropTypes.element]),okText:I["default"].string,confirmTxt:I["default"].string,okCallback:I["default"].func,cancelText:I["default"].string,cancelCallback:I["default"].func},d);t["default"]=N},987:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,u["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),d=n(i),r=a(5),c=n(r),s=a(3),u=n(s),f=a(4),p=n(f),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,d["default"])(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=a(1),g=n(x),h=a(11),b=n(h),T=a(2377),v=n(T),w=a(10),E=a(9),k=a(880),y=n(k),I=a(17),N=n(I),A=a(2e3),C=n(A),M=a(2013),z=n(M),B=a(2023),D=n(B),O=0,W=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||(0,p["default"])(t)).call(this,e));return a.del=function(e){a.refs.confirm.show({title:"取消兑换",content:"确认取消该商品兑换？",okText:"确定",cancelText:"取消",confirmTxt:"",okCallback:function(){O=e,a.props.cancelCash(e),a.props.pop()}})},a.loadDom=function(){return g["default"].createElement(N["default"],null)},a.loadEndDom=function(e){var t=e.status,n=e.data0,l=e.data1,o=e.data2,_=e.data3,i=void 0,d=void 0;return 0==t?(d=n,i=a.nohandleDom()):1==t?(d=l,i=a.handlingDom()):2==t?(d=o,i=a.handledDom(d)):3==t&&(d=_),g["default"].createElement("div",null,g["default"].createElement("div",{className:v["default"].deTop},g["default"].createElement("div",{className:v["default"].zhuangtai},g["default"].createElement("p",{className:v["default"].txtTop},"处理状态"),g["default"].createElement("p",{className:v["default"].txtBtm},d.status)),g["default"].createElement("div",{className:v["default"].zhongjian}),g["default"].createElement("div",{className:v["default"].zhuangtai},g["default"].createElement("p",{className:v["default"].txtTop},"配送公司"),g["default"].createElement("p",{className:v["default"].txtBtm},d.send_company))),g["default"].createElement("div",{className:v["default"].messsage},g["default"].createElement("p",{className:v["default"].one},g["default"].createElement("span",null,g["default"].createElement("img",{src:C["default"],className:v["default"].addImg})),g["default"].createElement("span",null,d.receive_user,"（收）"),g["default"].createElement("span",{className:v["default"].rightTxt},d.receive_phone)),g["default"].createElement("p",{className:v["default"].addTxt},"地址：",d.receive_addrees),g["default"].createElement("hr",{className:v["default"].line}),i))},a.handledDom=function(e){var t=e.records_time,a=e.send_code;return g["default"].createElement("div",null,g["default"].createElement("p",{className:v["default"].two},g["default"].createElement("span",{className:v["default"].order},"处理时间"),g["default"].createElement("span",{className:v["default"].orderTxt},t)),g["default"].createElement("p",{className:v["default"].two},g["default"].createElement("span",{className:v["default"].order},"配送单号"),g["default"].createElement("span",{className:v["default"].orderTxt},a)))},a.handlingDom=function(){return g["default"].createElement("div",null,g["default"].createElement("div",{className:v["default"].handleImgBox},g["default"].createElement("img",{src:z["default"],className:v["default"].handleImg}),g["default"].createElement("p",null,"工作人员正在处理订单"),g["default"].createElement("p",null,"请耐心等候哦！")))},a.nohandleDom=function(){var e=a.props.params.id;return g["default"].createElement("div",null,g["default"].createElement("div",{className:v["default"].handleImgBox},g["default"].createElement("img",{src:D["default"],className:v["default"].handleImg}),g["default"].createElement("p",null,"工作人员正在加紧处理"),g["default"].createElement("p",null,"请耐心等候哦！")),g["default"].createElement("div",{className:v["default"].cancelBtn,onClick:function(){a.del(e)}},"取消兑换"),g["default"].createElement(y["default"],{ref:"confirm"}))},a}return _(t,e),m(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this.props.params.id;this.props.getCashDetail(e)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.status&&e.id==O&&(O=0,this.props.getAddress())}},{key:"render",value:function(){var e=this.props,t=e.pop,a=e.CashDetailData,n=void 0;return n=this.loadDom(),a&&(n=this.loadEndDom(a.data)),g["default"].createElement("div",{className:v["default"].bg},g["default"].createElement(b["default"],{backgroundColor:"#fff",color:"#333",onLeft:t},"处理详情"),n)}}]),t}(g["default"].Component),H=function(e){return e&&100==e.code?{status:!0,id:e.id}:{status:!1}},j=function(e){return{CashDetailData:e.infodata.getIn(["GET_CASH_DETALE","data"]),cancelData:H(e.infodata.getIn(["CANCEL_CASH_GOODS","data"]))}},L=function(e){return{getCashDetail:function(t){e({type:"GET_CASH_DETALE",params:[t]})},cancelCash:function(t){e({type:"CANCEL_CASH_GOODS",params:[t]})},pop:function(){e((0,E.goBack)())}}};t["default"]=(0,w.connect)(j,L)(W)},1150:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(987),o=n(l);t["default"]=o["default"]},1503:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".bg___2Ucnl{background:#f6f6f9;position:absolute;left:0;top:0;width:100%;height:100vh;z-index:1;overflow:auto}.deTop___3XR5S{width:100%;height:200px;background-color:#fe684b;margin-top:44px;padding-top:60px}.deTop___3XR5S .zhuangtai___ahKd8{float:left;width:49.5%;height:54px;color:#fff;text-align:center}.deTop___3XR5S .zhuangtai___ahKd8 .txtTop___3AFH4{font-size:12px}.deTop___3XR5S .zhuangtai___ahKd8 .txtBtm___je-3R{font-size:20px;line-height:44px}.deTop___3XR5S .zhongjian___2qHTT{float:left;width:0;height:50px;border:1px solid #fff}.messsage___3T84A{width:90%;height:300px;background-color:#fff;margin:-30px auto 0;padding:30px 0}.messsage___3T84A .one___2TvBt{height:40px;padding:0 20px}.messsage___3T84A .one___2TvBt .addImg___3RIu9{display:block;width:24px}.messsage___3T84A .one___2TvBt span{float:left}.messsage___3T84A .one___2TvBt .rightTxt___2B0xi{float:right}.messsage___3T84A .addTxt___3pcIZ{font-size:14px;color:#666;line-height:26px;padding:0 40px}.messsage___3T84A .line___2e2Sv{border:1px dashed #dedede;width:100%;margin:20px 0}.messsage___3T84A .two___1-SfC{font-size:14px;padding:0 20px;height:30px;line-height:30px}.messsage___3T84A .two___1-SfC .order___2ioEF{color:#999;float:left}.messsage___3T84A .two___1-SfC .orderTxt___3VY7O{float:right}.messsage___3T84A .handleImgBox___Q4lrt{width:100%;background-color:#fff;text-align:center;padding-bottom:30px}.messsage___3T84A .handleImgBox___Q4lrt .handleImg___3g4Xg{width:40%}.messsage___3T84A .handleImgBox___Q4lrt p{height:28px;line-height:28px}.messsage___3T84A .cancelBtn___6Wtul{width:60%;height:40px;line-height:40px;margin:20px auto;background:#fe684b;color:#fff;font-size:16px;text-align:center}",""]),t.locals={bg:"bg___2Ucnl",deTop:"deTop___3XR5S",zhuangtai:"zhuangtai___ahKd8",txtTop:"txtTop___3AFH4",txtBtm:"txtBtm___je-3R",zhongjian:"zhongjian___2qHTT",messsage:"messsage___3T84A",one:"one___2TvBt",addImg:"addImg___3RIu9",rightTxt:"rightTxt___2B0xi",addTxt:"addTxt___3pcIZ",line:"line___2e2Sv",two:"two___1-SfC",order:"order___2ioEF",orderTxt:"orderTxt___3VY7O",handleImgBox:"handleImgBox___Q4lrt",handleImg:"handleImg___3g4Xg",cancelBtn:"cancelBtn___6Wtul"}},1647:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".modal___3DfXE{border-radius:5px;padding-top:1px;position:relative;background-image:url("+a(2167)+");background-size:100% 100%;height:220px;width:300px}.title___1YlF1{padding-top:18px;text-align:center;color:#fff;font-size:17px}.close___3_wgi{position:absolute;left:0;top:0;padding:10px 5px}.close___3_wgi .closeIcon___vZLKA{width:15px}.tip___A4T13{font-size:12px;text-align:center;padding:6px;color:#888}.content___2Nn5s{margin-top:60px;margin-bottom:25px;padding-left:20px;padding-right:20px;text-align:center}.contentWrap___1cWL3{text-align:left;line-height:20px;color:#888;display:inline-block}.bottom___2OjU9{height:42px}.bottom___2OjU9 span{float:left;text-align:center;line-height:42px;font-size:17px;width:130px;margin:0 10px}.okBtn___wwopG{color:#fff;background-color:#fe684b}.cancelBtn___okXYx,.okBtn___wwopG{font-size:17px;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;line-height:42px;text-align:center;display:block}.cancelBtn___okXYx{color:#666;background-color:transparent;border:1px solid #dedede}.reddemModal___1HMJO{position:relative}.reddemModal___1HMJO .deleteIconWrap___3EYh-{position:absolute;top:10px;left:10px;width:30px;height:30px;display:block}.reddemModal___1HMJO .deleteIcon___3CONu{width:20px;height:20px;margin-top:5px;margin-left:5px}.reddemModal___1HMJO .money___2mWRb{color:#f70;font-size:28px}.reddemModal___1HMJO .inputWrap___32n-n{margin:0 auto;border:1px solid #00a6e2;height:42px;width:275px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex}.reddemModal___1HMJO .inputWrap___32n-n .input___bvu4Z{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1;outline:none}.reddemModal___1HMJO .errorText___3yCzE{dispaly:block;color:#f70;margin-top:10px;padding:0 15px}.reddemModal___1HMJO .detailText____UFvc{padding:0 15px 15px}.successDialog___NqAB4{background-color:transparent}.successModal___2xrG_{background-color:rgba(0,0,0,.7);border-radius:10px;width:122px;height:122px;text-align:center}.successIcon___22pLl{width:50px;height:38px;margin-top:28px}.successTitle___3PxcA{margin-top:14px;line-height:0;color:#fff}.asList___cyfZd>li,.successTitle___3PxcA{text-align:center;font-size:16px;display:block}.asList___cyfZd>li{height:50px;line-height:50px}.selectItem___2eRNn{font-size:20px;color:#00a6e2}.disableItem___1l0A-{color:#ddd}.c_container___1hoKT{position:fixed;width:100%;height:400px;background-color:#fff;bottom:0}.c_header___1IVP3{text-align:center;height:40px;line-height:40px;border-bottom:1px solid #ddd}.c_header___1IVP3 span{float:left;font-size:24px;margin-left:15px}.c_body___367hc{height:360px;overflow:scroll;padding-left:10px}.c_item___2qnhe{height:50px;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;border-bottom:1px solid #ddd;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center}.c_item___2qnhe .c_left___31vHn{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:0 34px;flex:0 34px}.c_item___2qnhe .c_right___3s6DL{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-ms-flex:1;flex:1}.c_item___2qnhe .c_right___3s6DL .c_top___2TFmP{font-size:14px;margin-bottom:4px}.c_item___2qnhe .c_right___3s6DL .c_bottom___3hQ6j{font-size:14px;color:#888}.c_icon___301gU{float:left;width:28px;margin-right:6px}.card_close___2f6jM{position:absolute;left:0;color:#777}.myModal___2T7wG{position:fixed;left:0;top:0;bottom:0;right:0;z-index:1040}.guideOne___1UlHl,.guideTwo___ijW1W{width:42%;position:absolute;z-index:1042}.guideTwo___ijW1W{left:24%}.guideThree___3imAr{width:50%;position:absolute;z-index:1042;right:0}.guideFour___3yM7Z{width:76%;position:absolute;z-index:10425;left:12%;top:100px}.btn___3sfep{position:absolute;z-index:1042;width:100%;text-align:center;bottom:80px}.btn___3sfep img{width:160px;margin:0 auto}.guide___2q27F{-webkit-transition:all 1.2s ease;transition:all 1.2s ease;position:absolute;z-index:1046;width:100%}.leave___U_okL{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.enter___2ExQY{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""]),t.locals={modal:"modal___3DfXE",title:"title___1YlF1",close:"close___3_wgi",closeIcon:"closeIcon___vZLKA",tip:"tip___A4T13",content:"content___2Nn5s",contentWrap:"contentWrap___1cWL3",bottom:"bottom___2OjU9",okBtn:"okBtn___wwopG",cancelBtn:"cancelBtn___okXYx",reddemModal:"reddemModal___1HMJO",deleteIconWrap:"deleteIconWrap___3EYh-",deleteIcon:"deleteIcon___3CONu",money:"money___2mWRb",inputWrap:"inputWrap___32n-n",input:"input___bvu4Z",errorText:"errorText___3yCzE",detailText:"detailText____UFvc",successDialog:"successDialog___NqAB4",successModal:"successModal___2xrG_",successIcon:"successIcon___22pLl",successTitle:"successTitle___3PxcA",asList:"asList___cyfZd",selectItem:"selectItem___2eRNn",disableItem:"disableItem___1l0A-",c_container:"c_container___1hoKT",c_header:"c_header___1IVP3",c_body:"c_body___367hc",c_item:"c_item___2qnhe",c_left:"c_left___31vHn",c_right:"c_right___3s6DL",c_top:"c_top___2TFmP",c_bottom:"c_bottom___3hQ6j",c_icon:"c_icon___301gU",card_close:"card_close___2f6jM",myModal:"myModal___2T7wG",guideOne:"guideOne___1UlHl",guideTwo:"guideTwo___ijW1W",guideThree:"guideThree___3imAr",guideFour:"guideFour___3yM7Z",btn:"btn___3sfep",guide:"guide___2q27F",leave:"leave___U_okL",enter:"enter___2ExQY"}},2e3:function(e,t,a){e.exports=a.p+"static/media/add3.ef40458f.png"},2013:function(e,t,a){e.exports=a.p+"static/media/handling.05026d4c.png"},2023:function(e,t,a){e.exports=a.p+"static/media/nothandle.f95f5575.png"},2167:function(e,t,a){e.exports=a.p+"static/media/confirmPop.7e793b06.png"},2377:[2642,1503],2503:function(e,t,a){var n=a(1647);"string"==typeof n&&(n=[[e.id,n,""]]);a(7)(n,{});n.locals&&(e.exports=n.locals)}});