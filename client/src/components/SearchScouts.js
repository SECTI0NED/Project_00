
import React, { Component } from 'react'
import {Form} from "react-bootstrap/esm"
export default class SearchScouts extends Component {
    render() {
        return (
            <div className="card bg-dark">
                <div className="search">
                    <div className="search-bar">
                        <Form.Control type="text"></Form.Control>
                    </div>     
                    <button className="sort-btn"><b>Sort By</b></button>         
                </div>
            </div>
        )
    }
}
