import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


test('render AddExpensePage', () => {
    const wrapper = shallow(<AddExpensePage />)
    expect(wrapper).toMatchSnapshot()
})

test('call addExpense and history.push in onSubmit with right args', () => {
    const startAddExpense = jest.fn()
    const history = {push: jest.fn()}
    const wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
    wrapper.find('ExpenseForm').simulate('submit', expenses[0])

    expect(startAddExpense).toHaveBeenLastCalledWith( expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})