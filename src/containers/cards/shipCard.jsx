import React from 'react';
import UI from 'components/ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipCardActions from 'actions/shipgirl';
import styles from 'styles/containers/shipCard';
import Equipment from 'components/cards/equipment';
import Stat from 'components/cards/stats';
const {Grid: {Row, Col, Container}} = UI;

// import styles from 'styles/containers/shipCard';

class ShipCard extends React.Component {
  constructor(props) { super(props); }
  componentWillMount() {
    this.props.actions.loadShipGirl(this.props.params.id);
  }
  render() {
    const {
      ship_class = {name: ``}, ship_type = {name: ``},
      slots = [], slot_space = [], stats = {},
    } = this.props.ship;
    return (
      <Container fluid="true">
        <Row>
          <Col xs="12" sm="12" md="12" lg="10" lgOffset="1">
            <Row>
              <Col xs="12" sm="4" md="4" className={styles.imageCol}>
                <img src={this.props.ship.image} />
              </Col>
              <Col xs="12" sm="8" md="8" className={styles.infoCol}>
                <div className={styles.nameBar}>
                  #{this.props.ship.card_no} {this.props.ship.name}
                  <span className={styles.nameRight}>
                    {ship_class.name} Class {ship_type.name}
                  </span>
                </div>
                <Row>
                  <Col xs="12" sm="5" md="5" className={styles.stats}>
                    <h3>Stats</h3>
                    {Object.keys(stats).map((stat, index) =>
                    <Stat stat={stat} values={stats[stat]} key={index} />)}
                  </Col>
                  <Col Col xs="12" sm="5" md="5" className={styles.equipment}>
                    <h3>Equipment</h3>
                    {slots.map((item, index) =>
                    <Equipment item={item} key={index}
                    capacity={slot_space[index]} />)}
                  </Col>
                </Row>
              </Col>
            </Row>
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
