import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Dashboard from './components/dashboard/dashboard.component';
import HomePage from './components/homepage/homepage.component';
import SignIn from './components/auth/sign-in.component';
import AddItem from './components/add-item/add-item.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/additem' component={AddItem} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;