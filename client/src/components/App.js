import React, { Component } from 'react';
import AddScouts from "./AddScouts"
import ListScouts from "./ListScouts"
import SearchScouts from "./SearchScouts"
import {without} from 'lodash'
import "../css/main.css"

class App extends Component {
  constructor(props){
    super(props);
	this.state = { 
		data: [],
		formDisplay: false
	};
    this.callAPI = this.callAPI.bind(this);
	this.clearRes = this.clearRes.bind(this);
	this.deleteScout= this.deleteScout.bind(this);
	this.toggleForm=this.toggleForm.bind(this);
  }

  componentDidMount() {
	  this.callAPI()
  }

  callAPI() {
	  fetch("http://localhost:9000/testAPI")
	  .then(res => res.json())
	  .then(res => this.setState({data: res}))
	  .catch(err => err);
	
  }

  clearRes() {
    this.setState({data: []})
  }

  deleteScout(scout){
	let temp = this.state.data;
	temp = without(temp, scout);
	this.setState({data: temp});
  }

  toggleForm() {
	  this.setState({formDisplay: !this.state.formDisplay})
  }
  render() {
    return (
	  <main className="background fullscreen">
		<div className="title ">
			<h1>Scout Regiment</h1>
		</div>
        <div className="container background">
			<div className="features">
				<AddScouts 
					formDisplay={this.state.formDisplay}
					toggleForm={this.toggleForm}
				/>
				<SearchScouts/>
				<ListScouts 
					data={this.state.data}
					deleteScout={this.deleteScout}/>
				
			</div>
		</div>
      </main>
    );
  }
}

export default App;