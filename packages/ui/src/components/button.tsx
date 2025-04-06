'use client';

import { ReactNode, CSSProperties, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  size?: 'default' | 'sm';
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  style,
  size = 'default',
  disabled = false,
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

  const sizeStyle: CSSProperties = size === 'default' ? { width: '100%' } : { width: '9.625rem' };

  const disabledStyle: CSSProperties = disabled
    ? { cursor: 'not-allowed', opacity: 0.8 }
    : { cursor: 'pointer', opacity: 1 };

  const combinedStyle = {
    ...baseStyle,
    ...sizeStyle,
    ...disabledStyle,
    ...style,
  };

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      style={combinedStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
