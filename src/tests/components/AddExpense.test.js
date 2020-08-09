import React from 'react'
import {shallow} from 'enzyme'
import {AddExpense} from '../../components/AddExpense';
import expenses from '../fixtures/expenses';


test('render AddExpense', () => {
    const wrapper = shallow(<AddExpense />)
    expect(wrapper).toMatchSnapshot()
})

test('call addExpense and history.push in onSubmit with right args', () => {
    const startAddExpense = jest.fn()
    const history = {push: jest.fn()}
    const wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history}/>)
    wrapper.find('ExpenseForm').simulate('submit', expenses[0])

    expect(startAddExpense).toHaveBeenLastCalledWith( expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})