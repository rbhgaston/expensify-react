import React from "react";
import ExpensesList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListSummary from './ExpenseListSummary';

export default function DashBoard() {
    return (
        <div>
            <ExpenseListSummary />
            <ExpenseListFilters />
            <ExpensesList />
        </div>
    )
}