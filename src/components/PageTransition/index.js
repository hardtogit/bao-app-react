import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import './index.css'
class PageTransition extends React.Component {
  constructor(porps){
     super(porps)
      this.state={
          pathnamePath:'',
          actionType:'',
          transitionGroup:''
      };
      this.rootArr=['/home','/home/productIndex','/home/findIndex','/home/myIndex']
  }
  componentWillMount(){
      const {
          location: {
              pathname,
              action
          },
      } = this.props;
     this.setState({
         pathnamePath:pathname,
         actionType:action
     })
  }
  componentWillReceiveProps(next){
     const nowPathName=this.props.location.pathname;
      const {
          location: {
              pathname,
              action
          },
      } = next;
     if(nowPathName==pathname){//如果路由没有变化则不产生动画
         return false;
     }
      // console.log(action)
      const {
          pathnamePath,
      }=this.state;
      if (action=='PUSH'||action=='REPLACE'){
        if (pathname.indexOf('/home')!=0){
            this.setState({
                transitionGroup:'swap-left'
            })
        }else {
            if(nowPathName.indexOf('/home')!=0){
                this.setState({
                    transitionGroup:'swap-right'
                })
            }else{
                // if(this.rootArr.indexOf(nowPathName)>this.rootArr.indexOf(pathname)){
                //     this.setState({
                //         transitionGroup:'swap-right'
                //     })
                // }else{
                //     this.setState({
                //         transitionGroup:'swap-left'
                //     })
                // }
                    this.setState({
                        transitionGroup:''
                    })
            }
        }
        this.setState({
            pathnamePath:pathname,
            actionType:action
        })
      }else {
        if (pathnamePath.indexOf('/home')!=0){
            this.setState({
                transitionGroup:'swap-right'
            })
        }else {
            this.setState({
                transitionGroup:'swap-right'
            })
        }
          this.setState({
              pathnamePath:pathname,
              actionType:action
          })
      }
  }
  render() {
    const {
      children,
      location: {
        pathname,
      },
    } = this.props;
    const {
        transitionGroup
    }=this.state;
    return (
      <ReactCSSTransitionGroup
        transitionName={transitionGroup}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        style={{position:'absolute',left:'0px',top:'0px',height:'100%',width:'100%',WebkitOverflowScrolling:'touch'}}
      >
        {React.cloneElement(children || <div />, { key: pathname })}
      </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  routing: state.routing.locationBeforeTransitions
});

export default connect(mapStateToProps)(PageTransition)
