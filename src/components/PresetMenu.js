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
import LWSSs from '../presets/LWSSs';
import MWSS from '../presets/MWSSs';
import HWSS from '../presets/HWSSs';
import gosper from '../presets/gosper';
import title from '../presets/title';

const StyledMenu = withStyles(theme => ({
  paper: {
    border: '1px solid #d3d4d5',
    background: [theme.palette.dead.e],
    color: [theme.palette.alive.a]
  }
}))(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledButton = withStyles(theme => ({
  root: {
    background: theme.palette.dead.a,
    color: theme.palette.alive.a,
    border: `1px solid ${theme.palette.dead.a}`,
    '&:hover': {
      backgroundColor: theme.palette.dead.b,
      color: theme.palette.alive.i
    }
  }
}))(Button);

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.dead.a,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.alive.i
      }
    }
  }
}))(MenuItem);

export default function PresetMenu({ preset }) {
  // const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function presetHandler(e, gridSize, delay, data) {
    preset(e, gridSize, delay, data);
    handleClose();
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
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
                oscillators.delay,
                oscillators.data
              )
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Glider'
            onClick={e =>
              presetHandler(e, glider.gridSize, glider.delay, glider.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Flock of Gliders'
            onClick={e =>
              presetHandler(e, flock.gridSize, flock.delay, flock.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Lightweight Spaceships'
            onClick={e =>
              presetHandler(e, LWSSs.gridSize, LWSSs.delay, LWSSs.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Mediumweight Spaceship'
            onClick={e =>
              presetHandler(e, MWSS.gridSize, MWSS.delay, MWSS.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Heavyweight Spaceship'
            onClick={e =>
              presetHandler(e, HWSS.gridSize, HWSS.delay, HWSS.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Gosper Glider Gun'
            onClick={e =>
              presetHandler(e, gosper.gridSize, gosper.delay, gosper.data)
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            primary='Title'
            onClick={e =>
              presetHandler(e, title.gridSize, title.delay, title.data)
            }
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
