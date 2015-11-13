import React from 'react';
import UI from 'components/ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipCardActions from 'actions/shipgirl';
const {Grid: {Row, Col, Container}} = UI;

// import styles from 'styles/containers/shipCard';

class ShipCard extends React.Component {
  componentWillMount() {
    this.props.actions.loadShipGirl(this.props.params.id);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="2" sm="4" md="4">
            <img src={this.props.ship.image} />
          </Col>
          <Col xs="10" sm="8" md="8">
            No #{this.props.ship.card_no} {this.props.ship.name}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapState = ({shipgirl}) => {
  console.log(shipgirl);
  return {ship: shipgirl.ship || {}};
};

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ShipCardActions, dispatch),
});

export default connect(mapState, mapDispatch)(ShipCard);
