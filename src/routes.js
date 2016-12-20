import React from 'react';
import { IndexRoute, Redirect, Route } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/_AboutPage';
import EmployeePage from './components/employee/_EmployeePage';
import ManageEmployeePage from './components/employee/ManageEmployeePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmployeePage} />
    <Route path="about" component={AboutPage} />
    <Route path="manageemployees/:id" component={ManageEmployeePage} />
    <Redirect from="*" to="/" />
  </Route>
);
