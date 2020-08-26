import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBarMenu() {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <div>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                  <MenuIcon />
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>
                      <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/areaOfTriangle">
                        Get the Area Of A Triangle
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/stringRepeat">
                        See a String Repeat
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/hoursMinutesToSeconds">
                        Convert Minutes and Hours into Seconds
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/maximumEdge">
                        Get the highest maximum edge
                      </Link>
                    </MenuItem>
                </Menu>
            </div>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Conversions and Math
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}