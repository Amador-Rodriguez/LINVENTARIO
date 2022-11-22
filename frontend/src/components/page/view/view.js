import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col,Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  CardImg } from 'reactstrap';
import { Header } from '../header/header';
import { Content } from '../content';
import { Footer } from '../footer';
import { Announcement } from '../announcement/announcement';
import { SlideShow } from '../slideshow/slideshow';
import { LOGIN_PAGE } from './../../../utils/colors';
import { NavLink as RRNavLink } from 'react-router-dom';
import Linlogo from '/src/res/Linventario_icon.png';

const navbaritems = [
  {
    text: 'Inicio',
    link: 'index',
  },
  {
    text: 'Acerca',
    link: 'www.google.com',
  },
  {
    text: 'Características',
    link: 'www.google.com',
  },
  {
    text: 'Web',
    link: 'www.google.com',
  },
  {
    text: 'Precio',
    link: 'www.google.com',
  },
  {
    text: 'Contacto',
    link: 'www.google.com',
  },
  {
    text: 'Ingresar',
    link: 'www.google.com',
  },
  {
  },
];

const footeritems = [
  {
    text: 'Derechos reservados @ 2022 Equipo No compila'

  }
];

var logedIn = false;

export const View = (props) => {
  return (
    <Container fluid>
      <Row >
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
        <NavbarBrand href="/"><CardImg
                        alt="Linv logo"
                        src={Linlogo}
                        style={{
                          width: 200,
                        }}
                        width="100%"
                      /></NavbarBrand>
          <NavLink tag={RRNavLink} to="/">Inicio</NavLink>
          <NavLink tag={RRNavLink} to="/login">Iniciar sesión</NavLink>
          <NavLink tag={RRNavLink} to="/register">Registrarse</NavLink>
          <NavLink tag={RRNavLink} to="/newProduct">Producto</NavLink>
          <NavLink tag={RRNavLink} to="/newTransaction">Transaccion</NavLink>
          <NavLink tag={RRNavLink} to="/dashboard">Menu</NavLink>
          <NavLink tag={RRNavLink} to="/search">Buscar</NavLink>
          <NavLink tag={RRNavLink} to="/profile">Perfil</NavLink>
          </Nav>
        </Navbar>
      </Row>


          {props.banner == 'slideshow' ? (
            <SlideShow
              slides={[
                {
                  number: 0,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto1',
                },
                {
                  number: 1,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto2',
                },
                {
                  number: 2,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto3',
                },
              ]}
            ></SlideShow>
          ) : props.banner == 'announcement' ? (
            <Announcement></Announcement>
          ) : (
            <div></div>
          )}
          <Content>{props.children}</Content>


      <Footer theme={props.theme} items={footeritems}></Footer>
    </Container>
  );
};
