import Title from '@/components/atoms/Title/Title';
import React from 'react';
import styles from './Technology.module.css';

const Technology = ({ titleProps, subProps, itemsProps }) => {
  return (
    <div className={styles.container}>
      <Title titleProps={titleProps} subProps={subProps} />
      <ul>
        {itemsProps.map((item, i) => (
          <li key={i}>
            <div className={styles.title}>{item.title}</div>
            <div>{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technology;
