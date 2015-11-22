import React from 'react';
import UI from 'components/ui';

const { Grid: { Row, Col } } = UI;

export default class Stat extends React.Component {
  constructor(props) { super(props); }
  render() {
    if (this.props.stat !== `id`) {
      return (
        <Row>
          <Col xs="8">
            {this.props.stat}
          </Col>
          <Col xs="4">
            {this.props.values[0]} / {this.props.values[1] || this.props.values[0]}
          </Col>
        </Row>
      );
    } else {
      return null;
    }
  }
}
