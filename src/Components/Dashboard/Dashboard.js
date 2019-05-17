import React, { Component } from 'react'
import Product from '../Product/Product';

//Will have no state and no methods

class Dashboard extends Component{
    constructor(){
        super()
    }



    render(){
        const inventory= this.props.inventory.map((item, i)=>{
          return(
            <Product key={i}  inventoryname={item.name} inventoryprice={item.price} inventoryimg={item.img} />
          )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Product inventory={inventory} />
            </div>    

        )
    }
}

export default Dashboard