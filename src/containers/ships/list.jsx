import React from 'react';
import UI from 'components/ui';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { history } from 'config/routes';
import * as ShipsActions from 'actions/ships/list';
import Card from 'components/ships/list/card';
import styles from 'styles/containers/ships/list';

const {Grid: {Row, Container, Col}, Loading} = UI;

class List extends React.Component {
  constructor(props) { super(props); }
  componentWillMount() {
    this.page = Number(this.props.location.query.page) || 1;
    this.props.actions.loadShips(this.page);
  }
  changePage = (data) => {
    history.push(`/catalog?page=${data.selected + 1}`);
    this.props.actions.loadShips(data.selected + 1);
  }
  render() {
    const { list: {items = [], pagination = [], isFetching }} = this.props.state;
    return (
      <Container fluid="true">
        <Row>
          {isFetching && (
            <Loading />
          )}
          <Col xs="12" sm="12" md="12" lg="10" lgOffset="1">
            <Row className={styles.shipList}>
              {items.map(item =>
                (<Card item={item} key={item.api_id}/>)
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

const mapState = ({ shipgirls }) => ({
  state: shipgirls,
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ShipsActions, dispatch),
});

export default connect(mapState, mapDispatch)(List);
