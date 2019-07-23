import React, { useState, useEffect, useRef } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
// import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';

import useInterval from '../utilities/useInterval';
import generate from '../utilities/generate';
import BreakpointDisplay from '../utilities/BreakpointDisplay';

import C64_Title from '../assets/SVGs/C64_Title.svg';
import Grid from './Grid';
import Controls from './Controls';
import About from './About';
import title from '../presets/title';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 auto',
    width: '90vmin',
    height: '90vmin',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleDiv: {
    width: '70%',
    margin: '20px 0 10px 0'
  },
  title: {
    width: '100%'
  },
  breakpointDisplayDiv: {
    position: 'absolute',
    padding: '0 20px',
    background: 'rgba(0%, 0%, 0%, .65)'
  }
}));

export default function Life() {
  const classes = useStyles();
  // const theme = useTheme();

  const [cellData, setCellData] = useState([]);
  const cellDataRef = useRef();
  const [gridSize, setGridSize] = useState(20);
  const [generation, setGeneration] = useState(0);
  const [delay, setDelay] = useState(50);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    preset(null, title.gridSize, title.delay, title.data);
  }, []);

  useEffect(() => {
    const tempCellData = Array(gridSize * gridSize).fill(90);
    setCellData(tempCellData);
    cellDataRef.current = tempCellData;
  }, [gridSize]);

  const toggleCellManual = (e, index) => {
    e.preventDefault();
    const tempCellData = Array.from(cellData);
    if (cellData[index] % 10 === 0) {
      tempCellData[index] = 91;
      setCellData(tempCellData);
    } else {
      tempCellData[index] = 90;
      setCellData(tempCellData);
    }
    // The following is useful in devloping presets:
    if (process.env.REACT_APP_DEV_MODE === 'on') {
      const alive = [];
      tempCellData.forEach((cell, index) => {
        if (cell % 10 === 1) {
          alive.push(index);
        }
      });
      console.log(alive);
    }
  };

  const updateGridSize = (e, value) => {
    e.preventDefault();
    setGeneration(0);
    setGridSize(value);
    return gridSize;
  };

  const updateDelay = (e, value) => {
    e.preventDefault();
    setDelay(value);
  };

  const preset = (e, gridSize, delay, data) => {
    if (e) {
      e.preventDefault();
    }
    setIsRunning(false);
    setGeneration(0);
    setGridSize(gridSize);
    setDelay(delay);
    setTimeout(() => {
      const tempCellData = cellDataRef.current.map((cell, index) => {
        if (data.includes(index)) {
          return 91;
        } else {
          return 90;
        }
      });
      setCellData(tempCellData);
    }, 100);
  };

  const random = e => {
    e.preventDefault();
    setGeneration(0);
    setCellData(
      cellData.map(cell => {
        return Math.round(Math.random()) === 1 ? 91 : 90;
      })
    );
  };

  const clear = e => {
    e.preventDefault();
    setGeneration(0);
    setCellData(
      Array.apply(null, Array(gridSize * gridSize)).map(
        Number.prototype.valueOf,
        90
      )
    );
  };

  const next = (gridSize, cellData) => {
    // const start = Date.now();
    const tempCellData = generate(gridSize, cellData);
    // const end = Date.now();
    // console.log(end - start);
    if (!tempCellData) {
      setIsRunning(false);
    } else {
      setCellData(tempCellData);
      setGeneration(generation + 1);
    }
  };

  useInterval(() => next(gridSize, cellData), isRunning ? delay : null);

  const playPause = e => {
    e.preventDefault();
    setIsRunning(!isRunning);
  };

  const step = e => {
    e.preventDefault();
    setIsRunning(false);
    next(gridSize, cellData);
  };

  return (
    <Box className={classes.container}>
      {process.env.REACT_APP_DEV_MODE === 'on' && (
        <div className={classes.breakpointDisplayDiv}>
          <BreakpointDisplay />
        </div>
      )}
      <div className={classes.titleDiv}>
        <img className={classes.title} src={C64_Title} alt="Conway's Life" />
      </div>
      <Grid
        className={classes.grid}
        cellData={cellData}
        gridSize={gridSize}
        toggleCellManual={toggleCellManual}
        isRunning={isRunning}
      />
      <Controls
        delay={delay}
        updateDelay={updateDelay}
        gridSize={gridSize}
        updateGridSize={updateGridSize}
        setDelay={setDelay}
        generation={generation}
        cellData={cellData}
        playPause={playPause}
        step={step}
        preset={preset}
        random={random}
        clear={clear}
      />
      <About />
    </Box>
  );
}
