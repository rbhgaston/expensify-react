import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import {getFilteredExpenses} from '../selectors/expenses'

export const ExpenseList = (props) => {
    return (
        <div>
            {
                !props.expenses.length ?
                    <p>No expenses</p>
                    : props.expenses.map(expense =>
                        <ExpenseListItem key={expense.id} {...expense}/>
                    )
            }

        </div>
    )
}
const mapStateToProps = (state) => ({expenses: getFilteredExpenses(state.expenses, state.filters)})
const ConnectedExpensesList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpensesList