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
          { title: 'Nombre', field: 'firstName' },
          { title: 'Apellidos', field: 'lastName' },
          { title: 'creditAmount', field: 'creditAmount' },
          { title: 'creditaccumulated', field: 'creditaccumulated' },
          { title: 'creditDeadline', field: 'creditDeadline' },
        ]}
        data={props.data.dataUsario}
        detailPanel={[
          {
            tooltip: 'Show Name',
            render: rowData => (
              <div
                style={{
                  fontSize: 1,
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
