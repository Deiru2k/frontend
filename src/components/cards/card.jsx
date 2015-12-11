import React from 'react';
import UI from '../ui';
import styles from 'styles/components/cards/card';
import {Link} from 'react-router';

const { Grid: {Col} } = UI;

export default class Card extends React.Component {
  constructor(props) { super(props); }
  render() {
    const {item} = this.props;
    return (
      <Col xs="6" sm="4" md="2" lg="2" className={styles.cardCol}>
        <Link to={`/catalog/${item.api_id}`} className={styles.cardImg}>
          <span className={styles.shipNo}>#{item.card_no}</span>
          <span className={styles.shipName}>{item.name}</span>
          <span className={styles.shipType}>{item.ship_type.code}</span>
          { /* <span className={styles.shipClass}>{item.ship_class.name} Class</span> */}
          <img alt={item.name} src={item.image}/>
        </Link>
      </Col>
    );
  }
}
