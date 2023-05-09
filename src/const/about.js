export const pageHeroProps = {
  titleProps: 'About Us',
  subProps: '회사 정보',
};

export const companySummaryProps = {
  titleProps: 'Company',
  subProps: '회사 개요',
  tableItems: [
    { th: '회사명', td: '주식회사 그레타' },
    { th: '공동 대표', td: '김현태, 임종호' },
    { th: '설립일', td: '2021년 11월 3일' },
  ],
};

export const teamMemberProps = {
  titleProps: 'Team Members',
  subProps: '주요 인력',
  itemsProps: [
    {
      title: '김현태',
      descs: [
        '한국신용정보원적정성평가위원회평가위원(2022-현재)',
        '삼성금융연수원자문교수(2020-현재) / 미국계리사(FSA)',
        '연세대학교통계데이터사이언스학과교수(2012-현재)',
      ],
    },
    {
      title: '임종호',
      descs: [
        '한국신용정보원적정성평가위원회평가위원(2022-현재)',
        '중앙선거여론조사심의위원회자문위원(2021-현재)',
        '연세대학교통계데이터사이언스학과교수(2018-현재)',
      ],
    },
  ],
};

export const locationProps = {
  titleProps: 'Location',
  subProps: '찾아오시는 길',
  addressProps: '서울시 중구 무교로 28 시그너스 빌딩 604호',
};
