import React, { Fragment } from 'react';
import LoginForm from '../components/forms/loginForm';
import RegisterForm from '../components/forms/registerForm';
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

import { View } from './../components/page/view/view';
import { LOGIN_PAGE } from './../utils/colors';

import Linlogo from './../res/Linventario_icon.png';
import LinlogoS from './../res/Linventario_iconMin.png';
import { Title, Cont, Body} from '../components/category/styles';

export const Login = () => {
  let navigate = useNavigate();
  let navigateR = useNavigate();
  return (

    <View theme={LOGIN_PAGE} banner={''} className="" >


      <div className="justify-content-center text-center">
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
      </div>

      <Container fluid className="h-100 m-3 " >

        <Row className='flex-grow-1 justify-content-center h-100 ' >

          <Col lg="6" style={{width: 400,}}>
            <Card >
              <h3 className="text-center" style={{padding: '10px',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Inicio de sesión</h3>
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

                    <Container>
                    <h6 className="text-center" style={{padding: '10px',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>¿No tienes cuenta?  <a href="register"
                    onRegister={(email, password) => {navigateR("/register");}}>Regístrate</a></h6>
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
