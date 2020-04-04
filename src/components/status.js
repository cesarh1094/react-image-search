import React from 'react';

const Status = ({ children, status = '', message = '' }) => {
  const renderProps = {
    status,
    message,
  };

  if ('function' === typeof children) {
    return children(renderProps);
  }

  return <>{message}</>;
};
export default Status;
