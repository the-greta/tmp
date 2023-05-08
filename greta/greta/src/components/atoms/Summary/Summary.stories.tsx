import React from 'react';
import Summary from './Summary';

export default {
  title: 'Atom/Summary',
  component: Summary,
};

const Template = (args) => <Summary {...args} />;
const contentProps = [
  'GRETA는 다양한 데이터 처리 및 분석 니즈에 맞춰 최적의 솔루션을 제안합니다',
  '국내 최상급 전문 인력과 우수한 기술력을 바탕으로 글로벌 시장에서 경쟁력 있는 솔루션을 제공합니다.',
];

export const Default = Template.bind({});
Default.args = {
  titleProps: 'Example Title',
  contentProps: contentProps,
};
