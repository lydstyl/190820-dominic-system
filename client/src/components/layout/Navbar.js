import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Navbar = props => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
    //clearContacts();
  };

  const lis = isAuthenticated ? (
    <Fragment>
      <li className='nav-item active'>
        <Link className='nav-link' to='/settings'>
          Settings
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/tool'>
          Tool
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  ) : (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        <h1>
          <i className='fas fa-memory mr-3'></i>Dominic System
        </h1>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>{lis}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
