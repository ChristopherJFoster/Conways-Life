import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
// import useTheme from '@material-ui/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PresetMenu from './PresetMenu';
import GridSizeSlider from './GridSizeSlider';
import DelaySlider from './DelaySlider';
import playPauseIcon from '../assets/SVGs/playPauseIcon.svg';

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
    gridTemplateColumns: '15% 10% 10% 10% 15% 10% ',
    justifyContent: 'space-between'
  },
  button: {
    background: [theme.palette.dead.a],
    color: [theme.palette.alive.a],
    border: `1px solid ${[theme.palette.alive.a]}`
  },
  playPauseIcon: {
    width: '50%',
    padding: '10%'
  }
}));

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
        <Button
          className={classes.button}
          size='small'
          onClick={e => playPause(e)}
        >
          <img
            className={classes.playPauseIcon}
            src={playPauseIcon}
            alt='Play / Pause'
          />
        </Button>
        <Button className={classes.button} size='small' onClick={e => step(e)}>
          Step
        </Button>
        <Button
          className={classes.button}
          size='small'
          onClick={e => random(e)}
        >
          Random
        </Button>
        <Button className={classes.button} size='small' onClick={e => clear(e)}>
          Clear
        </Button>
        <PresetMenu preset={preset} />
      </div>
    </div>
  );
}
