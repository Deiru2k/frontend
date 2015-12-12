import React from 'react';
import UI from 'components/ui';
import styles from 'styles/components/ships/id/stats';
import { statNames, statValues } from 'constants/dictionaries/stats';

const { Grid: { Row, Col } } = UI;

export default class Stat extends React.Component {
  constructor(props) { super(props); }
  render() {
    if (this.props.stat !== `id` && this.props.stat !== `accuracy`) {
      const statName = statNames[this.props.stat];
      return (
        <Col xs="12" sm="12" md="6" className={styles.statCol}>
          <Row>
            <Col xs="6">
              {statName}
            </Col>
            <Col xs="6" className={styles.valuesRight}>
              {Array.isArray(this.props.values) && (
                `${this.props.values[0]} / ${this.props.values[1] || this.props.values[0]}`
              )}
              {!Array.isArray(this.props.values) && (
                `${statValues[this.props.stat][this.props.values] || `Unknown`}`
              )}
            </Col>
          </Row>
        </Col>
      );
    } else {
      return null;
    }
  }
}
