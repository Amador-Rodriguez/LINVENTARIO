import React, {useState, useEffect} from 'react';
import axios from "axios";
import Global from './../../Global';
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
  const [items, setItems] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const url=Global.url;

  useEffect(() => {
    const inputs = JSON.parse(localStorage.getItem('inputs'));

  if (inputs) {
   setItems(inputs);
  }

  }, []);

  useEffect(() => {
    const pwd = JSON.parse(localStorage.getItem('pass'));

  if (pwd) {
    setPwd(pwd);
  }

  }, []);

//logout

const logout = () => {
  localStorage.removeItem('inputs');
  localStorage.removeItem('pass');
  localStorage.removeItem('item');
  navigate("/");
};

//editar datos 
//hook
const [usuarioUpd, setUpdate] = useState ({
  email: null,
  name: null,
  password: null
  });

  const [redirect, setRedirect] = useState(false);

  let emailRef = React.createRef();
  let nameRef = React.createRef();
  let passwordRef = React.createRef();


const changeState = () =>{
  setUpdate({
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value
  });

  console.log(usuarioUpd);

}
/* 
const sendData = (e) =>{

  e.preventDefault();
  changeState();
  axios.put(url + '/profile/:email', usuarioUpd).then(res=> {
      console.log(res.data);
  },);

}*/

const sendData = (e) =>{

app.put(url + '/profile/:email', (req, res, next) => {
  if(nameRef == ""){
    nameRef = items.name;
  }
  if(passwordRef == ""){
    passwordRef = pwd;
  }
  if(emailRef == ""){
    emailRef = items.email;
  }
  const thing = new Model({
    email: emailRef,
    name: nameRef,
    password: passwordRef
  });
  Model.updateOne({email: req.params.email}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

}

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

            <Col style={{padding:'15px' }}>
            

            <Button className="w-80" 
            onClickCapture={logout}
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Cerrar sesión</Button>
            
            
          </Col>

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
<form onSubmit={sendData}>
<FormGroup row className="text-center">
          <Label for="name" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Nombre {items.name}</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="text" name="name" id="name" placeholder="Nombre" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={nameRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="email" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Email {items.email}</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="text" name="email" id="email" placeholder="Email" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={emailRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="password" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Contraseña {pwd}</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="password" name="password" id="password" placeholder="Contraseña" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={passwordRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="storeName" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Tipo: </Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="text" name="storeName" id="storeName" placeholder="Tipo" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              value={items.type}/>
          </Col>
        </FormGroup>



        <FormGroup check row className="text-center">
          <Col style={{padding:'5px' }}>
          <input className="w-50" style={{
                            boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
                            backgroundColor: '#6375b8',
                            borderColor:'#6375b8'
                          }}
                          type="submit" id="submit" placeholder="Guardar cambios" />
          </Col>
        </FormGroup>
        </form>
    </CardBody>

  </Card>


</Row>
 </Container>

  
    </View>
    <div style={{ paddingBottom:'20px'}}>
            <hr></hr>
            </div>
    </div>

  );

};

export default Profile;