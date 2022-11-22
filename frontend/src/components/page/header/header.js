import React from 'react';
import {
  TopNav,
  TopNavLink,
  TopNavSearchBar,
  TopNavSearchButton,
} from './styles';
import { Container, Row, Col } from 'reactstrap';
import { pageColors } from './../../../utils/colors';
import { Link } from 'react-router-dom';

export const Header = ({ theme, items, searchbar }) => {
  return (
    <TopNav color={pageColors[theme].navbar}>
      <Container>
        <Row>
          <Col md="10">
            {items.map((x, i) => (
              <TopNavLink textColor={pageColors[theme].navbarLinkText}  bgColor={pageColors[theme].navbarLink} activeColor={pageColors[theme].navbarLinkActive}>
              <Link key={i} to={x.link} >
                {x.text}
              </Link>
              </TopNavLink>
            ))}
          </Col>
          {searchbar ? (
            <Col md="2">
              <Container>
                <Row>
                  <Col md="8">
                    <TopNavSearchBar></TopNavSearchBar>
                  </Col>
                  <Col md="2">
                    <TopNavSearchButton>Buscar</TopNavSearchButton>
                  </Col>
                </Row>
              </Container>
            </Col>
          ) : (
            <Container></Container>
          )}
        </Row>
      </Container>
    </TopNav>
  );
};
