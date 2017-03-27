import React from 'react'
const {PulseLoader} = require('../../../customized_node_modules/halogen')

export default class InlineLoading extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    className:React.PropTypes.string,
    text:React.PropTypes.string
  }

  static defaultProps = {
    size: '10px',
    color: '#00a6e2',
    className:'',
    text:''
  }

  render() {
    const {
      color,
      size,
      text,
     className
    } = this.props
    return (
        <span className={className}>
      <span >
        <PulseLoader color={color} size={size}/>
      </span>
      <span>
      {text}
        </span>
       </span>
    )
  }
}
