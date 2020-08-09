import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import db from '../../firebase/firebase'
import {addExpense, editExpense, removeExpense, startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const middlewares = [thunk]
const mockStore = configStore(middlewares)

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

test('create add expense action', () => {
    expect(addExpense(expenses[2])).toEqual({
        type: 'ADD',
        expense: expenses[2]
    })
})

describe('test startAddExpense', () => {
    test('add expense to the store and firebase with default values', () => {
        const initState = {}
        const store = mockStore(initState)
        const expenseData = {
            description: '',
            note: '',
            createdAt: 0,
            amount: 0,
        }
        const defaultAction = {
            type: 'ADD',
            expense: {
               ...expenseData,
                id: expect.any(String)
            }
        }
        // return a Promise so that jest waits until it resolves or fails
        // or add done argument to this function and call when the Promise resolves or fails
        return store.dispatch(startAddExpense())
            .then(() => {
                // check store
                const actions = store.getActions()
                expect(actions[0]).toEqual(defaultAction)

                // check db which is firebase
                return db.ref(`expenses/${actions[0].expense.id}`).once('value')
            })
            .then(snapshot => expect(snapshot.val()).toEqual(expenseData))
    })

    test('add expense to the store and firebase with provided args', () => {
        const store = mockStore()
        const expenseData = {
            description: 'ssd',
            amount: '20000',
            note: 'this is a fair price',
            createdAt: 4000
        }
        const expectedAction = {
            type: 'ADD',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        }

        return store.dispatch(startAddExpense(expenseData))
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual(expectedAction)

                return db.ref(`expenses/${actions[0].expense.id}`).once('value', )
            })
            .then(snapshot => expect(snapshot.val()).toEqual(expenseData))
    })
})