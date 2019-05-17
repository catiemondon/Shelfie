import React, { Component } from 'react'

//No state, no methods

class Product extends Component{
    constructor(){
        super()

    }



    render(){
        return(
            <div>
            <h1> {this.props.inventoryname} {this.props.inventoryprice}{this.props.inventoryimg} </h1>
            
            <div>
               {this.props.inventory}
            </div>
            </div>
        )
    }
}

export default Product