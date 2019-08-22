import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Settings from './components/pages/Settings';
import Tool from './components/pages/Tool';
import How from './components/pages/How';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PAOState from './context/pao/paoState';
import './App.css';

function App() {
  return (
    <PAOState>
      <Router>
        <Navbar />
        <div className='container mt-3'>
          <Switch>
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/tool' component={Tool} />
            <Route exact path='/how' component={How} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </div>
      </Router>
    </PAOState>
  );
}

export default App;
