import React from 'react';
import {
  Col, Container, Row, Image, Card, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';
import Layout from '../../containers/Layout';
import styles from './view.module.scss';
import image1 from '../../images/Image5@2x.png';

const ViewPage = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <Layout>
      <Container>
        <Row className="row row-cols-2 row-cols-sm-6 justify-content-md-center">
          <Col xs={12} sm={12}>
            <Container className="px-1">
              <h2 className="font-weight-bold">{product.attributes.title}</h2>

              <Row className={styles.info}>
                <Col xs={12} sm={7} md={7} className="border rounded"><Image src={image1} fluid /></Col>
                <Col xs={12} sm={5} md={5} className="px-0">
                  <Card className="border-left-0 border-right-0 px-0">
                    <Card.Body className="px-1 pb-1">
                      <Row className="px-0 mb-2">
                        <Col className={styles.socialAction}>
                          <span className="material-icons mr-2">
                            favorite_border
                          </span>
                          <span>Wishlist</span>
                        </Col>
                        <Col className={styles.socialAction}>
                          <span className="material-icons mr-2">
                            share
                          </span>
                          <span>Share</span>
                        </Col>
                      </Row>
                      <div className="px-0 mb-2">
                        <label htmlFor={styles.price} className="mb-0">Price</label>
                        <Card.Text id={styles.price} className={`${styles.displayValue} text-danger font-weight-bolder`}>{product.attributes.price}</Card.Text>
                      </div>
                      <div className="px-0 mb-2">
                        <label htmlFor="condition" className="mb-0">Item condition</label>
                        <Card.Text id="condition" className={styles.displayValue}>
                          {product.attributes.condition}
                        </Card.Text>
                      </div>
                      <div className="px-0 mb-2">
                        <label htmlFor="location" className="mb-0">Item location</label>
                        <Card.Text id="location" className={styles.displayValue}>
                          {product.attributes.location}
                        </Card.Text>
                      </div>
                      <div className={`px-0 pb-2 mb-2 ${styles.sellerInfoRow}`}>
                        <label htmlFor="sellerInfo" className="mb-0">Seller info</label>
                        <Row id="sellerInfo">
                          <Col xs="auto" className={`material-icons ${styles.accountCircle}`}>
                            account_circle
                          </Col>
                          <Col>
                            <div className={styles.displayValue}>
                              {product.attributes.seller_name}
                            </div>
                            <label className="mb-0">
                              {product.attributes.seller_type}
                            </label>
                          </Col>
                        </Row>
                      </div>
                      <footer className={`${styles.actFooter}`}>
                        <p className={styles.hideWhenSmall}>Interested with the ad? Contact the seller</p>
                        <Button variant="outline-danger" className="text-left mb-2">
                          <span className="material-icons">
                            phone
                          </span>
                          <span>
                            {product.attributes.phone}
                          </span>
                        </Button>
                        <Button variant="outline-danger" className="text-left mb-2">
                          <span className="material-icons">
                            email
                          </span>
                          <span>Email</span>
                        </Button>
                        <Button variant="outline-danger" className="text-left mb-2">
                          <span className="material-icons">
                            forum
                          </span>
                          <span>Chat</span>
                        </Button>
                      </footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ViewPage;
