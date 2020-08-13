import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses';

const expenseIndex = 0
let startEditExpenseSpy,  startRemoveExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    startEditExpenseSpy = jest.fn()
    startRemoveExpenseSpy = jest.fn()
    historySpy = {push: jest.fn()}

    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpenseSpy}
            startRemoveExpense={startRemoveExpenseSpy}
            history={historySpy}
            expense={expenses[expenseIndex]}
        />)
})

test('render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})


test('call editExpense and history.push in onSubmit with right args', () => {
    wrapper.find('ExpenseForm').simulate('submit', expenses[expenseIndex])

    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenseIndex.toString(), expenses[expenseIndex])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
})

test('call removeExpense and history.push in onClick with right args', () => {
    wrapper.find('button').simulate('click')

    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expenseIndex.toString())
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
})