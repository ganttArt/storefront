import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../style/materialUi';
import CartModal from './CartModal';

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Our Store
          </Typography>
        <nav>
          <CartModal cartSize={props.cart.length}/>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  cart: state.products.cart,
})

export default connect(mapStateToProps)(Header);
