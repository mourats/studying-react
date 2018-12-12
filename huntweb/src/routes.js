import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
    ;

import Alunos from './pages/alunos';
import Disciplinas from './pages/disciplinas';
import Admin from './pages/admin';
import PreMatricula from './pages/prematricula';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Alunos} />
            <Route path="/alunos" component={Alunos} />
            <Route path="/disciplinas" component={Disciplinas} />
            <Route path="/admin" component={Admin} />
            <Route path="/prematricula" component={PreMatricula} />
        </Switch>
    </BrowserRouter>

);

export default Routes;