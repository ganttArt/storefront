import React from 'react';
import { connect } from 'react-redux';
import useStyles from '../style/materialUi';
import { Container, Breadcrumbs, Link } from '@material-ui/core';

import { reset, filterByCategory } from '../store/products';

const Categories = props => {
  const classes = useStyles();

  return (
    <Container>
      <h2>Browse Our Products</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" onClick={() => props.reset()}>All</Link>
        {props.products.categories.map(category => {
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
})

const mapDispatchToProps = { reset, filterByCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
