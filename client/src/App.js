import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Settings from './components/pages/Settings';
import Tool from './components/pages/Tool';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/auth/PrivateRoute';

import PAOState from './context/pao/PAOState';
import AuthState from './context/auth/AuthState';
import './App.css';

function App() {
  return (
    <AuthState>
      <PAOState>
        <Router>
          <Navbar />
          <div className='container mt-3'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />

              <PrivateRoute exact path='/settings' component={Settings} />
              <PrivateRoute exact path='/tool' component={Tool} />
            </Switch>
          </div>
        </Router>
      </PAOState>
    </AuthState>
  );
}

export default App;
