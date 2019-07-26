import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  },
  display: {
    color: [theme.palette.alive.c]
  }
}));

const marks = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  }
];

function valuetext(value) {
  return `${value}`;
}

export default function SpeedSlider({ speed, updateSpeed }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.display} id='discrete-slider' gutterBottom>
        Speed
      </Typography>
      <Slider
        onChange={(e, value) => updateSpeed(e, value)}
        value={speed}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider'
        valueLabelDisplay='auto'
        step={1}
        marks={marks}
        min={1}
        max={5}
      />
    </div>
  );
}
