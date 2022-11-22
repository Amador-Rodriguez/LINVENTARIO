import React, { Fragment } from 'react';
import { useNavigate  } from "react-router-dom";
import { FiUser, FiClock,FiUsers,FiCheckCircle } from "react-icons/fi";
import { MdOutlineCategory,MdAutoGraph,MdOutlineMarkEmailRead,MdOutlineLocationOn,MdImportantDevices } from "react-icons/md";
import { RiComputerLine,RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineLike,AiOutlineThunderbolt,AiOutlineBarChart,AiOutlineCloudServer } from "react-icons/ai";
import {FcMultipleSmartphones} from "react-icons/fc";
import {HiDevicePhoneMobile} from "react-icons/hi2";

import {
  Container, Button, CardText, ListGroup, ListGroupItem,Row,Col,Card,CardImg,CardBody,
} from 'reactstrap';

import {
  HeroImage,HeroImage1,HeroLINVENTARIO, PChico,PGrande, HeroText,HeroTitle,HeroTextButton,HeroDescription,HeroSubTitle,HeroParrafo1,HeroParrafo2,
} from './index.css';

import { View } from './../components/page/view/view';
import { LOGIN_PAGE } from './../utils/colors';
import LinlogoS from './../res/Linventario_iconMin.png';

export const Index = () => {
  let navigate = useNavigate();
  return (
    <View theme={LOGIN_PAGE} banner={'announcement'} className="text-center">

      <Col className="text-center">
      </Col>

      <Container fluid className="h-100 m-3" >

        <Row className='flex-grow-1 justify-content-center h-100"' >

          <Col sm="4">
            <AiOutlineCloudServer style={{color: '#82ACEF', fontSize: '300px', display: 'inline'}} />
          </Col>
          <Col sm="6">
            <HeroTitle className="">TU INVENTARIO EN LÍNEA</HeroTitle>
            <HeroSubTitle className="">MANTÉN TU INVENTARIO EN ORDEN</HeroSubTitle>
            <HeroDescription className="">Con LINVENTARIO podrás administrar todos tu inventarios y activos desde cualquier lugar, ya sea en la oficina, lugar de trabajo o en el parque por medio de nuestra página web.</HeroDescription>
          </Col>

          <HeroParrafo1>LINVENTARIO ES LA NUEVA FORMA DE ADMINISTRAR TUS ACTIVOS EN LA CASA O TRABAJO</HeroParrafo1>
          <HeroParrafo2>LINVENTARIO es una nueva plataforma que te permite administrar tus inventarios y activos a través de Internet, de forma rápida, sencilla y confiable.</HeroParrafo2>
          <Col sm="4" className="text-center">
            <FiUser style={{color: '#2B4DDB', fontSize: '50px', display: 'inline'}} />
              <PGrande tag="h5">
              PROVEEDORES
              </PGrande>
              <PChico>
              Registra y administra a tus proveedores de activos. Posteriormente podrás consultar sus datos así como registrar los activos comprados a cada uno.
              </PChico>
          </Col>
          <Col sm="4" className="text-center">
            <MdOutlineCategory style={{color: '#2B4DDB', fontSize: '50px', display: 'inline'}} />
              <PGrande tag="h5">
              CATEGORÍAS
              </PGrande>
              <PChico>
              Registra todas las categorías necesarias para la administración personalizada de tu inventario de activos. Son 100% ilimitadas y se adaptan a tus necesidades.
              </PChico>
          </Col>
          <Col sm="4" className="text-center">
            <RiComputerLine style={{color: '#2B4DDB', fontSize: '50px', display: 'inline'}} />
              <PGrande tag="h5">
              ACTIVOS
              </PGrande>
              <PChico>
              Registro, edición y administración general de tu inventario de activos en línea. Activos de Hardware, Software y Genéricos adaptados a tus procesos.
              </PChico>
          </Col>

          <MdImportantDevices style={{color: '#82ACEF', fontSize: '300px', display: 'inline',marginTop:'50px', marginBottom:'50px'}} />

          <PGrande>CARACTERÍSTICAS</PGrande>

          <Col sm="4">
            <HiDevicePhoneMobile style={{color: '#82ACEF', fontSize: '300px', display: 'inline',  marginTop: '32%'}} />
          </Col>
          <Col sm="6">
            <HeroTitle className="">TU INVENTARIO EN LÍNEA</HeroTitle>
            <HeroDescription className="">
              <strong style={{fontSize: '14px',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',color: '#2B4DDB'}}>LINVENTARIO </strong>
              es una plataforma que te permite administrar tus inventarios y activos a través de Internet, de forma rápida, sencilla y segura.
            </HeroDescription>
            <HeroDescription className="">Administra tus productos, olvídate del papel y las bases de datos registradas en Excel, visualiza tus productos de una forma mas gráfica y agiliza tus inventarios sin descargar ningun software.</HeroDescription>
            <HeroDescription className="">El único requisito para utilizar
              <strong style={{fontSize: '14px',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',color: '#2B4DDB'}}> LINVENTARIO </strong>
                es contar con una conexión a Internet.
              <strong style={{fontSize: '14px',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',color: '#2B4DDB'}}> LINVENTARIO </strong>
              funciona a través de un navegador web sin importar marca, modelo o sistema operativo.
            </HeroDescription>
            <HeroDescription className="">Está dirigido a todas las personas con pequeños y medianos negocios que busquen una nueva y sencilla forma de tener un control de sus inventarios.</HeroDescription>
            <HeroDescription className=""></HeroDescription>
            <HeroDescription className=""></HeroDescription>
          </Col>

          <PGrande>CARACTERÍSTICAS ADICIONALES</PGrande>

          <Col sm="4" className="text-center" style={{marginTop:'50px'}}>
            <FiClock style={{color: '#2B4DDB', fontSize: '50px', display: 'inline', marginTop:'0px'}} />
            <PChico tag="h5">Disponible 24/7.</PChico>
            <FiUsers style={{color: '#2B4DDB', fontSize: '50px', display: 'inline',marginTop:'10px'}} />
            <PChico tag="h5">Adaptable.</PChico>
            <RiComputerLine style={{color: '#2B4DDB', fontSize: '50px', display: 'inline',marginTop:'10px'}} />
            <PChico tag="h5">Universal.</PChico>
            <AiOutlineLike style={{color: '#2B4DDB', fontSize: '50px', display: 'inline',marginTop:'10px'}} />
            <PChico tag="h5">Confiable.</PChico>
          </Col>
          <Col sm="4" className="text-center" style={{marginTop:'50px'}}>
          <CardImg alt="Linv logo" src={LinlogoS} style={{width:350,height: 300}} width="100%"/>
          </Col>
          <Col sm="4" className="text-center" style={{paddingBottom:'10%', marginTop:'50px'}}>
            <FiCheckCircle style={{color: '#2B4DDB', fontSize: '50px', display: 'inline', marginTop:'0px'}} />
            <PChico tag="h5">Fácil De Usar. </PChico>
            <MdAutoGraph style={{color: '#2B4DDB', fontSize: '50px', display: 'inline', marginTop:'10px'}} />
            <PChico tag="h5">Eficiente.</PChico>
            <AiOutlineThunderbolt style={{color: '#2B4DDB', fontSize: '50px', display: 'inline', marginTop:'10px'}} />
            <PChico tag="h5">Rápido.</PChico>
            <AiOutlineBarChart style={{color: '#2B4DDB', fontSize: '50px', display: 'inline', marginTop:'10px'}} />
            <PChico tag="h5">Y Mucho Más.</PChico>
          </Col>

          <div style={{backgroundColor:'#2B4DDB',width: '100%', color:'white',paddingBottom:'2%', borderRadius:'7px',marginBottom:'50px'}}>
            <HeroLINVENTARIO className="text-center">LINVENTARIO - INVENTARIO EN LÍNEA <br></br>
            <Button className="text-center"  color="warning"size="lg" outline> ¡Ingresar Ahora! </Button></HeroLINVENTARIO>
          </div>

          <HeroParrafo1>PRECIO</HeroParrafo1>

          <Card className="text-center" style={{width: '18%', marginTop:'30px', backgroundColor:'#82ACEF'}}>
            <CardBody>
              <PChico tag="h5" style={{marginTop:'25px'}}>GRATUITO</PChico>
              <PChico style={{marginTop:'25px'}}>Desde</PChico>
              <PGrande>$0.00 <PChico>/MXN mensual</PChico></PGrande>
            </CardBody>
            <ListGroup flush style={{marginTop:''}}>
              <ListGroupItem style={{backgroundColor:'#82ACEF'}}><PChico>Acceso WEB.</PChico></ListGroupItem>
              <ListGroupItem style={{backgroundColor:'#82ACEF'}}><PChico>Disponibilidad 24/7.</PChico></ListGroupItem>
              <ListGroupItem style={{backgroundColor:'#82ACEF'}}><PChico>Totalmente Ilimitado.</PChico></ListGroupItem>
              <ListGroupItem style={{backgroundColor:'#82ACEF'}}><Button className="text-center" color="warning" size="lg"> ¡Registrate Ahora! </Button></ListGroupItem>
            </ListGroup>
          </Card>

          <HeroParrafo1>CONTACTO</HeroParrafo1>

          <Col sm="4" className="text-center" style={{marginTop:'50px'}}>
              <MdOutlineLocationOn style={{color: '#2B4DDB', fontSize: '50px', display: 'inline'}} />

                <HeroParrafo1> Ubicación México              </HeroParrafo1>
          </Col>
          <Col sm="4" className="text-center" style={{marginTop:'50px'}}>
              <RiFacebookCircleLine style={{color: '#2B4DDB', fontSize: '50px', display: 'inline'}} />
                <HeroParrafo1>
                Facebook              </HeroParrafo1>
          </Col>
          <Col sm="4" className="text-center" style={{marginTop:'50px'}}>
              <MdOutlineMarkEmailRead style={{color: '#2B4DDB', fontSize: '50px', display: 'inline'}} />
                <HeroParrafo1>
                Correo Electrónico              </HeroParrafo1>
          </Col>

          <hr style={{marginTop:'50px', marginBottom:'10%'}}></hr>

          <div style={{backgroundColor:'#2B4DDB',width: '100%', color:'white',paddingBottom:'2%', borderRadius:'7px'}}>
            <HeroLINVENTARIO className="text-center">Contáctanos</HeroLINVENTARIO>
            <HeroLINVENTARIO>linventario@gmail.com</HeroLINVENTARIO>
          </div>

        </Row>
      </Container>
    </View>
  );
};

