import {v4 as uuidv4} from 'uuid';

export const  addExpense = ({description= '', note= '', createdAt= 0, amount= 0} = {}) => ({
    type: 'ADD',
    expense: {
        id: uuidv4(),
        description,
        note,
        createdAt,
        amount
    }
})

export const editExpense = (id, updates) => ({
    type: 'EDIT',
    id,
    updates
})

export const removeExpense = (id) => ({type: 'REMOVE', id})

