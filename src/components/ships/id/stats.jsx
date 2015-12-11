import React from 'react';
import UI from 'components/ui';
import statNames from 'constants/dictionaries/stats';

const { Grid: { Row, Col } } = UI;

export default class Stat extends React.Component {
  constructor(props) { super(props); }
  render() {
    if (this.props.stat !== `id`) {
      return (
        <Col xs="12" sm="6">
          <Row>
            <Col xs="6">
              {statNames[this.props.stat]}
            </Col>
            <Col xs="6">
              {this.props.values[0]} / {this.props.values[1] || this.props.values[0]}
            </Col>
          </Row>
        </Col>
      );
    } else {
      return null;
    }
  }
}
