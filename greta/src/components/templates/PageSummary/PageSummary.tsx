import Summary from '@/components/atoms/Summary/Summary';
import React from 'react';
import styles from './PageSummary.module.css';

type Props = {
  titleProps: string;
  contentProps: string[];
};

const PageSummary = ({ titleProps, contentProps }: Props) => {
  return (
    <div className={styles.container}>
      <Summary titleProps={titleProps} contentProps={contentProps} />
    </div>
  );
};

export default PageSummary;
