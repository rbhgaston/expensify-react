import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
// COMPONENTS
import DashboardPage from "../components/DashboardPage";
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory()

 function AppRouter(){
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path='/create' component={AddExpensePage}/>
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                <PrivateRoute path='/dashboard' component={DashboardPage}/>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
