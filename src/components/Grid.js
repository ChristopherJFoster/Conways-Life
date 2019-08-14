import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import classNames from 'classnames';

import MemoizedCell from './MemoizedCell';

const useStyles = makeStyles(theme => ({
  grid: {
    border: `3px solid ${theme.palette.alive.a}`,
    display: 'grid',
    minWidth: '75%',
    width: '75%',
    minHeight: '75%',
    height: '75%',
  },
  paused: {
    border: `3px solid ${theme.palette.alive.a}`,
  },
  running: {
    border: `3px solid ${theme.palette.alive.i}`,
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
      className={classNames(
        classes.grid,
        isRunning ? classes.running : classes.paused
      )}
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
  );
}
