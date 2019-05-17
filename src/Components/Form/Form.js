import React, { Component } from 'react'

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



    render(){
        return(
            <div>
            <h1> Form </h1>

            <form>
                <input placeholder="name" name="name" onChange={this.handleUpdateInput}></input>
                <input placeholder="price" name="price" onChange={this.handleUpdateInput}></input>
                <input placeholder="imgurl" name="imgurl" onChange={this.handleUpdateInput}></input>
                <button onClick={this.handleCancelInput}>Cancel</button>
                <button >Add to Inventory</button>

            </form>
            </div>

        )
    }
}

export default Form
