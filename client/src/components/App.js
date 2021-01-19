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
		lastId: 0,
		formDisplay: false,
		orderBy: "name",
		orderDir: "asc",
		queryText: ""
	};
    this.callAPI = this.callAPI.bind(this);
	this.clearRes = this.clearRes.bind(this);
	this.deleteScout = this.deleteScout.bind(this);
	this.toggleForm = this.toggleForm.bind(this);
	this.changeOrder = this.changeOrder.bind(this);
	this.handleSearch = this.handleSearch.bind(this);
	this.addScout = this.addScout.bind(this);
  }

  handleSearch(e) {
	  this.setState({queryText: e.target.value})
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
	  .then(res => {
		let id = 0;
		res.map(() => id = id + 1)
		this.setState({
			data: res,
			lastId: id
		})
	  })
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

  addScout(scout){
	  let temp = this.state.data;
	  const nextId = this.state.lastId + 1
	  scout.id = nextId;
	  temp.unshift(scout);
	  this.setState({
		  data: temp,
		  lastId: nextId
	  })
  }
  render() {

	let filteredData = this.state.data;
	let orderDir = this.state.orderDir === 'asc'? 1 : -1;
	const NAME = 'name';
	const DESC = 'desc';
	const RANK = 'gradRank';

		filteredData = filteredData.sort((firstItem, secondItem) => {
			if(this.state.orderBy === RANK) {
				return (firstItem[RANK] - secondItem[RANK]) * orderDir
			} else {
				if(firstItem[NAME].toLowerCase() < secondItem[NAME].toLowerCase()){
					return -1 * orderDir;
				} else {
					return 1 * orderDir;
				}
			}
		
		}).filter(eachItem => { 
			return ( 
			eachItem[NAME].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
			eachItem[DESC].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
			eachItem[RANK].toString().includes(parseInt(this.state.queryText))
			)
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
					addScout={this.addScout}
				/>
				<SearchScouts
					orderBy={this.state.orderBy}
					orderDir={this.state.orderDir}
					changeOrder={this.changeOrder}
					handleSearch={this.handleSearch}/>
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