import React from 'react';
import PropTypes from 'prop-types';

export const Sum = props => (
  <p>
    {
      `Sum of ${props.a} and ${props.b} is ${props.a + props.b}`
    }
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
