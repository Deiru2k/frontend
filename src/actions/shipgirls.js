import api from 'api';
import * as types from 'constants/shipgirls';

// load shipgirls
const loadShipgirlsStarted = () => ({
  type: types.LOAD_SHIPS,
});

const loadShipgirlsSucceeded = ({results, pagination, page}) => ({
  type: types.LOAD_SHIPS_SUCCEEDED,
  ships: results,
  pagination: {
    ...pagination,
    page,
  },
});

function loadShipGirls(page = 0) {
  return (dispatch) => {
    dispatch(loadShipgirlsStarted());
    return api.get(`catalog`, {page}).then(
      ({ status, body }) => {
        if (status === 200) {
          dispatch(loadShipgirlsSucceeded({...body, page}));
        }
      },
    );
  };
}

export {loadShipGirls};
