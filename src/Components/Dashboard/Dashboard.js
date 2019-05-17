import React, { Component } from 'react'
import Product from '../Product/Product';

//Will have no state and no methods

class Dashboard extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Product />
            </div>    

        )
    }
}

export default Dashboard