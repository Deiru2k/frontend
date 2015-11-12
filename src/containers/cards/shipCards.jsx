import React from 'react';
import UI from 'components/ui';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipCardsActions from 'actions/shipgirls';
const { Grid: {Row}, Button } = UI;

import ShipCard from 'components/cards/shipCard';

class ShipCards extends React.Component {
  componentWillMount() {
    this.props.actions.loadShipGirls(0);
  }
  getGirls() {
    return this.props.ships || [];
  }
  changePage(page) {
    this.props.actions.loadShipGirls(page);
  }
  render() {
    return (
      <div>
        <Row>
          <Button onClick={this.changePage.bind(this, 1)} />
          <Button onClick={this.changePage.bind(this, 2)} />
          <Button onClick={this.changePage.bind(this, 3)} />
        </Row>
        <Row>
          {this.getGirls().map(girl =>
            <ShipCard key={girl.id} name={girl.name} image={girl.image} />
          )}
        </Row>
        <Row />
      </div>
    );
  }
}

const mapState = ({shipgirls}) => {
  return {
    ships: shipgirls.ships,
  };
};

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ShipCardsActions, dispatch),
});

export default connect(mapState, mapDispatch)(ShipCards);
