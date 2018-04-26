import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import '../src/components/app.css';


//嵌入头部
import Header from './components/common/Header';


//增加路由页面
import Home from './components/Home';
import Setting from './components/Setting';
import Blog from './components/Blog';
import CDN from './components/Cdn';
import Article from './components/Article';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="appContent">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/Setting" component={Setting} />
            <Route path="/Blog" component={Blog} />
            <Route path="/CDN" component={CDN} />
            <Route path="/Article" component={Article} />
            <Route path="/Contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    	
    );
  }
}

export default App;
