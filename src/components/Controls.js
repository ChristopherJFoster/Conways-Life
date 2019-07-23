import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import withStyles from '@material-ui/styles/withStyles';
// import useTheme from '@material-ui/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PresetMenu from './PresetMenu';
import GridSizeSlider from './GridSizeSlider';
import DelaySlider from './DelaySlider';

const useStyles = makeStyles(theme => ({
  container: {
    width: '80%'
  },
  display: {
    color: [theme.palette.alive.c]
  },
  generation: {
    color: [theme.palette.alive.c],
    fontSize: '1.5em'
  },
  topRow: {
    padding: '10px 0',
    display: 'grid',
    gridTemplateColumns: '30% 35% 35%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomRow: {
    padding: '10px 0',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    justifyContent: 'space-between'
  },
  playPauseButton: {
    padding: '0 20px',
    background: theme.palette.dead.a,
    fill: theme.palette.alive.a,
    border: `3px solid ${theme.palette.alive.a}`,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.dead.b,
      fill: theme.palette.alive.i
    }
  },
  playPauseIcon: {
    [theme.breakpoints.down('xl')]: {
      width: '50%'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '30%'
    }
  }
}));

const StyledButton = withStyles(theme => ({
  root: {
    padding: '5px 15px 0 15px',
    background: theme.palette.dead.a,
    color: theme.palette.alive.a,
    border: `3px solid ${theme.palette.alive.a}`,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.dead.b,
      color: theme.palette.alive.i
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.2em'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '.8em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.6em'
    }
  }
}))(Button);

export default function Controls({
  generation,
  playPause,
  step,
  random,
  gridSize,
  delay,
  updateDelay,
  preset,
  updateGridSize,
  clear
}) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.container}>
      <div className={classes.topRow}>
        <Typography className={classes.generation}>
          Generation: {generation}
        </Typography>
        <GridSizeSlider gridSize={gridSize} updateGridSize={updateGridSize} />
        <DelaySlider delay={delay} updateDelay={updateDelay} />
      </div>
      <div className={classes.bottomRow}>
        <Button className={classes.playPauseButton} onClick={e => playPause(e)}>
          <svg
            className={classes.playPauseIcon}
            xmlns='http://www.w3.org/2000/svg'
            width='90'
            height='45'
            viewBox='0 0 90 45'
          >
            <title>playPauseIcon</title>
            <polygon points='40 20 35 20 35 15 30 15 25 15 25 10 20 10 15 10 15 5 10 5 5 5 5 0 0 0 0 45 5 45 5 40 10 40 15 40 15 35 20 35 25 35 25 30 30 30 35 30 35 25 40 25 45 25 45 20 40 20' />
            <rect x='65' width='10' height='45' />
            <rect x='80' width='10' height='45' />
          </svg>
        </Button>
        <Button className={classes.playPauseButton} onClick={e => step(e)}>
          <svg
            className={classes.playPauseIcon}
            xmlns='http://www.w3.org/2000/svg'
            width='55'
            height='45'
            viewBox='0 0 55 45'
          >
            <path d='M45 0v20H35v-5H25v-5H15V5H5V0H0v45h5v-5h10v-5h10v-5h10v-5h10v20h10V0H45z' />
          </svg>
        </Button>
        <StyledButton onClick={e => random(e)}>Random</StyledButton>
        <StyledButton onClick={e => clear(e)}>Clear</StyledButton>
        <PresetMenu preset={preset} />
      </div>
    </div>
  );
}
