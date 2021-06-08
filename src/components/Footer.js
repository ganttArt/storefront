import React from 'react';
import useStyles from '../style/materialUi';
import { Container } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <Container>
      &copy; Chris Gantt 2021
    </Container>
  )
}

export default Footer;