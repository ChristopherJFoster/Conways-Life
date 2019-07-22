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
    border: `1px solid ${theme.palette.dead.a}`,
    '&:hover': {
      backgroundColor: theme.palette.dead.b,
      fill: theme.palette.alive.i
    }
  },
  playPauseIcon: {
    width: '50%'
  }
}));

const StyledButton = withStyles(theme => ({
  root: {
    padding: '10px 20px 0 20px',
    // paddingTop: '10px',
    fontSize: '20px',
    background: theme.palette.dead.a,
    color: theme.palette.alive.a,
    border: `1px solid ${theme.palette.dead.a}`,
    '&:hover': {
      backgroundColor: theme.palette.dead.b,
      color: theme.palette.alive.i
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
        <StyledButton onClick={e => step(e)}>Step</StyledButton>
        <StyledButton onClick={e => random(e)}>Random</StyledButton>
        <StyledButton onClick={e => clear(e)}>Clear</StyledButton>
        <PresetMenu preset={preset} />
      </div>
    </div>
  );
}
