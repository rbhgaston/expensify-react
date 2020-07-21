import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('set default values for init', () => {
    expect(filtersReducer(undefined, {type: '@@INIT'})).toEqual({
        text: '',
        sort: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('set sort to amount', () => {
    const state = filtersReducer(undefined, {type: 'AMOUNT'})
    expect(state.sort).toBe('amount')
})

test('set sort to date', () => {
    const state = filtersReducer(undefined, {type: 'DATE'})
    expect(state.sort).toBe('date')
})

test('set text filter', () => {
    const state = filtersReducer(undefined, {type: 'TEXT', text: 'filter'})
    expect(state.text).toBe('filter')
})

test('set startDate', () => {
    const start = moment(300)
    const state = filtersReducer(undefined, {type: 'START_DATE', startDate: start})
    expect(state.startDate).toBe(start)
})

test('set endDate', () => {
    const end = moment(900)
    const state = filtersReducer(undefined, {type: 'END_DATE', endDate: end})
    expect(state.endDate).toBe(end)
})