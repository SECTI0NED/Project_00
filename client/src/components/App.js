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
		formDisplay: false,
		orderBy: "name",
		orderDir: "asc"
	};
    this.callAPI = this.callAPI.bind(this);
	this.clearRes = this.clearRes.bind(this);
	this.deleteScout= this.deleteScout.bind(this);
	this.toggleForm=this.toggleForm.bind(this);
	this.changeOrder=this.changeOrder.bind(this);
  }

  changeOrder(order, direction){
	this.setState({
		orderBy: order, 
		orderDir: direction
	})
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
	let filteredData = this.state.data;
	let orderDir = this.state.orderDir === 'asc'? 1 : -1;

	filteredData.sort((firstItem, secondItem) => {

		if(this.state.orderBy === 'name'){
			if(firstItem[this.state.orderBy].toLowerCase() < secondItem[this.state.orderBy].toLowerCase() ){
				return -1 * orderDir;
			} else {
				return 1 * orderDir;
			}
		} else {
			if(firstItem[this.state.orderBy] < secondItem[this.state.orderBy]){
				return (firstItem - secondItem) * orderDir;
			} else {
				return (secondItem - firstItem) * orderDir;
			}
		}
		
	})
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
				<SearchScouts
					orderBy={this.state.orderBy}
					orderDir={this.state.orderDir}
					changeOrder={this.changeOrder}/>
				<ListScouts 
					data={filteredData}
					deleteScout={this.deleteScout}
				/>	
			</div>
		</div>
      </main>
    );
  }
}

export default App;