import React from 'react';
import UI from '../ui';
import styles from 'styles/components/cards/shipCard';
import {Link} from 'react-router';

const { Grid: {Col} } = UI;

export default class Card extends React.Component {
  render() {
    return (
      <Col xs="12" sm="4" md="3" className={styles.cardCol}>
        <Link to={`/${this.props.id}`}>
          <span>{this.props.name}</span><br />
          <img alt={this.props.name} src={this.props.image} className={styles.cardImg} />
        </Link>
      </Col>
    );
  }
}
