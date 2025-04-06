'use client';

import { ReactNode, CSSProperties, MouseEventHandler, useState, useCallback } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    event => {
      if (isLoading || !onClick) return;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setIsLoading(true);
      const newTimeoutId = setTimeout(() => {
        onClick(event);
        setIsLoading(false);
      }, 500);

      setTimeoutId(newTimeoutId);
    },
    [isLoading, onClick, timeoutId],
  );

  const baseStyle: CSSProperties = {
    width: size === 'default' ? '100%' : '9.625rem',
    ...style,
  };

  return (
    <button
      className={`btn-base ${className || ''}`}
      onClick={handleClick}
      type={type}
      style={baseStyle}
      disabled={disabled || isLoading}
    >
      {isLoading && <div className="loading-spinner" />}
      <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};
