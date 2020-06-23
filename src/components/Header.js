import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">DashBoard</NavLink>
      <NavLink to="/create" activeClassName="is-active">CreateExpense</NavLink>
      <button onClick={startLogOut}>LOGOUT</button>
      </header>
  );

const mapDispatchToProps = (dispatch) => ({
  startLogOut : () => dispatch(startLogOut())
});

  export default connect(undefined, mapDispatchToProps)(Header);