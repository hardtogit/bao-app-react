webpackJsonp([49],{778:function(e,t,a){e.exports=a.p+"static/media/icon-08.b253db18.png"},1056:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c["default"]?(0,c["default"])(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=a(2),o=l(d),r=a(5),c=l(r),f=a(3),s=l(f),u=a(44),m=l(u),p=a(4),x=l(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),(0,o["default"])(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),b=a(1),E=l(b),g=a(2063),y=l(g),N=a(11),v=l(N),T=a(27),w=l(T),A=a(24),k=(l(A),a(778)),J=l(k),L=a(15),H=l(L),z=a(10),G=a(9),R=function(e){function t(e){_(this,t);var a=n(this,(t.__proto__||(0,x["default"])(t)).call(this,e));return a.clientWidth=document.body.clientWidth,a.clientHeight=document.body.clientHeight,a.translateStyle={one:{transform:"translateX(0px)"},two:{transform:"translateX("+-a.clientWidth+"px)"},three:{transform:"translateX("+2*-a.clientWidth+"px)"}},a.state={index:0,text:"立即购买"},a}return i(t,e),h(t,[{key:"componentDidMount",value:function(){this.refs.tabs.style.width=3*this.clientWidth+"px",this.props.gitHeaderData()}},{key:"componentWillReceiveProps",value:function(e){e.dataOne,e.dataTwo,e.dataThree}},{key:"render",value:function(){var e=this,t=this.state,a=t.index,l=(t.translateStyle,void 0);switch(a){case 0:l=this.translateStyle.one;break;case 1:l=this.translateStyle.two;break;case 2:l=this.translateStyle.three}var _=this.props,n=_.dataOne,i=_.pendingOne,d=_.endOne,o=_.dataTwo,r=_.pendingTwo,c=_.endTwo,f=_.dataThree,s=_.pendingThree,u=_.endThree,p=_.headerData,x=_.push,h=_.pop,b=_.Height;return E["default"].createElement("div",{className:y["default"].container},E["default"].createElement(v["default"],{onLeft:h},"我的聚点+"),E["default"].createElement("div",{className:y["default"].header},E["default"].createElement("div",{className:y["default"].left},E["default"].createElement("p",{className:y["default"].itemTitle},"待收本息（利息",p&&p.data.interest,"）"),E["default"].createElement("p",{className:y["default"].itemContent},p&&p.data.leftRevenue," ",E["default"].createElement("span",{className:y["default"].icon},"￥"))),E["default"].createElement("div",{className:y["default"].right},E["default"].createElement("p",{className:y["default"].itemTitle},"历史累积收益"),E["default"].createElement("p",{className:y["default"].itemContent},p&&p.data.historyRightRevenue," ",E["default"].createElement("span",{className:y["default"].icon},"￥")))),E["default"].createElement("div",{className:y["default"].toggle},E["default"].createElement("div",{onClick:function(){e.setState({index:0})},className:(0,H["default"])(y["default"].item,0==this.state.index?y["default"].active:"")},"持有中"),E["default"].createElement("div",{onClick:function(){e.setState({index:1})},className:(0,H["default"])(y["default"].item,1==this.state.index?y["default"].active:"")},"退出中"),E["default"].createElement("div",{onClick:function(){e.setState({index:2})},className:(0,H["default"])(y["default"].item,2==this.state.index?y["default"].active:"")},"已退出")),E["default"].createElement("div",{className:y["default"].overFlow},E["default"].createElement("div",{ref:"tabs",className:(0,H["default"])(y["default"].tabs,y["default"].clearFixed),style:l},E["default"].createElement("div",{className:y["default"].tab},E["default"].createElement(w["default"],{height:b,fetch:function(){e.props.gitGatherListOne({type:1})},isLoading:i,distance:20,endType:d},n&&n.map(function(e,t){return E["default"].createElement("div",{key:t,className:y["default"].box,onClick:function(){x("/user/gatherMyDetail?type=持有中&data="+(0,m["default"])(e))}},E["default"].createElement("div",{className:y["default"].data_list_item},E["default"].createElement("div",{className:y["default"].item_header},E["default"].createElement("div",{className:(0,H["default"])(y["default"].name,y["default"].sub_item)},E["default"].createElement("img",{src:J["default"],alt:""})," ",e.name),E["default"].createElement("div",{className:(0,H["default"])(y["default"].sub_item,y["default"].conpon)},function(){switch(e.coupon_type){case 0:break;case 1:return E["default"].createElement("span",{className:y["default"].pink},e.coupon_info);case 2:return E["default"].createElement("span",{className:y["default"].cyan},e.coupon_info)}}()),E["default"].createElement("div",{className:(0,H["default"])(y["default"].sub_item,y["default"].days)},e.remain_time,"天")),E["default"].createElement("div",{className:y["default"].item_body},E["default"].createElement("div",{className:(0,H["default"])(y["default"].one,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.plan_income),E["default"].createElement("p",{className:y["default"].title},"预期收益(元)")),E["default"].createElement("div",{className:(0,H["default"])(y["default"].two,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.rate,"%"),E["default"].createElement("p",{className:y["default"].title},"预期年化利率")),E["default"].createElement("div",{className:(0,H["default"])(y["default"].three,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.invest_money),E["default"].createElement("p",{className:y["default"].title},"加入金额(元)")))))}))),E["default"].createElement("div",{className:y["default"].tab},E["default"].createElement(w["default"],{height:b,fetch:function(){e.props.gitGatherListTwo({type:2})},isLoading:r,distance:20,endType:c},o&&o.map(function(e,t){return E["default"].createElement("div",{key:t,className:y["default"].box,onClick:function(){x("/user/gatherMyDetail?type=退出中&data="+(0,m["default"])(e))}},E["default"].createElement("div",{className:y["default"].data_list_item},E["default"].createElement("div",{className:y["default"].item_header},E["default"].createElement("div",{className:(0,H["default"])(y["default"].name,y["default"].sub_item)},E["default"].createElement("img",{src:J["default"],alt:""})," ",e.name),E["default"].createElement("div",{className:(0,H["default"])(y["default"].sub_item,y["default"].conpon)},function(){switch(e.coupon_type){case 0:break;case 1:return E["default"].createElement("span",{className:y["default"].pink},e.coupon_info);case 2:return E["default"].createElement("span",{className:y["default"].cyan},e.coupon_info)}}()),E["default"].createElement("div",{className:(0,H["default"])(y["default"].sub_item,y["default"].days)})),E["default"].createElement("div",{className:y["default"].item_body},E["default"].createElement("div",{className:(0,H["default"])(y["default"].one,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.plan_income),E["default"].createElement("p",{className:y["default"].title},"预期收益(元)")),E["default"].createElement("div",{className:(0,H["default"])(y["default"].two,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.rate,"%"),E["default"].createElement("p",{className:y["default"].title},"预期年化利率")),E["default"].createElement("div",{className:(0,H["default"])(y["default"].three,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.invest_money),E["default"].createElement("p",{className:y["default"].title},"加入金额(元)")))))}))),E["default"].createElement("div",{className:y["default"].tab},E["default"].createElement(w["default"],{height:b,fetch:function(){e.props.gitGatherListThree({type:3})},isLoading:s,distance:20,endType:u},f&&f.map(function(e,t){return E["default"].createElement("div",{key:t,className:y["default"].box,onClick:function(){x("/user/gatherMyDetail?type=已退出&data="+(0,m["default"])(e))}},E["default"].createElement("div",{className:y["default"].data_list_item},E["default"].createElement("div",{className:y["default"].item_header},E["default"].createElement("div",{className:(0,H["default"])(y["default"].name,y["default"].sub_item)},E["default"].createElement("img",{src:J["default"],alt:""})," ",e.name),E["default"].createElement("div",{className:(0,H["default"])(y["default"].sub_item,y["default"].conpon)},function(){switch(e.coupon_type){case 0:break;case 1:return E["default"].createElement("span",{className:y["default"].pink},e.coupon_info);case 2:return E["default"].createElement("span",{className:y["default"].cyan},e.coupon_info)}}()),E["default"].createElement("div",{className:(0,H["default"])(y["default"].sub_item,y["default"].days)})),E["default"].createElement("div",{className:y["default"].item_body},E["default"].createElement("div",{className:(0,H["default"])(y["default"].one,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.plan_income),E["default"].createElement("p",{className:y["default"].title},"预期收益(元)")),E["default"].createElement("div",{className:(0,H["default"])(y["default"].two,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.rate,"%"),E["default"].createElement("p",{className:y["default"].title},"预期年化利率")),E["default"].createElement("div",{className:(0,H["default"])(y["default"].three,y["default"].item)},E["default"].createElement("p",{className:y["default"].rate},e.invest_money),E["default"].createElement("p",{className:y["default"].title},"加入金额(元)")))))}))))),E["default"].createElement("div",{className:y["default"].button},"立即购买"))}}]),t}(b.Component),I=function(e){return{pendingOne:e.listdata.getIn(["GATHER_MY_LIST_ONE","pending"]),dataOne:e.listdata.getIn(["GATHER_MY_LIST_ONE","data"]),endOne:e.listdata.getIn(["GATHER_MY_LIST_ONE","pageEnd"]),pendingTwo:e.listdata.getIn(["GATHER_MY_LIST_TWO","pending"]),dataTwo:e.listdata.getIn(["GATHER_MY_LIST_TWO","data"]),endTwo:e.listdata.getIn(["GATHER_MY_LIST_TWO","pageEnd"]),pendingThree:e.listdata.getIn(["GATHER_MY_LIST_THREE","pending"]),dataThree:e.listdata.getIn(["GATHER_MY_LIST_THREE","data"]),endThree:e.listdata.getIn(["GATHER_MY_LIST_THREE","pageEnd"]),headerData:e.infodata.getIn(["GATHER_MY_HEADER","data"]),Height:document.body.clientHeight-235}},S=function(e,t){return{pop:function(){e((0,G.goBack)())},push:function(t){e((0,G.push)(t))},gitGatherListOne:function(t){e({type:"GATHER_MY_LIST_ONE",params:[t]})},gitGatherListTwo:function(t){e({type:"GATHER_MY_LIST_TWO",params:[t]})},gitGatherListThree:function(t){e({type:"GATHER_MY_LIST_THREE",params:[t]})},gitHeaderData:function(){e({type:"GATHER_MY_HEADER"})}}};t["default"]=(0,z.connect)(I,S)(R)},1482:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".container___2pJ6x{position:absolute;width:100%;height:100%;left:0;top:0;overflow:auto;padding-top:44px;background-color:#f0eff5}.container___2pJ6x .header___36bzG{background-color:#00a6e2;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:40px;padding-bottom:40px;color:#fff}.container___2pJ6x .header___36bzG .left___3G-UZ{border-right:1px solid #ddd;padding-left:30px;-webkit-box-flex:1;-ms-flex:1;flex:1}.container___2pJ6x .header___36bzG .right___z6rjH{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:15px}.container___2pJ6x .header___36bzG .itemTitle___81XkP{font-size:12px;padding-top:6px;padding-bottom:15px}.container___2pJ6x .header___36bzG .itemContent___2PdwN{font-size:24px;padding-bottom:6px}.container___2pJ6x .header___36bzG .itemContent___2PdwN .icon___3dtLo{font-size:14px;position:relative;top:-10px}.container___2pJ6x .toggle___CHJuf{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.container___2pJ6x .toggle___CHJuf .item___2V2hw{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:41px}.container___2pJ6x .toggle___CHJuf .item___2V2hw.active___2BJ6f{border-bottom:3px solid #00a6e2}.container___2pJ6x .tabs___2H1yn .tab___3uS4o{width:33.33333%;float:left}.container___2pJ6x .clearFixed___2umAZ:after,.container___2pJ6x .clearFixed___2umAZ:before{display:table;content:''}.container___2pJ6x .clearFixed___2umAZ:after{clear:both}.container___2pJ6x .overFlow___3AdBe{overflow:hidden}.container___2pJ6x .box___3I1Um{background-color:#fff;margin-top:10px}.container___2pJ6x .data_list_item___zK7Ax{margin-left:15px}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD{font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;border-bottom:1px solid #ddd}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .sub_item___3vWLU{-webkit-box-flex:1;-ms-flex:1;flex:1}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .sub_item___3vWLU img{width:18px;float:left;margin-right:4px}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .conpon___1ER_h span{font-size:12px;padding:0 4px;color:#fff;border-radius:4px}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .conpon___1ER_h .pink___2b4u1{background-color:#feb278}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .conpon___1ER_h .cyan___2Yuxp{background-color:#7acb9f}.container___2pJ6x .data_list_item___zK7Ax .item_header___3A-WD .days___2Jl2W{text-align:right;padding-right:15px}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 15px 10px 0}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .item___2V2hw{-webkit-box-flex:1;-ms-flex:1;flex:1;width:1%}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .item___2V2hw .title___AbVUL{font-size:12px;color:#a0a0a0}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .item___2V2hw .rate___NALTq{font-size:22px;padding-bottom:10px}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .one___3_aLL .rate___NALTq{color:#ff7701}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .two___2pKKm{text-align:center}.container___2pJ6x .data_list_item___zK7Ax .item_body___3604e .three___1vCJA{text-align:right}.container___2pJ6x .button___1-Gb0{position:fixed;width:100%;bottom:0;height:44px;text-align:center;background-color:#00a6e2;line-height:44px;color:#fff}",""]),t.locals={container:"container___2pJ6x",header:"header___36bzG",left:"left___3G-UZ",right:"right___z6rjH",itemTitle:"itemTitle___81XkP",itemContent:"itemContent___2PdwN",icon:"icon___3dtLo",toggle:"toggle___CHJuf",item:"item___2V2hw",active:"active___2BJ6f",tabs:"tabs___2H1yn",tab:"tab___3uS4o",clearFixed:"clearFixed___2umAZ",overFlow:"overFlow___3AdBe",box:"box___3I1Um",data_list_item:"data_list_item___zK7Ax",item_header:"item_header___3A-WD",sub_item:"sub_item___3vWLU",conpon:"conpon___1ER_h",pink:"pink___2b4u1",cyan:"cyan___2Yuxp",days:"days___2Jl2W",item_body:"item_body___3604e",title:"title___AbVUL",rate:"rate___NALTq",one:"one___3_aLL",two:"two___2pKKm",three:"three___1vCJA",button:"button___1-Gb0"}},2063:[2230,1482]});