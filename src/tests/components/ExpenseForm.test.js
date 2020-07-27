import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render error for invalid form submission and change state', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})

    expect(wrapper.state('error')).not.toBe(undefined)
    expect(wrapper).toMatchSnapshot()
})

test('set description state on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'test1'
    wrapper.find('input').at(0).simulate('change', {target: {value}})

    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('set note state on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'note1'
    wrapper.find('textarea').simulate('change', {target: {value}})

    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('set amount on valid input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '12.05'
    wrapper.find('input').at(1).simulate('change', {target: {value}})

    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})


test.each(['.05', '12.055', 'afa'])('set amount on invalid input change', (value) => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {target: {value}})

    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test('call onSubmit event handler with correct params', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})

    const exp = expenses[0]
    delete exp.id
    expect(onSubmitSpy).toBeCalledWith(exp)
})

test('set calendar focus to true on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused: true})

    expect(wrapper.state('dateFocused')).toBe(true)
})

test('set new date on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const unixEpoch = moment(0)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(unixEpoch)

    expect(wrapper.state('createdAt')).toBe(unixEpoch)
})