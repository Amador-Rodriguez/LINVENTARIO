import React from 'react';
import {Table, TableBody,TableCell, TableContainer,TableHead, TableRow} from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import { textAlign } from '@mui/system';

const StyledTable = withStyles(()=>({
    head:{
        color :  props.font,
        background:"black",
        textAlign: 'center'
    },
    body:{
      fontSize: 14,
      
    },
  }))(TableCell);

function TableMaterial(props) {
    return (
        <TableContainer>
            <TableHead>
                <TableRow>
                    <Styledcel>Producto</Styledcel>
                    <Styledcel>Tipo de transacción</Styledcel>
                    <Styledcel>Cantidad</Styledcel>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>{
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.imagen} width="35px" height = "25px"/>{"  "}{elemento.video}</TableCell>
                        <TableCell>{elemento.tip}</TableCell>
                        <TableCell>{elemento.cantidad}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </TableContainer>
    );
}

export default TableMaterial;