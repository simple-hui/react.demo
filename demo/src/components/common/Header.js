import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import './header.css';
class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<h1 className="logo">
      		<Link to="/" className="clearfix">
						<img src={require("../../assets/images/logo.svg")} alt="主页" />
						<span>Mer Blod</span>
					</Link>
      	</h1>
        <Navigation />
      </div>
    );
  }
}

export default Header;