import api from 'api';
import * as types from 'constants/shipgirls';

// load shipgirls
const loadShipgirlsStarted = () => ({
  type: types.LOAD_SHIPS,
});

const loadShipgirlsSucceeded = ({data}) => ({
  type: types.LOAD_SHIPS_SUCCEEDED,
  ships: data,
});

function loadShipGirls(page) {
  return (dispatch) => {
    dispatch(loadShipgirlsStarted());
    return api.get(`shipgirls?page=${page}`).then(
      ({ status, body }) => {
        if (status === 200) {
          dispatch(loadShipgirlsSucceeded(body));
        }
      },
    );
  };
}

export {loadShipGirls};
