import React from 'react';
import styles from './HighlightItem.module.css';
import AppLink from '@/components/atoms/AppLink/AppLink';

const HighlightItem = ({ titleProps, contentProps, target }) => {
  return (
    <div className={styles.highlight}>
      <h3>{titleProps}</h3>
      <p>{contentProps}</p>
      {target ? (
        <AppLink href={target} type="detail">
          자세히 알아보기
        </AppLink>
      ) : null}
    </div>
  );
};

export default HighlightItem;
