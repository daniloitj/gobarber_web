import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Signin} exact />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} isPrivate />    
  </Switch>
);
export default Routes;
