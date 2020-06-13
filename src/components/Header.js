import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" exact={true} activeClassName="is-active">DashBoard</NavLink>
      <NavLink to="/create" activeClassName="is-active">CreateExpense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">EditExpense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </header>
  );

  export default Header;