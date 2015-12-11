import {handleActions} from 'redux-actions';
import * as types from 'constants/shipgirls';

const initialState = {
  list: {},
};

const shipgirls = handleActions({
  [types.LOAD_SHIPS]: (state) => ({
    ...state,
    list: {
      isFetching: true,
    },
  }),
  [types.LOAD_SHIPS_SUCCEEDED]: (state, { results, pagination }) => ({
    ...state,
    list: {
      items: results,
      pagination,
    },
  }),
  [types.LOAD_SHIPS_FAILED]: (state, { errors }) => ({
    ...state,
    list: {
      errors,
    },
  }),
  [types.LOAD_SHIP]: (state, { id }) => ({
    ...state,
    [id]: {
      ...state[id],
      isFetching: true,
    },
  }),
  [types.LOAD_SHIP_SUCCEEDED]: (state, { id, item }) => ({
    ...state,
    [id]: {
      item,
    },
  }),
  [types.LOAD_SHIP_FAILED]: (state, { id, errors }) => ({
    ...state,
    [id]: {
      errors,
    },
  }),
}, initialState);

export default shipgirls;
