import React from 'react';
import { View } from './../components/page/view/view';
import { ListOfCategories } from './../components/listOfCategories/index';
import { Tabmenu } from './../components/page/tabmenu/tabmenu';
import { ListOfProducts } from './../components/listOfProducts/products';
import { Container, Row } from 'reactstrap';
import { MAIN_PAGE } from '../utils/colors';

const listProducts = (
  <ListOfProducts
    products={[
      {
        name: 'Cereal Corn Flakes de Kelogs',
        price: '$34.5',
        description: 'UN RICO CEREAL',
        image: 'http://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/product/kic-3670/kicproductimage-119149_corn-flakes-300g.jpg',
      },
      {
        name: 'Cereal Zucaritas de Kelogs',
        price: '$44.5',
        description: 'UN RICO CEREAL',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIfRcPagOEDUiF1SDgEV4lyMJ0103dduvAg&usqp=CAU',
      },
      {
        name: 'Cereal Froot Loops de Kelogs',
        price: '$34.5',
        description: 'UN RICO CEREAL',
        image: 'https://http2.mlstatic.com/D_NQ_NP_731638-MLM44700516954_012021-O.jpg',
      },
    ]}
  />
);
const listCategories = (
  <ListOfCategories
    categories={[
      {
        path: 'https://www.google.com',
        emoji: '😁',
        bgColor: '#e53238',
        bgColor2: '#ff7478',
        text: 'Frutas',
      },
      {
        path: 'https://www.google.com',
        emoji: '😊',
        bgColor: '#3262e5',
        bgColor2: '#94b1ff',
        text: 'Electrodomesticos',
      },
      {
        path: 'https://www.google.com',
        emoji: '👍',
        bgColor: '#b8772c',
        bgColor2: '#ffa640',
        text: 'Autos',
      },
      {
        path: 'https://www.google.com',
        emoji: '❤️',
        bgColor: '#23be76',
        bgColor2: '#4bffab',
        text: 'Farmacia',
      },
    ]}
  />
);
export const Main = (props) => {
  return (
    <View theme={MAIN_PAGE} banner={'announcement'}>
      <Tabmenu
        tabs={['Electronica', 'Frutas y verduras', 'Farmacia']}
        content={[
          <Container>
            <Row>{listCategories}</Row>
            <Row>{listProducts}</Row>
            <br/>
            <br/>
            <br/>
            <br/>
          </Container>,
        ]}
      ></Tabmenu>
    </View>
  );
};
