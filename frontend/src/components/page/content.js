import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const Content = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md='12'>{props.children}</Col>
      </Row>
    </Container>
  );
};
