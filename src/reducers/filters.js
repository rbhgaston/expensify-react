import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sort: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'AMOUNT':
            return {
                ...state,
                sort: 'amount'
            }
        case 'DATE':
            return{
                ...state,
                sort: 'date'
            }
        case 'TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

export default filtersReducer