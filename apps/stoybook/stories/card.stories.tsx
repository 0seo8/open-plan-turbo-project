import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/components/card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "rounded"],
      description: "카드 모서리 둥글기 (default: 0.5rem, rounded: 1rem)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  render: (props) => (
    <Card {...props}>
      <h3 className="text-lg font-medium">카드 제목</h3>
      <p className="mt-2 text-gray-600">
        카드 내용입니다. 다양한 정보를 표시할 수 있습니다.
      </p>
    </Card>
  ),
  name: "기본 카드 (Default)",
  args: {
    variant: "default",
    style: {
      maxWidth: "400px",
    },
  },
};

export const RoundedCard: Story = {
  render: (props) => (
    <Card {...props}>
      <h3 className="text-lg font-medium">둥근 카드 제목</h3>
      <p className="mt-2 text-gray-600">더 둥근 모서리를 가진 카드입니다.</p>
    </Card>
  ),
  name: "둥근 카드 (Rounded)",
  args: {
    variant: "rounded",
    style: {
      maxWidth: "400px",
    },
  },
};

export const MetadataCard: Story = {
  render: (props) => (
    <Card {...props}>
      <div className="space-y-4">
        <div>
          <p className="text-gray-500 text-sm font-medium">id</p>
          <p className="font-medium">0</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm font-medium">author</p>
          <p className="font-medium">Alejandro Escamilla</p>
        </div>
      </div>
    </Card>
  ),
  name: "메타데이터 카드",
  args: {
    variant: "rounded",
    style: {
      maxWidth: "400px",
    },
  },
};

export const LinkCard: Story = {
  render: (props) => (
    <Card {...props}>
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">url</p>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all text-sm"
        >
          https://example.com
        </a>
      </div>
    </Card>
  ),
  name: "링크 카드",
  args: {
    variant: "rounded",
    style: {
      maxWidth: "400px",
    },
  },
};
