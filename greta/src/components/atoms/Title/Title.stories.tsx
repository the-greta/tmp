import React from 'react';
import Title from './Title';

export default {
  title: 'Atom/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleProps: 'Example Title',
  subProps: 'subtitle',
};
