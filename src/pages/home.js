import React, { Component } from 'react'
import Header from '../components/header'
import api from '../api/index';

let data = '显示首页的内容';

class Home extends Component {
  myClick(val) {
    console.log('我要进行的是路由传参', val)
    // var mypath = {
    //   pathname:'/jingli',
    //   query:{name:val},
    // }

    var mypath1 = {
      pathname:'/jingli/',
      state:{name:val},
    }

    // var list = {
    //   name: 'shejuan',
    //   age: '18'
    // }
    // list = JSON.stringify(list)
    // state，query这两种传递方式 都是不以明文在url 上进行传递 
    this.props.history.push(mypath1) 
    // this.props.history.push(mypath)  
    console.log(this.props, '----')
    // this.props.history.push(`/jingli/${list}`)
    this.getTopics()
  }

  async getTopics() {
    console.log('1', api);
    try {
      let resultData = await api.demo.sendInfo({ page: 1, tab: 'ask' });
      console.log(resultData, 'get-----');
      this.postTopics()
    } catch (error) {
      console.log(error);
    }
  }

  async postTopics() {
    try {
      let data = {
        accesstoken: '用户的accessToken',
        title: '标题',
        tab: 'ask',
        content: '主体内容'
      };
      let resultData = await api.demo.postInfo(data);
      console.log(resultData, 'post-----');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Header/>
        {data}
        <input type="button" value="点击我跳转到经理的页面" onClick={() => {this.myClick('我是home跳转的val')}}/>
        {/* <input type="button" value="点击我跳转到经理的页面" onClick={() => {this.props.history.push("/jingli")}}/> */}
      </div>
    )
  }
  
}
export default Home