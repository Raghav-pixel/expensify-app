import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import '../styles/styles.css';

const AddExpensePage = (props) => (
  <div>
    <div>
      <div className="content-container">
      <h1>Add Expense</h1>
      </div>
      </div>
      <div className="content-container">
      <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push('/')
      }}
      />
    </div>
    </div>
  );

export default connect()(AddExpensePage);  