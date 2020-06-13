import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import Grants from './containers/grants';
import Grant from './containers/grant';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/grants" component={Grants} />
            <Route exact path="/grants/:id" component={Grant} />
        </Switch>
    )
}

export default Routes;