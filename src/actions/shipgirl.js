import api from 'api';
import * as types from 'constants/shipgirl';

const loadShipgirlStarted = () => ({
  type: types.LOAD_SHIP,
});

const loadShipGirlSucceeded = (ship) => ({
  type: types.LOAD_SHIP_SUCCEEDED,

  ship,
});

function loadShipGirl(id) {
  return (dispatch) => {
    dispatch(loadShipgirlStarted());
    return api.get(`catalog/${id}`).then(
      ({status, body}) => {
        if (status === 200) {
          dispatch(loadShipGirlSucceeded(body));
        }
      },
    );
  };
}

export {loadShipGirl};
