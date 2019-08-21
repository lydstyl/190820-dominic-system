import React, { useReducer } from 'react';
import PAOContext from './paoContext';
import paoReducer from './paoReducer';
import { GET_PAOS, UPDATE_PAO } from '../types';

const PAOState = props => {
  const initialSate = {
    paos: null
    // error: null
  };

  const [state, dispatch] = useReducer(paoReducer, initialSate);

  // Get PAOs
  const getPAOs = () => {
    // this temporary replace bdd
    const arr = [];
    for (let i = 0; i <= 99; i++) {
      arr.push([
        { number: i, type: 'personage', title: 'personage ' + i },
        { number: i, type: 'action', title: 'action ' + i },
        { number: i, type: 'object', title: 'object ' + i }
      ]);
    }
    // end of temporary
    dispatch({ type: GET_PAOS, payload: arr });
  };

  // Update PAO

  return (
    <PAOContext.Provider
      value={{
        paos: state.paos,
        getPAOs
      }}
    >
      {props.children}
    </PAOContext.Provider>
  );
};

export default PAOState;
