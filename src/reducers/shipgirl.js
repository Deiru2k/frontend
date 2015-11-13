import {handleActions} from 'redux-actions';
import * as types from 'constants/shipgirl';

const initialState = {};

const shipgirl = handleActions({
  [types.LOAD_SHIP]: (state) => ({
    ...state,
    isProcess: true,
  }),

  [types.LOAD_SHIP_SUCCEEDED]: (state, ship) => ({
    ...state,
    isProcess: false,

    ...ship,
  }),
}, initialState);

export default shipgirl;
