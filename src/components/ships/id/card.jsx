import React from 'react';
import UI from 'components/ui';
import styles from 'styles/components/ships/id/card';
import Equipment from 'components/ships/id/equipment';
import Stats from 'components/ships/id/stats';
import Charts from 'react-chartjs';

const {Grid: {Row, Col}} = UI;

class Card extends React.Component {
  render() {
    const { item } = this.props;
    const data = {
      labels: [`MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`],
      datasets: [
        {
          label: `My First dataset`,
          fillColor: `rgba(33,150,243, 0.2)`,
          strokeColor: `rgba(220,220,220,1)`,
          pointColor: `#1976D2`,
          pointStrokeColor: `#fff`,
          pointHighlightFill: `#fff`,
          pointHighlightStroke: `rgba(220,220,220,1)`,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    const chartConfig = {
      responsive: true,
      maintainAspectRatio: false,
      showScale: true,
      scaleShowGridLines: false,
      scaleStepWidth: 15,
    };
    return (
      <section>
        <Row>
          <Col xs="12">
            <div className={styles.nameBar}>
              #{item.card_no} {item.name}
              <span className={styles.nameRight}>
                {item.ship_class.name} Class {item.ship_type.name}
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4" md="3" className={styles.imageCol}>
            <img src={item.image} />
          </Col>
          <Col xs="12" sm="8" md="9" className={styles.infoCol}>
            <Row>
              <Col xs="12" sm="7" md="7" className={styles.stats}>
                <Stats stats={item.stats} />
              </Col>
              <Col xs="12" sm="5" md="5" className={styles.equipment}>
                <h3>Equipment</h3>
                {item.slots.map((slot, index) =>
                  <Equipment item={slot} key={index}
                  capacity={item.slot_space[index]} />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className={styles.sectionBar}>
              Drop statistics
            </div>
          </Col>
          <Col xs="12">
            <div>
              <Charts.Line className={styles.dropChart} data={data} options={chartConfig} height="300" />
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Card;
