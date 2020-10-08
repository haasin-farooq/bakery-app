import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Dashboard from './components/dashboard/dashboard.component';
import SignIn from './components/auth/sign-in.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;