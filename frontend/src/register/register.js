import React, { Fragment } from 'react';
import LoginForm from '../components/forms/registerForm';
import { useNavigate  } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from 'reactstrap';

import { View } from '../components/page/view/view';
import { LOGIN_PAGE } from '../utils/colors';
import logo from './../res/logoTemp.png';
import Linlogo from './../res/Linventario_icon.png';
import LinlogoS from './../res/Linventario_iconMin.png';
import { Title, Cont, Body} from '../components/category/styles';

export const Register = () => {
  let navigate = useNavigate();
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
                      <LoginForm
                        onLogin={(email, password) => {

                            navigate("/main");

                        }}
                      ></LoginForm>
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
