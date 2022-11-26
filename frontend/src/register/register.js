import React, {useState, useEffect} from 'react';
import { useNavigate  } from "react-router-dom";
import axios from 'axios';
import Global from './../../Global';

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody
} from 'reactstrap';

import { 
  FormGroup,
  Form,
  Label,
  Input } from 'reactstrap';

import { View } from '../components/page/view/view';
import { LOGIN_PAGE } from '../utils/colors';
import Linlogo from './../res/Linventario_icon.png';
import LinlogoS from './../res/Linventario_iconMin.png';

export const Register = () => {

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    type: "Colaborador",
  });
  
  const [mensaje, setMensaje] = useState();

  const navigate = useNavigate();

  const { name, password, email, type } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const url=Global.url;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && password !== "" && email !== "") {
      const Usuario = {
        name,
        email,
        password,
        type,
      };
      
      await axios
        .post(url + '/users/register', Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({ name: "", password: "", email: "", type: "Colaborador" });
          setTimeout(() => {
            setMensaje("");
            navigate("/login");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });

    }
  };

  return (

    <View theme={LOGIN_PAGE} banner={''} className="text-center">


      <Col className="text-center">
      <CardImg
                        alt="Linv logo"
                        src={Linlogo}
                        style={{
                          width: 400,
                          height: 125,
                          padding: '40px'
                        }}
                        width="100%"
                      />
      </Col>

      <Container fluid className="h-100 m-3" >

        <Row className='flex-grow-1 justify-content-center h-100"' >

          <Col lg="6" style={{width: 400,}}>
            <Card >
              <h3 className="text-center" style={{padding: '10px',  fontFamily:'Cambria, Cochin, Georgia, Times,Times New Roman, serif'}}>Registro</h3>
              <CardBody>
                <Container>
                  <Row>
                  <div className="text-center">
                  <CardImg
                        alt="Linv logo"
                        src={LinlogoS}
                        style={{
                          width: 105,
                          height: 105
                        }}
                        width="100%"
                      />
                    </div>

                    <Col md="12">
                    <Form className="m-auto align-self-center" onSubmit={(e) => onSubmit(e)}> 

                    <FormGroup row className="text-center">
                      <Label for="name" sm={2} style={{padding:'1px', fontFamily:'Cochin' }}>Nombre</Label>
                      <Col sm={10} style={{padding:'10px' }}>
                      <Input type="text" name="name" id="name" placeholder="Nombre" className="w-80" style={{
                      boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
                      onChange={(e) => HandleChange(e)} value={name}/>
                      </Col>
                      </FormGroup>

                      <FormGroup row className="text-center">
                      <Label for="email" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Email </Label>
                      <Col sm={10} style={{padding:'5px' }}>
                      <Input type="text" name="email" id="email" placeholder="Email" className="w-80" style={{
                      boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
                      onChange={(e) => HandleChange(e)} value={email}/>
                      </Col>
                      </FormGroup>

                      <FormGroup row className="text-center">
                      <Label for="password" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Contraseña </Label>
                      <Col sm={10} style={{padding:'5px' }}>
                      <Input type="text" name="password" id="password" placeholder="password" className="w-80" style={{
                      boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
                      onChange={(e) => HandleChange(e)} value={password} />
                      </Col>
                      </FormGroup>

                      <Input type="hidden" name="password" id="password" value="Colaborador"
                      onChange={(e) => HandleChange(e)}/> 

                      <FormGroup check row className="text-center">
                        <Col style={{padding:'5px' }}>

            

                          <input className="w-50" style={{
                            boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
                            backgroundColor: '#6375b8',
                            borderColor:'#6375b8'
                          }}
                          type="submit" id="submit" placeholder="Guardar" />
                        </Col>
                      </FormGroup>
                    
                    
                    </Form>
                    </Col>

                    <Container padding= "100px">
                    <h6 className="text-center" style={{padding: '10px',fontFamily:'Cambria, Cochin, Georgia, Times,Times New Roman, serif'}}>¿Ya tienes cuenta?  <a href="login.js">Inicia sesión</a></h6>
                    </Container>

                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </View>
  );
};
export default Register;