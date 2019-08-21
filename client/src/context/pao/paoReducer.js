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
    case UPDATE_PAO:
      const toBeReplaced =
        state.paos[action.payload.number][action.payload.position];
      const by = action.payload;
      console.log('replace by', toBeReplaced, by);

      const { name, src } = by;

      toBeReplaced.title = name;
      toBeReplaced.img = src; ////
      console.log(toBeReplaced);

      const newPaos = [...state.paos];
      newPaos[action.payload.number][action.payload.position] = toBeReplaced;

      return {
        ...state,
        paos: newPaos
      };
    case UPDATE_TOOL_PAOS:
      return {
        ...state,
        toolPAOs: action.payload
      };
    case GET_TOOL_PAOS:
    default:
      return state;
  }
};
