import {getFilteredExpenses, getTotalAmount} from '../../selectors/expenses'
import moment from 'moment';
import expenses, {totalAmount} from '../fixtures/expenses'

describe('test getFilteredExpenses', () => {
    test('sort by amount', () => {
        const filters = {
            sort: 'amount',
            text: '',
            startDate: undefined,
            endDate: undefined
        }
        expect(getFilteredExpenses(expenses, filters))
            .toEqual([expenses[0], expenses[2], expenses[1]])
    })

    test('sort by date', () => {
        const filters = {
            sort: 'date',
            text: '',
            startDate: undefined,
            endDate: undefined
        }
        expect(getFilteredExpenses(expenses, filters))
            .toEqual([expenses[2], expenses[1], expenses[0]])
    })

    test('filter by text', () => {
        const filters = {
            sort: 'amount',
            text: '2',
            startDate: undefined,
            endDate: undefined
        }
        expect(getFilteredExpenses(expenses, filters))
            .toEqual([expenses[2]])
    })


// comparing dates per day granularity
// should have days between expenses
    test('set startDate boundary', () => {
        const filters = {
            sort: 'amount',
            text: '',
            startDate: moment(0).add(8, 'day').valueOf(),
            endDate: undefined
        }
        expect(getFilteredExpenses(expenses, filters))
            .toEqual([expenses[0], expenses[1]])
    })

    test('set endDate boundary', () => {
        const filters = {
            sort: 'amount',
            text: '',
            startDate: undefined,
            endDate: moment(0).add(7, 'day').valueOf()
        }
        expect(getFilteredExpenses(expenses, filters))
            .toEqual([expenses[2]])
    })

    test('set an interval filter', () => {
        const filters = {
            sort: 'amount',
            text: '',
            startDate: moment(0).add(7, 'day').valueOf(),
            endDate: moment(0).add(8, 'day').valueOf()
        }
        expect(getFilteredExpenses(expenses, filters))
            .toEqual([expenses[2], expenses[1]])
    })
})

describe('test getTotalAmount', () => {
    test('getTotalAmount with an empty array', () => {
        expect(getTotalAmount()).toBe(0)
    })

    test('getTotalAmount with given array of expenses', () => {
        expect(getTotalAmount(expenses)).toBe(totalAmount)
    })
})

