import { SET } from './actions';

const reducer = {
  [SET]: (state, action) => Object.assign({}, state, { turn: (state.turn+1) }),
};

const initialState = {
    board : [1, -1, 0, 0, 0, 0, 0, 0, 0],
    turn : 0
};

export default (state = initialState, action) => {
  if (!action.type || !reducer[action.type]){
    return state;
  }
  return reducer[action.type](state, action);
};