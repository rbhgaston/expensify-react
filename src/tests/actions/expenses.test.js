import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import db from '../../firebase/firebase'
import {
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startAddExpense, startEditExpense, startRemoveExpense,
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

// mock redux store
const middlewares = [thunk]
const mockStore = configStore(middlewares)
// user id for firebase auth
const uid = 'testuid'
const defaultState = {auth: {uid}}

beforeEach(() => {
    const expensesData = {}
    expenses.forEach(({id, ...data} )=> expensesData[id] = data)

    return db.ref(`users/${uid}/expenses`).set(expensesData)
})


describe('test remove expense', () => {
    test('create remove expense action', () =>
        expect(removeExpense(1)).toEqual({type: 'REMOVE', id: 1})
    )

    test('remove expense from store and database', () => {
        const store = mockStore(defaultState)
        const expenseId = 1
        return store.dispatch(startRemoveExpense(expenseId.toString()))
            .then(() => {
                // store
                expect(store.getActions()[0]).toEqual({
                    type: 'REMOVE',
                    id: expenses[expenseId].id
                })
                // db
                return db.ref(`users/${uid}/expenses/${expenseId}`).once('value')
            }).then(snapshot => expect(snapshot.val()).toBe(null))
    })
})


describe('test remove expense', () => {
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

    test('edit expense in the store and database', () => {
        const store = mockStore(defaultState)

        const updates = {
            description: 'updated description',
            createdAt: -12345
        }
        const id = 2
        return store.dispatch(startEditExpense(id, updates))
            .then(() => {
                expect(store.getActions()[0]).toEqual({
                    type: 'EDIT',
                    id,
                    updates
                })
                return db.ref(`users/${uid}/expenses/${id}`).once('value')
            }).then(snapshot => {
                const {id: removed, ...expenseData} = expenses[id]
                expect(snapshot.val()).toEqual({...expenseData, ...updates})
            })
    })
})


describe('test add expense', () => {
    test('create add expense action', () => {
        expect(addExpense(expenses[2])).toEqual({
            type: 'ADD',
            expense: expenses[2]
        })
    })

    test('add expense to the store and firebase with default values', () => {
        const initState = defaultState
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
                return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
            })
            .then(snapshot => expect(snapshot.val()).toEqual(expenseData))
    })

    test('add expense to the store and firebase with provided args', () => {
        const store = mockStore(defaultState)
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

                return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value', )
            })
            .then(snapshot => expect(snapshot.val()).toEqual(expenseData))
    })
})


describe('test set expenses', () => {
    test('create set expenses action', () => {
        const action = setExpenses(expenses)
        expect(action).toEqual({
            type: 'SET',
            expenses
        })
    })

    test('set expenses to the store from database', () => {
        const store = mockStore(defaultState)
        return store.dispatch(startSetExpenses())
            .then(() => expect(store.getActions()[0]).toEqual({
                    type: 'SET',
                    expenses
                }))
    })
})
