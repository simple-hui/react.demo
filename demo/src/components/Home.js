import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={require("../assets/images/home.jpeg")} alt="home" className="homeImg" />
      </div>
    );
  }
}

export default Home;