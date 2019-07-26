import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
// import useTheme from '@material-ui/styles/useTheme';

import MemoizedCell from './MemoizedCell';

const useStyles = makeStyles(theme => ({
  gridPaused: {
    border: `3px solid ${theme.palette.alive.a}`,
    width: '75%',
    height: '75%',
    display: 'grid'
  },
  gridRunning: {
    border: `3px solid ${theme.palette.alive.i}`,
    width: '75%',
    height: '75%',
    display: 'grid'
  }
}));

export default function Grid({
  cellData,
  gridSize,
  toggleCellManual,
  isRunning
}) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div
      className={isRunning ? classes.gridRunning : classes.gridPaused}
      style={{
        gridTemplate: `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`
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
