import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
// import useTheme from '@material-ui/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PresetMenu from './PresetMenu';
import GridSizeSlider from './GridSizeSlider';
import SpeedSlider from './SpeedSlider';

const useStyles = makeStyles(theme => ({
  container: {
    width: '70%',
  },
  display: {
    color: [theme.palette.alive.c],
  },
  topRow: {
    padding: '10px 0',
    display: 'grid',
    gridTemplateColumns: '40% 30% 30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  generation: {
    color: [theme.palette.alive.c],
    fontSize: '1.5em',
  },
  genData: {
    color: theme.palette.alive.i,
  },
  bottomRow: {
    padding: '10px 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(45px, 45px)) minmax(140px, 140px)',
    justifyContent: 'space-between',
  },
  playPauseButton: {
    background: theme.palette.dead.a,
    fill: theme.palette.alive.a,
    border: `3px solid ${theme.palette.alive.a}`,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      backgroundColor: theme.palette.dead.c,
      fill: theme.palette.alive.i,
    },
  },
  randomButton: {
    background: theme.palette.dead.a,
    border: `3px solid ${theme.palette.alive.a}`,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      background: theme.palette.dead.c,
    },
  },
  randomIconBack: {
    position: 'absolute',
    fill: theme.palette.dead.i,
  },
  randomIconFore: {
    padding: '13px',
    position: 'absolute',
    fill: theme.palette.alive.a,
    '&:hover': {
      fill: theme.palette.alive.i,
    },
  },
  clearButton: {
    background: theme.palette.dead.a,
    border: `3px solid ${theme.palette.alive.a}`,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      background: theme.palette.dead.c,
    },
  },
  clearIconBack: {
    fill: theme.palette.dead.i,
  },
}));

export default function Controls({
  generation,
  playPause,
  step,
  random,
  gridSize,
  speed,
  updateSpeed,
  preset,
  updateGridSize,
  clear,
  setIsRunning,
}) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.container}>
      <div className={classes.topRow}>
        <Typography className={classes.generation}>
          Generation: <span className={classes.genData}>{generation}</span>
        </Typography>
        <GridSizeSlider gridSize={gridSize} updateGridSize={updateGridSize} />
        <SpeedSlider speed={speed} updateSpeed={updateSpeed} />
      </div>
      <div className={classes.bottomRow}>
        <Button className={classes.playPauseButton} onClick={e => playPause(e)}>
          <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
            <path d='M17.78 18.89h-2.22v-2.22h-4.45v-2.23H6.67v-2.22H2.22V10H0v20h2.22v-2.22h4.45v-2.22h4.44v-2.23h4.45v-2.22H20v-2.22h-2.22zM28.89 10h4.44v20h-4.44zM35.56 10H40v20h-4.44z' />
          </svg>
        </Button>
        <Button className={classes.playPauseButton} onClick={e => step(e)}>
          <svg
            className={classes.stepIcon}
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
          >
            <path d='M27.78 10v8.89h-4.45v-2.22h-4.44v-2.23h-4.45v-2.22H10V10H7.78v20H10v-2.22h4.44v-2.22h4.45v-2.23h4.44v-2.22h4.45V30h4.44V10h-4.44z' />
          </svg>
        </Button>
        <Button className={classes.randomButton} onClick={e => random(e)}>
          <svg
            className={classes.randomIconBack}
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
          >
            <path d='M0 0h40v40H0z' />
          </svg>
          <svg
            className={classes.randomIconFore}
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
          >
            <path d='M35 0h5v5h-5zM35 10h5v5h-5zM30 5h-5v10h-5v10h5v-5h10v-5h-5v-5h5V5h-5z' />
            <path d='M20 5h5V0H10v5h5v10h5V5zM15 20h-5v-5H0v5h5v5h10v-5zM0 25h5v5H0zM25 25h10v5H25zM10 30H5v5H0v5h15v-5h-5v-5zM35 40h5V30h-5v10zM5 5h5v5H5zM0 0h5v5H0zM20 25h-5v10h5v5h5V30h-5v-5z' />
          </svg>
        </Button>
        <Button className={classes.clearButton} onClick={e => clear(e)}>
          <svg
            className={classes.clearButtonIcon}
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
          >
            <path d='M0 0h40v40H0z' />
          </svg>
        </Button>
        <PresetMenu preset={preset} setIsRunning={setIsRunning} />
      </div>
    </div>
  );
}
