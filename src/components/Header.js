import {NavLink} from 'react-router-dom';
import React from 'react';

export default function Header() {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink exact to='/' activeClassName='is-active'>Dashboard</NavLink>
            <NavLink exact to='/create' activeClassName='is-active'>Create Expense</NavLink>
        </header>
    )
}