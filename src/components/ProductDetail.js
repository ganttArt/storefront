import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '75%',
    height: '200px',
    margin: '100px',
    padding: '20px',
    textAlign: 'left',
  },
  card: {
    textAlign: 'left',
    display: 'flex'
  },
  price: {
    marginLeft: 'auto',
    order: '2',
  },
  cartContainer: {
    textAlign: '-webkit-center',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProductDetail = props => {
  const classes = useStyles();
  const { id } = useParams();
  const product = props.products.find(product => product._id === id)

  return(
    <div className={classes.cartContainer}>
      <Paper elevation={3} className={classes.root}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {product.category}
        </Typography>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ${product.price}
        </Typography>
        <Typography variant="body2" component="p">
          {product.description}
        </Typography>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products.products,
})

export default connect(mapStateToProps)(ProductDetail);