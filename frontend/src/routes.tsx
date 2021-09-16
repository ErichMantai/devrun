import React from 'react';
import { Switch,Route} from 'react-router-dom'

import {Home} from './pages/Home';
import {Developer} from './pages/Developer';
import {CreateDeveloper} from './pages/CreateDeveloper';
import { EditDeveloper } from './pages/EditDeveloper';

export function Routes() {
    return (
        <Switch>
           <Route path="/" exact component={Home} /> 
           <Route path="/developer" exact component={Developer} />
           <Route path="/developer/new" exact component={CreateDeveloper} />
           <Route path="/developers/:id" exact component={EditDeveloper} />
        </Switch>
    )
}