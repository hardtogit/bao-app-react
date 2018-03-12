/**
 * Created by xiangguo .
 * time:2018/1/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../assets/images/defaultImg.png'
import errorImg from '../../assets/images/errorImg.png'
class Index extends React.Component {
    constructor(props){
        super(props)
        this.state={
           src:defaultImg
        }
    }
    static propTypes={
        src:PropTypes.string,
        scrollDom:PropTypes.object,
        isScroll:PropTypes.object,
    };
    static defaultProps={
        src:defaultImg
    };
    componentDidMount(){
        const $this=this;
        if($($this.refs.img).offset().top<document.body.clientHeight){
            let img=new Image();
            img.src=$this.props.src;
            img.addEventListener('load',function () {
                $this.setState({
                    src:$this.props.src
                })
            },false);
            img.addEventListener('error',function () {
                $this.setState({
                    src:errorImg
                })
            },false)
        }
        $(this.props.scrollDom.refs.scroll).scroll(function () {
            if($this.state.src==$this.props.src||$this.state.src==errorImg){
                return false;
            }
            if($($this.refs.img).offset().top<document.body.clientHeight){
                let img=new Image();
                img.src=$this.props.src;
                img.addEventListener('load',function () {
                    $this.setState({
                        src:$this.props.src
                    })
                },false);
                img.addEventListener('error',function () {
                    $this.setState({
                        src:errorImg
                    })
                },false)
            }
        })
    }
    render(){
        const {src}=this.state;
        return(
            <img ref="img" className={this.props.className} src={src} alt=""/>
        )
    }
}
export default Index