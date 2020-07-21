import React from 'react'
import {connect} from 'react-redux'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

class ExpenseListFilters extends React.Component{
    state = {
        focusedInput: null
    }

    renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => {
        let i
        let years = []
        for(i = moment().year(); i >= moment().year() - 100; i--) {
            years.push(<option value={i} key={`year-${i}`}>{i}</option>)
        }
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <select value={month.month()} onChange={e => onMonthSelect(month, e.target.value)}>
                        {moment.months().map((label, value) => (
                            <option value={value} key={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select value={month.year()} onChange={e => onYearSelect(month, e.target.value)}>
                        {years}
                    </select>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={e => this.props.dispatch(setTextFilter(e.target.value))}/>
                <select
                    value={this.props.filters.sort}
                    onChange={e => this.props.dispatch(e.target.value === 'amount' ? sortByAmount() : sortByDate())}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={uuidv4()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuidv4()}
                    onDatesChange={({startDate, endDate}) => {
                        this.props.dispatch(setStartDate(startDate))
                        this.props.dispatch(setEndDate(endDate))
                    }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({focusedInput})}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                    // renderMonthElement={this.renderMonthElement}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters
})
export default connect(mapStateToProps)(ExpenseListFilters)