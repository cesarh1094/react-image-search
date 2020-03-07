import React from 'react';

const Aux = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Aux.defaultProps = {
  className: 'wrapper',
};

export default Aux;
