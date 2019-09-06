import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const authContext = useContext(AuthContext);

  const { register, error, isAuthenticated, setError } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/tool'); // redirect to Tool
    }
    if (error === 'User already exists') {
      setError(error);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      console.log('Please enter all fields');
      // no setError here because email and passwords have the attribute "required" in the html
    } else if (password !== password2) {
      setError('Passwords do not match');
    } else {
      register({
        email,
        password
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {error && error}

      <div className='spiner d-none'>
        <img
          className='spiner d-none'
          src='https://miro.medium.com/max/800/0*A4wJEoDWTjk6DGKG.'
          alt='spiner'
        />
        <p className='text-center'>
          Please wait about 20 seconds while the app is making and saving your
          first 100 personages, 100 actions and 100 objects...
        </p>
      </div>
      <div className='spiner'>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Enter email'
            value={email}
            onChange={onChange}
            required
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
            minLength='6'
            required
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Password</label>
          <input
            type='password'
            name='password2'
            className='form-control'
            placeholder='Password'
            minLength='6'
            required
            value={password2}
            onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
