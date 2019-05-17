import React, { Component } from 'react'

//No state, no methods

class Product extends Component{
    constructor(){
        super()

    }

    handleDelete=()=>{
        const {deleteProduct}= this.props
        
        deleteProduct(this.props.id)
    }

    render(){
        return(
            <div>
            <h1> {this.props.inventoryname} </h1>
            <div>{this.props.inventoryprice}{this.props.inventoryimg} {this.props.inventory}
            <button>edit</button>
            <button onClick={this.handleDelete}>delete</button>
            </div>
               
           
          
            </div>
        )
    }
}

export default Product