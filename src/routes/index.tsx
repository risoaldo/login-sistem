import React from "react";
import { Route, Switch } from 'react-router-dom';

import Login from '../Login';
import Dashboard from '../Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
)

export default Routes;