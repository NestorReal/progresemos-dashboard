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
          { title: 'Grupo', field: 'Grupo' },
          { title: 'Nombre grupo', field: 'nombre grupo' },
          { title: 'numeroTelefono', field: 'numeroTelefono' },
          { title: 'creditoAcumulado', field: 'creditoAcumulado' },
          { title: 'creditoCuota', field: 'creditoCuota' },
          { title: 'creditoDesembolso', field: 'creditoDesembolso' },
          { title: 'creditoFinaliza', field: 'creditoFinaliza' },
          { title: 'creditoTotal', field: 'creditoTotal' },
          { title: 'creditoDesembolso', field: 'creditoDesembolso' },
        ]}
        data={props.data.dataUsario}
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
