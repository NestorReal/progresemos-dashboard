/* eslint-disable prettier/prettier */
/**
 *
 * FormCsv
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Table from 'components/Table';
// import Link from '@material-ui/core/Link';
import Notifications from 'containers/Notifications';
import GridMaterial from '@material-ui/core/Grid';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';


import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { postCsv } from './actions';
import makeSelectFormCsv from './selectors';
import reducer from './reducer';
import saga from './saga';
// const logo = require('images/logo-negro.svg');

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '15%',
  },
  link_container: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginTop: '10%',
  },
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  input: {
    display: 'none',
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function FormCsv(props) {
  const classes = useStyles();
  useInjectReducer({ key: 'formCsv', reducer });
  useInjectSaga({ key: 'formCsv', saga });

  const [csv, setCsv] = React.useState(null);

  const selectCsv = event => {
    let csvFile = [];
    for (let i = 0; i < event.target.files.length; i += 1) {
      csvFile[i] = event.target.files[i];
    }
    csvFile = csvFile.filter(image => image.name.match(/\.(xls|xlsx)$/));
    setCsv(csvFile[0]);
  };
  let dataComplete = [];
  if(Object.keys(props.formCsv.events).length !== 0){
    dataComplete = props.formCsv.events.fileJSON.data;
  }
  useEffect(() => {}, []);
  const loader = props.formCsv.isLoading ? (
    <Loader message="Procesando datos" />
  ) : null;
  return (
    <GridMaterial>
      <Notifications />
      {loader}
      {Object.keys(props.formCsv.events).length !== 0 ? 
        <Table data={dataComplete} /> : (<GridMaterial
          className={classes.container}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <GridMaterial>
            <GridMaterial
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <GridMaterial item>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" className={classes.title}>
                  Sube tu fichero
                  </Typography>
                </ThemeProvider>
              </GridMaterial>
            </GridMaterial>
            <br />
            <br />
            <GridMaterial>
              <GridMaterial
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <GridMaterial item>
                  <div className={classes.root}>
                    <input
                      accept="*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={selectCsv}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="secondary"
                        component="span"
                      >
                      Seleccionar archivo
                      </Button>
                    </label>
                    <GridMaterial container justify="center">
                      {csv !== null && csv !== undefined ? (
                        <Typography variant="body2" align="center ">
                          {csv.name}
                        </Typography>
                      ) : null}
                    </GridMaterial>
                    {csv === undefined ? (
                      <Alert variant="filled" severity="error">
                      Archivo invalido
                      </Alert>
                    ) : null}
                    {csv ? (
                      <Alert severity="success">Formato valido</Alert>
                    ) : null}
                  </div>
                </GridMaterial>
                {csv ? (
                  <GridMaterial>
                    <Button
                      className={classes.button}
                      onClick={() => props.dispatch(postCsv(csv, props.history))}
                      variant="contained"
                      color="secondary"
                      style={{ color: 'white' }}
                    >
                    Enviar
                    </Button>
                  </GridMaterial>
                ) : null}
              </GridMaterial>
            </GridMaterial>
          </GridMaterial>
        </GridMaterial>)}
    </GridMaterial>
  );
}

FormCsv.propTypes = {
  dispatch: PropTypes.func.isRequired,
  formCsv: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  formCsv: makeSelectFormCsv(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FormCsv);
