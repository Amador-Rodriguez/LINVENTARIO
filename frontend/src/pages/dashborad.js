import React from 'react';
import { useNavigate  } from "react-router-dom";
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { View } from './../components/page/view/view';
import { MAIN_PAGE } from './../utils/colors';
import 'fontsource-roboto'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import { withTheme } from 'styled-components';
import CardsHeader  from "../components/dashboard/cardsHeader"
import Cards  from "../components/dashboard/cards"
import Graphics from "../components/dashboard/graphics"
import TableMaterial from './TableMaterial';

const useStyles = makeStyles(()=>({
  root:{
    flexGrow:1
  },
  iconos:{
    color:'white'
  },
  container:{
    paddingTop: '40px',
    alignItems: 'center'
  },
  containerGrafica:{
    marginTop: '40px'
  },
  containerTabla:{
    marginTop: '40px'
  }
}));

let numbers = [0.17, 19, 3, 357, 565, 1];

export const Dashboard = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  return (
    <View theme={MAIN_PAGE}  className="text-center" >

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs ={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icono = {<ImportExportIcon className={classes.iconos} />} titulo ="Nueva transacción" texto="" color="rgba(43, 77, 219, 1)" font="white"/>
          </Grid>

          <Grid item xs ={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono = {<AddBoxIcon className={classes.iconos} />} titulo ="Nuevo producto" texto="" color="rgba(43, 77, 219, 1)" font="white"/>

          </Grid>

          <Grid item xs ={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono = {<CategoryIcon className={classes.iconos} />} titulo ="Nueva categoria" texto="" color="rgba(43, 77, 219, 1)" font="white"/>

          </Grid>

          <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards titulo="Ventas" texto="245" />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards titulo="Compras" texto="46" />

            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards titulo="Stock global" texto="789" />

            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards titulo="Sin stock" texto="4" />

            </Grid>

          </Grid>

          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
            <Graphics values = {numbers}></Graphics>
          </Grid>

        </Grid>
      </div>
    </View>

  );
}
