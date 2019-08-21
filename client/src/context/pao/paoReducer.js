import {
  GET_PAOS,
  UPDATE_PAO,
  GET_TOOL_PAOS,
  UPDATE_TOOL_PAOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PAOS:
      return {
        ...state,
        paos: action.payload
        //loading: false
      };
    // case UPDATE_PAO:
    //   return {
    //     ...state,
    //     paos: state.paos.map(pao =>
    //       pao._id === action.payload._id ? action.payload : pao
    //     )
    //     // current: null,
    //     // loading: false
    //   };
    case UPDATE_TOOL_PAOS:
      return {
        ...state,
        toolPAOs: action.payload
      };
    case GET_TOOL_PAOS:
    // break;
    // return{
    //   ...state,
    //   toolPAOs:
    // }
    default:
      return state;
  }
};
