import React from 'react';
import { connect } from 'react-redux';
import useStyles from '../style/materialUi';
import { Container } from '@material-ui/core';
import { reset, filterByCategory } from '../store/products';

const Products = props => {
  const classes = useStyles();

  return (
    <Container>
      <ul>
        {props.products.map(product => {
          return <li>{product.name}</li>
        })}
      </ul>
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products.products,
})

export default connect(mapStateToProps)(Products);