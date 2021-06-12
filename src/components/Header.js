import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../style/materialUi';

import CartLink from './CartLink';
import '../style/header.css';

const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link id='home-link' to="/">Storefront CMS</Link>
        </Typography>
        <nav>
          <CartLink/>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(Header);
