import React from 'react'
import moment from 'moment'
// react-dates
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates';

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        const expense = props.expense;
        this.state = {
            description: expense ? expense.description : '',
            note: expense ? expense.note : '',
            amount: expense ? (expense.amount/100).toString() : '',
            createdAt: expense ? moment(expense.createdAt) :  moment(),
            error: undefined,
            dateFocused: false
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        // OR use e.persist() and pass e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/))
            this.setState(() => ({amount}))
    }

    onDateChange= createdAt => this.setState(() => ({createdAt}))

    onFocusChange = ({focused}) => this.setState(() => ({dateFocused: focused}))

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount)
            this.setState(() => ({error: 'Please provide description and amount.'}))
        else{
            this.setState(() => ({error: undefined}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount) * 100, // convert to pennies
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error &&  <p>{this.state.error}</p>}
                    <input type="text"
                           placeholder="Description"
                           onChange={this.onDescriptionChange}
                           value={this.state.description}
                           autoFocus />
                    <input type="number"
                           placeholder="Amount"
                           onChange={this.onAmountChange}
                           value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.dateFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder="Add Note (Optional)"
                              onChange={this.onNoteChange}
                              value={this.state.note}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}