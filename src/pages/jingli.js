import React, { Component } from 'react'
import Header from '../components/header'

class JingLi extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {value: '你可以在这里输入文字'};
  }

  change = () => {
    this.setState({value: '我是被改变了的'});
    console.log(this, '---this---')
  }
  // change(){
    // this.setState({value: '我是被改变了的'});
    // console.log(this, '---this---')

  // }
  render() {
    return (
      <div>
        <Header/>
        显示JingLi的内容
        <br/>
        {/* {this.props.location.query.name} */}
        我是用来接收路由传过来的参数的：{this.props.location.state.name}
        {/* {this.props.match.params.id} */}
        <br/>
        <input type="button" value= {this.state.value}/>
        {/* <input type="button" value= "change" onClick={()=> this.setState({value: '我是被改变了的'})}/> */}
        {/* <input type="button" value= "change" onClick={()=> this.change()}/> */}
        <input type="button" value= "change" onClick={this.change}/>
      </div>
    )
  }
}
export default JingLi