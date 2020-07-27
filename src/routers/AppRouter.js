import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
// COMPONENTS
import Header from '../components/Header';
import Dashboard from "../components/Dashboard";
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

export default function AppRouter(){
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path='/create' component={AddExpense}/>
                    <Route path='/edit/:id' component={EditExpense}/>
                    <Route path='/help' component={Help}/>
                    <Route path='/' component={Dashboard} exact={true}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
