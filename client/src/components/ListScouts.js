import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import {images} from "./Images" 
import {FaTimes} from "react-icons/fa";

export default class ListScouts extends Component {
    render(){
        const listScouts = this.props.data.map(scout => {
            const imgIndex = scout.id - 1;
            return (
            <div key={scout.id}>
            <Card className="bg-dark">
                <div className="btn-align"> 
                    <span onClick={()=>this.props.deleteScout(scout)}><FaTimes className="delete" /></span>
                </div>
                <img src={images[imgIndex]} alt={scout.name} className="image"></img>
                <div>Name: <b>{scout.name}</b></div>
                <div>Description: <b>{scout.desc}</b></div>
                <div>Graduation Rank: <b>{scout.gradRank}</b></div>  
                </Card>
            <br></br>
            </div>)
        })
        return (
            <>
                {listScouts}
            </>
        )
    }
    
}

   

