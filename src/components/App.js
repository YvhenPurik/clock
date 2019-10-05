import React from 'react';
import './App.css';
import Clock from './Clock';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));





function App() {
  const classes = useStyles();
  return (
    <div className="">
      <Clock city={'London'} />
      <Clock city={'Kiev'} />
    </div>


  );
}

export default App;
