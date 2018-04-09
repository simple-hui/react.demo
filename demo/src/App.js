import React, { Component } from 'react';
// import { Router, Rroute, Switch } from 'react-router';

//增加路由页面
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

// React.render({
// 	<Router>
// 		<Route path="/" component={App}>
// 			<Route path="/home" component={home}></Route>
// 		</Route>
// 	</Router>
// })

export default App;
