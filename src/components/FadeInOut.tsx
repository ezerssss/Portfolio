import React from 'react';
import './PlainPortfolio/PlainPortfolio.css';

interface IProps {
  show: boolean;
  children: JSX.Element;
}

const FadeInOut = (props: IProps) => {
  const { show, children } = props;
  return (
    <div
      style={show ? { display: 'block' } : { display: 'none' }}
      className={show ? 'fadeIn' : 'fadeOut'}
    >
      {children}
    </div>
  );
};

export default FadeInOut;
