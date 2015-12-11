import React from 'react';
import styles from 'styles/components/ships/id/equipment';
import UI from 'components/ui';

const {Grid: {Row, Col}} = UI;


export default class Equipment extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <Row className={styles.equipment}>
        <Col xs="10" className={styles.equipmentName}>{this.props.item.name || this.props.item.name_kanji}</Col>
        <Col xs="2">{this.props.capacity}</Col>
      </Row>
    );
  }
}
