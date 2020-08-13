import React from "react";
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import {connect} from 'react-redux';

export class EditExpensePage extends React.Component{
    onSubmit= (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(({id}) => id === props.match.params.id)
})
// 2nd arg
const mapDispatchToProps = dispatch => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)