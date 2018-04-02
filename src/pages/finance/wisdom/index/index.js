/**
 * Created by xiangguo .
 * time:2018/4/2 0002.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from "react"
import {goBack,push} from "react-router-redux"
import {connect} from "react-redux"
import Scroll from "../../../../components/scroll"
 class Index extends Component{
    constructor(props){
        super(props);
            this.state={

            }
    }
    render(){
        const {
            height,
            getList,
            listData,
            pending,
            pageEnd
        }=this.props


        return(<Scroll height={height} fetch={()=>{getList()}} pending={pending} endType={pageEnd} >
            {
                listData&&listData.map((item,i)=>{
                    <div>
                        我是列
                    </div>
                })
            }

        </Scroll>)
    }
 }
 const mapStateToProps=(state)=>{
     const userData = state.infodata.getIn(["USER_INFO", 'data'])
     const is_login = (userData.code == 100) ? true : false
     const sessionUser=sessionStorage.getItem("bao-auth");
     let ListHeight= is_login && sessionUser ? document.body.clientHeight-100 : document.body.clientHeight-88-78;
      return({
           height:ListHeight,
           listData:state.listdata.getIn(["WISDOM_LIST",'data']),
           pending:state.listdata.getIn(["WISDOM_LIST",'pending']),
           pageEnd:state.listdata.getIn(["WISDOM_LIST",'pageEnd']),
          })

 };
const mapDispatchToProps=(dispatch)=>({
    getList(){
         dispatch({
             type:"WISDOM_LIST"
         })
    }


});


 export default connect(mapStateToProps,mapDispatchToProps)(Index)