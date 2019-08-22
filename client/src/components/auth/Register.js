import React from 'react';
// import AuthContext from '../../context/auth/authContext';

const Register = props => {
  // const authContext = useContext(AuthContext);

  // const { register, error, clearErrors, isAuthenticated } = authContext;

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push('/'); // redirect to Home
  //   }
  //   if (error === 'User already exists') {
  //     console.log(error);
  //     clearErrors();
  //   }
  //   // eslint-disable-next-line
  // }, [error, isAuthenticated, props.history]);

  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   password2: ''
  // });

  // const { name, email, password, password2 } = user;

  // const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   if (!name || !email || !password) {
  //     console.log('Please enter all fields');
  //   } else if (password !== password2) {
  //     console.log('Passwords do not match');
  //   } else {
  //     register({
  //       name,
  //       email,
  //       password
  //     });
  //   }
  // };

  return (
    <div>
      {/* <form onSubmit={onSubmit}> */}
      <form>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Enter email'
            // value={email}
            // onChange={onChange}
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
            // value={password}
            // onChange={onChange}
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
            // value={password2}
            // onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
