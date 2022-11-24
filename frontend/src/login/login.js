import React, {useState, useEffect} from 'react';
import { Navigate  } from "react-router-dom";
import axios from 'axios';
import Global from './../../Global';

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from 'reactstrap';

import { 
  FormGroup,
  Label } from 'reactstrap';

import { View } from './../components/page/view/view';
import { LOGIN_PAGE } from './../utils/colors';

import Linlogo from './../res/Linventario_icon.png';
import LinlogoS from './../res/Linventario_iconMin.png';

export const Login = () => {

  const url=Global.url;

  //hook
  const [user, logUser] = useState ({
    email: null,
    password: null
    });

    const [redirect, setRedirect] = useState(false);

    let emailRef = React.createRef();
    let passwordRef = React.createRef();

    const changeState = () =>{
      logUser({
          email: emailRef.current.value,
          password: passwordRef.current.value
      });

      console.log(user);

  }

  const sendData = (e) =>{

    e.preventDefault();
    changeState();
    //peticion http post
    axios.post(url + '/login', user).then(res=> {
        setRedirect(true);
        console.log(res.user);
    },);

}


if(redirect){
    return <Navigate to="/" />;
}

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

                    <form className="m-auto align-self-center" onSubmit={sendData}> 

                    <FormGroup row className="text-center">
                      <Label for="email" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Email </Label>
                      <Col sm={10} style={{padding:'5px' }}>
                      <input type="text" name="email" id="email" placeholder="Email" className="w-80" style={{
                      boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
                      ref={emailRef} onChange={changeState} />
                      </Col>
                      </FormGroup>

                      <FormGroup row className="text-center">
                      <Label for="password" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Contraseña </Label>
                      <Col sm={10} style={{padding:'5px' }}>
                      <input type="text" name="password" id="password" placeholder="password" className="w-80" style={{
                      boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
                      ref={passwordRef} onChange={changeState} />
                      </Col>
                      </FormGroup>

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

                    </form>

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
