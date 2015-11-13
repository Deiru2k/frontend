import React from 'react';
import UI from 'components/ui';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipCardsActions from 'actions/shipgirls';
const {Grid: {Row, Container}} = UI;

import styles from 'styles/containers/shipCards';

import Card from 'components/cards/card';

class ShipCards extends React.Component {
  componentWillMount() {
    this.props.actions.loadShipGirls(1);
  }
  getGirls() {
    console.log(this.props);
    return this.props.ships || [];
  }
  changePage = (data) => {
    this.props.actions.loadShipGirls(data.selected + 1);
  }
  render() {
    return (
      <Container>
        <Row>
          <ReactPaginate previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageNum={this.props.pagination.total}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            clickCallback={this.changePage}
            containerClassName={styles.pagination}
            subContainerClassName={styles.pagination}
            activeClassName={"active"} />
        </Row>
        <Row>
          {this.getGirls().map(girl =>
            <Card key={girl.api_id} id={girl.api_id} name={girl.name}
            card_no={girl.card_no} image={girl.image} />
          )}
        </Row>
      </Container>
    );
  }
}

const mapState = ({shipgirls}) => {
  return {
    pagination: shipgirls.pagination,
    ships: shipgirls.ships,
  };
};

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ShipCardsActions, dispatch),
});

export default connect(mapState, mapDispatch)(ShipCards);
