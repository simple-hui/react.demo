import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

class Home extends Component {
	// 控制状态
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	// 初始化钩子函数
	componentDidMount() {
		// alert();
		axios.post('/api/home.do',{
			id: '111'
		}).then(resp=>{
			// react中赋值使用的setState
			this.setState({
				data: resp.data.data
			})
			console.log(this.state.data);
		})
	}




  render() {
    return (
      <div className="home">
        <img src={require("../assets/images/home.jpeg")} alt="home" className="homeImg" />
        <div className="homeDetail">
					<ul>
						for ( let i in data ) {
							<li>
							
							</li>
						}
						
					</ul>
        </div>
      </div>
    );
  }
}

export default Home;
