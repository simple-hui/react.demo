import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

class Home extends Component {
	demo() {
		alert();
		axios.post('/api/home.do').then(resp=>{
			console.log(resp);
		})
	}


	

  render() {
    return (
      <div className="home">
        <img src={require("../assets/images/home.jpeg")} alt="home" className="homeImg" onClick={this.demo} />
      </div>
    );
  }
}

export default Home;