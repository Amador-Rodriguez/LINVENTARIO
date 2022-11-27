import React, {useState, useEffect} from 'react';
import { useNavigate  } from "react-router-dom";
import { Navigate  } from "react-router-dom";
import axios from 'axios';
import Global from './../../Global';
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
  const url=Global.url;
  const navigate = useNavigate();
//item para transaccion
  const [item, setItem] = useState("");

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('item'));

  if (item) {
   setItem(item);
  }

  }, []);

  //para usuario
  const [inputs, setInput] = useState("");

  useEffect(() => {
    const input = JSON.parse(localStorage.getItem('inputs'));

  if (input) {
   setInput(input);
  }

  }, []);

  //hook
  const [transaction, setTransaction] = useState ({
    fecha: null,
    codigo: null,
    producto: null,
    cantidad: null,
    tipo: null,
    observaciones: null,
    cliente: null
    });

    const [redirect, setRedirect] = useState(false);

    let fechaRef = React.createRef();
    let cantidadRef = React.createRef();
    let tipoRef = React.createRef();
    let observacionesRef = React.createRef();

    const changeState = () =>{
      setTransaction({
          fecha: fechaRef.current.value,
          codigo: item._id,
          producto: item.nombre,
          cantidad: cantidadRef.current.value,
          tipo: tipoRef.current.value,
          observaciones: observacionesRef.current.value,
          cliente: inputs._id
      });

      console.log(transaction);

  }

  const sendData = (e) =>{

    e.preventDefault();
    changeState();
    //peticion http post
    axios.post(url + '/sales', transaction).then(res=> {
        setRedirect(true);
        console.log(res.data);
        localStorage.removeItem('item');
    },);

}

if(redirect){
  return <Navigate to="/" />;
}


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
      <form className="m-auto align-self-center" onSubmit={sendData}>
        <FormGroup row className="text-center">

        <FormGroup row className="text-center">
          <Label for="fecha" sm={2} style={{fontFamily:'Cochin'}}>Fecha </Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="date" name="fecha" id="fecha" placeholder="date placeholder" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={fechaRef} onChange={changeState}/>
          </Col>
        </FormGroup>

          <Label for="productName" sm={2} style={{fontFamily:'Cochin' }}>Producto </Label>
          
          <Col sm={10}>
          <Label for="product_Name" sm={2} style={{fontFamily:'Cochin' }}>{item.nombre}</Label>
          </Col>
        </FormGroup>
        <FormGroup row className="text-center">
        <Label for="amount" sm={2} style={{padding:'10px', fontFamily:'Cochin' }}>Cantidad</Label>
          <Col sm={10} style={{padding:'10px' }}>
            <input type="text" name="amount" id="amount" placeholder="Cantidad" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)'}}
              ref={cantidadRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="tipo"sm={2} style={{padding:'10px', fontFamily:'Cochin' }}>Tipo</Label>
        <Col sm={10} style={{padding:'10px' }}>
        <select name="tipo" id="tipo" form="tipoform" ref={tipoRef} onChange={changeState}>
          <option value="Entrada">Entrada</option>
          <option value="Salida">Salida</option>
        </select>

          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="obs" sm={2} style={{fontFamily:'Cochin'}}>Observaciones</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <input type="textarea" name="obs" id="obs" rows="5" className="w-80"
            style={{
              boxShadow:'0px 10px 21px rgba(0, 0, 0, 0.50)'}}
              ref={observacionesRef} onChange={changeState}/>
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

      </CardText>
    </CardBody>
  </Card>
        </Row>

      </Container>

    </View>

    </div>

  );

}
export default NewTransaction;