import React from 'react';
import ShipCard from './ShipCard';
import UI from '../ui';
const { Grid: {Row} } = UI;

export default class ShipCards extends React.Component {
  getGirls() {
    return this.props.girls;
  }
  render() {
    return (
      <Row>
        {this.getGirls().map(girl =>
          <ShipCard key={girl.id} name={girl.name} image={girl.image} />
        )}
      </Row>
    );
  }
}
