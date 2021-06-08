import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import useStyles from '../style/materialUi';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Our Store
          </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Cart (0)
            </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
