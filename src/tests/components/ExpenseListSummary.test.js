import React from 'react'
import {ExpenseListSummary} from '../../components/ExpenseListSummary';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses';
import {defaultFilters} from '../fixtures/filters';

let wrapper;
beforeEach(() => {
   wrapper = shallow(<ExpenseListSummary expenses={expenses} filters={defaultFilters}/>)
})

test('render ExpenseListSummary with multiple expenses', () => {
    expect(wrapper).toMatchSnapshot()
})

 test('render ExpenseListSummary with 1 expense', () => {
     wrapper.setProps({expenses: [expenses[0]]})
     expect(wrapper).toMatchSnapshot()
 })