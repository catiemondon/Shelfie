import React from 'react'

import {Switch, Route} from 'react-router-dom'
import App from './App'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

export default(
    <Switch>
        <Route path='/inventory' component={Dashboard} />
    </Switch>
)