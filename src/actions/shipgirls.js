import api from 'api';
import * as types from 'constants/shipgirls';

// load shipgirls
const loadShipsStarted = () => ({
  type: types.LOAD_SHIPS,
});

const loadShipsSucceeded = (ships) => ({
  type: types.LOAD_SHIPS_SUCCEEDED,
  ...ships,
});

const loadShipsFailed = ({ errors }) => ({
  type: types.LOAD_SHIPS_FAILED,
  ...errors,
});

function loadShips(page = 0) {
  return (dispatch) => {
    dispatch(loadShipsStarted());

    return api.get(`catalog`, {page}).then(
      ({ body }) => dispatch(loadShipsSucceeded(body)),
      ({ body }) => dispatch(loadShipsFailed(body)),
    );
  };
}

export { loadShips };
