import React,{Component} from 'react'
import style from './index.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'
class Publiclist extends Component{
    static propTypes={
        listData:PropTypes.object
    }
    static defaultProps={
        listData:{null:true}
    }
    render(){
        if(this.props.listData.null){
            return(<div></div>)
        }else{
           return(
            <div className={style.messageContent}>
              {
                  
                  this.props.listData.map((item,i)=>{
                      const {title,content,date,type,is_read}=item
                      return(
                          <div className={style.massageList} key={i}>
                            <div className={style.massageOne}>
                            <div className={style.massageTitle}>
                            <span className={classNames(style.massageIcon,type==1&&style.system||style.notice)}>{is_read=='0'&&'New'||type==1&&'系统'||'公告'}</span>
                            <span className={style.massageNew}>{title}</span>
                            </div>
                            <div className={style.massageBody}>
                            {content}
                            </div>
                            <div className={style.massagefooter}>
                             {date}
                            </div>
                            <span className={style.glyphiconChevronRight}></span>
                            </div>
                        </div>
                      )
                  })
              }
            </div>
            )
        }
    }
}
export default Publiclist