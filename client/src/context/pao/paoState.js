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
  const updatePAO = update => {
    // console.log('update', update);

    let position = update.type === 'personage' ? 0 : 1;
    if (update.type === 'object') position = 2;

    // console.log('state', state.paos[update.number][position]); // a update !
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
