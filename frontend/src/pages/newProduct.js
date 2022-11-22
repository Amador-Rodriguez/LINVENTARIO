import React, {useState, useEffect} from 'react';
import { Navigate  } from "react-router-dom";
import axios from 'axios';
import Global from './../../Global';
import Background from './../res/rects2.png';

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
  CardBody } from 'reactstrap';


import { View } from './../components/page/view/view';
import { MAIN_PAGE } from './../utils/colors';

export const Product = () => {

  const url=Global.url;

  //hook
  const [product, setProduct] = useState ({
      nombre: null,
      codigo: null,
      descripcion: null,
      marca: null,
      categoria: null,
      subcategoria: null,
      precio: null,
      stock: null,
      min_stock: null,
      entry: null,
      proveedor: null
      });

      const [redirect, setRedirect] = useState(false);

      let nombreRef = React.createRef();
      let codigoRef = React.createRef();
      let descripcionRef = React.createRef();
      let marcaRef = React.createRef();
      let categoriaRef = React.createRef();
      let subcategoriaRef = React.createRef();
      let precioRef = React.createRef();
      let stockRef = React.createRef();
      let min_stockRef = React.createRef();
      let entryRef = React.createRef();
      let proveedorRef = React.createRef();

      const changeState = () =>{
          setProduct({
              nombre: nombreRef.current.value,
              codigo: codigoRef.current.value,
              descripcion: descripcionRef.current.value,
              marca: marcaRef.current.value,
              categoria: categoriaRef.current.value,
              subcategoria: subcategoriaRef.current.value,
              precio: precioRef.current.value,
              stock: stockRef.current.value,
              min_stock: min_stockRef.current.value,
              entry: entryRef.current.value,
              proveedor: proveedorRef.current.value
          });

          console.log(product);

      }

      const sendData = (e) =>{

        e.preventDefault();
        changeState();
        //peticion http post
        axios.post(url + '/products', product).then(res=> {
            setRedirect(true);
            console.log(res.data);
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
      width: '69rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)',
      padding: '20px'
    }}
  >

    <CardTitle tag="h2" className="text-center" style={{fontFamily:'Cochin'}}>
              Nuevo Producto
              </CardTitle>

    <CardBody className="align-items-center">
      <CardText tag="h5" className="m-auto align-self-center">
      <form className="m-auto align-self-center" onSubmit={sendData}>


        <FormGroup row className="text-center">
          <Label for="productName" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Nombre del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="text" name="productName" id="productName" placeholder="Nombre del producto" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
              ref={nombreRef} onChange={changeState} />
          </Col>
        </FormGroup>
        <FormGroup row className="text-center">
          <Label for="productCode" sm={2} style={{padding:'5px',fontFamily:'Cochin' }}>Código del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="productCode" id="productCode" placeholder="Código del producto" className="w-80" ref={codigoRef} onChange={changeState}
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}> 
              </input>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="productDesc" sm={2} style={{fontFamily:'Cochin'}}>Descripcion del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <input type="textarea" name="productDesc" id="productDesc" rows="4" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
            ref={descripcionRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="brand" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Marca</Label>
        <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="brand" id="brand" placeholder="Marca" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}
            ref={marcaRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="category" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Categoria</Label>
        <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="category" id="category" placeholder="Categoria" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}
            ref={categoriaRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="subcategory" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Subcategoria</Label>
        <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="subcategory" id="subcategory" placeholder="Subategoria" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}
            ref={subcategoriaRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="purchasePrice"sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Precio de compra</Label>
        <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="purchasePrice" id="purchasePrice" placeholder="Precio de compra" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)' }}
              ref={precioRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
        <Label for="amount" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Stock</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="amount" id="amount" placeholder="Stock" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={stockRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
        <Label for="amount" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Stock minimo</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="amountmin" id="amountmin" placeholder="Stock minimo" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={min_stockRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="productExpire" sm={2} style={{fontFamily:'Cochin'}}>Fecha de expiración</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <input type="date" name="productExpire" id="productExpire" placeholder="date placeholder" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={entryRef} onChange={changeState}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
        <Label for="provider" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Proveedor</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <input type="text" name="provider" id="provider" placeholder="Proveedor" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'}}
              ref={proveedorRef} onChange={changeState}/>
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
export default Product;