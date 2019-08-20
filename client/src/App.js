import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Settings from './components/pages/Settings';
import Tool from './components/pages/Tool';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container mt-3'>
          <Switch>
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/tool' component={Tool} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
