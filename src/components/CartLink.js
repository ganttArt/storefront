import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../style/header.css';

const CartLink = props => {
  return (
    <Link id='cart-link' to="/cart">
      Cart ({props.cart.length})
    </Link>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(CartLink);
