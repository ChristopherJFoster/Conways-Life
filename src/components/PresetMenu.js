import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import useTheme from '@material-ui/styles/useTheme';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import oscillators from '../presets/oscillators';
import glider from '../presets/glider';
import flock from '../presets/flock';
import largeflock from '../presets/largeflock';
import LWSSs from '../presets/LWSSs';
import MWSSs from '../presets/MWSSs';
import HWSSs from '../presets/HWSSs';
import gosper from '../presets/gosper';
import conway from '../presets/conway';

const StyledMenu = withStyles(theme => ({
  paper: {
    background: [theme.palette.dead.a],
    color: [theme.palette.alive.a],
    border: `3px solid ${theme.palette.alive.a}`,
    borderRadius: 0,
  },
}))(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledButton = withStyles(theme => ({
  root: {
    background: theme.palette.dead.a,
    color: theme.palette.alive.a,
    borderRadius: '4px',
    '&:hover': {
      border: `3px solid ${theme.palette.alive.i}`,
      backgroundColor: theme.palette.dead.c,
      color: theme.palette.alive.i,
    },
    [theme.breakpoints.down('xl')]: {
      border: `3px solid ${theme.palette.alive.a}`,
      padding: '5px 15px 0 15px',
      fontSize: '1.2em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      border: `2px solid ${theme.palette.alive.a}`,
      padding: '3px 15px 0 15px',
      fontSize: '0.6em',
    },
  },
}))(Button);

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.dead.c,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.alive.i,
      },
    },
  },
}))(MenuItem);

export default function PresetMenu({ preset, setIsRunning }) {
  // const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function presetHandler(e, gridSize, speed, data) {
    setIsRunning(false);
    preset(e, gridSize, speed, data);
    handleClose();
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <StyledButton
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
      >
        Presets
      </StyledButton>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText
            primary='Oscillators'
            onClick={e =>
              presetHandler(
                e,
                oscillators.gridSize,
                oscillators.speed,
                oscillators.data
              )
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Glider'
            onClick={e =>
              presetHandler(e, glider.gridSize, glider.speed, glider.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Flock of Gliders'
            onClick={e =>
              presetHandler(e, flock.gridSize, flock.speed, flock.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Large Flock of Gliders'
            onClick={e =>
              presetHandler(
                e,
                largeflock.gridSize,
                largeflock.speed,
                largeflock.data
              )
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Gosper Glider Gun'
            onClick={e =>
              presetHandler(e, gosper.gridSize, gosper.speed, gosper.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Lightweight Spaceships'
            onClick={e =>
              presetHandler(e, LWSSs.gridSize, LWSSs.speed, LWSSs.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Mediumweight Spaceship'
            onClick={e =>
              presetHandler(e, MWSSs.gridSize, MWSSs.speed, MWSSs.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Heavyweight Spaceship'
            onClick={e =>
              presetHandler(e, HWSSs.gridSize, HWSSs.speed, HWSSs.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary="Conway's Life"
            onClick={e =>
              presetHandler(e, conway.gridSize, conway.speed, conway.data)
            }
          />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
