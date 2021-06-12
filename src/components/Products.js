import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

import { addToCart } from '../store/cart';
import Product from './Product';

const Products = props => {
  return (
    <Container>
      <ul>
        {props.products.map(product => {
          return <Product product={product} addToCart={props.addToCart}/>
        })}
      </ul>
    </Container>
  )
}

const mapDispatchToProps = { addToCart };

const mapStateToProps = state => ({
  products: state.products.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
