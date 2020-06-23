import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogOut} from '../actions/auth';
import '../styles/styles.css';

export const Header = ({ startLogOut }) => (
    <header className="header">
        <div>
      <Link to="/dashboard">
      <h1 className="header__title">Expensify</h1>
      </Link>
      </div>
      <div className="header-button">
      <button onClick={startLogOut}>LOGOUT</button>
      </div>
      </header>
  );

const mapDispatchToProps = (dispatch) => ({
  startLogOut : () => dispatch(startLogOut())
});

  export default connect(undefined, mapDispatchToProps)(Header);