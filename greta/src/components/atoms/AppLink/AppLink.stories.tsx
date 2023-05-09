import React from 'react';
import AppLink from './AppLink';

export default {
  title: 'Atom/AppLink',
  component: AppLink,
};

const Template = (args) => <AppLink {...args} />;

export const Nav = Template.bind({});
Nav.args = {
  href: './services',
  type: 'nav',
  children: 'Nav',
};

export const External = Template.bind({});
External.args = {
  href: 'https://naver.com',
  type: 'external',
  children: '네이버',
};

export const Detail = Template.bind({});
Detail.args = {
  href: './services',
  type: 'detail',
  children: 'read more',
};
