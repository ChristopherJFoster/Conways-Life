import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  rectangle: {
    width: '75%',
    margin: '20px auto',
  },
  section: {
    background:
      'linear-gradient(90deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 100%)',
    [theme.breakpoints.down('xl')]: {
      border: `3px solid ${theme.palette.alive.a}`,
    },
    [theme.breakpoints.down('xs')]: {
      border: `2px solid ${theme.palette.alive.a}`,
    },
    borderRadius: '4px',
    marginBottom: '20px',
  },
  title: {
    display: 'flex',
    color: [theme.palette.alive.a],
    [theme.breakpoints.down('xl')]: {
      padding: '20px 20px 0 20px',
      fontSize: '2.4em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px 0 10px',
      fontSize: '1.6em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '0.9em',
    },
  },
  text: {
    color: [theme.palette.alive.e],
    [theme.breakpoints.down('xl')]: {
      padding: '10px 20px',
      fontSize: '1.2em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5px 10px',
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '0.45em',
    },
  },
  bullet: {
    [theme.breakpoints.down('xl')]: {
      padding: '0 20px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
  link: {
    color: [theme.palette.alive.i],
    textDecoration: 'none',
  },
}));

export default function About() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.rectangle}>
      <div className={classes.section}>
        <Typography className={classes.title}>Rules of Life</Typography>
        <Typography className={classes.text}>
          Conway's Life has just a few simple rules. For each 'turn' of the Life
          (or frame of animation), each cell will stay alive, die, stay dead, or
          be reborn. The fate of each cell is based on the current state of that
          cell and the state of its direct neighbors in both the cardinal and
          diagonal directions:
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • A live cell will stay alive if it has 2 or 3 live neighbors.
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • A live cell will die if it has any number of live neighbors other
          than 2 or 3.
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • A dead cell will be reborn if it has exactly 3 live neighbors.
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • A dead cell will stay dead if it has any number of live neighbors
          other than 3.
        </Typography>
        <Typography className={classes.text}>
          From these simple rules, a surprising amount of complexity can emerge.
          Try 'School of Gliders', one of the other presets, or create your own
          starting board and see what happens.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography className={classes.title}>Turing Completeness</Typography>
        <Typography className={classes.text}>
          To be Turing complete, a programming language (or in this case, a
          system) must be able to perform the primary functions of a Turing
          machine. A Turing machine has the following features/abilities:
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • Can read data from memory.
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • Can write data to memory.
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • Can perform a simple conditional (an if/then statement).
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • Can go to (goto) another location in memory, skipping the memory
          locations along the way (necessary to perform a conditional).
        </Typography>
        <Typography className={cc([classes.text, classes.bullet])}>
          • Can access an infinite amount of memory. This feature is generally
          relaxed, as no computer has an infinite amount of memory.
        </Typography>
        <Typography className={classes.text}>
          With just these features, a Turing machine can, in theory, perform any
          calculation that any computer can perform, including those of a modern
          cellphone, GPU, or 'AI' chess opponent. Note that there are no
          limitations on how large the program needed to perform those
          calculations might be, nor on how long the Turing machine might take
          to perform them (or indeed, how much memory might be required).
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography className={classes.title}>
          Turing Completeness of Conway's Life
        </Typography>
        <Typography className={classes.text}>
          Using the rules of the Life and a grid of some size, can a
          Turing-complete machine be built? The short answer is yes. According
          to{' '}
          <a
            className={classes.link}
            href='http://www.conwaylife.com/wiki/Turing_machine'
            target='_blank'
            rel='noopener noreferrer'
          >
            LifeWiki
          </a>
          , a Turing-complete system of cells was completed on April 2, 2000 by
          Paul Rendell. Using a combination of smaller Life mechanisms, the
          system can read from and write to memory, can perform conditionals,
          and can go to a different location in memory. Since the computer that
          is running the Life system cannot have infinite, the system cannot
          either. However, as with any other system or language being assessed
          for Turing completeness, the infinite memory requirement is ignored.
        </Typography>
      </div>
    </div>
  );
}
