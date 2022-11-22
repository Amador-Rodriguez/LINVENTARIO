import React, { Fragment } from 'react';
import { useNavigate  } from "react-router-dom";


import { Container, 
  CardText, 
  Col, 
  Button, 
  Row, 
  CardTitle, 
  CardSubtitle,
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

export const Profile = () => {
  let navigate = useNavigate();

  return (
    <div  >
      
    <View theme={MAIN_PAGE} banner={''} className="text-center" >

    <Container fluid  style={{padding: '10px'}} className="m-auto align-self-center">


<Row className="m-auto align-self-center" style={{padding: '20px'}}>
<div className="align-items-center" style={{fontFamily:'Cochin', paddingTop:'20px'}}>
  <Row className="text-center">
            <h1 className="text-center">Perfil de usuario</h1>
            </Row>

            
</div>

<div style={{ paddingBottom:'20px'}}>
            <hr></hr>
            </div>

    <Card border="dark" className="m-auto align-self-center"
    
    style={{
      width: '122rem',
      height: '50rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)'
    }}
  >
    <CardBody className="align-items-center">
    <Row className="m-auto align-self-center">

    <FormGroup check row className="text-center">
          <Col style={{padding:'5px' }}>

    <img
    style={{
      width: '20rem',
      height: '20rem',
      padding: '20px'
      
    }}
    alt="Foto de perfil"
    src='https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png'
  /> 

</Col>
        </FormGroup>

<FormGroup check row className="text-center">
          <Col style={{padding:'5px' }}>

            <Button className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Cambiar foto</Button>
          </Col>
        </FormGroup>

<div style={{ paddingBottom:'20px'}}>
            <hr></hr>
            </div>

</Row>

<FormGroup row className="text-center">
          <Label for="name" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Nombre </Label>
          <Col sm={10} style={{padding:'5px' }}>
          <Input type="text" name="name" id="name" placeholder="Leon Abogato" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="email" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Email </Label>
          <Col sm={10} style={{padding:'5px' }}>
          <Input type="text" name="email" id="email" placeholder="miau1234@gmail.com" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="storeName" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Nombre de la tienda</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <Input type="text" name="storeName" id="storeName" placeholder="Black Cat Electronics" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>



        <FormGroup check row className="text-center">
          <Col style={{padding:'5px' }}>
            <Button className="w-50" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Guardar cambios</Button>
          </Col>
        </FormGroup>
      
    </CardBody>
  </Card>


</Row>
 </Container>

  
    </View>

    </div>

  );

};