import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PresetMenu from './PresetMenu';
import GridSizeSlider from './GridSizeSlider';
import SpeedSlider from './SpeedSlider';

const useStyles = makeStyles(theme => ({
  container: {
    width: '75%',
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
    justifyContent: 'space-between',
    [theme.breakpoints.down('xl')]: {
      gridTemplateColumns: 'repeat(4, minmax(80px, 80px)) minmax(180px, 180px)',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(4, minmax(50px, 50px)) minmax(130px, 130px)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(4, minmax(30px, 30px)) minmax(110px, 110px)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(4, minmax(20px, 20px)) minmax(80px, 80px)',
    },
    [theme.breakpoints.only('xxs')]: {
      // gridTemplateColumns: 'repeat(4, minmax(15px, 15px)) minmax(70px, 70px)',
    },
  },
  squareButton: {
    [theme.breakpoints.down('xl')]: {
      border: `3px solid ${theme.palette.alive.a}`,
      minWidth: '0',
      minHeight: '0',
      width: '80px',
      height: '80px',
    },
    [theme.breakpoints.down('md')]: {
      //
    },
    [theme.breakpoints.down('sm')]: {
      width: '40px',
      height: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      border: `2px solid ${theme.palette.alive.a}`,
    },
    [theme.breakpoints.only('xxs')]: {
      minWidth: '0',
      minHeight: '0',
      width: '25px',
      height: '25px',
    },
  },
  playPauseButton: {
    background: theme.palette.dead.a,
    fill: theme.palette.alive.a,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      backgroundColor: theme.palette.dead.c,
      fill: theme.palette.alive.i,
    },
    [theme.breakpoints.down('xl')]: {
      padding: '10px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '5px',
    },
    [theme.breakpoints.only('xxs')]: {
      padding: '3px',
    },
  },
  playPauseSVG: {
    width: '100%',
    height: 'auto',
  },
  randomButton: {
    background: theme.palette.dead.a,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      background: theme.palette.dead.c,
    },
  },
  randomSVG: {
    position: 'absolute',
    width: '75%',
    padding: '0',
  },
  randomSVGBack: {
    fill: theme.palette.dead.i,
  },
  randomSVGFore: {
    fill: theme.palette.alive.a,
    '&:hover': {
      fill: theme.palette.alive.i,
    },
  },
  clearButton: {
    background: theme.palette.dead.a,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      background: theme.palette.dead.c,
    },
  },
  clearSVG: {
    position: 'absolute',
    padding: '0',
    [theme.breakpoints.down('xl')]: {
      width: '55.5px',
      height: '55.5px',
    },
    [theme.breakpoints.down('md')]: {
      width: '55.5px',
      height: '55.5px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '25.5px',
      height: '25.5px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '25.5px',
      height: '25.5px',
    },
    [theme.breakpoints.only('xxs')]: {
      width: '14.25px',
      height: '14.25px',
    },
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
        <Button
          className={cc([classes.squareButton, classes.playPauseButton])}
          onClick={e => playPause(e)}
        >
          <svg
            className={classes.playPauseSVG}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
          >
            <path d='M17.78 18.89h-2.22v-2.22h-4.45v-2.23H6.67v-2.22H2.22V10H0v20h2.22v-2.22h4.45v-2.22h4.44v-2.23h4.45v-2.22H20v-2.22h-2.22zM28.89 10h4.44v20h-4.44zM35.56 10H40v20h-4.44z' />
          </svg>
        </Button>
        <Button
          className={cc([classes.squareButton, classes.playPauseButton])}
          onClick={e => step(e)}
        >
          <svg
            className={classes.playPauseSVG}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
          >
            <path d='M27.78 10v8.89h-4.45v-2.22h-4.44v-2.23h-4.45v-2.22H10V10H7.78v20H10v-2.22h4.44v-2.22h4.45v-2.23h4.44v-2.22h4.45V30h4.44V10h-4.44z' />
          </svg>
        </Button>
        <Button
          className={cc([classes.squareButton, classes.randomButton])}
          onClick={e => random(e)}
        >
          <svg
            className={cc([classes.randomSVG, classes.randomSVGBack])}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
          >
            <path d='M0 0h40v40H0z' />
          </svg>
          <svg
            className={cc([classes.randomSVG, classes.randomSVGFore])}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
          >
            <path d='M35 0h5v5h-5zM35 10h5v5h-5zM30 5h-5v10h-5v10h5v-5h10v-5h-5v-5h5V5h-5z' />
            <path d='M20 5h5V0H10v5h5v10h5V5zM15 20h-5v-5H0v5h5v5h10v-5zM0 25h5v5H0zM25 25h10v5H25zM10 30H5v5H0v5h15v-5h-5v-5zM35 40h5V30h-5v10zM5 5h5v5H5zM0 0h5v5H0zM20 25h-5v10h5v5h5V30h-5v-5z' />
          </svg>
        </Button>
        <Button
          className={cc([classes.squareButton, classes.clearButton])}
          onClick={e => clear(e)}
        >
          <svg
            className={classes.clearSVG}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
          >
            <path d='M0 0h40v40H0z' />
          </svg>
        </Button>
        <PresetMenu preset={preset} setIsRunning={setIsRunning} />
      </div>
    </div>
  );
}
