import React from 'react';
import HighlightItem from './HighlightItem';

export default {
  title: 'Block/HighlightItem',
  component: HighlightItem,
};

const Template = (args) => <HighlightItem {...args} />;
const highlightContent =
  '원본 데이터와 유사한 가상 데이터를 생성합니다. 원본 데이터에 대한 개인 정보 보호 및 보안 문제를 해결할 수 있고, 다양한 시나리오에서 모델을 훈련하고 검증하는 데 사용할 수 있습니다.';

export const Default = Template.bind({});
Default.args = {
  titleProps: '데이터로 미래를 연결하다.',
  contentProps: highlightContent,
  target: 'read more',
};
