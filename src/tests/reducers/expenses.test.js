import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('set default state', () => {
    expect(expensesReducer(undefined, {type: '@@INIT'})).toEqual([])
})

test('add expense to state', () => {
    const expense = {
        id: 4,
        description: 'test4',
        amount: 1000,
        createdAt: 0
    }
    expect(expensesReducer(expenses, {type: 'ADD', expense}))
        .toEqual([...expenses, expense])
})

test('remove expense of state', () => {
    expect(expensesReducer(expenses, {type: 'REMOVE', id: expenses[1].id}))
        .toEqual([expenses[0], expenses[2]])
})

test('do not remove expense due to unavailable id', () => {
    expect(expensesReducer(expenses, {type: 'REMOVE', id: 4}))
        .toEqual(expenses)
})

test('edit expense of state', () => {
    const updates = {
        description: 'edited test3'
    }
    expect(expensesReducer(expenses, {type: 'EDIT', id: expenses[1].id, updates}))
        .toEqual([expenses[0], {...expenses[1], ...updates},  expenses[2]])
})