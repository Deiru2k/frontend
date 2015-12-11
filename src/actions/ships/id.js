import api from 'api';
import * as types from 'constants/shipgirls';

const loadShipStarted = (id) => ({
  type: types.LOAD_SHIP,
  id,
});

const loadShipSucceeded = (id, item) => ({
  type: types.LOAD_SHIP_SUCCEEDED,
  id,
  item,
});

const loadShipFailed = (id, errors) => ({
  type: types.LOAD_SHIP_FAILED,
  id,
  errors,
});

function loadShip(id) {
  return (dispatch) => {
    dispatch(loadShipStarted(id));
    return api.get(`catalog/${id}`).then(
      ({ body }) => dispatch(loadShipSucceeded(id, body)),
      ({ body }) => dispatch(loadShipFailed(id, body)),
    );
  };
}

export {loadShip};
