import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from '../../../components/scroll'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class findNotify extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
     this.props.getNotice();
     this.props.setRead()
    }
    componentWillUnmount(){  
      this.props.clearData('FETCH_MY_MASSAGE_S');
      this.props.clearData('GET_NOTICE');
    }
    oneDom=(item,key,right)=>{
        const {title,content,description,date,msgKey,id,type,is_read}=item;
        let Right;
        let fn;
         if (right){
             Right=<span className={styles.glyphiconChevronRight}></span>;
         }
        let    massageTitle=<div><span className={classNames(styles.massageIcon,styles.system)}>{is_read=='0'&&'New'||type==1&&'系统'||'公告'}</span>
            <span className={styles.massageNew}>{title}</span></div>;
        if(type!==1){
            fn=this.props.push;
            massageTitle=<div>
                <span className={classNames(styles.massageIcon,styles.notice)}>{is_read=='0'&&'New'||type==1&&'系统'||'公告'}</span>
                <span className={styles.massageNew}>{title}</span>
            </div>
        }
        return(
            <div className={styles.massageList} key={key} onClick={()=>{fn&&fn()}}>
                <div className={styles.massageOne}>
                    <div className={styles.massageTitle}>
                        {
                            massageTitle
                        }

                    </div>
                    <div className={styles.massageBody} dangerouslySetInnerHTML={{__html:content}}>

                    </div>
                    <div className={styles.massagefooter}>
                        {date}
                    </div>
                    {Right}
                </div>
            </div>
        )
    }
    list(){
        const {
            listData,
            pending,
            end,
            noticeData
        }=this.props;
         const oneDom=this.oneDom(noticeData,-1,true);
        const Height=document.body.clientHeight-44;
        return(<Scroll height={Height} fetch={()=>{this.props.getList(1)}}
                       isLoading={pending} distance={20} endType={end}
                       titleChild={oneDom}
                >
            {
                listData&&listData.map((item,i)=>{
                   return(this.oneDom(item,i))
                })
            }
        </Scroll>)
    }
    render(){
        const {
            noticeData,
            pop
        }=this.props;
        let listDom;
       if (noticeData){
              listDom=this.list()
       }
        return(
             <div className={styles.findMessage} >
             <div className={styles.findMessageHeader}><NavBar title="商城通知" onLeft={pop}/>
             </div>
              <div className={styles.messageContent}>
                  {
                      listDom
                  }
            </div>
            </div>
        )
    }
}
const initMymassege=(state,own)=>{
    return{
     noticeData:state.listdata.getIn(['GET_NOTICE','data','0']),
     listData:state.listdata.getIn(['FETCH_MY_MASSAGE_S','data']),
     pending:state.listdata.getIn(['FETCH_MY_MASSAGE_S','pending']),
     end:state.listdata.getIn(['FETCH_MY_MASSAGE_S','pageEnd'])
    }
}
const initMymassegefn=(dispath,own)=>({
      getNotice(){
           dispath({
               type:'GET_NOTICE'
           })
      },
      setRead(){
           dispath({
                   type:'SET_READ',
                 params:[{type:1}]
            })
      },
       getList(id){
          dispath({
              type:'FETCH_MY_MASSAGE_S',
              params:[id]
          }) 
       },
       clearData(key){
         dispath({
              type:'CLEAR_DATA',
              key:key
          }) 
       },
    pop(){
         dispath(goBack())
    },
    push(){
        dispath(push('/find/announcement'))
    }
})
export default connect(initMymassege,initMymassegefn)(findNotify)