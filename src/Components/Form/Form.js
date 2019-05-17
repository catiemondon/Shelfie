import React, { Component } from 'react'
import axios from 'axios'

//Wiil have state (state{name: '', price: 0, imgurl: ''}) 
//Following methods: handle change (one for each input), post new products to database, clear input boxes

class Form extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            price: 0,
            imgurl: ''
        }

        //this.handleUpdateInput= this.handleUpdateInput.bind(this)
        //replaced this bind with public classified syntax for autobinding
    }


    handleUpdateInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCancelInput=(e)=>{
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    handleAddItem=(e)=>{
        axios.post('/api/product', {name: this.state.name, price: this.state.price, imgurl: this.state.img}).then((res)=>{
            this.props.getinventory()
            this.handleCancelInput()
        })
    }

    handleUpdateItem=(name, price, imgurl)=>{
        axios.put(`/api/inventory/`,  {name:this.state.name, price: this.state.price, imgurl: this.state.imgurl }).then((res)=>{
            this.props.getinventory()
        })
    }


    render(){
        return(
            <div>
            <h1> Form </h1>

            <form>
                <input placeholder="name" name="name" onChange={this.handleUpdateInput}></input>
                <input placeholder="price" name="price" onChange={this.handleUpdateInput}></input>
                <input placeholder="imgurl" name="imgurl" onChange={this.handleUpdateInput}></input>
                <button onClick={this.handleCancelInput}>Cancel</button>
                <button onClick={this.handleAddItem}>Add to Inventory</button>

            </form>
            </div>

        )
    }
}

export default Form
