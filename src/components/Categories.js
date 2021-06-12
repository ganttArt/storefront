import React from 'react';
import { connect } from 'react-redux';
import { Container, Breadcrumbs, Link } from '@material-ui/core';

import { reset, filterByCategory } from '../store/products';

const Categories = props => {

  return (
    <Container>
      <h2>Browse Our Products</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" onClick={() => props.reset()}>All</Link>
        {props.categories.map(category => {
          return (
            <Link
              color="inherit"
              onClick={() => props.filterByCategory(category.normalizedName)}
            >
              {category.displayName}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories.categories
})

const mapDispatchToProps = { reset, filterByCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
