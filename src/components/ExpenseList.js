import React from 'react'
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import '../styles/styles.css';

const ExpenseList = (props) => (
    <div className="content-container_list">
        <div className="list-header">
        <h3>Expense</h3>
        <h3>Amount</h3>
        </div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return   <ExpenseListItem key={expense.id} {...expense} />
                   })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);