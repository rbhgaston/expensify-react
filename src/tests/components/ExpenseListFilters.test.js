import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {altFilters, defaultFilters} from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;
beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
    />)
})

test('render ExpenseListFilters with defaultFilters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('render ExpenseListFilters with altFilters', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('set text filter', () => {
    const text = 'filter'
    const event = {
        target: {
            value: text
        }
    }
    wrapper.find('input').simulate('change', event)

    expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

// amount is set by default
test('set sort value to date then to amount', () => {
    // set to date
    const event = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').simulate('change', event)
    expect(sortByDate).toHaveBeenLastCalledWith()

    // set to amount
    event.target.value = 'amount'
    wrapper.find('select').simulate('change', event)
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('set dates', () => {
    const dates = {
        startDate: moment(100),
        endDate: moment(400)
    }
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates)

    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate)
})

test('set focusedInput', () => {
    const calendarFocus = 'startDate' // or endDate or null, by default it is set to null
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocus)

    expect(wrapper.state('focusedInput')).toBe(calendarFocus)
})

