import {handleActions} from 'redux-actions';
import * as types from 'constants/shipgirls';

const initialState = {
  pagination: {
    visiblePages: 4,
  },
};

const shipgirls = handleActions({
  [types.LOAD_SHIPS]: (state) => ({
    ...state,
    inProcess: true,
  }),

  [types.LOAD_SHIPS_SUCCEEDED]: (state, {ships, pagination}) => ({
    ...state,
    inProcess: false,

    ships,
    pagination,
  }),
}, initialState);

export default shipgirls;
