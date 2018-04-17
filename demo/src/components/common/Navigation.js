import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <ul>
					<li className="clearfix">
						<NavLink to="/" exact activeClassName="active">home</NavLink>
					</li>
					<li className="clearfix">
						<NavLink to="/Setting" activeClassName="active">setting</NavLink>
					</li>
          <li className="clearfix">
            <NavLink to="/Blog" activeClassName="active">Blog</NavLink>
          </li>
          <li className="clearfix">
            <NavLink to="/CDN" activeClassName="active">CDN</NavLink>
          </li>
          <li className="clearfix">
            <NavLink to="/Article" activeClassName="active">Article</NavLink>
          </li>
          <li className="clearfix">
            <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;