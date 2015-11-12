import React from 'react';
import ShipCards from 'containers/cards/shipCards';
import UI from 'components/ui';

const {Grid: {Container}} = UI;

export default class Main extends React.Component {
  render() {
    return (
      <Container>
        <ShipCards />
      </Container>
    );
  }
}
