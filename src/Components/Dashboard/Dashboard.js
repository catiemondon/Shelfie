import React, { Component } from 'react'
import Product from '../Product/Product';
import axios from 'axios'

//Will have no state and no methods

class Dashboard extends Component{
    constructor(){
        super()
    }



    handleDeleteProduct=(id)=>{
        axios.delete(`/api/inventory/${id}`).then((res)=>{
            this.props.getinventory()
        })
    }

    render(){
        const inventory= this.props.inventory.map((item, i)=>{
          return(
            <Product key={i} item={item} inventoryname={item.name} inventoryprice={item.price} inventoryimg={item.img} id={item.id}  deleteProduct={this.handleDeleteProduct}/>
          )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Product inventory={inventory}  />
            </div>    

        )
    }
}

export default Dashboard