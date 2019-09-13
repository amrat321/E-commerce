import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { FaBreadSlice } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallChips(props) {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
      
      <Chip
        size="small"
        icon= {props.icon}
        label={props.lable}
        clickable
        className={classes.chip}
        color="primary"
        onClick={()=>props.onclick()}
      />
     
  );
}