import React from 'react'
import {connect} from 'react-redux'
import {getFilteredExpenses, getTotalAmount} from '../selectors/expenses';
import numeral from 'numeral'

export const ExpenseListSummary = (props) => {
    const selectedExpenses = getFilteredExpenses(props.expenses, props.filters)

    const length = selectedExpenses.length
    const expenseWord = length === 1 ? 'expense' : 'expenses'
    const total = numeral(getTotalAmount(selectedExpenses) / 100).format(	'$0,0.00')

    return (
        <h2>Selecting {length} {expenseWord} with total: {total}</h2>
    )
}

const mapStateToProps = state => ({expenses: state.expenses, filters: state.filters})


export default connect(mapStateToProps)(ExpenseListSummary)