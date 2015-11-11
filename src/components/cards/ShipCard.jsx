import React from 'react';
import UI from '../ui';
import styles from 'styles/components/cards/shipCard';
const { Grid: {Col} } = UI;

export default class ShipCard extends React.Component {
  render() {
    return (
      <Col xs="6" sm="4" md="3" className={styles.cardCol}>
        <img alt={this.props.name} src={this.props.image} className={styles.cardImg} />
      </Col>
    );
  }
}
