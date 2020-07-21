import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'


test('render ExpenseList component with data provided', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render ExpenseList component with an empty array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').text()).toBe('No expenses')
})