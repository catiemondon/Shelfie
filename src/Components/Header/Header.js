import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'


//Has no state and no methods

class Header extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <HashRouter>
            <div>
                <h1>Header</h1>
                <Link to='/inventory'>Home</Link>
            </div>
            </HashRouter>
        )
    }
}

export default Header