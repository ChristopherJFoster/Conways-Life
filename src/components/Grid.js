import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import cc from 'classcat';

import MemoizedCell from './MemoizedCell';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    // minWidth: '100%',
    width: '100%',
    // minHeight: '100%',
    height: '100%',
  },
  borderDiv: {
    minWidth: '75%',
    width: '75%',
    minHeight: '75%',
    height: '75%',
    borderRadius: '4px',
  },
  paused: {
    [theme.breakpoints.down('xl')]: {
      border: `3px solid ${theme.palette.alive.a}`,
    },
    [theme.breakpoints.down('xs')]: {
      border: `2px solid ${theme.palette.alive.a}`,
    },
  },
  running: {
    [theme.breakpoints.down('xl')]: {
      border: `3px solid ${theme.palette.alive.i}`,
    },
    [theme.breakpoints.down('xs')]: {
      border: `2px solid ${theme.palette.alive.i}`,
    },
  },
}));

export default function Grid({
  cellData,
  gridSize,
  toggleCellManual,
  isRunning,
}) {
  const classes = useStyles();

  return (
    <div
      className={cc([
        classes.borderDiv,
        isRunning ? classes.running : classes.paused,
      ])}
    >
      <div
        className={classes.grid}
        style={{
          gridTemplate: `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`,
        }}
      >
        {cellData.map((cell, index) => {
          return (
            <MemoizedCell
              key={index}
              index={index}
              status={cell}
              toggleCellManual={toggleCellManual}
              isRunning={isRunning}
            />
          );
        })}
      </div>
    </div>
  );
}
