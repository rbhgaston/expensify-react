import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('create sortByAmount action', () => expect(sortByAmount()).toEqual({type: 'AMOUNT'}))

test('create sortByDate action', () => expect(sortByDate()).toEqual({type: 'DATE'}))

test('create set startDate action', () => expect(setStartDate(moment(0)))
    .toEqual({type: 'START_DATE', startDate: moment(0)}))

test('create set endDate action', () => expect(setEndDate(moment(100)))
    .toEqual({type: 'END_DATE', endDate: moment(100)}))


test('create set text filter action with provided value', () => expect(setTextFilter('filter'))
    .toEqual({type: 'TEXT', text: 'filter'}))


test('create set text filter action with default value', () => expect(setTextFilter())
    .toEqual({type: 'TEXT', text: ''}))