// Button.stories.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import ButtonSizes from './Button';

export default {
  component: ButtonSizes,
  title: 'Example/Button',
  decorators: [(Story) => <ThemeProvider theme={theme}><Story /></ThemeProvider>],
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'inherit', 'primary', 'secondary'] },
    },
    variant: {
      control: { type: 'select', options: ['text', 'contained', 'outlined'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

const Template = (args) => <ButtonSizes {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  variant: 'text',
  size: 'medium',
};
