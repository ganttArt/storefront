import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '25%',
  },
  title: {
    fontSize: 14,
  },
});

const CartItem = props => {
  const classes = useStyles();

  return(
    <Card className={classes.root} variant="outlined" width="25%">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.product.name}
          <Typography color="textSecondary">
            ${props.product.price}
          </Typography>
        </Typography>
        <Button size="small" onClick={() => alert('Sorry, in development')}>Remove</Button>
      </CardContent>
      
    </Card>
  )
}

export default CartItem;
