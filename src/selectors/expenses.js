import moment from 'moment';

export const getFilteredExpenses =  (expenses, {text, sort, startDate, endDate}) => {
    return expenses.filter(expense => {
        const isGreaterThanStart = startDate ?  moment(expense.createdAt).isSameOrAfter(startDate, 'day') : true
        const isLessThanEnd = endDate ? moment(expense.createdAt).isSameOrBefore(endDate, 'day') : true

        return expense.description.includes(text) && isGreaterThanStart && isLessThanEnd
        })
        .sort((a, b) => sort === 'amount' ? a.amount - b.amount : a.createdAt - b.createdAt)
}

export const getTotalAmount = (expenses = []) => expenses.reduce((total, expense) => total + expense.amount, 0)