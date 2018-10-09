import React, { Component } from 'react'
/** * callbackParent:省市区组件向父组件传值回调方法 
  @param {int,string} provinceID 省ID 
  @param {int,string} cityID 市ID 
  @param {int,string} districtID 县区ID 
 **/
class JionChlid extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      myNumber: '生命周期',
    }
  }

  componentDidMount() {        
    var provinceID = "11";        
    var cityID= "22";        
    var districtID= "33";        
    //子组件向父组件传值的回调方法        
    this.props.callbackParent(provinceID, cityID, districtID);
  }

  render() {
    return (
      <div>我是子组件{this.props.name}</div>
    )
  }
}
export default JionChlid