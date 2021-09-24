import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>idUsuario</TableCell>
            <TableCell align="right">EstadoPago</TableCell>
            <TableCell align="right">MontoPago</TableCell>
            <TableCell align="right">PagoDeadline</TableCell>
            <TableCell align="right">Monto cuota individual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.idUsuario}>
              <TableCell component="th" scope="row">
                {row.idUsuario}
              </TableCell>
              <TableCell align="right">{row.EstadoPago}</TableCell>
              <TableCell align="right">{row.MontoPago}</TableCell>
              <TableCell align="right">{row.PagoDeadline}</TableCell>
              <TableCell align="right">
                {row['Monto cuota individual']}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DenseTable.propTypes = {
  data: PropTypes.object,
};
