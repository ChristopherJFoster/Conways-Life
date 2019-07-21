import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  breakpointText: {
    color: 'white',
    [theme.breakpoints.only('xl')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '2em'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.5em'
    }
  }
}));

export default function BreakpointDisplay() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      {useMediaQuery(theme.breakpoints.only('xs')) && (
        <Typography className={classes.breakpointText}>
          xs: {theme.breakpoints.values.xs}px - {theme.breakpoints.values.sm}px
        </Typography>
      )}
      {useMediaQuery(theme.breakpoints.only('sm')) && (
        <Typography className={classes.breakpointText}>
          sm: {theme.breakpoints.values.sm}px - {theme.breakpoints.values.md}px
        </Typography>
      )}
      {useMediaQuery(theme.breakpoints.only('md')) && (
        <Typography className={classes.breakpointText}>
          md: {theme.breakpoints.values.md}px - {theme.breakpoints.values.lg}px
        </Typography>
      )}
      {useMediaQuery(theme.breakpoints.only('lg')) && (
        <Typography className={classes.breakpointText}>
          lg: {theme.breakpoints.values.lg}px - {theme.breakpoints.values.xl}px
        </Typography>
      )}
      {useMediaQuery(theme.breakpoints.only('xl')) && (
        <Typography className={classes.breakpointText}>
          xl: > {theme.breakpoints.values.xl}px
        </Typography>
      )}
    </div>
  );
}
