import React from 'react';
import {EditExpense} from '../../components/EditExpense';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses';

const expenseIndex = 0
let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    historySpy = {push: jest.fn()}

    wrapper = shallow(
        <EditExpense
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
            expense={expenses[expenseIndex]}
        />)
})

test('render EditExpense', () => {
    expect(wrapper).toMatchSnapshot()
})


test('call editExpense and history.push in onSubmit with right args', () => {
    wrapper.find('ExpenseForm').simulate('submit', expenses[expenseIndex])

    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenseIndex, expenses[expenseIndex])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
})
// TODO simulate vs prop()()
test('call removeExpense and history.push in onClick with right args', () => {
    wrapper.find('button').simulate('click')

    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expenseIndex)
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
})