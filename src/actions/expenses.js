// import {v4 as uuidv4} from 'uuid';
import db from '../firebase/firebase'

export const  addExpense = (expense) => ({
    type: 'ADD',
    expense
})

export const startAddExpense = ({description= '', note= '', createdAt= 0, amount= 0} = {}) =>
    (dispatch) => {
        const expense = {
            description,
            amount,
            note,
            createdAt
        }
        return db.ref('expenses').push(expense)
            .then(ref => dispatch(addExpense({
                id: ref.key,
                ...expense
            })))
    }


export const editExpense = (id, updates) => ({
    type: 'EDIT',
    id,
    updates
})

export const removeExpense = (id) => ({type: 'REMOVE', id})

