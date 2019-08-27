import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 150,
    [theme.breakpoints.down('xl')]: {
      padding: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 24px',
    },
  },
  margin: {
    height: theme.spacing(3),
  },
  sliderLabel: {
    color: theme.palette.alive.a,
  },
}));

const marks = [
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
  {
    value: 30,
    label: 30,
  },
  {
    value: 40,
    label: 40,
  },
  {
    value: 50,
    label: 50,
  },
];

const StyledSlider = withStyles(theme => ({
  root: {
    color: theme.palette.alive.a,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    borderRadius: '3px',
    backgroundColor: theme.palette.dead.a,
    border: `2px solid ${theme.palette.alive.a}`,
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
      backgroundColor: theme.palette.dead.c,
      border: `2px solid ${theme.palette.alive.i}`,
    },
  },
  active: {
    border: `2px solid ${theme.palette.alive.i}`,
  },
  track: {
    height: 8,
    borderRadius: 0,
  },
  rail: {
    height: 8,
    borderRadius: 0,
  },
  mark: {
    display: 'none',
  },
  markLabel: {
    paddingTop: '10px',
    color: theme.palette.alive.a,
  },
}))(Slider);

export default function SpeedSlider({ gridSize, updateGridSize }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.sliderLabel} gutterBottom>
        Grid Size
      </Typography>
      <StyledSlider
        onChange={(e, value) => updateGridSize(e, value)}
        value={gridSize}
        valueLabelDisplay='off'
        aria-label='grid size slider'
        marks={marks}
        step={10}
        min={10}
        max={50}
      />
    </div>
  );
}
