import React from 'react';
import UI from '../ui';
import styles from 'styles/components/cards/card';
import {Link} from 'react-router';

const { Grid: {Col} } = UI;

export default class Card extends React.Component {
  render() {
    return (
      <Col xs="6" sm="4" md="2" lg="2" className={styles.cardCol}>
        <Link to={`/catalog/${this.props.ship.api_id}`} className={styles.cardImg}>
          <span className={styles.shipNo}>#{this.props.ship.card_no}</span>
          <span className={styles.shipName}>{this.props.ship.name}</span>
          <span className={styles.shipType}>{this.props.ship.ship_type.code}</span>
          { /* <span className={styles.shipClass}>{this.props.ship.ship_class.name} Class</span> */}
          <img alt={this.props.ship.name} src={this.props.ship.image}/>
        </Link>
      </Col>
    );
  }
}
