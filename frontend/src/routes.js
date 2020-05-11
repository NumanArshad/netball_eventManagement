
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import RegisterView from './components/CreateAccount/Create_View';
import todoView from './components/TodoList/todo_view';
import ManageTeam_View from './components/Manage_Team/ManageTeam_View';
const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={LoginView} />
      {/* <Route exact path='/verynice' component={SelectorContainer} /> */}
      <Route exact path='/Register' component={RegisterView} />
      <Route exact path='/manage_team' component={ManageTeam_View} />
    </Switch>
  </BrowserRouter >
);
export default Root;
