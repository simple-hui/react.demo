import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <ul>
					<li>
						<NavLink to="/" exact activeClassName="active">home</NavLink>
					</li>
					<li>
						<NavLink to="/Setting" activeClassName="active">setting</NavLink>
					</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;