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
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
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

export default function SpeedSlider({ speed, updateSpeed }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.sliderLabel} gutterBottom>
        Speed
      </Typography>
      <StyledSlider
        onChange={(e, value) => updateSpeed(e, value)}
        value={speed}
        valueLabelDisplay='off'
        aria-label='speed slider'
        marks={marks}
        step={1}
        min={1}
        max={5}
      />
    </div>
  );
}
