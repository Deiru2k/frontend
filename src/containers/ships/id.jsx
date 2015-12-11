import React from 'react';
import UI from 'components/ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipActions from 'actions/ships/id';
import Card from 'components/ships/id/card';

const {Grid: {Row, Col, Container}, Loading} = UI;

class ShipCard extends React.Component {
  constructor(props) { super(props); }
  componentWillMount() {
    this.props.actions.loadShip(this.props.params.id);
  }
  render() {
    const { id } = this.props.params;
    const { item, isFetching } = this.props.state[id] || {};
    return (
      <Container fluid="true">
        <Row>
          {isFetching && (
            <Loading />
          )}
          {item && (
            <Col xs="12" sm="12" md="12" lg="10" lgOffset="1">
              <Card item={item} />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

const mapState = ({ shipgirls }) => ({
  state: shipgirls,
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ShipActions, dispatch),
});

export default connect(mapState, mapDispatch)(ShipCard);
