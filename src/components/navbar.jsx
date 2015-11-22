import React from 'react';
import {Link} from 'react-router';
import UI from 'components/ui';
import styles from 'styles/navbar';

const {Grid: {Container, Row, Col}} = UI;


export default class Navbar extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <section className={styles.navbar}>
        <Container fluid="true">
          <Row className={styles.navbarInner}>
            <Col xs="12" sm="12" md="12" lg="10" lgOffset="1">
              <b><Link to={`/catalog`} className={styles.navbarLink}>Kancolle.io</Link></b>
              <span className={styles.navbarRight}>
                <a href className={styles.navbarButton}>Sign Up</a>
                <a href className={styles.navbarButton}>Sign In</a>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
