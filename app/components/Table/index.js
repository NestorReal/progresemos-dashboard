/**
 *
 * Table
 *
 */

import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import SecondTable from 'components/SecondTable';
function Table(props) {
  return (
    <div>
      <MaterialTable
        title="Usuarios"
        columns={[
          { title: 'Id', field: 'idUsuario' },
          { title: 'Nombre', field: 'Nombre' },
          { title: 'Apellidos', field: 'Apellido' },
          { title: 'Fecha de nacimiento', field: 'fechanacimiento' },
          { title: 'Grupo', field: 'Grupo' },
          { title: 'Nombre grupo', field: 'nombreGrupo' },
          { title: 'numeroTelefono', field: 'numeroTelefono' },
          { title: 'numeroTelefono', field: 'numeroTelefono' },
          { title: 'IDREGION', field: 'IDREGION' },
          { title: 'Plazos', field: 'Plazos' },
          { title: 'creditoCuota', field: 'creditoCuota' },
          { title: 'MontoPagareGrupal', field: 'MontoPagareGrupal' },
          { title: 'creditoDesembolso', field: 'creditoDesembolso' },
          { title: 'creditoFinaliza', field: 'creditoFinaliza' },
          {
            title: 'creditoSaldoPagareGrupal',
            field: 'creditoSaldoPagareGrupal',
          },
          { title: 'creditoTotalGrupal', field: 'creditoTotalGrupal' },
          { title: 'montoPagare', field: 'montoPagare' },
          { title: 'pagadoPagare', field: 'pagadoPagare' },
          { title: 'saldoPagare', field: 'saldoPagare' },
        ]}
        data={props.data.dataUsuario}
        detailPanel={[
          {
            tooltip: 'Show Name',
            render: rowData => (
              <div
                style={{
                  fontSize: 2,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#43A047',
                }}
              >
                <SecondTable
                  data={props.data.dataPagos.filter(
                    data => data.idUsuario === rowData.idUsuario,
                  )}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.object,
};

export default Table;
