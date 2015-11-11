import React from 'react';
import UI from 'components/ui';
import ShipCards from 'components/cards/shipCards';
const { Grid: {Container} } = UI;

export default class Root extends React.Component {
  render() {
    const girls = [
        {id: 1, name: `Akagi`, image: `http://vignette1.wikia.nocookie.net/kancolle/images/a/a4/CV_Akagi_083_Card.jpg/revision/latest?cb=20150519024231`},
        {id: 2, name: `Kaga`, image: `http://vignette3.wikia.nocookie.net/kancolle/images/3/34/CV_Kaga_084_Card.jpg/revision/latest?cb=20150519024331`},
        {id: 3, name: `Nagato`, image: `http://vignette1.wikia.nocookie.net/kancolle/images/5/5e/BB_Nagato_080_Card.jpg/revision/latest?cb=20150519023931`},
        {id: 4, name: `Katori`, image: `http://vignette4.wikia.nocookie.net/kancolle/images/a/a2/CT_Katori_154_Card.jpg/revision/latest?cb=20150519035433`},
        {id: 5, name: `Mutsu`, image: `http://vignette1.wikia.nocookie.net/kancolle/images/4/4a/BB_Mutsu_081_Card.jpg/revision/latest?cb=20150519024031`},
        {id: 6, name: `Kisaragi`, image: `http://vignette2.wikia.nocookie.net/kancolle/images/4/42/DD_Kisaragi_002_Card.jpg/revision/latest?cb=20150519010038`},
        {id: 7, name: `Fubuki Kai Ni`, image: `http://vignette2.wikia.nocookie.net/kancolle/images/d/de/DD_Fubuki_Kai_Ni_426_Card.jpg/revision/latest?cb=20150519063604`},
    ];
    return (
      <Container>
        <ShipCards girls={girls} />
      </Container>
    );
  }
}
