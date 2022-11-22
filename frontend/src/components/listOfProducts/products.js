/* import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Product } from '../product/product';
import { Col, Container, Row } from 'reactstrap';
import Store from '../../utils/store';

export class ListOfProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }

  async componentDidMount() {
    try {
      Store().getProducts({
        callback: async (response) => {
          console.log('response', response);
          if (response.success) {
            this.setState({
              products: response.data.products,
            });
            console.log('Products', response.data.products);
          }
        },
      });
    } catch (error) {}
  }
  render() {
    var products = this.state.products || [];
    console.log('Products2', products);
    return (
      <Container fluid>
        <Row>
          {products.map((x, i) => (
            <Col md="3" key={i}>
              <Product image={x.image} {...x}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
*/