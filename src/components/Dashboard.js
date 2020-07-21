import React from "react";
import ExpensesList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export default function DashBoard() {
    return (
        <div>
            <ExpenseListFilters />
            <ExpensesList />
        </div>
    )
}