webpackJsonp([61],{1027:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,f["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r["default"]?(0,r["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=a(2),o=l(d),c=a(5),r=l(c),s=a(3),f=l(s),u=a(41),m=l(u),p=a(4),x=l(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,o["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),E=a(1),b=l(E),g=a(2375),y=l(g),N=a(10),v=l(N),T=a(24),A=l(T),w=a(25),k=(l(w),a(2037)),J=l(k),L=a(13),G=l(L),H=a(9),R=a(8),z=function(e){function t(e){_(this,t);var a=n(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return a.clientWidth=document.body.clientWidth,a.clientHeight=document.body.clientHeight,a.translateStyle={one:{transform:"translateX(0px)"},two:{transform:"translateX("+-a.clientWidth+"px)"},three:{transform:"translateX("+2*-a.clientWidth+"px)"}},a.change=function(e,t){a.props.changeDc(t),a.props.change(e)},a.state={index:0,text:"立即购买"},a}return i(t,e),h(t,[{key:"componentWillUnmount",value:function(){this.props.clean()}},{key:"componentDidMount",value:function(){this.refs.tabs.style.width=3*this.clientWidth+"px",this.props.gitHeaderData()}},{key:"componentWillReceiveProps",value:function(e){e.dataOne,e.dataTwo,e.dataThree}},{key:"render",value:function(){var e=this,t=this.state,a=t.index,l=(t.translateStyle,void 0);switch(a){case 0:l=this.translateStyle.one;break;case 1:l=this.translateStyle.two;break;case 2:l=this.translateStyle.three}var _=this.props,n=_.dataOne,i=_.pendingOne,d=_.endOne,o=_.dataTwo,c=_.pendingTwo,r=_.endTwo,s=_.dataThree,f=_.pendingThree,u=_.endThree,p=_.headerData,x=_.push,h=_.pop,E=_.Height;return b["default"].createElement("div",{className:y["default"].container},b["default"].createElement(v["default"],{onLeft:h},"我的聚点+"),b["default"].createElement("div",{className:y["default"].header},b["default"].createElement("div",{className:y["default"].left},b["default"].createElement("p",{className:y["default"].itemTitle},"待收本息（利息",p&&p.data.interest,"）"),b["default"].createElement("p",{className:y["default"].itemContent},p&&p.data.leftRevenue," ",b["default"].createElement("span",{className:y["default"].icon},"￥"))),b["default"].createElement("div",{className:y["default"].right},b["default"].createElement("p",{className:y["default"].itemTitle},"历史累积收益"),b["default"].createElement("p",{className:y["default"].itemContent},p&&p.data.historyRightRevenue," ",b["default"].createElement("span",{className:y["default"].icon},"￥")))),b["default"].createElement("div",{className:y["default"].toggle},b["default"].createElement("div",{onClick:function(){e.setState({index:0})},className:(0,G["default"])(y["default"].item,0==this.state.index?y["default"].active:"")},"持有中"),b["default"].createElement("div",{onClick:function(){e.setState({index:1})},className:(0,G["default"])(y["default"].item,1==this.state.index?y["default"].active:"")},"退出中"),b["default"].createElement("div",{onClick:function(){e.setState({index:2})},className:(0,G["default"])(y["default"].item,2==this.state.index?y["default"].active:"")},"已退出")),b["default"].createElement("div",{className:y["default"].overFlow},b["default"].createElement("div",{ref:"tabs",className:(0,G["default"])(y["default"].tabs,y["default"].clearFixed),style:l},b["default"].createElement("div",{className:y["default"].tab},b["default"].createElement(A["default"],{height:E,fetch:function(){e.props.gitGatherListOne({type:1})},isLoading:i,distance:20,endType:d},n&&n.map(function(t,a){return b["default"].createElement("div",{key:a,className:y["default"].box,onClick:function(){e.props.saveGather((0,m["default"])(t,{type:"持有中"})),x("/user/gatherMyDetail")}},b["default"].createElement("div",{className:y["default"].data_list_item},b["default"].createElement("div",{className:y["default"].item_header},b["default"].createElement("div",{className:(0,G["default"])(y["default"].name,y["default"].sub_item)},b["default"].createElement("img",{src:J["default"],alt:""})," ",t.name),b["default"].createElement("div",{className:(0,G["default"])(y["default"].sub_item,y["default"].conpon)},function(){switch(t.coupon_type){case 0:break;case 1:return b["default"].createElement("span",{className:y["default"].pink},t.coupon_info);case 2:return b["default"].createElement("span",{className:y["default"].cyan},t.coupon_info)}}()),b["default"].createElement("div",{className:(0,G["default"])(y["default"].sub_item,y["default"].days)},t.remain_time,"天")),b["default"].createElement("div",{className:y["default"].item_body},b["default"].createElement("div",{className:(0,G["default"])(y["default"].one,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.plan_income),b["default"].createElement("p",{className:y["default"].title},"预期收益(元)")),b["default"].createElement("div",{className:(0,G["default"])(y["default"].two,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.rate,"%"),b["default"].createElement("p",{className:y["default"].title},"预期年化利率")),b["default"].createElement("div",{className:(0,G["default"])(y["default"].three,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.invest_money),b["default"].createElement("p",{className:y["default"].title},"加入金额(元)")))))}))),b["default"].createElement("div",{className:y["default"].tab},b["default"].createElement(A["default"],{height:E,fetch:function(){e.props.gitGatherListThree({type:3})},isLoading:f,distance:20,endType:u},s&&s.map(function(t,a){return b["default"].createElement("div",{key:a,className:y["default"].box,onClick:function(){e.props.saveGather((0,m["default"])(t,{type:"退出中"})),x("/user/gatherMyDetail")}},b["default"].createElement("div",{className:y["default"].data_list_item},b["default"].createElement("div",{className:y["default"].item_header},b["default"].createElement("div",{className:(0,G["default"])(y["default"].name,y["default"].sub_item)},b["default"].createElement("img",{src:J["default"],alt:""})," ",t.name),b["default"].createElement("div",{className:(0,G["default"])(y["default"].sub_item,y["default"].conpon)},function(){switch(t.coupon_type){case 0:break;case 1:return b["default"].createElement("span",{className:y["default"].pink},t.coupon_info);case 2:return b["default"].createElement("span",{className:y["default"].cyan},t.coupon_info)}}()),b["default"].createElement("div",{className:(0,G["default"])(y["default"].sub_item,y["default"].days)})),b["default"].createElement("div",{className:y["default"].item_body},b["default"].createElement("div",{className:(0,G["default"])(y["default"].one,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.plan_income),b["default"].createElement("p",{className:y["default"].title},"预期收益(元)")),b["default"].createElement("div",{className:(0,G["default"])(y["default"].two,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.rate,"%"),b["default"].createElement("p",{className:y["default"].title},"预期年化利率")),b["default"].createElement("div",{className:(0,G["default"])(y["default"].three,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.invest_money),b["default"].createElement("p",{className:y["default"].title},"加入金额(元)")))))}))),b["default"].createElement("div",{className:y["default"].tab},b["default"].createElement(A["default"],{height:E,fetch:function(){e.props.gitGatherListTwo({type:2})},isLoading:c,distance:20,endType:r},o&&o.map(function(t,a){return b["default"].createElement("div",{key:a,className:y["default"].box,onClick:function(){e.props.saveGather((0,m["default"])(t,{type:"已退出"})),x("/user/gatherMyDetail")}},b["default"].createElement("div",{className:y["default"].data_list_item},b["default"].createElement("div",{className:y["default"].item_header},b["default"].createElement("div",{className:(0,G["default"])(y["default"].name,y["default"].sub_item)},b["default"].createElement("img",{src:J["default"],alt:""})," ",t.name),b["default"].createElement("div",{className:(0,G["default"])(y["default"].sub_item,y["default"].conpon)},function(){switch(t.coupon_type){case 0:break;case 1:return b["default"].createElement("span",{className:y["default"].pink},t.coupon_info);case 2:return b["default"].createElement("span",{className:y["default"].cyan},t.coupon_info)}}()),b["default"].createElement("div",{className:(0,G["default"])(y["default"].sub_item,y["default"].days)})),b["default"].createElement("div",{className:y["default"].item_body},b["default"].createElement("div",{className:(0,G["default"])(y["default"].one,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.plan_income),b["default"].createElement("p",{className:y["default"].title},"预期收益(元)")),b["default"].createElement("div",{className:(0,G["default"])(y["default"].two,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.rate,"%"),b["default"].createElement("p",{className:y["default"].title},"预期年化利率")),b["default"].createElement("div",{className:(0,G["default"])(y["default"].three,y["default"].item)},b["default"].createElement("p",{className:y["default"].rate},t.invest_money),b["default"].createElement("p",{className:y["default"].title},"加入金额(元)")))))}))))),b["default"].createElement("div",{className:y["default"].button,onClick:function(){e.change(0,0),e.props.push("/home/productIndex")}},"立即购买"))}}]),t}(E.Component),I=function(e){return{pendingOne:e.listdata.getIn(["GATHER_MY_LIST_ONE","pending"]),dataOne:e.listdata.getIn(["GATHER_MY_LIST_ONE","data"]),endOne:e.listdata.getIn(["GATHER_MY_LIST_ONE","pageEnd"]),pendingTwo:e.listdata.getIn(["GATHER_MY_LIST_TWO","pending"]),dataTwo:e.listdata.getIn(["GATHER_MY_LIST_TWO","data"]),endTwo:e.listdata.getIn(["GATHER_MY_LIST_TWO","pageEnd"]),pendingThree:e.listdata.getIn(["GATHER_MY_LIST_THREE","pending"]),dataThree:e.listdata.getIn(["GATHER_MY_LIST_THREE","data"]),endThree:e.listdata.getIn(["GATHER_MY_LIST_THREE","pageEnd"]),headerData:e.infodata.getIn(["GATHER_MY_HEADER","data"]),Height:document.body.clientHeight-279}},D=function(e,t){return{pop:function(){e((0,R.goBack)())},push:function(t){e((0,R.push)(t))},gitGatherListOne:function(t){e({type:"GATHER_MY_LIST_ONE",params:[t]})},gitGatherListTwo:function(t){e({type:"GATHER_MY_LIST_TWO",params:[t]})},gitGatherListThree:function(t){e({type:"GATHER_MY_LIST_THREE",params:[t]})},gitHeaderData:function(){e({type:"GATHER_MY_HEADER"})},change:function(t){e({type:"PRODUCT_INDEX",index:t})},changeDc:function(t){e({type:"PRODUCT_INDEX_PAGE",index:t})},clean:function(){e({type:"CLEAR_DATA",key:"GATHER_MY_LIST_ONE"}),e({type:"CLEAR_DATA",key:"GATHER_MY_LIST_TWO"}),e({type:"CLEAR_DATA",key:"GATHER_MY_LIST_THREE"})},saveGather:function(t){e({type:"SAVE_GATHER_DATA",data:t})}}};t["default"]=(0,H.connect)(I,D)(z)},1503:function(e,t,a){t=e.exports=a(6)(),t.push([e.id,".container___2pJ6x{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___2pJ6x .header___36bzG{background-color:#00a6e2;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:40px;padding-bottom:40px;color:#fff}.container___2pJ6x .header___36bzG .left___3G-UZ{border-right:1px solid #ddd;padding-left:30px;-webkit-box-flex:1;-ms-flex:1;flex:1}.container___2pJ6x .header___36bzG .right___z6rjH{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:15px}.container___2pJ6x .header___36bzG .itemTitle___81XkP{font-size:12px;padding-top:6px;padding-bottom:15px}.container___2pJ6x .header___36bzG .itemContent___2PdwN{font-size:24px;padding-bottom:6px}.container___2pJ6x .header___36bzG .itemContent___2PdwN .icon___3dtLo{font-size:14px;position:relative;top:-10px}.container___2pJ6x .toggle___CHJuf{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.container___2pJ6x .toggle___CHJuf .item___2V2hw{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:41px}.container___2pJ6x .toggle___CHJuf .item___2V2hw.active___2BJ6f{border-bottom:3px solid #00a6e2}.container___2pJ6x .tabs___2H1yn .tab___3uS4o{width:33.33333%;float:left}.container___2pJ6x .clearFixed___2umAZ:after,.container___2pJ6x .clearFixed___2umAZ:before{display:table;content:''}.container___2pJ6x .clearFixed___2umAZ:after{clear:both}.container___2pJ6x .overFlow___3AdBe{overflow:hidden}.container___2pJ6x .box___3I1Um{background-color:#fff;margin-top:10px}.container___2pJ6x .data_list_item___zK7Ax{margin-left:15px}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD{font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;border-bottom:1px solid #ddd}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .sub_item___3vWLU{-webkit-box-flex:1;-ms-flex:1;flex:1}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .sub_item___3vWLU img{width:18px;float:left;margin-right:4px}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .conpon___1ER_h span{font-size:12px;padding:0 4px;color:#fff;border-radius:4px}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .conpon___1ER_h .pink___2b4u1{background-color:#feb278}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .conpon___1ER_h .cyan___2Yuxp{background-color:#7acb9f}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .days___2Jl2W{text-align:right;padding-right:15px}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 15px 10px 0}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .item___2V2hw{-webkit-box-flex:1;-ms-flex:1;flex:1;width:1%}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .item___2V2hw .title___AbVUL{font-size:12px;color:#a0a0a0}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .item___2V2hw .rate___NALTq{font-size:22px;padding-bottom:10px}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .one___3_aLL .rate___NALTq{color:#ff7701}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .two___2pKKm{text-align:center}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .three___1vCJA{text-align:right}.container___2pJ6x .button___1-Gb0{position:fixed;width:100%;bottom:0;height:44px;text-align:center;background-color:#00a6e2;line-height:44px;color:#fff}",""]),t.locals={container:"container___2pJ6x",header:"header___36bzG",left:"left___3G-UZ",right:"right___z6rjH",itemTitle:"itemTitle___81XkP",itemContent:"itemContent___2PdwN",icon:"icon___3dtLo",toggle:"toggle___CHJuf",item:"item___2V2hw",active:"active___2BJ6f",tabs:"tabs___2H1yn",tab:"tab___3uS4o",clearFixed:"clearFixed___2umAZ",overFlow:"overFlow___3AdBe",box:"box___3I1Um",data_list_item:"data_list_item___zK7Ax",item_header:"item_header___3A-WD",sub_item:"sub_item___3vWLU",conpon:"conpon___1ER_h",pink:"pink___2b4u1",cyan:"cyan___2Yuxp",days:"days___2Jl2W",item_body:"item_body___3604e",title:"title___AbVUL",rate:"rate___NALTq",one:"one___3_aLL",two:"two___2pKKm",three:"three___1vCJA",button:"button___1-Gb0"}},2037:function(e,t,a){e.exports=a.p+"static/media/icon-08.b253db18.png"},2375:[2577,1503]});