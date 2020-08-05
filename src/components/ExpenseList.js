import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

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
const mapStateToProps = (state) => ({expenses: selectExpenses(state.expenses, state.filters)})
const ConnectedExpensesList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpensesList