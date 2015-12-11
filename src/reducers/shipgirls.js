import {handleActions} from 'redux-actions';
import * as types from 'constants/shipgirls';

const initialState = {
  pagination: {
    visiblePages: 4,
  },
};

const shipgirls = handleActions({
  [types.LOAD_SHIPS]: () => ({
    isFetching: true,
  }),

  [types.LOAD_SHIPS_SUCCEEDED]: (obj) => (obj),
}, initialState);

export default shipgirls;
