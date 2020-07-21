import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('create remove expense action', () => expect(removeExpense(1)).toEqual({type: 'REMOVE', id: 1}))


test('create edit expense action', () => {
    const updates = {
        note: 'new note',
        createdAt: 100
    }
    const id = 1
    expect(editExpense(id, updates))
        .toEqual({
            type: 'EDIT',
            id,
            updates
        })
})

test('create add expense action with provided values', () => {
    const action = {
        description: 'test1',
        amount: 100,
        note: 'no notes',
        createdAt: 100
    }
    expect(addExpense(action)).toEqual({
        type: 'ADD',
        expense:{
            ...action,
            id: expect.any(String)
        }
    })
})

test('create add expense with default values', () => {
    expect(addExpense()).toEqual({
        type: 'ADD',
        expense: {
            description: '',
            note: '',
            createdAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    })
})