import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import FormDev from './pages/FormDev';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Main} />

        <Route path="/dev" exact component={FormDev} />

      </Switch>
    </BrowserRouter>
  );
}