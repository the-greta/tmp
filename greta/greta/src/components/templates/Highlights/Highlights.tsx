import Title from '@/components/atoms/Title/Title';
import HighlightItem from '@/components/blocks/HighlightItem/HighlightItem';
import React from 'react';
import styles from './Highlights.module.css';

interface item {
  title: string;
  content: string;
  target?: string;
}

type Props = {
  titleProps: string;
  subProps: string;
  itemsProps: item[];
};

const Highlights = ({ titleProps, subProps, itemsProps }: Props) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Title titleProps={titleProps} subProps={subProps} />
        <div className={styles.content}>
          {itemsProps.map((item, i) => (
            <HighlightItem
              titleProps={item.title}
              contentProps={item.content}
              target={item.target}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
