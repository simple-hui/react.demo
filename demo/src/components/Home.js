import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

class Home extends Component {
	demo() {
		axios.post('/api/home.do').then(resp=>{
			console.log(resp);
		})
	}

	

  render() {
    return (
      <div className="home">
        <img src={require("../assets/images/home.jpeg")} alt="home" className="homeImg" />
      </div>
    );
  }
}

export default Home;