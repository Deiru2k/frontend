import React from 'react';
import UI from 'components/ui';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ShipCardsActions from 'actions/shipgirls';
const {Grid: {Row, Container, Col}} = UI;

import styles from 'styles/containers/shipCards';

import Card from 'components/cards/card';

class ShipCards extends React.Component {
  constructor(props) { super(props); }
  componentWillMount() {
    this.page = Number(this.props.location.query.page) || 1;
    this.props.actions.loadShipGirls(this.page);
  }
  changePage = (data) => {
    this.context.history.pushState(null, `/catalog`, {page: data.selected + 1});
    this.props.actions.loadShipGirls(data.selected + 1);
  }
  render() {
    const { ships = [], pagination = [] } = this.props;
    return (
      <Container fluid="true">
        <Row>
          <Col xs="12" sm="12" md="12" lg="10" lgOffset="1">
            <Row className={styles.shipList}>
              {ships.map(girl =>
                <Card ship={girl} key={girl.api_id}/>
              )}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="10" lgOffset="1" className={styles.paginationContainer}>
            <ReactPaginate previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              initialSelected = {Number(this.page) - 1}
              pageNum={pagination.total}
              marginPagesDisplayed={0}
              pageRangeDisplayed={3}
              clickCallback={this.changePage}
              containerClassName={styles.paginationRoot}
              subContainerClassName={styles.pagination}
              activeClassName={styles.pageActive}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

ShipCards.contextTypes = {
  history: React.PropTypes.object.isRequired,
};

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
