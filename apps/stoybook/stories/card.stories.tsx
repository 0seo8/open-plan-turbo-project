import { Card, CardItem, CardLabel, CardRow, CardValue } from '@repo/ui/components/card';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'rounded'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    children: (
      <div>
        <CardLabel>카드 제목</CardLabel>
        <CardValue>카드 내용을 여기에 작성합니다.</CardValue>
      </div>
    ),
  },
  render: args => (
    <div style={{ maxWidth: '400px' }}>
      <Card {...args} />
    </div>
  ),
};

export const RoundedCard: Story = {
  args: {
    variant: 'rounded',
    children: (
      <div>
        <CardLabel>라운드 카드</CardLabel>
        <CardValue>더 둥근 모서리를 가진 카드입니다.</CardValue>
      </div>
    ),
  },
  render: args => (
    <div style={{ maxWidth: '400px' }}>
      <Card {...args} />
    </div>
  ),
};

export const CardWithRow: Story = {
  args: {
    children: (
      <CardRow>
        <div>
          <CardLabel>왼쪽 항목</CardLabel>
          <CardValue>왼쪽 값</CardValue>
        </div>
        <div>
          <CardLabel>오른쪽 항목</CardLabel>
          <CardValue>오른쪽 값</CardValue>
        </div>
      </CardRow>
    ),
  },
  render: args => (
    <div style={{ maxWidth: '400px' }}>
      <Card {...args} />
    </div>
  ),
};

export const CardWithItems: Story = {
  args: {
    children: (
      <CardRow>
        <CardItem label="아이디" value="12345" />
        <CardItem label="이름" value="홍길동" />
      </CardRow>
    ),
  },
  render: args => (
    <div style={{ maxWidth: '400px' }}>
      <Card {...args} />
    </div>
  ),
};

export const CardWithLinks: Story = {
  args: {
    children: (
      <div>
        <CardItem
          label="웹사이트"
          value="https://example.com"
          isLink
          href="https://example.com"
          mb={false}
        />
        <div className="mt-3">
          <CardItem
            label="문서"
            value="https://docs.example.com"
            isLink
            href="https://docs.example.com"
            mb={false}
          />
        </div>
      </div>
    ),
  },
  render: args => (
    <div style={{ maxWidth: '400px' }}>
      <Card {...args} />
    </div>
  ),
};

export const CompleteMetadataCard: Story = {
  args: {
    children: (
      <div>
        <CardRow>
          <CardItem label="ID" value="12345" />
          <CardItem label="작성자" value="홍길동" />
        </CardRow>
        <div className="mt-3">
          <CardRow>
            <CardItem label="너비" value="1920" />
            <CardItem label="높이" value="1080" />
          </CardRow>
        </div>
        <div className="mt-3">
          <CardItem
            label="URL"
            value="https://example.com/image.jpg"
            isLink
            href="https://example.com/image.jpg"
            mb={false}
          />
        </div>
      </div>
    ),
  },
  render: args => (
    <div style={{ maxWidth: '400px' }}>
      <Card {...args} />
    </div>
  ),
};
