import React from 'react';
import { Container, 
  CardText, 
  Button, 
  Row, 
  CardTitle, 
  CardSubtitle,
  Input, 
  Card, 
  CardBody } from 'reactstrap';


const Product = ({productData}) => {

  const {nombre, descripcion, precio, 
      } = productData

  return(
    <Card border="dark" className="align-items-center"
    
    style={{
      width: '25rem',
      height: '32rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)'
    }}
  >
    <img
    style={{
      width: '20rem',
      height: '20rem'
      
    }}
    alt="Sample"
    src="https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_medium/980028912m.jpg"
  />

<CardTitle tag="h5">
        {nombre}
    </CardTitle>

    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {descripcion}
    </CardSubtitle>

    <CardText>
    {precio}
    </CardText>
    
    <CardBody className="align-items-center">

    <Button style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Comprar</Button>
    </CardBody>
  </Card>
      
  );
}

export default Product;
/* 
export const Product = ({ name, price, description, image }) => {
  console.log('Image', image)
  return (
    <ProductCard>
      <ProductImage src={image}></ProductImage>
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <p>{description}</p>
      <ProductButton>Add to Car</ProductButton>
    </ProductCard>
  );
};*/