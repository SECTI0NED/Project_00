
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
                    <button 
                        className="sort-btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        ><b>Sort By:</b></button>
                    <div className="sort-menu dropdown-menu dropdown-menu-right">
                        <button 
                            className={'sort-by dropdown-item ' + (this.props.orderBy === 'name' ? 'active' : '')}
                            onClick={ e => this.props.changeOrder('name', this.props.orderDir)}
                            href="#">
                            Name
                        </button>
                        <button 
                            className={'sort-by dropdown-item ' + (this.props.orderBy === 'gradRank' ? 'active' : '')}
                            onClick={ e => this.props.changeOrder('gradRank', this.props.orderDir)}
                            href="#">
                           Graduation Rank
                        </button>
                        <div role="separator" className="dropdown-divider"></div>
                        <button 
                            className={'sort-by dropdown-item ' + (this.props.orderDir === 'asc' ? 'active' : '')}
                            onClick={ e => this.props.changeOrder(this.props.orderBy, 'asc')}>
                            Ascending
                        </button>
                        <button 
                            className={'sort-by dropdown-item ' + (this.props.orderDir === 'desc' ? 'active' : '')}
                            onClick={ e => this.props.changeOrder(this.props.orderBy, 'desc')}>
                            Descending
                        </button>
                    </div>         
                </div>
            </div>
        )
    }
}
