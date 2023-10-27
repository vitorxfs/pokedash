import type { Meta, StoryObj } from '@storybook/react';

import * as Drawer from '.';

const meta = {
  component: Drawer.Root,
  title: 'Components/Drawer',
  tags: ['autodocs'],
  parameters: {
    // // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Drawer.Content>;

export default meta;
type Story = StoryObj<{
  side: 'left' | 'right';
}>;

export const Primary: Story = {
  args: {
    side: 'left'
  },
  render: ({ side }) => (
    <Drawer.Root>
      <Drawer.Trigger>
        <button>Open</button>
      </Drawer.Trigger>
      <Drawer.Content side={side}>
        <Drawer.Close>
          <button>Close</button>
        </Drawer.Close>
        <p>Hello World</p>
      </Drawer.Content>
    </Drawer.Root>
  )
};
