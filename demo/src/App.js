import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import '../src/components/app.css';

//嵌入头部
import Header from './components/common/Header';

//嵌入底部
// import Footer from './components/common/Footer';

//增加路由页面
import Home from './components/Home';
import Setting from './components/Setting';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="appContent">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/Setting" component={Setting} />
          </div>
        </BrowserRouter>
        {/*<Footer />*/}
      </div>
    	
    );
  }
}

export default App;
