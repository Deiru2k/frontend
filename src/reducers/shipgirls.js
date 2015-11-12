import {handleActions} from 'redux-actions';
import * as types from 'constants/shipgirls';

const initialState = {};

const shipgirls = handleActions({
  [types.LOAD_SHIPS]: (state) => ({
    ...state,
    inProcess: true,
  }),

  [types.LOAD_SHIPS_SUCCEEDED]: (state, {ships}) => ({
    ...state,
    inProcess: false,

    ships,
  }),
}, initialState);

export default shipgirls;
