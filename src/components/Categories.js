import React, { useEffect } from 'react';

import { Container, Breadcrumbs, Link } from '@material-ui/core';

import { connect } from 'react-redux';
import { reset, filterByCategory } from '../store/products';
import * as actions from '../store/actions';

const Categories = props => {

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log('category data in component', props.data);

  return (
    <Container>
      <h2>Browse Our Products</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" onClick={() => props.reset()}>All</Link>
        {props.data.results.map(category => {
          return (
            <Link
              color="inherit"
              onClick={() => {
                console.log('click, name', category.normalizedName);
                console.log('props filter', props.filterByCategory);
                return props.filterByCategory(category.normalizedName)
                }
              }
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
  data: state.data
})

const mapDispatchToProps = (dispatch, getState) => ({
  reset,
  filterByCategory,
  get: () => dispatch(actions.getRemoteData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
