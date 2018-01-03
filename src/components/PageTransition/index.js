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
      }
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
      const {
          location: {
              pathname,
              action
          },
      } = next;
      const {
          pathnamePath,
      }=this.state;
      if (action=='PUSH'){
        if (pathname.indexOf('/home')!=0){
            this.setState({
                transitionGroup:'swap-left'
            })
        }else {
            this.setState({
                transitionGroup:''
            })
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
        style={{position:'absolute',left:'0px',top:'0px',height:'100%',width:'100%'}}
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
