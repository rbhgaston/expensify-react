import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {startAddExpense, addExpense} from '../actions/expenses';

export function AddExpensePage(props){
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.startAddExpense(expense)
                    props.history.push('/')
                }}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

// if you pass mapDispatchToProps, you lose access to dispatch in props
export default connect(undefined, mapDispatchToProps)(AddExpensePage)

