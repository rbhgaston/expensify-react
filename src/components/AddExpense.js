import React from 'react';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';
import {connect} from 'react-redux'

export function AddExpense(props){
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.addExpense(expense)
                    props.history.push('/')
                }}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

// if you pass mapDispatchToProps, you lose access to dispatch in props
export default connect(undefined, mapDispatchToProps)(AddExpense)

