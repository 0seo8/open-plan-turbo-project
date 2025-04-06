import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/components/button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
    appName: {
      control: 'text',
    },
    size: {
      control: { type: 'radio' },
      options: ['default', 'small'],
      description: '버튼 크기 (default: 335px, small: 154px)',
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'disabled'],
      description: '버튼 상태',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        alert('버튼이 클릭되었습니다!');
      }}
    >
      다음
    </Button>
  ),
  name: '기본 버튼 (Default)',
  args: {
    children: '다음',
    appName: 'web',
    type: 'button',
    style: {
      backgroundColor: '#111111',
      color: 'white',
      padding: '0.625rem 1.25rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      width: '20.9375rem',
      height: '3rem',
    },
  },
};

export const SmallButton: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        alert('버튼이 클릭되었습니다!');
      }}
    >
      다음
    </Button>
  ),
  name: '작은 버튼 (Small)',
  args: {
    children: '다음',
    appName: 'web',
    type: 'button',
    style: {
      backgroundColor: '#111111',
      color: 'white',
      padding: '0.625rem 1.25rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      width: '9.625rem', // 154px를 rem으로 변환
      height: '3rem', // 48px를 rem으로 변환
    },
  },
};

export const DisabledDefaultButton: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // 비활성화 상태에서는 클릭이 되지 않아야 함
      }}
    >
      다음
    </Button>
  ),
  name: '비활성화 기본 버튼',
  args: {
    children: '다음',
    appName: 'web',
    type: 'button',
    style: {
      backgroundColor: '#111111',
      color: 'white',
      padding: '0.625rem 1.25rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'not-allowed',
      opacity: '0.8',
      fontSize: '0.875rem',
      fontWeight: '500',
      width: '20.9375rem', // 335px를 rem으로 변환
      height: '3rem', // 48px를 rem으로 변환
    },
  },
};

export const DisabledSmallButton: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // 비활성화 상태에서는 클릭이 되지 않아야 함
      }}
    >
      다음
    </Button>
  ),
  name: '비활성화 작은 버튼',
  args: {
    children: '다음',
    appName: 'web',
    type: 'button',
    style: {
      backgroundColor: '#111111',
      color: 'white',
      padding: '0.625rem 1.25rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'not-allowed',
      opacity: '0.8',
      fontSize: '0.875rem',
      fontWeight: '500',
      width: '9.625rem',
      height: '3rem',
    },
  },
};
