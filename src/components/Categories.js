import React from 'react';
import { connect } from 'react-redux';
import useStyles from '../style/materialUi';
import { Container } from '@material-ui/core';

const Categories = props => {
  const classes = useStyles();

  return (
    <Container>
      <h2>Browse Our Products</h2>
      <ul>
      {props.categories.map(category => {
        return <li>{category.displayName}</li>
      })}
      </ul>
    </Container>
  )
}

const mapStateToProps = state => ({
  categories: state.products.categories,
})

export default connect(mapStateToProps)(Categories);
