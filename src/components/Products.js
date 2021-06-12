import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

import { addToCart } from '../store/cart';
import { getAllProducts } from '../store/products';
import Product from './Product';

const Products = props => {

  useEffect(() => {
    props.getAllProducts();
  }, []);

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

const mapDispatchToProps = { 
  addToCart,
  getAllProducts
};

const mapStateToProps = state => ({
  products: state.products.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
