import moment from 'moment';

const defaultFilters = {
    text: '',
    sort: 'amount',
    startDate: undefined,
    endDate: undefined
}

const altFilters = {
    text: '2',
    sort: 'date',
    startDate: moment(0),
    endDate: moment(0).add(9, 'days')
}

export {defaultFilters, altFilters}