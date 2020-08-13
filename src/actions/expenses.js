// import {v4 as uuidv4} from 'uuid';
import db from '../firebase/firebase'

// ADD
export const  addExpense = (expense) => ({
    type: 'ADD',
    expense
})

export const startAddExpense = ({description= '', note= '', createdAt= 0, amount= 0} = {}) =>
    (dispatch, getState) => {
        const uid = getState().auth.uid
        const expense = {
            description,
            amount,
            note,
            createdAt
        }
        return db.ref(`users/${uid}/expenses`).push(expense)
            .then(ref => dispatch(addExpense({
                id: ref.key,
                ...expense
            })))
    }

// EDIT
export const editExpense = (id, updates) => ({
    type: 'EDIT',
    id,
    updates
})

export const startEditExpense= (id, updates) =>
    (dispatch, getState) => {
    const uid = getState().auth.uid
        return db.ref(`users/${uid}/expenses/${id}`).update(updates)
            .then(() => dispatch(editExpense(id, updates)))
    }



// REMOVE
export const removeExpense = (id) => ({type: 'REMOVE', id})

export const startRemoveExpense = (id) =>
    (dispatch, getState) => {
    const uid = getState().auth.uid
        return db.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => dispatch(removeExpense(id)))
        }

// SET
export const setExpenses = (expenses) => ({
    type: 'SET',
    expenses
})

export const startSetExpenses = () =>
    (dispatch, getState) => {
        const uid = getState().auth.uid
        return db.ref(`users/${uid}/expenses`).once('value').then(snapshot => {
            const expensesArray = []
            snapshot.forEach(expense => {expensesArray.push({id: expense.key.toString(), ...expense.val()})})
            dispatch(setExpenses(expensesArray))
        })
    }