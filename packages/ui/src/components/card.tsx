'use client';

import React from 'react';
import { cn } from '../lib/utils';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'rounded';
  children: React.ReactNode;
};

export type CardLabelProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function CardLabel({ children, className, ...props }: CardLabelProps) {
  return (
    <h3 className={cn('text-sm font-medium text-[#111111]', className)} {...props}>
      {children}
    </h3>
  );
}

export type CardValueProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  isLink?: boolean;
  href?: string;
};

export function CardValue({ children, className, isLink, href, ...props }: CardValueProps) {
  if (isLink && href) {
    return (
      <a
        href={href}
        className={cn('text-gray-500 underline break-words', className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <p className={cn('text-gray-500', className)} {...props}>
      {children}
    </p>
  );
}

export type CardRowProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function CardRow({ children, className, ...props }: CardRowProps) {
  return (
    <div className={cn('md:flex md:justify-between', className)} {...props}>
      {children}
    </div>
  );
}

// 카드 아이템 컴포넌트
export type CardItemProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: string | number;
  isLink?: boolean;
  href?: string;
  mb?: boolean;
};

export function CardItem({
  label,
  value,
  isLink,
  href,
  mb = true,
  className,
  ...props
}: CardItemProps) {
  return (
    <div className={cn(mb ? 'mb-2 md:mb-0' : '', className)} {...props}>
      <CardLabel>{label}</CardLabel>
      <CardValue isLink={isLink} href={href}>
        {value}
      </CardValue>
    </div>
  );
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white p-4 shadow-md',
        variant === 'default' ? 'rounded-xl' : 'rounded-3xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
