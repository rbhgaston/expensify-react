import React from "react";
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';

function EditExpense(props){
    return (
       <div>
           <ExpenseForm
               expense={props.expense}
               onSubmit={(expense) => {
                   props.dispatch(editExpense(props.match.params.id, expense))
                   props.history.push('/')
                }}
           />
           <button onClick={() => {
               props.dispatch(removeExpense(props.match.params.id))
               props.history.push('/')
           }} >Remove</button>
       </div>
    )
}


const mapStateToProps = (state, props) => ({expense: state.expenses.find(({id}) => id === props.match.params.id)})
export default connect(mapStateToProps)(EditExpense)