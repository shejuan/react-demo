import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
       账号： <input type="text" value="admin"/>
       密码 <input type="text" value="123456"/>
      </div>
    )
  }
}
export default Login
