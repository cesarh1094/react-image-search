import React, { ReactChildren } from 'react';

type children = (renderProps: RenderProps) => JSX.Element | null;

interface StatusProps {
  status?: string | null;
  message?: string;
  children?: ReactChildren | children;
}

interface RenderProps {
  status: string | null;
  message: string;
}

const Status: React.FC<StatusProps> = ({
  children,
  status = '',
  message = '',
}) => {
  const renderProps: RenderProps = {
    status,
    message,
  };

  if ('function' === typeof children) {
    return children(renderProps);
  }

  return <>{message}</>;
};
export default Status;
