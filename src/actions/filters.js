export const sortByAmount = () =>  ({type:'AMOUNT'})
export const sortByDate = () => ({type: 'DATE'})
export const setTextFilter = (text = '') => ({type: 'TEXT', text})

// dates are moment objects
export const setStartDate = (startDate) => ({type: 'START_DATE', startDate})
export const setEndDate = (endDate) => ({type: 'END_DATE', endDate})