import React, { useReducer } from 'react';
import PAOContext from './paoContext';
import paoReducer from './paoReducer';
import {
  GET_PAOS,
  UPDATE_PAO,
  GET_TOOL_PAOS,
  UPDATE_TOOL_PAOS
} from '../types';

const PAOState = props => {
  const initialSate = {
    paos: null,
    toolPAOs: null
    // error: null
  };

  const [state, dispatch] = useReducer(paoReducer, initialSate);

  // Get PAOs
  const getPAOs = () => {
    const localArr = localStorage.getItem('arr');
    let arr = [];

    if (!localArr) {
      // this temporary replace bdd
      for (let i = 0; i <= 99; i++) {
        arr.push([
          { number: i, type: 'personage', title: 'personage ' + i },
          { number: i, type: 'action', title: 'action ' + i },
          { number: i, type: 'object', title: 'object ' + i }
        ]);
      }
      // end of temporary

      localStorage.setItem('arr', JSON.stringify(arr));
    } else {
      arr = JSON.parse(localArr);
    }

    dispatch({ type: GET_PAOS, payload: arr });
  };

  // Update PAO
  const updatePAO = update => {
    let position = update.type === 'personage' ? 0 : 1;
    if (update.type === 'object') position = 2;

    update.position = position;
    dispatch({ type: UPDATE_PAO, payload: update });
  };

  // Get Tool PAOs
  const getToolPAOs = () => {
    dispatch({ type: GET_TOOL_PAOS });
  };

  // Update Tool PAOs
  const updateToolPAOs = cards => {
    dispatch({ type: UPDATE_TOOL_PAOS, payload: cards });
  };

  return (
    <PAOContext.Provider
      value={{
        paos: state.paos,
        toolPAOs: state.toolPAOs,
        getPAOs,
        getToolPAOs,
        updateToolPAOs,
        updatePAO
      }}
    >
      {props.children}
    </PAOContext.Provider>
  );
};

export default PAOState;
