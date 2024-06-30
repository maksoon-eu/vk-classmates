// src/components/Counter/Counter.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Counter, { CounterProps } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    style: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [8, 12, 16, 20, 24],
      },
    },
    stroke: {
      control: 'boolean',
    },
    quantity: {
      control: 'text',
    },
    pulse: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<CounterProps> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
  size: 16,
  stroke: true,
  quantity: '5',
  pulse: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  size: 16,
  stroke: true,
  quantity: '99+',
  pulse: false,
};

export const LargeQuantity = Template.bind({});
LargeQuantity.args = {
  style: 'primary',
  size: 24,
  stroke: true,
  quantity: '1234',
  pulse: false,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  style: 'secondary',
  size: 8,
  stroke: false,
  quantity: '1',
  pulse: true,
};

export const WithoutStroke = Template.bind({});
WithoutStroke.args = {
  style: 'primary',
  size: 16,
  stroke: false,
  quantity: '25',
  pulse: true,
};