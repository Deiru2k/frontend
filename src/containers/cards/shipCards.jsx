import React from 'react';
import UI from 'components/ui';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipCardsActions from 'actions/shipgirls';
const { Grid: {Row} } = UI;

import ShipCard from 'components/cards/shipCard';

class ShipCards extends React.Component {
  componentWillMount() {
    this.props.actions.loadShipGirls();
  }
  getGirls() {
    return this.props.ships || [];
  }
  render() {
    return (
      <Row>
        {this.getGirls().map(girl =>
          <ShipCard key={girl.id} name={girl.name} image={girl.image} />
        )}
      </Row>
    );
  }
}

const mapState = ({ships}) => {
  return {
    ships: ships,
  };
};

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ShipCardsActions, dispatch),
});

export default connect(mapState, mapDispatch)(ShipCards);
