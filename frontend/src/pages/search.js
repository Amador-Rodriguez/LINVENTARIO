import React, {useState, useEffect} from 'react'; //view product
import axios from 'axios';
import Global from './../../Global';
import Product from './../components/product/product';

import { Container, 
  CardText, 
  Button, 
  Row, 
  CardTitle, 
  CardSubtitle,
  Input, 
  Card, 
  CardBody } from 'reactstrap';


import { View } from './../components/page/view/view';
import { MAIN_PAGE } from './../utils/colors';

export const Products = () => {
  //enseñar todos los productos ///////////////////////////////////
  const [data, setProducts] = useState([]);

    const url = Global.url;
/* 
    useEffect(() => {
        getProducts();
        console.log(data);

    }, [data.length]);*/

    //obtenemos todos los productos
    const getProducts = async() =>{
      await axios.get(url + '/products').then(res =>{
            setProducts(res.data.data);
            setCardProducts(res.data.data);
        }).catch(error=>{
          console.log(error);
        })

    }
/////////////////////////////////////////////////////////////////////
    //busqueda de prods
    const [busqueda, setBusqueda]= useState("");
    const [cardProducts, setCardProducts]= useState([]);

    const handleChange=e=>{
      setBusqueda(e.target.value);
      filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
      var resultadosBusqueda=cardProducts.filter((elemento)=>{
        if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.marca.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return elemento;
        }
      });
      setProducts(resultadosBusqueda);
    }

    useEffect(()=>{
      getProducts();
      },[])
  

  return (
    <div  >
      
    <View theme={MAIN_PAGE} banner={''} className="text-center" >

    <Container fluid  style={{padding: '40px'}}>
<Row className="m-auto align-self-center" style={{padding: '40px'}}>


    <Card border="dark" 
    
    style={{
      width: '122rem',
      height: '5rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)'
    }}
  >
    <CardBody className="align-items-center">
      <div class="d-flex bd-highlight">

      <div class="p-2 w-100 bd-highlight">
        <Input type="text" name="productName" id="productName" placeholder="Nombre o marca del producto" value={busqueda} onChange={handleChange}/>
            </div>

      <div class="p-2 flex-shrink-1 bd-highlight">
      <Button style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Buscar</Button>
      </div>
      </div>
    </CardBody>
  </Card>


<div className="align-items-center" style={{fontFamily:'Cochin', paddingTop:'20px'}}>
  <Row className="text-center">
            <h1 className="text-center">Resultados</h1>
            </Row>

            
</div>

<div style={{ paddingBottom:'20px'}}>
            <hr></hr>
            </div>

            <div style={{paddingLeft: '5px', alignItems:'left'}}>
  

                        

            {data && 
           data.map((product,i)=>(
                                    <Product 
                                    key={i}
                                    id={i}
                                    productData={product}
                                    />

                                    ))}

                        
                    

  
  
 
</div>
</Row>
 </Container>

  
    </View>

    </div>

  );

};
export default Products;