import React, { Component } from 'react'
import JionChild from './jion-child'
import '@/config'

var myStyle = {
  fontSize: 30,
  color: '#199919'
};
class JoinUs extends Component {
  cityID = "----"
  provinceID = "===="

  constructor(props,context) {
    super(props,context);
    this.state = {
      myNumber: '生命周期',
      provinceID : "=0=",
    }
    // cityID = ''
  }

  callbackParent = (proID, cID, disID) => {
    this.setState({provinceID: proID})
    this.cityID = cID;
    this.provinceID = proID;
    // this.state.districtID = disID;
  }
  render() {
    return (
      <div>
        <JionChild name="8888" callbackParent={this.callbackParent}></JionChild>
        <div><h3><span style={myStyle}>我这个是拿到初始化的值：</span><span style = {{color:'red'}}>{this.state.myNumber}</span></h3></div>
        <ul>
          <li>{this.state.provinceID}</li>
          <li>{this.cityID}</li>
          <li>{this.provinceID}</li>
          <li>名称：{global.constants.name}</li>
        </ul>
      </div>
    );
  }
}
export default JoinUs
