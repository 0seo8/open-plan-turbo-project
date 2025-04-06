'use client';

import { ReactNode, CSSProperties, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  size?: 'default' | 'small';
  state?: 'default' | 'disabled';
}

export const Button = ({
  children,
  className,
  appName,
  onClick,
  type = 'button',
  style,
  size = 'default',
  state = 'default',
}: ButtonProps) => {
  const baseStyle: CSSProperties = {
    backgroundColor: '#111111',
    color: 'white',
    padding: '0.625rem 1.25rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sizeStyle: CSSProperties = size === 'default' ? { width: '20.9375rem' } : { width: '9.625rem' };

  const stateStyle: CSSProperties =
    state === 'disabled' ? { cursor: 'not-allowed', opacity: 0.8 } : { cursor: 'pointer', opacity: 1 };

  const combinedStyle = {
    ...baseStyle,
    ...sizeStyle,
    ...stateStyle,
    ...style,
  };

  return (
    <button
      className={className}
      onClick={onClick || (() => alert(`Hello from your ${appName} app!`))}
      type={type}
      style={combinedStyle}
      disabled={state === 'disabled'}
    >
      {children}
    </button>
  );
};
