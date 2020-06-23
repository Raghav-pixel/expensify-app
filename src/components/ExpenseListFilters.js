import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { Link } from 'react-router-dom';


class ExpenseListFilters extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            calendarFocused : null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render(){
        return (
            <div className="content-container_list-filter">
                <div className="list-filter_division">
                    <Link to="/create">
                <button className="list-filter_button">Add Expense</button>
                </Link>
                </div>
        <input type="text" placeholder="Search Expense" className="list-filter_text" value={this.props.filters.text} onChange={(e)=> {
            {this.props.dispatch(setTextFilter(e.target.value))}
        }}/>
        <select
            className="list-filter_choose"
            value = {this.props.filters.sortBy}
            onChange = {(e) => {
                if(e.target.value === 'date'){
                    this.props.dispatch(sortByDate())
                } else if(e.target.value === 'amount'){
                    this.props.dispatch(sortByAmount())
                }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        className="list-filter_date"
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}/>
    </div>
        );
    }
}

const mapStateToProps = (state) =>  {
    return {
        filters : state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);