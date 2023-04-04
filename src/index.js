import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/redux';


import { PureInboxScreen } from './InboxScreen';

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
};

const Template = (args) => (
  <Provider store={store}>
    <PureInboxScreen {...args} />
  </Provider>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};
