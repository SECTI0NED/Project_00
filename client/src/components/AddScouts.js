import React, { Component } from 'react';
import {Form} from "react-bootstrap/esm"
import {Button} from "react-bootstrap"
import "../css/form.css"
class AddScouts extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            desc: "",
            gradRank: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        const {value, name} = e.target
        this.setState({[name]: value})
    }


    handleAdd(e) {
        e.preventDefault();
        let temp = {
            name: this.state.name,
            desc: this.state.desc,
            gradRank: this.state.gradRank
        }
        this.props.addScout(temp);

        this.setState({ 
            name: "",
            desc: "",
            gradRank: 0
        })

        this.props.toggleForm()
    }
    render() {
        return (
            <div className={'card bg-dark ' + (this.props.formDisplay ? '' : 'add-scout')}>

                <span 
                    className="header"
                    onClick={this.props.toggleForm}>
                    <h2>Add Scouts</h2>
                </span>

                <div className="card-body bg-dark">
                     <Form onSubmit={this.handleAdd}>
                         <Form.Group>
                             <Form.Label>Name</Form.Label>
                             <Form.Control 
                                type="text" 
                                placeholder="Enter name"
                                name='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                            ></Form.Control>
                         </Form.Group>
                         <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter description"
                                name='desc'
                                value={this.state.desc}
                                onChange={this.handleChange}
                            ></Form.Control>
                         </Form.Group>
                        <Form.Group>
                            <Form.Label>Graduation Rank</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="" 
                                min="1" 
                                max ="100"
                                name='gradRank'
                                value={this.state.gradRank}
                                onChange={this.handleChange}
                                ></Form.Control>
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                     </Form>
                </div>
            </div>
        );
    }
}
export default AddScouts;
