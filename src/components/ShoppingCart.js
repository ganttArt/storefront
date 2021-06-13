import React from 'react';
import { connect } from 'react-redux';

import { Paper, Button, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '75%',
    textAlign: '-webkit-center',
    alignItems: 'center',
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
  }
});

const ShoppingCart = props => {
  const classes = useStyles();

  let total = 0;

  return (
    <div className={classes.cartContainer}>
      <Paper elevation={3} className={classes.root}>
        <h1>Order Summary</h1>
        {props.cart.map(product => {
          total += product.price;
          return (
            <Card className={classes.card} variant="outlined" key={product._id}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                  <Typography color="textSecondary">
                    {product.description}
                  </Typography>
                </Typography>
              </CardContent>
              <CardContent className={classes.price}>
                <Typography>
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">Total</Typography>
          </CardContent>
          <CardContent className={classes.price}>
            <Typography>
              {total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </Typography>
          </CardContent>
        </Card>
        <Button size="small" onClick={() => alert('Thanks for Shopping with us')}>Place Your Order</Button>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(ShoppingCart);