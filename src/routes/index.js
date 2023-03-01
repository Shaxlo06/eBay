import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '.././routes/home/Home';
import Registr from '.././routes/auth/registr/Registr';
import Singin from '.././routes/auth/signin/Singin';
import Plp from '.././routes/plp/Plp';
import SingleProduct from '.././components/singleProduct/SingleProduct';
import AllProductsByCategory from '../components/allProductsByCategory/AllProductsByCategory';


const Routes = () => {
    return (
        <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/registr'>
          <Registr/>
        </Route>
        <Route path='/signin'>
          <Singin/>
        </Route>
        <Route path='/category/:id'>
          <AllProductsByCategory/>
        </Route>
        <Route path='/products'>
          <Plp/>
        </Route>
        <Route path='/product/:id'>
          <SingleProduct/>
        </Route>
      </Switch>
    );
}

export default Routes;
