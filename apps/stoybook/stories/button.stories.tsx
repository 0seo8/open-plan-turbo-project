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
    size: {
      control: { type: 'radio' },
      options: ['default', 'sm'],
      description: '버튼 크기 (default: 100%, sm: 9.625rem)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// 기본 버튼 (Default)
export const DefaultButton: Story = {
  render: props => (
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
    type: 'button',
  },
};

// Hover 상태 버튼
export const HoverButton: Story = {
  render: props => (
    <div>
      <style>
        {`
          .btn-hover-example {
            opacity: 0.8 !important;
            background-color: #111111 !important;
            position: relative;
          }
          
          .btn-hover-example::after {
            content: "Hover 상태";
            position: absolute;
            top: -25px;
            left: 0;
            font-size: 12px;
            color: #666;
          }
        `}
      </style>
      <div className="pt-8">
        <Button
          {...props}
          className="btn-hover-example"
          onClick={(): void => {
            alert('버튼이 클릭되었습니다!');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  ),
  name: 'Hover 상태 버튼',
  parameters: {
    docs: {
      description: {
        story: '마우스 hover 시 버튼 상태 (opacity: 80%)',
      },
    },
  },
};

// Pressed 상태 버튼
export const PressedButton: Story = {
  render: props => (
    <div>
      <style>
        {`
          .btn-pressed-example {
            opacity: 0.8 !important;
            background-color: #111111 !important;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3) !important;
            transform: translateY(1px) !important;
            position: relative;
          }
          
          .btn-pressed-example::after {
            content: "Pressed 상태";
            position: absolute;
            top: -25px;
            left: 0;
            font-size: 12px;
            color: #666;
          }
        `}
      </style>
      <div className="pt-8">
        <Button
          {...props}
          className="btn-pressed-example"
          onClick={(): void => {
            alert('버튼이 클릭되었습니다!');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  ),
  name: 'Pressed 상태 버튼',
  parameters: {
    docs: {
      description: {
        story: '버튼 클릭 시 상태 (opacity: 80%)',
      },
    },
  },
};

// 작은 버튼 (Small)
export const SmallButton: Story = {
  render: props => (
    <Button
      {...props}
      size="sm"
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
    type: 'button',
  },
};

// 비활성화 버튼
export const DisabledButton: Story = {
  render: props => (
    <Button {...props} disabled>
      다음
    </Button>
  ),
  name: '비활성화 버튼',
  args: {
    children: '다음',
    type: 'button',
  },
};

// 비활성화 작은 버튼
export const DisabledSmallButton: Story = {
  render: props => (
    <Button {...props} size="sm" disabled>
      다음
    </Button>
  ),
  name: '비활성화 작은 버튼',
  args: {
    children: '다음',
    type: 'button',
  },
};
