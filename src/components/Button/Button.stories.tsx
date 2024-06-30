// src/components/Button/Button.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
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
        options: [28, 36, 56],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['enabled', 'pressed', 'loading', 'disabled'],
      },
    },
    counter: {
      control: 'boolean',
    },
    focused: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
  size: 36,
  state: 'enabled',
  counter: false,
  focused: false,
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  size: 36,
  state: 'enabled',
  counter: true,
  focused: false,
  children: 'Secondary Button',
};

export const Loading = Template.bind({});
Loading.args = {
  style: 'primary',
  size: 36,
  state: 'loading',
  counter: false,
  focused: false,
  children: 'Loading Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  style: 'secondary',
  size: 36,
  state: 'disabled',
  counter: false,
  focused: false,
  children: 'Disabled Button',
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  style: 'primary',
  size: 36,
  state: 'enabled',
  counter: true,
  focused: false,
  children: 'Button with Counter',
};

export const Focused = Template.bind({});
Focused.args = {
  style: 'primary',
  size: 36,
  state: 'enabled',
  counter: false,
  focused: true,
  children: 'Focused Button',
};