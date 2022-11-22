import 'regenerator-runtime/runtime';
import React, { Component }from 'react';
import { Category } from '../category';
import { Col, Container, Row } from 'reactstrap';
const { APIURL } = require("../../constants.json");
export class ListOfCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    const categories = this.state.categories || {};
    console.log(this.state);
    return (
      <Container fluid>
        <Row>
          {categories.map((x, i) => (
            <Col md="3" key={i}>
              <Category {...x}></Category>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  async componentDidMount() {
    const response = await fetch(`${APIURL}/categories`);
    const respJson = await response.json();
    if (respJson.success) {
      console.log(respJson);
      this.setState({
        categories: respJson.data,
      });
    }
  }
}
