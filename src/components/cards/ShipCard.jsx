import React from 'react';
import UI from '../ui';
const { Grid: {Col} } = UI;

export default class ShipCard extends React.Component {
  render() {
    const style = {
      width: `218px`,
      height: `300px`,
      borderRadius: `4px`,
      borderColor: `lightGray`,
      marginLeft: `10px`,
      marginTop: `10px`,
    };
    return (
      <Col xs="6" sm="4">
        <img alt={this.props.name} src={this.props.image} style={style} />
      </Col>
    );
  }
}
