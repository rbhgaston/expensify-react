const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                action.expense
            ]
        case 'EDIT':
            return state.map(expense => expense.id === action.id ? {...expense, ...action.updates} : expense )
        case 'REMOVE':
            return state.filter(expense => expense.id !== action.id)
        default:
            return state
    }
}

export default expensesReducer