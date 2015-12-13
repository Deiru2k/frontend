import React from 'react';
import UI from 'components/ui';
import styles from 'styles/components/ships/id/stats';
import icons from 'assets/icons/stats';
import { statNames, statValues } from 'constants/dictionaries/stats';
import Icon from 'components/icon';

const { Table, Grid } = UI;

export default class Stats extends React.Component {
  constructor(props) { super(props); }
  render() {
    const { stats } = this.props;
    const leftStats = {
      health: stats.health, armor: stats.armor, anti_air: stats.anti_air,
      anti_sub: stats.anti_sub, luck: stats.luck,
    };
    const rightStats = {
      firepower: stats.firepower, torpedo: stats.torpedo,
      evasion: stats.evasion, aircraft: stats.aircraft,
      line_of_sight: stats.line_of_sight,
    };
    if (this.props.stat !== `id` && this.props.stat !== `accuracy`) {
      return (
        <Grid.Row>
          <Grid.Col xs="12" sm="12" md="6" className={styles.statCol}>
            <Table.Container className={styles.statTable}>
              <Table.Row>
                <Table.Heading className={styles.statName}>
                  Stat
                </Table.Heading>
                <Table.Heading className={styles.statValue}>
                  Stock
                </Table.Heading>
                <Table.Heading className={styles.statValue}>
                  Max
                </Table.Heading>
              </Table.Row>
              {Object.keys(leftStats).map((key, index) => (
                <Table.Row key={index}>
                  <Table.Cell className={styles.statName}>
                    <Icon glyph={icons[key]} className={styles.statIcon} /> {statNames[key]}
                  </Table.Cell>
                  <Table.Cell className={styles.statValue}>
                    {leftStats[key][0]}
                  </Table.Cell>
                  <Table.Cell className={styles.statValue}>
                    {leftStats[key][1]}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell className={styles.statName}>
                  <Icon glyph={icons.range} className={styles.statIcon} />Range
                </Table.Cell>
                <Table.Cell>
                 &nbsp;
                </Table.Cell>
                <Table.Cell className={styles.statValue}>
                 {statValues.range[this.props.stats.range]}
                </Table.Cell>
              </Table.Row>
            </Table.Container>
          </Grid.Col>
          <Grid.Col xs="12" sm="12" md="6" className={styles.statCol}>
            <Table.Container>
              <Table.Row className={styles.rightStatHeader}>
                <Table.Heading>
                   &nbsp;
                </Table.Heading>
                <Table.Heading>
                   &nbsp;
                </Table.Heading>
                <Table.Heading>
                   &nbsp;
                </Table.Heading>
              </Table.Row>
              {Object.keys(rightStats).map((key, index) => (
                <Table.Row key={index}>
                  <Table.Cell className={styles.statName}>
                    <Icon glyph={icons[key]} className={styles.statIcon} /> {statNames[key]}
                  </Table.Cell>
                  <Table.Cell className={styles.statValue}>
                    {rightStats[key][0]}
                  </Table.Cell>
                  <Table.Cell className={styles.statValue}>
                    {rightStats[key][1]}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell className={styles.statName}>
                  <Icon glyph={icons.speed} className={styles.statIcon} /> Speed
                </Table.Cell>
                <Table.Cell>
                 &nbsp;
                </Table.Cell>
                <Table.Cell className={styles.statValue}>
                 {statValues.speed[this.props.stats.speed]}
                </Table.Cell>
              </Table.Row>
            </Table.Container>
          </Grid.Col>
        </Grid.Row>
      );
    } else {
      return null;
    }
  }
}

// <Grid.Col xs="12" sm="12" md="6" className={styles.statCol}>
//     <div className={styles.statIcon}>
//       <Icon glyph={icon} height="20" width="20" />
//       <div className={styles.statName}>{statName}</div>
//     </div>
//     <span className={styles.valuesRight}>
//       {Array.isArray(this.props.values) && (
//         this.props.values[0] !== this.props.values[1] && (
//           `${this.props.values[0]} / ${this.props.values[1]}`
//         ) ||
//         this.props.values[0] === this.props.values[1] && (
//           `${this.props.values[0]}`
//         )
//       )}
//       {!Array.isArray(this.props.values) && (
//         `${statValues[this.props.stat][this.props.values] || `Unknown`}`
//       )}
//     </span>
// </Grid.Col>
