import React from 'react';
import HeroCaption from './HeroCaption';

export default {
  title: 'Atom/HeroCaption',
  component: HeroCaption,
};

const Template = (args) => <HeroCaption {...args} />;
const descProps =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const Default = Template.bind({});
Default.args = {
  subProps: 'subtitle',
  titleProps: 'Example Title',
  descProps: descProps,
};
