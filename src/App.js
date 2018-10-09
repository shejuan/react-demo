import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // NavLink,
  Switch
} from 'react-router-dom'

import Home from './pages/home'
import News from './pages/news'
import Course from './pages/course'
import JoinUs from './pages/joinUs'
import Jingli from './pages/jingli'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/login" component={Login}/> */}
          <Route path="/news" component={News}/>
          <Route path="/course" component={Course}/>
          <Route path="/joinUs" component={JoinUs} name="22"/>
          <Route path="/jingli" component={Jingli}/>
          {/* <Route path="/jingli/:id" component={Jingli}/> 路由传参的方式*/}
          <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
          {/* <Route path="*" render={(props) => <Redirect to='/error'/>}/> */}
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
