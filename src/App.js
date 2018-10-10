import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // Route,
  // NavLink,
  // Switch
} from 'react-router-dom'

// import Home from './pages/home'
// import News from './pages/news'
// import Course from './pages/course'
// import JoinUs from './pages/joinUs'
// import Jingli from './pages/jingli'

import { renderRoutes } from 'react-router-config'
import demo from '@/router/modules/demo'
let routes = []
let myroute = routes.concat(demo)
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Router>
      //   <Switch>
      //     <Route exact path="/" component={Home}/>
      //     <Route path="/news" component={News}/>
      //     <Route path="/course" component={Course}/>
      //     <Route path="/joinUs" component={JoinUs} name="22"/>
          // <Route path="/jingli" component={Jingli}/>
      //     <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
      //   </Switch>
      // </Router>
      // </div>
      <div className="App">
        <Router>
        {/* <Switch> */}
        {/* <Route path="/jingli" component={Jingli}/> */}

        {renderRoutes(myroute)}
        {/* </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
