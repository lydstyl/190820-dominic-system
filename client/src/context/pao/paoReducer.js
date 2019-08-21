import { GET_PAOS, UPDATE_PAO } from '../types';

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
    default:
      return state;
  }
};
