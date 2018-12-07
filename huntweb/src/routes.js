import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
    ;

import Alunos from './pages/alunos';
import Disciplinas from './pages/disciplinas';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Alunos} />
            <Route path="/alunos" component={Alunos} />
            <Route path="/disciplinas" component={Disciplinas} />
        </Switch>
    </BrowserRouter>

);

export default Routes;