import React from 'react';
import {Table, TableBody,TableCell, TableContainer,TableHead, TableRow} from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import { textAlign } from '@mui/system';

const StyledTableCell = withStyles(()=>({
    head:{
        color: 'white',
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
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Producto</StyledTableCell>
                    <StyledTableCell>Tipo de transacción</StyledTableCell>
                    <StyledTableCell>Cantidad</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((elemento, i)=>
                    <TableRow key={i}>
                        <TableCell>{elemento.producto}</TableCell>
                        <TableCell>{elemento.tipo}</TableCell>
                        <TableCell>{elemento.cantidad}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default TableMaterial;