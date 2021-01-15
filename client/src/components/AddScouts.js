import React, { Component } from 'react';
import {Form} from "react-bootstrap/esm"
import {Button} from "react-bootstrap"
import "../css/form.css"
class AddScouts extends Component {
    constructor() {
        super()
        this.state = {}
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
                     <Form>
                         <Form.Group>
                             <Form.Label>Name</Form.Label>
                             <Form.Control type="text" placeholder="Enter name"></Form.Control>
                         </Form.Group>
                         <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description"></Form.Control>
                         </Form.Group>
                        <Form.Group>
                            <Form.Label>Graduation Rank</Form.Label>
                            <Form.Control type="number" placeholder="" min="1" max ="100"></Form.Control>
                        </Form.Group>
                        <Button>Submit</Button>
                     </Form>
                </div>
            </div>
        );
    }
}
export default AddScouts;
