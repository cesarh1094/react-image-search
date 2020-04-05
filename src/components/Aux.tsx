import React, { FC } from 'react';

interface Aux {
  className?: string;
}

const Aux: FC<Aux> = ({ children, className='' }) => {
  return <div className={className}>{children}</div>;
};

export default Aux;
