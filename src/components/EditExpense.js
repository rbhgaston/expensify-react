import React from "react";
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';

export class EditExpense extends React.Component{
    onSubmit= (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.removeExpense(this.props.expense.id)
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)