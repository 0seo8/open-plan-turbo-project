'use client';

import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: 'default' | 'rounded';
}

export const Card = ({ children, className, style, variant = 'default' }: CardProps) => {
  const baseStyle: CSSProperties = {
    backgroundColor: 'white',
    padding: '1.25rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    width: '100%',
  };

  const variantStyle: CSSProperties = variant === 'default' ? { borderRadius: '0.5rem' } : { borderRadius: '1rem' };

  const combinedStyle = {
    ...baseStyle,
    ...variantStyle,
    ...style,
  };

  return (
    <div className={className} style={combinedStyle}>
      {children}
    </div>
  );
};
