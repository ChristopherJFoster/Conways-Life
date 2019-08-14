import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';

const useStyles = makeStyles(theme => ({
  cell: {
    width: '100%',
    height: '100%',
  },
}));

const MemoizedCell = React.memo(function Cell({
  index,
  status,
  toggleCellManual,
  isRunning,
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      onClick={isRunning ? null : e => toggleCellManual(e, index)}
      style={{
        background:
          status === 11
            ? [theme.palette.alive.a]
            : status === 21
            ? [theme.palette.alive.b]
            : status === 31
            ? [theme.palette.alive.c]
            : status === 41
            ? [theme.palette.alive.d]
            : status === 51
            ? [theme.palette.alive.e]
            : status === 61
            ? [theme.palette.alive.f]
            : status === 71
            ? [theme.palette.alive.g]
            : status === 81
            ? [theme.palette.alive.h]
            : status === 91
            ? [theme.palette.alive.i]
            : status === 10
            ? [theme.palette.dead.a]
            : status === 20
            ? [theme.palette.dead.b]
            : status === 30
            ? [theme.palette.dead.c]
            : status === 40
            ? [theme.palette.dead.d]
            : status === 50
            ? [theme.palette.dead.e]
            : status === 60
            ? [theme.palette.dead.f]
            : status === 70
            ? [theme.palette.dead.g]
            : status === 80
            ? [theme.palette.dead.h]
            : status === 90
            ? [theme.palette.dead.i]
            : null,
      }}
      className={classes.cell}
    />
  );
});

export default MemoizedCell;
