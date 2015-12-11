import React from 'react';
import UI from 'components/ui';
import styles from 'styles/components/ships/id/card';
import Equipment from 'components/ships/id/equipment';
import Stat from 'components/ships/id/stats';

const {Grid: {Row, Col}} = UI;

class Card extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Row>
        <Col xs="12" sm="4" md="4" className={styles.imageCol}>
          <img src={item.image} />
        </Col>
        <Col xs="12" sm="8" md="8" className={styles.infoCol}>
          <div className={styles.nameBar}>
            #{item.card_no} {item.name}
            <span className={styles.nameRight}>
              {item.ship_class.name} Class {item.ship_type.name}
            </span>
          </div>
          <Row>
            <Col xs="12" sm="5" md="5" className={styles.stats}>
              <h3>Stats</h3>
              {Object.keys(item.stats).map((stat, index) =>
              <Stat stat={stat} values={item.stats[stat]} key={index} />)}
            </Col>
            <Col Col xs="12" sm="5" md="5" className={styles.equipment}>
              <h3>Equipment</h3>
              {item.slots.map((slot, index) =>
              <Equipment item={slot} key={index}
              capacity={item.slot_space[index]} />)}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Card;
