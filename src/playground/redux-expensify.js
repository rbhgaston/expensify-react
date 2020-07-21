import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid'


// ACTIONS

// EXPENSES ACTIONS


// FILTERS ACTIONS


// REDUCERS






// SUBSCRIBE
const unsubscribe = expensifyStore.subscribe(() => {
    console.log(expensifyStore.getState())
})


// TESTING with DISPATCH

// filters
// expensifyStore.dispatch({type: 'START_DATE', startDate: 111})
// expensifyStore.dispatch({type: 'END_DATE', endDate: 999})
// expensifyStore.dispatch({type: 'TEXT', text: 'filter'})
// expensifyStore.dispatch({type: 'DATE'})

// expenses
const expense = expensifyStore.dispatch(addExpense())
expensifyStore.dispatch(editExpense(expense.expense.id, {description: 'bought new pc', amount: 500}))
expensifyStore.dispatch(removeExpense(expense.expense.id))
expensifyStore.dispatch(addExpense({description: 'new ram'}))
