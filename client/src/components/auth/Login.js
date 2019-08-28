import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/tool'); // redirect
    }
    if (error === 'Invalid credentials') {
      console.log(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if ((!email, !password)) {
      console.log('Please fill in all fields', 'danger');
    } else {
      login({ email, password });
    }
  };

  return (
    <div>
      <form>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            name='email'
            className='form-control'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            value={email}
            onChange={onChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button
          onClick={onSubmit}
          type='submit'
          className='btn btn-primary btn-block'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
