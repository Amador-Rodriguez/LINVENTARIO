import React, { Fragment } from 'react';
import { useNavigate  } from "react-router-dom";
import Linlogo from './../res/Linventario_icon.png';
import Background from './../res/rects.png';

import { Container,
  CardText,
  Col,
  Button,
  Row,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  FormText } from 'reactstrap';


import { View } from './../components/page/view/view';
import { MAIN_PAGE } from './../utils/colors';

export const NewTransaction = () => {
  let navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${Background}) `, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >

    <View theme={MAIN_PAGE} banner={''} className="text-center" >


      <Col className="text-center">
      </Col>

      <Container fluid className="d-flex vh-100" >

        <Row className="m-auto align-self-center">

          <Card border="dark"


    style={{
      width: '62rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)',
      padding: '20px'
    }}
  >

    <CardTitle tag="h1" className="text-center" style={{fontFamily:'Cochin'}}>
              Nueva transacción
              </CardTitle>

    <CardBody className="align-items-center">
      <CardText tag="h5" className="m-auto align-self-center">
      <Form className="m-auto align-self-center">
        <FormGroup row className="text-center">

        <FormGroup row>
          <Label for="productDate" sm={2} style={{padding:'20px', fontFamily:'Cochin' }}>Fecha</Label>
          <Col sm={10} style={{padding:'20px' }}>
          <Input type="date" name="productDate" id="productDate" placeholder="date placeholder" className="w-80" style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)'
            }}/>
          </Col>
        </FormGroup>

          <Label for="productName" sm={2} style={{fontFamily:'Cochin' }}>Producto</Label>
          <Col sm={10}>
            <Input type="select" name="productName" id="productName" placeholder="Nombre del producto" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)'
            }}>
            <option>Cargador tipo C</option>
            <option>USB 8GB</option>
            <option>Tarjeta de video RTX 3050</option>
            <option>Disco duro 1trb</option>
              </Input>
          </Col>
        </FormGroup>
        <FormGroup row className="text-center">
        <Label for="amount" sm={2} style={{padding:'10px', fontFamily:'Cochin' }}>Cantidad</Label>
          <Col sm={10} style={{padding:'10px' }}>
            <Input type="text" name="amount" id="amount" placeholder="Cantidad" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="entrada"sm={2} style={{padding:'10px', fontFamily:'Cochin' }}>Entrada</Label>
        <Col sm={10} style={{padding:'10px' }}>
            <Input type="text" name="entrada" id="entrada" placeholder="Entrada" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)',
              borderColor:'green'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="salida" sm={2} style={{padding:'10px', fontFamily:'Cochin' }}>Salida</Label>
        <Col sm={10} style={{padding:'10px' }}>
            <Input type="text" name="salida" id="salida" placeholder="Salida" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)',
              borderColor:'red'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="obs" sm={2} style={{fontFamily:'Cochin'}}>Observaciones</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <Input type="textarea" name="obs" id="obs" rows="5" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup check row className="text-center">
          <Col style={{padding:'5px' }}>
            <Button className="w-50" style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Guardar</Button>
          </Col>
        </FormGroup>
      </Form>

      </CardText>
    </CardBody>
  </Card>
        </Row>

      </Container>

    </View>

    </div>

  );

};
